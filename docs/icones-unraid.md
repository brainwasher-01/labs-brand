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
| Dashboard Labs | `https://raw.githubusercontent.com/brainwasher-01/labs-brand/main/logos/dashboard-labs.png` |
| Mixer Labs | `https://raw.githubusercontent.com/brainwasher-01/labs-brand/main/logos/mixer-labs.png` (PNG à déposer) |
| Suite (dossier « Labs ») | `https://raw.githubusercontent.com/brainwasher-01/labs-brand/main/logos/labs.png` |

Copier un PNG à la main dans le cache d'Unraid ne suffit pas : sans adresse
dans le template, Unraid affiche un « ? ».

## Produire le PNG d'une nouvelle appli

PNG 256 × 256, fond transparent, rendu directement depuis le SVG de `logos/`
(même rendu que les PNG existants, vérifié sur torrent-labs) :

```bash
rsvg-convert -w 256 -h 256 logos/<appli>.svg -o logos/<appli>.png
```

Projet Labs ne stocke que du texte : le PNG se dépose dans le dépôt GitHub par
*Add file → Upload files* dans `logos/`.
