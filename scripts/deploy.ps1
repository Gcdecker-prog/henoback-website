# HenoBack Office: validate, optional commit, push main -> Vercel (GitHub integration).
# Run from repo root:  .\deploy.cmd "Your commit message"
# Do NOT paste this file into a PowerShell prompt — $PSScriptRoot will be empty.
param([string] $Message)

$ErrorActionPreference = 'Stop'

function Get-RepoRoot {
  if ($PSScriptRoot) {
    return (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
  }
  if ($MyInvocation.MyCommand.Path) {
    $scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
    return (Resolve-Path (Join-Path $scriptDir '..')).Path
  }
  $gitRoot = git rev-parse --show-toplevel 2>$null
  if ($gitRoot) {
    return (Resolve-Path $gitRoot).Path
  }
  throw @'
Run deploy via the wrapper (not by pasting this script into PowerShell):

  .\deploy.cmd "Your commit message"

From repo root, with uncommitted changes.
'@
}

Set-Location (Get-RepoRoot)

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
if ($LASTEXITCODE -ne 0) { throw "Lint failed (exit $LASTEXITCODE)" }
npm run typecheck
if ($LASTEXITCODE -ne 0) { throw "Typecheck failed (exit $LASTEXITCODE)" }
npm run build
if ($LASTEXITCODE -ne 0) { throw "Build failed (exit $LASTEXITCODE)" }

Write-Host "`n==> push origin main" -ForegroundColor Cyan
git push origin main

Write-Host "`nDone. Vercel (henoback-website) deploys from GitHub." -ForegroundColor Green
