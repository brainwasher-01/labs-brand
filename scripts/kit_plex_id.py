"""Kit Labs OS 1.6.2 : l'identifiant technique de Plex Labs passe de « asset » à « plex ».

C'est lui qui compose le nom écrit de la barre d'état (« asset.labs » -> « plex.labs ») et l'adresse des applis
(plex-labs.<domaine>). L'ancien identifiant « asset » reste accepté par LabsOS.init, le temps que l'appli se mette à jour.
"""
import re


def read(p):
    return open(p, encoding="utf-8").read()


def write(p, t):
    open(p, "w", encoding="utf-8", newline="").write(t)


def sub(text, old, new, path):
    if old not in text:
        raise SystemExit(f"Passage introuvable dans {path} : {old[:60]}")
    return text.replace(old, new, 1)


js = read("kit/labs-os.js")
js = sub(js, "{ id: 'asset',   name: 'Plex Labs',", "{ id: 'plex',    name: 'Plex Labs',", "kit/labs-os.js")
js = sub(js, "(backup|projet|torrent|finance|asset)-labs", "(backup|projet|torrent|finance|plex|asset)-labs", "kit/labs-os.js")
js = sub(js, "      opts = o || {};\n", "      opts = o || {};\n      if (opts.app === 'asset') opts.app = 'plex';   // ancien identifiant de Plex Labs, accepté jusqu'à la mise à jour de l'appli\n", "kit/labs-os.js")
js = sub(js, "var KIT_VERSION = '1.6.1';", "var KIT_VERSION = '1.6.2';", "kit/labs-os.js")
write("kit/labs-os.js", js)

css = read("kit/labs-os.css")
css = sub(css, "--lo-c-asset: #f2b84b;", "--lo-c-plex: #f2b84b;", "kit/labs-os.css")
css = sub(css, ':root[data-lo-app="asset"]  ', ':root[data-lo-app="plex"]   ', "kit/labs-os.css")
write("kit/labs-os.css", css)
write("kit/VERSION", "1.6.2\n")

for path in ("docs/labs-os.md", "CHARTE.md"):
    t = read(path)
    write(path, sub(t, "backup | projet | torrent | finance | asset", "backup | projet | torrent | finance | plex", path))

row = ("| 2026-11-06 | Kit Labs OS **1.6.2** : l'identifiant technique de Plex Labs passe de `asset` à `plex` (retour d'Aurélien : la barre d'état affichait encore `asset.labs`). "
       "Le nom écrit de la barre d'état et l'adresse des applis (`plex-labs.<domaine>`) en découlent ; `LabsOS.init({ app: 'asset' })` reste accepté et vaut `plex`. |\n")
t = read("CHANGELOG.md")
write("CHANGELOG.md", sub(t, "|---|---|\n", "|---|---|\n" + row, "CHANGELOG.md"))
prop = ("| 2026-11-06 | Propriétaire | Kit Labs OS 1.6.2 : identifiant de Plex Labs `asset` -> `plex` (`--lo-c-plex`, `data-lo-app=\"plex\"`), ancien identifiant accepté par `LabsOS.init`. "
        "| La barre d'état composait le nom écrit avec l'identifiant et affichait `asset.labs`. | Retenue (kit Labs OS 1.6.2) |\n")
t = read("docs/propositions.md")
write("docs/propositions.md", sub(t, "|---|---|---|---|---|\n", "|---|---|---|---|---|\n" + prop, "docs/propositions.md"))
