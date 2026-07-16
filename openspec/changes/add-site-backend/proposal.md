## Why

chouhan.ai is a fully static Astro site with no backend: the contact form and the careers "Apply" flow only build a `mailto:`, and the planned Open Telegraph waitlist ([[add-open-telegraph-waitlist]]) ships as a non-functional placeholder. A `mailto:` builds no list, loses submissions the moment a visitor lacks a configured mail client, and cannot power the "follow the build" newsletter the waitlist promises. We need a minimal, owned place for form submissions to land, so the public launch captures real demand.

This is deliberately scoped as a **thin capture layer**, not a backend rewrite. The site stays static, commerce stays external (Crowd Supply owns payments and fulfillment), and email *sending* is left rentable. "Own your stack" is applied where it is cheap and on-brand (owning the data), not where it is a tar pit (owning email deliverability).

## What Changes

- Add **Cloudflare Pages Functions** as write endpoints for form submissions (the site already deploys on Cloudflare Pages, so this stays in one platform).
  - `POST /api/subscribe`: waitlist + build-log signups (email, optional tier interest).
  - `POST /api/contact`: contact and careers messages (name, email, topic, message), replacing the `mailto:` behavior.
- Add a **Cloudflare D1 (SQLite)** database as owned storage, with `subscribers` and `messages` tables.
- Add a **spam/abuse gate**: Cloudflare Turnstile on public forms, plus a honeypot field and basic rate limiting.
- Add a **signup/message notification** to the operator (email or chat ping) so submissions are not silently pooled.
- Wire the existing **contact form** and the **waitlist placeholder** to these endpoints; the waitlist form stops being a placeholder. **BREAKING (behavioral)**: contact form no longer opens the user's mail client; it posts to the endpoint. A no-JS / failure fallback is required.

Explicitly **out of scope** (separate later changes):

- Email *sending* to the list (double opt-in confirmation, broadcast/newsletter). Rent this (Buttondown/Resend) when the build log actually emails. Noted here only as the downstream consumer of `subscribers`.
- Any commerce: cart, checkout, payments, inventory, fulfillment. Owned by Crowd Supply.
- Accounts, sessions, auth, or dynamic page rendering. The site stays static.

## Capabilities

### New Capabilities

- `form-capture`: Public forms submit to owned server endpoints that validate input, resist spam, persist to a database, and notify the operator, with graceful degradation when scripting or the network fails.

### Modified Capabilities

<!-- None. The product-waitlist capability ([[add-open-telegraph-waitlist]]) defines the waitlist UI and explicitly allows a placeholder submit; this change satisfies its "backend arrives later" scenario but does not alter that spec's requirements. No existing capability specs live in openspec/specs/ yet. -->

## Impact

- **New runtime surface**: `functions/` (Cloudflare Pages Functions) — the first server-side code in the repo. Build/deploy: Pages Functions deploy automatically with the Pages project; local dev needs `wrangler`.
- **New dependency**: Cloudflare D1 binding + Turnstile keys (site + secret) configured in the Pages project; an email/notification provider key if notifications go out by email.
- **Pages**: `src/pages/contact.astro` (add Turnstile widget + honeypot), `src/pages/products/open-telegraph.astro` (waitlist form points at `/api/subscribe`).
- **Script**: `src/scripts/site.js` (contact form posts via `fetch` instead of building a `mailto:`; needs success/error UI and a no-JS fallback).
- **Config**: `wrangler`/Pages settings, D1 schema/migration file, environment secrets. Secrets never committed.
- **Principle check**: still static-first; owns data, rents send, external commerce. Release policy unaffected.
