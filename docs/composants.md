# Composants et motifs d'interface

Motifs recommandés pour toute la suite. Les noms de classes sont ceux de
Backup Labs ([`../apps/backup-labs/theme/backup-labs.css`](../apps/backup-labs/theme/backup-labs.css),
aperçu [`../apps/backup-labs/preview.html`](../apps/backup-labs/preview.html)) :
chaque appli peut garder les siens, l'important est le comportement.

| Classe | Rôle | Règle |
|---|---|---|
| `.page-head`, `.sub`, `.actions` | Titre de page, sous-titre, boutons à droite | Un titre court, un sous-titre qui dit à quoi sert la page |
| `.panel` | Bloc de contenu | Un `h2` en tête ; pas de panneau dans un panneau |
| `.btn`, `.btn.primary` | Boutons | **Un seul** `primary` par zone ; verbe d'action (« Créer la sauvegarde ») |
| `.btn.small`, `.btn.danger` | Bouton compact, action destructrice | `danger` toujours confirmé |
| `.choices` + `.choice` | Grandes cartes de choix (radio) | Pour les assistants : 2 à 5 choix, titre + une ligne d'explication |
| `.field`, `.label`, `.hint` | Champ de formulaire | Libellé au-dessus, aide en dessous ; « (facultatif) » si non requis |
| `.check` | Case à cocher | Phrase qui dit ce qui se passe quand c'est coché |
| `.notice.ok/.warn/.fail/.info` | Messages | Première ligne en gras : ce qui se passe ; seconde : que faire |
| `.chips`, `.chip` | Étiquettes | Listes courtes (noms d'applis, tags) |
| `table.data` dans `.table-wrap` | Tableaux | Défilement horizontal sur mobile |
| `details.advanced` | Options avancées | Tout ce qui n'est pas nécessaire au premier usage |
| `.empty` | État vide | Une phrase + le bouton pour commencer |
| `.muted`, `.mono`, `.grid-2`, `.stack` | Utilitaires | — |

## Motifs récurrents

- **Assistant en questions** : panneaux numérotés (« 1 Que voulez-vous… ? »),
  cartes de choix, récapitulatif en une phrase avant de valider.
- **Frise d'historique** : une case par exécution, la plus récente à droite,
  couleur d'état + infobulle avec la date.
- **Bandeau d'état** en haut de l'accueil : une phrase (« Tout est protégé »),
  la pastille d'état, les deux actions principales.

## Mise en page

- Menu latéral d'environ 14,5 rem, contenu sur toute la largeur restante.
- Sous 52 rem : menu replié derrière un bouton « Menu ».
- Grilles `repeat(auto-fit, minmax(…, 1fr))`, cibles cliquables ≥ 40 px.

## Hauteurs et alignement des contrôles (kit 1.4.0)

Un bouton et un champ côte à côte ont **toujours la même hauteur**. Il n'y a que deux crans, définis dans le kit :

| Jeton | Valeur | Pour |
|---|---|---|
| `--lo-ctl-h` | 2,5 rem (2,75 rem sur téléphone) | Boutons, champs, listes déroulantes, recherche, segments, icônes d'en-tête |
| `--lo-ctl-h-sm` | 2 rem (2,25 rem sur téléphone) | Petits boutons (`.btn.small`), puces, actions dans un tableau ou une carte |

Règles :
- Ne jamais écrire `height` ou `min-height` en dur sur un bouton, un champ ou un segment : lire ces jetons.
- Un bouton qui ne contient qu'une icône est **carré** (largeur = hauteur du cran).
- Une rangée de champs avec libellé au-dessus (formulaire sur une ligne) est alignée sur le **bas** (`align-items: flex-end`, classe `lo-row-end`) : le bouton tombe à hauteur des champs.
- Une rangée de boutons seuls (barre d'outils, actions de page) est alignée sur le **centre** (`lo-row`), avec l'écart `--lo-ctl-gap`.
- Un groupe de segments (`lo-seg`) a la hauteur d'un bouton : ses boutons internes remplissent le groupe, sans le déborder.

