# 🌍 Horloge mondiale

Application hors-ligne qui affiche une carte du monde avec l'heure de chaque pays
par rapport à un pays et une heure de référence. En zoomant, la carte bascule sur
les vrais fuseaux horaires (États-Unis, Russie, Canada… découpés par zone).
L'heure se met à jour automatiquement chaque minute.

## Télécharger

➡️[Télécharger l’installateur Windows](https://github.com/guinandethan-hue/horloge-mondiale/releases/latest)

## Fonctionnalités

- Choix d'un pays de référence et d'une heure (ou heure réelle)
- Carte colorée selon le décalage horaire, heure affichée sur chaque pays/fuseau
- Vue détaillée des fuseaux au zoom (données Natural Earth)
- Gestion automatique de l'heure d'été (fuseaux IANA)
- Liste de tous les pays triée par décalage, avec recherche
- 100 % hors-ligne, disponible en `.exe` portable (Electron)

## Lancer le site dans le navigateur

Ouvrir `index.html` (tous les fichiers nécessaires sont dans le dépôt).

## Lancer / construire l'application Electron

```bash
npm install
npm start        # ouvre l'application
npm run build    # crée dist/Horloge mondiale 1.0.0.exe
```

## Données

- Frontières : [johan/world.geo.json](https://github.com/johan/world.geo.json)
- Fuseaux horaires : [Natural Earth](https://www.naturalearthdata.com/) (`ne_10m_time_zones`)
- Carte : [Leaflet](https://leafletjs.com/)
