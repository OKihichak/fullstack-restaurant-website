from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String

from app.core.database import Base


class MenuItem(Base):
    __tablename__ = "menu_items"

    id = Column(Integer, primary_key=True, index=True)

    category = Column(String, nullable=False)

    name = Column(String, nullable=False)

    price = Column(Integer, nullable=False)

    description = Column(String, nullable=False)