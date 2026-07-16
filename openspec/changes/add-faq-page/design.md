## Context

The site declares an open-hardware philosophy but never answers the obvious rebuttal: if the designs are free, why is this a business and not a charity, and what stops a cheaper clone? The user supplied a strong, honest framing (moat = manufacturing execution + canonical-source trust + reciprocal license + community; openness is strategy, not moat) plus competitive analysis and draft pitches. This change turns that into two public pages: a company-level FAQ and an investor-oriented page. The user chose public-safe scope (no private fundraise details) and a split layout (FAQ + separate investor page).

The site is static Astro with `build.format: 'file'`, shared chrome in BaseLayout/Nav/Footer, and data-driven repeated content (blog posts, roles, products as frontmatter arrays). The existing product storefront change ([[add-product-storefront-page]]) introduces a *per-product* FAQ; this change owns *company-level* questions, so the two must not overlap.

## Goals / Non-Goals

**Goals:**
- Answer the cloning/moat question crisply and honestly, plus the recurring business/market/product/competition questions.
- Give investors a public-safe business-case page that routes to a private conversation.
- Keep everything honest: no fabricated numbers, no false tenure, no private fundraise data.
- Match the site voice and design; keep URLs stable.

**Non-Goals:**
- Publishing the raise amount, milestones, or precise traction publicly.
- Per-product FAQs (owned by [[add-product-storefront-page]]).
- A gated/private investor data room (out of scope; the page routes to email).
- Rewriting existing homepage/about copy.

## Decisions

**D1: Two pages, not one.** `/faq.html` (consumer + strategy) and `/investors.html` (business case), per the user's choice. Rationale: the audiences skim differently; an investor wants the moat argument as a narrative, a consumer wants scannable Q&A. Alternative (one combined page) rejected as serving neither well.

**D2: Data-driven FAQ.** Model FAQ entries as a frontmatter array of {question, answer, group} rendered in a loop, matching the repo's blog/roles/products pattern. Groups: "The open question", "The business", "The products", "The competition", "Owning one". Rationale: consistent with the codebase; easy to reorder/extend. Consider an accordion (details/summary) for scannability; reuse storefront FAQ styles if that change lands first.

**D3: Honesty guardrails are explicit requirements, not just intentions.** No "ten years of process knowledge" (founded 2025); market/numeric claims sourced or qualitative; Raspberry Pi described as only partially open; competitor consumable-lock claims (Xiaomi/Kent/Aquaguard) kept accurate and non-defamatory (structural argument, not accusation). Rationale: this is public, indexable, investor-facing copy; a false claim here is a credibility hole in exactly the place the brand sells verifiability.

**D4: Investor page is public-safe and routes to a private conversation.** It makes the full moat/asymmetry/tailwinds argument but stops before the ask; a contact CTA (email) carries the private follow-up. Rationale: matches the user's scope choice and avoids indexing fundraise details. Alternative (publish the ask) explicitly rejected by the user.

**D5: Nav vs footer placement.** FAQ goes in both nav and footer (high-traffic consumer need). Investors is footer-primary (and/or a link from the FAQ business section), not a top-nav item, so the consumer site does not lead with a fundraising pitch. Confirmable during apply.

**D6: Market-size handling.** Where a number is used (for example India water purification), cite a credible source inline or frame qualitatively ("one of the largest ... markets") rather than assert a precise figure the site cannot back. Media-device TAM similarly sourced or kept qualitative. Rationale: D3.

**D7: Reuse the supplied customer-pitch copy carefully.** The customer pitch ("Hardware you truly own", verify/repair/no-lock-in/outlives-us) is strong and on-voice; it can seed the consumer-facing FAQ intro and the "Owning one" answers, but it is not pasted wholesale into a pitch block that competes with the existing homepage manifesto.

## Risks / Trade-offs

- **Investor content on a public site reads as fundraising to consumers** → keep Investors out of the top nav (D5); lead the FAQ with consumer/strategy value, not the raise.
- **A wrong or stale number undermines the verifiability brand** → D3/D6 make sourcing a hard requirement; prefer qualitative when unsure.
- **Competitor claims risk being unfair or legally loose** → frame structurally ("their model depends on locked consumables") not as accusations of wrongdoing; name categories/precedents accurately.
- **Overlap with the per-product storefront FAQ** → this change is company-level only; product specifics stay in [[add-product-storefront-page]].
- **Solo-founder / thin-traction questions** → answer with velocity and the open hiring roles, honestly, without inventing metrics; keep specific counts off the public page.
- **Tone drifting into hype** → keep the understated voice; the material is persuasive on its merits.

## Migration Plan

1. Draft the FAQ entry data (question/answer/group) and the investor-page narrative sections, applying D3 honesty guardrails; source any numbers.
2. Build `src/pages/faq.astro` (data-driven, grouped, scannable) and `src/pages/investors.astro` (narrative moat/asymmetry/tailwinds + contact CTA), both via BaseLayout with proper meta.
3. Add links to `Nav.astro` (FAQ) and `Footer.astro` (FAQ + Investors) arrays.
4. Add FAQ/investor styles under a new banner in `global.css`, reusing tokens (and storefront FAQ styles if present).
5. Verify: `npm run build`; review both pages for honesty (no false tenure, sourced numbers, no private figures), voice, no em-dashes, stable URLs, and correct meta/OG.

Rollback: purely additive (two new pages + link entries + CSS); reverting removes them with no impact on existing pages or URLs.

## Open Questions

- **Which market number(s)** can be credibly sourced now (India water purifier market size; media-device TAM), and what is the citation? If none is solid, go qualitative (D6).
- **Traction framing**: what real, non-sensitive signals exist to cite (public GitHub activity, prototype working, waitlist live) without publishing counts?
- **Does Investors appear in the top nav** or footer-only (D5 leans footer-only)?
- **Accordion vs always-open** FAQ rendering: accordion aids scanning but hides content from in-page search/SEO; decide during apply.
- Should the FAQ link out to `/open-source.html` and the storefront pages for depth rather than duplicating?
