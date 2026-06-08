from sqlalchemy import Column, Integer, String, Float, Text, Boolean

from app.core.database import Base


class MenuItem(Base):
    __tablename__ = "menu_items"

    id = Column(Integer, primary_key=True)

    name = Column(String, nullable=False)

    title = Column(String)

    ingredients = Column(Text, nullable=False)

    description = Column(Text)

    price = Column(Float, nullable=False)

    category = Column(String, nullable=False)

    image_url = Column(String)

    featured = Column(Boolean, default=False)
    
    

    