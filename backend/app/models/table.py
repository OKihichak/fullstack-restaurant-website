from sqlalchemy import Column, Integer
from app.core.database import Base


class Table(Base):
    __tablename__ = "tables"

    id = Column(Integer, primary_key=True)

    seats = Column(Integer, nullable=False)