# Icônes dans Unraid

Unraid télécharge lui-même l'icône d'un conteneur depuis l'adresse du champ
*Icon* de son template. Ce dépôt est public pour cela.

```xml
<Icon>https://raw.githubusercontent.com/brainwasher-01/labs-brand/main/logos/backup-labs.png</Icon>
```

Sur un conteneur déjà installé : *Docker → Edit → Advanced View → Icon URL*,
coller l'adresse, *Apply*.

| Appli | Adresse |
|---|---|
| Backup Labs | `https://raw.githubusercontent.com/brainwasher-01/labs-brand/main/logos/backup-labs.png` |
| Plex Labs | `https://raw.githubusercontent.com/brainwasher-01/labs-brand/main/logos/plex-labs.png` |
| Finance Labs | `https://raw.githubusercontent.com/brainwasher-01/labs-brand/main/logos/finance-labs.png` |
| Projet Labs | `https://raw.githubusercontent.com/brainwasher-01/labs-brand/main/logos/projet-labs.png` |
| Torrent Labs | `https://raw.githubusercontent.com/brainwasher-01/labs-brand/main/logos/torrent-labs.png` |
| Suite (dossier « Labs ») | `https://raw.githubusercontent.com/brainwasher-01/labs-brand/main/logos/labs.png` |

Copier un PNG à la main dans le cache d'Unraid ne suffit pas : sans adresse
dans le template, Unraid affiche un « ? ».
