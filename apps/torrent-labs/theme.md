# Torrent Labs — thèmes

## Labs OS (thème actuel)

Depuis le 2026-11-05, l'appli utilise **Labs OS**, l'interface commune de la suite ([docs/labs-os.md](../../docs/labs-os.md)) : kit copié dans `static/labs-os/`, mis à jour par propagation depuis Projet Labs. Dock des applis, palette `Ctrl K`, barre d'état, crochets, mode automatique / sombre / clair (clé `labs.mode`), IBM Plex Sans + JetBrains Mono, accent = couleur de l'appli (`#ff9b6a` en sombre, `#b3470f` en clair).

Le thème « Terminal » ci-dessous est **retiré** (0.3.0). Pont `static/css/labs-os-bridge.css`, chargé après `terminal.css` : bleu nuit, accent orange de l'appli (le bleu `#00aaff` ne sert plus), IBM Plex Sans pour l'interface, JetBrains Mono pour les données (titres de torrents, tailles, compteurs), plus de majuscules, de cadres ASCII ni de scanlines. Menu à gauche, barre de recherche entre crochets. Restent propres à l'appli les 12 couleurs des trackers. Interface en français (0.5.1).

**Échelle et écarts (0.6.4, kit 1.5.0)** : 1 rem = 16 px, toutes les tailles par jetons `--lo-fs-*` (plancher 13 px), aucune taille en dur dans `monitor.css`, `downloads.css` et le pont ; tailles en px de `terminal.css` ramenées sur l'échelle dans le pont. Titre de carte (`.panel-title`) 18 px gras, contenu à `--lo-title-gap` ; champs à `--lo-field-gap` / `--lo-form-gap`. Page Inscriptions : carte de liste au gabarit `lo-item` (pastille + boutons sur une rangée centrée), pastilles `.pill` = `lo-pill`.

---

*Thème d'origine, avant Labs OS (historique) :*

Fichiers : [`theme/torrent-labs.css`](theme/torrent-labs.css) (copie de
référence de la feuille de style de l'appli, `static/css/terminal.css`) et
[`theme/tokens.json`](theme/tokens.json). Pas de sélecteur de thème.

## Liste des thèmes

| Thème | Par défaut | Clair ou sombre | Esprit |
|---|---|---|---|
| Terminal | oui (unique) | sombre | rétro, dense, tout en mono |

## Terminal — couleurs

| Rôle | Variable | Valeur | Contraste sur `--bg` |
|---|---|---|---|
| Fond de page | `--bg` | `#0d0d0d` | — |
| Fond secondaire (ligne dépliée) | `--bg-alt` | `#141414` | — |
| Surface (panneaux) | `--bg-panel` | `#1a1a1a` | — |
| Bordures fines (pointillés de tableau) | `--border` | `#2a2a2a` | — |
| Bordures fortes (panneaux, champs) | `--border-strong` | `#3a3a3a` | — |
| Texte | `--text` | `#f0f0f0` | 17,1:1 |
| Texte secondaire | `--text-dim` | `#9a9a9a` | 6,9:1 |
| Texte discret (aides, décor ASCII) | `--text-faint` | `#7a7a7a` | 4,6:1 |
| Accent (actions, liens, titres de panneau, focus) | `--accent` / `--link` | `#00aaff` | 7,6:1 |
| Accent survolé | `--accent-soft` | `#33bbff` | — |
| Accent secondaire (invite `search>`, puces) | `--accent-2` | `#00ff66` | 14,3:1 |
| Réussi | `--good` | `#00ff66` | 14,3:1 |
| À vérifier | `--warn` | `#ffcc00` | 12,9:1 |
| Échec | `--bad` | `#ff3344` | 5,4:1 |
| En cours | `--accent` (barre de progression, spinner) | `#00aaff` | 7,6:1 |
| Couleur de l'appli (logo, « .labs ») | `--brand` | `#ff9b6a` | 9,4:1 |
| Texte sur un aplat de couleur | — | `#000000` | — |

Teintes translucides de l'accent : `rgba(0, 170, 255, 0.05)` (titre de
panneau), `0.06` (survol de ligne), `0.08` (onglet actif), `0.14` (ligne qui
vient d'arriver). Fond de modale : `rgba(0, 0, 0, 0.7)`.

Trackers : chaque nom de tracker reçoit une couleur stable (hachage du nom)
dans une palette de 12 teintes lisibles sur `#0d0d0d`, sans rouge pour ne pas
se confondre avec les échecs (liste dans `tokens.json`).

## Typographie

| Usage | Police | Graisses |
|---|---|---|
| Tout le texte, titres, boutons | JetBrains Mono (embarquée, woff2 latin) | 400, 500, 700 |
| Nom écrit `torrent.labs` | JetBrains Mono | 700 |

Taille de base 14 px (13 px sur mobile). Titres de panneau, en-têtes de
tableau, boutons et puces en **majuscules**, interlettrage 0,5 à 1 px, 11 à
12 px. Chiffres tabulaires dans les colonnes numériques.

## Formes

- **Angles droits partout** (aucun rayon), bordures de 1 px.
- Panneaux encadrés façon terminal : titre `┌─[ TITRE ]─────` en décor.
- Bordures de tableau en pointillés (`--border`).
- Ombres : seulement sous les menus déroulants et modales
  (`0 6px 12px rgba(0, 0, 0, 0.45)`) ; halo de la barre de progression
  (`0 0 8px` accent).
- Effets d'écran : fines lignes de balayage (`rgba(255,255,255,0.02)` toutes
  les 3 px) et vignettage radial, au-dessus de la page, sans capter les clics.
- Espacements de base : 8, 12, 16 px ; largeur maximale 1400 px, marges 24 px.
- Mouvements : ligne nouvelle surlignée 1,2 s, barre de progression ;
  désactivés avec `prefers-reduced-motion`.

## Clair / sombre

Sombre uniquement. Pas de variante claire prévue pour l'instant.
