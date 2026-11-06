# Labs OS — l'interface commune de la suite

Décidé le 2026-11-05 par Aurélien : toutes les applis Labs partagent une même
coque, **Labs OS**. Une seule source, le dossier [`kit/`](../kit/) de ce dépôt ;
chaque appli en garde une copie locale (principe « local d'abord ») et la met à
jour par **propagation**.

## Ce que le kit apporte

Pas de dock d'applis : retiré en 1.1.0 à la demande d'Aurélien. On passe
d'une appli à l'autre avec les touches `1` à `5` (depuis 1.3.0, la palette ne
propose plus d'ouvrir une autre appli).

Depuis **1.3.0**, le kit fournit aussi le **gabarit commun** : même menu (largeur
d'Asset Labs, catégories façon Backup Labs), même barre de recherche tout en haut,
même tiroir sur téléphone, même échelle de texte et mêmes écarts entre blocs
(référence : Backup Labs). Détail plus bas, « Gabarit commun ».

| Élément | Comportement |
|---|---|
| **Barre de recherche** (1.3.0) | Tout en haut de chaque page, entre crochets. Les résultats s'affichent en tapant, rangés par catégorie (ceux de l'appli d'abord, puis pages et actions). `/` y place le curseur. |
| **Palette de commandes** | `Ctrl K` (ou `Cmd K`, ou le bouton « Ctrl K » de la barre d'état) : mêmes résultats que la barre du haut, dans une fenêtre identique dans toutes les applis. Touches `1` à `5` : changer d'appli. |
| **Menu commun** (1.3.0) | Classes `lo-side`, `lo-nav`… : largeur `--lo-side-w` (15,5 rem), catégories, entrée active teintée, pied `LabsOS.foot`. Tiroir sur téléphone (bouton menu de la barre du haut). |
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
    top: '#lo-top',                // conteneur de la barre de recherche du haut (1.3.0)
    searchPlaceholder: 'Chercher…',          // texte d'invite (ordinateur)
    searchPlaceholderShort: 'Chercher…',     // texte d'invite plus court (téléphone)
    search: async q => [],         // résultats : [{ group, label, sub, hint, icon, thumb, href | run }]
    submit: q => {},               // facultatif : Entrée sans résultat choisi (ex. Torrent Labs lance la recherche)
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
`LabsOS.foot(élément, spec)` dessine le pied du menu (ci-dessous), `LabsOS.top(élément)` monte la barre du haut
après coup (application monopage qui redessine sa coque), `LabsOS.focusSearch(texte)` y place le curseur,
`LabsOS.drawer(true | false)` ouvre ou ferme le tiroir du menu sur téléphone.

Options facultatives : `searchInputId` (identifiant donné au champ de la barre du haut), `onDrawer(ouvert)`
(appelée quand le tiroir s'ouvre ou se ferme), `host` (nom affiché, défaut : nom d'hôte), `suite`
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

### Gabarit commun (depuis 1.3.0)

Décidé le 2026-11-06 par Aurélien : les 5 applis ont le même menu, la même barre du haut et les mêmes écarts.

```html
<div class="lo-shell">
  <aside class="lo-side" aria-label="Menu">
    <div class="lo-side-head"><a class="lo-brand" href="/"><img src="logo.svg" alt=""><span class="lo-wm">backup<i>.labs</i></span></a></div>
    <nav class="lo-nav">
      <div class="lo-nav-sec"><a href="/" aria-current="page"><svg>…</svg>Accueil</a></div>
      <div class="lo-nav-sec"><span class="lo-nav-title">Protéger</span><a href="/jobs"><svg>…</svg>Sauvegardes</a></div>
    </nav>
    <footer class="lo-foot" id="pied"></footer>
  </aside>
  <div class="lo-main">
    <header class="lo-top" id="lo-top"></header>     <!-- rempli par le kit (option top) -->
    <main class="lo-page">…</main>
  </div>
</div>
```

Règles :

- **Largeur du menu** : `--lo-side-w` = 15,5 rem (celle d'Asset Labs). Ligne du logo de la hauteur de la barre du haut (`--lo-top-h`).
- **Pas de page « Journal », « Logs » ni « Versions » dans le menu** : on y accède par les icônes et la ligne de version
  du pied du menu ; la palette et la barre du haut les retrouvent (« Aller à »).
- **Barre de recherche** toujours en haut, jamais dans le menu ; résultats au fil de la frappe, par catégorie.
  Les éléments de l'appli placés dans `.lo-top` restent à droite (ex. bouton « Rechercher » de Torrent Labs) ;
  avec la classe `lo-top-start`, avant le champ.
- **Texte et écarts** (référence Backup Labs, kit 1.5.0) : **1 rem = 16 px sur ordinateur comme sur téléphone** — le kit
  l'impose (`:root:root { font-size: 100% }`), les anciennes racines à 85 % des applis sont neutralisées. Échelle de texte
  `--lo-fs-*` : 13 · 14 · 16 · 18 · 22 · 28 px ; **rien sous `--lo-fs-xs` (13 px)**, sauf barre d'état et touches clavier.
  Écarts : `--lo-page-x` / `--lo-page-y` (marges de page), `--lo-head-gap` (titre de page → contenu), `--lo-gap` (entre blocs),
  `--lo-gap-sm` (entre éléments d'une liste), `--lo-pad` (intérieur des cartes), `--lo-title-gap` (titre de carte → contenu),
  `--lo-field-gap` (libellé → champ → aide), `--lo-form-gap` (rangées d'un formulaire), `--lo-item-gap` (lignes d'une carte
  de liste), `--lo-r` (8 px). Une appli ne fixe **aucune** taille de texte en dur : elle lit ces jetons (directement ou par
  ses propres variables branchées dessus dans son pont). Composants prêts à l'emploi : voir `docs/composants.md`.
- **Téléphone** (moins de 52 rem) : le menu devient un tiroir (bouton menu à gauche de la recherche), plus de barre d'état.
- **Toute l'interface en français.**

### Adresses des autres applis

Par ordre de priorité :

1. l'option `suite` de l'appli ;
2. l'adresse réglée dans la palette (« Régler l'adresse de … »), mémorisée par
   navigateur ;
3. la déduction depuis le nom d'hôte : `projet-labs.mondomaine.fr` →
   `backup-labs.mondomaine.fr`.

Pour une appli dont l'adresse est inconnue, la touche correspondante ouvre un
champ pour la saisir (la palette ne liste plus les autres applis depuis 1.3.0).

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
