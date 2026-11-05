# Backup Labs — thèmes

Fichiers : [`theme/backup-labs.css`](theme/backup-labs.css) (copie de
référence de l'interface) et [`theme/tokens.json`](theme/tokens.json).
Aperçu : [`preview.html`](preview.html).

## Liste des thèmes

Un seul style, **Console**, en deux modes. Dans Réglages, l'utilisateur
choisit **Automatique** (par défaut, suit le réglage de l'appareil),
**Sombre** ou **Clair**. Le choix est mémorisé par navigateur
(`localStorage`, clé `backuplabs.mode`) et appliqué avant le premier affichage
par l'attribut `data-mode` de `<html>` (`light` ou `dark` ; absent en
automatique).

| Thème | Par défaut | Clair ou sombre | Esprit |
|---|---|---|---|
| Console sombre | oui (si le système est sombre) | sombre | dense, terminal, contrasté |
| Console clair | oui (si le système est clair) | clair | le même, lisible en pleine journée |

Les thèmes Marine et Doux ont été retirés le 2026-11-05.

## Couleurs

### Console sombre

| Rôle | Variable | Valeur |
|---|---|---|
| Fond | `--bg` | `#080b0f` |
| Surface (cartes) | `--surface` / `--surface-2` | `#10171e` / `#18222c` |
| Texte | `--text` / `--strong` | `#e6edf3` / `#ffffff` |
| Texte secondaire | `--muted` / `--faint` | `#a9b6c3` / `#8796a5` |
| Bordures | `--line` / `--line-strong` | `#222f3c` / `#364859` |
| Accent (actions) | `--accent` (texte dessus `--accent-text`) | `#7ee2a8` (`#06130b`) |
| Menu | `--nav-bg` / `--nav-active-bg` | `#0b1116` / `#1b2733` |
| Réussi / À vérifier / Échec / En cours | `--ok` `--warn` `--fail` `--busy` | `#86f0b4` `#ffc457` `#ff8a80` `#9cc3ff` |
| Frise des passages | `--ok-bar` `--warn-bar` `--fail-bar` | `#3ccf86` `#ffc457` `#ff7b70` |

### Console clair

| Rôle | Variable | Valeur |
|---|---|---|
| Fond | `--bg` | `#f2f4f6` |
| Surface (cartes) | `--surface` / `--surface-2` | `#ffffff` / `#eceff3` |
| Texte | `--text` / `--strong` | `#18212b` / `#0b1117` |
| Texte secondaire | `--muted` / `--faint` | `#4a5868` / `#5b6979` |
| Bordures | `--line` / `--line-strong` | `#dbe1e7` / `#b4bec9` |
| Accent (actions) | `--accent` (texte dessus `--accent-text`) | `#13784a` (`#ffffff`) |
| Liens | `--link` | `#0f6b40` |
| Menu | `--nav-bg` / `--nav-active-bg` | `#e8ecf0` / `#d7dee5` |
| Réussi / À vérifier / Échec / En cours | `--ok` `--warn` `--fail` `--busy` | `#11713f` `#8a5300` `#b42318` `#1d4ed8` |
| Frise des passages | `--ok-bar` `--warn-bar` `--fail-bar` | `#2fa66a` `#e9a520` `#dc4437` |

En clair, l'accent est une **variante foncée** de la couleur de l'appli :
`#7ee2a8` ne fait que 1,6:1 sur blanc, `#13784a` fait 5,5:1. C'est aussi
cette variante qui colore le « .labs » du nom écrit en mode clair.

Les couleurs d'état ont deux usages : en texte (`--ok`, `--warn`…), elles
respectent 4,5:1 sur leur fond ; en barre de la frise (`--*-bar`), elles sont
plus vives, car elles se lisent comme des surfaces.

## Typographie

| Usage | Police | Graisses |
|---|---|---|
| Texte, menu, boutons, libellés | IBM Plex Sans | 400, 500, 600 |
| Titres | IBM Plex Sans | 600 |
| Données : chemins, identifiants, heures, commandes ; nom écrit `backup.labs` | IBM Plex Mono | 400, 500 |

Une seule famille : la chasse fixe est réservée aux données, jamais employée
pour faire « technique ». Chiffres tabulaires partout.

Toutes les tailles sont en rem. Sur ordinateur (plus de 52rem de large),
la racine est à **80 %** : l'interface entière, texte, espacements et
contrôles, est dessinée comme avec un zoom à 80 %. Sur téléphone, elle reste
à 100 %, pour la lisibilité.

| Taille | Variable | Ordinateur | Téléphone |
|---|---|---|---|
| Petite (plancher : libellés, aides, en-têtes de tableau) | `--text-sm` | 11,2 px | 14 px |
| Corps (texte, boutons, menu, tableaux) | `--text-base` | 12,8 px | 16 px |
| Titre de section | `--text-lg` | 14,4 px | 18 px |
| Titre intermédiaire | `--text-xl` | 17,6 px | 22 px |
| Titre de page | `--text-2xl` | 22,4 px | 28 px |

## Formes

Rayons : 8 px (cartes, `--radius`), 6 px (boutons et champs, `--radius-sm`).
Bordures de 1 px. Aucune ombre. Champs de saisie sur le fond de la page.
Transitions de 120 ms sur le survol, coupées si l'utilisateur réduit les
animations.

## Fichiers

[`theme/backup-labs.css`](theme/backup-labs.css) (les deux modes, les
composants communs) et [`theme/tokens.json`](theme/tokens.json) (les
variables de chaque mode, extraites de la feuille de style).
