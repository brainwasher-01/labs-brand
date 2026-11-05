# Suivi de cohérence de la suite

Tenu par Projet Labs. La page « La suite Labs » de l'appli refait ces
contrôles automatiquement à partir de `catalogue.json`, des chartes et de
`docs/propositions.md`.

## État au 2026-11-05

| Appli | Charte | Rôle | État | Thèmes documentés | Remarques |
|---|---|---|---|---|---|
| Backup Labs | complète | oui | en service | oui (3 thèmes) | Référence pour les thèmes et les motifs |
| Projet Labs | complète | oui | en développement | oui (Nuit) | — |
| Asset Labs | à compléter | oui | à compléter | non | Couleur `#f2b84b` de même teinte (39°) que l'état « à vérifier » |
| Finance Labs | à compléter | **non** | à compléter | non | Rôle inconnu |
| Torrent Labs | complète | oui | en service | oui (Terminal) | Couleur `#ff9b6a` à 19° d'Asset Labs et 15° de l'état « échec » ; accent bleu `#00aaff` ; écarts assumés : interface en anglais, bouton d'action vert, pas de menu latéral, angles droits |

## Écarts relevés

1. **Chartes incomplètes** : Asset Labs et Finance Labs (identité partielle,
   thèmes, écrans, vocabulaire, écarts).
2. **Liens « thèmes » vers des fichiers absents** pour ces deux applis :
   `CATALOGUE.md` indique désormais « à documenter » au lieu d'un lien cassé.
3. **Couleurs** : la règle « au moins 40° de teinte d'écart » n'est pas tenue
   entre Torrent Labs et Asset Labs ; plusieurs couleurs d'appli tombent sur
   une couleur d'état (Backup Labs ≈ réussi, Asset Labs ≈ à vérifier,
   Torrent Labs ≈ échec), ce qui contredit le principe 2 dès qu'elles servent
   d'accent.
4. **Contraste sur blanc** : toutes les couleurs d'appli font entre 1,6:1 et
   2,4:1 sur blanc ; « lisible sur blanc » ne peut valoir que pour le logo
   (tuile sombre), pas pour du texte.
5. **`docs/contribuer.md`** cite un dossier `css/` qui n'existe pas.
6. **Glossaire** : *snapshot* = « version » chez Backup Labs ; Projet Labs a
   besoin de « point de restauration » pour une version nommée.
7. **Thèmes** : Backup Labs (Console) et Projet Labs (Nuit) sont déjà très
   proches (fonds bleu nuit, IBM Plex Sans + JetBrains Mono, menu en mono,
   rayons 6–8 px) : base naturelle d'un thème commun. Torrent Labs (Terminal)
   s'en écarte le plus : tout en mono, angles droits, navigation en haut,
   interface en anglais.
8. **Vocabulaire** : Torrent Labs garde l'anglais de l'écosystème torrent
   (écart assumé), contraire au principe 3 « des mots simples ».

Les décisions proposées sont dans
[`../../docs/propositions.md`](../../docs/propositions.md).
