# Labs OS — l'interface commune de la suite

Décidé le 2026-11-05 par Aurélien : toutes les applis Labs partagent une même
coque, **Labs OS**. Une seule source, le dossier [`kit/`](../kit/) de ce dépôt ;
chaque appli en garde une copie locale (principe « local d'abord ») et la met à
jour par **propagation**.

## Ce que le kit apporte

Pas de dock d'applis : retiré en 1.1.0 à la demande d'Aurélien. On passe
d'une appli à l'autre par la palette (`Ctrl K`, touches `1` à `5`).

| Élément | Comportement |
|---|---|
| **Palette de commandes** | `Ctrl K` (ou `Cmd K`, ou le bouton « Ctrl K » de la barre d'état) : ouvrir une autre appli, lancer une action, aller à une page, chercher dans l'appli. Touches `1` à `5` : changer d'appli. |
| **Barre d'état** | En bas, façon éditeur : serveur, `appli.labs vX.Y.Z`, état fourni par l'appli, mode, heure. Masquée sur téléphone. |
| **Crochets** | Titres de page entre `[ ]`. La carte vedette (`star`) a un simple contour fin de la couleur d'appli (plus de coins en équerre depuis 1.2.0). |
| **Pied du menu** | Composant commun `LabsOS.foot` : lignes d'état (travaux en cours, mode, connexions…), version avec lien vers les notes de version, outils (journal, réglages, déconnexion, mode). Voir plus bas. |
| **Couleur d'appli** | `--lo-app` (sombre) et `--lo-app-ink` (clair, ≥ 4,5:1 sur blanc) ; l'accent suit le mode. |
| **Mode** | Automatique, sombre ou clair (bouton de la barre d'état ou palette) ; mémorisé par navigateur (`labs.mode`), appliqué avant l'affichage. |
| **Ambiance** | Fond bleu nuit, léger grain **sous** le contenu (jamais par-dessus le texte), aurore de la couleur d'appli en haut de page. Aucun halo coloré. |
| **Polices** | IBM Plex Sans (texte) et JetBrains Mono (données, nom écrit), embarquées (licence OFL). |

## Fichiers du kit

| Fichier | Rôle |
|---|---|
| `kit/labs-os.css` | Polices, jetons `--lo-*`, styles de la coque et des crochets |
| `kit/labs-os.js` | Construit la coque, gère la palette, le clavier, le mode ; API `LabsOS` |
| `kit/fonts/` | Polices woff2 et licences |
| `kit/VERSION` | Version du kit (une propagation = une version) |
| `kit/sync-labs-kit.sh` | Recopie le kit dans une appli (`scripts/sync-labs-kit.sh` de l'appli) |
| `kit/labs-kit.yml` | Modèle du workflow de propagation d'une appli |
| `kit/demo.html` | Page de démonstration |

Tout est préfixé `lo-` / `--lo-` : le kit ne touche jamais aux styles propres
d'une appli.

## Brancher une appli

1. Copier le kit dans un dossier servi tel quel (ex. `app/static/labs-os/`).
2. Dans `<head>`, **sans** `defer` :

```html
<link rel="stylesheet" href="/labs-os/labs-os.css">
<script src="/labs-os/labs-os.js"></script>
<script>
  LabsOS.init({
    app: 'projet',                 // backup | projet | torrent | finance | asset
    version: '1.2.0',              // affichée dans la barre d'état
    title: '.page-head h1',        // titres mis entre crochets
    cards: '.card, .panel',        // cartes de l'appli (repérées par le kit)
    star: '.card.featured',        // carte vedette (contour de la couleur d'appli)
    nav: '.nav a[href]',           // liens repris dans la palette (« Aller à »)
    commands: [{ group: 'Actions', label: 'Sauvegarder maintenant', icon: 'box', run: () => {} }],
    search: async q => [],         // résultats de recherche : [{ label, hint, icon, href | run }]
    status: async () => [],        // barre d'état : [{ label, value, tone: ok|warn|fail|busy }]
    onMode: mode => {}             // relier le mode (light | dark) au thème de l'appli
  });
</script>
```

3. Écrire le **pont** de l'appli : une petite feuille qui donne à ses propres
   variables les valeurs `--lo-*` (fond, surfaces, texte, accent, états,
   polices). La barre d'état réserve sa place avec `padding-bottom` sur `body`.

API : `LabsOS.open(texte)` ouvre la palette, `LabsOS.update({ version })` change une option après coup,
`LabsOS.setStatus([...])` remplace l'état affiché, `LabsOS.refresh()` relance l'état et les décorations,
`LabsOS.setMode('auto' | 'dark' | 'light')`, `LabsOS.cycleMode()`, `LabsOS.url('backup')` donne l'adresse d'une autre appli,
`LabsOS.foot(élément, spec)` dessine le pied du menu (ci-dessous).

Options facultatives : `host` (nom affiché, défaut : nom d'hôte), `suite`
(adresses des autres applis), `statusBar: false`, `aurora: false`,
`paletteKey: false` (l'appli ouvre elle-même la palette avec `LabsOS.open()`),
`appKeys: false` (désactive les touches 1 à 5), `placeholder`.

### Menu et pied du menu (règle commune depuis 1.2.0)

- Pas de sous-titre sous le nom de l'appli ; menu rangé en **catégories** (titres courts en chasse fixe, comme
  Backup Labs : *Protéger*, *Récupérer*, *Système*…), sans intitulé « Navigation ».
- Pas de phrase d'explication sous un titre de page : seulement, si utile, une ligne d'infos (chiffres, dates)
  en chasse fixe, **nettement séparée** du titre.
- Le bas du menu affiche **toujours** le même composant, rempli par l'appli :

```js
LabsOS.foot('#pied', {
  rows: [                                              // états, du plus important au moins important
    { tone: 'busy', label: 'Sauvegarde en cours', href: '#/runs' },   // travaux en cours
    { tone: 'ok',   label: 'Mode actif', href: '#/settings' },        // mode simulation / actif, connexions…
  ],
  version: { label: 'v1.5.0', href: '#/versions' },    // lien vers les notes de version
  tools: [
    { icon: 'activity', label: 'Journal', href: '#/journal' },        // tout ce qui a été fait dans l'appli
    { icon: 'gear', label: 'Réglages', href: '#/settings' },
    '-',
    { icon: 'logout', label: 'Se déconnecter', run: () => {} },
  ],                                                   // le bouton de mode (auto / sombre / clair) est ajouté
});
```

`tone` : `ok`, `warn`, `fail`, `busy` ou vide (gris). Une ligne `null` ou `hidden: true` est ignorée.
Rappeler `LabsOS.foot` avec de nouvelles données le met à jour. Modèle : le pied d'Asset Labs.

### Adresses des autres applis

Par ordre de priorité :

1. l'option `suite` de l'appli ;
2. l'adresse réglée dans la palette (« Régler l'adresse de … »), mémorisée par
   navigateur ;
3. la déduction depuis le nom d'hôte : `projet-labs.mondomaine.fr` →
   `backup-labs.mondomaine.fr`.

Pour une appli dont l'adresse est inconnue, la palette indique « à régler » et
ouvre un champ pour la saisir.

## Propagation

Une modification de l'interface commune se fait **une seule fois**, dans
`kit/` de ce dépôt, puis se diffuse :

1. Modifier `kit/`, augmenter `kit/VERSION`, noter le changement dans
   `CHANGELOG.md`, pousser sur `main`.
2. Dans **Projet Labs**, page *La suite*, bouton **Propager à la suite**
   (ou outil MCP `propagate_ui` côté Claude). Projet Labs envoie l'événement
   `labs-kit` à chaque dépôt d'appli.
3. Dans chaque appli, le workflow **Kit Labs OS** (`.github/workflows/labs-kit.yml`)
   recopie le kit, commite sur `main` si quelque chose a changé, puis relance
   le workflow d'image.
4. Mise à jour du conteneur dans Unraid, comme d'habitude.

Le même workflow tourne aussi chaque nuit et à la demande (Actions → *Kit
Labs OS* → *Run workflow*). Projet Labs affiche, pour chaque appli, la version
du kit qu'elle embarque et signale celles en retard.

Le jeton GitHub de Projet Labs doit pouvoir écrire sur les dépôts des applis
(jeton *fine-grained* : *Contents* en lecture et écriture — c'est ce que GitHub
exige pour l'événement `labs-kit` — et *Metadata* en lecture ; *Actions* en
lecture suffit ; ou un jeton classique avec `repo`).

## Crate, appli associée : hors Labs OS

Crate garde sa propre charte ([`../apps/crate/`](../apps/crate/README.md)) :
la propagation ne le vise jamais (elle ne lit que la liste `apps` de
`catalogue.json`, où Crate n'est pas), et ses changements ne reviennent pas
dans la suite.

## Projets créés dans Projet Labs

Un projet du groupe **Labs** reprend à sa création la charte de la suite
(`CHARTE.md` : applis et couleurs, principes, règles communes, Labs OS ; et un
bloc dans `CLAUDE.md`). Un projet du groupe **Crate** reprend la charte de
Crate seule.

## Ce qui reste propre à chaque appli

Ses écrans, son vocabulaire métier, ses couleurs de données (graphiques, tags
de trackers, affiches) et son pont. Les règles de [composants.md](composants.md)
et [principes.md](principes.md) restent valables.
