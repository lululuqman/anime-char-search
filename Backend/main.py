from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import httpx

app = FastAPI(title="Anime Search API")

# ✅ CORS Setup (adjust if deployed)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or your React app URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

JIKAN_BASE = "https://api.jikan.moe/v4"


@app.get("/api/character")
async def search_character(q: str):
    """Search for characters by name"""
    async with httpx.AsyncClient() as client:
        res = await client.get(f"{JIKAN_BASE}/characters", params={"q": q})
        return res.json()


@app.get("/api/anime")
async def search_anime(q: str):
    """Search for anime by title"""
    async with httpx.AsyncClient() as client:
        res = await client.get(f"{JIKAN_BASE}/anime", params={"q": q})
        return res.json()