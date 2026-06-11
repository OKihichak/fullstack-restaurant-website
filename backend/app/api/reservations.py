from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.services.reservation_service import get_available_table
from app.core.database import get_db
from app.models.reservation import Reservation
from app.models.table import Table
from app.schemas.reservation import ReservationCreate
from datetime import datetime, timedelta,date, time
from pydantic import BaseModel


router = APIRouter(
    prefix="/reservations",
    tags=["Reservations"]
)

class AvailabilityRequest(BaseModel):
    reservation_date: date
    reservation_time: time
    guests: int


RESERVATION_DURATION_HOURS = 1


@router.post("/")
def create_reservation(
    reservation: ReservationCreate,
    db: Session = Depends(get_db)
):

    table = get_available_table(
        db,
        reservation.reservation_date,
        reservation.reservation_time,
        reservation.guests
    )

    if not table:
        raise HTTPException(
            status_code=400,
            detail="No table available for this date and time"
        )

    db_reservation = Reservation(
        **reservation.model_dump(),
        status="pending",
        table_id=table.id
    )

    db.add(db_reservation)
    db.commit()
    db.refresh(db_reservation)

    return {
        "message": "Reservation created successfully",
        "reservation": db_reservation
    }




@router.post("/availability")
def check_availability(
    request: AvailabilityRequest,
    db: Session = Depends(get_db)
):
    table = get_available_table(
        db,
        request.reservation_date,
        request.reservation_time,
        request.guests
    )

    return {
        "available": table is not None
    }
    
    
@router.post("/available-slots")
def get_available_slots(
    request: AvailabilityRequest,
    db: Session = Depends(get_db)
):
    requested_datetime = datetime.combine(
        request.reservation_date,
        request.reservation_time
    )

    current_slot = None
    closest_before = []
    closest_after = []

    table = get_available_table(
        db,
        request.reservation_date,
        request.reservation_time,
        request.guests
    )

    if table:
        current_slot = {
            "time": requested_datetime.strftime("%H:%M")
        }

    for minutes in range(15, 241, 15):

        before_datetime = (
            requested_datetime -
            timedelta(minutes=minutes)
        )

        before_table = get_available_table(
            db,
            before_datetime.date(),
            before_datetime.time(),
            request.guests
        )

        if (
            before_table and
            len(closest_before) < 2
        ):
            closest_before.append({
                "time": before_datetime.strftime("%H:%M")
            })

        after_datetime = (
            requested_datetime +
            timedelta(minutes=minutes)
        )

        after_table = get_available_table(
            db,
            after_datetime.date(),
            after_datetime.time(),
            request.guests
        )

        if (
            after_table and
            len(closest_after) < 3
        ):
            closest_after.append({
                "time": after_datetime.strftime("%H:%M")
            })

        if current_slot:
            if (
                len(closest_before) == 2 and
                len(closest_after) == 2
            ):
                break
        else:
            if (
                len(closest_before) == 2 and
                len(closest_after) == 3
            ):
                break

    closest_before.reverse()

    if current_slot:
        result = (
            closest_before
            + [current_slot]
            + closest_after[:2]
        )
    else:
        result = (
            closest_before
            + closest_after
        )

    return result
        
    
    

@router.get("/")
def get_reservations(
    db: Session = Depends(get_db)
):
    return db.query(Reservation).all()