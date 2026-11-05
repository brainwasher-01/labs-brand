# Typographie

Chaque appli choisit ses polices dans son thème (voir `apps/<appli>/theme.md`).
Deux règles communes :

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
