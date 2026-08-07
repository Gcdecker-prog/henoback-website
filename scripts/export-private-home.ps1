# Private static export of the site (homepage + routes) for offline/private share.
# Output: exports/private-home/<timestamp>/
# Not for public deploy. Folder is gitignored.

param(
  [switch]$SkipBuild
)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

$stamp = Get-Date -Format 'yyyyMMdd-HHmmss'
$dest = Join-Path $root "exports\private-home\$stamp"
$middleware = Join-Path $root 'middleware.ts'
$middlewareBak = Join-Path $root 'middleware.ts.private-export.bak'
$movedMiddleware = $false

Write-Host '== Heno private static export ==' -ForegroundColor Cyan

try {
  if (Test-Path $middleware) {
    Move-Item -Force $middleware $middlewareBak
    $movedMiddleware = $true
    Write-Host 'Temporarily disabled middleware (required for static export).'
  }

  if (-not $SkipBuild) {
    $env:HENOS_PRIVATE_EXPORT = '1'
    Write-Host 'Building static export (HENOS_PRIVATE_EXPORT=1)...'
    npm run build
    if ($LASTEXITCODE -ne 0) { throw "next build failed ($LASTEXITCODE)" }
  }

  $outDir = Join-Path $root 'out'
  if (-not (Test-Path $outDir)) {
    throw "Missing out/ folder. Build did not produce a static export."
  }

  New-Item -ItemType Directory -Force -Path $dest | Out-Null
  Copy-Item -Path (Join-Path $outDir '*') -Destination $dest -Recurse -Force

  @"
PRIVATE STATIC EXPORT — NOT FOR PUBLIC HOSTING
Generated: $stamp
Open: index.html (or run: npx serve "$(Split-Path -Leaf $dest)" from exports/private-home)

Notes:
- Full site static snapshot for private review / offline share.
- Images are unoptimized; interactivity works via client JS bundles.
- Do not deploy this folder to the live site / CDN without a deliberate release.
"@ | Set-Content -Path (Join-Path $dest 'PRIVATE-README.txt') -Encoding UTF8

  # Extra noindex hint if someone hosts the folder by mistake
  @"
User-agent: *
Disallow: /
"@ | Set-Content -Path (Join-Path $dest 'robots.txt') -Encoding UTF8

  Write-Host ""
  Write-Host "Done. Private export:" -ForegroundColor Green
  Write-Host "  $dest"
  Write-Host "Homepage file:"
  Write-Host "  $(Join-Path $dest 'index.html')"
}
finally {
  Remove-Item Env:HENOS_PRIVATE_EXPORT -ErrorAction SilentlyContinue
  if ($movedMiddleware -and (Test-Path $middlewareBak)) {
    Move-Item -Force $middlewareBak $middleware
    Write-Host 'Restored middleware.ts'
  }
}
