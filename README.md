# 🎮 Guess the Number

Une application web simple et interactive pour deviner un nombre aléatoire entre 1 et 500. Conçue avec Vite, stylisée avec Tailwind CSS et déployée sur Vercel.

## 📝 Description

- Un nombre est généré aléatoirement entre 1 et 500
- Vous devez le deviner en un minimum de tentatives
- Le jeu vous indique si votre proposition est trop grande ou trop petite
- Chaque essai est ajouté dans une jauge visuelle (trop petit 📉 / trop grand 📈)
- Une fois trouvé, vous accédez à un écran de victoire et pouvez rejouer

## 🚀 Fonctionnalités

- Interface en 2 étapes : écran d'accueil et écran de jeu
- Génération aléatoire du nombre à deviner (`Math.random()`)
- Système de feedback visuel et textuel
- Compteur de tentatives dynamique
- Réinitialisation complète via un bouton "Rejouer"

## 🗂️ Structure du projet

```
.
├── index.html
├── style.css
├── vite.config.js
├── /src
│   └── main.js
├── /public
│   └── vite.svg
└── /dist
```

- `/src` : logique principale du jeu (classe Game, interactions DOM)
- `/public` : fichiers statiques (favicon)
- `/dist` : build de production géré par Vite

## 🧠 Techniques utilisées

- Classes JavaScript pour organiser la logique (`Game`, `Display`)
- [Math.random()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random) pour générer le nombre mystère
- [preventDefault()](https://developer.mozilla.org/fr/docs/Web/API/Event/preventDefault) pour gérer les formulaires
- Validation de l'entrée utilisateur avec `Number.isNaN()`
- Manipulation DOM avec `querySelector`, `textContent`, `innerHTML`, `appendChild`

## 🛠️ Technologies utilisées

- ⚡ [ViteJS](https://vitejs.dev) — Build rapide et moderne
- 🎨 [Tailwind CSS](https://tailwindcss.com) — Framework CSS utilitaire
- ☁️ [Vercel](https://vercel.com) — Déploiement web
- 🟨 JavaScript ES6+ — Classes, événements, manipulation DOM
- 📄 HTML5 — Structure sémantique

---

> Développé dans un but d'apprentissage et de pratique de la logique JavaScript et du DOM.
