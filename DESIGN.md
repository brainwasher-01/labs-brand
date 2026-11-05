# Système visuel Labs

Règles communes aux applications de la suite : Backup Labs, Asset Labs,
Finance Labs, Projet Labs, Torrent Labs. La feuille `css/labs.css` les
applique ; `css/tokens.json` donne les mêmes valeurs pour d'autres outils.

## Principes

- **Pratique d'abord** : l'interface sert à agir vite. Pleine largeur, contraste
  franc, une action principale par écran.
- **Couleur = sens** : l'accent sert aux actions ; vert, ambre et rouge sont
  réservés aux états (réussi, à vérifier, échec). Jamais la couleur seule :
  toujours un mot ou un pictogramme avec.
- **Mots simples** : on parle comme à quelqu'un qui n'est pas informaticien
  (voir « Vocabulaire »).
- **Réglages techniques repliés** : valeurs par défaut sûres, le reste dans
  « Options avancées ».

## Thèmes

Choisis par `data-theme` sur `<html>`, mémorisés par navigateur.

| Thème | Esprit | Fond | Accent | Polices |
|---|---|---|---|---|
| `console` (défaut) | Sombre, dense, façon terminal | `#070a0e` | `#7ee2a8` | IBM Plex Sans, JetBrains Mono pour les commandes et le menu |
| `marine` | Clair, menu bleu nuit, chiffres clés en bandeau | `#eef1f6` | `#c2410c` | Plus Jakarta Sans |
| `doux` | Clair et chaleureux, grandes cartes arrondies | `#f3f2ee` | `#0f7f72` | Manrope |

Une application peut remplacer `--accent` par la couleur de son logo dans le
thème `console` ; les autres variables restent communes.

## Couleurs des applications

| Application | Couleur | Logo |
|---|---|---|
| Backup Labs | `#7ee2a8` | `logos/backup-labs.*` |
| Asset Labs | `#f2b84b` | `logos/asset-labs.*` |
| Finance Labs | `#6cc7f0` | `logos/finance-labs.*` |
| Projet Labs | `#b49cff` | `logos/projet-labs.*` |
| Torrent Labs | `#ff9b6a` | `logos/torrent-labs.*` |

## Logo et nom

- Logo : l'initiale entre crochets dans une tuile sombre bordée de la couleur
  (voir le README pour la construction).
- Nom affiché : minuscules, police mono, `.labs` dans la couleur :
  `backup.labs`. En texte courant : « Backup Labs ».

## Composants (classes de `labs.css`)

| Classe | Usage |
|---|---|
| `.panel` | Bloc de contenu ; un `h2` en tête |
| `.page-head` (+ `.sub`, `.actions`) | Titre de page, sous-titre, boutons à droite |
| `.btn`, `.btn.primary`, `.btn.small`, `.btn.danger` | Boutons ; un seul `primary` par zone |
| `.choices` + `.choice` (avec `input` radio) | Grandes cartes de choix pour les assistants |
| `.field` (+ `.label`, `.hint`) | Champ de formulaire |
| `.check` | Case à cocher avec libellé |
| `.notice.ok / .warn / .fail / .info` | Messages |
| `.chips` + `.chip` | Petites étiquettes |
| `table.data` dans `.table-wrap` | Tableaux (défilement horizontal sur mobile) |
| `details.advanced` | Options avancées repliées |
| `.empty` | État vide avec une action |

États : réussi `--ok`, à vérifier `--warn`, échec `--fail`, en cours `--busy`,
en attente `--idle` ; fonds doux `--*-soft`. Frise des derniers passages :
une case par passage, la plus récente à droite.

## Mise en page

- Menu latéral (≈ 14,5 rem), contenu sur toute la largeur restante.
- Sous 52 rem : menu replié derrière un bouton « Menu ».
- Grilles `repeat(auto-fit, minmax(…, 1fr))` ; cibles cliquables d'au moins
  40 px.

## Vocabulaire

Exemples tirés de Backup Labs ; même esprit pour les autres applis.

| Éviter | Dire |
|---|---|
| job | sauvegarde |
| run | passage |
| destination, dépôt | emplacement |
| snapshot | version |
| rétention | combien de versions garder |
| cron | « chaque nuit à 3:00 » |
| quiescence | « rapide », « sans interruption », « arrêt pendant la copie » |

Phrases courtes, à la deuxième personne du pluriel ou à l'infinitif, sans
jargon ; les noms techniques (chemins, commandes) en police mono.
