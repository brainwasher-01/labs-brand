# Dashboard Labs — thèmes

## Labs OS

Coque commune Labs OS (kit 1.6.0) : menu `lo-side`, barre de recherche `lo-top`, palette `Ctrl K`, barre d'état, crochets, mode automatique / sombre / clair. Le pont de l'appli relie ses variables aux jetons `--lo-*` ; rien n'est redéfini dans le kit.

Couleur d'appli à ajouter au kit (voir [propositions](../../docs/propositions.md)) : `--lo-c-dashboard: #e6edf3`, `:root[data-lo-app="dashboard"] { --lo-app: #e6edf3; --lo-app-ink: #1b2230; }`.

## Liste des thèmes

| Thème | Par défaut | Clair ou sombre | Esprit |
|---|---|---|---|
| Labs OS sombre | oui | sombre | nuit, lune, tout voir |
| Labs OS clair | non | clair | journal du matin |

Le bandeau de la Une a deux variantes, indépendantes du thème : **Sobre** (par défaut) et **Coucher de soleil**.

## Couleurs

Fond, surfaces, texte, bordures et états : ceux de Labs OS. Propre à l'appli :

| Rôle | Variable | Sombre | Clair |
|---|---|---|---|
| Couleur d'appli (logo, nom écrit, aurore) | `--lo-app` | `#e6edf3` | `#e6edf3` |
| Accent (actions) | `--lo-accent` | `#e6edf3` (16,8:1 sur `#07090f`) | `#1b2230` (15,9:1 sur blanc) |
| Texte sur accent | `--lo-on-accent` | `#07090f` | `#ffffff` |
| Crochets du logo | dégradé | `#7ee2a8` → `#6cc7f0` → `#b49cff` → `#ff9b6a` | idem |

Couleurs de données (propres à l'appli) :

| Usage | Couleur |
|---|---|
| Agenda pro | `#8fb3ff` |
| Agenda perso | `#f2a6d0` |
| Agenda partagé | `#9fe0b4` |
| Pictos de domaine | journée `#8fb3ff`, météo `#ffc861`, trajet `#ffb38a`, serveur `#9cc3ff`, médias `#ff9b6a`, maison `#9fe0b4`, moto `#f2a6d0`, veille `#c9b6ff` (fond à 18 %) |
| Bandeau coucher de soleil | ciel `#1b0b3f` → `#7a1f6e` → `#e04c7d` → `#ffa45c`, soleil `#ffe27a` → `#ff5f8f`, mer `#3a1460` → `#0d0722` |

Les couleurs d'agenda ne servent jamais seules : chaque événement porte aussi le mot Pro, Perso ou Partagé.

## Typographie

| Usage | Police | Graisses |
|---|---|---|
| Contenu des pages (au choix) | Instrument Sans (par défaut), Geist, IBM Plex Sans | 400, 500, 600, 700 |
| Menu, barre du haut, barre d'état | IBM Plex Sans (kit) | 400 à 700 |
| Données, heures, chemins, nom écrit | JetBrains Mono (kit) | 400, 500, 700 |

Échelle de texte : celle du kit (`--lo-fs-*`). Le « Bonjour » de la Une est la seule taille hors échelle (titre d'affiche, 54 px sur ordinateur, 34 px sur téléphone).

## Formes

Celles de Labs OS (`--lo-r` 8 px, écarts `--lo-gap`, `--lo-pad`). Bandeau de la Une : rayon 14 px. Pictos de domaine : carré arrondi 10 px.

## Fichiers

Pas encore de fichiers de thème : ils viendront avec le dépôt `brainwasher-01/dashboard-labs`.
