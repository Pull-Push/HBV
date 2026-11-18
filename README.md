# ☕🎲 Hero Brew

**Fuel for the long campaign.** Hero Brew is a full-stack e-commerce app for a fictional Dungeons & Dragons–themed coffee company. Every blend is inspired by a D&D character class, and every pod box is sized after a monster, from the humble Sprite to the mighty Kraken.

Built for the late-night tabletop crowd who need extra caffeine for marathon adventuring sessions, with a look that blends medieval fantasy and a dark, moody tavern.

🔗 **Live demo:** [hero-brew.vercel.app](https://hbv-teal.vercel.app/)
🛠️ **API:** [hero-brew-backend.onrender.com/api/products](https://hero-brew-backend.onrender.com/api/products)

<!-- Add a screenshot: ![Hero Brew home page](./docs/screenshot.png) -->

---

## Features

- **13 class-inspired blends** covering all 12 D&D classes plus *False Awakening*, a decaf Mimic roast (because nothing is what it seems)
- **Monster-sized pod boxes** with bulk pricing that drops the per-pod cost as you scale up
- **Product detail pages** with box size and grind selection
- **Shopping cart** with add, update quantity, and remove, managed globally through the React Context API
- **Client-side routing** with React Router
- **Responsive design** built with CSS Grid, Flexbox, custom properties, media queries, and `clamp()` for fluid typography
- **RESTful API** serving product data and images from PostgreSQL

### The blends (a sample)

| Class | Blend | Roast |
|---|---|---|
| Barbarian | Rage Roast | Dark |
| Bard | Melody Blend | Medium |
| Sorcerer | Arcane Surge | Medium-Dark |
| Warlock | Pact Brew | Dark |
| Wizard | Elder Sigil Roast | Light |
| Mimic | False Awakening (decaf) | — |

### Pod box sizes

| Box | Pods | Price | Per pod |
|---|---|---|---|
| Sprite | 4 | $4.99 | ~$1.25 |
| Goblin | 8 | $8.99 | ~$1.12 |
| Orc | 12 | $12.99 | ~$1.08 |
| Ogre | 24 | $23.99 | ~$1.00 |
| Giant | 48 | $44.99 | ~$0.94 |
| Kraken | 96 | $79.99 | ~$0.83 |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, Vite, React Router, Context API |
| Styling | CSS3 (Grid, Flexbox, custom properties, `clamp()`) |
| Backend | Node.js, Express.js |
| Database | PostgreSQL (`pg`) |
| Hosting | Vercel (frontend), Render (API + database) |

### Architecture

```
┌──────────────────┐      HTTPS / JSON      ┌──────────────────┐      SQL      ┌──────────────┐
│  React + Vite    │ ─────────────────────▶ │  Express API     │ ────────────▶ │  PostgreSQL  │
│  (Vercel CDN)    │ ◀───────────────────── │  (Render)        │ ◀──────────── │  (Render)    │
└──────────────────┘   products + images    └──────────────────┘               └──────────────┘
```

The static frontend is served from Vercel's CDN for speed, while the API and database run together on Render.

---

## Project Structure

```
hero-brew/
├── frontend/              # React + Vite app
│   ├── src/
│   │   ├── components/    # Navbar and shared UI
│   │   ├── pages/         # Home, Shop, Product Detail, Cart
│   │   ├── context/       # Cart context (global state)
│   │   └── App.jsx
│   └── package.json
└── backend/               # Express API
    ├── routes/
    │   └── products.js
    ├── public/images/     # Product and box images
    ├── db.js              # PostgreSQL connection pool
    ├── setup-db.js        # Creates the schema
    ├── seed.js            # Seeds blends, box sizes, and grind types
    ├── server.js
    └── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 14+

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/hero-brew.git
cd hero-brew
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create `backend/.env`:

```env
PORT=5050
DATABASE_URL=postgresql://USERNAME:PASSWORD@localhost:5432/hero_brew
FRONTEND_URL=http://localhost:5173
```

> **macOS note:** Port 5000 is taken by AirPlay Receiver on macOS Monterey and later, which is why the API runs on 5050.

Create the database, build the schema, and seed it:

```bash
createdb hero_brew
node setup-db.js
node seed.js
npm run dev
```

Check that it's running at `http://localhost:5050/api`.

### 3. Set up the frontend

In a new terminal:

```bash
cd frontend
npm install
```

Create `frontend/.env`:

```env
VITE_API_URL=http://localhost:5050
```

Start the dev server:

```bash
npm run dev
```

Open `http://localhost:5173`.

---

## API Reference

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api` | Health check |
| `GET` | `/api/products` | All coffee blends |
| `GET` | `/api/products/:id` | A single blend |
| `GET` | `/images/:file` | Static product and box images |

---

## Deployment

**Backend (Render)**
1. Create a PostgreSQL instance and a Web Service pointing at `backend/`.
2. Set `DATABASE_URL` (from the Render database) and `FRONTEND_URL` (your Vercel URL).
3. In the Render shell, run `node setup-db.js` and `node seed.js`.

**Frontend (Vercel)**
1. Import the repo with **Root Directory** `frontend`, framework preset **Vite**, build command `npm run build`, output `dist`.
2. Set `VITE_API_URL` to your Render backend URL.

---

## Lessons Learned

- **CORS in production:** The API restricts origins with `FRONTEND_URL`, so the Render service needs the exact Vercel URL or requests are blocked.
- **Case sensitivity:** Imports that worked on macOS (`NavBar` vs `Navbar.jsx`) broke on Vercel's Linux build servers. File names and imports have to match exactly.
- **Relative image paths:** Storing `/images/...` in the database instead of `http://localhost:5050/...` meant the same seed data works locally and in production.

---

## Roadmap

- [ ] User accounts and authentication
- [ ] Admin panel for managing products
- [ ] Order history saved to the database
- [ ] Stripe checkout
- [ ] Bagged coffee sizes
- [ ] Custom domain

---

## Author

**Jeff** — Software Engineer
[LinkedIn](https://www.linkedin.com/in/jeffrey-sokol/) · [GitHub](https://github.com/Pull-Push)

---

*Hero Brew is a fictional company created as a portfolio project. Dungeons & Dragons is a trademark of Wizards of the Coast; this project is not affiliated with or endorsed by them.*
