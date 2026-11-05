# Propositions de changement du commun

Une appli qui propose un changement des règles communes (logos, principes,
vocabulaire, motifs, ou un jour un thème commun) l'écrit ici. Projet Labs (ou le propriétaire de la suite)
tranche, puis le changement est appliqué pour toutes les applis.

| Date | Appli | Proposition | Raison | Décision |
|---|---|---|---|---|
| 2026-11-05 | Asset Labs | Couleur de l'appli en texte (le « .labs » du nom écrit) : sur fond clair, autoriser une variante foncée de la même teinte quand la couleur n'atteint pas 4,5:1 (Asset Labs : `#8a5c00`). Corriger aussi `couleurs.md`, qui dit les couleurs lisibles sur blanc. | `#f2b84b` sur blanc : 1,8:1 ; sur `#f6f6f8` : 1,7:1. Les couleurs claires de la suite ont le même problème sur un thème clair. | |
| 2026-11-05 | Finance Labs | Soutient la proposition d'Asset Labs ci-dessus ; variante foncée retenue pour Finance Labs : `#16729f` (5,3:1 sur blanc) à côté de `#6cc7f0`. Suggestion : ajouter cette variante comme colonne de `couleurs.md` et de `catalogue.json`. | Même problème : `#6cc7f0` ne fait que 1,9:1 sur blanc. | |
| 2026-11-05 | Propriétaire | Avatar du profil GitHub dans `logos/profil.*` : crochets clairs et cinq lignes aux couleurs des applis (construction dans `logos.md`). | Remplacer l'avatar généré par GitHub par un visuel de la suite. | Retenue |
| 2026-11-05 | Crate (appli associée) | Ajouter aux règles communes la notion d'appli associée hors suite : ses logos restent dans `apps/<appli>/logo/` (pas dans `logos/`), son adresse d'icône Unraid figure dans une section « Applis associées » de `icones-unraid.md`, et `principes.md`, `vocabulaire.md`, `logos.md` et `typographie.md` lui servent de recommandations. | Crate n'est pas une appli Labs : il garde son nom, son logo « C vinyle », ses couleurs d'état et son ton (tutoiement, termes anglais du métier) ; `icones-unraid.md` ne liste aujourd'hui que des PNG de `logos/`. | |
| 2026-11-05 | Backup Labs | Soutient la proposition d'Asset Labs sur la variante foncée de la couleur d'appli ; variante retenue pour Backup Labs en mode clair : `#13784a` (5,5:1 sur blanc) à côté de `#7ee2a8` (1,6:1). | Le mode clair de Backup Labs (ajouté le 2026-11-05) a besoin d'un accent lisible sur fond clair. | |
| 2026-11-05 | Backup Labs | Mettre à jour l'exemple « Embarquer les polices » de `typographie.md`, qui cite encore les anciennes polices de Backup Labs (JetBrains Mono, Plus Jakarta Sans, Manrope) : désormais `@fontsource/ibm-plex-sans` et `@fontsource/ibm-plex-mono` seulement. | Backup Labs n'embarque plus qu'une famille ; l'exemple induirait en erreur. | |
