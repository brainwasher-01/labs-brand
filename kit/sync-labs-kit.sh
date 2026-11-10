#!/bin/sh
# Labs OS — recopie le kit commun de labs-brand dans une appli de la suite.
# Usage : sh scripts/sync-labs-kit.sh <dossier-cible> [branche-ou-tag]
#   ex. : sh scripts/sync-labs-kit.sh app/static/labs-os
# Copie de référence : labs-brand/kit/sync-labs-kit.sh (ne pas modifier dans l'appli).
# Depuis le kit 2.0.0 : la police Geist (SIL OFL 1.1) est prise à sa source publique, version épinglée et empreinte
# vérifiée (Projet Labs ne versionne que du texte : le fichier binaire n'est pas dans labs-brand).
# Sortie : « changed » si au moins un fichier a changé, « unchanged » sinon.
set -eu
DEST="${1:?dossier cible manquant}"
REF="${2:-main}"
case "$REF" in *[!A-Za-z0-9._/-]*) echo "ref invalide" >&2; exit 2;; esac
BASE="${LABS_BRAND_RAW:-https://raw.githubusercontent.com/brainwasher-01/labs-brand}/$REF/kit"
FILES="VERSION labs-os.css labs-os.js fonts/ibm-plex-sans-latin-400-normal.woff2 fonts/ibm-plex-sans-latin-500-normal.woff2 fonts/ibm-plex-sans-latin-600-normal.woff2 fonts/ibm-plex-sans-latin-700-normal.woff2 fonts/jetbrains-mono-latin-400-normal.woff2 fonts/jetbrains-mono-latin-500-normal.woff2 fonts/jetbrains-mono-latin-700-normal.woff2 fonts/OFL-IBM-Plex-Sans.txt fonts/OFL-JetBrains-Mono.txt fonts/OFL-Geist.txt"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
mkdir -p "$TMP/fonts" "$DEST/fonts"
for f in $FILES; do
  curl -fsSL --retry 3 -o "$TMP/$f" "$BASE/$f"
done
GEIST="fonts/geist-latin-wght-normal.woff2"
GEIST_URL="${LABS_GEIST_URL:-https://cdn.jsdelivr.net/npm/@fontsource-variable/geist@5.2.8/files/geist-latin-wght-normal.woff2}"
GEIST_SHA="0cbbe6286a00f356e98980783cc950a9b693751e04aedfb97d9526ff6dc2b316"
if ! echo "$GEIST_SHA  $DEST/$GEIST" | sha256sum -c - >/dev/null 2>&1; then
  curl -fsSL --retry 3 -o "$TMP/$GEIST" "$GEIST_URL"
  echo "$GEIST_SHA  $TMP/$GEIST" | sha256sum -c - >/dev/null || { echo "empreinte de la police Geist inattendue" >&2; exit 3; }
  FILES="$FILES $GEIST"
fi
CHANGED=unchanged
for f in $FILES; do
  if ! cmp -s "$TMP/$f" "$DEST/$f" 2>/dev/null; then
    cp "$TMP/$f" "$DEST/$f"
    CHANGED=changed
  fi
done
echo "$CHANGED (kit $(cat "$DEST/VERSION"))"
