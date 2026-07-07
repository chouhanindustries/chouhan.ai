---
name: product-page
description: Turn a product idea, plan, or notes into a product detail page on chouhan.ai. Use when the user wants to add a product, create a product page, or convert an idea/spec/roadmap into the site's products section.
---

# Product Page Generator

Transform a raw product idea, plan document, or set of notes into:

1. A detail page at `src/pages/products/<slug>.astro`
2. An entry in the `products` array at the top of `src/pages/products.astro`

The reference implementation is `src/pages/products/omp.astro` — read it before writing a new page, and match its tone and structure. All component styles already exist in `src/styles/global.css` under the `/* ── OMP Products ── */`, `/* ── Inner page hero ── */`, `/* ── Page sections ── */`, and `/* ── Products ── */` banners. Do not add new CSS unless the content genuinely has no fitting component; if you must, add it under an appropriate banner using existing design tokens (`--gold`, `--muted`, `--subtle`, `--border`, `--surface`, `--font-display`).

## Step 1 — Extract from the idea/plan

Distill the input into these slots before writing any markup:

- **Name** and a short **slug** (lowercase, no spaces — e.g. `omp`)
- **One-sentence pitch** (becomes `description` meta + index blurb + hero sub)
- **Problem** — what's broken today (2 short paragraphs)
- **Approach/Platform** — what the product is and how it solves it (2 short paragraphs)
- **Feature/component categories** — 3–6 groups of 3–5 items each (for the grid)
- **Architecture layers** — only if the product is layered/modular (for the stack diagram)
- **Code/API sample** — only if the product has a developer-facing API
- **Roadmap phases** — 3–6 phases, each with title, 1–2 sentence description, and a status: `In Development`, `Planned`, or `Research`
- **Overall status** — for the index card badge

If the input is thin, draft plausible placeholder content in the same voice and tell the user which parts you invented so they can correct them. The voice is confident, terse, manifesto-like: short declarative sentences, no marketing fluff, no exclamation marks (see omp.astro copy).

**Never mention price anywhere** — no target prices, cost estimates, or currency amounts on product pages, even if the source idea/plan includes them.

## Step 2 — Build the page

File: `src/pages/products/<slug>.astro`. Skeleton:

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
---

<BaseLayout
  title="<Product Name> | Chouhan Industries | Open Hardware"
  ogTitle="<Product Name> | Chouhan Industries"
  description="<one-sentence pitch>"
  url="https://chouhan.ai/products/<slug>.html"
>
  <!-- sections -->
</BaseLayout>
```

`build.format: 'file'` means the live URL is `/products/<slug>.html` — always use that form in `url` and internal links.

### Section order

Compose from these blocks, in this order, skipping any that don't apply. Alternate plain and `surface` sections (`<section class="page-section surface">`) so backgrounds zebra-stripe; the hero is followed by a `surface` section.

**1. Page hero** (always):

```html
<div class="page-hero">
  <div class="section-inner">
    <p class="eyebrow"><a href="/products.html" style="color: inherit; text-decoration: none;">Products</a> / <SHORT NAME></p>
    <h1>Product Name</h1>
    <p class="page-sub">One-sentence pitch expanded to 2–3 sentences.</p>
  </div>
</div>
```

**2. Problem / Approach** (always) — two-column `about-body`, each column: `section-label` → `lead` (one bold claim sentence) → `detail` (two `<p>`s):

```html
<section class="page-section surface">
  <div class="section-inner">
    <div class="about-body">
      <div>
        <p class="section-label">The Problem</p>
        <p class="lead">One-sentence claim.</p>
        <div class="detail"><p>…</p><p>…</p></div>
      </div>
      <div>
        <p class="section-label">The Platform</p>  <!-- or "The Approach" -->
        ...same structure...
      </div>
    </div>
  </div>
</section>
```

**3. Architecture stack** (if layered) — `stack-diagram` of `stack-layer` rows. Each row: a `stack-info` block (`stack-label` + a one-line `stack-desc` stating that layer's relationship to the next, e.g. "The only layer software sees.") followed by `stack-chips`. Add class `stack-api` or `stack-modules` to alternate rows for surface shading. The diagram shows relationships between layers — do NOT enumerate the same items the feature grid lists; if a layer corresponds to the grid, its chips should be the grid's category names. See the Architecture section of omp.astro.

**4. Feature/component grid** (usually) — `omp-grid` of `omp-item` cells, each with `omp-title` (category) + `module-list` of `<li>` items. 3 or 6 cells fill the 3-column grid cleanly. This grid is the one place items are enumerated. See the Expansion Modules section of omp.astro.

**5. Software/API split** (if developer-facing) — `about-body` with prose column on the left and a `code-block` on the right (`code-header` with `code-lang` + `code-dots`, then `<pre>` with `kw`/`fn`/`s`/`c`/`comment` spans for highlighting). See the Software section of omp.astro.

**6. Roadmap** (if phased) — `roadmap-grid` of `roadmap-item`s: `roadmap-phase` ("Phase N") → `<h3>` → `<p>` → `<span class="status">`. See the Roadmap section of omp.astro.

**7. Get Involved CTA** (always, last, `surface`) — centered `section-inner` with `section-label`, an `<h2>`, one muted paragraph, and `btn-primary` + `btn-secondary` links (typically `/open-source.html` and `/blog.html`). See the Get Involved section of omp.astro.

### Section headings

Sections 3–6 open with `section-label` + an `<h2>` carrying the page's standard inline style:

```html
<h2 style="font-family: var(--font-display); font-size: clamp(1.4rem, 2.5vw, 2rem); font-weight: 300; margin-bottom: 48px;">
```

Heading copy follows the "Two fragments." pattern: *"One platform. Every medium."*, *"Every medium. One connector."*

## Step 3 — Register on the index

Add an entry to the `products` array at the top of `src/pages/products.astro`:

```js
{
  href: 'products/<slug>.html',
  status: 'In Development',   // or 'Planned' / 'Research'
  name: '<Product Name>',
  blurb: '<the one-sentence pitch, expanded to ~2-3 sentences>',
},
```

## Step 4 — Verify

Run `npm run build` and confirm it succeeds and `dist/products/<slug>.html` exists. Mention the new URL (`/products/<slug>.html`) in your summary.
