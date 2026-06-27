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

## Before launch — client needs to provide

- [ ] Real logo file → drop in `public/` and reference in `Navbar.jsx`
- [ ] Founder photo → replace the "MM" placeholder circle in `Home.jsx`
- [ ] Real product photos (800×800px, WebP recommended) → update `image` field in `src/data/products.json`
- [ ] Confirm email `81maramani@gmail.com` is correct (flagged as TODO in `whatsapp.js`)
- [ ] Confirm final domain (currently set to placeholder `rsm-traders.netlify.app` in `index.html`, `sitemap.xml`, `robots.txt`)
- [ ] Favicon (`public/favicon.ico`) and OG image (`public/og-image.jpg`) — not yet added

## Notes

- Product prices default to "Contact for Price" — set a real number string in `products.json` to override per product.
- The Products page filter syncs to the URL, so homepage category cards (`/products?category=Candies`) land pre-filtered.
