## Context

Home Assistant's Connect ZBT-2 page is the reference for a shipping open-hardware product page. It matters because Home Assistant (Nabu Casa / Open Home Foundation) is structurally the same kind of company as Chouhan Industries: open-source-first, hardware-selling, mission-funded. The single most instructive detail is that ZBT-2's "Buy now" is not a checkout but a region/retailer selector pointing outward, which confirms the thesis running through [[add-site-backend]] and the waitlist plan: the product page points outward, the company never runs a cart.

This change defines the *destination* state on the page timeline:

```
   build-log  →  waitlist  →  STOREFRONT (this change)
   (today)       ([[add-open-telegraph-waitlist]])   (post Crowd Supply)
```

The current Open Telegraph page already has strong engineering content (problem/approach, architecture stack, design grids, SDK, roadmap, built-with-Claude). The gaps versus ZBT-2 are commercial/trust sections, not engineering ones: in-box, formal physical specs, exploded diagram, a consolidated "open by design" section, "purchase funds open", where-to-buy, and an FAQ.

## Goals / Non-Goals

**Goals:**
- Define a reusable storefront layout for a shipping product, adopted first by Open Telegraph.
- Add the commercial/trust sections the page lacks, in the site's existing dark editorial style.
- Keep buying outward-pointing (Crowd Supply first), never in-house.
- Make the mission-support case ("buying funds open, files stay free") explicit.

**Non-Goals:**
- In-house commerce of any kind (owned by Crowd Supply / resellers).
- The waitlist and its backend ([[add-open-telegraph-waitlist]], [[add-site-backend]]).
- Adopting ZBT-2's visual identity (white bg, lifestyle photography, approachable voice).
- Rolling out to every product now; Open Telegraph is the template.

## Decisions

**D1: Steal the structure, keep the skin.** Adopt ZBT-2's section skeleton (buy hero, where-to-buy, in-box, specs, exploded view, open-design, purchase-funds-open, FAQ) but render it in the existing dark/gold/Libre Baskerville, understated-voice system. Rationale: ZBT-2 sells cozy approachability; Chouhan sells precision and permanence. Alternative (adopt the look too) is rejected as brand dilution, the same trap flagged with mecha.

**D2: Where-to-buy points outward, no cart.** A seller list starting with Crowd Supply, extensible to resellers, each an external link. Rationale: matches ZBT-2 and mecha, and keeps [[add-site-backend]] free of commerce. Alternative (own checkout) rejected: a hardware company should not run payments/fulfillment.

**D3: Data-driven layout, Open Telegraph first.** The repo already renders products/blog/careers from frontmatter arrays. Model the storefront as per-product data (price, tiers, in-box, specs, sellers, faq) feeding a shared layout or partial, so Open Clock/Purifier/flagship can adopt it later. Alternative (bespoke per page) rejected: it would not generalize and would drift.

**D4: Storefront supersedes the waitlist on the same page.** When a product ships, the waitlist module is demoted/removed and the buy hero takes over; "Get Involved" repo/build-log links stay as proof. Rationale: one page, two temporal states, one source of truth. This is a state transition, not a second page.

**D5: Photography reads as craft, not lifestyle.** If the Telegraph is photographed, use macro on copper, silkscreen, board-in-hand; plus an exploded/technical SVG (natural from KiCad). Rationale: consistent with the render/diagram language already on the page and the precision brand. Alternative (ZBT-2-style room/shelf lifestyle shots) rejected per D1.

**D6: FAQ answers objections inline.** Short, direct answers (why open, kit vs assembled, support, why Crowd Supply), not a wall of links. Rationale: ZBT-2's FAQ earns trust by confronting skepticism; deferring everything to docs wastes the section.

## Risks / Trade-offs

- **Building this before the product ships would be dishonest** → gate on real shipping + a live Crowd Supply campaign; this change is the written north star until then.
- **Specs/in-box need real facts** (dimensions, material, weight) → do not publish placeholders; fill from the actual manufactured unit.
- **Brand dilution chasing ZBT-2** → D1/D5 make "keep the skin" a hard requirement in the spec.
- **Over-generalizing too early** → Open Telegraph is the first concrete adopter; extract the shared layout only once its shape is proven.
- **Where-to-buy with a single seller looks thin** → design the seller list to read well with one entry (Crowd Supply) and scale to many.
- **Mission-support copy tipping into preachy** → keep the understated voice; state the mechanism (funds development, files stay free), not a sermon.

## Migration Plan

1. Prerequisite: product is manufacturable/shipping and a Crowd Supply campaign (or equivalent seller) exists to link to.
2. Model storefront data fields for Open Telegraph (price, tiers, in-box, specs, sellers, faq).
3. Build the storefront sections on the Open Telegraph page in the existing style; demote/remove the waitlist module (state transition per D4).
4. Add the exploded diagram and craft photography assets.
5. Verify: `npm run build`; review the page for brand consistency and honest, populated facts; confirm all buy paths point outward.
6. Later: extract the shared layout/partial and adopt it on a second product.

Rollback: the change is additive per page; reverting restores the waitlist-state page. No data or URL impact (URLs stay stable per repo convention).

## Open Questions

- **Shared component vs per-page duplication first?** Likely build on Open Telegraph, then extract once proven (D3), but confirm the appetite for a shared partial up front.
- **Does the waitlist fully disappear or persist for accessories/next runs?** A product can be shipping while accessories are still waitlisted; the two states may coexist per SKU/tier.
- **Price display** while only Crowd Supply sells it: show the campaign price, or "from $X"? Depends on tier spread.
- **Which FAQ questions** are load-bearing for Open Telegraph specifically (Morse learning curve, HID compatibility, kit soldering difficulty)?
- **How many sellers at launch** beyond Crowd Supply, and does that argue for a region-aware selector like ZBT-2 or a simple list?
