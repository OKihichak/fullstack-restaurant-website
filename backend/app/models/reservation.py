from sqlalchemy import (
    Column,
    Integer,
    String,
    Date,
    Time,
    ForeignKey,
    Text
)
from sqlalchemy.orm import relationship

from app.core.database import Base


class Reservation(Base):
    __tablename__ = "reservations"

    id = Column(Integer, primary_key=True)

    name = Column(String, nullable=False)

    email = Column(String, nullable=False)

    phone = Column(String, nullable=False)

    reservation_date = Column(Date, nullable=False)

    reservation_time = Column(Time, nullable=False)

    guests = Column(Integer, nullable=False)

    notes = Column(Text)

    status = Column(String, default="pending")

    table_id = Column(
        Integer,
        ForeignKey("tables.id"),
        nullable=False
    )

    table = relationship("Table")