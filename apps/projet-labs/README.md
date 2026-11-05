# Projet Labs — charte

## Identité

| | |
|---|---|
| Nom affiché | Projet Labs |
| Nom écrit (logo texte) | `projet.labs` |
| Rôle | Base de connaissances Markdown versionnée (un projet = un dépôt Git), pont MCP avec Claude, restauration en un clic ; gardien de la cohérence de la suite et de la **propagation de Labs OS** à toutes les applis |
| Nom du conteneur | `projet-labs` |
| Couleur | `#b49cff` |
| Logo | [`../../logos/projet-labs.svg`](../../logos/projet-labs.svg), [`png`](../../logos/projet-labs.png) |
| Icône Unraid | `https://raw.githubusercontent.com/brainwasher-01/labs-brand/main/logos/projet-labs.png` |
| Technologie de l'interface | HTML + JavaScript sans framework ni étape de build (marked, DOMPurify, highlight.js embarqués), servi par FastAPI (Python) |
| État | En service |

## Thèmes

**Labs OS**, mode automatique, sombre ou clair : voir [theme.md](theme.md).

## Écrans

Accueil (carte Claude, projets, activité), projet (aperçu, versions, branches, GitHub, graphe), document (lire, éditer, historique, auteurs, liens), graphe global, tags, GitHub, **La suite Labs** (applis, interface commune et propagation, propositions), réglages.

## Vocabulaire propre

| Terme technique | Mot affiché |
|---|---|
| commit | version |
| tag `snap/…` | point de restauration |
| repository_dispatch `labs-kit` | Propager à la suite |

## Écarts assumés avec le commun

Aucun : Projet Labs sert de référence à Labs OS.

## Journal

| Date | Changement |
|---|---|
| 2026-11-05 | Dossier créé avec le logo ; charte à compléter par le projet |
| 2026-11-05 | Charte complétée ; thème Labs OS documenté ; Projet Labs pilote la propagation du kit |
