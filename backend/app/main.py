from fastapi import FastAPI

from app.core.database import Base, engine
from app.models.menu import MenuItem
from app.models.table import Table
from app.api.reservations import router as reservations_router
from app.api.menu import router as menu_router
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(
    title="Restaurant API",
    version="1.0.0"
)

Base.metadata.create_all(bind=engine)

app.include_router(menu_router)
app.include_router(reservations_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def health_check():
    return {"status": "running"}