from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, validator
from datetime import datetime
from typing import List, Optional
import uuid

router = APIRouter()

# In-memory database (replace with actual DB in production)
bookings_db = []

class Booking(BaseModel):
    booking_id: str
    name: str
    phone: str
    email: str
    location: str  # "delhi" or "bangalore"
    outlet: str
    date: str
    time: str
    guests: int
    special_request: Optional[str] = None
    status: str = "confirmed"

    @validator('date')
    def validate_date(cls, v):
        try:
            datetime.strptime(v, '%Y-%m-%d')
            if datetime.strptime(v, '%Y-%m-%d').date() < datetime.now().date():
                raise ValueError("Date cannot be in the past")
            return v
        except ValueError:
            raise ValueError("Invalid date format. Use YYYY-MM-DD")

    @validator('time')
    def validate_time(cls, v):
        try:
            datetime.strptime(v, '%H:%M')
            return v
        except ValueError:
            raise ValueError("Invalid time format. Use HH:MM")

class CreateBookingRequest(BaseModel):
    name: str
    phone: str
    email: str
    location: str
    outlet: str
    date: str
    time: str
    guests: int
    special_request: Optional[str] = None

class ModifyBookingRequest(BaseModel):
    booking_id: str
    date: Optional[str] = None
    time: Optional[str] = None
    guests: Optional[int] = None
    special_request: Optional[str] = None

@router.post("/bookings")
async def create_booking(request: CreateBookingRequest):
    """Create a new booking"""
    booking_id = str(uuid.uuid4())
    booking = Booking(
        booking_id=booking_id,
        **request.dict()
    )
    bookings_db.append(booking.dict())
    return {"booking_id": booking_id, "status": "confirmed"}

@router.put("/bookings/{booking_id}")
async def modify_booking(booking_id: str, request: ModifyBookingRequest):
    """Modify an existing booking"""
    for booking in bookings_db:
        if booking["booking_id"] == booking_id:
            if request.date:
                booking["date"] = request.date
            if request.time:
                booking["time"] = request.time
            if request.guests:
                booking["guests"] = request.guests
            if request.special_request:
                booking["special_request"] = request.special_request
            return {"status": "updated"}
    raise HTTPException(status_code=404, detail="Booking not found")

@router.delete("/bookings/{booking_id}")
async def cancel_booking(booking_id: str):
    """Cancel a booking"""
    for i, booking in enumerate(bookings_db):
        if booking["booking_id"] == booking_id:
            bookings_db[i]["status"] = "cancelled"
            return {"status": "cancelled"}
    raise HTTPException(status_code=404, detail="Booking not found")

@router.get("/bookings/{booking_id}")
async def get_booking(booking_id: str):
    """Get booking details"""
    for booking in bookings_db:
        if booking["booking_id"] == booking_id:
            return booking
    raise HTTPException(status_code=404, detail="Booking not found")