from typing import Dict, Any
import requests

def faq_state(user_input: str, context: Dict[str, Any]) -> Dict[str, Any]:
    """
    State for handling FAQ questions.
    """
    response = {
        "response": "",
        "next_state": "",
        "updated_context": context
    }
    
    # Call knowledge base API
    kb_response = requests.post(
        "http://localhost:8000/api/faq",
        json={"question": user_input, "location": context.get("location", "general")}
    )
    
    if kb_response.status_code == 200:
        data = kb_response.json()
        response["response"] = data["answer"]
        
        # Suggest related questions if available
        if data.get("related_questions"):
            response["response"] += "\n\nRelated questions:\n- " + "\n- ".join(data["related_questions"])
        
        response["next_state"] = "follow_up"
    else:
        response["response"] = "I couldn't find an answer to that. Would you like to speak with a human representative?"
        response["next_state"] = "human_transfer"
    
    return response