# Chouhan Industries

**Open by Design. Built to Last.**

Website for [chouhan.ai](https://chouhan.ai) — an open hardware manufacturing company.

## What We Build

**Open Media Platform (OMP)** — a fully open, modular media computing platform. Every input, output, codec, and expansion module is replaceable and documented. The core board handles computing. Expansion modules handle everything else.

Hardware released under [CERN OHL-S v2.0](https://ohwr.org/cern_ohl_s_v2.txt).

## Pages

| Page | Source | URL |
| --- | --- | --- |
| Homepage | `src/pages/index.astro` | `/` |
| Products | `src/pages/products.astro` | `/products.html` |
| Open Source | `src/pages/open-source.astro` | `/open-source.html` |
| About | `src/pages/about.astro` | `/about.html` |
| Blog | `src/pages/blog.astro` | `/blog.html` |
| Careers | `src/pages/careers.astro` | `/careers.html` |
| Contact | `src/pages/contact.astro` | `/contact.html` |

## Stack

[Astro](https://astro.build) static site — zero client-side JavaScript framework, ships plain HTML/CSS/JS. Pages are built from a shared layout and components; the deployed output in `dist/` is pure static files.

```text
src/
  layouts/BaseLayout.astro   shared <head> (SEO/OG meta, fonts, analytics) + page shell
  components/Nav.astro       navbar + mobile menu
  components/Footer.astro    footer
  pages/*.astro              one file per page
public/
  assets/css/style.css       design system
  assets/js/script.js        nav scroll + mobile menu + contact form
  assets/favicons/           ico, png, svg
```

## Local Development

```bash
npm install
npm run dev       # dev server with live reload
npm run build     # static output in dist/
npm run preview   # serve the built site
```

## Deployment

`npm run build` produces the site in `dist/`. Point your static host (GitHub Pages via Actions, Cloudflare Pages, Netlify, Vercel) at that directory with `npm run build` as the build command.

## License

Hardware designs: [CERN OHL-S v2.0](https://ohwr.org/cern_ohl_s_v2.txt)  
Website code: MIT
