from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Dict, List
import json

router = APIRouter()

# Load knowledge base from JSON
with open("knowledge_base.json", "r") as f:
    knowledge_base = json.load(f)

class FAQRequest(BaseModel):
    question: str
    location: str  # "delhi" or "bangalore"

@router.post("/faq")
async def get_faq_answer(request: FAQRequest):
    """
    Retrieve FAQ answer based on question and location
    """
    question = request.question.lower()
    location = request.location.lower()
    
    # Simple keyword matching (could be enhanced with NLP)
    for faq in knowledge_base[location]["faqs"]:
        if any(keyword in question for keyword in faq["keywords"]):
            return {"answer": faq["answer"], "related_questions": faq["related"]}
    
    # If no direct match, try general FAQs
    for faq in knowledge_base["general"]["faqs"]:
        if any(keyword in question for keyword in faq["keywords"]):
            return {"answer": faq["answer"], "related_questions": faq["related"]}
    
    raise HTTPException(status_code=404, detail="Answer not found in knowledge base")