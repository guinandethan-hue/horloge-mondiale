# 🌍 Horloge mondiale

Une application hors ligne pour comparer l’heure dans les pays et les fuseaux horaires du monde. Choisis un pays — ou clique sur un fuseau détaillé de la carte — puis indique une date et une heure de référence.

## Télécharger et installer sous Windows

➡️ [Télécharger la dernière version](https://github.com/guinandethan-hue/horloge-mondiale/releases/latest)

Dans la page de la Release, télécharge le fichier **Setup `.exe`**, puis lance-le pour installer l’application. L’installateur peut créer des raccourcis sur le Bureau et dans le menu Démarrer.

Pour désinstaller l’application, ouvre **Paramètres Windows → Applications → Applications installées**, sélectionne **Horloge mondiale**, puis choisis **Désinstaller**.

> Windows peut afficher un avertissement SmartScreen, car l’application n’est pas signée par un éditeur vérifié. Vérifie que le fichier provient bien de la Release de ce dépôt et ne l’exécute que si tu fais confiance à sa provenance. La publication sur GitHub ne supprime pas cet avertissement.

## ✨ Fonctionnalités

Horloge mondiale permet de comparer les heures locales à partir d’un pays ou d’un fuseau horaire de référence, sur une carte interactive.

### 🌍 Carte et fuseaux horaires
- Affichage par pays ou par zones horaires détaillées.
- Passage automatique aux fuseaux détaillés en zoomant.
- Couleurs représentant les décalages avec la référence.
- Informations horaires au survol ou à la sélection d’une zone.
- Bouton pour retrouver le cadrage initial.
- Mode plein écran lorsque celui-ci est disponible.
- Mémorisation du dernier cadrage et du niveau de zoom.

### 🕒 Choix de la référence
- Sélection d’un pays ou d’un fuseau horaire reconnu par l’appareil.
- Utilisation du fuseau horaire de l’appareil, sans géolocalisation GPS.
- Choix d’une date et d’une heure de référence.
- Gestion des heures inexistantes ou répétées lors des changements d’heure pour les fuseaux nommés.
- Actualisation automatique des heures chaque minute.
- Retour à l’heure réelle en un clic.

### ⭐ Personnalisation
- Pays favoris avec accès rapide à leurs heures.
- Thème clair ou sombre.
- Mémorisation locale de la référence, du mode d’affichage et des préférences.
- Recherche de pays et territoires.
- Export CSV des résultats affichés dans la liste.

### ⌨️ Navigation au clavier
- `Ctrl + K` : accéder à la recherche lorsque le raccourci est disponible.
- `Échap` : effacer la recherche lorsque son champ est sélectionné.
- Repères de focus visibles pour faciliter la navigation avec la touche Tab.

## 🚀 Utilisation

1. Choisir un pays ou un fuseau horaire de référence.
2. Pour comparer les heures actuelles, conserver l’heure réelle.
3. Pour simuler un autre instant, choisir une date et une heure, puis cliquer sur **Afficher**.
4. Explorer la carte ou rechercher un pays dans la liste.

Changer de référence conserve le même instant : les heures locales sont recalculées dans les différents fuseaux.

Une heure simulée continue d’avancer. Elle n’est pas conservée après la fermeture : à la prochaine ouverture, l’application repart à l’heure réelle.

## 💾 Préférences locales

Les préférences sont enregistrées sur l’appareil lorsque le stockage local est disponible. Elles ne sont pas synchronisées entre appareils.

Pour une page ouverte directement depuis un fichier local, leur conservation peut dépendre du navigateur.

## ⚠️ Précision et limites

- En mode pays, une seule heure représentative est affichée, même si le territoire comporte plusieurs fuseaux.
- Les frontières et les zones horaires de la carte sont simplifiées et indicatives.
- Les fuseaux nommés utilisent les règles horaires disponibles dans le navigateur ou dans l’environnement de l’application.
- Certaines zones cartographiques utilisent un décalage UTC fixe : elles ne reproduisent pas les changements d’heure saisonniers.
- Le choix direct d’un fuseau améliore la précision de la référence, mais ne modifie pas les limites géographiques de la carte.
- Les règles horaires futures peuvent changer : une application hors ligne doit être mise à jour pour intégrer de nouvelles données.

> Les pays qui ont plusieurs fuseaux sont représentés par leurs zones horaires dans la vue détaillée. Les données géographiques peuvent comporter des simplifications cartographiques.

## Lancer et construire le projet

Prérequis : Node.js et npm.

```bash
npm install
npm start
npm run build
