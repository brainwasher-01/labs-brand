# Journal — Labs Brand

## 2026-11-05
- Création du projet.

## 2026-11-06
- Kit Labs OS 1.5.0 : 1 rem = 16 px imposé (fin des 85 %), plancher de texte 13 px, jetons d'écart (titre de carte, champ, formulaire, carte de liste), composants lo-panel / lo-form / lo-field / lo-check / lo-item (pastille + boutons sur une rangée centrée) / lo-pill / lo-toolbar. Choix d'Aurélien sur rendu comparé : tout à 100 % plutôt que texte agrandi à 85 %. Exception validée par Aurélien : envoi direct sur GitHub (fichiers trop gros pour save_docs), Projet Labs resynchronisé juste après, puis propagation aux 5 applis.
- Kit Labs OS 1.6.0 : 1.5.0 (100 %) jugé trop gros sur écran 1440p et Asset débordait. Racine imposée par le kit : 87,5 % sur ordinateur (texte courant 14 px, norme des applis de gestion), 100 % sur téléphone ; --lo-fs-xs 0,875 rem et --lo-fs-sm 0,9375 rem (plancher 12,25 px sur ordinateur). Les applis ne fixent plus html. Même procédure d'envoi direct que pour 1.5.0 (fichiers d'Asset trop gros pour save_docs), Projet Labs resynchronisé juste après.
- Décision d'Aurélien : Plex Labs ne lui allait pas, l'appli s'appelle de nouveau Plex Labs. Nouvelle icône « [P] » ambre (même tracé que Projet Labs, couleur différente), dossier apps/plex-labs/, logos plex-labs.*, kit Labs OS 1.6.1 (nom et lettre dans la palette ; identifiant technique « asset » conservé). Outil de renommage livré (scripts/rename-brand-to-plex-labs.sh + workflow à lancer une fois) ; snapshot avant-renommage-plex-labs posé.
- Kit Labs OS 1.6.2 préparé : identifiant technique de Plex Labs asset -> plex (la barre d'état affichait encore asset.labs ; ancien identifiant toujours accepté par LabsOS.init). Outil livré (scripts/kit_plex_id.py + workflow « Kit 1.6.2 identifiant plex », à lancer une fois), testé sur une copie. Cache de la suite rafraîchi dans Projet Labs : icônes du menu corrigées pour Plex Labs et Dashboard Labs.

## 2026-11-07
- Kit Labs OS 1.7.0 enregistré (accessibilité commune issue de la critique + audit, passes 1 à 3) : plus de texte sous --lo-fs-xs dans le kit, focus de la barre d'état, couleur du texte d'exemple, lien « Aller au contenu », tiroir inerte, LabsOS.confirm, --lo-measure ; règle Plex Sans (menu, boutons) / JetBrains Mono (données). Testé sur demo.html en sombre et clair, ordinateur et téléphone. Propagation à faire après l'envoi vers GitHub.
- Kit Labs OS 1.7.0 envoyé vers GitHub (contenu vérifié octet pour octet contre la version testée) puis propagé aux 5 applis et à Dashboard Labs (événement labs-kit envoyé, 6/6).

## 2026-11-09
- Branches agent/labs-brand-palette-a11y et agent/labs-brand-checkout-sha (fusion en conflit sur PROJECT.md) reprises sur une seule branche à partir de main : agent/labs-brand-kit-1-8-0 (kit 1.8.0, palette accessible, checkout épinglé par SHA). À fusionner par Aurélien ; les deux anciennes branches restent à écarter.

## 2026-11-10
- Kit Labs OS 2.0.0 publié sur main (nouvel habillage, police Geist téléchargée par sync-labs-kit.sh avec version épinglée et empreinte vérifiée). Propagé à Projet Labs seulement au 10 nov. ; Backup, Finance, Torrent et Dashboard restent à adapter puis à propager, Plex Labs en attente de la décision d'Aurélien (PROJECT.md annonce la propagation aux cinq : à corriger). Chaque appli doit recevoir le nouveau scripts/sync-labs-kit.sh avant le kit, sinon elle retombe sur la police du système ; le workflow du lundi prend le kit sans attendre.
- Kit 2.0.0 : état au 10 nov. à 11 h 30. Propagé à Projet Labs (1.14.0), Plex Labs (0.5.23) et Backup Labs (0.8.9), chacun avec sa feuille d'adaptation et le nouveau script de recopie. Finance, Torrent et Dashboard restent en 1.7.0 : adaptation prête en local mais non relue ni livrée, prévue jeudi 12 nov. (avant le workflow du lundi 16, qui prendrait le kit sans l'adaptation). PROJECT.md de labs-brand et CLAUDE.md / PROJECT.md de Projet Labs annoncent une autre répartition : à corriger jeudi.

## 2026-11-14
- Kit Labs OS 2.7.0 (commit eb38a62) : info-bulle « i » commune (data-lo-info, LabsOS.info), règles d'écran de la suite écrites dans docs/labs-os.md (pas de paragraphe d'explication, jamais de « … », 8 px du bord, 12/16/24 px, prendre la largeur, couleurs d'état réservées, formats de vérification), boucle du bouton de réduction du menu corrigée (48 remplacements d'icône en 3 s → 0, mesuré dans Browserless sur demo.html). Propagé à backup, plex (Cover), finance, projet, torrent, dashboard, digger ; ni mixer (autre session) ni crate (migration en cours par un autre agent).
