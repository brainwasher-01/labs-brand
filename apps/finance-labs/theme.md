# Finance Labs — thèmes

Un seul thème aux couleurs du logo (bleu `#6cc7f0` sur `#0b1015`), en deux
variantes choisies par le système (`prefers-color-scheme`), sans sélecteur.
Variables CSS en tête de la page de l'appli ; copie de référence dans
[`theme/finance-labs.css`](theme/finance-labs.css) et
[`theme/tokens.json`](theme/tokens.json).

## Liste des thèmes

| Thème | Par défaut | Clair ou sombre | Esprit |
|---|---|---|---|
| Nuit | oui si le système est sombre | sombre | bleu, calme, chiffres lisibles |
| Jour | oui si le système est clair | clair | net, bleu profond, aéré |

## Nuit

| Rôle | Variable | Valeur |
|---|---|---|
| Fond | `--bg` | `#0b1015` |
| Surface (cartes) / surface 2 (survol, onglet actif, barres) | `--surface` / `--surface-2` | `#121a22` / `#1a2530` |
| Texte / texte secondaire | `--text` / `--muted` | `#e8eef3` / `#9db0c0` |
| Bordures | `--line` | `#283745` |
| Nom `.labs` | `--brand` | `#6cc7f0` |
| Accent (boutons, focus) / texte dessus | `--accent` / `--on-accent` | `#6cc7f0` / `#0b1015` |
| Fond de l'onglet actif | `--accent-soft` | `#16303f` |
| Réussi / À vérifier / Échec | `--good` `--warn` `--bad` | `#5fd39a` `#ffc266` `#ff8a8a` |
| Graphiques | `--c1` … `--c9` | `#6cc7f0` `#f2b06b` `#5ed1c2` `#8f9cff` `#e889b5` `#c7d36b` `#b49cff` `#8a9bab` `#f28b6b` |

## Jour

| Rôle | Variable | Valeur |
|---|---|---|
| Fond | `--bg` | `#f3f6f9` |
| Surface / surface 2 | `--surface` / `--surface-2` | `#ffffff` / `#e8eef4` |
| Texte / texte secondaire | `--text` / `--muted` | `#0b1015` / `#4e5c6a` |
| Bordures | `--line` | `#d2dbe4` |
| Nom `.labs` | `--brand` | `#16729f` |
| Accent / texte dessus | `--accent` / `--on-accent` | `#16729f` / `#ffffff` |
| Fond de l'onglet actif | `--accent-soft` | `#dcedf7` |
| Réussi / À vérifier / Échec | `--good` `--warn` `--bad` | `#1d7a4f` `#9a5a00` `#b42334` |
| Graphiques | `--c1` … `--c9` | `#16729f` `#b0650f` `#0f8577` `#4c5bd4` `#b5487f` `#6d7a12` `#7a5cd6` `#5d6d7c` `#c2522f` |

Tous les textes atteignent au moins 4,5:1 sur leur fond dans les deux
variantes (texte secondaire : 7,9:1 en Nuit, 6,9:1 en Jour).

## Graphiques

Couleurs lues dans le thème au moment du dessin, donc justes en clair comme
en sombre. Le bleu passe en premier : revenus et capital en `--c1` (bleu),
dépenses en `--c2` (sable), épargne cumulée en `--c3` (sarcelle), montants
versés en `--c8` (ardoise). Vert, ambre et rouge ne servent pas aux séries.

## Typographie

| Usage | Police | Graisses |
|---|---|---|
| Texte, titres, chiffres | Polices système (`-apple-system`, Segoe UI, Roboto…) | 400, 600, 700 ; chiffres tabulaires |
| Nom `finance.labs` | JetBrains Mono, embarquée (woff2, licence OFL) | 700 |
| Titres de cartes | Polices système, petites capitales espacées (13 px, majuscules) | 600 |

## Formes

Rayons : 14 px (cartes, zone de dépôt), 16 px (fenêtres), 10 px (boutons,
champs, onglets), pastilles arrondies. Bordures 1 px `--line`. Pas d'ombre.
Focus : contour 2 px `--focus` (= accent). Onglet actif : fond
`--accent-soft` et trait de 2 px dans l'accent en bas.

## Fichiers

[`theme/finance-labs.css`](theme/finance-labs.css) (variables et règles de
base) et [`theme/tokens.json`](theme/tokens.json).
