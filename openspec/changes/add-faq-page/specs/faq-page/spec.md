## ADDED Requirements

### Requirement: Public FAQ page exists and is reachable

The site SHALL provide a public FAQ page at a stable URL (`/faq.html`), linked from the site navigation and footer.

#### Scenario: FAQ is reachable from the chrome

- **WHEN** a visitor uses the nav or footer
- **THEN** a link leads to the FAQ page, which loads with the shared site layout

### Requirement: The cloning/moat question is answered crisply

The FAQ SHALL answer "if everything is open, what stops someone from cloning you cheaper?" as a prominent entry. The answer SHALL state that the designs are open by choice and that the moat is manufacturing execution, canonical-source trust, the reciprocal CERN OHL-S license, and community velocity. The answer SHALL NOT claim that openness itself is the moat.

#### Scenario: Moat answer is present and correctly framed

- **WHEN** a visitor reads the cloning question
- **THEN** the answer names manufacturing, trust/canonical source, license reciprocity, and community as the moat, and frames openness as the strategy rather than the moat

### Requirement: Business-model, market, product-rationale, competition, and manufacturing questions are covered

The FAQ SHALL include answers to: how the company makes money; the market opportunity; why the Telegraph exists; how it competes with industry leaders; why it manufactures in-house; and whether the segment is too small.

Answers SHALL be honest about trade-offs (for example hardware margins and the capital cost of in-house manufacturing) rather than only optimistic.

#### Scenario: Core questions are all answered

- **WHEN** a visitor scans the FAQ
- **THEN** each of the business-model, market, why-Telegraph, competition, in-house-manufacturing, and segment-size questions has a direct answer

#### Scenario: Trade-offs are acknowledged

- **WHEN** a visitor reads the money and manufacturing answers
- **THEN** the honest cost side (hardware margins, capital intensity of in-house production) is acknowledged, not hidden

### Requirement: No fabricated, false, or private content

Answers SHALL NOT contain fabricated or unverifiable numbers, and SHALL NOT include the false "ten years of process knowledge" framing (the company was founded in 2025). Any market-size or numeric claim SHALL be sourced or framed qualitatively. The FAQ SHALL NOT publish private fundraise details (raise amount, round milestones, or precise traction counts).

#### Scenario: Numeric claims are sourced or qualitative

- **WHEN** a market-size or other numeric claim appears
- **THEN** it is attributed to a credible source or expressed qualitatively, never invented

#### Scenario: No false tenure or private figures

- **WHEN** the FAQ is reviewed
- **THEN** it contains no claim of process-knowledge tenure predating the 2025 founding, and no private fundraise figures

### Requirement: Consumer-facing basics are included

The FAQ SHALL include plain consumer-facing answers covering what "open" means here, whether a buyer can build it themselves, and how support and repair work.

#### Scenario: A consumer gets practical answers

- **WHEN** a non-investor visitor reads the FAQ
- **THEN** they find practical answers about openness, self-build, support, and repair

### Requirement: Brand voice and formatting

The FAQ SHALL use the site's understated, precise voice and SHALL NOT use em-dashes. Competitor and precedent references (for example Prusa, Arduino, the partially-open Raspberry Pi, and consumable-locked incumbents) SHALL be represented accurately.

#### Scenario: Voice and accuracy hold

- **WHEN** the FAQ copy is reviewed
- **THEN** it reads in the site voice with no em-dashes, and precedent/competitor claims are factually accurate (Raspberry Pi is described as only partially open)
