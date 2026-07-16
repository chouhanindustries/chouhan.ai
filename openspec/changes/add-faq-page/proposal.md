
## Why

The sharpest objection to an open hardware company is "if everything is open, what stops someone from cloning you cheaper?" Right now the site never answers it. Consumers weighing the open product against a cheap clone, and investors weighing the business, both need a crisp, honest response: the designs are given away by design; the moat is manufacturing execution, canonical-source trust, the reciprocal license, and community velocity. Openness is the strategy, not the moat. We want a company-level FAQ that confronts this and the other recurring questions directly, in the site's voice, without publishing private fundraise details or fabricated numbers.

## What Changes

- Add a public **`/faq.html`** page (linked in nav and footer) answering the company-level questions consumers and investors ask:
  - "If it's open, what stops someone from cloning you cheaper?" (the headline question, answered with the four-part moat).
  - "How do you make money?" (finished units at premium quality, built-to-order configurations, DRM-free but trusted consumables; honest about hardware margins).
  - "What's the market?" (a credible, sourced figure for at least one category; no invented numbers).
  - "Why the Telegraph? Who buys a Morse key?" (the dev-kit / community wedge, not a revenue play).
  - "How do you compete with industry leaders?" (a different axis incumbents structurally cannot follow; start where giants are absent; modularity; right-to-repair tailwinds).
  - "Why manufacture in-house instead of contract manufacturing?" (owning the process is the product; you cannot publish tolerances you do not control; capital cost acknowledged).
  - "Isn't that segment too small?" (starts niche like Linux/Arduino/Raspberry Pi; the purifier-consumables angle is a mass-market price pitch).
  - Consumer-facing basics ("what does open mean here", "can I build it myself", "what about support and repair").
- Add a separate public **`/investors.html`** page presenting the business case and moat narrative (the "openness is customer acquisition, manufacturing is margin" thesis), public-safe: it makes the strategic argument and points investors to a contact, but **omits the specific raise amount, round milestones, and precise traction figures**, which stay in a private deck.
- Add **FAQ** and **Investors** links to `Nav.astro` and `Footer.astro` data arrays (or footer-only for Investors, decided in design).

Explicitly **out of scope**:

- Any private fundraise specifics on either public page (raise amount, milestone commitments, exact traction counts).
- Fabricated or unverifiable numbers; the false "ten years of process knowledge" framing (company founded 2025).
- Per-product FAQs (Morse learning curve, HID compatibility, kit soldering). Those belong to the product storefront ([[add-product-storefront-page]]); this FAQ is company-level.

## Capabilities

### New Capabilities

- `faq-page`: A public company-level FAQ page answers the recurring consumer and investor questions, honestly and in brand voice, with the cloning/moat question answered crisply and no fabricated or private-fundraise content.
- `investor-page`: A public investor-oriented page presents the business case and the four-part moat, public-safe, routing interested investors to a private conversation rather than publishing round details.

### Modified Capabilities

<!-- None as spec deltas. Relates to product-storefront ([[add-product-storefront-page]]), which owns per-product FAQs; this change is scoped to company-level questions and does not modify that capability. No existing capability specs live in openspec/specs/. -->

## Impact

- **Pages**: new `src/pages/faq.astro` and `src/pages/investors.astro` (build.format 'file' gives `/faq.html`, `/investors.html`; URLs stable).
- **Chrome**: `src/components/Nav.astro` and `src/components/Footer.astro` link arrays gain entries.
- **Styles**: `src/styles/global.css` gains FAQ/accordion and investor-page section styles under a new banner, reusing existing tokens; may reuse the storefront FAQ styling if that lands first.
- **Content**: answers must be honest and, where numeric, sourced. Market-size claims need a citation; competitor claims (Prusa clones, Arduino, partially-open Raspberry Pi, Xiaomi/Kent/Aquaguard consumable lock-in) must stay accurate.
- **SEO/meta**: each page needs title/description/OG via BaseLayout props.
- **Principle check**: voice stays understated, no em-dashes; no private data published; nothing here touches the release policy.
