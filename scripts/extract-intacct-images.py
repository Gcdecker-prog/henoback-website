"""Extract unique base64 images from the Intacct HTML preview."""
import base64
import hashlib
import re
import sys
from pathlib import Path

html_path = Path(sys.argv[1])
out_dir = Path(sys.argv[2])
out_dir.mkdir(parents=True, exist_ok=True)

html = html_path.read_text(encoding="utf-8", errors="ignore")
imgs = re.findall(r"<img\b[^>]*>", html, flags=re.I)
seen: set[str] = set()
written = 0

for i, tag in enumerate(imgs):
    msrc = re.search(
        r'src="(data:image/(png|jpeg|jpg|webp);base64,([^"]+))"',
        tag,
        re.I,
    )
    malt = re.search(r'alt="([^"]*)"', tag, re.I)
    if not msrc:
        continue
    mime = msrc.group(2).lower()
    b64 = msrc.group(3)
    digest = hashlib.md5(b64[:4000].encode()).hexdigest()[:10]
    alt = (malt.group(1) if malt else "").strip()
    print(f"{i:02d} {digest} {alt or '(no alt)'} ~{len(b64) * 3 // 4}b")
    if digest in seen:
        continue
    seen.add(digest)
    slug = re.sub(r"[^a-z0-9]+", "-", alt.lower()).strip("-")[:50] or f"asset-{i}"
    ext = "jpg" if mime in ("jpeg", "jpg") else "png"
    fname = f"{i:02d}-{slug}.{ext}"
    (out_dir / fname).write_bytes(base64.b64decode(b64))
    written += 1
    print(f"  wrote {fname}")

print(f"unique={written}")
