#!/usr/bin/env python3
"""Contrôle de catalogue.json.

Usage : python3 tests/check-catalogue.py
Réussite : JSON valide, identifiants uniques, chaque appli de la suite (apps) déclare son dépôt
et le dossier où elle embarque le kit Labs OS (kit_dir), sans quoi kit_status la voit « absente ».
"""
import json, pathlib, re, sys

cat = json.loads((pathlib.Path(__file__).resolve().parent.parent / "catalogue.json").read_text(encoding="utf-8"))
failed = 0

def check(ok, msg):
    global failed
    print(("ok    " if ok else "ÉCHEC ") + msg)
    failed += not ok

ids = [a["id"] for a in cat["apps"] + cat.get("associated_apps", [])]
check(len(ids) == len(set(ids)), "identifiants uniques")
check(bool(re.fullmatch(r"\d+\.\d+\.\d+", cat["kit"]["version"])), f"version du kit {cat['kit']['version']}")
for a in cat["apps"]:
    check(bool(re.fullmatch(r"[\w.-]+/[\w.-]+", a.get("repository", ""))), f"{a['id']} : dépôt {a.get('repository')}")
    kd = a.get("kit_dir", "")
    check(bool(kd) and not kd.startswith("/") and kd.endswith("labs-os"), f"{a['id']} : kit_dir « {kd} »")

print("\nTout est vert" if not failed else f"\n{failed} échec(s)")
sys.exit(1 if failed else 0)
