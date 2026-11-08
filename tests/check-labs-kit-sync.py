#!/usr/bin/env python3
"""Vérifie que l'étape « Recopier le kit » du modèle kit/labs-kit.yml échoue
quand sync-labs-kit.sh échoue (ex. ref inexistante), au lieu de passer au vert.

Le script de l'étape est extrait du YAML et lancé comme GitHub Actions le fait
(`bash --noprofile --norc -eo pipefail`), hors ligne : LABS_BRAND_RAW pointe
vers une copie locale du kit (file://), une ref absente fait échouer curl.
"""
import os
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent


def sync_step():
    wf = yaml.safe_load((ROOT / "kit/labs-kit.yml").read_text(encoding="utf-8"))
    for step in wf["jobs"]["sync"]["steps"]:
        if step.get("id") == "sync":
            return step["run"]
    raise SystemExit("étape « sync » introuvable")


def run(script, ref):
    with tempfile.TemporaryDirectory() as tmp:
        tmp = Path(tmp)
        raw = tmp / "raw" / "bonne-ref" / "kit"
        shutil.copytree(ROOT / "kit", raw, ignore=shutil.ignore_patterns("tests"))
        work = tmp / "app"
        (work / "scripts").mkdir(parents=True)
        shutil.copy(ROOT / "kit/sync-labs-kit.sh", work / "scripts/sync-labs-kit.sh")
        out = tmp / "github_output"
        out.touch()
        env = dict(os.environ, REF=ref, GITHUB_OUTPUT=str(out),
                   LABS_BRAND_RAW=f"file://{tmp / 'raw'}")
        p = subprocess.run(["bash", "--noprofile", "--norc", "-eo", "pipefail", "-c",
                            script.replace("KIT_DIR", "static/labs-os")],
                           cwd=work, env=env, capture_output=True, text=True)
        return p.returncode, out.read_text()


def main():
    script = sync_step()
    bad = 0
    code, output = run(script, "ref-inexistante")
    ok = code != 0
    print(f"{'ok' if ok else 'KO'}    ref inexistante → l'étape échoue (code {code})")
    bad += not ok
    code, output = run(script, "bonne-ref")
    ok = code == 0 and output.startswith("result=changed")
    print(f"{'ok' if ok else 'KO'}    bonne ref → l'étape passe et écrit « result=changed… » (code {code}, sortie {output.strip()!r})")
    bad += not ok
    print("Tout est vert" if not bad else f"{bad} échec(s)")
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
