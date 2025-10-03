# 🎬 Fake Netflix – Projet Cours

Ce projet est une application web inspirée de Netflix, développée dans le cadre de mes cours.  
Il utilise l’API de TheMovieDB (https://www.themoviedb.org/) pour récupérer les films, séries et affiches.

---

## 🚀 Installation

1. Clonez le dépôt :
   cd fake-netflix

2. Installez les dépendances :
   npm install

3. Ajoutez un fichier .env à la racine du projet et insérez vos clés :
   VITE_API_KEY=your_api_key_here
   VITE_READONLY_API_TOKEN=your_readonly_api_token_here
   VITE_API_URL=https://api.themoviedb.org/3

   ⚠️ Ce fichier .env ne doit pas être poussé sur GitHub (il est ignoré via .gitignore).

4. Lancez l’application en mode développement :
   npm run dev

---

## 🛠️ Technologies utilisées

- Vite (environnement de build rapide)
- React / TypeScript (interface utilisateur)
- TheMovieDB API (source des films et séries)
- CSS / SCSS (styles personnalisés)

---

## 📂 Structure du projet

- src/components → Composants réutilisables (ex: MovieCard, Caroussel)
- src/pages → Pages principales (Accueil, Films, Séries, etc.)
- src/styles → Styles globaux et partiels
- src/services → Appels API à TheMovieDB

---

## ✨ Objectifs pédagogiques

- Apprendre à consommer une API REST avec fetch / axios en TypeScript.
- Découvrir la structuration d’un projet React avec Vite.
- Mettre en pratique l’utilisation des variables d’environnement.
- Expérimenter la composition de composants et la gestion des props.
