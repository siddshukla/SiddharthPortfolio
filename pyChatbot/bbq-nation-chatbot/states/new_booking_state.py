from typing import Dict, Any
import re
from datetime import datetime

def new_booking_state(user_input: str, context: Dict[str, Any]) -> Dict[str, Any]:
    """
    State for handling new bookings.
    """
    response = {
        "response": "",
        "next_state": "",
        "updated_context": context
    }
    
    # Determine what information we're collecting
    booking_info = context.get("booking_info", {
        "step": "location",
        "data": {}
    })
    
    if booking_info["step"] == "location":
        response["response"] = "Which city would you like to book in? We have outlets in Delhi and Bangalore."
        booking_info["step"] = "outlet"
        response["updated_context"]["booking_info"] = booking_info
        response["next_state"] = "new_booking"
    
    elif booking_info["step"] == "outlet":
        if "delhi" in user_input.lower():
            booking_info["data"]["location"] = "delhi"
            response["response"] = "Great! Which Delhi outlet would you prefer? We have:\n1. Connaught Place\n2. Saket\n3. Rajouri Garden"
        elif "bangalore" in user_input.lower():
            booking_info["data"]["location"] = "bangalore"
            response["response"] = "Great! Which Bangalore outlet would you prefer? We have:\n1. Indiranagar\n2. Koramangala\n3. Whitefield"
        else:
            response["response"] = "Please specify either Delhi or Bangalore."
            response["next_state"] = "new_booking"
            return response
        
        booking_info["step"] = "date"
        response["updated_context"]["booking_info"] = booking_info
        response["next_state"] = "new_booking"
    
    elif booking_info["step"] == "date":
        # Simple date parsing (would use a library like dateparser in production)
        date_match = re.search(r"(\d{1,2})(st|nd|rd|th)?\s+(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\s?(\d{4})?", user_input.lower())
        if date_match:
            day = date_match.group(1)
            month = date_match.group(3)
            year = date_match.group(4) or datetime.now().year
            date_str = f"{year}-{month[:3].title()}-{day.zfill(2)}"
            booking_info["data"]["date"] = date_str
            response["response"] = f"Got it, {date_str}. What time would you like to book for?"
            booking_info["step"] = "time"
        else:
            response["response"] = "When would you like to visit? Please provide a date (e.g., 15th July or July 15)."
        
        response["updated_context"]["booking_info"] = booking_info
        response["next_state"] = "new_booking"
    
    elif booking_info["step"] == "time":
        time_match = re.search(r"(\d{1,2})(:\d{2})?\s?(am|pm)?", user_input.lower())
        if time_match:
            hour = int(time_match.group(1))
            minute = time_match.group(2) or ":00"
            period = time_match.group(3) or ""
            
            # Convert to 24-hour format
            if period == "pm" and hour != 12:
                hour += 12
            elif period == "am" and hour == 12:
                hour = 0
                
            time_str = f"{hour:02d}{minute}"
            booking_info["data"]["time"] = time_str
            response["response"] = f"Great, {time_str}. How many people will be dining?"
            booking_info["step"] = "guests"
        else:
            response["response"] = "What time would you like to book for? (e.g., 7pm or 19:30)"
        
        response["updated_context"]["booking_info"] = booking_info
        response["next_state"] = "new_booking"
    
    elif booking_info["step"] == "guests":
        guests_match = re.search(r"\d+", user_input)
        if guests_match:
            guests = int(guests_match.group(0))
            booking_info["data"]["guests"] = guests
            response["response"] = f"Booking for {guests} people. Can I have your name, phone number, and email to complete the booking?"
            booking_info["step"] = "contact"
        else:
            response["response"] = "How many people will be dining with us?"
        
        response["updated_context"]["booking_info"] = booking_info
        response["next_state"] = "new_booking"
    
    elif booking_info["step"] == "contact":
        # Extract contact info (simplified - would use better parsing in production)
        name_match = re.search(r"my name is (\w+)", user_input.lower())
        phone_match = re.search(r"\b\d{10}\b", user_input)
        email_match = re.search(r"\b[\w.-]+@[\w.-]+\.\w+\b", user_input.lower())
        
        if name_match:
            booking_info["data"]["name"] = name_match.group(1).title()
        if phone_match:
            booking_info["data"]["phone"] = phone_match.group(0)
        if email_match:
            booking_info["data"]["email"] = email_match.group(0)
        
        if all(key in booking_info["data"] for key in ["name", "phone", "email"]):
            response["response"] = "Thank you! Would you like to add any special requests?"
            booking_info["step"] = "special_request"
        else:
            missing = []
            if "name" not in booking_info["data"]:
                missing.append("name")
            if "phone" not in booking_info["data"]:
                missing.append("phone number")
            if "email" not in booking_info["data"]:
                missing.append("email address")
            
            response["response"] = f"I still need your {', '.join(missing)} to complete the booking."
        
        response["updated_context"]["booking_info"] = booking_info
        response["next_state"] = "new_booking"
    
    elif booking_info["step"] == "special_request":
        booking_info["data"]["special_request"] = user_input
        response["response"] = "Almost done! Would you like to confirm this booking?"
        booking_info["step"] = "confirmation"
        response["updated_context"]["booking_info"] = booking_info
        response["next_state"] = "new_booking"
    
    elif booking_info["step"] == "confirmation":
        if "yes" in user_input.lower():
            # Call booking API
            booking_data = booking_info["data"]
            api_response = requests.post(
                "http://localhost:8000/api/bookings",
                json=booking_data
            )
            
            if api_response.status_code == 200:
                booking_id = api_response.json()["booking_id"]
                response["response"] = (
                    f"Your booking is confirmed! Your booking ID is {booking_id}. "
                    f"We look forward to serving you at {booking_data['outlet']} on {booking_data['date']} at {booking_data['time']}."
                )
                response["next_state"] = "end_conversation"
            else:
                response["response"] = "There was an error processing your booking. Please try again later or call our reservation team."
                response["next_state"] = "human_transfer"
        else:
            response["response"] = "Would you like to modify any details or cancel this booking?"
            response["next_state"] = "modify_booking"
        
        # Clear booking info from context
        response["updated_context"].pop("booking_info", None)
    
    return response