# Eloriane Shop

Boutique e-commerce simple pour Eloriane avec Next.js et Stripe.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Stripe Checkout
- Zustand (panier local)
- Lucide React (icônes)

## Installation

1. Installer les dépendances :
```bash
npm install
```

2. Configurer les variables d'environnement :
```bash
cp .env.example .env.local
```

3. Ajouter vos clés Stripe dans `.env.local` :
```
STRIPE_SECRET_KEY=sk_test_votre_clé_secrète
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_votre_clé_publique
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## Lancer le projet

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Fonctionnalités

- Liste de produits
- Panier local (persisté avec localStorage)
- Stripe Checkout pour le paiement
- Pages success/cancel après paiement

## Structure

- `src/app/` - Pages Next.js
- `src/components/` - Composants réutilisables
- `src/store/` - Store Zustand pour le panier
- `src/data/` - Données des produits
- `src/types/` - Types TypeScript
