# Wrapper — use deploy.cmd or npm run deploy instead.
& (Join-Path $PSScriptRoot 'ship.ps1') -Production -AutoCommit @args
