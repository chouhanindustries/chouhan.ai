## ADDED Requirements

### Requirement: Waitlist module on the product page

The Open Telegraph product page SHALL present a waitlist module positioned prominently near the top of the page (below the hero), so a visitor arriving for the public launch immediately understands the product is coming and how to register interest.

The module SHALL include a headline, a one-line pitch, an email input, and a submit control labeled to express intent (for example "Join the waitlist" or "Notify me").

#### Scenario: Visitor sees the waitlist on load

- **WHEN** a visitor loads the Open Telegraph product page
- **THEN** a waitlist module with an email input and a submit control is visible near the top of the page, above the deep engineering sections

#### Scenario: Engineering story is preserved

- **WHEN** a visitor scrolls past the waitlist module
- **THEN** the existing product content (problem/approach, architecture, design specs, SDK, "built with Claude") remains present and unchanged in substance

### Requirement: Fulfillment honesty statement

The waitlist module SHALL include a short, plainly worded statement that no unit is for sale yet and that design files are published before units ship, so the waitlist never implies immediate purchase or delivery.

The statement SHALL NOT use em-dashes, per the site copy convention.

#### Scenario: Honesty line is present

- **WHEN** a visitor reads the waitlist module
- **THEN** copy is present stating the product is not yet shipping and that files are published before units ship

### Requirement: Tier teaser

The waitlist module or an adjacent section SHALL present the tier ladder as content: Bare PCB, Kit, Assembled with enclosure, and Custom/Bespoke.

The Custom/Bespoke tier SHALL be described as made-to-order and configurable (for example enclosure/finish choice, silkscreen personalization such as a callsign, and pre-populated expansion accessories), and SHALL be given visual weight consistent with a featured option rather than a footnote.

#### Scenario: All four tiers are shown

- **WHEN** a visitor views the tier teaser
- **THEN** Bare PCB, Kit, Assembled, and Custom/Bespoke tiers are each presented with a short description

#### Scenario: Custom tier is featured

- **WHEN** a visitor views the tier teaser
- **THEN** the Custom/Bespoke tier is presented as made-to-order and configurable, with visual prominence at least equal to the other tiers

### Requirement: Placeholder capture at launch

At launch the waitlist form MAY be a non-functional placeholder with no live capture backend. When no backend is wired, the form SHALL NOT silently discard a submission in a way that misleads the visitor into believing they were added to a list.

#### Scenario: Submitting the placeholder form

- **WHEN** a visitor submits the waitlist form while no capture backend is wired
- **THEN** the visitor is not shown a false confirmation of being added to a list (for example the control is disabled with a "coming soon" affordance, or the submission routes to an honest fallback)

#### Scenario: Backend arrives later without page rework

- **WHEN** a real capture destination is wired in a later phase
- **THEN** the visible waitlist module requires no structural redesign to become functional, only the submit behavior changes

### Requirement: Closing CTA is reframed, not removed

The page's closing "Get Involved" content (repository link, build log) SHALL remain on the page but SHALL be positioned as secondary trust and proof beneath the waitlist as the primary call to action.

#### Scenario: Repository and build log remain reachable

- **WHEN** a visitor reaches the end of the page
- **THEN** links to the GitHub repository and the build log are still present, presented as supporting proof rather than as the primary action
