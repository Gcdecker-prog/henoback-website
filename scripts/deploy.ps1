# HenoBack Office: validate, optional commit, push main -> Vercel (GitHub integration).
param([string] $Message)

$ErrorActionPreference = 'Stop'
Set-Location (Resolve-Path (Join-Path $PSScriptRoot '..'))

$branch = git branch --show-current
if ($branch -ne 'main') {
  throw "Deploy from main (current: $branch)"
}

if (git status --porcelain) {
  if (-not $Message) {
    throw 'Uncommitted changes. Run: .\deploy.cmd "Your commit message"'
  }
  git add -A
  git commit -m $Message
}

Write-Host "`n==> lint + typecheck + build" -ForegroundColor Cyan
npm run lint
npm run typecheck
npm run build

Write-Host "`n==> push origin main" -ForegroundColor Cyan
git push origin main

Write-Host "`nDone. Vercel (henoback-website) deploys from GitHub." -ForegroundColor Green
