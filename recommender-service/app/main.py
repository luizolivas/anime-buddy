import os
import json
from fastapi import FastAPI

app = FastAPI()

# Caminho absoluto do JSON
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_PATH = os.path.join(BASE_DIR, "anime_data.json")

with open(DATA_PATH, encoding="utf-8") as f:
    animes = json.load(f)

@app.get("/recommendations")
def get_recommendations(genre: str = None):
    if genre:
        return [a for a in animes if genre in a["genres"]]
    return animes
