# Couleurs

## Couleurs des applications

| Application | Couleur | Usage |
|---|---|---|
| Backup Labs | `#7ee2a8` | logo (et accent de son thème Console) |
| Plex Labs | `#f2b84b` | logo |
| Finance Labs | `#6cc7f0` | logo |
| Projet Labs | `#b49cff` | logo |
| Torrent Labs | `#ff9b6a` | logo |
| Dashboard Labs | `#e6edf3` (Lunaire, neutre ; `#1b2230` sur fond clair) | logo (bordure et initiale ; crochets en dégradé de la suite), accent |
| Mixer Labs | `#8ef26a` (Lime, 104° ; `#34791b` sur fond clair, 5,4:1 sur blanc) | logo, accent, piste A du studio |

Une nouvelle appli prend une teinte libre **de même clarté** (lisible sur
`#0b1015` comme sur blanc), différente des autres d'au moins 40° de teinte.
Une couleur neutre (sans teinte, comme Lunaire) n'entre pas dans ce calcul ;
une seule appli de la suite peut être neutre.

**Place restante** (au 2026-11-12) : Mixer Labs (104°) a pris la dernière
plage libre (79° à 106°). Avec les six teintes et le rose réservé, aucune
teinte n'est plus à 40° de toutes les autres : une nouvelle appli prendra le
rose réservé ou demandera de revoir la règle.

## Couleur réservée

| Couleur | Pour |
|---|---|
| Rose `#f27ec6` (323°) | un futur projet d'Aurélien |

## États

Chaque appli choisit ses couleurs d'état dans son thème, mais garde le même
sens : **vert** réussi, **ambre** à vérifier, **rouge** échec, **bleu** en
cours, **gris** en attente. Les valeurs de Backup Labs sont dans
[`../apps/backup-labs/theme.md`](../apps/backup-labs/theme.md).

## Contraste

Texte courant : 4,5:1 minimum ; petits libellés gris compris. Les couleurs à
distinguer diffèrent aussi par la clarté, pas seulement par la teinte.
