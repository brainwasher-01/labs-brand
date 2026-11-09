# CLAUDE.md — labs-brand

Dépôt **public** d'identité de la suite Labs : logos, règles communes,
chartes par appli. Pas de code applicatif.

- Sommaire : `README.md` ; index de la suite : `CATALOGUE.md` + `catalogue.json`.
- Modèle de workflow des applis : `kit/labs-kit.yml` (contrôle
  `python3 tests/check-labs-kit-sync.py` : l'étape de recopie doit échouer si le script échoue ;
  `python3 kit/tests/labs-kit-yml.py` : actions tierces épinglées par SHA, tag en commentaire).
- Règles communes : `DESIGN.md` et `docs/`. Les thèmes sont **propres à chaque
  appli** pour l'instant (`docs/themes.md`).
- Une appli ne modifie que **son** dossier `apps/<appli>/` (charte
  `README.md`, `theme.md`, `ecrans.md`, `theme/`, `captures/`), à partir des
  modèles de `apps/_modele/`.
- Changement du commun (`docs/`, `logos/`) : écrire d'abord une ligne dans
  `docs/propositions.md`.
- Mettre à jour et propager le kit : procédure dans `PROJECT.md`
  (« Installation / déploiement », contrôle `python3 tests/check-project-doc.py`).
- Kit `kit/` : toute modification du code du kit augmente `kit/VERSION` (et `KIT_VERSION` dans `labs-os.js`, `catalogue.json`, `CATALOGUE.md`) ; test d'accessibilité de la palette : `node kit/tests/palette-a11y.mjs` (Playwright + axe-core).
- À chaque changement : mettre à jour `CATALOGUE.md`, `catalogue.json` si le
  nom, la couleur, le rôle ou l'état d'une appli change, et `CHANGELOG.md`.
- Rien de privé : pas d'adresse IP, de secret, de jeton, de donnée personnelle
  dans les textes ou les captures.
- Documentation en français, commits en anglais (Conventional Commits).
- **Commits signés au nom d'Aurélien** (nom et adresse de son compte GitHub,
  à régler avec `git config` dans le dépôt), **sans aucune mention de Claude** :
  pas de ligne `Co-Authored-By`, `Claude-Session` ni « Generated with ».
- Logos : construction dans `docs/logos.md` ; toujours fournir SVG + PNG
  256×256 à fond transparent.
- Contrôles avant livraison : `python3 tests/check-catalogue.py` (catalogue) et
  `python3 tests/check-links.py [fichier.md…]` (liens relatifs, défaut CHARTE.md).
