from fastapi import APIRouter
from pydantic import BaseModel
from typing import List, Dict, Any
from datetime import datetime
import csv

router = APIRouter()

class Interaction(BaseModel):
    interaction_id: str
    start_time: datetime
    end_time: datetime
    user_phone: str
    steps: List[Dict[str, Any]]
    outcome: str  # "completed", "transferred", "abandoned"
    sentiment_score: float
    issues_encountered: List[str]

interactions_db = []

@router.post("/interactions")
async def log_interaction(interaction: Interaction):
    """Log a completed interaction"""
    interactions_db.append(interaction.dict())
    return {"status": "logged"}

@router.get("/interactions/report")
async def generate_report(start_date: str, end_date: str):
    """Generate a post-call analysis report"""
    report = {
        "total_interactions": 0,
        "completed": 0,
        "transferred": 0,
        "abandoned": 0,
        "common_issues": {},
        "average_sentiment": 0,
        "interactions": []
    }
    
    start_date = datetime.strptime(start_date, "%Y-%m-%d")
    end_date = datetime.strptime(end_date, "%Y-%m-%d")
    
    filtered = [
        i for i in interactions_db
        if start_date <= datetime.strptime(i["start_time"], "%Y-%m-%dT%H:%M:%S") <= end_date
    ]
    
    if not filtered:
        return report
    
    report["total_interactions"] = len(filtered)
    report["completed"] = len([i for i in filtered if i["outcome"] == "completed"])
    report["transferred"] = len([i for i in filtered if i["outcome"] == "transferred"])
    report["abandoned"] = len([i for i in filtered if i["outcome"] == "abandoned"])
    
    # Calculate average sentiment
    sentiments = [i["sentiment_score"] for i in filtered]
    report["average_sentiment"] = sum(sentiments) / len(sentiments)
    
    # Count common issues
    for i in filtered:
        for issue in i["issues_encountered"]:
            report["common_issues"][issue] = report["common_issues"].get(issue, 0) + 1
    
    # Generate CSV report
    csv_filename = f"post_call_report_{start_date.date()}_to_{end_date.date()}.csv"
    with open(csv_filename, "w", newline="") as csvfile:
        fieldnames = [
            "interaction_id", "user_phone", "start_time", "end_time", 
            "duration_seconds", "outcome", "sentiment_score", "steps_count"
        ]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        
        for i in filtered:
            duration = (
                datetime.strptime(i["end_time"], "%Y-%m-%dT%H:%M:%S") - 
                datetime.strptime(i["start_time"], "%Y-%m-%dT%H:%M:%S")
            ).total_seconds()
            
            writer.writerow({
                "interaction_id": i["interaction_id"],
                "user_phone": i["user_phone"],
                "start_time": i["start_time"],
                "end_time": i["end_time"],
                "duration_seconds": duration,
                "outcome": i["outcome"],
                "sentiment_score": i["sentiment_score"],
                "steps_count": len(i["steps"])
            })
    
    report["csv_report"] = csv_filename
    return report