# Logos

Piste retenue : **crochets**. L'initiale de l'appli entre crochets, dans une
tuile sombre bordée de sa couleur.

## Construction (grille 64×64)

| Élément | Valeur |
|---|---|
| Tuile | `rect x=2 y=2 w=60 h=60 rx=12`, fond `#0b1015`, bordure 2,5 dans la couleur |
| Crochet gauche | `M20 17h-6v30h6`, trait 4, extrémités carrées |
| Crochet droit | `M44 17h6v30h-6`, trait 4, extrémités carrées |
| Initiale | Trait 4, extrémités et angles arrondis, dans la zone x 24–40, y 20–44 |

Initiales existantes (chemins SVG) :

| Appli | Tracé |
|---|---|
| B | `M26 20v24 M26 20h6a5.5 5.5 0 0 1 0 11h-6 M26 31h7a6.5 6.5 0 0 1 0 13h-7` |
| F | `M27 44V20h11 M27 31h9` |
| P (Projet Labs et Cover Labs, ex-Plex Labs, de couleurs différentes ; le C de Cover Labs est proposé dans [propositions.md](propositions.md)) | `M26 44V20h6.5a6.5 6.5 0 0 1 0 13H26` |
| T | `M24 20h16 M32 20v24` |
| D | `M26 20h4.5a12 12 0 0 1 0 24H26z` |
| M | `M25 44V20l7 12 7-12v24` |

## Variante prisme (Dashboard Labs)

Dashboard Labs montre toute la suite : ses crochets reprennent le dégradé du
logo de la suite (`#7ee2a8` → `#6cc7f0` → `#b49cff` → `#ff9b6a`, de haut à
gauche à bas à droite, `x1=14 y1=17 x2=50 y2=47` en coordonnées de la grille).
Tuile, bordure 2,5 et initiale D en Lunaire `#e6edf3`. Réservée à cette appli.

## Logos propres (Crate, Digger)

Crate et Digger, dans la suite hors du schéma « … Labs », n'ont pas de
crochets. Construction commune (grille 512×512) : tuile `rect w=512 h=512
rx=112` en `#18181b`, traits `#f0f0f2` de 9, un seul point de la couleur de
l'appli. Crate : C vinyle, `apps/crate/logo/crate.svg`. Digger :
`logos/digger.svg`, trois disques dans un bac, le dernier tiré vers le haut
(proposition d'origine du 2026-11-12, remise le 2026-11-13 à la demande
d'Aurélien).

| Élément (Digger) | Valeur |
|---|---|
| Traits | `#f0f0f2`, épaisseur 26, bouts et angles arrondis (un trait seul : à 9 comme les sillons de Crate, il disparaît à 32 px) |
| Bac | `M112 236v152h288V236` (U ouvert vers le haut) |
| Disques rangés | Deux traits debout, `M176 380V250` et `M240 380V232` |
| Disque tiré | Trait penché `M318 380l26-196`, qui dépasse du bac |
| Point | Macaron du disque tiré, `r=34` en (352, 134), `#e45bd0` |

Le kit Labs OS embarque une copie de ces logos (champ `svg` de l'appli dans
`kit/labs-os.js`) : la changer en même temps que le fichier.

## Fichiers

`logos/<appli>.svg` (vectoriel, pour l'interface et le favicon) et
`logos/<appli>.png` (256×256, fond transparent, pour Unraid).

## Ajouter un logo

1. Copier un SVG existant, changer la couleur (3 occurrences) et le tracé de
   l'initiale.
2. Exporter en PNG 256×256 à fond transparent.
3. Ajouter la ligne dans [couleurs.md](couleurs.md), `catalogue.json` et
   `CATALOGUE.md`.

## Avatar du profil GitHub

`logos/profil.svg` et `logos/profil.png` (512×512) : l'avatar du compte
`brainwasher-01`, qui signe toute la suite. Ce n'est pas une appli : pas de
couleur propre ni d'entrée au catalogue.

| Élément | Valeur |
|---|---|
| Fond | Carré plein `#0b1015`, sans tuile ni bordure : GitHub recadre en cercle |
| Crochets | Mêmes tracés que les logos, en `#e6edf3` |
| Contenu | Cinq lignes alignées à gauche, trait 3,2 arrondi, une par appli dans l'ordre Backup, Plex (aujourd'hui Cover Labs), Finance, Projet, Torrent : `M24.5 21.5h15`, `M24.5 26.75h10`, `M24.5 32h13`, `M24.5 37.25h7`, `M24.5 42.5h11` (pas de 5,25) |

Écarts assumés : fond plein et PNG 512 px (GitHub demande au moins 420 px et
un fond opaque). Une nouvelle appli ajoute une ligne de sa couleur, en
resserrant le pas pour rester dans la zone y 20–44.

## Logo de la suite

`logos/labs.svg` et `logos/labs.png` (256×256, fond transparent) : la suite
Labs dans son ensemble, par exemple l'icône du dossier « Labs » dans Unraid.

| Élément | Valeur |
|---|---|
| Fond | Aucun, ni tuile ni bordure |
| Cadrage | `viewBox="11 11 42 42"` : marges réduites pour remplir l'icône |
| Crochets | Mêmes tracés que les logos, en dégradé des couleurs des applis (Backup → Finance → Projet → Torrent, de haut à gauche à bas à droite) |
| Contenu | Invite `>_` en `#e6edf3` : chevron `M25 25l6 6-6 6` (trait 4 arrondi), curseur `rect x=33 y=38 w=7 h=4 rx=1` |

Adresse pour Unraid :
`https://raw.githubusercontent.com/brainwasher-01/labs-brand/main/logos/labs.png`
