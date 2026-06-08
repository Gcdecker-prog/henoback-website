# HenoBack Office - production deploy
# Run as a FILE (do not paste this block into PowerShell):
#   deploy.cmd "Your commit message"
#   npm run deploy
#   .\scripts\deploy-to-vercel.ps1 -Message "Your commit message"
[CmdletBinding()]
param(
  [string] $Message
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
Run this script as a file — do not paste into PowerShell.

  deploy.cmd ""Your commit message""
  npm run deploy
  .\scripts\deploy-to-vercel.ps1 -Message ""Your commit message""
"@
}

$ScriptsRoot = Get-ScriptsRoot
Set-Location (Resolve-Path (Join-Path $ScriptsRoot '..'))

Write-Host ''
Write-Host '  HenoBack Office -> Vercel Production' -ForegroundColor White
Write-Host ('  Repo: ' + (git remote get-url origin 2>$null)) -ForegroundColor DarkGray
Write-Host ''

if (-not $Message) {
  $Message = Read-Host 'Commit message (describe this deploy)'
}

if ([string]::IsNullOrWhiteSpace($Message)) {
  throw 'Commit message required. Example: deploy.cmd "Fix About hero stats"'
}

$shipScript = Join-Path $ScriptsRoot 'ship.ps1'
if (-not (Test-Path $shipScript)) {
  throw "Missing ship.ps1 at $shipScript"
}

& $shipScript -CommitMessage $Message -Production

Write-Host ''
Write-Host '  Done. Check https://vercel.com for henoback-website build status.' -ForegroundColor Green
Write-Host ''
