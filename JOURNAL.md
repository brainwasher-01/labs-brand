# Journal — Labs Brand

## 2026-11-05
- Création du projet.

## 2026-11-06
- Kit Labs OS 1.5.0 : 1 rem = 16 px imposé (fin des 85 %), plancher de texte 13 px, jetons d'écart (titre de carte, champ, formulaire, carte de liste), composants lo-panel / lo-form / lo-field / lo-check / lo-item (pastille + boutons sur une rangée centrée) / lo-pill / lo-toolbar. Choix d'Aurélien sur rendu comparé : tout à 100 % plutôt que texte agrandi à 85 %. Exception validée par Aurélien : envoi direct sur GitHub (fichiers trop gros pour save_docs), Projet Labs resynchronisé juste après, puis propagation aux 5 applis.
- Kit Labs OS 1.6.0 : 1.5.0 (100 %) jugé trop gros sur écran 1440p et Asset débordait. Racine imposée par le kit : 87,5 % sur ordinateur (texte courant 14 px, norme des applis de gestion), 100 % sur téléphone ; --lo-fs-xs 0,875 rem et --lo-fs-sm 0,9375 rem (plancher 12,25 px sur ordinateur). Les applis ne fixent plus html. Même procédure d'envoi direct que pour 1.5.0 (fichiers d'Asset trop gros pour save_docs), Projet Labs resynchronisé juste après.
- Décision d'Aurélien : Asset Labs ne lui allait pas, l'appli s'appelle de nouveau Plex Labs. Nouvelle icône « [P] » ambre (même tracé que Projet Labs, couleur différente), dossier apps/plex-labs/, logos plex-labs.*, kit Labs OS 1.6.1 (nom et lettre dans la palette ; identifiant technique « asset » conservé). Outil de renommage livré (scripts/rename-brand-to-plex-labs.sh + workflow à lancer une fois) ; snapshot avant-renommage-plex-labs posé.
