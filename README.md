# Zakie Portfolio

Personal portfolio website of **Muhammad Zakie**, a software engineer. The site is fully static and prerendered at build time: every page is shipped as real HTML, then hydrated on the client. All content lives in JSON files under `src/data`, so it can be updated without touching the components.

## Tech Stack

- React 18 + Vite 7
- Tailwind CSS 3 (light/dark mode)
- react-icons
- Plain JSON data layer (static imports)
- Build-time prerendering with `react-dom/server`
- PWA via `vite-plugin-pwa` (Workbox)
- Vitest + Testing Library

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command              | Description                                                       |
| -------------------- | ----------------------------------------------------------------- |
| `npm run dev`        | Start the development server                                      |
| `npm run build`      | Build the client, prerender HTML, and generate the service worker |
| `npm run preview`    | Preview the production build locally                              |
| `npm test`           | Run the test suite once                                           |
| `npm run test:watch` | Run tests in watch mode                                           |
| `npm run lint`       | Lint the project with ESLint                                      |
| `npm run format`     | Format the project with Prettier                                  |
| `npm run og`         | Regenerate `public/og-image.png` (1200x630)                       |
| `npm run icons`      | Regenerate SVG/PNG app icons from `public/icon.svg`               |

> `npm install` may require `--legacy-peer-deps` on older npm versions due to the Vitest peer dependency tree.

## Features

- **Prerendered static HTML** for SEO and fast first paint, hydrated with `hydrateRoot`.
- **Bilingual content** (Indonesian default, English optional) with a navbar toggle persisted in `localStorage`.
- **Dark mode** with a no-flash inline script, `prefers-color-scheme` fallback, and persisted preference.
- **Reveal-on-scroll** animation that respects `prefers-reduced-motion` and degrades gracefully without JavaScript.
- **Accessible UI**: skip-to-content link, keyboard-navigable tabs, focus-trapped modals, ARIA labels.
- **Security headers** for Vercel and Netlify/Cloudflare (`vercel.json`, `public/_headers`).
- **PWA**: installable with SVG/PNG and maskable icons, app-shell precache, and runtime image caching.
- **Performance**: preloaded hero image, `fetchpriority`, and `content-visibility` for below-the-fold grids.
- **Tests** covering helpers, contexts, navigation, hero, about tabs, portfolio interactions, and reveal.

## Project Structure

```
├── index.html                 # HTML shell, SEO meta tags, theme script, JSON-LD
├── eslint.config.mjs          # ESLint flat config
├── vercel.json                # Security and cache headers for Vercel
├── scripts/
│   ├── prerender.mjs          # Renders the app into dist/index.html
│   ├── generate-og.mjs        # Generates the Open Graph banner
│   └── generate-icons.mjs     # Generates SVG/PNG app icons
├── public/
│   ├── assets/                # Images (WebP)
│   ├── icon.svg               # Source icon
│   ├── icon-192.png           # PWA icon
│   ├── icon-512.png           # PWA icon
│   ├── maskable-512.png       # PWA maskable icon
│   ├── og-image.png           # Social share banner
│   ├── _headers               # Headers for Netlify/Cloudflare
│   └── ...
└── src/
    ├── components/            # Navbar, Home, About, Portfolio, Footer, Modal, Reveal
    ├── context/               # LanguageContext, ProfileContext
    ├── data/                  # Editable site content
    │   ├── profile.json       # Profile, bio, personal data, education, certificates
    │   ├── contacts.json      # Contact info and social links
    │   ├── experiences.json   # Work experience, projects, personal projects
    │   ├── skills.json        # Skills grouped by category
    │   └── navigation.json    # Navbar menu items
    ├── hooks/                 # Active section, scroll lock, reveal
    ├── pages/                 # Page composition
    ├── test/                  # Test setup and provider helper
    ├── utils/                 # Helper functions
    ├── App.jsx
    ├── entry-server.jsx       # Server render entry for prerendering
    ├── i18n.js                # ID/EN dictionaries
    └── main.jsx               # Hydration and service worker registration
```

## Updating Content

1. Edit the relevant file in `src/data/`.
2. Add or replace images in `public/assets/`.
3. Reference them with an absolute path, e.g. `/assets/project.webp`.

### Bilingual fields

- `profile.json`: `bioHome`/`bioHomeId`, `bioAbout`/`bioAboutId`, `label`/`labelId`, `value`/`valueId`.
- `experiences.json`: `description`/`descriptionId`, `features`/`featuresEn`.
- `navigation.json`: `label`/`labelId`.

If an Indonesian variant is missing, the English value is used as a fallback.

## Deployment

`npm run build` produces a static `dist/` folder that can be deployed to Vercel, Netlify, Cloudflare Pages, or any static host. The canonical URL in `index.html`, `robots.txt`, and `sitemap.xml` currently points to `https://zakie.vercel.app/`; update these if the domain changes.

Security headers are defined in `vercel.json` and `public/_headers`. Long-lived caching is applied to hashed assets, while `sw.js` is always revalidated.

### Lighthouse

Latest audit on the production build:

| Category       | Mobile | Desktop |
| -------------- | ------ | ------- |
| Performance    | 81     | 99      |
| Accessibility  | 100    | 100     |
| Best Practices | 100    | 100     |
| SEO            | 100    | 100     |

Mobile performance is limited by the CPU-throttled lab environment (software rendering); accessibility, best practices, and SEO are perfect.
