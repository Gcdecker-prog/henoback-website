# Vercel first deploy — `henoback-website`

Use this on the **New Project** screen (import `Gcdecker-prog/henoback-website`).

## Screen settings (before Deploy)

| Field | Value |
|-------|--------|
| Project Name | `henoback-website` |
| Framework Preset | **Next.js** |
| Root Directory | `./` |
| Build Command | `npm run build` (default) |
| Install Command | `npm install` (default) |

## Environment variables — expand **before** Deploy

Add all three for **Production** and **Preview** (click each row → check both environments).

| Name | Value (first deploy) |
|------|----------------------|
| `NEXT_PUBLIC_SITE_URL` | `https://henoback-website.vercel.app` |
| `NEXT_PUBLIC_GTM_APP_URL` | `https://gtm-sales-engine.vercel.app` |
| `NEXT_PUBLIC_GTM_INTAKE_PATH` | `/intake` |

After you add custom domain `henobackoffice.com`, change **Production** only:

| Name | Production (later) |
|------|-------------------|
| `NEXT_PUBLIC_SITE_URL` | `https://henobackoffice.com` |

Then **Redeploy** production so sitemap, canonicals, and OG tags use the real domain.

## Click Deploy

Wait for build to finish (~1–2 min). Open the deployment URL.

## Smoke test (2 minutes)

1. Home page loads, images show, glass hero animates.
2. Click **Book a consultation** → should open GTM intake with:
   - `utm_source=henoback-www`
   - `utm_campaign=henoback_office`
   - `utm_content=header-cta` (or similar)
3. Visit `/sitemap.xml` and `/robots.txt` on the Vercel URL.

## Optional: rename Vercel project display

Project **Settings → General** → name stays `henoback-website` (matches GTM admin “Website (Vercel)”).

## Custom domain (when ready)

**Settings → Domains** → Add `henobackoffice.com` → follow DNS → update `NEXT_PUBLIC_SITE_URL` → redeploy.

See [DEPLOY.md](./DEPLOY.md) for full workflow.
