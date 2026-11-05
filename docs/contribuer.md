# Contribuer

Chaque appli de la suite tient **sa charte dans son dossier** `apps/<appli>/`.
Les règles communes (`docs/`, `css/`, `logos/`) changent rarement et pour
toute la suite à la fois.

## Ce qu'une appli dépose

| Fichier | Contenu |
|---|---|
| `apps/<appli>/README.md` | La charte : identité, couleur, logo, vocabulaire propre, liens |
| `apps/<appli>/theme.md` | Les thèmes de l'appli : couleurs (variables et valeurs), polices, rayons, ombres, clair/sombre |
| `apps/<appli>/theme/` | Les fichiers du thème (CSS, tokens JSON), facultatif |
| `apps/<appli>/ecrans.md` | Liste des écrans et de leur rôle (facultatif mais conseillé) |
| `apps/<appli>/captures/` | Captures d'écran récentes (PNG, < 500 Ko chacune) |

Partir du modèle [`../apps/_modele/README.md`](../apps/_modele/README.md).

## Règles

- Ne pas modifier `docs/`, les logos ou les dossiers des autres applis
  depuis le dossier d'une appli : proposer le changement dans
  `docs/propositions.md` avec la raison.
- Garder `catalogue.json` et `CATALOGUE.md` à jour quand une appli change de
  nom, de couleur, de dépôt ou de nom de conteneur.
- Rien de privé : ce dépôt est **public** (pas d'adresse IP, de secret, de nom
  de machine interne autre que les noms d'applis, de capture montrant des
  données personnelles).
- Commits en anglais (Conventional Commits), documentation en français.
- Noter chaque changement dans [`../CHANGELOG.md`](../CHANGELOG.md).
