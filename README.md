# Kawsar Ahemmed Bappy — Portfolio

Minimal portfolio built with Vite, Tailwind CSS v4, and vanilla JavaScript.

## Project structure

- `index.html` — page structure and navigation
- `src/content.js` — editable copy for experience, projects, research, blog, skills, and links
- `src/main.js` — renders content and handles theme/menu logic
- `src/style.css` — theme tokens and site styling
- `public/resume.pdf` — resume file served at `/resume.pdf`

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
