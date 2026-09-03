# Underground Kingdom — public site

Official marketing site for **Underground Kingdom**, a dwarven colony sim by Colin Preuschoff. PC. Unity 6. In development / pre-alpha. Not released.

This repository is the public website only.

Live (GitHub Pages, `/docs` on the default branch):

https://colinpreuschoff47-a11y.github.io/underground-kingdom-web/

## Local preview

From `docs/`:

```bash
python3 -m http.server 8080
```

Open http://localhost:8080/

Asset URLs are relative (`css/styles.css`, `assets/logo.svg`) so the site works at the GitHub Pages base path `/underground-kingdom-web/` and as a local folder.

## Pages

- `docs/index.html` — single scrolling site
- `docs/404.html` — unexplored-dark fallback
