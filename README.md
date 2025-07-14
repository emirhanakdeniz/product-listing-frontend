# Product Listing App

A personal project: a modern, responsive product listing web app built with **React**, **Vite**, and **Tailwind CSS**. Products are displayed in a carousel with color selection, ratings, and custom fonts.

https://product-listing-ruby.vercel.app/

---

## ✨ Features

- **Product Carousel**: Browse products in a responsive Swiper carousel.
- **Color Picker**: View each product in yellow, white, or rose gold.
- **Star Ratings**: Visual popularity score for each product.
- **Custom Fonts**: Uses Avenir and Montserrat for a premium look.
- **API-Driven**: Product data is served from a local JSON file via a simple API (Vercel serverless functions).
- **Mobile Friendly**: Fully responsive layout.

---

## 🛠️ Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/) (for fast dev/build)
- [Tailwind CSS](https://tailwindcss.com/) (utility-first styling)
- [Swiper](https://swiperjs.com/) (carousel)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vercel Serverless Functions](https://vercel.com/docs/functions) (for API)

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/your-username/product-listing-frontend.git
cd product-listing-frontend
npm install
```

### 2. Run Locally

```bash
npm run dev
```

- App runs at [http://localhost:5173](http://localhost:5173) (default Vite port).
- Product API is available at `/api/products` (served from `products.json`).

### 3. Build for Production

```bash
npm run build
```

---

## 🗂️ Project Structure

```
├── api/                # Serverless API endpoints (Vercel style)
│   └── products.js     # Serves product data from products.json
├── components/         # React components (ProductCard, etc.)
├── fonts/              # Custom font files (Avenir, Montserrat)
├── public/             # Static assets
├── src/                # Main React app source
│   ├── App.jsx         # Main app logic (fetch, carousel)
│   ├── index.css       # Tailwind + custom styles
│   └── ...
├── products.json       # Product data (images, scores, etc.)
├── tailwind.config.js  # Tailwind config (custom fonts/colors)
├── vite.config.js      # Vite config
└── versel.json         # Vercel deployment config
```

---

## 📦 Data Model

Each product in `products.json` looks like:

```json
{
  "name": "Engagement Ring 1",
  "popularityScore": 0.85,
  "weight": 2.1,
  "images": {
    "yellow": "...",
    "rose": "...",
    "white": "..."
  }
}
```

---

## 🌐 Deployment

- **Vercel**: Project is ready for [Vercel](https://vercel.com/) (see `versel.json`).
- API endpoints in `api/` are auto-deployed as serverless functions.
- Static frontend is built from `dist/`.

---

## 🙋‍♂️ About

This is a personal project to practice modern React, Vite, and Tailwind workflows, and to experiment with product UI/UX. Not intended for production use.

Feel free to fork, learn, or reach out if you have questions!
