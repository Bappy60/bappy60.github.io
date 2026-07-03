# Kawsar Ahemmed Bappy — Portfolio

Personal portfolio site. Vite + Tailwind CSS v4, vanilla JS (no framework needed for
a single-page site). Content lives in one file (`src/content.js`) so it can be edited
without touching markup or styling.

## Project structure

```
.
├── index.html              # page structure (semantic HTML, no hardcoded copy)
├── src/
│   ├── content.js           # ALL editable text: experience, projects, research, etc.
│   ├── main.js               # renders content.js into the DOM + theme/menu/scroll logic
│   └── style.css             # Tailwind v4 theme tokens (colors, fonts, spacing)
├── public/
│   ├── resume.pdf            # served at /resume.pdf
│   └── favicon.svg
├── .github/workflows/deploy.yml   # auto-deploys to GitHub Pages on push to main
├── vite.config.js
└── package.json
```

## Local development

Requires Node.js 18+.

```bash
npm install
npm run dev       # starts a local dev server, prints a localhost URL
```

Edit `src/content.js` to change any text on the site (job history, projects,
research, blog posts, skills, links). Save, and the dev server hot-reloads.

To check the production build locally before publishing:

```bash
npm run build      # outputs to dist/
npm run preview    # serves dist/ locally
```

## One-time setup: before you publish

1. **Real links.** Open `src/content.js` and replace the `TODO` placeholders in
   the `profile.links` object with your actual GitHub and LinkedIn URLs.
2. **Resume file.** `public/resume.pdf` is already your current resume. Replace
   that file (keep the same filename, `resume.pdf`) whenever you update it.
3. **Research/Journal.** The `journal` array in `content.js` currently holds
   placeholder posts marked `draft: true`. Write the real post, then just set
   `draft: false` (or delete the `draft` line) and update `date`.

## Publish to GitHub Pages (username.github.io)

Because you chose the root-domain option, the repository name **must** be
`<your-github-username>.github.io` — GitHub only serves a user site from a repo
with exactly that name.

### 1. Create the repository

On GitHub, create a new **public** repository named exactly:

```
<your-username>.github.io
```

Do **not** initialize it with a README, .gitignore, or license — this project
already has those.

### 2. Push this code

From this project's folder:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
git push -u origin main
```

### 3. Turn on GitHub Pages (via GitHub Actions)

1. On GitHub, go to your repo → **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions** (not
   "Deploy from a branch").
3. That's it — the workflow in `.github/workflows/deploy.yml` runs on every
   push to `main`: it installs dependencies, runs `npm run build`, and
   publishes the `dist/` folder to Pages automatically.

Check the **Actions** tab on GitHub to watch the deploy run. Once it finishes
(usually under a minute), your site is live at:

```
https://<your-username>.github.io/
```

### 4. Future updates

Any time you edit `src/content.js` (or anything else) and push to `main`,
the site rebuilds and redeploys automatically — no manual steps needed:

```bash
git add .
git commit -m "Update experience section"
git push
```

## Notes on the approach

- **No CDN Tailwind script tag.** The original design mockup used
  `<script src="cdn.tailwindcss.com">`, which recompiles CSS in the browser on
  every load — fine for a quick prototype, not for a real, fast, production
  site. This project uses Tailwind's Vite plugin instead, so CSS is compiled
  once at build time into a small static file.
- **Data/markup separation.** All page copy lives in `src/content.js` and is
  rendered by `src/main.js`. This means editing your experience, projects, or
  writing a new post never requires touching HTML or CSS.
- **Accessibility.** Semantic landmarks (`nav`, `main`, `footer`), a skip
  link, visible focus states, and `prefers-reduced-motion` support are built
  in by default.
