## Why

Chouhan Industries is preparing to "roll for the public," using [mecha.so](https://mecha.so) as the bar: a credible, alive open-hardware company with a buyable flagship. Open Telegraph is the first product with a simple enough bill of materials to actually box and ship, but its page today reads as *watch us design this* (closing CTA is "Get Involved / View Repository / Build Log"), not *this is coming, tell me when*. We want a public-facing launch that captures demand now without over-promising, since the product is not yet manufactured. A waitlist is the honest first step: it collects intent and builds a warm list to fire at a later Crowd Supply campaign, while our release policy (publish design files before units ship) stays intact.

## What Changes

- Add a **waitlist module** near the top of the Open Telegraph product page: a short pitch, a tier teaser, and an email capture form with a clear "ships when ready / files before units" honesty line.
- The email capture is a **visual placeholder at launch** (styled input + button, no live backend). The real capture destination is deferred to a fast-follow phase. **Non-breaking**: nothing else on the page depends on it.
- Reframe the page's **closing CTA**: keep "Get Involved" (repo, build log) but demote it beneath the waitlist as trust/proof, mirroring how mecha keeps GitHub links under its preorder CTA.
- Introduce the **tier ladder** as content (Bare PCB · Kit · Assembled + enclosure · Custom/Bespoke) so the waitlist can gauge interest per tier. The Custom/Bespoke tier (pick enclosure/finish, silkscreen a callsign, pre-populate expansion accessories, numbered made-to-order) is featured, not buried, as the purest expression of "own your hardware."
- Frame the waitlist as **"follow the build"** (build-log subscription), not a dead "notify me" bucket, so the list stays warm.
- No changes to product maturity claims or the roadmap section: the roadmap continues to state production is future work.

Explicitly staged for **later phases (out of scope here)**: wiring a real capture endpoint (Buttondown or a Cloudflare Pages Function), and the Crowd Supply preorder campaign itself.

## Capabilities

### New Capabilities

- `product-waitlist`: A product page can present a waitlist that captures public interest in a not-yet-shipping product, including a tier teaser and an honesty statement about fulfillment timing. At launch the capture mechanism may be a non-functional placeholder pending a real backend.

### Modified Capabilities

<!-- None. No existing capability specs exist in openspec/specs/ yet; the product page change is additive and its behavioral contract is captured by the new product-waitlist capability. -->

## Impact

- **Pages**: `src/pages/products/open-telegraph.astro` (add waitlist module, adjust closing CTA, add tier ladder content).
- **Styles**: `src/styles/global.css` (waitlist module + tier ladder styles, under a new banner comment).
- **Script**: `src/scripts/site.js` (placeholder form behavior only; no network call at launch).
- **Meta/SEO**: page `description` may shift toward launch/waitlist framing.
- **No new runtime dependency** at launch (placeholder). A later phase adds the capture backend.
- **Principle check**: release policy ("files before units ship") is unaffected; a waitlist collects intent only.
