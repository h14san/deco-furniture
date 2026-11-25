# deco-furniture

Demo website for a furniture showroom in Nyarutarama, Kigali (working name **Deco Center**).
Homepage, category page and product pages, mobile-first, with a pre-filled WhatsApp message for every product and a business-quote composer. Designed with [Impeccable](https://impeccable.style) (see `PRODUCT.md`, `DESIGN.md`). See [PLAN.md](PLAN.md) for the full project plan and [docs/PITCH.md](docs/PITCH.md) for the client pitch.

## Run locally

Requires Node 18+. No dependencies to install.

```sh
npm start          # serves public/ at http://localhost:5173
```

## Project layout

```
public/              ← the whole website (deploy this folder as-is)
  index.html         homepage: hero, collections, featured, business quote, showroom
  category.html      category page (?c=chairs | office-desks | couches | office-sets; none = everything)
  product.html       product page (?id=CH-101 …)
  css/styles.css     design tokens + all styles
  fonts/             Figtree (self-hosted)
  js/config.js       ★ store name, address, hours, contacts — edit here
  js/products.js     ★ categories and products
  js/main.js         rendering, WhatsApp links, quote composer, live opening hours
  js/ribbon.js       the animated ribbon in the hero and page headers
  images/photos/     SAMPLE stock photos (Unsplash) — replace with real showroom photos
  images/*.svg       old generated placeholders (fallback)
scripts/
  gen-placeholders.mjs   regenerates placeholder images (npm run images)
  serve.mjs              tiny local static server
docs/PITCH.md        one-page pitch for the client meeting
```

## Common changes

- **Rename the store:** change `storeName` in `public/js/config.js`. It updates the header, footer, page titles and WhatsApp messages.
- **Add real photos:** drop files in `public/images/photos/` and set each product's `photo` in `public/js/products.js`, then delete its `credit` (that also removes the "Sample photo" label and its footer credit). Use roughly 4:3 landscape photos about 1200 px wide; `focus` sets which part stays visible when cropped.
- **Contacts and hours:** the sales contacts are placeholders (`Sales Contact 1/2`, `+250 7XX XXX XXX`) — put the real ones in `public/js/config.js`. Hours there also drive the live "Open now" status (Kigali time).
- **Add a product:** add an entry to `PRODUCTS` in `public/js/products.js`. Set `featured: true` to show it on the homepage.

## Deploy

The site is static, so any static host works:

- **GitHub Pages:** `.github/workflows/pages.yml` deploys `public/` on every push to `main`. Enable it once under *Settings → Pages → Source: GitHub Actions*.
- **Netlify / Vercel / Cloudflare Pages:** set the publish directory to `public` with no build command.

## Sample photo credits

The product photos are free stock photos used under the [Unsplash License](https://unsplash.com/license), as samples only. Photographers are listed in `public/js/products.js` (`credit`) and in the site footer under "Sample photo credits".
