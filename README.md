# Labs — identité et chartes de la suite

Ressources communes de la suite Labs (homelab) : **Backup Labs, Asset Labs,
Finance Labs, Projet Labs, Torrent Labs**. Ce dépôt est public pour qu'Unraid
puisse télécharger les icônes des conteneurs ; il ne contient ni code
applicatif ni secret.

- **Vue d'ensemble de toutes les applis** : [CATALOGUE.md](CATALOGUE.md)
  (et [catalogue.json](catalogue.json) pour les outils, dont Projet Labs).
- **Règles communes** : [DESIGN.md](DESIGN.md).
- **Charte de chaque appli** : `apps/<appli>/`.
- **Déposer ou mettre à jour sa charte** : [docs/contribuer.md](docs/contribuer.md).

## Organisation

| Chemin | Contenu |
|---|---|
| `logos/` | Logos en SVG et PNG 256 px (icônes Unraid) |
| `docs/` | Règles communes : principes, thèmes, couleurs, typographie, composants, vocabulaire, logos, icônes Unraid, contribution |
| `apps/<appli>/README.md` | Charte d'une appli : identité, couleur, vocabulaire propre, écarts |
| `apps/<appli>/theme.md` | Thèmes de l'appli (chacune les siens pour l'instant) |
| `apps/<appli>/theme/` | Fichiers du thème, facultatif |
| `apps/_modele/` | Modèles de charte et de thème à copier |
| `CATALOGUE.md`, `catalogue.json` | Index de toute la suite |
| `CHANGELOG.md` | Historique des changements |
| `CLAUDE.md` | Consignes pour les assistants qui travaillent sur ce dépôt |

## Icône d'un conteneur Unraid

```xml
<Icon>https://raw.githubusercontent.com/brainwasher-01/labs-brand/main/logos/backup-labs.png</Icon>
```

Toutes les adresses : [docs/icones-unraid.md](docs/icones-unraid.md).
