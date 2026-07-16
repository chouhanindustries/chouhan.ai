## 1. Copy and content

- [ ] 1.1 Draft waitlist headline + one-line pitch in brand voice (understated, precise, no em-dashes)
- [ ] 1.2 Write the fulfillment honesty line ("not shipping yet; files published before units ship")
- [ ] 1.3 Write the four tier descriptions (Bare PCB, Kit, Assembled + enclosure, Custom/Bespoke); give Custom the made-to-order/configurable framing (enclosure/finish, silkscreen callsign, expansion accessories)
- [ ] 1.4 Reword the closing section so "Get Involved" (repo, build log) reads as proof beneath the waitlist

## 2. Waitlist module (page)

- [ ] 2.1 Add a waitlist section near the top of `src/pages/products/open-telegraph.astro`, below the hero, above the deep engineering sections
- [ ] 2.2 Build the email input + submit control markup (final visual form; submit is a placeholder)
- [ ] 2.3 Add the "follow the build" framing so the module reads as a build-log subscription, not a dead notify bucket
- [ ] 2.4 Place the tier ladder (as content) in or adjacent to the waitlist module; feature the Custom/Bespoke tier visually

## 3. Placeholder submit behavior

- [ ] 3.1 Implement placeholder behavior in `src/scripts/site.js` (or inline) so the form does NOT show a false "you're added" confirmation with no backend
- [ ] 3.2 Choose the honest stub per design Open Questions (disabled "coming soon" button, `mailto:` fallback, or "opening soon" microcopy) and apply consistently

## 4. Styles

- [ ] 4.1 Add waitlist module + tier ladder styles under a new `/* ── Waitlist ── */` banner in `src/styles/global.css`, reusing existing tokens (`--gold`, fonts, spacing)
- [ ] 4.2 Verify responsive behavior (form + tier ladder stack cleanly on mobile)

## 5. Closing CTA reframe

- [ ] 5.1 Keep repo + build-log links present but demote them beneath the waitlist as secondary/proof

## 6. Meta and verification

- [ ] 6.1 Update the page `description` toward launch/waitlist framing if warranted (keep URL unchanged)
- [ ] 6.2 `npm run build` succeeds and the page renders correctly in a browser (desktop + mobile widths)
- [ ] 6.3 Confirm no em-dashes in new copy and the engineering sections are unchanged in substance

## 7. Deferred (later change, do NOT build here)

- [ ] 7.1 Decide capture backend (Buttondown vs Cloudflare Pages Function) and wire real submission
- [ ] 7.2 Set up the Crowd Supply preorder campaign and announce it to the waitlist
