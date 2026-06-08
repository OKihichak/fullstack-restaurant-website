from fastapi import APIRouter
from sqlalchemy.orm import Session
from fastapi import Depends
from typing import List

from fastapi import HTTPException
from app.schemas.menu import MenuItemUpdate
from app.core.database import get_db
from app.models.menu import MenuItem
from app.schemas.menu import MenuItemCreate

router = APIRouter(
    prefix="/menu",
    tags=["Menu"]
)


@router.get("/")
def get_menu(db: Session = Depends(get_db)):
    return db.query(MenuItem).all()

@router.get("/featured-cocktails")
def get_featured_cocktails(
    db: Session = Depends(get_db)
):
    return (
        db.query(MenuItem)
        .filter(
            MenuItem.category == "cocktail",
            MenuItem.featured == True
        )
        .all()
    )
    
@router.get("/special")
def get_special_item(
    db: Session = Depends(get_db)
):
    special_item = (
        db.query(MenuItem)
        .filter(MenuItem.category == "special")
        .first()
    )

    if not special_item:
        raise HTTPException(
            status_code=404,
            detail="Special item not found"
        )

    return special_item    

@router.get("/{item_id}")
def get_menu_item(
    item_id: int,
    db: Session = Depends(get_db)
):
    menu_item = (
        db.query(MenuItem)
        .filter(MenuItem.id == item_id)
        .first()
    )

    if not menu_item:
        raise HTTPException(
            status_code=404,
            detail="Menu item not found"
        )

    return menu_item





@router.post("/")
def create_menu_item(
    item: MenuItemCreate,
    db: Session = Depends(get_db)
):
    existing_item = (
        db.query(MenuItem)
        .filter(
            MenuItem.name == item.name,
            MenuItem.ingredients == item.ingredients
        )
        .first()
    )

    if existing_item:
        raise HTTPException(
            status_code=409,
            detail="Menu item already exists"
        )

    menu_item = MenuItem(**item.model_dump())

    db.add(menu_item)
    db.commit()
    db.refresh(menu_item)

    return menu_item


@router.post("/bulk")
def create_menu_items(
    items: List[MenuItemCreate],
    db: Session = Depends(get_db)
):
    duplicates = []

    for item in items:
        existing_item = (
            db.query(MenuItem)
            .filter(
                MenuItem.name == item.name,
                MenuItem.ingredients == item.ingredients
            )
            .first()
        )

        if existing_item:
            duplicates.append(item.name)

    if duplicates:
        raise HTTPException(
            status_code=409,
            detail=(
                "The following items already exist in the database: "
                + ", ".join(duplicates)
            )
        )

    menu_items = [
        MenuItem(**item.model_dump())
        for item in items
    ]

    db.add_all(menu_items)
    db.commit()

    return {
        "message": f"{len(menu_items)} items created successfully"
    }

@router.put("/{item_id}")
def update_menu_item(
    item_id: int,
    item_update: MenuItemUpdate,
    db: Session = Depends(get_db)
):
    menu_item = (
        db.query(MenuItem)
        .filter(MenuItem.id == item_id)
        .first()
    )

    if not menu_item:
        raise HTTPException(
            status_code=404,
            detail="Menu item not found"
        )

    update_data = item_update.model_dump(
        exclude_unset=True
    )

    for field, value in update_data.items():
        setattr(menu_item, field, value)

    db.commit()
    db.refresh(menu_item)

    return menu_item


@router.delete("/{item_id}")
def delete_menu_item(
    item_id: int,
    db: Session = Depends(get_db)
):
    menu_item = (
        db.query(MenuItem)
        .filter(MenuItem.id == item_id)
        .first()
    )

    if not menu_item:
        raise HTTPException(
            status_code=404,
            detail="Menu item not found"
        )

    db.delete(menu_item)
    db.commit()

    return {
        "message": "Menu item deleted"
    }



