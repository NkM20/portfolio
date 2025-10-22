# Fernando Marques — Portfolio (Next.js + TypeScript + Tailwind)

Strict dark-mode portfolio with a CLI/IDE aesthetic and a crimson motif. Built with Next.js 14, TypeScript, and Tailwind CSS. Data for projects is pulled from GitHub (pinned via GraphQL when a token is available, with REST fallbacks).

Live pages
- /home — Hero, About, Skills, Projects quick view, Experience, Education, Contact
- /about — About, Education timeline, Experience timeline, Highlights
- /projects — Pinned | Recent | All tabs, Language filter, code-preview ProjectCards
- /tools — Angled “tool wall” plus categorized grid

## Features
- Dark, high-contrast theme with subtle particles and micro-interactions
- Card-based grid with fixed heights and internal scroll where needed (reference-inspired density)
- Shared top navigation with active state highlighting
- Projects page tabs: Pinned, Recent, All (graceful fallback if no token)
- Language filter and stars-first sorting
- Tool Wall with angled badges (straighten on hover) and a categorized stack
- Tokens and global styling in `styles/globals.css` (crimson palette, nav blur, custom scrollbars)

## Getting started

Prerequisites
- Node.js 18+ (or 20+ recommended)
- npm 9+

Install and run (PowerShell on Windows):

```powershell
cd C:\Users\Nando\portfolio\next-portfolio
npm install

# Start dev
npm run dev

# Production build and run
npm run build
npm run start
```

Note: In some environments, the dev server logs “Ready” and then the terminal returns with exit code 1; the build still compiles and runs locally. Use the production build if you hit this.

## Environment variables

The GitHub API is used to fetch repositories at build time. A token increases limits and enables pinned repos via GraphQL.

- GITHUB_USERNAME (optional, defaults to `NkM20`)
- GITHUB_TOKEN (optional, recommended for pinned repos)

Set for the current PowerShell session:

```powershell
$env:GITHUB_USERNAME = 'NkM20'
$env:GITHUB_TOKEN = 'ghp_xxx'  # optional
npm run build
```

## Project structure

```
next-portfolio/
├─ components/
│  ├─ Nav.tsx           # Shared top navigation with active highlighting
│  ├─ Logo.tsx          # Ghoul-eye logo with brush reveal + SVG fallback
│  ├─ ProjectCard.tsx   # Code-preview style card (titlebar, language dots)
│  ├─ Timeline.tsx      # Simple timeline component
│  ├─ Particles.tsx     # Lightweight canvas particles
│  └─ Icons.tsx         # Inline SVG icons
├─ lib/
│  └─ github.ts         # fetchPinnedOrRecent (GraphQL pinned + REST fallback)
├─ pages/
│  ├─ index.tsx         # Home (also exported as /home via pages/home.tsx)
│  ├─ home.tsx          # Exports from index
│  ├─ about.tsx         # About + Education + Experience + Highlights
│  ├─ projects.tsx      # Tabs: Pinned/Recent/All + language filter
│  └─ tools.tsx         # Tool Wall + categorized grid
├─ styles/
│  └─ globals.css       # Theme tokens, animations, card styles
├─ public/
│  └─ ghoul-eye.png     # Logo image used in header
├─ tailwind.config.js
├─ postcss.config.js
├─ package.json
└─ tsconfig.json
```

## Customization
- Replace About text in `pages/index.tsx` and `pages/about.tsx`.
- Update skills/tools in `pages/index.tsx` and `pages/tools.tsx`.
- Swap the logo at `public/ghoul-eye.png` and adjust size in `components/Logo.tsx` if desired.
- Tune colors, radii, shadows, and animations in `styles/globals.css`.

## Deployment

Vercel is recommended for Next.js:
1) Connect your GitHub repository in Vercel
2) Add environment variables (optional): `GITHUB_TOKEN`, `GITHUB_USERNAME`
3) Deploy — Projects page uses Incremental Static Regeneration (ISR) to refresh periodically

GitHub Pages is also possible, but requires a static export setup that is beyond this repo’s default configuration.

---

If you want further refinements (animations, accessibility polish, more data sources, CI/CD), open an issue or PR, or request a follow-up task.
