# HenoBack Office — free port 3000, reset dev cache, start Next.js dev server
# Usage:
#   .\scripts\dev-clean.ps1
#   npm run dev:clean
[CmdletBinding()]
param(
  [int[]] $Ports = @(3000, 3001, 3002, 3003),
  [switch] $NoStart
)

$ErrorActionPreference = 'Stop'

function Get-ScriptsRoot {
  if (-not [string]::IsNullOrWhiteSpace($PSScriptRoot)) { return $PSScriptRoot }
  $invoked = $MyInvocation.MyCommand.Path
  if (-not [string]::IsNullOrWhiteSpace($invoked)) { return Split-Path -Parent $invoked }
  throw 'Run as: .\scripts\dev-clean.ps1'
}

$Root = Resolve-Path (Join-Path (Get-ScriptsRoot) '..')
Set-Location $Root

Write-Host ''
Write-Host '  HenoBack Office — dev clean' -ForegroundColor White
Write-Host ('  Repo: ' + $Root) -ForegroundColor DarkGray
Write-Host ''

# ship.ps1 can leave NODE_ENV=production in this shell — breaks next dev middleware
if ($env:NODE_ENV -and $env:NODE_ENV -ne 'development') {
  Write-Host "  Clearing NODE_ENV=$($env:NODE_ENV) (use development for local dev)" -ForegroundColor Yellow
}
Remove-Item Env:NODE_ENV -ErrorAction SilentlyContinue
Remove-Item Env:CAMPAIGN_PLAYBOOK_ENABLED -ErrorAction SilentlyContinue
Remove-Item Env:NEXT_PUBLIC_SHOW_CAMPAIGN_PLAYBOOK -ErrorAction SilentlyContinue

Write-Host '  Stopping processes on dev ports...' -ForegroundColor Cyan
foreach ($port in $Ports) {
  $connections = @(Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue)
  foreach ($conn in $connections) {
    $processId = $conn.OwningProcess
    if (-not $processId) { continue }
    try {
      $proc = Get-Process -Id $processId -ErrorAction Stop
      Write-Host "    Port $port -> stopping $($proc.ProcessName) (PID $processId)" -ForegroundColor DarkGray
      Stop-Process -Id $processId -Force -ErrorAction Stop
    } catch {
      Write-Host "    Port $port -> could not stop PID $processId" -ForegroundColor Yellow
    }
  }
}

if (Test-Path '.next') {
  Write-Host '  Removing .next cache...' -ForegroundColor Cyan
  Remove-Item -Recurse -Force '.next'
}

Write-Host '  Dev ports cleared; cache removed.' -ForegroundColor Green

if ($NoStart) {
  Write-Host ''
  Write-Host '  Skipped start (-NoStart). Run: npm run dev' -ForegroundColor DarkGray
  Write-Host ''
  exit 0
}

Write-Host ''
Write-Host '  Starting Next.js on http://localhost:3000 ...' -ForegroundColor Cyan
Write-Host ''

$env:PORT = '3000'
npm run dev
