# Backup Labs — charte

## Identité

| | |
|---|---|
| Nom affiché | Backup Labs |
| Nom écrit (logo texte) | `backup.labs` |
| Rôle | Sauvegarde tout-en-un pour Unraid : applications Docker, Plex, dossiers et clé Unraid, versionnés, chiffrés, copiés sur une autre machine |
| Nom du conteneur | `backup-labs` (même image en rôle « principal » ou « réserve ») |
| Couleur | `#7ee2a8` |
| Logo | [`../../logos/backup-labs.svg`](../../logos/backup-labs.svg), [`png`](../../logos/backup-labs.png) |
| Icône Unraid | `https://raw.githubusercontent.com/brainwasher-01/labs-brand/main/logos/backup-labs.png` |
| Technologie de l'interface | SvelteKit (statique, embarqué dans un binaire Go) |
| État | En service sur le serveur principal |

## Thèmes

Trois thèmes au choix dans Réglages, Console par défaut : voir
[theme.md](theme.md), fichiers dans [`theme/`](theme/), aperçu
[`preview.html`](preview.html).

## Écrans

Voir [ecrans.md](ecrans.md).

## Vocabulaire propre

| Terme technique | Mot affiché |
|---|---|
| job | sauvegarde |
| run | passage |
| destination + dépôt restic | emplacement |
| snapshot restic | version |
| rétention | combien de versions garder |
| quiescence snapshot / snapshot-live / stop / none | rapide / sans interruption / arrêt pendant la copie / à chaud |
| recovery kit | kit de secours |
| replication (restic copy) | copie de sécurité |
| agent / node secondaire | machine en rôle « réserve » |
| pairing | relier une machine |
| notifications | alertes |

## Écarts assumés avec le commun

Aucun.

## Journal

| Date | Changement |
|---|---|
| 2026-11-05 | Charte créée ; thèmes Console, Marine, Doux ; logo `[B]` |
