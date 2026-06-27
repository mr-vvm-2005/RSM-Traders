# R.S.M Traders — Wholesale Website

Built by Site Studio. React (Vite) + Tailwind CSS, bilingual (English/Tamil), WhatsApp-first.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```
Output goes to `dist/`. Deploy that folder to Netlify (a `netlify.toml` is already included for SPA routing) or Vercel.

## What's included

- **Pages**: Home, Products (with category filter via URL `?category=`), About, Contact
- **i18n**: `src/i18n/en.json` + `src/i18n/ta.json`, instant toggle (no reload), saved to localStorage
- **Products**: `src/data/products.json` — swap in real images/prices anytime, no code changes needed
- **WhatsApp**: `src/utils/whatsapp.js` builds `wa.me` links with `encodeURIComponent`
- **SEO**: meta/OG tags in `index.html`, `public/robots.txt`, `public/sitemap.xml`, Google site verification tag included
- **Design**: dark premium theme — Espresso #2B1B14 / Cocoa #4A2C1D / Gold #D4A64A / Honey #F2C66D / Cream #F5E6D3, Playfair Display + Poppins, Noto Sans Tamil for Tamil text

