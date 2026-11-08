#!/usr/bin/env python3
"""Vérifie que chaque lien Markdown relatif d'un fichier pointe vers un fichier existant.

Usage : python3 tests/check-links.py [fichier.md ...]   (défaut : CHARTE.md)
Les liens externes (http, mailto), les ancres seules et les liens de modèle (`<nom>`) sont ignorés.
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
LINK = re.compile(r"\]\(([^)\s]+)\)")


def broken_links(md: Path):
    text = md.read_text(encoding="utf-8")
    # On ignore les blocs de code : leurs liens sont des exemples.
    text = re.sub(r"```.*?```", lambda m: "\n" * m.group(0).count("\n"), text, flags=re.S)
    for n, line in enumerate(text.splitlines(), 1):
        for target in LINK.findall(line):
            if re.match(r"^[a-z]+:", target) or target.startswith("#") or "<" in target:
                continue
            path = target.split("#", 1)[0]
            if path and not (md.parent / path).exists():
                yield n, target


def main(argv):
    files = [ROOT / f for f in (argv or ["CHARTE.md"])]
    bad = 0
    for md in files:
        for n, target in broken_links(md):
            print(f"KO    {md.relative_to(ROOT)}:{n} → {target}")
            bad += 1
    print("Tout est vert" if not bad else f"{bad} lien(s) cassé(s)")
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
