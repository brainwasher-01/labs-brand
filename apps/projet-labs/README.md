# Projet Labs — charte

## Identité

| | |
|---|---|
| Nom affiché | Projet Labs |
| Nom écrit (logo texte) | `projet.labs` |
| Rôle | Base de connaissances Markdown versionnée de la suite : chaque projet est un dépôt Git, consultable comme dans Obsidian, alimenté par Claude via un serveur MCP, avec restauration en un clic. Tient aussi la vue d'ensemble et la cohérence de la suite Labs (lecture de ce dépôt) |
| Nom du conteneur | `projet-labs` |
| Couleur | `#b49cff` |
| Logo | [`../../logos/projet-labs.svg`](../../logos/projet-labs.svg), [`png`](../../logos/projet-labs.png) |
| Icône Unraid | `https://raw.githubusercontent.com/brainwasher-01/labs-brand/main/logos/projet-labs.png` |
| Technologie de l'interface | HTML + JavaScript sans framework, servi par FastAPI (Python) ; polices et bibliothèques embarquées |
| État | En développement (v1.0.0, prête à installer) |

## Thèmes

Un thème sombre, « Nuit », proche du thème Console de Backup Labs, avec
l'accent lavande de l'appli : voir [theme.md](theme.md) et
[`theme/tokens.json`](theme/tokens.json).

## Écrans

Voir [ecrans.md](ecrans.md).

## Vocabulaire propre

| Terme technique | Mot affiché |
|---|---|
| repository Git | projet |
| commit | version |
| tag annoté `snap/…` | point de restauration (une version nommée) |
| rollback, revert | restaurer, « revenir ici » |
| diff | changements |
| wikilink `[[…]]` | lien |
| backlink | rétrolien |
| MCP server / connector | connexion Claude, connecteur |
| MCP token | code d'accès |
| mirror push | sauvegarde |
| external sync | modifications faites hors de l'appli |

## Rôle dans la suite

Projet Labs lit `catalogue.json`, les chartes `apps/*/` et
`docs/propositions.md` pour afficher la page « La suite Labs » (applis,
rôles, états, couleurs, logos, liens vers les chartes) et signaler les écarts.
Il rédige les propositions d'harmonisation dans
[`../../docs/propositions.md`](../../docs/propositions.md) et tient à jour
`CATALOGUE.md`, `catalogue.json` et `CHANGELOG.md`. Suivi détaillé :
[suivi.md](suivi.md).

## Écarts assumés avec le commun

- **Point de restauration** : le glossaire commun traduit *snapshot* par
  « version ». Ici chaque enregistrement est déjà une version ; les versions
  nommées s'appellent « points de restauration ». Ajout au glossaire proposé
  dans `docs/propositions.md`.
- **Noms de classes** : `.card` au lieu de `.panel` (le panneau latéral droit
  s'appelle déjà `.panel`). Comportement identique.

## Journal

| Date | Changement |
|---|---|
| 2026-11-05 | Dossier créé avec le logo ; charte à compléter par le projet |
| 2026-11-05 | Charte complétée : identité, vocabulaire, écrans, thème « Nuit », rôle de suivi de la suite |
