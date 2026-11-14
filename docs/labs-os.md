# Labs OS — l'interface commune de la suite

Décidé le 2026-11-05 par Aurélien : toutes les applis Labs partagent une même
coque, **Labs OS**. Une seule source, le dossier [`kit/`](../kit/) de ce dépôt ;
chaque appli en garde une copie locale (principe « local d'abord ») et la met à
jour par **propagation**.

## Ce que le kit apporte

Pas de dock d'applis : retiré en 1.1.0 à la demande d'Aurélien. On passe
d'une appli à l'autre avec les touches `1` à `8` (depuis 1.3.0, la palette ne
propose plus d'ouvrir une autre appli).

Depuis **1.3.0**, le kit fournit aussi le **gabarit commun** : même menu (largeur
de Cover Labs (ex-Plex Labs), catégories façon Backup Labs), même barre de recherche tout en haut,
même tiroir sur téléphone, même échelle de texte et mêmes écarts entre blocs
(référence : Backup Labs). Détail plus bas, « Gabarit commun ».

| Élément | Comportement |
|---|---|
| **Barre de recherche** (1.3.0) | Tout en haut de chaque page, entre crochets. Les résultats s'affichent en tapant, rangés par catégorie (ceux de l'appli d'abord, puis pages et actions). `/` y place le curseur. |
| **Palette de commandes** | `Ctrl K` (ou `Cmd K`, ou le bouton « Ctrl K » de la barre d'état) : mêmes résultats que la barre du haut, dans une fenêtre identique dans toutes les applis. Touches `1` à `8` : changer d'appli. |
| **Menu commun** (1.3.0) | Classes `lo-side`, `lo-nav`… : largeur `--lo-side-w` (15,5 rem), catégories, entrée active teintée, pied `LabsOS.foot`. Tiroir sur téléphone (bouton menu de la barre du haut). |
| **Barre d'état** | En bas, façon éditeur : serveur, `appli.labs vX.Y.Z`, état fourni par l'appli, mode, heure. Masquée sur téléphone. |
| **Crochets** | Titres de page entre `[ ]`. La carte vedette (`star`) a un simple contour fin de la couleur d'appli (plus de coins en équerre depuis 1.2.0). |
| **Pied du menu** | Composant commun `LabsOS.foot` : lignes d'état (travaux en cours, mode, connexions…), version avec lien vers les notes de version, outils (journal, réglages, déconnexion, mode). Voir plus bas. |
| **Couleur d'appli** | `--lo-app` (sombre) et `--lo-app-ink` (clair, ≥ 4,5:1 sur blanc) ; l'accent suit le mode. |
| **Mode** | Automatique, sombre ou clair (bouton de la barre d'état ou palette) ; mémorisé par navigateur (`labs.mode`), appliqué avant l'affichage. |
| **Ambiance** | Fond bleu nuit, léger grain **sous** le contenu (jamais par-dessus le texte), aurore de la couleur d'appli en haut de page. Aucun halo coloré. |
| **Polices** | IBM Plex Sans (texte) et JetBrains Mono (données, nom écrit), embarquées (licence OFL). |

## Règles d'écran communes (2.7.0, à appliquer dans toutes les applis)

Règles d'Aurélien pour toute la suite, vérifiées à chaque passe d'interface. Elles valent pour chaque écran, à chaque taille.

1. **Aucun paragraphe d'explication à l'écran.** Une explication (à quoi sert un bloc, ce que fait un réglage, comment lire un chiffre) va dans une **info-bulle « i »** : petit bouton rond posé à côté du libellé, qui montre le texte au survol, au focus clavier et au toucher. Restent à l'écran : les libellés, les titres, les infos chiffrées, les états, les messages d'erreur (qui disent le problème et la marche à suivre) et les états vides courts (« Aucune sauvegarde »).
   - Composant commun du kit : `<button type="button" data-lo-info="Le texte" aria-label="À propos de …"></button>`, ou `LabsOS.info(texte, libellé)` qui renvoie ce HTML. Le kit dessine le bouton (18 px, zone de toucher de 24 px), place la bulle sans sortir de l'écran, la relie par `aria-describedby`, l'épingle au toucher et la ferme par Échap, un second toucher ou un clic ailleurs. Aucun `LabsOS.init` nécessaire. Ne jamais recoder une info-bulle dans une appli.
   - Pas d'attribut `title` comme seule explication : invisible au toucher et au clavier.
   - **Option `hints` (2.8.0)** : `LabsOS.init({ hints: '.hint, .lab-hint' })` change les paragraphes d'explication existants d'une appli en info-bulles, sans réécrire ses écrans : chaque élément visé est masqué et remplacé par un bouton « i » posé au bout du libellé ou du titre qui le précède dans son bloc (sinon à sa place) ; la bulle relit son texte à chaque ouverture ; un `<details>` visé garde son résumé suivi du « i ». Un élément qui contient un lien, un bouton ou un champ reste affiché (`data-lo-keep` pour en garder un autre). Les messages d'erreur ne sont jamais visés.
2. **Jamais de « … » dans un texte d'interface** : ni ellipse CSS (`text-overflow: ellipsis`, `-webkit-line-clamp`), ni texte coupé à la main. Un texte trop long passe à la ligne (`overflow-wrap: break-word`, sans césure). Exceptions : libellés fixes du kit (nom écrit du logo, entrées du menu, titre d'un terminal), et « Recherche… » / « Chargement… » qui disent qu'une action est en cours.
3. **Rien ne se touche ni ne se chevauche.** Contenu à **8 px au moins** du bord de son bloc ; **12 px** entre éléments d'un bloc (`--lo-gap-sm`), **16 px** entre blocs et entre colonnes (`--lo-gap`), **24 px** autour des titres de page. Contrôle automatique conseillé : pour chaque élément visible, distance au bord de son bloc parent ≥ 8 px (contrôle `cramped` de la passe de nuit de Projet Labs).
4. **Prendre la largeur** : texte, tableaux, formulaires et listes occupent toute la largeur de leur carte ; jamais de colonne étroite avec un vide à droite.
5. **Vert, ambre, rouge (et bleu) réservés aux états** : jamais pour décorer, jamais pour une donnée qui n'est pas un état.
6. **Vérifier en vrai** : captures en 2560×1440, 1920×1080, iPad Pro 11 paysage (1210×834) et portrait (834×1210), iPhone (440×956), téléphone pliant ouvert (~640×904), en sombre et en clair, sur toutes les pages.

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
    app: 'projet',                 // backup | projet | torrent | finance | plex (Cover Labs ; « cover » accepté depuis 2.6.0) | mixer | crate | digger
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
`LabsOS.drawer(true | false)` ouvre ou ferme le tiroir du menu sur téléphone (1.7.0 : la page derrière devient inerte, le focus va dans le menu puis revient sur le bouton),
`LabsOS.confirm({ title, text, ok, cancel, danger, type })` ouvre la **fenêtre de confirmation commune** (1.7.0) et renvoie une promesse `true` / `false`.

**Confirmer une action (1.7.0).** Toute action qui supprime, écrase ou remplace passe par `LabsOS.confirm`, jamais par `confirm()` ou `prompt()` du navigateur. `danger: true` : cadre et bouton rouges, focus de départ sur *Annuler*. `type: 'nom'` : pour ce qui ne s'annule pas, le bouton reste grisé tant que le nom n'est pas retapé. La touche Tab reste dans la fenêtre, Échap ou un clic à côté répondent *Annuler*, le focus revient ensuite sur le bouton d'origine.

```js
if (await LabsOS.confirm({ title: 'Restaurer à la place de l\'actuel', text: 'L\'application est arrêtée pendant l\'opération.', ok: 'Restaurer à la place', danger: true })) { … }
```

Options facultatives : `searchInputId` (identifiant donné au champ de la barre du haut), `onDrawer(ouvert)`
(appelée quand le tiroir s'ouvre ou se ferme), `host` (nom affiché, défaut : nom d'hôte), `suite`
(adresses des autres applis), `statusBar: false`, `aurora: false`,
`paletteKey: false` (l'appli ouvre elle-même la palette avec `LabsOS.open()`),
`appKeys: false` (désactive les touches 1 à 8 ; depuis 2.1.0, une touche par appli connue, dans l'ordre Backup, Projet, Torrent, Finance, Cover, Mixer, Crate, Digger), `placeholder`, `main` (sélecteur de la zone principale, défaut `main, .lo-page, [role=main]` : cible du lien d'évitement et zone rendue inerte quand le tiroir est ouvert), `skip: false` (pas de lien « Aller au contenu »).

**Accessibilité commune (1.7.0).** Le kit ajoute lui-même un lien « Aller au contenu » (premier arrêt de Tab, visible seulement au clavier), donne la couleur `--lo-faint` (≥ 4,5:1 dans les deux modes) au texte d'exemple de tous les champs et un focus visible aux boutons de la barre d'état. Plus aucun texte du kit sous `--lo-fs-xs` (barre d'état, pied du menu, palette), seules les touches `kbd` y restent. Jeton `--lo-measure` (72 caractères) et classe `lo-prose` : la page reste pleine largeur, les lignes d'un texte long non.

### Menu et pied du menu (règle commune depuis 1.2.0)

- Pas de sous-titre sous le nom de l'appli ; menu rangé en **catégories** (titres courts en IBM Plex Sans, comme
  Backup Labs : *Protéger*, *Récupérer*, *Système*…), sans intitulé « Navigation ». Menu, boutons et titres sont en
  Plex Sans ; JetBrains Mono est réservé aux données (chemins, heures, chiffres, identifiants) — décision d'Aurélien du 2026-11-07.
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
  ],                                                   // 2.2.0 : le bouton de mode (auto / sombre / clair) ouvre la rangée
});
```

Ordre commun du pied (2.2.0) : **à gauche** mode clair / sombre, journal, réglages ; **à droite** (après `'-'`)
déconnexion. Le jeton `'mode'` dans `tools` place le bouton de mode ailleurs ; `mode: false` le retire.

**Menu réductible (2.2.0).** Sur ordinateur, le kit ajoute un bouton en tête du menu (`.lo-side-toggle`) qui le
réduit à ses icônes (`html.lo-side-mini`, `--lo-side-w` 4,5 rem) ; touche `[` hors saisie ; choix mémorisé dans le
navigateur (`labs.side`) et donc commun à toute la suite. Réduit, chaque lien et chaque ligne du pied a son nom en
info-bulle (`title`). Les liens doivent garder leur texte dans un `<span class="lo-t">`. Téléphone : tiroir entier,
pas de bouton. Options `sideToggle: false`, `onSide(mini)` ; API `LabsOS.side()` (lire) / `LabsOS.side(true|false)`.

`tone` : `ok`, `warn`, `fail`, `busy` ou vide (gris). Une ligne `null` ou `hidden: true` est ignorée.
Rappeler `LabsOS.foot` avec de nouvelles données le met à jour. Modèle : le pied de Cover Labs (ex-Plex Labs).

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

- **Largeur du menu** : `--lo-side-w` = 15,5 rem (celle de Cover Labs, ex-Plex Labs). Ligne du logo de la hauteur de la barre du haut (`--lo-top-h`).
- **Pas de page « Journal », « Logs » ni « Versions » dans le menu** : on y accède par les icônes et la ligne de version
  du pied du menu ; la palette et la barre du haut les retrouvent (« Aller à »).
- **Barre de recherche** toujours en haut, jamais dans le menu ; résultats au fil de la frappe, par catégorie.
  Les éléments de l'appli placés dans `.lo-top` restent à droite (ex. bouton « Rechercher » de Torrent Labs) ;
  avec la classe `lo-top-start`, avant le champ.
- **Texte et écarts** (référence Backup Labs, kit 1.6.0) : le kit impose la racine — **87,5 % sur ordinateur (1 rem = 14 px,
  texte courant 14 px, la norme des applis de gestion)**, **100 % sous 52 rem** (téléphone : 16 px, champs sans zoom iOS, cibles
  ≥ 44 px). Les applis ne fixent plus la taille de `html`. Échelle `--lo-fs-*` : ordinateur 12,25 · 13,1 · 14 · 15,75 · 19,25 ·
  24,5 px, téléphone 14 · 15 · 16 · 18 · 22 · 28 px ; **rien sous `--lo-fs-xs`**, sauf les touches clavier (la barre d'état et le pied du menu y sont depuis 1.7.0).
  Historique : 85 % (texte trop petit, jusqu'à 10 px), puis 100 % en 1.5.0 (trop gros, mises en page d'Asset débordantes).
  Écarts : `--lo-page-x` / `--lo-page-y` (marges de page), `--lo-head-gap` (titre de page → contenu), `--lo-gap` (entre blocs),
  `--lo-gap-sm` (entre éléments d'une liste), `--lo-pad` (intérieur des cartes), `--lo-title-gap` (titre de carte → contenu),
  `--lo-field-gap` (libellé → champ → aide), `--lo-form-gap` (rangées d'un formulaire), `--lo-item-gap` (lignes d'une carte
  de liste), `--lo-r` (8 px). Une appli ne fixe **aucune** taille de texte en dur : elle lit ces jetons (directement ou par
  ses propres variables branchées dessus dans son pont). Composants prêts à l'emploi : voir `docs/composants.md`.
- **Téléphone** (moins de 52 rem) : le menu devient un tiroir (bouton menu à gauche de la recherche), plus de barre d'état.
- **Toute l'interface en français.**
- **Rangées égales** (décidé le 2026-11-13 par Aurélien) : des éléments identiques placés côte à côte (tuiles, cartes
  d'agents, d'applis, de services) se rangent en lignes **de même longueur** dès que leur nombre le permet. 6 éléments →
  3 + 3 ; 8 → 4 + 4 ; 16 → 4 + 4 + 4 + 4 ; jamais 4 + 2 ni 5 + 3. Donc pas de `repeat(auto-fill, …)` pour un nombre
  connu d'éléments : le nombre de colonnes est un diviseur du nombre d'éléments, choisi parmi ceux qui tiennent dans la
  largeur (3 ou 4 par ligne de préférence, sinon le plus grand diviseur qui tient ; une seule colonne sur téléphone si
  rien d'autre ne tient). Un nombre premier (5, 7…) garde le remplissage normal. Référence : `labsCols(n, max)` de
  Projet Labs (`app/static/switchboard.js`, bloc « Agents »), à reprendre dans le kit à sa prochaine version.

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

## Crate : dans la suite, hors du schéma « … Labs »

Depuis le 2026-11-12 (décision d'Aurélien), Crate fait partie de la suite et
reçoit Labs OS par la propagation (`kit_dir` : `frontend/public/labs-os`).
Il garde son **logo C vinyle** et s'appelle **Crate**, sans « .labs » : le
kit le connaît sous l'identifiant `crate` (`data-lo-app="crate"`, palette,
touche 7) avec son propre logo. Sa couleur, l'orange `#d9701f` (`#a85310` sur
fond clair), est une dérogation à la règle des 40° (6° de Torrent, 13° de
Cover Labs). Les téléchargements de Crate partent dans une autre appli, Digger.

## Digger : dans la suite, hors du schéma « … Labs »

Depuis le 2026-11-12 (décision d'Aurélien), Digger rejoint la suite comme
Crate : il s'appelle **Digger**, sans « .labs », et reçoit Labs OS par la
propagation (`kit_dir` : `frontend/public/labs-os`, dépôt
`brainwasher-01/digger`). Le kit le connaît sous l'identifiant `digger`
(`data-lo-app="digger"`, palette, touche 8, adresse `digger.<domaine>`) avec
son propre logo (bac de disques, construction de Crate). Sa couleur, le
fuchsia `#e45bd0` (`#a8279a` sur fond clair), est une dérogation à la règle
des 40° (14° du rose réservé). Digger cherche et télécharge la musique sur
Soulseek et la remet à Crate, qui garde la curation et les imports.

## Projets créés dans Projet Labs

Un projet du groupe **Labs** reprend à sa création la charte de la suite
(`CHARTE.md` : applis et couleurs, principes, règles communes, Labs OS ; et un
bloc dans `CLAUDE.md`). Un projet du groupe **Crate** reprend la charte de
Crate seule.

## Ce qui reste propre à chaque appli

Ses écrans, son vocabulaire métier, ses couleurs de données (graphiques, tags
de trackers, affiches) et son pont. Les règles de [composants.md](composants.md)
et [principes.md](principes.md) restent valables.

## Habillage 2.0.0 (2026-11-10)

Le kit 2.0.0 change l'apparence de toute la suite sans changer le balisage : les classes `lo-*` et les jetons `--lo-*` gardent leur nom.

- **Police** : Geist partout. La chasse fixe passe par `--lo-font-code` et ne sert qu'au code, aux chemins techniques et aux terminaux. `--lo-font-mono` vaut la police de texte, pour que l'habillage écrit en « mono » par les applis suive sans modification.
- **Couleurs** : surfaces neutres, blanc en clair et quasi noir en sombre. L'accent est la couleur de l'appli (`--lo-accent`). Vert, ambre, rouge et bleu restent réservés aux états.
- **Coque** : menu de 260 px translucide, barre du haut de 56 px, recherche en pilule centrée. Plus de crochets, de grain, d'aurore ni de barre d'état en bas. Tiroir sur téléphone.
- **Composants** : boutons pleins sans contour (rayon 10 px), segments à pastille (`.lo-seg`), cartes à coins de 16 px (`.lo-panel`, `.lo-item`), pastilles « un point et un mot » (`.lo-pill`), terminal (`.lo-term`, `.lo-term-bar`, `.lo-term-lights`, `.lo-term-title`, `.lo-term-body`, couleurs `.lo-t-*`).
- **Écarts** : 12 px entre éléments d'un bloc (`--lo-gap-sm`), 16 px entre blocs et entre colonnes (`--lo-gap`), 24 px autour des titres de page.
- **Largeur** : le contenu prend toute la largeur disponible. Pas de colonne étroite ni de tableau partiel dans une carte large.
- **Terminal** : tout journal de commandes garde l'allure d'un terminal (chasse fixe, fond sombre dans les deux thèmes, feux, couleurs).

Chaque appli relie ses composants propres au kit dans une petite feuille chargée en dernier. Origine du langage visuel : HolyArrs (AGPL-3.0), dont aucun code n'est repris.
