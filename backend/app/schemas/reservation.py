from datetime import date, time
from pydantic import BaseModel, EmailStr


class ReservationCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str

    reservation_date: date
    reservation_time: time

    guests: int
    notes: str | None = None