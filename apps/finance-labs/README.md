# Finance Labs — charte

## Identité

| | |
|---|---|
| Nom affiché | Finance Labs |
| Nom écrit (logo texte) | `finance.labs` |
| Rôle | Finances personnelles du foyer, 100 % locales : import des relevés bancaires (CSV, OFX, QIF), comptes et titulaires, vue d'ensemble du patrimoine, simulateur d'épargne et de prêt ; aucune donnée envoyée sur Internet |
| Nom du conteneur | `finance-labs` |
| Couleur | `#6cc7f0` |
| Logo | [`../../logos/finance-labs.svg`](../../logos/finance-labs.svg), [`png`](../../logos/finance-labs.png) |
| Icône Unraid | `https://raw.githubusercontent.com/brainwasher-01/labs-brand/main/logos/finance-labs.png` |
| Technologie de l'interface | Une page HTML/CSS/JavaScript sans framework ni étape de build, servie par FastAPI (Python), base SQLite ; graphiques SVG dessinés sur place |
| État | En service ; catégories et tableau de bord mensuel en préparation |

## Thèmes

Deux variantes d'un même thème aux couleurs du logo, « Nuit » (sombre) et
« Jour » (clair), choisies automatiquement selon le système : voir
[theme.md](theme.md), fichiers dans [`theme/`](theme/).

## Écrans

Voir [ecrans.md](ecrans.md).

## Vocabulaire propre

| Terme technique | Mot affiché |
|---|---|
| export bancaire (CSV, OFX, QIF) | relevé |
| transaction | opération |
| owner, holder | titulaire |
| watched folder | boîte de dépôt |
| import profile, column mapping | réglages de lecture CSV (mémorisés par banque) |
| duplicate | doublon (ignoré) |
| internal transfer | virement interne |
| net worth | patrimoine |
| balance | solde |
| projection | simulateur |
| dashboard | vue d'ensemble |

## Écarts assumés avec le commun

- **Bleu foncé en mode clair.** `#6cc7f0` n'atteint que 1,9:1 sur blanc : en
  mode clair, `.labs` et les actions utilisent `#16729f` (5,3:1), le même bleu
  assombri. Le logo garde sa couleur partout. Voir la proposition dans
  [`../../docs/propositions.md`](../../docs/propositions.md).
- **Menu horizontal en haut** plutôt que latéral : cinq entrées seulement ; il
  passe à la ligne sur mobile.
- **« Vue d'ensemble »** plutôt qu'« Accueil » : l'écran d'entrée montre le
  patrimoine du foyer.
- **Vert et rouge sur les montants** : positif en vert, négatif en rouge, en
  plus des états. Le signe (« − ») est toujours écrit, la couleur n'est jamais
  seule.
- **Pas de sélecteur de thème** : clair ou sombre suit le système.
- **Polices système** pour le texte ; seule JetBrains Mono (gras, embarquée)
  sert au nom de l'appli.

## Journal

| Date | Changement |
|---|---|
| 2026-11-05 | Dossier créé avec le logo |
| 2026-11-05 | Charte complétée ; thème bleu « Nuit » / « Jour » aux couleurs du logo, nom `finance.labs`, icône Unraid commune (Finance Labs 0.2.2) |
