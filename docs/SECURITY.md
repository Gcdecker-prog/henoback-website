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

## Ship script

```powershell
.\scripts\ship.ps1 -CommitMessage "Your message" -Production
```

Builds with playbook disabled, pushes `main`, triggers Vercel production.
