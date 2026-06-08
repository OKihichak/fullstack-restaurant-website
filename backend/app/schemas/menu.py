from pydantic import BaseModel


class MenuItemBase(BaseModel):
    name: str

    title: str | None = None

    ingredients: str

    description: str | None = None

    price: float
    category: str

    image_url: str | None = None

    featured: bool = False
    display_order: int = 0


class MenuItemCreate(MenuItemBase):
    pass


class MenuItemUpdate(BaseModel):
    name: str | None = None
    title: str | None = None
    ingredients: str | None = None
    description: str | None = None

    price: float | None = None

    category: str | None = None

    image_url: str | None = None

    featured: bool | None = None
    display_order: int | None = None


class MenuItemResponse(MenuItemBase):
    id: int

    class Config:
        from_attributes = True