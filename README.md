# OroVault — Premium Timepieces E-Commerce

A luxury wristwatch e-commerce frontend website built with HTML, Vanilla JavaScript, and Tailwind CSS.

![OroVault](https://img.shields.io/badge/OroVault-Premium%20Timepieces-C9A84C?style=for-the-badge)

## Overview

OroVault is a full-featured e-commerce website for premium wristwatches, featuring 52 products across 5 categories and 10 luxury brands. The project is built with a **no-build-step** approach — simply open any HTML file directly in your browser.

## Features

- 🕐 **52 Premium Products** — Luxury, Sport, Casual, Smart, and Dress watches
- 🎨 **Dark Luxury Theme** — Elegant gold accents on dark backgrounds
- 🔍 **Advanced Filtering** — Filter by category, brand, price range, and rating
- 🛒 **Shopping Cart** — Persistent cart using localStorage
- ❤️ **Wishlist** — Save favorite watches for later
- 📱 **Responsive Design** — Mobile-first approach using Tailwind CSS
- ✨ **Smooth Animations** — Fade-in, slide-in, and scroll reveal effects
- 🔔 **Toast Notifications** — Real-time user feedback
- ✅ **Form Validation** — Client-side validation for checkout and contact forms

## Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 |
| Styling | Tailwind CSS (Play CDN) + Custom CSS |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | Playfair Display + Inter (Google Fonts) |
| State | localStorage |

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- VS Code (optional, for development with Live Server)

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Open `index.html` in your browser

**OR** (recommended for development)

1. Open the project in VS Code
2. Install the "Live Server" extension
3. Right-click `index.html` and select "Open with Live Server"

## Project Structure

```
OroVault/
├── index.html          # Home page
├── shop.html           # Product listing with filters
├── product.html        # Single product detail
├── cart.html           # Shopping cart
├── checkout.html       # Checkout form
├── auth.html           # Login / Register
├── wishlist.html       # Saved items
├── about.html          # Brand story & team
├── contact.html        # Contact form & info
├── PLAN.md             # Project plan
├── README.md           # This file
├── css/
│   └── style.css       # Custom animations, utilities, overrides
└── js/
    ├── data.js         # Product catalog (52 products)
    ├── app.js          # Shared components (navbar, footer, toast)
    ├── cart.js         # Cart state management
    ├── wishlist.js     # Wishlist state management
    ├── shop.js         # Filter, sort, search logic
    ├── product.js      # Product detail page logic
    ├── checkout.js     # Form validation
    └── auth.js         # Login/register functionality
```

## Pages

| Page | Description |
|------|-------------|
| [`index.html`](index.html) | Home page with hero, categories, featured products |
| [`shop.html`](shop.html) | Product listing with filtering and sorting |
| [`product.html`](product.html) | Product details with gallery and specifications |
| [`cart.html`](cart.html) | Shopping cart with quantity management |
| [`checkout.html`](checkout.html) | Multi-step checkout with validation |
| [`auth.html`](auth.html) | Login and registration forms |
| [`wishlist.html`](wishlist.html) | Saved items collection |
| [`about.html`](about.html) | Brand story and team |
| [`contact.html`](contact.html) | Contact form and store information |

## Product Catalog

### Categories

| Category | Products | Price Range |
|----------|----------|-------------|
| Luxury | 10 | $2,800 – $12,500 |
| Sport | 10 | $350 – $4,200 |
| Casual | 10 | $195 – $850 |
| Smart | 10 | $249 – $1,299 |
| Dress | 12 | $420 – $8,900 |

### Brands

Aurevine, Maison Élaire, Castellane, Vostel, Horizone, Korver, Nexwatch, Timecraft, Elston, Zentrek

## Design System

- **Background:** `#0D0D0D` (dark)
- **Text:** `#F5F5F5` (light)
- **Accent:** `#C9A84C` (gold)
- **Cards:** `#1A1A1A` with `#2A2A2A` borders
- **Headings:** Playfair Display (serif)
- **Body:** Inter (sans-serif)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for educational purposes.

---

Built with ❤️ for luxury timepieces enthusiasts
