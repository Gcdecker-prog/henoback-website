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

1. On GitHub, create an **empty** repo named `henoback-website` (no README — you already have one locally).
2. Copy your **real** repo URL from GitHub (green **Code** button). It looks like:
   `https://github.com/ifi-professionals/henoback-website.git`  
   (your org/user name goes where `ifi-professionals` is — **not** the text `YOUR_GITHUB_USERNAME_OR_ORG`).

**Git Bash (MINGW64)** — you are already in the project if the prompt shows `heno-backoffice-website`:

```bash
git remote remove origin
git remote add origin https://github.com/<YOUR-REAL-ORG-OR-USER>/henoback-website.git
git push -u origin main
```

**PowerShell:**

```powershell
cd C:\dev\heno-backoffice-website
git remote remove origin
git remote add origin https://github.com/<YOUR-REAL-ORG-OR-USER>/henoback-website.git
git push -u origin main
```

**Common errors**

| Error | Fix |
|-------|-----|
| `src refspec main does not match any` | Run `git branch -M main` (local branch was `master`) |
| `failed to push` to `YOUR_ORG` | Use your real GitHub URL, not the doc placeholder |
| `remote origin already exists` | `git remote set-url origin https://github.com/...` |

---

## 2. Vercel project

Repo: **`Gcdecker-prog/henoback-website`** · branch **`main`**

Step-by-step for the import screen: **[VERCEL-FIRST-DEPLOY.md](./VERCEL-FIRST-DEPLOY.md)**

1. [vercel.com](https://vercel.com) → **Add New Project** → Import `Gcdecker-prog/henoback-website`
2. **Project name:** `henoback-website`
3. **Framework:** Next.js · **Root:** `./`
4. Expand **Environment Variables** → add table below → **Deploy**

### Environment variables (Production + Preview)

| Variable | First deploy | After custom domain (Production only) |
|----------|--------------|--------------------------------------|
| `NEXT_PUBLIC_SITE_URL` | `https://henoback-website.vercel.app` | `https://henobackoffice.com` |
| `NEXT_PUBLIC_GTM_APP_URL` | `https://gtm-sales-engine.vercel.app` | same |
| `NEXT_PUBLIC_GTM_INTAKE_PATH` | `/intake` | same |

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

## 6. Ongoing workflow (PowerShell ship)

```powershell
# Validate, build, commit, push main, production deploy
.\scripts\ship.ps1 -CommitMessage "Describe change" -Production

# Dry run (no commit/push/deploy)
.\scripts\ship.ps1 -DryRun -Production

# npm shortcuts
npm run ship:prod -- -CommitMessage "Describe change"
```

Feature branches: push and open PR → Vercel preview → merge to `main` → run ship on `main`.

Do **not** commit `.env.local` or set `CAMPAIGN_PLAYBOOK_ENABLED` on Vercel Production. See [SECURITY.md](./SECURITY.md).
