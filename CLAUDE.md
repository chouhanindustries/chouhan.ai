# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Website for [chouhan.ai](https://chouhan.ai) — Chouhan Industries, an open hardware manufacturing company (flagship product: the Open Media Platform). Astro static site: no client-side framework, output is plain HTML/CSS/JS. No tests or linters.

## Commands

```bash
npm install
npm run dev       # dev server (live reload)
npm run build     # static build to dist/
npm run preview   # serve dist/
```

Verify changes with `npm run build` and by loading pages in a browser.

## Architecture

Seven pages in `src/pages/*.astro`, one per URL. `astro.config.mjs` sets `build.format: 'file'` so `products.astro` → `/products.html` (URLs must stay stable — the site is live with these paths) and `compressHTML: false` for readable output.

**Shared chrome lives in one place:**

- `src/layouts/BaseLayout.astro` — full page shell: `<head>` (SEO/OG/Twitter meta, fonts, favicons, Google Analytics tag `G-FJ2H5WVSNV`), navbar, mobile menu, footer, and the `script.js` include. Per-page meta is passed as props: `title`, `description`, `url`, optional `ogTitle` (shorter card title), optional `home` (homepage variant: transparent navbar, wordmark links to `#`).
- `src/components/Nav.astro` / `Footer.astro` — nav and footer markup; the link list is a data array at the top of each file.
- Repeated page content is data-driven where it was repetitive: blog posts in `blog.astro` and job roles in `careers.astro` are frontmatter arrays rendered in a loop. Add a post/role by adding an array entry.

The inline analytics scripts in BaseLayout use `is:inline` — keep that directive or Astro will bundle/transform them.

**Static assets are in `public/`** and served from the site root (e.g. `public/assets/css/style.css` → `/assets/css/style.css`). Pages reference them with relative paths (`assets/...`), which works because all pages are at the root level.

- `public/assets/css/style.css` — single stylesheet for the whole site. Design tokens (colors, fonts, spacing) live in `:root` variables at the top: dark theme (`--bg: #09090B`), gold accent (`--gold: #C9A84C`), Libre Baskerville for display headings, IBM Plex Sans for body. Sections are organized with `/* ── Name ── */` banner comments; add new component styles under an appropriate banner.
- `public/assets/js/script.js` — single script for all pages: navbar solidify-on-scroll, hamburger/mobile menu, and the contact form (builds a `mailto:` to `chouhanindustries@outlook.com` — there is no backend).

OG image is `public/assets/images/og-image.png` (1200×630), referenced via absolute `https://chouhan.ai/...` URLs.

## Licensing

Website code is MIT; hardware designs are CERN OHL-S v2.0 (the license PDF ships in `public/assets/misc/`).
