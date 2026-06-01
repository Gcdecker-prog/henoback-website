# Deploy — Git + Vercel (`henoback-website`)

## Architecture

| System | Vercel project | Domain (target) |
|--------|----------------|-------------------|
| Marketing site (this repo) | `henoback-website` | `henobackoffice.com` |
| GTM Sales Engine | `gtm-sales-engine` (separate) | Your GTM production URL |

UTMs on every CTA → GTM intake. See [GTM-ATTRIBUTION.md](./GTM-ATTRIBUTION.md).

---

## 1. GitHub (first time)

```bash
cd c:\dev\heno-backoffice-website
git add .
git commit -m "HenoBack Office marketing site — Next.js 14, GTM UTMs, SEO"
```

Create a repo (GitHub: `henoback-website` or monorepo `gtm-sales-engine` with root `sites/henoback-website`), then:

```bash
git remote add origin https://github.com/YOUR_ORG/henoback-website.git
git branch -M main
git push -u origin main
```

---

## 2. Vercel project

1. [vercel.com](https://vercel.com) → **Add New Project** → Import the Git repo.
2. **Project name:** `henoback-website`
3. **Framework:** Next.js (auto-detected)
4. **Root directory:** `.` (or `sites/henoback-website` if inside monorepo)
5. **Build command:** `npm run build`
6. **Output:** default (Next.js)

### Environment variables (Production + Preview)

| Variable | Production example | Purpose |
|----------|-------------------|---------|
| `NEXT_PUBLIC_SITE_URL` | `https://henobackoffice.com` | Canonical URLs, sitemap, OG |
| `NEXT_PUBLIC_GTM_APP_URL` | `https://gtm-sales-engine.vercel.app` | CTA links to intake |
| `NEXT_PUBLIC_GTM_INTAKE_PATH` | `/intake` | Optional if GTM path differs |

Preview deployments: set `NEXT_PUBLIC_SITE_URL` to `https://henoback-website.vercel.app` or use Vercel’s auto URL in project settings.

---

## 3. Custom domain

Vercel project → **Settings → Domains** → Add `henobackoffice.com` and `www.henobackoffice.com`.

Update DNS at your registrar (Vercel shows exact records). After verification, set **primary** domain and redirect `www` → apex (or vice versa).

Then set production `NEXT_PUBLIC_SITE_URL=https://henobackoffice.com` and redeploy.

---

## 4. GTM UTM funnel (verify after deploy)

1. Open `https://henobackoffice.com/?utm_medium=test&utm_campaign=test_campaign`
2. Click **Book a consultation**
3. GTM intake URL should include:
   - `utm_source=henoback-www` (always)
   - `utm_medium=test`
   - `utm_campaign=test_campaign`
   - `utm_content=…` (CTA id, e.g. `book-consultation` or `home-consultation`)
   - `landing_page=/` (or first page visited)

Confirm GTM admin reads these fields on lead create.

---

## 5. SEO checklist (post-deploy)

- [ ] `https://henobackoffice.com/robots.txt` allows crawl
- [ ] `https://henobackoffice.com/sitemap.xml` lists all routes
- [ ] Google Search Console: add property, submit sitemap
- [ ] Rich Results Test on home + one case study page

---

## 6. Ongoing workflow

```bash
git checkout -b feature/your-change
# edit, npm run dev, npm run build
git commit -am "Describe change"
git push -u origin feature/your-change
```

Open PR → Vercel preview URL → merge to `main` → production deploy.

Do **not** commit `.env.local` or secrets.
