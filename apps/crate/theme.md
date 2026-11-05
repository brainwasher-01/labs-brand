# Crate — thèmes

Fichiers : [`theme/crate-bac.css`](theme/crate-bac.css) (copie de
`frontend/src/styles/skins/bac.css`, tous les jetons en clair et en sombre et
les formes propres au thème), [`theme/crate-index.css`](theme/crate-index.css)
(copie de `frontend/src/styles/index.css` : polices, jetons de mise en page,
exposition à Tailwind, échelle des rayons),
[`theme/crate-components.css`](theme/crate-components.css) (copie de
`frontend/src/styles/components.css` : briques `c-*`) et
[`theme/tokens.json`](theme/tokens.json) (tous les jetons, extraits du
`DESIGN.md` de Crate). Copies de Crate 0.77.3 ; la source fait foi.

## Liste des thèmes

| Thème | Par défaut | Clair ou sombre | Esprit |
|---|---|---|---|
| Bac de disquaire, clair | oui | clair | carton gris, intercalaires colorés, gommettes |
| Bac de disquaire, sombre | non | sombre | noir vinyle, mêmes intercalaires |
| Auto | — | suit le système | bascule avec `prefers-color-scheme` |

Un seul thème (ADR-0107), trois modes. Le choix se fait **par appareil** dans
Paramètres > Apparence (cartes Clair, Sombre, Auto), mémorisé sous la clé
`localStorage` `crate-theme` (`light`, `dark`, `system`). Le thème est porté
par `data-skin="bac"` sur `<html>` (et déclaré sur `:root` en repli), le mode
sombre par la classe `.dark`, posée avant le premier rendu par un script de
`index.html` pour éviter le flash. Changer de mode ne déplace aucun élément.

## Couleurs communes aux deux modes

Les cinq intercalaires, les types de fiche et les séries de graphiques sont
identiques en clair et en sombre ; texte toujours en encre `--tab-ink` sur
un intercalaire (contraste de 5,0:1 à 10,7:1).

## Bac de disquaire, clair — couleurs

Sélecteur : `:root, [data-skin='bac']`.

| Rôle | Variable | Valeur |
|---|---|---|
| Intercalaire 1, orange | `--tab-1` | `#ef8a3c` |
| Intercalaire 2, sarcelle (h2, réussi) | `--tab-2` | `#2fa596` |
| Intercalaire 3, jaune (h3, à vérifier) | `--tab-3` | `#e9c543` |
| Intercalaire 4, rose (échec) | `--tab-4` | `#e0688f` |
| Intercalaire 5, bleu (information) | `--tab-5` | `#5b86d6` |
| Encre sur intercalaire | `--tab-ink` | `#17171a` |
| Fond de page | `--background` | `#ececee` |
| Texte | `--foreground` | `#18181b` |
| Carte | `--card` | `#f6f6f7` |
| Texte sur carte | `--card-foreground` | `#18181b` |
| Menu flottant, fenêtre | `--popover` | `#ffffff` |
| Texte de menu flottant | `--popover-foreground` | `#18181b` |
| Bouton principal | `--primary` | `#18181b` |
| Texte du bouton principal | `--primary-foreground` | `#f6f6f7` |
| Bouton secondaire | `--secondary` | `#e0e0e3` |
| Texte du bouton secondaire | `--secondary-foreground` | `#18181b` |
| Fond atténué | `--muted` | `#e2e2e5` |
| Texte secondaire | `--muted-foreground` | `#55555c` |
| Survol | `--accent` | `#dfdfe3` |
| Texte au survol | `--accent-foreground` | `#18181b` |
| Action destructrice (en lavis) | `--destructive` | `#b8355f` |
| Bordure courante | `--border` | `#d3d3d8` |
| Bord de champ | `--input` | `#bdbdc4` |
| Anneau de focus | `--ring` | `#d9701f` |
| Rail (menu) | `--sidebar` | `#18181b` |
| Texte du rail | `--sidebar-foreground` | `#dcdcdf` |
| Rail, actif | `--sidebar-primary` | `#ef8a3c` |
| Texte du rail actif | `--sidebar-primary-foreground` | `#18181b` |
| Rail, accent | `--sidebar-accent` | `#ef8a3c` |
| Texte sur accent du rail | `--sidebar-accent-foreground` | `#17171a` |
| Filet du rail | `--sidebar-border` | `#2c2c31` |
| Focus dans le rail | `--sidebar-ring` | `#ef8a3c` |
| Titres de groupe du rail | `--sidebar-muted` | `#9b9aa0` |
| Surface | `--surface` | `#f6f6f7` |
| Cover absente | `--surface-artwork` | `#e2e2e5` |
| Bordure fine | `--border-subtle` | `#dcdce0` |
| Bordure forte, gommette neutre | `--border-strong` | `#a9a9b1` |
| Couleur de marque (fonds, filets, icônes) | `--accent-brand` | `#d9701f` |
| Texte sur la couleur de marque | `--accent-brand-foreground` | `#18181b` |
| Texte en couleur de marque (AA) | `--accent-brand-text` | `#a85310` |
| Sélection, piste en cours | `--selection` | `#fbe2c9` |
| Réussi (texte) | `--state-ok` | `#18736a` |
| À vérifier (texte) | `--state-warn` | `#8a6400` |
| Échec (texte) | `--state-bad` | `#b8355f` |
| Information (texte) | `--state-info` | `#345fae` |
| Neutre (texte) | `--state-neutral` | `#5f5f66` |
| Étoile pleine | `--star-on` | `#18181b` |
| Étoile vide | `--star-off` | `#c6c6cc` |
| Type de fiche : album | `--entity-album` | `#ef8a3c` |
| Type de fiche : artiste | `--entity-artist` | `#e0688f` |
| Type de fiche : piste | `--entity-track` | `#2fa596` |
| Type de fiche : label | `--entity-label` | `#5b86d6` |
| Graphique, série 1 | `--chart-1` | `#ef8a3c` |
| Graphique, série 2 | `--chart-2` | `#2fa596` |
| Graphique, série 3 | `--chart-3` | `#e9c543` |
| Graphique, série 4 | `--chart-4` | `#e0688f` |
| Graphique, série 5 | `--chart-5` | `#5b86d6` |
| Plaque des logos de labels (toujours blanche) | `--logo-plate` | `#ffffff` |

