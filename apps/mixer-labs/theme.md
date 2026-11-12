# Mixer Labs — thèmes

## Labs OS

Coque commune Labs OS (kit 2.1.0) : menu `lo-side`, barre de recherche `lo-top`, palette `Ctrl K`, pied du menu, mode automatique / sombre / clair, police Geist et JetBrains Mono pour le code. `LabsOS.init({ app: 'mixer', … })` pose `data-lo-app="mixer"`. Le pont de l'appli relie ses variables (Tailwind v4, `@theme`) aux jetons `--lo-*` ; rien n'est redéfini dans le kit.

## Liste des thèmes

| Thème | Par défaut | Clair ou sombre | Esprit |
|---|---|---|---|
| Labs OS sombre | oui | sombre | cabine de mixage la nuit |
| Labs OS clair | non | clair | préparation au calme |

Le mode suit le réglage du kit (sombre par défaut dans l'appli, clair et système en option).

## Couleurs

Fond, surfaces, texte, bordures et états : ceux de Labs OS. Propre à l'appli :

| Rôle | Variable | Sombre | Clair |
|---|---|---|---|
| Couleur d'appli (logo, nom écrit) | `--lo-app` | `#8ef26a` | `#8ef26a` |
| Accent (actions, piste sélectionnée) | `--lo-accent` | `#8ef26a` (14,3:1 sur `#07090f`) | `#34791b` (5,4:1 sur blanc) |
| Texte sur accent | `--lo-on-accent` | `#0b1f05` | `#ffffff` |

Couleurs de données : **pistes A à H** du studio (bloc de la piste, forme d'onde, pastille de la lettre). La teinte « sombre » sert sur fond sombre et pour les remplissages ; la teinte « clair » sert de trait et de texte sur fond clair (formes d'onde à 35 % d'opacité dans les deux modes).

| Piste | Sombre | Contraste sur `#07090f` | Clair | Contraste sur blanc |
|---|---|---|---|---|
| A | `#8ef26a` (couleur d'appli) | 14,3:1 | `#34791b` | 5,4:1 |
| B | `#7cb4ff` | 9,3:1 | `#1f5fc4` | 6,0:1 |
| C | `#ffc65c` | 12,8:1 | `#8a5c00` | 5,8:1 |
| D | `#c4a3ff` | 9,5:1 | `#6a42d6` | 6,2:1 |
| E | `#5fe0d2` | 12,4:1 | `#0f766e` | 5,5:1 |
| F | `#ff9cc9` | 10,3:1 | `#b0306f` | 6,0:1 |
| G | `#ffad6b` | 10,8:1 | `#a64b0a` | 5,8:1 |
| H | `#c3cbd6` | 12,2:1 | `#4b5563` | 7,6:1 |
| Samples | `#e6edf3` | 16,8:1 | `#1b2230` | 15,9:1 |

Règles :

- Une couleur de piste ne dit jamais un état (réussi, en cours, échec) : les états gardent les pastilles « un point et un mot » de Labs OS.
- La lettre de la piste accompagne toujours sa couleur (bloc, en-tête, panneau).
- **Rouge** (`--lo-fail`) : alertes de vérification (voix sur voix, basses superposées, phrases décalées, étirement au-delà de ±8 %) et marque SORTIE ; zone d'alerte surlignée sur la forme d'onde.
- Courbes d'automation et points : blanc en sombre (`--lo-text`), quasi noir en clair ; point sélectionné à la couleur d'accent.
- Tête de lecture : `--lo-text`, 2 px.

## Typographie

| Usage | Police | Graisses |
|---|---|---|
| Interface, titres, valeurs (tempo, mesures, temps) | Geist (kit) | 400 à 700 |
| Code, journaux techniques | JetBrains Mono (kit, `--lo-font-code`) | 400, 500, 700 |

Échelle de texte : celle du kit (`--lo-fs-*`). Chiffres tabulaires (`font-variant-numeric: tabular-nums`) pour le tempo, les mesures et le temps.

## Formes

Celles de Labs OS (`--lo-r`, `--lo-r-panel`, écarts 12 / 16 / 24 px, segments à pastille). Blocs de morceaux de la vue du set : rayon 6 px. Points de courbe : cercles de 10 px (cible tactile de 44 px).

## Fichiers

Pas de fichiers de thème dans ce dépôt : le pont vit dans le dépôt de l'appli.
