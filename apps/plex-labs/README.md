# Plex Labs — charte

## Identité

| | |
|---|---|
| Nom affiché | Plex Labs |
| Nom écrit (logo texte) | `plex.labs` |
| Rôle | Gestion des visuels d'une médiathèque Plex : copie les affiches, logos et backgrounds préparés vers les dossiers des films et séries puis rafraîchit Plex, et crée covers, cartes de titre d'épisodes, vignettes de bandes-annonces et placeholders « À venir » (anciennement « Plex Labs ») |
| Nom du conteneur | `plex-labs` |
| Couleur | `#f2b84b` |
| Logo | [`../../logos/plex-labs.svg`](../../logos/plex-labs.svg), [`png`](../../logos/plex-labs.png) (copiés dans l'appli : favicon, menu, page de connexion, écran d'accueil iPhone) |
| Icône Unraid | `https://raw.githubusercontent.com/brainwasher-01/labs-brand/main/logos/plex-labs.png` |
| Technologie de l'interface | HTML + CSS + JavaScript sans framework ni étape de build, servis par FastAPI (Python 3.12) |
| État | En service |

## Thèmes

Deux thèmes, clair (référence) et sombre, qui suivent le système ou le choix
fait dans le menu : voir [theme.md](theme.md), jetons dans [`theme/`](theme/).

## Écrans

Voir [ecrans.md](ecrans.md).

## Vocabulaire propre

| Terme technique | Mot affiché |
|---|---|
| dossier source des images (assets) | assets (toujours en indigo) |
| dossier du film ou de la série vu par Plex | médias (toujours en teal) |
| copie assets → médias | synchroniser |
| dry run | simulation (« Passer en actif » pour écrire vraiment) |
| poster / show | affiche |
| background / fanart | Background (mot gardé) |
| clearlogo | logo |
| squareArt | art carré |
| affiche composée (visuel + logo + texte de saison) | cover |
| title card d'épisode | carte de titre, carte d'épisode |
| placeholder (dossier pour un titre annoncé) | « À venir » |
| dossier d'assets sans fichier | vide |
| titre sans dossier d'assets | à créer |
| asset manquant | incomplet (état), « manque X » (détail) |
| file de priorités | À traiter |
| journal d'activité serveur | Journal |
| historique de développement | Versions, Log |

## Écarts assumés avec le commun

- **`.labs` en `#8a5c00` sur fond clair.** `#f2b84b` sur le fond clair de
  l'appli (`#f6f6f8`) ne fait que 1,7:1, sous les 4,5:1 demandés par
  [`../../docs/couleurs.md`](../../docs/couleurs.md) ; la même teinte foncée
  fait 5,4:1. En sombre, `.labs` est bien en `#f2b84b` (9,3:1). Proposé pour
  toute la suite dans [`../../docs/propositions.md`](../../docs/propositions.md).
- **Nom écrit en Geist Mono**, la police à chasse fixe déjà embarquée dans
  l'appli, plutôt que JetBrains Mono (police de référence de
  [`../../docs/typographie.md`](../../docs/typographie.md)).
- **Ambre d'action `#e5a00d`** (ambre Plex) et non la couleur du logo : un seul
  bouton ambre par écran, la prochaine action. En conséquence, « à vérifier »
  (incomplet) est un **orange sourd** (`#9c4a1c` en clair) et non un ambre, pour
  ne jamais se confondre avec l'action.
- **Deux couleurs de rubrique** hors états : indigo = assets (source), teal =
  médias (destination). Elles disent toujours de quel dossier on parle, jamais
  un état.
- **Tutoiement** dans l'interface (« Vérifie que le container tourne ») au lieu
  de la deuxième personne du pluriel de
  [`../../docs/vocabulaire.md`](../../docs/vocabulaire.md) : appli personnelle,
  un seul utilisateur.
- **Mise en page** : menu de 15,5 rem (au lieu d'environ 14,5 rem) qui devient
  un tiroir sous 1024 px (au lieu de 52 rem) ; sur ordinateur, chaque page tient
  dans la hauteur de l'écran (cadres internes qui défilent).
- **Noms de classes propres** à l'appli (`.set`, `.field`, `.tag`, `.chip`…),
  comportements conformes à [`../../docs/composants.md`](../../docs/composants.md).

## Journal

| Date | Changement |
|---|---|
| 2026-11-05 | Dossier créé avec le logo |
| 2026-11-05 | Charte complétée (v0.25.4) : identité, thèmes clair et sombre documentés avec leurs jetons, écrans, vocabulaire, écarts ; logo, nom écrit `plex.labs` et icône Unraid de labs-brand adoptés dans l'appli |
