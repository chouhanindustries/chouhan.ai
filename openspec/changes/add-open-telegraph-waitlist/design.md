## Context

chouhan.ai is a static Astro site (Cloudflare Pages, no backend; the contact form only builds a `mailto:`). The public launch targets mecha.so as the bar, but mecha's "Buy" is really a Kickstarter **preorder**, and Open Telegraph's own roadmap lists production as future work. So the launch move is a **waitlist**, not commerce. This design covers the launch page changes and the deliberate deferral of the capture backend. It exists because there is one genuine architectural decision (where do emails go, on a static host) and a sequencing decision (placeholder now, real backend later) worth writing down before coding.

Launch strategy this design serves:

```
   Waitlist (now)  →  Crowd Supply preorder (later)  →  publish files → ship
```

## Goals / Non-Goals

**Goals:**
- Turn the Open Telegraph page into a credible public-launch page with a prominent waitlist.
- Keep the full engineering story (it is the credibility) and the brand voice (understated, precise, no em-dashes).
- Ship a waitlist that *looks* complete at launch with the backend deferred, and that needs no redesign when the backend lands.
- Introduce the four-tier ladder as content, featuring the Custom/Bespoke tier.

**Non-Goals:**
- Any commerce (cart, checkout, payment). Not now.
- The Crowd Supply campaign setup.
- Choosing and wiring the final capture backend (a later phase; options are noted, not decided).
- Changing product maturity claims or the roadmap.

## Decisions

**D1: Waitlist, not preorder/commerce, for the public launch.**
Rationale: the product is not manufactured; the page's own roadmap says so; our release policy requires files before units ship. A waitlist captures demand honestly. Alternative considered: launch straight to Crowd Supply preorder. Rejected as premature (no campaign assets, no files published yet) and higher risk.

**D2: Placeholder capture at launch; real backend is a fast-follow.**
Per the user's explicit call. The form is built to final visual spec; only submit behavior is stubbed. Rationale: unblocks the public launch immediately without standing up infrastructure. Alternative: block launch on backend. Rejected as it defeats "roll now."

**D3: Backend options recorded, not chosen.** Two live candidates when the fast-follow lands:
- **Buttondown** (indie newsletter): embeddable, you own the list, and you can *send* build-log emails to it. Favors the "follow the build" framing.
- **Cloudflare Pages Function + KV/D1**: you already run on CF; own the pipeline end to end; most on-brand ("own your stack" mirrors "own your hardware"); more code.
Formspree/Tally-style buckets are a fallback but you will outgrow a send-less bucket.

**D4: Waitlist framed as "follow the build," not "notify me."**
Rationale: a send-capable list stays warm for months and gives Crowd Supply day instant reach; it also matches the existing build-log/blog and the "decisions made in public" ethos. This nudges D3 toward a send-capable tool.

**D5: Keep "Get Involved," demote it.** The repo and build-log links become proof beneath the waitlist CTA, mirroring mecha keeping GitHub under its preorder. Rationale: preserves the open-source signal without competing with the primary action.

**D6: Tiers as content only.** The ladder communicates range and gauges interest; it does not imply per-tier purchase at launch. Custom/Bespoke is featured because it is the highest-margin SKU and the literal expression of ownership, and it echoes existing catalog language (Open Clock "built to order", Open Purifier "configure your stages").

## Risks / Trade-offs

- **Placeholder form misleads visitors** (they think they joined a list) → the stub must never show a false success; disable with a "coming soon" affordance or an honest fallback (spec: Placeholder capture at launch).
- **Waitlist reads as vaporware without a shippable product** → lean on the existing engineering depth and honest timing copy; the page's substance is the antidote.
- **Backend never gets built, list rots** → keep D2 a genuine fast-follow with a task; if it slips, the honesty line still means no promise was broken.
- **Tier ladder implies you can buy today** → framing copy must scope tiers as "planned at these tiers," not "add to cart."
- **Brand dilution chasing mecha** → keep the understated voice; do not import hype language.

## Migration Plan

1. Build the waitlist module + tier ladder + CTA reframe on the Open Telegraph page (placeholder submit). Verify with `npm run build` and in-browser.
2. Launch. URLs unchanged; page is additive, so no redirects or breakage.
3. Fast-follow phase (separate change): pick D3 backend, wire the submit, migrate any placeholder captures if applicable.
4. Later change: Crowd Supply campaign; waitlist emails announce it.

Rollback: the change is contained to one page plus additive CSS/JS; reverting the commit restores the prior page with no data or URL impact.

## Open Questions

- Final capture backend (D3): Buttondown vs Cloudflare Pages Function. Leaning send-capable per D4.
- Does the waitlist CTA also appear on the homepage hero for the public-launch moment, or stay product-page-only? (Out of scope here; flag for a follow-up.)
- Exact placeholder behavior: disabled "coming soon" button vs `mailto:` fallback vs "opening soon" microcopy. Pick during apply; all satisfy the spec.
- Price points per tier: not needed for a waitlist; defer to the Crowd Supply phase.
