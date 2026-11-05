# Projet Labs — thèmes

Fichiers : [`theme/tokens.json`](theme/tokens.json). La feuille de style de
référence est `app/static/app.css` dans le dépôt de l'appli.

## Liste des thèmes

| Thème | Par défaut | Clair ou sombre | Esprit |
|---|---|---|---|
| Nuit | oui | sombre | lecture, calme, pleine largeur |

## Nuit

| Rôle | Variable | Valeur |
|---|---|---|
| Fond | `--bg` | `#0b0f14` |
| Menu latéral | `--side` | `#0d1218` |
| Surface (cartes) | `--surface` / `--surface-2` / `--surface-3` | `#10161d` / `#151c25` / `#1b2430` |
| Texte | `--text` | `#e6edf3` |
| Texte secondaire | `--text-2` / `--text-3` | `#b3bfcb` / `#8a97a5` |
| Bordures | `--line` / `--line-2` | `#1e2732` / `#2a3542` |
| Accent (actions, liens, sélection) | `--accent` (texte dessus `--accent-ink`) | `#b49cff` (`#150f2a`) |
| Réussi / À vérifier / Échec / En cours | `--green` `--amber` `--red` `--blue` | `#5fe39a` `#f5b14c` `#ff7a6b` `#7cb7ff` |

Le vert, l'ambre, le rouge et le bleu ne servent qu'aux états, toujours avec
un mot ou un pictogramme.

## Typographie

| Usage | Police | Graisses |
|---|---|---|
| Texte | IBM Plex Sans | 400, 400 italique |
| Titres | IBM Plex Sans | 600 |
| Menu, boutons, libellés, métadonnées, code | JetBrains Mono | 400, 600, 700 |
| Nom de l'appli `projet.labs` | JetBrains Mono | 700, `.labs` en `#b49cff` |

Polices embarquées (fichiers woff2 dans l'image), aucun appel à Internet.

## Formes

- Rayons : 8 px (cartes), 6 px (boutons, champs), 12–14 px (fenêtres).
- Bordures 1 px, sans ombre sauf fenêtres et menu mobile.
- Menu latéral 14,5 rem, contenu sur toute la largeur restante ; panneau droit
  (sommaire, rétroliens) de 300 px au-delà de 1200 px.
- Sous 52 rem : menu en tiroir derrière un bouton, fenêtres en feuille du bas,
  recherche en feuille du haut, cibles ≥ 40 px, champs en 16 px.

## Fichiers

[`theme/tokens.json`](theme/tokens.json)
