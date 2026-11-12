# Digger — charte

> **Dans la suite depuis le 2026-11-12, hors du schéma « … Labs ».** Comme
> Crate, Digger s'appelle Digger (sans « .labs ») et vit sous Labs OS
> (coquille, menu, palette, pied commun, contrôles du kit). Couleur fuchsia en
> dérogation à la règle des 40°. Brief, écrans et contrat avec Crate :
> `docs/brief.md` du projet digger dans Projet Labs.

## Identité

| | |
|---|---|
| Nom affiché | Digger |
| Nom écrit (logo texte) | `Digger` (pas de `.labs`) |
| Rôle | Trouver et télécharger de la musique sur Soulseek (slskd), puis la remettre à Crate : recherche, téléchargement en un clic, transferts, demandes venues de Crate (absents, meilleure version, pistes abîmées), artistes et labels suivis. Digger ne touche jamais la bibliothèque : Crate garde la curation et les imports |
| North Star visuelle | « Fouiller les bacs » : on feuillette les disques des autres pour trouver le bon pressage |
| Nom du conteneur | `digger` |
| Dépôt | `brainwasher-01/digger` (privé) |
| Couleur | **Fuchsia** `#e45bd0` (309° ; 6,4:1 sur `#07090f`), `#a8279a` sur fond clair (6,1:1 sur blanc) |
| Logo | [`../../logos/digger.svg`](../../logos/digger.svg) — bac de disques vu de face, pochettes feuilletées qui dépassent, un disque sorti avec son macaron fuchsia ; construction de Crate (voir `docs/logos.md`). PNG pour Unraid à exporter |
| Icône Unraid | `https://raw.githubusercontent.com/brainwasher-01/labs-brand/main/logos/digger.png` (à déposer) |
| Technologie | Serveur Python, FastAPI, SQLite ; interface React, TypeScript, Vite ; kit Labs OS dans `frontend/public/labs-os/` |
| Appli liée | Crate : Digger reçoit ses demandes et lui remet les fichiers reçus (dossier de dépôt, manifeste `digger.json`) |
| État | en construction (squelette 0.1.0) |

Pourquoi le fuchsia : depuis Mixer Labs, plus aucune teinte n'est à 40° de
toutes les autres (`docs/couleurs.md`). Le fuchsia, choisi par Aurélien le
2026-11-12, est à 54° de Projet Labs, 71° de Torrent Labs et 77° de Crate ; il
n'est qu'à 14° du rose réservé `#f27ec6`, d'où la dérogation. Il se distingue
nettement de l'orange de Crate, son voisin direct.

## Thèmes

Voir [theme.md](theme.md).

## Écrans

| Écran | Rôle |
|---|---|
| Accueil | Ce qui arrive (transferts en cours avec progression), ce qui attend (demandes de Crate, nouveautés suivies), derniers reçus remis à Crate |
| Chercher | Un champ (artiste et titre), résultats en liste : dossier, partageur, format, taille, nombre de pistes, file du partageur, bouton « Télécharger » ; le meilleur résultat en tête, marqué |
| Transferts | Une ligne par dossier, barre de progression, état en pastille, actions Annuler et Relancer ailleurs |
| Demandes | Ce que Crate a demandé (absents, meilleure version, pistes abîmées), avec l'état de chaque demande |
| Suivis | Artistes et labels suivis, téléchargement automatique oui / non, types (album, EP, single) |
| Réglages | slskd (adresse, clé, test), formats préférés (liste ordonnée), dossier de dépôt, lien avec Crate (adresse, jeton) |

## Vocabulaire propre

| Terme technique | Mot affiché |
|---|---|
| Peer, user | Partageur |
| Upload queue | File du partageur |
| Download | Transfert (téléchargement dans les boutons) |
| Folder | Dossier |
| Request | Demande |
| Follow | Suivi |
| Drop folder | Dossier de dépôt |
| Preferred formats | Formats préférés |

## Écarts assumés avec le commun

- **Nom et logo hors du schéma « … Labs »**, comme Crate : pas de crochets ni
  de « .labs » ; logo sur tuile `#18181b`, traits `#f0f0f2`, un seul point de
  la couleur de l'appli.
- **Couleur en dérogation** à la règle des 40° (14° du rose réservé).
- **Formats** (FLAC 24 bits, FLAC, MP3 320…) en pastille neutre, à chasse fixe
  (`--lo-font-code`) : c'est une donnée, jamais un état.
- **Téléphone** : barre basse à quatre entrées (Accueil, Chercher, Transferts,
  Plus) en plus du tiroir commun, comme Crate.

## Journal

| Date | Changement |
|---|---|
| 2026-11-12 | Charte créée : nom « Digger » seul, couleur Fuchsia en dérogation, logo propre sur la construction de Crate, kit Labs OS 2.5.0 (choix d'Aurélien) |
