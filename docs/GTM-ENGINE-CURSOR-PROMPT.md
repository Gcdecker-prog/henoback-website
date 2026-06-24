# GTM Sales Engine — Cursor prompt (copy/paste)

Use this in the **gtm-sales-engine** repo (not the marketing site). It aligns the engine with HenoBack marketing handoffs.

---

## Prompt

```
You are working on the GTM Sales Engine — the conversion layer for Heno BackOffice marketing.

## Architecture (do not change)

- **Marketing site** (separate repo: heno-backoffice-website): brand, SEO, story only. No forms, no lead DB.
- **This app** (GTM Sales Engine): role picker, maturity assessment, intake forms, lead capture, CRM, attribution.

All leads enter through this app. The marketing site only links out with UTMs.

## Production URLs

| Environment | Marketing site | GTM app |
|-------------|----------------|---------|
| Staging | henoback-website preview on Vercel | https://gtm-sales-engine.vercel.app |
| Production | henobackoffice.com (or www.ifiprofessionals.com) | https://go.ifiprofessionals.com |

## Tasks

### 1. Custom domain on Vercel

- Add `go.ifiprofessionals.com` to this Vercel project (Settings → Domains).
- DNS: CNAME `go` → Vercel target (e.g. `cname.vercel-dns.com`). Do NOT change MX on root — email stays on ifiprofessionals.com.
- Keep `gtm-sales-engine.vercel.app` for staging.

### 2. Canonical assessment entry path

Marketing site sends assessment traffic to:

`{GTM_ORIGIN}{NEXT_PUBLIC_GTM_ASSESSMENT_PATH}`

Currently configured as **`/`** — the role picker (“Which best describes you?”) at app root.

Requirements:
- `/` must remain the primary assessment entry (or redirect `/journeys/outsource` → `/` if legacy links exist).
- Do not break deep links to in-progress journeys.
- Document the canonical path in README.

### 3. UTM contract (inbound from marketing)

Every link from the marketing site includes:

| Param | Value | Notes |
|-------|--------|-------|
| `utm_source` | `henoback-www` | Always set on handoff |
| `utm_campaign` | `henoback_office` | Default; may be overridden by inbound campaign |
| `utm_medium` | optional | e.g. `linkedin`, `email`, `paid` |
| `utm_content` | per CTA | e.g. `header-assessment`, `hero-maturity-snapshot-usually-one`, `get-started-assessment` |
| `utm_term` | optional | paid keywords |
| `landing_page` | path | First marketing page visited, e.g. `/services/bookkeeping` |

**Implement:**
1. On first page load, read query params and persist in session (or localStorage) for the assessment/intake session.
2. Do not drop params on client-side navigation within the app.
3. On form submit / lead create, attach all attribution fields to the lead record (DB + CRM if applicable).
4. If params are missing, still allow completion — attribution is best-effort, not blocking.

### 4. Intake path

Marketing consultation CTAs use `/intake` with `utm_content` like `get-started-consultation`, `footer-link` (if consultation), etc.

Ensure `/intake` receives the same attribution persistence as assessment.

### 5. Visual alignment (light touch)

The marketing hero shows a micro “back office reality check” teaser; full assessment is this app’s role picker + journey.

Optional polish only — do not clone the marketing site:
- Match Heno palette: navy `#1B365D`, orange `#F27830`, neutral grays.
- Trust line under CTA: “Takes 3 minutes · Free · No commitment required” (already on role picker).
- No new dependencies unless necessary.

### 6. Acceptance criteria

- [ ] `go.ifiprofessionals.com` serves the app with valid SSL.
- [ ] Visiting `/?utm_source=henoback-www&utm_campaign=henoback_office&utm_content=header-assessment&landing_page=/` shows role picker; params survive through assessment completion.
- [ ] Submitted lead includes: utm_source, utm_campaign, utm_medium (if any), utm_content, utm_term (if any), landing_page.
- [ ] Staging URL still works for QA.
- [ ] No forms or lead logic added to the marketing repo.

## Out of scope

- Marketing site content or components.
- Changing email/DNS on root domain beyond the `go` CNAME.
- Embedding admin dashboards in the marketing site.

## Reference

Marketing repo documents the outbound link contract in `docs/GTM-ATTRIBUTION.md` and builds URLs in `lib/gtm-links.ts`. Keep param names identical.
```

---

## After GTM work

On the **marketing site** Vercel project, set:

```
NEXT_PUBLIC_GTM_APP_URL=https://go.ifiprofessionals.com
NEXT_PUBLIC_GTM_ASSESSMENT_PATH=/
NEXT_PUBLIC_GTM_INTAKE_PATH=/intake
```

Smoke-test from production marketing:
- Header “See Your Maturity” → role picker with UTMs
- `/get-started` primary card → same
- Hero snapshot CTA → same with `utm_content=hero-maturity-snapshot-{optionId}`
