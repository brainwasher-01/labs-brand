# Projet Labs — thèmes

## Labs OS (thème actuel)

Projet Labs est la référence de **Labs OS**, l'interface commune de la suite
([docs/labs-os.md](../../docs/labs-os.md)) : kit copié dans `app/static/labs-os/`,
mis à jour par propagation (c'est Projet Labs qui la déclenche, page *La suite*).

| Thème | Par défaut | Clair ou sombre | Esprit |
|---|---|---|---|
| Labs OS sombre | oui (si le système est sombre) | sombre | bleu nuit, dense, accent lavande |
| Labs OS clair | oui (si le système est clair) | clair | le même, lavande foncée |

Mode choisi par le bouton soleil du dock ou la palette `Ctrl K`, mémorisé par
navigateur (`labs.mode`).

## Couleurs

Pont en tête de `app/static/app.css` : `--bg`, `--side`, `--surface`,
`--surface-2`, `--surface-3`, `--line`, `--text`, `--text-2`, `--text-3`,
`--accent`, `--green`, `--amber`, `--red`, `--blue` → jetons `--lo-*` du kit.

| Rôle | Sombre | Clair |
|---|---|---|
| Accent (actions, nom `.labs`) | `#b49cff` | `#5b3fd1` (6,8:1 sur blanc) |
| Texte sur l'accent | `#07090f` | `#ffffff` |
| Réussi / À vérifier / Échec / En cours | `--lo-ok` `--lo-warn` `--lo-fail` `--lo-busy` | idem, variantes claires |

Coloration du code (highlight.js) et des diffs : couleurs claires en sombre,
assombries en mode clair (fin de `app.css`). Projets : logo de l'appli de la
suite si le projet en est une, sinon monogramme gris.

## Typographie

IBM Plex Sans (texte), JetBrains Mono (menu, nom `projet.labs`, données),
embarquées par le kit. Tout en rem, racine à 85 % sur ordinateur.

## Formes

Rayons 8 px (cartes), 6 px (boutons, champs) ; bordures 1 px ; pas d'ombre
hors fenêtres. Titres de page entre crochets, coins en crochet au survol des
cartes (`.card`), en permanence sur les cartes vedettes (`.card.hero`).
