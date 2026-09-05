# Underground Kingdom — public site

Official marketing and studio-diary site for **Underground Kingdom**, a dwarven colony sim by Colin Preuschoff. Developed **100% with Grok Build** (Colin is Architect; Grok Build writes all production C#). PC. Unity 6. In development / pre-alpha. Not released.

This repository is the public website only. It is not the game.

Live (GitHub Pages, `/docs` on the default branch):

https://colinpreuschoff47-a11y.github.io/underground-kingdom-web/

## Local preview

From `docs/`:

```bash
python3 -m http.server 8080
```

Open http://localhost:8080/

Asset URLs are relative (`css/styles.css`, `js/main.js`, `assets/logo.svg`, `index.html`) so the site works at the GitHub Pages base path `/underground-kingdom-web/` and as a local folder. Do not prefix assets with `/` or `/underground-kingdom-web/`.

## Sitemap

- `docs/index.html` — Home. Cinematic pitch, Grok Build band, world / hall / threats teasers.
- `docs/world.html` — The cavern: firelight against cave dusk.
- `docs/hall.html` — Colony, labor, buildings.
- `docs/threats.html` — Giant Rat, Goblin, Ork, Cave Troll.
- `docs/develop.html` — Built 100% with Grok Build. Roles, stack, human-gated process.
- `docs/workflow.html` — Prompt → brief → Gate B plan → implement → accept → git push.
- `docs/briefs.html` — Example Grok Build briefs (excerpts).
- `docs/plans.html` — Example Gate B coding plans (excerpts).
- `docs/code.html` — How features are coded (trimmed real C#).
- `docs/progress.html` — Timeline from commits and roadmaps.
- `docs/404.html` — Unexplored-dark fallback with sitemap links.

## Identity

Void `#080A0E`, cave `#163040` / `#14181E`, gold `#C9A03A` / `#E6C05C`, teal `#2C6670`, fire `#E07020`, glow `#8AD0E2`. Cinzel + Source Serif 4.


## Brand assets

Official logos (Colin, for the X account / site):

- `docs/assets/logo-wordmark.png` — title treatment
- `docs/assets/logo-crest.jpg` — circular hammer & pickaxe crest
- `docs/assets/og-card.jpg` — 1200×630 social share card
- `docs/assets/favicon.png` / `apple-touch-icon.png` — icons
