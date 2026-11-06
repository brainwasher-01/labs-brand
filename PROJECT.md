# Labs Brand

*Groupe : Labs · créé le 2026-11-05*

## Objectif
Identité commune de la suite Labs : logos, règles, chartes par appli et kit d'interface **Labs OS** (`kit/`), recopié dans chaque appli.

## Charte
Reprise de labs-brand le 2026-11-05 : voir [[CHARTE]].

## Architecture
- `kit/` : Labs OS (`labs-os.css`, `labs-os.js`, polices, `VERSION`). Depuis 1.3.0 : gabarit commun (menu `lo-side`, barre de recherche `lo-top`, tiroir mobile, jetons de texte et d'écarts). Mode d'emploi : `docs/labs-os.md`.
- `apps/<appli>/` : charte de chaque appli ; `docs/` : règles communes ; `catalogue.json` + `CATALOGUE.md` : index.

## Installation / déploiement
À compléter.

## Décisions
Voir [[JOURNAL]].

## État
- 2026-11-06 : kit 1.4.0 (échelle unique des hauteurs de contrôles, rangées alignées ; les 5 applis s'alignent dessus).
- 2026-11-06 : kit 1.5.0 (1 rem = 16 px imposé partout, plancher de texte 13 px, jetons d'écart des formulaires et cartes, composants lo-panel / lo-field / lo-check / lo-item / lo-pill / lo-toolbar ; les 5 applis passent à 100 %).
- 2026-11-06 : kit 1.3.0 (gabarit commun, recherche en haut, palette identique sans changement d'appli, écarts de Backup Labs).

## Feuille de route
- [ ] Captures des cinq applis avec le gabarit 1.3.0 dans `apps/*/captures/`
