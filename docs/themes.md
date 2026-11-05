# Thèmes : Labs OS pour toute la suite

Depuis le 2026-11-05, toutes les applis partagent l'interface **Labs OS** :
mêmes fonds bleu nuit, mêmes polices, même coque, la couleur d'appli comme
accent. Le kit et son mode d'emploi : [labs-os.md](labs-os.md).

Chaque appli garde dans `apps/<appli>/theme.md` ce qui lui reste propre : son
pont vers les jetons `--lo-*`, ses couleurs de données, ses écarts assumés.

---

*Historique — avant Labs OS :*

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
