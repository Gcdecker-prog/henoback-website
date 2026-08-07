"""Download a couple of professional Unsplash stills for Intacct home case studies."""
from pathlib import Path
import urllib.request

out = Path(r"c:\dev\heno-backoffice-website\public\images\case-studies")
out.mkdir(parents=True, exist_ok=True)

# Direct Unsplash source URLs (stable photo IDs, resized)
assets = {
    "linea-energy-wind.jpg": "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80",
    "two-capital-professional.jpg": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
}

for name, url in assets.items():
    dest = out / name
    print("fetching", name)
    req = urllib.request.Request(url, headers={"User-Agent": "henoback-local-preview/1.0"})
    with urllib.request.urlopen(req, timeout=60) as r:
        dest.write_bytes(r.read())
    print("wrote", dest, dest.stat().st_size)