## Bac de disquaire, sombre — couleurs

Sélecteur : `.dark`. Les couleurs absentes de `.dark` dans la CSS (intercalaires,
types de fiche, graphiques, plaque des logos) reprennent la valeur du clair.

| Rôle | Variable | Valeur |
|---|---|---|
| Intercalaire 1, orange | `--tab-1` | `#ef8a3c` |
| Intercalaire 2, sarcelle (h2, réussi) | `--tab-2` | `#2fa596` |
| Intercalaire 3, jaune (h3, à vérifier) | `--tab-3` | `#e9c543` |
| Intercalaire 4, rose (échec) | `--tab-4` | `#e0688f` |
| Intercalaire 5, bleu (information) | `--tab-5` | `#5b86d6` |
| Encre sur intercalaire | `--tab-ink` | `#17171a` |
| Type de fiche : album | `--entity-album` | `#ef8a3c` |
| Type de fiche : artiste | `--entity-artist` | `#e0688f` |
| Type de fiche : piste | `--entity-track` | `#2fa596` |
| Type de fiche : label | `--entity-label` | `#5b86d6` |
| Graphique, série 1 | `--chart-1` | `#ef8a3c` |
| Graphique, série 2 | `--chart-2` | `#2fa596` |
| Graphique, série 3 | `--chart-3` | `#e9c543` |
| Graphique, série 4 | `--chart-4` | `#e0688f` |
| Graphique, série 5 | `--chart-5` | `#5b86d6` |
| Plaque des logos de labels (toujours blanche) | `--logo-plate` | `#ffffff` |
| Fond de page | `--background` | `#17171a` |
| Texte | `--foreground` | `#f1efe9` |
| Carte | `--card` | `#1f1f23` |
| Texte sur carte | `--card-foreground` | `#f1efe9` |
| Menu flottant, fenêtre | `--popover` | `#232328` |
| Texte de menu flottant | `--popover-foreground` | `#f1efe9` |
| Bouton principal | `--primary` | `#ef8a3c` |
| Texte du bouton principal | `--primary-foreground` | `#17171a` |
| Bouton secondaire | `--secondary` | `#26262b` |
| Texte du bouton secondaire | `--secondary-foreground` | `#f1efe9` |
| Fond atténué | `--muted` | `#222226` |
| Texte secondaire | `--muted-foreground` | `#a6a39c` |
| Survol | `--accent` | `#28282e` |
| Texte au survol | `--accent-foreground` | `#f1efe9` |
| Action destructrice (en lavis) | `--destructive` | `#ee7fa2` |
| Bordure courante | `--border` | `#2e2e34` |
| Bord de champ | `--input` | `#3d3d44` |
| Anneau de focus | `--ring` | `#ef8a3c` |
| Rail (menu) | `--sidebar` | `#0f0f11` |
| Texte du rail | `--sidebar-foreground` | `#d9d6cf` |
| Rail, actif | `--sidebar-primary` | `#ef8a3c` |
| Texte du rail actif | `--sidebar-primary-foreground` | `#17171a` |
| Rail, accent | `--sidebar-accent` | `#ef8a3c` |
| Texte sur accent du rail | `--sidebar-accent-foreground` | `#17171a` |
| Filet du rail | `--sidebar-border` | `#232327` |
| Focus dans le rail | `--sidebar-ring` | `#ef8a3c` |
| Titres de groupe du rail | `--sidebar-muted` | `#8d8a84` |
| Surface | `--surface` | `#1f1f23` |
| Cover absente | `--surface-artwork` | `#202024` |
| Bordure fine | `--border-subtle` | `#27272c` |
| Bordure forte, gommette neutre | `--border-strong` | `#4a4a52` |
| Couleur de marque (fonds, filets, icônes) | `--accent-brand` | `#ef8a3c` |
| Texte sur la couleur de marque | `--accent-brand-foreground` | `#17171a` |
| Texte en couleur de marque (AA) | `--accent-brand-text` | `#f4a466` |
| Sélection, piste en cours | `--selection` | `#3b2c1e` |
| Réussi (texte) | `--state-ok` | `#4cc2b2` |
| À vérifier (texte) | `--state-warn` | `#e9c543` |
| Échec (texte) | `--state-bad` | `#ee7fa2` |
| Information (texte) | `--state-info` | `#84a6e6` |
| Neutre (texte) | `--state-neutral` | `#a6a39c` |
| Étoile pleine | `--star-on` | `#e9c543` |
| Étoile vide | `--star-off` | `#3c3c42` |

