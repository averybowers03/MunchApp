# Munch
Recipe Search Application

Munch is a full-stack recipe application that allows for users to search for recipes based off of what they already have in their kitchen. This is a project I've been developing out of both a passion for cooking, and my SWE portfolio. Munch is a demonstration of my skills in React, Node.js, and PostgreSQL.

## Features

Ingredient-based search - Add your ingredients to the 'Pantry' and find out what recipes you can cook matched against your ingredients

Smart auto-complete - ingredient input powered by the Spoonacular API with debounced search

Recipe discovery — browse recipes with match indicators showing which ingredients you have and what's missing

Recipe detail pages — full recipe info including instructions, nutrition breakdown, prep/cook times, and source attribution

Persistent pantry — ingredient list saved to localStorage so your pantry survives page refreshes

Bookmarks (WIP) — save recipes to revisit later

User profiles (WIP) — personalised account pages with settings and preferences

## Tech Stack
 
### Frontend
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) — component-based UI with static typing
- [Vite](https://vitejs.dev/) — fast dev server and build tool
- [React Router v7](https://reactrouter.com/) — client-side routing with nested routes and dynamic segments
- [React Context API](https://react.dev/learn/passing-data-deeply-with-context) — shared state for pantry and recipe data
- Tailwind CSS / custom CSS variables — design system with a Sage green palette
### Backend
- [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/) + TypeScript — REST API server
- [Spoonacular API](https://spoonacular.com/food-api) — recipe and ingredient data
- [dotenv](https://github.com/motdotla/dotenv) — environment variable management
### Planned
- PostgreSQL + Prisma — persistent user data, saved recipes
- JWT authentication — user accounts and session management
---
 
## Getting Started
 
### Prerequisites
- Node.js v18+
- A [Spoonacular API key](https://spoonacular.com/food-api) (free tier available)
### Installation
 
**1. Clone the repository**
```bash
git clone https://github.com/averybowers03/MunchApp.git
cd MunchApp
```
 
**2. Set up the backend**
```bash
cd munch-backend
npm install
```
 
Create a `.env` file in the backend root:
```
SPOONACULAR_API_KEY=your_key_here
```
 
Start the backend server:
```bash
npm run dev
```
 
**3. Set up the frontend**
```bash
cd ../munch-frontend
npm install
npm run dev
```
 
**4. Open the app**
 
Visit `http://localhost:5173` in your browser.
 
---
 
## Project Structure
 
```
MunchApp/
├── munch-frontend/        # React + Vite frontend
│   ├── src/
│   │   ├── components/       # Reusable UI components (Navbar, IngredientSearch)
│   │   ├── context/          # PantryContext, RecipeContext
│   │   ├── pages/            # Dashboard, PantryPage, RecipePage, UserPage...
│   │   └── global.css        # CSS custom properties / design tokens
│   └── vite.config.ts        # Vite config with API proxy
│
└── munch-backend/        # Node.js + Express backend
    └── src/
        └── index.ts          # Express routes
```
 
---
 
## API Routes
 
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/ingredients?query=` | Ingredient autocomplete |
| GET | `/api/recipes/search?query=&ingList=` | Search recipes by query and ingredients |
| GET | `/api/recipes/randomSearch?ingList=` | Default recipe feed based on pantry |
| GET | `/api/recipes/searchById?id=` | Full recipe detail by ID |
 
---
 
## Key Design Decisions
 
- **API proxy via Vite** — all `/api` requests are proxied to the Express backend, keeping the Spoonacular API key off the client
- **Context over prop drilling** — `PantryContext` and `RecipeContext` share state across the component tree without coupling pages together
- **Debounced ingredient autocomplete** — limits API calls to once per 500ms of idle typing, reducing quota usage
- **Lazy localStorage initialisation** — pantry state is seeded from localStorage on mount using a `useState` initialiser function
---
 
## Screenshots
 
> Coming soon
 
---
 
## License
 
This project is licensed under the Apache License 2.0 — see the [LICENSE](./LICENSE) file for details.


