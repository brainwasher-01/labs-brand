/* ════════════════════════════════════════════════════════════════════════════════════════════
   Labs OS — kit commun de la suite Labs (dépôt labs-brand, dossier kit/).
   NE PAS MODIFIER DANS UNE APPLI : recopié par la propagation.

   Ajoute à n'importe quelle appli de la suite :
   - la barre de recherche du haut (résultats au fil de la frappe, rangés par catégorie)
     et la palette de commandes (Ctrl K ou Cmd K), qui partagent les mêmes résultats ;
   - le menu commun (classes lo-side, lo-nav…) et son tiroir sur téléphone ;
   - la barre d'état (version, état fourni par l'appli, heure) ;
   - les crochets : titres de page entre [ ] et coins en crochet sur les cartes ;
   - le mode clair / sombre / automatique, appliqué avant l'affichage.

   Utilisation (dans <head>, sans defer, pour éviter un flash de couleurs) :
     <link rel="stylesheet" href="/labs-os/labs-os.css">
     <script src="/labs-os/labs-os.js"></script>
     <script>LabsOS.init({ app: 'projet', version: '1.2.0', title: 'h1', cards: '.card' })</script>
   Options : voir docs/labs-os.md dans labs-brand. Aucun appel réseau.
   ════════════════════════════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var KIT_VERSION = '1.8.0';
  PLACEHOLDER_REST
})();
