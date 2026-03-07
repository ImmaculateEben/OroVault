# OroVault — E-Commerce Website Plan

## Overview

A luxury wristwatch e-commerce frontend website for **OroVault**, featuring 52 premium products across 5 categories and 10 brands. Built with HTML, Vanilla JavaScript, and Tailwind CSS (Play CDN). No build step required — open any HTML file directly in a browser.

---

## Tech Stack

| Layer     | Choice                          |
|-----------|--------------------------------|
| Markup    | HTML5                          |
| Styling   | Tailwind CSS (Play CDN) + Custom CSS |
| Logic     | Vanilla JavaScript (ES6+)      |
| Fonts     | Playfair Display + Inter (Google Fonts) |
| State     | localStorage (cart & wishlist)  |

---

## Design System

- **Theme:** Dark luxury — `#0D0D0D` background, `#F5F5F5` text
- **Accent:** Gold — `#C9A84C` (light: `#E0C97F`, dark: `#A68A3E`)
- **Cards/Surfaces:** `#1A1A1A` with `#2A2A2A` borders
- **Headings:** Playfair Display (serif)
- **Body:** Inter (sans-serif)
- **Animations:** fadeInUp, slideInRight, shimmer, pulse, scroll reveal

---

## File Structure

```
Watch/
├── index.html          # Home page
├── shop.html           # Product listing with filters
├── product.html        # Single product detail
├── cart.html            # Shopping cart
├── checkout.html       # Checkout form
├── auth.html           # Login / Register
├── wishlist.html       # Saved items
├── about.html          # Brand story & team
├── contact.html        # Contact form & info
├── PLAN.md             # This file
├── css/
│   └── style.css       # Custom animations, utilities, overrides
└── js/
    ├── data.js         # 52 products + helper functions
    ├── app.js          # Shared: navbar, footer, toast, cards
    ├── cart.js         # Cart state (localStorage)
    ├── wishlist.js     # Wishlist state (localStorage)
    ├── shop.js         # Filter, sort, search logic
    ├── product.js      # Product detail page logic
    ├── checkout.js     # Form validation
    └── auth.js         # Login/register tab toggle
```

---

## Pages

### 1. Home (`index.html`)
- Hero banner with CTA
- Category grid (5 categories)
- Featured products (8 items)
- Brand promise / value propositions
- New arrivals (4 items)
- Testimonials
- Newsletter CTA

### 2. Shop (`shop.html`)
- Sidebar filters: category, brand, price range, rating
- Sort: featured, newest, price (low/high), rating
- URL param support (`?category=Luxury`)
- Mobile-friendly filter toggle

### 3. Product Detail (`product.html`)
- Image gallery with thumbnails
- Quantity selector, add to cart, wishlist toggle
- Tabs: Description / Specifications
- Related products (same category)

### 4. Cart (`cart.html`)
- Item list with quantity steppers
- Order summary (subtotal, shipping, total)
- Free shipping over $500
- Empty cart state

### 5. Checkout (`checkout.html`)
- Contact info, shipping address, payment fields
- Real-time client-side validation
- Order summary sidebar

### 6. Auth (`auth.html`)
- Tabbed login / register forms
- Password visibility toggle
- Demo form submissions

### 7. Wishlist (`wishlist.html`)
- Grid of saved products
- Move to cart / remove actions
- Empty state CTA

### 8. About (`about.html`)
- Brand story & founding narrative
- Company timeline (2010–2026)
- Core values (Authenticity, Passion, Excellence)
- Team profiles

### 9. Contact (`contact.html`)
- Contact form with subject dropdown
- Store info (address, email, phone, hours)
- Map placeholder
- FAQ accordion

---

## Product Catalog

**52 products** across 5 categories:

| Category | Count | Price Range         |
|----------|-------|---------------------|
| Luxury   | 10    | $2,800 – $12,500   |
| Sport    | 10    | $350 – $4,200      |
| Casual   | 10    | $195 – $850        |
| Smart    | 10    | $249 – $1,299      |
| Dress    | 12    | $420 – $8,900      |

**10 Brands:** Aurevine, Maison Élaire, Castellane, Vostel, Horizone, Korver, Nexwatch, Timecraft, Elston, Zentrek

Each product includes: id, name, brand, category, price, originalPrice, rating, reviews, images, description, specs, inStock, isNew, isFeatured.

---

## State Management

| Key                  | Storage        | Data Format            |
|----------------------|---------------|------------------------|
| `watchstore_cart`    | localStorage  | `[{ id, qty }]`       |
| `watchstore_wishlist`| localStorage  | `[id, id, ...]`       |

---

## Key Features

- **No build step** — works by opening HTML files directly
- **Responsive** — mobile-first with Tailwind breakpoints
- **Persistent state** — cart & wishlist survive page reloads
- **Search** — navbar search with live product results
- **Scroll reveal** — IntersectionObserver-based animations
- **Toast notifications** — success, error, info feedback
- **Client-side validation** — checkout & contact forms
- **Product filtering** — multi-criteria with URL param support

---

## How to Run

1. Open `index.html` in any modern browser, **or**
2. Use VS Code Live Server extension for hot reload
3. No installation or build required
