"""Download the geoBoundaries ADM1 files used by the browser app.
Run from the project root: python scripts/download-geodata.py
Requires Python 3 and internet access. Review upstream metadata/license before redistribution.
"""
from pathlib import Path
from urllib.request import urlopen

SOURCES = {
    "RUS": "https://raw.githubusercontent.com/wmgeolab/geoBoundaries/main/releaseData/gbOpen/RUS/ADM1/geoBoundaries-RUS-ADM1.geojson",
    "UKR": "https://raw.githubusercontent.com/wmgeolab/geoBoundaries/main/releaseData/gbOpen/UKR/ADM1/geoBoundaries-UKR-ADM1.geojson",
    "BLR": "https://raw.githubusercontent.com/wmgeolab/geoBoundaries/main/releaseData/gbOpen/BLR/ADM1/geoBoundaries-BLR-ADM1.geojson",
}
OUT = Path(__file__).resolve().parents[1] / "data"
OUT.mkdir(exist_ok=True)
for code, url in SOURCES.items():
    target = OUT / f"{code.lower()}-adm1.geojson"
    print(f"Downloading {code} -> {target}")
    with urlopen(url, timeout=60) as response, target.open("wb") as out:
        out.write(response.read())
print("Done. Update GEO_SOURCES in js/countries.js to use local files if desired.")
