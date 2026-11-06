# Plex Labs — thèmes

## Labs OS (thème actuel)

Depuis le 2026-11-05, l'appli utilise **Labs OS**, l'interface commune de la suite ([docs/labs-os.md](../../docs/labs-os.md)) : kit copié dans `app/static/labs-os/`, mis à jour par propagation depuis Projet Labs. Dock des applis, palette `Ctrl K`, barre d'état, crochets, mode automatique / sombre / clair (clé `labs.mode`), IBM Plex Sans + JetBrains Mono, accent = couleur de l'appli (`#f2b84b` en sombre, `#8a5c00` en clair).

Pont en tête d'`app/static/app.css` (`:root[data-theme]`) : fonds, surfaces, textes, états et polices → jetons `--lo-*`. Restent propres à l'appli l'ambre des boutons principaux (`--accent` `#f2b84b`, texte foncé dessus), l'indigo des assets, le teal des médias et les fonds des affiches. `data-theme` suit le mode du kit (ancien choix `pcs-theme` repris une fois). Racine à 85 % sur ordinateur.

---

*Thème d'origine, avant Labs OS (historique) :*

Fichiers : [`theme/plex-labs.css`](theme/plex-labs.css) (copie de référence
des variables de l'interface) et [`theme/tokens.json`](theme/tokens.json).
Thème clair par défaut, sombre si le système l'est ; le bouton du menu force
l'un ou l'autre, choix mémorisé par navigateur (`localStorage`, clé
`pcs-theme`), appliqué avant l'affichage.

## Liste des thèmes

| Thème | Par défaut | Clair ou sombre | Esprit |
|---|---|---|---|
| Clair | oui (référence) | clair | neutre, calme, affiches en vedette |
| Sombre | si le système est sombre | sombre | même chose, jeton par jeton |

Inspiration : la nouvelle interface de Plex. L'interface reste neutre ; la
couleur vient des affiches, de deux teintes de dossier et d'un seul ambre
d'action.

## Couleurs — Clair

| Rôle | Variable | Valeur |
|---|---|---|
| Fond (page et menu) | `--bg` | `#f6f6f8` |
| Surface (cartes, champs) | `--surface` | `#ffffff` |
| Creux (vignettes vides, segments) | `--sunken` | `#efeff2` |
| Texte | `--text` | `#18191d` |
| Texte secondaire | `--muted` / `--faint` | `#5d616b` / `#676b75` |
| Bordures | `--line` / `--line-strong` | `#e4e5ea` / `#d1d3da` |
| Accent (action principale, une par écran) | `--accent` (texte dessus `--on-accent`) | `#e5a00d` (`#1d1404`) |
| Accent en texte | `--accent-text` | `#8a5c00` |
| Accent doux (Simulation, sélection) | `--accent-soft` / `--accent-line` | `#fdf1d4` / `#efcf89` |
| Focus clavier | `--focus` | `#a87000` |
| Assets (source) | `--assets` / `-soft` / `-line` | `#3f55c9` / `#e8ebfb` / `#c2c9f2` |
| Médias (destination) | `--media` / `-soft` / `-line` | `#0b6e63` / `#ddf0ea` / `#a3d1c7` |
| Réussi (complet) | `--ok` / `--ok-soft` | `#1b7a45` / `#e1f3e8` |
| À vérifier (incomplet) | `--warn` / `--warn-soft` | `#9c4a1c` / `#fbeade` |
| Échec (vide, erreur) | `--bad` / `--bad-soft` | `#b8283f` / `#fbe3e7` |
| Scène (derrière une image) | `--stage` | `#2a2c33` |
| Couleur de l'appli dans le nom écrit | `--brand` | `#8a5c00` |

« En cours » n'a pas de couleur propre : une animation sur l'élément concerné
et un texte (« Vérification… »), la pastille « Simulation » en ambre doux.

## Couleurs — Sombre

Mêmes rôles ; seules les valeurs ci-dessous changent (l'ambre d'action
`#e5a00d` reste identique).

| Rôle | Variable | Valeur |
|---|---|---|
| Fond / surface / creux | `--bg` / `--surface` / `--sunken` | `#1d1e22` / `#26272c` / `#2e2f35` |
| Texte / secondaire | `--text` / `--muted` / `--faint` | `#f1f1f3` / `#a9acb5` / `#9295a0` |
| Bordures | `--line` / `--line-strong` | `#34363d` / `#474a52` |
| Accent en texte / focus | `--accent-text` / `--focus` | `#f0b53a` / `#e5a00d` |
| Accent doux | `--accent-soft` / `--accent-line` | `#3a2f17` / `#6b5216` |
| Assets | `--assets` / `-soft` / `-line` | `#9eaaf6` / `#2a2f4f` / `#3f4782` |
| Médias | `--media` / `-soft` / `-line` | `#6fd0c0` / `#17322f` / `#1f5a51` |
| Réussi / À vérifier / Échec | `--ok` `--warn` `--bad` | `#62d396` `#e07a5f` `#ff7a8c` |
| Scène | `--stage` | `#141518` |
| Couleur de l'appli dans le nom écrit | `--brand` | `#f2b84b` |

## Typographie

| Usage | Police | Graisses |
|---|---|---|
| Texte | Figtree (variable, embarquée) | 500 ; 550 menu |
| Titres | Figtree | 750 (sections), 800 (pages) |
| Boutons, pastilles, étiquettes | Figtree | 650 |
| Nom écrit `plex.labs`, fichiers, chemins, heures du journal | Geist Mono (variable, embarquée) | 700 (nom), 500 |

Tailles en `rem` : 0,75 / 0,8125 / 0,875 / 1 / 1,25 / 1,75 rem. La racine
vaut 16 px jusqu'à 1920 px de large, puis grandit avec l'écran (24 px sur un
4K). Chiffres comparés en chiffres tabulaires.

## Formes

- Rayons : 6 px (étiquettes), 8 px (boutons, champs, entrées de menu, affiches
  de galerie), 10 px (cadres d'image, panneaux), 14 px (cartes, dialogues).
  Recherche et filtres entièrement arrondis.
- Bordures : traits d'un pixel (`--line`), souvent en ombre intérieure.
- Ombres : repos `0 1px 2px` ; soulèvement au survol `0 0.75rem 1.625rem -0.875rem` ;
  dialogues `0 1.125rem 2.5rem -1rem` (plus marquées en sombre).
- Espacements : 4 / 8 / 12 / 16 / 24 px ; cibles tactiles de 44 px au doigt.

## Fichiers

[`theme/plex-labs.css`](theme/plex-labs.css) (variables des deux thèmes) et
[`theme/tokens.json`](theme/tokens.json). Le reste des styles vit dans l'appli.
