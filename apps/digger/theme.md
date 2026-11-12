# Digger — thèmes

## Labs OS

Coque commune Labs OS (kit 2.5.0) : menu `lo-side`, barre de recherche `lo-top`, palette `Ctrl K`, pied du menu, mode automatique / sombre / clair, police Geist et JetBrains Mono pour le code. `LabsOS.init({ app: 'digger', … })` pose `data-lo-app="digger"`. Le pont de l'appli relie ses variables aux jetons `--lo-*` ; rien n'est redéfini dans le kit.

## Liste des thèmes

| Thème | Par défaut | Clair ou sombre | Esprit |
|---|---|---|---|
| Labs OS sombre | oui | sombre | fouiller les bacs au fond du magasin |
| Labs OS clair | non | clair | la même chose en plein jour |

Le mode suit le réglage du kit (automatique par défaut, sombre et clair en option).

## Couleurs

Fond, surfaces, texte, bordures et états : ceux de Labs OS. Propre à l'appli :

| Rôle | Variable | Sombre | Clair |
|---|---|---|---|
| Couleur d'appli (logo, nom écrit) | `--lo-app` | `#e45bd0` | `#e45bd0` |
| Accent (actions, barre de progression, ligne choisie) | `--lo-accent` | `#e45bd0` (6,4:1 sur `#07090f`) | `#a8279a` (6,1:1 sur blanc) |
| Texte sur accent | `--lo-on-accent` | `#0b0b0c` (6,3:1) | `#ffffff` (6,1:1) |

Règles :

- Les états d'un transfert ou d'une demande (en cours, reçu, échec, en attente) gardent les pastilles « un point et un mot » de Labs OS : bleu en cours, vert reçu, rouge échec, gris en attente. Le fuchsia ne dit jamais un état.
- La barre de progression d'un transfert est à la couleur d'accent ; un transfert en échec passe sa pastille au rouge, pas sa barre.
- Formats (FLAC 24 bits, FLAC, MP3 320…) : pastille neutre (`--lo-s2`, texte `--lo-text`) en `--lo-font-code`.
- Meilleur résultat d'une recherche : contour fin de la couleur d'accent (`star` du kit), avec le mot « Meilleur ».

## Typographie

| Usage | Police | Graisses |
|---|---|---|
| Interface, titres, valeurs (tailles, vitesses, nombre de pistes) | Geist (kit) | 400 à 700 |
| Formats, chemins de dossiers, journaux techniques | JetBrains Mono (kit, `--lo-font-code`) | 400, 500, 700 |

Échelle de texte : celle du kit (`--lo-fs-*`). Chiffres tabulaires (`font-variant-numeric: tabular-nums`) pour les tailles, les vitesses et les durées.

## Formes

Celles de Labs OS (`--lo-r`, `--lo-r-panel`, écarts 12 / 16 / 24 px, segments à pastille). Barres de progression : hauteur 6 px, rayon plein.

## Fichiers

Pas de fichiers de thème dans ce dépôt : le pont vit dans le dépôt de l'appli.
