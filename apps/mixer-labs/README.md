# Mixer Labs — charte

## Identité

| | |
|---|---|
| Nom affiché | Mixer Labs |
| Nom écrit (logo texte) | `mixer.labs` |
| Rôle | Construction de DJ sets sur timeline : on pose des morceaux de Crate et on dessine chaque transition (volume, égaliseur, filtre, effets, tempo) ; pas de mix en direct |
| Nom du conteneur | `mixer-labs` |
| Couleur | **Lime** `#8ef26a` (sombre), `#34791b` sur fond clair (5,4:1 sur blanc) |
| Logo | [`../../logos/mixer-labs.svg`](../../logos/mixer-labs.svg) — initiale M entre crochets. PNG pour Unraid à exporter |
| Icône Unraid | `https://raw.githubusercontent.com/brainwasher-01/labs-brand/main/logos/mixer-labs.png` (à déposer) |
| Technologie de l'interface | React 19, TypeScript, Vite, Tailwind v4 ; kit Labs OS dans `frontend/public/labs-os/` |
| Appli liée | Crate (bibliothèque musicale, appli associée hors suite) : Mixer Labs lit ses morceaux et ses playlists |
| État | en conception |

Pourquoi Lime : la dernière plage de teinte libre de la suite (79° à 106°) ; parmi les trois teintes proposées (citron, chartreuse, lime), Aurélien a choisi la plus verte.

## Thèmes

Voir [theme.md](theme.md).

## Écrans

| Écran | Rôle |
|---|---|
| Accueil et sets | Reprendre le dernier set, mes sets, partir d'une playlist de Crate |
| Ajouter depuis Crate | Playlists et pistes de Crate, tempo et tonalité, ajout au set |
| Préparer un morceau | Grille de tempo, ÷2 / ×2, tonalité, structure, points cue, sortie |
| Monter un morceau | Couper, boucler, dupliquer, fondu, stems par bloc, calques |
| Vue du set | Toutes les pistes et transitions du set, courbe de tempo, alertes |
| Studio | La transition : pistes en SYNC, courbes (volume, aigus, médiums, basses, filtre, effets), aimant et formes, panneau de la piste |
| Propositions | Trois propositions par transition, ou toutes les transitions vides d'un coup |
| Atelier, Mes transitions | Travailler une transition seule, l'enregistrer, la réutiliser |
| Prise en direct, Contrôleur | Jouer le set au contrôleur, gestes enregistrés en courbes |
| Export | Rendu haute qualité du set |
| Journal, Réglages | Tâches et erreurs ; accès, Crate, dossiers, audio, studio, contrôleur |

## Vocabulaire propre

Termes du métier gardés tels quels quand le mot français est moins clair :

| Terme technique | Mot affiché |
|---|---|
| Cue point | Point cue (cue 1 = entrée) |
| Hot cue | Hot cue |
| Beatgrid | Grille de tempo |
| Sync | SYNC |
| Stems | Stems |
| Edit | Montage (édit une fois exporté) |
| Snap | Aimant |
| Crossfade, transition | Transition |
| Render | Rendu |

## Écarts assumés avec le commun

- **Studio plein écran** : la page Studio (timeline, pistes, courbes) prend toute la hauteur sous la barre du haut ; pas de titre de page de 34 px sur cet écran, le nom de la transition en tient lieu.
- **Couleurs de pistes** : huit couleurs de données (pistes A à H), décrites dans [theme.md](theme.md) ; elles ne disent jamais un état et sont toujours accompagnées de la lettre de la piste.
- **Rouge** réservé aux alertes (voix sur voix, basses superposées, étirement au-delà du seuil) et au point de sortie.
- **Aucune phrase explicative** : uniquement des info-bulles « i » ; pas de notifications.
- **Cibles** : écran 2560 × 1440 et iPad Pro 11 (paysage 1194 × 834, portrait 834 × 1194), au tactile et au stylet ; fluide à 60 images par seconde pendant la lecture et le tracé.

## Journal

| Date | Changement |
|---|---|
| 2026-11-12 | Charte créée : couleur Lime, logo « [M] », kit Labs OS 2.1.0 (choix d'Aurélien) |
