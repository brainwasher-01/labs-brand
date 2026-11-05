# Crate — charte

> **Hors suite Labs (appli associée).** Crate garde son nom, son logo et son
> thème. Il est référencé ici pour que Projet Labs voie toutes les applis au
> même endroit ; les règles communes de `docs/` lui servent de
> recommandations, pas d'obligations (voir « Écarts assumés »).

## Identité

| | |
|---|---|
| Nom affiché | Crate |
| Nom écrit (logo texte) | `CRATE` (Archivo étroit, très gras, en capitales ; pas de `.labs`) |
| Rôle | Curation, enrichissement et organisation d'une bibliothèque musicale auto-hébergée : fiches artistes, albums, labels, pistes et genres ; notes, écoutes et playlists ; contrôle qualité des métadonnées (NFO, tags, MusicBrainz) ; nouveautés des artistes et labels suivis ; téléchargements Soulseek ; lecteur audio intégré |
| North Star visuelle | « Fouiller le bac » : on feuillette sa collection comme un bac de disquaire |
| Nom du conteneur | `crate` |
| Image | `ghcr.io/brainwasher-01/crate` (construite par GitHub Actions) |
| Dépôt | `brainwasher-01/crate` (privé) |
| Port de l'interface | `8993` |
| Couleur principale | `#d9701f` (orange intercalaire, trou du vinyle du logo) ; variante claire du mode sombre `#ef8a3c` ; variante texte sur fond clair `#a85310` (5,4:1 sur blanc) |
| Logo | [`logo/crate.svg`](logo/crate.svg), [`logo/crate.png`](logo/crate.png) (256×256, fond transparent) ; marque seule sans tuile : [`logo/crate-mark.svg`](logo/crate-mark.svg) |
| Icône Unraid | `https://raw.githubusercontent.com/brainwasher-01/labs-brand/main/apps/crate/logo/crate.png` |
| Technologie de l'interface | React 19, TypeScript, Vite, TanStack Router et Query, Tailwind CSS v4, composants shadcn ; API FastAPI (Python) |
| État | En service |

## Logo

Un **C découpé dans un vinyle** : quatre sillons en traits clairs (`#f0f0f2`),
coupés par un gabarit en C (anneau ouvert à droite), trou central orange
(`#d9701f`), sur une tuile noir vinyle (`#18181b`, coins arrondis rx 112 sur
512). Monochrome, lisible à 16 px, jamais de texte dans l'icône : le mot
« CRATE » s'écrit à côté, dans le rail.

| Élément (grille 512×512) | Valeur |
|---|---|
| Tuile | `rect 512×512 rx=112`, `#18181b` |
| Gabarit C (masque) | disque r 196, moins disque r 104, moins le triangle `M256 256 L512 196 L512 316 Z` |
| Sillons | cercles r 190, 166, 142, 118, trait 9 (14 pour la marque seule), `#f0f0f2` |
| Trou central | disque r 22 (28 pour la marque seule), `#d9701f` |

