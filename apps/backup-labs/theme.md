# Backup Labs — thèmes

Fichiers : [`theme/backup-labs.css`](theme/backup-labs.css) (copie de
référence de l'interface) et [`theme/tokens.json`](theme/tokens.json). Choix
mémorisé par navigateur (`localStorage`, clé `backuplabs.theme`).

## Liste des thèmes

| Thème | Par défaut | Clair ou sombre | Esprit |
|---|---|---|---|
| Console | oui | sombre | dense, terminal, contrasté |
| Marine | non | clair, menu sombre | sérieux, chiffres clés |
| Doux | non | clair | chaleureux, arrondi |

## Console

| Rôle | Variable | Valeur |
|---|---|---|
| Fond | `--bg` | `#070a0e` |
| Surface | `--surface` / `--surface-2` | `#111921` / `#1b2733` |
| Texte | `--text` / `--strong` | `#e8eef4` / `#ffffff` |
| Texte secondaire | `--muted` / `--faint` | `#b3c0cc` / `#8c9cab` |
| Bordures | `--line` / `--line-strong` | `#263546` / `#3b5068` |
| Accent | `--accent` (texte dessus `--accent-text`) | `#7ee2a8` (`#07120c`) |
| Menu | `--nav-bg` / `--nav-active-bg` | `#0c1218` / `#1f2e3c` |
| Réussi / À vérifier / Échec / En cours | `--ok` `--warn` `--fail` `--busy` | `#86f0b4` `#ffc457` `#ff8a80` `#9cc3ff` |

Polices : IBM Plex Sans (texte, titres 600), JetBrains Mono (menu, boutons,
libellés de tableau, code). Rayons : 6 px (cartes), 4 px (boutons). Sans ombre.

## Marine

| Rôle | Valeur |
|---|---|
| Fond / surface | `#eef1f6` / `#ffffff` |
| Texte / secondaire | `#172033` / `#44506b` |
| Bordures | `#d5dce8` / `#aeb9cc` |
| Accent | `#c2410c` (texte blanc) |
| Menu | fond `#13203a`, texte `#c9d3e6`, actif `#22345a` |
| États | `#1f6b43` `#8a5300` `#b42318` `#1d4ed8` |

Police : Plus Jakarta Sans (titres 800). Rayons : 14 px / 10 px. Le bandeau
d'état de l'accueil prend le fond du menu.

## Doux

| Rôle | Valeur |
|---|---|
| Fond / surface | `#f3f2ee` / `#ffffff` |
| Texte / secondaire | `#1f2523` / `#434b48` |
| Bordures | `#e0ddd5` / `#c3bfb5` |
| Accent | `#0f7f72` (texte blanc) |
| Menu | même fond que la page, entrée active en pilule `#1f2523` |
| États | `#0b6f64` `#8a5a00` `#b42318` `#3b5bdb` |

Police : Manrope (titres 800). Rayons : 20 px / 12 px, ombre légère
`0 2px 10px rgb(30 40 35 / 0.06)`, cartes sans bordure.
