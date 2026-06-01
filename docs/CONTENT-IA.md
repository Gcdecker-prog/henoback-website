# HenoBack Office — Content & IA alignment

**Status:** Scaffold / audit (v0). Live site is the content brief; this doc tracks migration before full page builds.

## Migration strategy

| Phase | Approach |
|-------|----------|
| **Now (B)** | Deploy to Vercel `henoback-website` preview; stakeholders review |
| **Launch (A)** | Point `henobackoffice.com` DNS to Vercel when approved |

Avoid hybrid (new home linking to WordPress deep pages) unless deadline forces it.

## Brand alignment

| Use case | String |
|----------|--------|
| Product name | HenoBack Office |
| Legal footer | Heno BackOffice Services |
| Parent | IFI Professionals · Heno platform |
| Legacy header (WordPress) | HENO BackOffice Solutions — retire on cutover, not mixed in new UI |

## v1 page list (priority)

| # | Route | Live equivalent | v0 scaffold |
|---|-------|-----------------|-------------|
| 1 | `/` | Home | Hero + proof + services/industries preview |
| 2 | `/services` | Services hub + 9 detail pages | Grid from `lib/content/services.ts` |
| 3 | `/industries` | Industries hub | Grid from `lib/content/industries.ts` |
| 4 | `/why-heno` | Why + About overlap | Jim French block, 20+ years, US-based |
| 5 | `/get-started` | Get Started | CTA → GTM intake + assessment |
| 6 | `/customers` | Customers / social proof | Testimonials TBD from live |
| — | `/case-studies` | Blog case studies | Wave 2 (TWO Capital, Linea, Hammer) |

## Gap checklist (live vs scaffold)

| Live site has | Scaffold (this repo) |
|---------------|----------------------|
| 9 service offerings | ✅ Data in `lib/content/services.ts`; pages TBD |
| 9 industries | ✅ Data in `lib/content/industries.ts`; pages TBD |
| Why Heno / Customers | Routes stubbed in nav; pages TBD |
| Case studies / blog | Wave 2 |
| Phone + email prominent | ✅ Header + footer |
| Professional services positioning | ✅ Copy in `site-config` + hero |
| GTM intake CTA | ✅ `lib/gtm-links.ts` + UTMs |

## CTAs

- **Book a consultation** → `{GTM_APP}/intake?utm_source=henoback-www&utm_campaign=henoback_office`
- **Take the assessment** → `{GTM_APP}/journeys/outsource` (same UTMs)

## Env (Vercel `henoback-website`)

```
NEXT_PUBLIC_SITE_URL=https://henoback-website.vercel.app
NEXT_PUBLIC_GTM_APP_URL=https://<your-gtm-production-host>
```

## Monorepo note

When syncing into `gtm-sales-engine`, place this tree at `sites/henoback-website` and set Vercel root directory accordingly. This workspace (`heno-backoffice-website`) can stay the Cursor “HenoBack Office — Website Redesign” folder until merged.

## Next build order (after sign-off)

1. Home — full sections (hero, trust, services teaser, industries teaser, founder, CTA band)
2. Services index + optional `/services/[slug]` from content lib
3. Industries index
4. Why Heno / About
5. Get Started
6. Customers + case studies (wave 2)
