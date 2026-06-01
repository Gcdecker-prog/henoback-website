# Landing pages & UTM funnel (2027 pattern)

## Where leads are tracked

| System | Role |
|--------|------|
| **This site** (`henoback-website`) | Landing surfaces, trust, SEO. Captures inbound UTMs in cookies. |
| **GTM Sales Engine** | Intake, assessment, CRM, **database of record** for leads. |

There is **no lead database in this repo** — by design. Attribution flows **out** on every CTA click.

## How it works

1. **Campaign link** points at a page on this site, not GTM directly:
   `https://henobackoffice.com/services?utm_medium=linkedin&utm_campaign=q1_consulting`
2. **Middleware** (`middleware.ts`) stores `utm_medium`, `utm_campaign`, `utm_term`, and first `landing_page` in cookies (90 days).
3. Visitor clicks **Book a consultation** → `GtmOutboundLink` merges cookies + current path into the GTM URL.
4. **GTM** receives `utm_source=henoback-www`, your campaign params, `utm_content` (which button), and `landing_page`.

## Landing pages = normal routes

Every hub and detail page is a valid landing surface. Registry: `lib/landing-pages.ts`.

**Do** use clean paths in ads (`/about-us`, `/services/bookkeeping`).  
**Don’t** send paid traffic straight to GTM `/intake` — you lose the marketing story and split analytics.

## Internal playbook (copy URLs)

- **Local only:** `CAMPAIGN_PLAYBOOK_ENABLED=true` in `.env.local`, then `/campaigns`.
- **Production:** route returns **404** (not linked, `noindex`, `robots` disallow). Never set `CAMPAIGN_PLAYBOOK_ENABLED` on Vercel Production.

## Reporting in GTM

Filter leads by:

- `utm_source` = `henoback-www` (always from this site)
- `utm_campaign` / `utm_medium` (your initiative)
- `utm_content` (which CTA fired)
- `landing_page` (first path visited on this site)

See also `docs/GTM-ATTRIBUTION.md`.
