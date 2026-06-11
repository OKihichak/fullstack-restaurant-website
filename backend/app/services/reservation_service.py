from datetime import datetime, timedelta

from app.models.reservation import Reservation
from app.models.table import Table

RESERVATION_DURATION_HOURS = 1


def get_available_table(
    db,
    reservation_date,
    reservation_time,
    guests
):
    requested_start = datetime.combine(
        reservation_date,
        reservation_time
    )

    requested_end = (
        requested_start +
        timedelta(hours=RESERVATION_DURATION_HOURS)
    )

    existing_reservations = (
        db.query(Reservation)
        .filter(
            Reservation.reservation_date == reservation_date,
            Reservation.status != "cancelled"
        )
        .all()
    )

    occupied_table_ids = []

    for existing in existing_reservations:

        existing_start = datetime.combine(
            existing.reservation_date,
            existing.reservation_time
        )

        existing_end = (
            existing_start +
            timedelta(hours=RESERVATION_DURATION_HOURS)
        )

        overlaps = (
            requested_start < existing_end
            and requested_end > existing_start
        )

        if overlaps:
            occupied_table_ids.append(
                existing.table_id
            )

    table = (
        db.query(Table)
        .filter(
            Table.seats >= guests,
            ~Table.id.in_(occupied_table_ids)
        )
        .order_by(Table.seats)
        .first()
    )

    return table