## Contrastes vérifiés

| Paire | Clair | Sombre |
|---|---|---|
| Texte sur fond | 15,0:1 | 15,6:1 |
| Texte secondaire sur fond | 6,3:1 | 7,1:1 |
| Texte en couleur de marque sur fond | 4,6:1 (`#a85310`) | 8,8:1 (`#f4a466`) |
| Encres d'état sur fond (ok, warn, bad, info) | 4,8 · 4,6 · 4,8 · 5,2:1 | 8,2 · 10,7 · 7,0 · 7,3:1 |
| Texte du rail sur le rail | 12,9:1 | — |

La couleur de marque `#d9701f` ne sert jamais de texte sur fond clair
(2,8:1 sur `#ececee`) : le texte passe par `--accent-brand-text`.

## Lecteur audio

Le lecteur ne prend pas ses couleurs au thème mais à la cover en cours :
dégradé de la couleur de fond de la cover mélangée au noir (62 % puis 30 %),
texte clair fixe `#f6f4ef`, bouton lecture rond de 44 px dans l'accent de la
cover ; repli sur `--sidebar` et `--sidebar-foreground` sans palette. Plein
écran et fiches album, piste, artiste et label : cover floutée en fond
(flou 64 px à 55 % sur les fiches, 48 px à 70 % dans le lecteur) sous un
voile de `--background`.

## Typographie

| Usage | Police | Graisses et réglages |
|---|---|---|
| Texte courant | Archivo Variable (embarquée) | 400, 14 px, interligne 1,43 |
| Titres de page et de fiche | Archivo Variable | 900, capitales, chasse 72 %, approche −0,005 em ; 2,25 rem (page), 2,875 rem (fiche) dès 64 rem de large |
| Onglets de section | Archivo Variable | 800, capitales, chasse 75 %, approche 0,02 em, 1 rem (h2) ou 0,875 rem (h3, h4) |
| Gommettes | Archivo Variable | 800, 0,6875 rem, chasse 80 % |
| Libellés (groupes du rail, barre basse) | Archivo Variable | 600, 0,6875 rem, capitales espacées 0,08 em |
| Chiffres, formats, durées, étiquettes de faits | JetBrains Mono Variable (embarquée) | chiffres tabulaires ; étiquettes en petites capitales 0,6875 rem, 0,12 em |
| Nom écrit `CRATE` (rail) | Archivo Variable | jetons de titre, 1,375 rem |

Variables : `--font-body`, `--font-display`, `--font-code`, `--title-weight`
(900), `--title-tracking` (−0,005 em), `--title-transform` (uppercase),
`--title-stretch` (72 %).

## Formes

- Rayon de base `--radius` 0,375 rem ; échelle dérivée de ×0,6 (`sm`) à ×2,6
  (`4xl`).
- Covers : rayon propre `--cover-radius` 3 px, toujours carrées.
- Gommette : rayon 3 px, marge 0,3 rem 0,5 rem, aplat de l'intercalaire du
  sens.
- Onglet de section : arrondi en haut seulement (0,5 rem), posé sur un trait
  de 2 px en `--foreground`.
- Entrée du rail : liseré gauche de 4 px dans un intercalaire (rang 1 à 5 en
  boucle), arrondie à droite ; à l'actif, aplat de l'intercalaire.
- Boutons du lecteur : ronds.
- **Aucune ombre portée** (profondeur par couches de teinte et filets), sauf
  cover du plein écran, barre de lecture et bulle de l'index alphabétique.
- Focus : bordure `--ring` et halo de 3 px à 50 %.

## Mise en page

| Jeton | Valeur |
|---|---|
| Barre du haut (téléphone) | 3,5 rem |
| Rail complet (dès 64 rem) | 15 rem |
| Rail d'icônes (48 à 64 rem) | 4 rem |
| Barre basse (téléphone) | 4 rem |
| Mini-lecteur | 4 rem |
| Barre de lecture (ordinateur) | 4,5 rem |
| Largeur maximale du contenu | 96 rem |
| Gouttières | 16 px (téléphone), 24 px (dès 48 rem), 40 px (très grand écran) |
| Cibles tactiles | 44 px sur pointeur grossier |
