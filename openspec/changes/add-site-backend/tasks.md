## 1. Storage (D1)

- [ ] 1.1 Create the D1 database and bind it to the Cloudflare Pages project
- [ ] 1.2 Write the schema/migration: `subscribers` (email, tier, source, status, created_at) and `messages` (name, email, topic, body, kind, created_at)
- [ ] 1.3 Add a unique constraint / upsert strategy on `subscribers.email` for dedupe

## 2. Endpoints (Pages Functions)

- [ ] 2.1 Scaffold `functions/api/subscribe.js` (POST): parse, validate email, dedupe-safe insert
- [ ] 2.2 Scaffold `functions/api/contact.js` (POST): parse, validate, insert with `kind` = contact|application
- [ ] 2.3 Return clear JSON success/error responses (no false success on failure)

## 3. Spam and abuse gate

- [ ] 3.1 Add Cloudflare Turnstile keys to Pages env (secret not committed) and verify the token server-side in both endpoints
- [ ] 3.2 Add a honeypot field to both forms and reject filled submissions
- [ ] 3.3 Add basic rate limiting per endpoint

## 4. Notifications

- [ ] 4.1 Decide the notification channel (chat webhook vs transactional email) per design Open Questions
- [ ] 4.2 Fire a notification to the operator on each new subscriber and message

## 5. Wire the forms

- [ ] 5.1 Point the Open Telegraph waitlist form at `/api/subscribe` (replace the placeholder from add-open-telegraph-waitlist); add Turnstile + honeypot
- [ ] 5.2 Convert the contact form in `src/scripts/site.js` from `mailto:` to a `fetch` POST to `/api/contact`; add success/error UI
- [ ] 5.3 Add a visible fallback (contact email) and a no-JS/failure path so submissions are never silently lost
- [ ] 5.4 Route careers "Apply" through `/api/contact` with `kind=application`
- [ ] 5.5 Add the Turnstile widget + honeypot to the contact page markup

## 6. Config and secrets

- [ ] 6.1 Document the Cloudflare Pages setup (D1 binding, Turnstile keys, notification secret) in the repo without committing secret values
- [ ] 6.2 Document the local dev flow (`wrangler` for Functions vs `astro dev` for static), including how forms degrade under plain `astro dev`

## 7. Verification

- [ ] 7.1 `npm run build` succeeds
- [ ] 7.2 On a preview deployment, submit both forms; confirm rows land in D1 and notifications fire
- [ ] 7.3 Confirm bot rejection: missing/invalid Turnstile token and filled honeypot are both blocked
- [ ] 7.4 Confirm failure UX: a forced endpoint error shows an error state and fallback, not a false confirmation

## 8. Deferred (separate later changes, do NOT build here)

- [ ] 8.1 Email sending: double opt-in confirmation + build-log/newsletter broadcast reading from `subscribers` (rent Buttondown/Resend)
- [ ] 8.2 Careers file uploads (resume/portfolio) via R2, if applications need attachments
- [ ] 8.3 Any commerce (owned by Crowd Supply, not this site)
