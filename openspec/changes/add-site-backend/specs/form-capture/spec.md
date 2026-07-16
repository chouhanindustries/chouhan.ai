## ADDED Requirements

### Requirement: Waitlist submissions are persisted

The system SHALL provide a server endpoint that accepts a waitlist signup (at minimum an email address, optionally a tier interest) and persists it to owned storage.

The endpoint SHALL validate that the email is well-formed and SHALL reject submissions that fail validation with a client error, without persisting them.

#### Scenario: Valid signup is stored

- **WHEN** a visitor submits a well-formed email to the waitlist endpoint
- **THEN** the email (and any tier interest) is written to the `subscribers` store and the visitor receives a success response

#### Scenario: Malformed email is rejected

- **WHEN** a submission contains a malformed or empty email
- **THEN** the endpoint returns a client error and nothing is written to storage

#### Scenario: Duplicate signup does not create noise

- **WHEN** an email that already exists is submitted again
- **THEN** the visitor still receives a success response and the store does not create a misleading duplicate active record

### Requirement: Contact and careers submissions are persisted

The system SHALL provide a server endpoint that accepts a contact message (name, email, topic, message) and persists it to owned storage, serving both the contact form and the careers "Apply" flow.

#### Scenario: Contact message is stored

- **WHEN** a visitor submits a complete contact form
- **THEN** the message is written to the `messages` store and the visitor receives a success response

#### Scenario: Careers apply reuses the contact endpoint

- **WHEN** a candidate applies via the careers flow
- **THEN** the submission is captured through the same contact endpoint, tagged so applications are distinguishable from general messages

### Requirement: Spam and abuse resistance

Public form endpoints SHALL be protected against automated abuse using a challenge (Cloudflare Turnstile), a honeypot field, and basic rate limiting.

Submissions that fail the challenge or trip the honeypot SHALL be rejected without persisting.

#### Scenario: Bot submission is blocked

- **WHEN** a submission arrives without a valid Turnstile token or with the honeypot field filled
- **THEN** the endpoint rejects it and nothing is written to storage

#### Scenario: Legitimate submission passes

- **WHEN** a human completes the form and the challenge
- **THEN** the submission is accepted and persisted

### Requirement: Operator is notified of submissions

The system SHALL notify the operator when a submission is captured, so submissions are not silently pooled in the database.

#### Scenario: New signup notifies the operator

- **WHEN** a new waitlist signup or contact message is persisted
- **THEN** a notification is delivered to the operator (for example email or a chat message)

### Requirement: Graceful degradation without scripting or network

Forms SHALL communicate outcome clearly and SHALL NOT silently lose a submission when scripting is disabled or the request fails.

#### Scenario: Endpoint failure is surfaced

- **WHEN** the submission request fails (network or server error)
- **THEN** the visitor sees an error state and a fallback path (for example a visible contact email), not a false success

#### Scenario: No false confirmation

- **WHEN** a submission is not successfully persisted for any reason
- **THEN** the visitor is not shown a "you're on the list" style confirmation

### Requirement: Owned storage boundary

Captured data SHALL reside in storage the operator controls (Cloudflare D1), and secrets (API keys, Turnstile secret) SHALL NOT be committed to the repository.

The operator SHALL be able to retrieve captured records (for example query or export) without a third-party account owning the list.

#### Scenario: Data is exportable by the operator

- **WHEN** the operator needs the current subscriber or message list
- **THEN** the records can be queried or exported directly from the owned database
