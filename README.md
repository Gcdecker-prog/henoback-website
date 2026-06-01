# HenoBack Office — Website Redesign

Clean, lightweight marketing site for [henobackoffice.com](https://henobackoffice.com), built with **Next.js 14**, **TypeScript**, and **Tailwind**. Visual system follows [IFI Professionals](https://ifi-website.vercel.app); content migrates from the live WordPress site.

| Item | Value |
|------|--------|
| Vercel project | `henoback-website` |
| Internal slug | `henoback-www` |
| Product name | HenoBack Office |
| Legal footer | Heno BackOffice Services |
| Brand accent | `#F27830` |

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Monorepo placement

When merging into `gtm-sales-engine`, copy this tree to `sites/henoback-website` and set the Vercel **Root Directory** to that path. Keep GTM admin work in a separate Cursor context.

## Migration strategy

**B → A:** Preview on `henoback-website.vercel.app` until sign-off, then point `henobackoffice.com` DNS to Vercel. Documented in `docs/CONTENT-IA.md`.

## Cursor

- Rule: `.cursor/rules/henoback-website.mdc`
- Kickoff prompt: see **Session kickoff** below

### Session kickoff (paste in new chat)

```
Project: HenoBack Office website redesign (henoback-website)
Goal: Replace henobackoffice.com with a clean, white, IFI-inspired Next.js marketing site — migrate real content, do not shrink the offer.
References: henobackoffice.com (content), ifi-website.vercel.app (layout)
Priority v1: Home, Services (9), Industries (9), Why Heno, Get Started
Constraints: CTAs → GTM (utm_source=henoback-www&utm_campaign=henoback_office), phone/email in chrome, no GTM admin in this site
Start by auditing gaps vs live site, then build — see docs/CONTENT-IA.md
```

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local dev |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |

## Vercel + Git deploy

Full checklist: **[docs/DEPLOY.md](docs/DEPLOY.md)**  
**Vercel import screen:** **[docs/VERCEL-FIRST-DEPLOY.md](docs/VERCEL-FIRST-DEPLOY.md)**  
GTM UTM funnel: **[docs/GTM-ATTRIBUTION.md](docs/GTM-ATTRIBUTION.md)**

### Vercel env (project `henoback-website`)

```
NEXT_PUBLIC_SITE_URL=https://henobackoffice.com
NEXT_PUBLIC_GTM_APP_URL=https://<your-gtm-production-host>
NEXT_PUBLIC_GTM_INTAKE_PATH=/intake
```

Every **Book a consultation** CTA uses `GtmOutboundButton` → GTM with `utm_source=henoback-www`, inbound campaign passthrough, and `landing_page`.
