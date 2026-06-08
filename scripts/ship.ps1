<#
.SYNOPSIS
  Ship HenoBack marketing site: validate, build, push to GitHub, production deploy on Vercel.

.PARAMETER CommitMessage
  If set, stages and commits all changes before push.

.PARAMETER AutoCommit
  With -Production: commit all changes using deploy: yyyy-MM-dd HH:mm when -CommitMessage is omitted.

.PARAMETER SkipBuild
  Skip lint, typecheck, and npm run build.

.PARAMETER Production
  Require main branch; push and run vercel deploy --prod when CLI is installed.

.PARAMETER DryRun
  Show actions without commit, push, or deploy.

.EXAMPLE
  .\scripts\ship.ps1 -CommitMessage "Launch v1" -Production
#>
[CmdletBinding()]
param(
  [string] $CommitMessage,
  [switch] $AutoCommit,
  [switch] $SkipBuild,
  [switch] $Production,
  [switch] $DryRun
)

$ErrorActionPreference = 'Stop'

function Get-ScriptsRoot {
  if (-not [string]::IsNullOrWhiteSpace($PSScriptRoot)) { return $PSScriptRoot }
  $invoked = $MyInvocation.MyCommand.Path
  if (-not [string]::IsNullOrWhiteSpace($invoked)) { return Split-Path -Parent $invoked }
  $cwd = (Get-Location).Path
  $fromRepo = Join-Path $cwd 'scripts'
  if (Test-Path (Join-Path $fromRepo 'ship.ps1')) { return $fromRepo }
  if (Test-Path (Join-Path $cwd 'ship.ps1')) { return $cwd }
  throw @"
Run ship.ps1 as a file — do not paste into PowerShell.

  deploy.cmd ""Your commit message""
  npm run deploy
  .\scripts\ship.ps1 -Production -AutoCommit
"@
}

$Root = Resolve-Path (Join-Path (Get-ScriptsRoot) '..')
Set-Location $Root

function Write-Step {
  param([string] $Message)
  Write-Host ""
  Write-Host "==> $Message" -ForegroundColor Cyan
}

function Assert-Command {
  param([string] $Name)
  if (-not (Get-Command $Name -ErrorAction SilentlyContinue)) {
    throw "Required command not found: $Name"
  }
}

function Assert-NotTracked {
  param([string] $Path)
  $prev = $ErrorActionPreference
  $ErrorActionPreference = 'Continue'
  git ls-files --error-unmatch $Path 2>$null | Out-Null
  $tracked = ($LASTEXITCODE -eq 0)
  $ErrorActionPreference = $prev
  if ($tracked) {
    throw "$Path is tracked by git. Remove it and add to .gitignore."
  }
}

Write-Step 'Preflight'
Assert-Command 'node'
Assert-Command 'npm'
Assert-Command 'git'
Assert-NotTracked '.env'
Assert-NotTracked '.env.local'

$branch = (git rev-parse --abbrev-ref HEAD).Trim()
if ($Production -and $branch -ne 'main') {
  throw "Production ship requires branch main (current: $branch)"
}

if ($env:CAMPAIGN_PLAYBOOK_ENABLED -eq 'true') {
  Write-Warning 'CAMPAIGN_PLAYBOOK_ENABLED is set in this shell; cleared for production build.'
}
Remove-Item Env:CAMPAIGN_PLAYBOOK_ENABLED -ErrorAction SilentlyContinue
Remove-Item Env:NEXT_PUBLIC_SHOW_CAMPAIGN_PLAYBOOK -ErrorAction SilentlyContinue

if (-not $SkipBuild) {
  Write-Step 'Lint'
  if ($DryRun) { Write-Host 'npm run lint' } else { npm run lint }

  Write-Step 'Typecheck'
  if ($DryRun) { Write-Host 'npm run typecheck' } else { npm run typecheck }

  Write-Step 'Production build'
  $priorNodeEnv = $env:NODE_ENV
  $env:NODE_ENV = 'production'
  if ($DryRun) {
    Write-Host 'npm run build'
  } else {
    if (Test-Path '.next') { Remove-Item -Recurse -Force '.next' }
    npm run build
  }
  if ($null -eq $priorNodeEnv) {
    Remove-Item Env:NODE_ENV -ErrorAction SilentlyContinue
  } else {
    $env:NODE_ENV = $priorNodeEnv
  }
}

$porcelain = git status --porcelain

if ($AutoCommit -and -not $CommitMessage -and $porcelain) {
  $CommitMessage = "deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
}

if ($CommitMessage) {
  Write-Step 'Git commit'
  if (-not $porcelain) {
    Write-Host 'Working tree clean; nothing to commit.' -ForegroundColor Yellow
  } elseif ($DryRun) {
    Write-Host $porcelain
    Write-Host "Would commit: $CommitMessage" -ForegroundColor Yellow
  } else {
    git add -A
    git commit -m $CommitMessage
  }
} elseif ($porcelain -and $Production) {
  throw 'Uncommitted changes. Run deploy.cmd, npm run deploy, or pass -AutoCommit / -CommitMessage.'
}

Write-Step 'Push origin'
if ($DryRun) {
  git push --dry-run origin $branch
} else {
  git push origin $branch
}

if ($Production) {
  Write-Step 'Vercel production'
  if (Get-Command vercel -ErrorAction SilentlyContinue) {
    if ($DryRun) {
      Write-Host 'vercel deploy --prod --yes'
    } else {
      vercel deploy --prod --yes
    }
  } else {
    Write-Host 'Vercel CLI not installed. Production deploy runs via GitHub integration on push.' -ForegroundColor Yellow
    Write-Host 'Install: npm i -g vercel' -ForegroundColor DarkGray
  }
}

Write-Host ""
Write-Host 'Ship complete.' -ForegroundColor Green
if ($Production) {
  Write-Host 'Verify NEXT_PUBLIC_SITE_URL and NEXT_PUBLIC_GTM_APP_URL in Vercel Production env.' -ForegroundColor DarkGray
}
