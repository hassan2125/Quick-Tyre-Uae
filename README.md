# Quick Tyres UAE — Vite + React website

Multi-page website for **Quick Tyres UAE** (mobile tyre change, puncture repair & emergency roadside tyre service in Dubai).

## Run it
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # serve the production build locally
```

## Pages & routes
| Route | File |
|---|---|
| `/` Home | `src/pages/Home.jsx` |
| `/services` | `src/pages/Services.jsx` |
| `/services/:slug` (6 service pages) | `src/pages/ServiceDetail.jsx` |
| `/about` | `src/pages/About.jsx` |
| `/gallery` | `src/pages/Gallery.jsx` |
| `/brands` | `src/pages/Brands.jsx` |
| `/contact` | `src/pages/Contact.jsx` |
| `*` 404 | `src/pages/NotFound.jsx` |

Service slugs: mobile-tyre-change, emergency-tyre-change, mobile-tyre-puncture-repair, mobile-flat-tyre-repair, emergency-tyre-puncture-repair, mobile-tyre-change-replacement.

## Structure
```
src/
  main.jsx  App.jsx            router + routes + scroll-to-top
  styles.css                   base design system (variables, layout, animations)
  modern.css  modern2.css      modern refinement layer + newer sections (loaded after styles.css)
  data/site.js                 ALL content: business info, services, brands, areas, reviews, team, FAQs, gallery, USPs
  components/
    Layout.jsx                 top bar, header + Services dropdown, footer, floating call/WhatsApp, error boundary
    Common.jsx                 SectionHead, CallButtons, PageHero, ServiceCard, Marquee, FAQ, BookingForm, CTABand
    Tracker.jsx                animated "job card" hero (van on road)
    Tyre.jsx                   SVG tyre graphic      Reveal.jsx  scroll-reveal wrapper
    WhyChoose.jsx  Team.jsx  BrandShowcase.jsx  Sidewall.jsx  WorkGallery.jsx  MapEmbed.jsx
  pages/                       one file per page (see table)
```

## Editing content
Almost everything (phone, WhatsApp, address, services, prices, brands, areas, reviews, team, FAQs) is in `src/data/site.js`. Phone/WhatsApp: `site.tel` / `site.wa`.

## TODO before launch
- **Real photos:** the Gallery tiles and the service-page "Work Gallery" use illustrated placeholders (`Gallery.jsx`, `WorkGallery.jsx`); team cards show initials (`Team.jsx`). Replace with real images in `public/` or `src/assets/`.
- **Brand logos:** brand cards use letter badges (`BrandShowcase.jsx`, `Brands.jsx`) — swap in official logos if licensed.
- **Opening hours:** the original site says 24/7 but lists 08:00 AM – 11:00 PM in the footer — confirm and update `site.hours`.
- **Google Map:** `MapEmbed.jsx` loads the live embed on click; set `live` to `true` initially for production.
- **Quote form:** opens a pre-filled WhatsApp message; connect a backend/email service if you want form submissions.
- **SEO:** add per-page titles/meta (e.g. react-helmet-async) and a sitemap.
- Content was taken from quicktyresuae.com; some copy (e.g. "Free tyre inspection advice", team roles) is adapted — review it.

## Deploying
Single-page app using `BrowserRouter`: host must rewrite all routes to `index.html`. Included: `vercel.json` (Vercel) and `public/_redirects` (Netlify).
