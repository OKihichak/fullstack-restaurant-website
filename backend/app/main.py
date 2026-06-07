from fastapi import FastAPI

from app.core.database import Base
from app.core.database import engine

from app.models.menu import MenuItem

app = FastAPI(
    title="Restaurant API",
    version="1.0.0"
)

Base.metadata.create_all(bind=engine)


@app.get("/")
def health_check():
    return {
        "status": "running"
    }