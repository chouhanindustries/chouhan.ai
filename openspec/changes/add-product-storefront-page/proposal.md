## Why

The waitlist ([[add-open-telegraph-waitlist]]) covers the *launch* state of a product page, but not the *shipping* state. Home Assistant's Connect ZBT-2 page is the north star for that shipping state: an open-source-first organization selling hardware, where the page points outward to retailers (no in-house cart), formalizes specs, states in-box contents, answers skeptics in an FAQ, and makes the emotional case that buying funds the open mission. Chouhan Industries is structurally the same kind of company, and today its product pages have none of these sections. We want the destination the Open Telegraph page grows into once it actually ships, defined and reusable across the catalog (Open Clock, Open Purifier, and the flagship later).

This is explicitly the *later* state on the page's timeline: `build-log → waitlist → storefront`. It is captured now so the north star is written down and the interim waitlist work does not drift away from it.

## What Changes

Define a reusable **storefront** layout for a product page in its shipping/buyable state, adopted first by Open Telegraph. New content sections (adapting ZBT-2's structure to the existing dark, editorial brand skin, not its white/lifestyle look):

- **Buy-forward hero**: price and a primary "Where to buy" CTA replace (or sit above) the waitlist module once the product ships.
- **Where-to-buy**: an outward-pointing seller list, starting with Crowd Supply and extensible to additional resellers. **No in-house checkout** (consistent with ZBT-2, mecha, and [[add-site-backend]]).
- **In-box contents**: what a buyer receives, tied to the tier ladder (Bare PCB, Kit, Assembled, Custom/Bespoke).
- **Formal specifications**: physical specs the current page lacks (dimensions, weight, material, operating conditions) alongside the existing electrical/feature detail, presented in a scannable specs block.
- **Exploded / technical diagram**: a labeled view of the board and (if applicable) enclosure, on-brand for a KiCad-designed product.
- **"Open by design" section**: consolidate the tinker-friendly proof already scattered on the page (test pads, full silkscreen labels, UART debug header, published files) into one dedicated section.
- **"Every purchase funds open hardware"**: a mission-support section. Buying funds development; the design files stay free forever under CERN OHL-S.
- **FAQ**: a short FAQ that addresses skepticism directly (why buy the open one, what "open" means here, kit vs assembled, warranty/support, why Crowd Supply).

Transitions: when a product moves to shipping, the waitlist module is demoted or removed; the "Get Involved" repo/build-log links remain as proof. Non-goals below keep this from becoming a commerce build.

Explicitly **out of scope**:

- Any in-house commerce (cart, checkout, payment, inventory). Owned by Crowd Supply / resellers.
- The waitlist itself and its capture backend ([[add-open-telegraph-waitlist]], [[add-site-backend]]).
- Adopting ZBT-2's visual identity (white background, lifestyle photography, approachable voice). The brand skin stays.
- Rolling the pattern out to every product in this change; Open Telegraph is the first adopter and the template.

## Capabilities

### New Capabilities

- `product-storefront`: A product page in its shipping state presents a buy-forward hero, an outward where-to-buy list, in-box contents, formal specifications, a mission-support section, and an FAQ, as a reusable layout applied per product, rendered in the site's existing brand design language.

### Modified Capabilities

<!-- None as spec deltas. This relates to product-waitlist ([[add-open-telegraph-waitlist]]) by defining the state that supersedes the waitlist module when a product ships, but it does not modify that capability's requirements. No existing capability specs live in openspec/specs/. -->

## Impact

- **Pages**: `src/pages/products/open-telegraph.astro` first; the pattern is intended to generalize to the other product detail pages and possibly a shared component/partial.
- **Data**: product frontmatter in `products.astro` and/or per-page data may gain fields (price, tiers, in-box, specs, sellers, faq) to keep the layout data-driven, matching the repo's existing data-array conventions.
- **Styles**: `src/styles/global.css` gains storefront section styles under a new banner, reusing existing tokens (dark theme, gold accent, Libre Baskerville).
- **Assets**: needs an exploded/technical diagram and product photography that reads as craft/precision (macro on copper and silkscreen), not lifestyle.
- **Content**: FAQ copy, mission-support copy, formal spec values (dimensions, material, weight) that must exist as real product facts before publishing.
- **Sequencing**: depends on the product actually shipping and on a Crowd Supply campaign existing to link to. Principle check: files-before-units and static-first both hold.
