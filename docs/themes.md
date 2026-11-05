# Thèmes : chacun les siens, pour l'instant

Les applis de la suite n'ont **pas** de thème commun aujourd'hui : chacune a
ses propres couleurs, polices et variantes claires ou sombres. Chaque appli
documente les siens dans `apps/<appli>/theme.md` (et, si elle le souhaite,
dépose ses fichiers dans `apps/<appli>/theme/`).

Ce qui est commun dès maintenant :

- les **logos** et leur couleur ([logos.md](logos.md), [couleurs.md](couleurs.md)) ;
- l'**écriture du nom** (`backup.labs`, voir [typographie.md](typographie.md)) ;
- les **principes** ([principes.md](principes.md)) et le **vocabulaire**
  ([vocabulaire.md](vocabulaire.md)) ;
- les **motifs d'interface** recommandés ([composants.md](composants.md)).

## Harmonisation, plus tard

Une fois les thèmes de chaque appli documentés, ils pourront être comparés et,
si c'est souhaité, rapprochés. Les propositions vont dans
[propositions.md](propositions.md). Exemple de thèmes complets et documentés :
Backup Labs, [`../apps/backup-labs/theme.md`](../apps/backup-labs/theme.md).

## Si une appli veut un sélecteur de thème

Mémoriser le choix par navigateur et l'appliquer avant l'affichage pour
éviter un flash :

```html
<script>
  try {
    var t = localStorage.getItem('monappli.theme');
    if (t) document.documentElement.dataset.theme = t;
  } catch (e) {}
</script>
```
