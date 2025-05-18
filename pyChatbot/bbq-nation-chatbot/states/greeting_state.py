from typing import Dict, Any

def greeting_state(user_input: str, context: Dict[str, Any]) -> Dict[str, Any]:
    """
    Initial greeting state that determines the user's intent.
    """
    response = {
        "response": "",
        "next_state": "",
        "updated_context": context
    }
    
    # Check for greeting keywords
    greeting_keywords = ["hi", "hello", "hey", "greetings"]
    if any(word in user_input.lower() for word in greeting_keywords):
        response["response"] = (
            "Hello! Welcome to Barbeque Nation. "
            "How can I help you today? "
            "You can ask about our restaurants, make a booking, or manage an existing booking."
        )
        response["next_state"] = "determine_intent"
        return response
    
    # Check for booking-related keywords
    booking_keywords = ["book", "reservation", "table", "dinner", "lunch"]
    if any(word in user_input.lower() for word in booking_keywords):
        response["response"] = "I can help you with that. Are you looking to make a new booking?"
        response["next_state"] = "new_booking"
        return response
    
    # Default response
    response["response"] = (
        "Welcome to Barbeque Nation! How can I assist you today? "
        "You can ask about our restaurants, make a booking, or manage an existing booking."
    )
    response["next_state"] = "determine_intent"
    return response