#!/usr/bin/env bash
# labs-brand : Asset Labs -> Plex Labs (usage unique, lancé par .github/workflows/rename-to-plex-labs.yml).
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"
if [ -d apps/plex-labs ]; then echo "Déjà renommé : rien à faire."; exit 0; fi
git mv apps/asset-labs apps/plex-labs
git mv apps/plex-labs/theme/asset-labs.css apps/plex-labs/theme/plex-labs.css
git rm -q logos/asset-labs.png
git mv logos/asset-labs.svg logos/plex-labs.svg
cp scripts/plex-labs.svg logos/plex-labs.svg
rsvg-convert -w 256 -h 256 logos/plex-labs.svg -o logos/plex-labs.png
python3 scripts/rename_brand.py
echo "Renommage terminé."
