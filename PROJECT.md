# Labs Brand

*Groupe : Labs · créé le 2026-11-05*

## Objectif
Identité commune de la suite Labs : logos, règles, chartes par appli et kit d'interface **Labs OS** (`kit/`), recopié dans chaque appli.

## Charte
Reprise de labs-brand le 2026-11-05 : voir [[CHARTE]].

## Architecture
- `kit/` : Labs OS (`labs-os.css`, `labs-os.js`, polices, `VERSION`). Depuis 1.3.0 : gabarit commun (menu `lo-side`, barre de recherche `lo-top`, tiroir mobile, jetons de texte et d'écarts). Mode d'emploi : `docs/labs-os.md`.
- `kit/labs-kit.yml` : modèle du workflow « Kit Labs OS » de chaque appli. Depuis le 2026-11-08, l'étape « Recopier le kit » échoue si `sync-labs-kit.sh` échoue (ref inexistante, réseau) au lieu de passer au vert ; contrôle hors ligne `python3 tests/check-labs-kit-sync.py`. À recopier dans `.github/workflows/labs-kit.yml` des applis.
- `apps/<appli>/` : charte de chaque appli ; `docs/` : règles communes ; `catalogue.json` + `CATALOGUE.md` : index.

## Installation / déploiement
À compléter.

## Décisions
Voir [[JOURNAL]].

## État
- 2026-11-08 : `catalogue.json` : `kit_dir` de Dashboard Labs déclaré (`static/labs-os`), contrôle `python3 tests/check-catalogue.py`.
- 2026-11-06 : kit 1.4.0 (échelle unique des hauteurs de contrôles, rangées alignées ; les 5 applis s'alignent dessus).
- 2026-11-06 : kit 1.5.0 (1 rem = 16 px imposé partout, plancher de texte 13 px, jetons d'écart des formulaires et cartes, composants lo-panel / lo-field / lo-check / lo-item / lo-pill / lo-toolbar ; les 5 applis passent à 100 %).
- 2026-11-06 : kit 1.6.0 (racine 87,5 % sur ordinateur / 100 % sur téléphone imposée par le kit, petits jetons relevés : 1.5.0 était trop gros et faisait déborder Asset).
- 2026-11-06 : kit 1.3.0 (gabarit commun, recherche en haut, palette identique sans changement d'appli, écarts de Backup Labs).

## Feuille de route
- [ ] Captures des cinq applis avec le gabarit 1.3.0 dans `apps/*/captures/`
