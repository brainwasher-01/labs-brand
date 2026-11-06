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


## Échelle de texte et écarts (kit 1.6.0)

Le kit impose la racine (1.6.0) : 1 rem = 14 px sur ordinateur, 16 px sur téléphone. Toute taille de texte vient d'un
jeton ; **rien sous `--lo-fs-xs`**.

| Jeton | Ordinateur | Téléphone | Pour |
|---|---|---|---|
| `--lo-fs-xs` | 12,25 px | 14 px | plancher : ligne d'infos (chasse fixe), adresses, pastilles, compteurs, en-têtes de tableau |
| `--lo-fs-sm` | 13,1 px | 15 px | libellés de champ, aides, compteur d'une barre d'outils |
| `--lo-fs` | 14 px | 16 px | texte courant, boutons, menu, détail d'une carte |
| `--lo-fs-lg` | 15,75 px | 18 px | **titre de carte**, nom d'un élément de liste |
| `--lo-fs-xl` / `--lo-fs-2xl` | 19,25 / 24,5 px | 22 / 28 px | titres intermédiaires / titre de page |

Les écarts ci-dessous sont en rem : sur ordinateur, multiplier par 14 px.

| Écart | Valeur | Entre |
|---|---|---|
| `--lo-head-gap` | 1,75 rem | titre de page → premier bloc |
| `--lo-gap` | 1,25 rem | deux blocs (cartes, sections, carte → barre d'outils) |
| `--lo-gap-sm` | 0,75 rem | éléments d'une liste, barre d'outils → liste |
| `--lo-pad` | 1,25 / 1,5 rem | intérieur d'une carte |
| `--lo-title-gap` | 1 rem | titre de carte → contenu |
| `--lo-form-gap` | 1 rem | rangées d'un formulaire (champs, case à cocher, aide) |
| `--lo-field-gap` | 0,5 rem | libellé → champ → aide |
| `--lo-item-gap` | 0,375 rem | lignes d'une carte de liste (nom, détail, adresse, infos) |

## Composants de contenu (kit 1.5.0)

Bouton à **icône seule** : le marquer explicitement (classe propre à l'appli, ex. `.sq` dans Asset). Ne jamais le détecter
par `:has(> svg:only-child)` : le texte n'est pas un élément, un bouton icône + texte serait forcé en carré.


| Classe | Rôle |
|---|---|
| `lo-stack` / `lo-stack-sm` | pile verticale de blocs (écart `--lo-gap` / `--lo-gap-sm`) |
| `lo-panel` + `lo-panel-title` | carte de contenu, titre 18 px gras |
| `lo-form` | pile des rangées d'un formulaire |
| `lo-field` + `lo-label` + `lo-hint` | champ : libellé 14 px au-dessus, aide 14 px en dessous |
| `lo-check` | case à cocher + phrase ; la case reste calée sur la 1re ligne si la phrase en fait plusieurs |
| `lo-item` | carte de liste : `lo-item-main` (nom `lo-item-title`, détail `lo-item-text`, infos `lo-sub`) à gauche, `lo-item-aside` à droite |
| `lo-pill` (+ `lo-ok`, `lo-warn`, `lo-fail`, `lo-busy`) | pastille d'état, 28 px de haut, fond teinté |
| `lo-toolbar` + `lo-count` | rangée « compteur à gauche, action à droite » au-dessus d'une liste |

Règles :
- **Pastille et boutons d'une carte de liste sont sur UNE rangée** (`lo-item-aside`), centrée verticalement sur la carte :
  jamais la pastille en haut à droite et les boutons au milieu. Sur téléphone : une colonne, pastille à gauche, boutons à droite.
- Un formulaire sur une ligne utilise `lo-row-end` ; ses rangées se suivent à `--lo-form-gap`. Sur téléphone, les champs s'empilent en pleine largeur.
- Une barre « compteur + action » garde l'action sur la même ligne, même sur téléphone.
- Exemple vivant : `kit/demo.html`.
