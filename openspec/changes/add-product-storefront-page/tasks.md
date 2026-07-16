## 1. Prerequisites (gate before building)

- [ ] 1.1 Confirm Open Telegraph is manufacturable/shipping and design files are published (release policy)
- [ ] 1.2 Confirm a live seller exists to link to (Crowd Supply campaign or equivalent)
- [ ] 1.3 Gather real facts: price(s) per tier, dimensions, weight, material, operating conditions, in-box contents

## 2. Storefront data model

- [ ] 2.1 Define per-product storefront fields (price, tiers, in-box, specs, sellers, faq) following the repo's data-array conventions
- [ ] 2.2 Populate Open Telegraph's storefront data

## 3. Buy-forward hero and where-to-buy

- [ ] 3.1 Add a buy-forward hero (price + primary "where to buy" CTA) for the shipping state
- [ ] 3.2 Build the outward where-to-buy list (Crowd Supply first), each seller an external link; design it to read well with one entry and scale to many
- [ ] 3.3 Demote/remove the waitlist module for the shipping state; keep "Get Involved" repo/build-log links as proof

## 4. Content sections

- [ ] 4.1 In-box contents, tied to the tier ladder (Bare/Kit/Assembled/Custom)
- [ ] 4.2 Formal specifications block: physical (dimensions, weight, material, operating conditions) alongside existing electrical/feature detail
- [ ] 4.3 "Open by design" section consolidating tinker-friendly proof (test pads, silkscreen labels, UART debug header, published files)
- [ ] 4.4 "Every purchase funds open hardware" mission-support section (funds development; files stay free under CERN OHL-S)
- [ ] 4.5 FAQ answering load-bearing objections inline (why open, kit vs assembled, support/warranty, HID compatibility, why Crowd Supply)

## 5. Assets

- [ ] 5.1 Exploded / labeled technical diagram of the board (and enclosure if applicable)
- [ ] 5.2 Craft-style photography (macro on copper/silkscreen, board in hand); NOT lifestyle shots

## 6. Styling (brand skin preserved)

- [ ] 6.1 Add storefront section styles under a new banner in `src/styles/global.css`, reusing dark theme + gold + display/body tokens
- [ ] 6.2 Verify the page reads as dark/editorial (not ZBT-2's white/lifestyle look) and copy has no em-dashes
- [ ] 6.3 Verify responsive behavior of the new sections

## 7. Verification

- [ ] 7.1 `npm run build` succeeds and the page renders correctly (desktop + mobile)
- [ ] 7.2 All buy paths point outward (no in-house cart); specs/in-box contain real facts, no placeholders
- [ ] 7.3 URLs unchanged; engineering content preserved

## 8. Later (separate work, do NOT do here)

- [ ] 8.1 Extract a shared storefront layout/partial once the Open Telegraph shape is proven
- [ ] 8.2 Adopt the storefront on a second product (Open Clock / Open Purifier / flagship)
- [ ] 8.3 Region-aware seller selector if the seller count grows enough to need it
