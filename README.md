# ICA Website - Inspection Control Audit

Site web moderne pour ICA (Inspection Control Audit), bureau de contrôle spécialisé.

## Structure du Projet

Le projet est divisé en deux parties distinctes :

- **`/client`** : Frontend (React, Vite, Tailwind CSS)
- **`/server`** : Backend (Express, Node.js)

## Prérequis

- Node.js (v18+)
- npm ou pnpm

## Installation

1.  **Client** :
    ```bash
    cd client
    npm install
    ```

2.  **Server** :
    ```bash
    cd server
    npm install
    ```

## Démarrage en Développement

1.  **Lancer le Client** :
    ```bash
    cd client
    npm run dev
    ```
    Le site sera accessible sur `http://localhost:5173`.

2.  **Lancer le Serveur** (Optionnel pour le moment, sert les fichiers statiques en prod) :
    ```bash
    cd server
    npm run dev
    ```
    Le serveur sera accessible sur `http://localhost:3000`.

## Fonctionnalités Clés

- **Design Moderne** : Interface utilisateur soignée avec Tailwind CSS et Shadcn/UI.
- **Formulaire de Devis** : Processus de demande de devis en 5 étapes avec validation et persistance locale.
- **Responsive** : Adapté à tous les écrans (Mobile, Tablette, Desktop).
- **Architecture Propre** : Séparation claire entre frontend et backend.

## Déploiement

Pour générer la version de production du client :

```bash
cd client
npm run build
```

Les fichiers générés seront dans le dossier `dist` (à la racine ou dans client/dist selon la config).
Le serveur est configuré pour servir ces fichiers statiques en production.