Source unique dans le dépôt de Crate : `scripts/icon/generate_icons.py`
(favicon, icônes d'installation iOS et Android) et le composant
`CrateMark.tsx` (marque en ligne, couleur du texte).

## Thèmes

Un seul thème, **Bac de disquaire**, en clair, sombre ou auto (suit le
système). Voir [theme.md](theme.md) ; fichiers dans [`theme/`](theme/).

## Écrans

Voir [ecrans.md](ecrans.md). Captures récentes (données fictives des tests
visuels) dans [`captures/`](captures/) :

| Capture | Écran |
|---|---|
| [accueil-clair.png](captures/accueil-clair.png) | Accueil, mode clair |
| [albums-sombre.png](captures/albums-sombre.png) | Liste des albums, mode sombre |
| [fiche-album-sombre.png](captures/fiche-album-sombre.png) | Fiche album, mode sombre |
| [fiche-album-clair.png](captures/fiche-album-clair.png) | Fiche album, mode clair |
| [playlist-clair.png](captures/playlist-clair.png) | Fiche playlist, mode clair |
| [qualite-clair.png](captures/qualite-clair.png) | Qualité des données, mode clair |
| [fiche-artiste-telephone-sombre.png](captures/fiche-artiste-telephone-sombre.png) | Fiche artiste sur téléphone, mode sombre |

## Vocabulaire propre

Crate garde les termes d'usage de la musique et de ses outils, même anglais
(on dit « seeder », pas « partageur ») ; on y tutoie l'utilisateur.

| Terme technique | Mot affiché |
|---|---|
| artwork, pochette | **cover** (jamais « pochette » dans l'interface) |
| track | piste |
| release group, édition | sortie, édition |
| override (valeur posée à la main) | manuel, « Rétablir » pour revenir à la valeur d'origine |
| fichier NFO (source de vérité) | NFO, « Lire le NFO » |
| entretien des données | Curation |
| release récente d'une source suivie | Nouveautés |
| suivre une source (artiste, label) | Suivre / Suivi |
| source ignorée | Sourdine |
| pistes sans note | Non noté |
| journal d'audit | Log |
| playlist `.m3u8` | Playlist ; « Préparation de mix » (tempo, tonalité, export) |
| transcodage AAC | Compact (AAC) ; fichier brut = Sans perte |
| loudness EBU R128 | Sonie (LUFS) |
| tonalité musicale | Tonalité (notation Camelot, ex. 7A) |
| artistes crédités en featuring | Featurings |
| écriture vers Plex | Projeter vers Plex |
| suppression réversible | Corbeille (suppression automatique après 30 jours) |
| marque d'état | gommette (`Mark`) |
| titre de section | onglet d'intercalaire |

## Écarts assumés avec le commun

Crate n'est pas une appli Labs : ces écarts sont voulus et ne sont pas à
corriger.

- **Logo** : C découpé dans un vinyle, pas les crochets de
  [`../../docs/logos.md`](../../docs/logos.md) ; tuile `#18181b` sans bordure
  de couleur ; fichiers dans `apps/crate/logo/` et non dans `logos/`.
- **Nom écrit** : `CRATE` en capitales, pas de forme `crate.labs`
  ([`../../docs/typographie.md`](../../docs/typographie.md)).
- **Couleurs d'état** : sarcelle (réussi), jaune (à vérifier), rose (échec),
  bleu (information), toujours avec un mot dans une gommette, au lieu du
  vert, ambre et rouge de [`../../docs/principes.md`](../../docs/principes.md).
- **Ton** : tutoiement et termes de métier anglais conservés (cover, seeder,
  featuring, NFO, Log) ; le glossaire de
  [`../../docs/vocabulaire.md`](../../docs/vocabulaire.md) n'est pas appliqué
  tel quel.
- **Ressources externes** : les polices sont embarquées, mais Crate affiche
  des covers de Cover Art Archive (mises en cache par le serveur), des photos
  d'artistes Deezer et des liens d'écoute (Apple Music, SoundCloud,
  Bandcamp) : écart au principe « Local d'abord ».
- **Mise en page** : rail de 15 rem (pas 14,5) ; sous 48 rem, barre du haut
  et barre de navigation basse (pas de bouton « Menu ») ; de 48 à 64 rem, rail
  d'icônes ; lecteur audio en bas de l'écran.
- **Bouton principal** : noir vinyle en clair, orange en sombre ; destructif
  toujours en lavis rose, confirmé deux fois pour les suppressions.

## Liens

| | |
|---|---|
| Thèmes | [theme.md](theme.md) |
| Écrans | [ecrans.md](ecrans.md) |
| Système visuel complet | `DESIGN.md` du dépôt de Crate |
| Règles communes (recommandations) | [`../../DESIGN.md`](../../DESIGN.md) |

## Journal

| Date | Changement |
|---|---|
| 2026-11-05 | Charte créée (Crate 0.77.3) : identité, logo, thème Bac de disquaire clair et sombre, écrans, captures, vocabulaire, écarts ; Crate référencé comme appli associée hors suite Labs |
