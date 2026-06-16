# Security — public marketing site

## What must never be public

| Item | Handling |
|------|----------|
| `.env.local` / API keys | Gitignored; set only in Vercel dashboard |
| `/campaigns` UTM playbook | **404 in production** unless `CAMPAIGN_PLAYBOOK_ENABLED=true` (server-only, never on Vercel Production) |
| GTM admin / Supabase | Lives in GTM Sales Engine repo only |
| Internal docs (`docs/`) | Not served by Next.js; repo-only |

## Production checklist (Vercel)

- [ ] **Do not** set `CAMPAIGN_PLAYBOOK_ENABLED` on Production
- [ ] Set `NEXT_PUBLIC_SITE_URL=https://henobackoffice.com`
- [ ] Set `NEXT_PUBLIC_GTM_APP_URL` to production GTM host
- [ ] Confirm `/campaigns` returns 404 on live domain
- [ ] Confirm `robots.txt` disallows `/campaigns`

## Deploy

```powershell
npm run deploy
# or with a custom message:
.\deploy.cmd "Your message"
```

Runs lint, typecheck, build (playbook disabled), commits, pushes `main`, and triggers Vercel production.
