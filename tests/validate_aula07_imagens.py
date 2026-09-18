import re
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
IMG_DIR = ROOT / "assets" / "img" / "excel" / "a7"
HTML = ROOT / "modules" / "excel" / "index.html"
JS = ROOT / "assets" / "js" / "pdf-lessons.js"

PATTERN = re.compile(r"assets/img/excel/a7/(image\d+\.png)")
CANONICAL = Counter({f"image{i}.png": 1 for i in range(1, 17)})
PHASE_SEP = re.compile(r'<section id="l7-phase-(\d)">')

failures = []

html = HTML.read_text(encoding="utf-8")
refs = Counter(PATTERN.findall(html))
if refs != CANONICAL:
    failures.append(f"módulo: esperado 1x cada image1..16, obtido {dict(refs)}")

starts = [(int(m.group(1)), m.end()) for m in PHASE_SEP.finditer(html)]
for idx, (phase, begin) in enumerate(starts):
    if phase in (1, 2, 3):
        end = starts[idx + 1][1] if idx + 1 < len(starts) else len(html)
        if PATTERN.search(html[begin:end]):
            failures.append(f"módulo: fase l7-phase-{phase} contém imagem (deveria estar sem)")

for r in CANONICAL:
    if not (IMG_DIR / r).exists():
        failures.append(f"arquivo ausente: assets/img/excel/a7/{r}")

stray = [p.name for p in IMG_DIR.glob("*.png") if p.name not in CANONICAL]
if stray:
    failures.append(f"a7 contém arquivos fora do padrão imageN.png: {stray}")

js = JS.read_text(encoding="utf-8")
js_refs = Counter()
for line in js.splitlines():
    if "assets/img/excel/a7/" in line:
        js_refs.update(re.findall(r"(?:a7/)?(image\d+\.png)", line))
if js_refs != CANONICAL:
    failures.append(f"pdf-lessons.js: esperado 1x cada image1..16 na lição 7, obtido {dict(js_refs)}")

if failures:
    print("FALHA:")
    for f in failures:
        print(" -", f)
    sys.exit(1)

print("OK: módulo e PDF referenciam as 16 imagens canônicas (image1..16) uma vez cada; todas presentes; fases 1-3 sem imagens.")