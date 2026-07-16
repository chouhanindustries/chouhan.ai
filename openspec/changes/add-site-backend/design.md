## Context

chouhan.ai is static Astro on Cloudflare Pages. The only interactive flows are the contact form and careers "Apply" (both `mailto:` today) and the planned waitlist (placeholder, per [[add-open-telegraph-waitlist]]). There is no server code in the repo. The company ethos ("own your stack" mirrors "own your hardware") argues for owning submission data; engineering pragmatism (one maintainer, hardware is the real work) argues against owning anything a specialist service does better. This design threads that: own the cheap, on-brand part (capture + data); rent or defer the tar-pit part (email deliverability); externalize commerce (Crowd Supply).

The backend surface is genuinely small:

```
   contact ─┐
   careers ─┼─▶ /api/contact  ─┐
   waitlist ─▶ /api/subscribe ─┼─▶ [spam gate] ─▶ D1 ─▶ notify
                               ┘                    │
                                          (later) send ← rented
```

## Goals / Non-Goals

**Goals:**
- Give form submissions an owned home (Cloudflare D1) via serverless endpoints, staying on the platform already in use.
- Keep the site static; add only functions, not a server or a framework.
- Resist spam from day one (public forms attract bots immediately).
- Never lose a submission silently or show a false confirmation.

**Non-Goals:**
- Email *sending* (confirmation, newsletter, broadcast). Consumer of `subscribers`, built later, likely rented.
- Commerce of any kind (Crowd Supply owns it).
- Accounts, sessions, auth, admin UI, dynamic pages.
- Migrating existing data (there is none).

## Decisions

**D1: Cloudflare Pages Functions for endpoints.** The site already deploys on Cloudflare Pages; Functions ship with it, no separate service, generous free tier, and they sit on the same domain (no CORS). Alternatives: a standalone Worker (more moving parts, separate deploy), a third-party form SaaS like Formspree/Basin (fast but the list lives on someone else's server, off-brand, monthly fee). Chosen for one-platform simplicity and data ownership.

**D2: Cloudflare D1 (SQLite) for storage.** Relational, queryable, exportable, native to Pages Functions via a binding. Two tables: `subscribers` (email, tier, source, created_at, status) and `messages` (name, email, topic, body, kind[contact|application], created_at). Alternative: KV (dead simple key/value) — rejected because we want to query/export and dedupe, which SQL does cleanly. D1 is still SQLite, so it stays light.

**D3: Own capture, rent/defer sending (the hybrid).** Deliverability (SPF/DKIM/DMARC, IP reputation, bounces, unsubscribe compliance) is a specialist problem. Owning the data is cheap; owning the SMTP is a tar pit. So this change stops at capture + operator notification. When the build log emails, a later change wires Buttondown or Resend reading from `subscribers`. Alternative: build sending now — rejected as scope creep into infra we do not want to run.

**D4: Turnstile + honeypot + rate limit for spam.** Turnstile is Cloudflare-native, free, privacy-friendly, and integrates with Functions. Honeypot catches naive bots cheaply; rate limiting caps abuse. Alternative: reCAPTCHA (Google, off-brand, heavier) — rejected.

**D5: Contact form moves from `mailto:` to `fetch` POST, with fallback.** The `mailto:` is replaced so submissions are captured, but a visible fallback email and an explicit error state remain so a failed/no-JS submission is never silently lost. Careers "Apply" routes through the same `/api/contact` with a `kind=application` tag rather than a second endpoint.

**D6: Operator notification on write.** Minimal: email the operator (via the same provider chosen for D3 when it lands) or post to a chat webhook. Until a send provider exists, a lightweight webhook (for example Discord/Slack) can carry notifications without standing up email. Keeps submissions from pooling unseen.

## Risks / Trade-offs

- **First server code in a static repo adds ops surface** (secrets, D1 binding, wrangler for local dev) → keep it to two small functions; document the Pages config; never commit secrets.
- **Spam despite the gate** → layered defense (Turnstile + honeypot + rate limit); D1 rows are cheap to prune.
- **Silent data loss on failure** → spec forbids false confirmation; require explicit error UI + fallback email.
- **Scope creep toward a real backend/newsletter** → Non-Goals are explicit; sending and commerce are separate changes.
- **Vendor concentration on Cloudflare** → acceptable; hosting is already Cloudflare, and D1 export keeps the data portable.
- **Local development friction** (Functions need `wrangler dev`, not just `astro dev`) → document the dual dev flow; forms can degrade gracefully in plain `astro dev`.

## Migration Plan

1. Define D1 schema + migration; create the D1 database and bind it to the Pages project.
2. Add `/api/subscribe` and `/api/contact` Functions with validation, Turnstile verification, honeypot, rate limiting, and operator notification.
3. Configure secrets (Turnstile keys, notification webhook/provider) in Pages env; never in the repo.
4. Wire the waitlist form ([[add-open-telegraph-waitlist]]) to `/api/subscribe`; wire the contact form and careers apply to `/api/contact`, replacing `mailto:` with `fetch` + success/error UI + fallback.
5. Verify: `npm run build`; exercise both forms against a preview deployment (Functions do not run in plain `astro dev`); confirm rows land in D1 and notifications fire; confirm bot/honeypot rejection.

Rollback: Functions are additive; reverting restores `mailto:` behavior. D1 data is independent and can be exported before teardown.

## Open Questions

- **Notification channel** until email sending exists: chat webhook (Discord/Slack) vs a minimal transactional email. Webhook is lower-setup.
- **D1 vs KV** is settled toward D1 (query/export/dedupe), but confirm no objection to SQL-in-a-binding.
- **Double opt-in**: not required to *capture*, but is required before *sending*. Confirm we defer it to the send change (and store a `status` column now so it is ready).
- **Careers attachments** (resume/portfolio files): the current flow is text-only via contact. If applications need file upload, that is a bigger surface (R2 storage) and should be its own decision — out of scope here unless flagged.
- Does the waitlist need per-tier interest captured now, or is a plain email enough for launch? Storing an optional `tier` column costs nothing.
