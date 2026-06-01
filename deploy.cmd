@echo off
cd /d "%~dp0"
if "%~1"=="" (
  powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\ship.ps1" -Production -AutoCommit
) else (
  powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\ship.ps1" -Production -AutoCommit -CommitMessage "%~1"
)
exit /b %ERRORLEVEL%
