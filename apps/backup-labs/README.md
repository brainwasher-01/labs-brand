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

Un seul style, Console, en mode sombre, clair ou automatique (choix dans
Réglages, automatique par défaut) ; typographie IBM Plex Sans et Mono : voir
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

- **`.labs` et actions en `#13784a` en mode clair**, variante foncée de la
  couleur de l'appli, comme le propose Plex Labs dans
  [`../../docs/propositions.md`](../../docs/propositions.md) : `#7ee2a8` ne
  fait que 1,6:1 sur blanc, `#13784a` fait 5,5:1. En sombre, `#7ee2a8`.
- **Nom écrit en IBM Plex Mono, graisse 500**, plutôt que JetBrains Mono en
  gras (référence de [`../../docs/typographie.md`](../../docs/typographie.md)) :
  l'appli n'embarque plus qu'une famille de polices, IBM Plex Sans et Mono.

## Journal

| Date | Changement |
|---|---|
| 2026-11-05 | Charte créée ; thèmes Console, Marine, Doux ; logo `[B]` |
| 2026-11-05 | Thèmes Marine et Doux retirés : Console seul, en mode sombre, clair ou automatique ; typographie unifiée (IBM Plex Sans et Mono, corps 16 px, plancher 14 px) ; fichiers de thème et aperçu mis à jour |
| 2026-11-05 | v0.5.0 : menu groupé avec icônes Lucide, version de l'appli en bas du menu et page « Mises à jour » |
| 2026-11-05 | Interface à l'échelle 80 % sur ordinateur (racine `html` à 80 %), 100 % sur téléphone |
| 2026-11-05 | Échelle portée à 85 % sur ordinateur, contenu sur toute la largeur |
| 2026-11-06 | Échelle ramenée à 100 % (kit Labs OS 1.5.0) : texte courant 16 px dans toute la suite |
| 2026-11-06 | Échelle 87,5 % sur ordinateur (kit Labs OS 1.6.0) : texte courant 14 px, 16 px sur téléphone |
