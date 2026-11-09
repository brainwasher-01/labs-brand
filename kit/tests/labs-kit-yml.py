#!/usr/bin/env python3
"""Contrôle du modèle de workflow kit/labs-kit.yml.

Usage : python3 kit/tests/labs-kit-yml.py   (PyYAML requis ; réseau pour vérifier les tags)
Réussite : YAML valide, chaque action tierce épinglée par SHA complet avec le tag en commentaire,
et ce SHA correspond bien au tag annoncé (git ls-remote).
"""
import pathlib, re, subprocess, sys
import yaml

path = pathlib.Path(__file__).resolve().parent.parent / "labs-kit.yml"
text = path.read_text(encoding="utf-8")
failed = 0

def check(ok, msg):
    global failed
    print(("ok    " if ok else "ÉCHEC ") + msg)
    failed += not ok

doc = yaml.safe_load(text)
check(isinstance(doc, dict) and "jobs" in doc, "YAML valide avec une section jobs")

uses = re.findall(r"^\s*-?\s*uses:\s*(\S+)(?:\s*#\s*(\S+))?", text, re.M)
check(bool(uses), f"{len(uses)} action(s) trouvée(s)")
for ref, tag in uses:
    name, _, ver = ref.partition("@")
    pinned = bool(re.fullmatch(r"[0-9a-f]{40}", ver))
    check(pinned, f"{name} épinglée par SHA ({ver})")
    check(bool(tag), f"{name} : tag en commentaire ({tag})")
    if pinned and tag and "--offline" not in sys.argv:
        out = subprocess.run(["git", "ls-remote", "--tags", f"https://github.com/{name}", tag, f"{tag}^{{}}"],
                             capture_output=True, text=True, timeout=60).stdout.split()
        shas = out[0::2]
        check(ver in shas, f"{name} : {ver[:12]} correspond au tag {tag}")
check("@v4" not in text, "plus de @v4 dans le fichier")

print("\nTout est vert" if not failed else f"\n{failed} échec(s)")
sys.exit(1 if failed else 0)
