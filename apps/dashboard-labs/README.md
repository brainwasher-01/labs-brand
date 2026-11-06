# Dashboard Labs — charte

## Identité

| | |
|---|---|
| Nom affiché | Dashboard Labs |
| Nom écrit (logo texte) | `dashboard.labs` |
| Rôle | Page d'accueil et tableau de bord du quotidien (ordinateur, iPad, iPhone) : Skynet, médias, maison, journée, veille, accès rapide, avec un assistant qui agit |
| Nom du conteneur | `dashboard-labs` |
| Couleur | **Lunaire** `#e6edf3` (sombre), `#1b2230` sur fond clair |
| Logo | [`../../logos/dashboard-labs.svg`](../../logos/dashboard-labs.svg) — variante « prisme » : crochets en dégradé des couleurs de la suite, initiale D et bordure en Lunaire. PNG pour Unraid à exporter |
| Icône Unraid | `https://raw.githubusercontent.com/brainwasher-01/labs-brand/main/logos/dashboard-labs.png` (à déposer) |
| Technologie de l'interface | à décider (appli web installée en PWA sur iPhone / iPad) |
| État | en conception |

Pourquoi Lunaire : le tableau de bord montre toute la suite et tout Skynet. Une couleur neutre, avec les couleurs des autres applis dans les crochets du logo, dit « ici on voit tout » sans prendre la teinte d'une appli.

## Thèmes

Voir [theme.md](theme.md).

## Écrans

| Écran | Rôle |
|---|---|
| Accueil | Bonjour + météo (bandeau sobre ou coucher de soleil), accès rapide, la Une (journée, affiche du soir, brèves), puis les modules. Bouton « Organiser » |
| Modules | Notifications, maison, Plex · Tautulli, réseau local, journaux, moto, actualités, et tous les modules du menu (système, dockers et VM, stockage, sauvegardes, téléchargements, films, séries, musique, projets, Reddit, Lyon et France, allumer à distance) |
| Assistant | Demandes en langage naturel (ajouter un film, une série, un album ; dates de sortie ; allumer un appareil ; éteindre les lumières ; résumé de la journée) |
| Réglages › Apparence | Police du contenu, mode, densité, bandeau, disposition de l'accueil par appareil |
| Réglages › Comptes | Agendas (Google, iCloud, CalDAV), mails (Gmail) |

Maquettes : canevas de conception (rangée « Version retenue »).

## Vocabulaire propre

| Terme technique | Mot affiché |
|---|---|
| Wake-on-LAN | Allumer à distance |
| Widget, carte | Module |
| Layout | Disposition |
| Syslog, logs | Journaux |
| Tautulli | Plex · Tautulli (nom du service conservé) |
| Unknown device | Appareil inconnu |

## Écarts assumés avec le commun

- **Couleur neutre** : Lunaire `#e6edf3` n'a pas de teinte ; la règle des 40° ne s'applique pas. L'accent des actions est donc presque blanc en sombre et presque noir en clair.
- **Logo prisme** : les crochets reprennent le dégradé du logo de la suite (`logos/labs.svg`) au lieu de la couleur de l'appli ; tuile, bordure et initiale restent conformes à `docs/logos.md`.
- **Police du contenu au choix** : Instrument Sans (par défaut) ou Geist pour le contenu des pages, IBM Plex Sans en option. Menu, barre du haut, barre d'état et données restent en IBM Plex Sans et JetBrains Mono. Les deux polices sont embarquées dans l'appli (licence OFL), pas dans le kit.
- **Illustration de la Une** : bandeau « coucher de soleil » possible (ciel, soleil, palmiers, mer), dans le contenu uniquement ; la coque garde l'aurore et le grain de Labs OS, sans halo coloré.
- **Modules déplaçables** : disposition propre à chaque appareil (ordinateur, iPad, iPhone), enregistrée côté serveur.

## Journal

| Date | Changement |
|---|---|
| 2026-11-06 | Charte créée : couleur Lunaire et logo prisme (choix d'Aurélien, à la place du rose proposé d'abord) |
