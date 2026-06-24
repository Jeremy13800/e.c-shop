<div align="center">

# ✨ E.C Shop

**A modern, elegant e-commerce storefront with feminine design aesthetics**

[Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
[TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
[Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwind-css)
[Stripe](https://img.shields.io/badge/Stripe-Payments-635bff?style=for-the-badge&logo=stripe)

</div>

## 🌟 Features

- **Elegant Design**: Feminine color palette with rose and gold tones
- **Shopping Cart**: Local cart management with Zustand + localStorage persistence
- **Stripe Checkout**: Secure payment integration
- **Responsive UI**: Mobile-first design with Tailwind CSS
- **Modern Typography**: Playfair Display for headings, Inter for body text
- **Smooth Animations**: Subtle hover effects and transitions
- **Product Management**: Easy-to-extend product data structure

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Payment**: Stripe Checkout
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display, Inter)

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/Jeremy13800/e.c-shop.git
cd e.c-shop
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

```bash
cp .env.example .env.local
```

4. **Add your Stripe keys** to `.env.local`:

```env
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## 🏃 Running the Project

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/checkout/      # Stripe Checkout API route
│   ├── cart/              # Shopping cart page
│   ├── success/           # Payment success page
│   ├── cancel/            # Payment cancel page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Site header
│   ├── Footer.tsx         # Site footer
│   ├── ProductCard.tsx    # Product display card
│   └── CartButton.tsx     # Cart icon with counter
├── store/                 # Zustand state management
│   └── cart.ts            # Cart store
├── data/                  # Static data
│   └── products.ts        # Product catalog
└── types/                 # TypeScript types
    └── product.ts         # Product interfaces
```

## 🎨 Customization

### Adding Products

Edit `src/data/products.ts` to add or modify products:

```typescript
export const products: Product[] = [
  {
    id: "unique-id",
    name: "Product Name",
    description: "Product description",
    price: 29,
    image: "/images/product.jpg",
    category: "category",
  },
  // Add more products...
];
```

### Styling

- **Colors**: Modify `tailwind.config.ts` to customize the color palette
- **Fonts**: Update `src/app/layout.tsx` to change fonts
- **Components**: Edit components in `src/components/`

## 🔧 Environment Variables

| Variable                             | Description                 | Required |
| ------------------------------------ | --------------------------- | -------- |
| `STRIPE_SECRET_KEY`                  | Your Stripe secret key      | Yes      |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Your Stripe publishable key | Yes      |
| `NEXT_PUBLIC_BASE_URL`               | Your app's base URL         | Yes      |

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or support, please contact at contact@eloriane.com

---

<div align="center">
Made with ❤️ for elegant shopping experiences
</div>
