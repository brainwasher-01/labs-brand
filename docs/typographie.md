# Typographie

Polices de la suite (embarquées par le kit Labs OS) : **IBM Plex Sans** pour l'interface, **JetBrains Mono** pour les données.

**Échelle commune (kit 1.5.0)** : 1 rem = 16 px sur ordinateur comme sur téléphone ; tailles par jetons uniquement,
13 · 14 · 16 · 18 · 22 · 28 px (`--lo-fs-xs` … `--lo-fs-2xl`), **plancher 13 px**. Détail et usages : `composants.md`.

Règles communes :

- le **nom de l'appli** s'écrit en police à chasse fixe et en gras :
  `backup` puis `.labs` dans la couleur de l'appli (police de référence :
  JetBrains Mono) ;
- chemins, commandes et identifiants en police à chasse fixe.

## Embarquer les polices

Les applis tournent sur le réseau local : embarquer les polices plutôt que
de les charger depuis Internet. Avec npm (SvelteKit, Vite…), par exemple pour
les polices de Backup Labs :

```sh
npm i -D @fontsource/ibm-plex-sans @fontsource/jetbrains-mono @fontsource/plus-jakarta-sans @fontsource/manrope
```

```css
@import '@fontsource/ibm-plex-sans/latin-400.css';
@import '@fontsource/ibm-plex-sans/latin-600.css';
@import '@fontsource/jetbrains-mono/latin-400.css';
@import '@fontsource/jetbrains-mono/latin-700.css';

```
