# Inspection Control Audit (ICA) - Site Web Statique

Site web professionnel pour **Inspection Control Audit**, un bureau de contrôle technique spécialisé dans la vérification réglementaire des équipements techniques.

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 18+ 
- npm ou pnpm

### Installation

1. **Clonez ou décompressez le projet**
   ```bash
   cd ica-website
   ```

2. **Installez les dépendances**
   ```bash
   npm install
   # ou
   pnpm install
   ```

3. **Lancez le serveur de développement**
   ```bash
   npm run dev
   # ou
   pnpm dev
   ```

4. **Ouvrez votre navigateur**
   - Local: `http://localhost:3000`
   - Network: `http://169.254.0.21:3000`

## 📄 Pages du Site

- **Accueil** (`/`) - Présentation générale, valeurs clés, secteurs d'expertise
- **Services** (`/services`) - 6 services détaillés de contrôle
- **Vérifications** (`/verifications`) - 7 catégories d'équipements obligatoires
- **Missions** (`/missions`) - Méthodologie et interventions
- **Contact** (`/contact`) - Formulaire et informations de contact

## 🎨 Design & Branding

- **Couleurs** : Bleu primaire (ICA) + Blanc
- **Logo** : `/client/public/logo-ica.png`
- **Responsive** : Mobile-first, optimisé pour tous les appareils
- **Framework** : React 19 + Tailwind CSS 4 + shadcn/ui

## 📁 Structure du Projet

```
ica-website/
├── client/
│   ├── public/           # Assets statiques (logo, images)
│   ├── src/
│   │   ├── pages/        # Pages du site
│   │   ├── components/   # Composants réutilisables
│   │   ├── index.css     # Styles globaux
│   │   └── App.tsx       # Routeur principal
│   └── index.html        # HTML d'entrée
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 🔧 Commandes Disponibles

```bash
npm run dev      # Démarrer le serveur de développement
npm run build    # Construire pour la production
npm run preview  # Prévisualiser la build
npm run lint     # Vérifier le code
```

## 📝 Contenu

Tout le contenu du site est basé sur les informations fournies pour ICA :
- Services de contrôle technique
- Vérifications périodiques obligatoires
- Méthodologie d'intervention
- Informations de contact

## 🌐 Déploiement

Pour déployer le site en production :

1. **Build**
   ```bash
   npm run build
   ```

2. **Déployez le dossier `dist/`** sur votre serveur web

## 📧 Contact

- Email Audit: inspection.control.audit@gmail.com
- Email Contact: contact@inspection-control.ma
- Localisation: Maroc

## 📄 Licence

© 2025 Inspection Control Audit. Tous droits réservés.

---

**Créé avec ❤️ par Manus AI**
