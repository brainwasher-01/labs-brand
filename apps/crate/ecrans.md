# Crate — écrans

Navigation en trois groupes dans le rail (ordinateur) ; sur téléphone, barre
basse avec Accueil, Artistes, Albums, Pistes et « Plus ». La recherche est
dans la barre du haut, sur tous les écrans. Le lecteur audio n'apparaît
qu'après la première lecture.

## Bibliothèque

| Écran | Adresse | Rôle |
|---|---|---|
| Accueil | `/` | Compteurs de la bibliothèque, nouveautés des artistes et des labels suivis, récemment ajoutés, redécouverte aléatoire |
| Artistes | `/artists` | Grille des artistes, tri, index alphabétique, filtre « Suivis », cœur pour suivre |
| Fiche artiste | `/artists/{id}` | Photo, faits, note, écoutes, liens d'écoute, Suivre ; top morceaux, discographie, absents de la bibliothèque, artistes similaires ; mode Modifier (photo, fusion, suppression) |
| Albums | `/albums` | Grille des albums, tris, filtres, index alphabétique |
| Fiche album | `/albums/{id}` | Cover, faits (année, label, sortie, tempo, sonie), note, Lire, Aléatoire, Ajouter à une playlist, Lire le NFO, liens d'écoute ; liste des pistes ; mode Modifier (titres, crédits, types, MusicBrainz en un clic, cover, meilleure version, suppression) |
| Labels | `/labels` | Grille des labels avec logo, filtre « Suivis » |
| Fiche label | `/labels/{id}` | Logo, site web, artistes du label puis albums, artistes populaires absents |
| Genres | `/genres` | Familles de genres puis sous-genres ; chaque carte ouvre ses albums ou ses pistes |
| Pistes | `/tracks` | Liste virtualisée de toutes les pistes, colonnes Titre, Artiste (album dessous), Genre, format, note |
| Fiche piste | `/tracks/{id}` | Faits, qualité, analyse sonore (tempo, tonalité, sonie), paroles, pistes similaires |
| Playlists | `/playlists` | Mosaïque des playlists (fichiers `.m3u8`), créer, importer depuis Plex, projeter vers Plex |
| Fiche playlist | `/playlists/{id}` | Cover, description, pistes (glisser-déposer), suggestions « Pour cette playlist », mode « Préparation de mix » |
| Nouveautés | `/new-releases` | Sorties récentes et annoncées des artistes et labels suivis, en deux sections, progression des sources relues, erreurs et sourdines |
| Recherche | `/search` | Résultats par type (artistes, albums, pistes, labels) |

## Données

| Écran | Adresse | Rôle |
|---|---|---|
| Qualité des données | `/quality` | Tableau de bord des écarts (orphelins, douteux, compilations, suffixes de titre, overrides non projetés, pistes abîmées, analyse sonore) avec corrections en lot |
| Non noté | `/unrated` | Albums et pistes qui restent à noter, lecture directe |
| Curation | `/curation` | Sommaire des pages d'entretien |
| Genres (curation) | `/curation/genres` | Fusion des graphies et rattachement des petits genres |
| Labels (curation) | `/curation/labels` | Identification MusicBrainz des labels, fusion des doublons |
| Artistes douteux | `/curation/doubtful-artists` | Artistes probablement mal découpés ou mal crédités |
| Artistes orphelins | `/curation/orphan-artists` | Artistes rattachés à rien, à supprimer |
| Pistes orphelines | `/curation/tracks-orphans` | Pistes sans artiste |
| Allow-list canonique | `/curation/allowlist` | Noms d'artistes à ne jamais découper |
| Sorties remplacées | `/curation/replacements` | Albums repris par une sortie plus récente, remplacement et Rétablir |
| Corbeille | `/curation/trash` | Ce que Crate a retiré, fichiers visibles avant suppression, Rétablir, Vider ; suppression automatique par âge |
| Compilations | `/compilations` | Albums candidats au statut de compilation |
| Composites | `/composites` | Albums composites fantômes à réparer |
| Téléchargements | `/downloads` | Recherche Soulseek, suivi des téléchargements piste par piste, import avec aperçu, annulation |

## Système

| Écran | Adresse | Rôle |
|---|---|---|
| Paramètres | `/settings` | Apparence (Clair, Sombre, Auto), lecteur (qualité, forme d'onde, lecture continue), formats Soulseek préférés, nouveautés, corbeille, connexion et appareils |
| Suivis | `/settings/follows` | Artistes et labels suivis, types de sorties à télécharger |
| Sourdines | `/settings/mutes` | Artistes et labels dont les nouveautés sont masquées |
| Versions | `/versions` | Historique des versions de Crate |
| Log | `/log` | Journal détaillé des actions (modifications, scans, synchronisations) |
| Connexion | toutes les adresses | Mot de passe tant que l'appareil n'est pas connecté (premier mot de passe défini avec un code lu dans les journaux du conteneur) |

## Éléments partagés

| Élément | Rôle |
|---|---|
| Fenêtre de détail | Album ou piste, dans ou hors bibliothèque : pistes, artistes, featurings, sortie, label, éditions, liens d'écoute, téléchargement Soulseek (80 % de la largeur) |
| Lecteur | Mini-lecteur (téléphone, tablette), barre de lecture (ordinateur), plein écran avec cover floutée, forme d'onde, file, paroles |
| Barres d'activité | En bas du rail : travaux de fond en cours (sources relues, téléchargements…), rien quand Crate ne travaille pas |
