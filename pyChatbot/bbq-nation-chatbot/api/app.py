from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
from typing import Dict, Any
import uuid
from datetime import datetime
import requests
from . import knowledge_base, booking_manager, post_call

app = FastAPI()

# Mount API routers
app.include_router(knowledge_base.router, prefix="/api")
app.include_router(booking_manager.router, prefix="/api")
app.include_router(post_call.router, prefix="/api")

# Mount static files for chatbot UI
app.mount("/static", StaticFiles(directory="static"), name="static")

# Conversation state machine
current_state = "greeting"
conversation_context = {}

# Import all states
from states.greeting_state import greeting_state
from states.faq_state import faq_state
from states.new_booking_state import new_booking_state
# Add other states as needed

STATE_HANDLERS = {
    "greeting": greeting_state,
    "faq": faq_state,
    "new_booking": new_booking_state,
    # Add other states here
}

@app.post("/chat")
async def handle_chat(request: Request):
    global current_state, conversation_context
    
    data = await request.json()
    user_input = data.get("message", "")
    phone_number = data.get("phone", "")
    
    # Initialize context if new conversation
    if "conversation_id" not in conversation_context:
        conversation_context = {
            "conversation_id": str(uuid.uuid4()),
            "start_time": datetime.now().isoformat(),
            "phone_number": phone_number,
            "steps": []
        }
    
    # Get current state handler
    state_handler = STATE_HANDLERS.get(current_state, greeting_state)
    
    # Process user input
    response = state_handler(user_input, conversation_context)
    
    # Update context and state
    conversation_context = response["updated_context"]
    current_state = response["next_state"]
    
    # Log this step
    conversation_context["steps"].append({
        "timestamp": datetime.now().isoformat(),
        "state": current_state,
        "user_input": user_input,
        "bot_response": response["response"]
    })
    
    return {
        "response": response["response"],
        "conversation_id": conversation_context["conversation_id"]
    }

@app.get("/", response_class=HTMLResponse)
async def serve_chatbot_ui():
    with open("static/chatbot.html", "r") as f:
        return HTMLResponse(content=f.read(), status_code=200)