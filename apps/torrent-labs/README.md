# Torrent Labs — charte

## Identité

| | |
|---|---|
| Nom affiché | Torrent Labs |
| Nom écrit (logo texte) | `torrent.labs` |
| Rôle | Recherche de torrents sur tous les indexeurs de Prowlarr, résultats affichés en direct, envoi vers qBittorrent avec catégorie et tags (anciennement « TorrentScope ») |
| Nom du conteneur | `torrent-labs` |
| Couleur | `#ff9b6a` |
| Logo | [`../../logos/torrent-labs.svg`](../../logos/torrent-labs.svg), [`png`](../../logos/torrent-labs.png) |
| Icône Unraid | `https://raw.githubusercontent.com/brainwasher-01/labs-brand/main/logos/torrent-labs.png` |
| Technologie de l'interface | HTML (gabarits Jinja) + JavaScript sans framework ni étape de build, servi par FastAPI (Python) |
| État | En service |

## Thèmes

**Labs OS** (interface commune de la suite) depuis la 0.3.0, mode clair ou sombre ; l'ancien thème « Terminal » est retiré. Voir [theme.md](theme.md).

## Écrans

Voir [ecrans.md](ecrans.md).

## Vocabulaire propre

| Terme technique | Mot affiché |
|---|---|
| indexer (Prowlarr) | tracker (filtre), indexer (progression) |
| grab (envoi au client) | grab |
| seeders / leechers | S / L (colonnes), seeders / leechers (détail) |
| completed downloads (grabs) | DL / completed |
| Newznab categories | type (movies, tv / series, books…) |
| indexeur lent mis de côté | auto-disabled for 1 h |
| recherche en cours (flux SSE) | LIVE n/N indexers |

## Écarts assumés avec le commun

- **Interface en anglais, style terminal** (`search>`, `[ settings ]`,
  majuscules) : c'est l'identité de l'appli depuis TorrentScope et les
  termes viennent de l'écosystème torrent (seeders, grab, indexer). Le
  vocabulaire simplifié commun ([`../../docs/vocabulaire.md`](../../docs/vocabulaire.md))
  n'est pas appliqué.
- **Bouton grab en vert** (`--good`), alors que le vert est réservé aux états
  ([`../../docs/principes.md`](../../docs/principes.md)) : repère visuel hérité
  du thème terminal. Les autres actions utilisent l'accent bleu.
- **Pas de menu latéral** : navigation en haut (`[ search ] [ settings ] [ logs ]`),
  l'appli n'a que trois pages ([`../../docs/composants.md`](../../docs/composants.md)
  recommande un menu latéral).
- **Angles droits** et effets d'écran (lignes de balayage, vignettage) propres
  au thème Terminal.

## Journal

| Date | Changement |
|---|---|
| 2026-11-05 | Dossier créé avec le logo |
| 2026-11-05 | Charte complétée (v0.2.2) : identité, thème Terminal documenté avec ses fichiers, écrans, vocabulaire, écarts ; logo et icône Unraid de labs-brand adoptés dans l'appli |
