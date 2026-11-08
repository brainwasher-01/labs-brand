#!/usr/bin/env python3
"""Vérifie que PROJECT.md décrit la procédure réelle du kit : plus de « À compléter »,
mention de kit/VERSION et de labs-kit.yml, et version citée = kit/VERSION."""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
doc = (ROOT / "PROJECT.md").read_text(encoding="utf-8")
version = (ROOT / "kit/VERSION").read_text(encoding="utf-8").strip()
checks = [
    ("plus de « À compléter »", "À compléter" not in doc),
    ("mentionne kit/VERSION", "kit/VERSION" in doc),
    ("mentionne labs-kit.yml", "labs-kit.yml" in doc),
    ("mentionne propagate_ui et l'événement labs-kit", "propagate_ui" in doc and "`labs-kit`" in doc),
    (f"cite la version courante du kit ({version})",
     re.search(r"version actuelle[^\n]*\*\*" + re.escape(version) + r"\*\*", doc) is not None),
]
bad = 0
for label, ok in checks:
    print(f"{'ok' if ok else 'KO'}    {label}")
    bad += not ok
print("Tout est vert" if not bad else f"{bad} échec(s)")
sys.exit(1 if bad else 0)
