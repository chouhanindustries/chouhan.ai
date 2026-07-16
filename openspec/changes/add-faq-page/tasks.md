## 1. Content: FAQ

- [ ] 1.1 Draft the cloning/moat answer (four-part moat: manufacturing, canonical-source trust, license reciprocity, community; openness = strategy not moat; precedents Prusa, Arduino, partially-open Raspberry Pi)
- [ ] 1.2 Draft the business-model answer (finished units, built-to-order, DRM-free trusted consumables; honest on hardware margins)
- [ ] 1.3 Draft the market answer with a sourced number or qualitative framing (no invented figures)
- [ ] 1.4 Draft the why-Telegraph answer (dev-kit / community wedge, proves publish-before-ship, not a revenue play)
- [ ] 1.5 Draft the competition answer (asymmetric axis incumbents can't follow; neglected segments; modularity; right-to-repair tailwinds)
- [ ] 1.6 Draft the in-house-manufacturing answer (owning the process is the product; capital cost acknowledged)
- [ ] 1.7 Draft the "isn't the segment too small" answer (Linux/Arduino/RPi trajectory; purifier consumables as mass-market pitch)
- [ ] 1.8 Draft consumer-facing basics (what open means here, self-build, support, repair)
- [ ] 1.9 Structure entries as a frontmatter data array with question/answer/group

## 2. Content: Investor page

- [ ] 2.1 Draft the USP/thesis ("openness is acquisition, manufacturing is margin")
- [ ] 2.2 Draft the four-part moat narrative
- [ ] 2.3 Draft competitive asymmetry + tailwinds (right-to-repair EU/US/India, institutional auditability demand)
- [ ] 2.4 Draft the roadmap narrative (Telegraph first, Media Platform flagship, Clock/Purifier consumables) without private milestones
- [ ] 2.5 Add a contact CTA routing to a private conversation; NO raise amount, milestones, or traction counts

## 3. Honesty pass (do before building)

- [ ] 3.1 Remove/avoid the false "ten years of process knowledge" framing (founded 2025)
- [ ] 3.2 Confirm every numeric claim is sourced or qualitative
- [ ] 3.3 Confirm competitor/precedent claims are accurate (Raspberry Pi = partially open) and framed structurally, not as accusations
- [ ] 3.4 Confirm no private fundraise data on either public page

## 4. Pages

- [ ] 4.1 Build `src/pages/faq.astro` via BaseLayout (grouped, scannable; accordion vs always-open per design)
- [ ] 4.2 Build `src/pages/investors.astro` via BaseLayout (narrative + contact CTA)
- [ ] 4.3 Set title/description/url/OG props for both pages

## 5. Chrome and styles

- [ ] 5.1 Add FAQ link to `Nav.astro` and `Footer.astro`; add Investors link to `Footer.astro` (top-nav placement per design D5)
- [ ] 5.2 Add FAQ/investor styles under a new banner in `global.css`, reusing tokens (and storefront FAQ styles if present)

## 6. Verification

- [ ] 6.1 `npm run build` succeeds; both pages render at `/faq.html` and `/investors.html` (desktop + mobile)
- [ ] 6.2 Review: no em-dashes, site voice, no false tenure, sourced/qualitative numbers, no private figures
- [ ] 6.3 Confirm links work from nav/footer and URLs are stable
