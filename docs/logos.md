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
| A | `M24.5 44 32 20l7.5 24 M27 36h10` |
| F | `M27 44V20h11 M27 31h9` |
| P | `M26 44V20h6.5a6.5 6.5 0 0 1 0 13H26` |
| T | `M24 20h16 M32 20v24` |

## Fichiers

`logos/<appli>.svg` (vectoriel, pour l'interface et le favicon) et
`logos/<appli>.png` (256×256, fond transparent, pour Unraid).

## Ajouter un logo

1. Copier un SVG existant, changer la couleur (3 occurrences) et le tracé de
   l'initiale.
2. Exporter en PNG 256×256 à fond transparent.
3. Ajouter la ligne dans [couleurs.md](couleurs.md), `catalogue.json` et
   `CATALOGUE.md`.
