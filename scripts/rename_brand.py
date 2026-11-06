import re, subprocess
S = chr(0xE000)
def keep(t):
    return re.sub(r"(?i)(assets?)( Labs|-labs)", lambda m: m.group(1) + S + m.group(2), t)
def read(p): return open(p, encoding="utf-8").read()
def write(p, t): open(p, "w", encoding="utf-8", newline="").write(t)

EXCL = re.compile(r"^(scripts/|CHANGELOG\.md|docs/propositions\.md|kit/|\.github/|logos/)")
files = [f for f in subprocess.run(["git", "ls-files"], check=True, capture_output=True, text=True).stdout.splitlines()
         if not EXCL.match(f) and re.search(r"\.(md|json|css|html|txt|yml|sh)$", f)]

SPECIALS = [
  ("(ex-Plex Labs)", "(ex-Asset Labs)"),
  ("dans l'ordre Backup, Asset, Finance, Projet, Torrent", "dans l'ordre Backup, Plex, Finance, Projet, Torrent"),
  ("| A | `M24.5 44 32 20l7.5 24 M27 36h10` |\n| F |", "| F |"),
  ("| P | `M26 44V20h6.5a6.5 6.5 0 0 1 0 13H26` |", "| P (Projet Labs et Plex Labs, de couleurs différentes) | `M26 44V20h6.5a6.5 6.5 0 0 1 0 13H26` |"),
]
RULES = [(r"Assets? Labs", "Plex Labs"), (r"\basset\.labs", "plex.labs"), (r"\bassets?-labs\b", "plex-labs")]
for f in files:
    t = read(f)
    for old, new in SPECIALS:
        t = t.replace(old, keep(new))
    for a, b in RULES:
        t = re.sub(a, b, t)
    t = t.replace(S, "")
    write(f, t)

# kit : nom et lettre affichés (l'identifiant technique « asset » reste, il sert aux thèmes et aux adresses)
js = read("kit/labs-os.js")
old = "{ id: 'asset',   name: 'Asset Labs',   color: '#f2b84b', d: 'M24.5 44 32 20l7.5 24 M27 36h10' }"
new = "{ id: 'asset',   name: 'Plex Labs',    color: '#f2b84b', d: 'M26 44V20h6.5a6.5 6.5 0 0 1 0 13H26' }"
if old not in js: raise SystemExit("Ligne du kit introuvable")
js = js.replace(old, new).replace("var KIT_VERSION = '1.6.0';", "var KIT_VERSION = '1.6.1';")
write("kit/labs-os.js", js)
write("kit/VERSION", "1.6.1\n")

# historique et propositions
row = ("| 2026-11-06 | Asset Labs devient **Plex Labs** (retour d'Aurélien : « Asset Labs ne me va pas du tout »). Dossier `apps/plex-labs/`, logos `logos/plex-labs.*` "
       "(nouvelle lettre : P entre crochets, ambre inchangé), catalogue, charte, icône Unraid `plex-labs.png`. Kit Labs OS **1.6.1** : nom et lettre de l'appli dans la palette ; "
       "l'identifiant technique `asset` du kit est conservé (thèmes, adresses). |\n")
t = read("CHANGELOG.md")
t = t.replace("|---|---|\n", "|---|---|\n" + row, 1)
write("CHANGELOG.md", t)
prop = ("| 2026-11-06 | Propriétaire | Asset Labs devient Plex Labs : nom, nom écrit `plex.labs`, logo « [P] » ambre (même tracé que Projet Labs, couleur différente), dossier `apps/plex-labs/`, "
        "icône Unraid `logos/plex-labs.png`. | Retour d'Aurélien : le nom Asset Labs ne lui convient pas. | Retenue (kit Labs OS 1.6.1) |\n")
t = read("docs/propositions.md")
t = t.replace("|---|---|---|---|---|\n", "|---|---|---|---|---|\n" + prop, 1)
write("docs/propositions.md", t)
