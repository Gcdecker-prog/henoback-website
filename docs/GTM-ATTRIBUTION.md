# GTM attribution — marketing site vs GTM engine

## Why this split is professional

| Layer | Role | Host |
|-------|------|------|
| **HenoBack website** (`henoback-website`) | Brand, trust, SEO, full offer (9 services, 9 industries), word-for-word content | Vercel → `henobackoffice.com` |
| **GTM Sales Engine** | Intake forms, assessments, lead capture, pipeline, **UTM analytics** | Separate Vercel app |

This is standard practice: marketing owns the story; ops owns conversion and attribution. The site stays fast and static; GTM stays the system of record for leads and campaigns.

## Link flow

```
Campaign email/ad  →  henobackoffice.com/about-us?utm_medium=linkedin&utm_campaign=q1
         ↓ (middleware stores UTMs + landing_page in cookies)
              CTA: Book a consultation
         ↓ (GtmOutboundButton merges cookies + URL into href)
    {GTM_APP}/intake?utm_source=henoback-www&utm_campaign=q1&utm_medium=linkedin
      &utm_content=header-cta&landing_page=/about-us
         ↓
              GTM records lead with full attribution
```

**Always set on handoff:** `utm_source=henoback-www`  
**Forwarded when present:** `utm_medium`, `utm_term`, `utm_campaign` (inbound overrides default `henoback_office`)  
**Per CTA:** `utm_content` (e.g. `header-cta`, `footer-link`, `case-study-two-capital-consultation`)  
**First page visited:** `landing_page` (e.g. `/services/bookkeeping`)

## Default UTMs (every outbound GTM link)

| Param | Value | Meaning |
|-------|--------|---------|
| `utm_source` | `henoback-www` | Traffic originated on this marketing site |
| `utm_campaign` | `henoback_office` | Brand / product campaign bucket |

## Optional params (per link or campaign)

| Param | Example | Use |
|-------|---------|-----|
| `utm_medium` | `email`, `linkedin`, `paid` | Channel |
| `utm_content` | `about-us-get-started`, `hero-primary` | Page + CTA for reporting |
| `utm_campaign` | `q1_consulting_push` | Override default for a specific initiative |
| `utm_term` | `cfo-outsourcing` | Paid keyword (if needed) |

Implemented in `lib/gtm-links.ts` via `gtmAppUrl()`, `consultationIntakeUrl()`, `pageCtaUrl()`.

## Campaign URLs on this site

Use **this site’s URLs** in ads and email (not GTM URLs directly):

- `https://henobackoffice.com/` (or preview)
- `https://henobackoffice.com/about-us`
- `https://henobackoffice.com/services/bookkeeping`

Add **your own** `utm_*` on inbound links if the channel requires it (e.g. `?utm_medium=linkedin`). CTAs **out** to GTM always include `henoback-www` + `henoback_office` so GTM can attribute the handoff.

## Env

```
NEXT_PUBLIC_GTM_APP_URL=https://<production-gtm-host>
```

## Do not

- Embed GTM admin, Supabase, or form logic in this repo
- Hardcode production GTM URLs in components (use env + `lib/gtm-links.ts` only)
