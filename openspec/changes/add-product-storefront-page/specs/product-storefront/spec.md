## ADDED Requirements

### Requirement: Buy-forward hero for a shipping product

When a product is in its shipping state, the product page SHALL present a hero that shows the price and a primary call to action leading to where the product can be bought, positioned prominently near the top.

When the product is shipping, the waitlist module SHALL be demoted or removed so the primary action is to buy, not to register interest.

#### Scenario: Shipping product shows price and buy CTA

- **WHEN** a visitor loads a product page for a product in its shipping state
- **THEN** a price and a primary "where to buy" call to action are visible near the top, and the waitlist is no longer the primary action

### Requirement: Outward where-to-buy list

The storefront SHALL present where to buy the product as an outward-pointing list of one or more sellers (starting with Crowd Supply), each linking off-site. The site SHALL NOT host an in-house checkout.

#### Scenario: Seller links point outward

- **WHEN** a visitor chooses to buy
- **THEN** they are directed to an external seller (for example Crowd Supply), and no on-site cart or payment flow is presented

#### Scenario: Multiple sellers are supported

- **WHEN** more than one seller is available
- **THEN** the page can list each seller with an identifying label and an external link, without redesign

### Requirement: In-box contents

The storefront SHALL state what a buyer receives, consistent with the tier ladder (Bare PCB, Kit, Assembled, Custom/Bespoke).

#### Scenario: In-box contents are shown

- **WHEN** a visitor views the storefront
- **THEN** the contents a buyer receives are listed, and where tiers differ, the difference in what is included is clear

### Requirement: Formal specifications

The storefront SHALL present formal specifications including at least physical specs (dimensions, weight, material) and operating conditions, alongside the existing electrical and feature detail, in a scannable format.

#### Scenario: Physical specs are present

- **WHEN** a visitor looks for specifications
- **THEN** dimensions, weight, material, and operating conditions are available in addition to the electrical/feature detail already on the page

### Requirement: Mission-support section

The storefront SHALL include a section stating that purchasing funds open hardware development and that the design files remain free under CERN OHL-S.

#### Scenario: Purchase-funds-open message is present

- **WHEN** a visitor reads the storefront
- **THEN** copy is present explaining that buying supports open hardware and that the files stay free and open

### Requirement: FAQ

The storefront SHALL include a short FAQ that addresses common buyer skepticism (for example why buy the open version, what "open" means here, kit versus assembled, support/warranty, and why the chosen seller).

#### Scenario: FAQ answers skeptical questions

- **WHEN** a visitor scrolls to the FAQ
- **THEN** direct answers to common objections are present, without deferring every answer to an external link

### Requirement: Reusable, brand-consistent layout

The storefront layout SHALL be defined so it can be applied to more than one product (Open Telegraph first), driven by per-product data where the repo already uses data-driven content.

The storefront SHALL render in the site's existing brand design language (dark theme, gold accent, display/body type) and SHALL NOT adopt the reference page's white background, lifestyle photography, or approachable voice. Copy SHALL follow the site conventions, including no em-dashes.

#### Scenario: Applied to another product without rework

- **WHEN** a second product adopts the storefront
- **THEN** it reuses the same layout driven by that product's data, without a bespoke redesign

#### Scenario: Brand skin is preserved

- **WHEN** the storefront renders
- **THEN** it uses the site's dark editorial design language and voice, not the reference page's visual identity
