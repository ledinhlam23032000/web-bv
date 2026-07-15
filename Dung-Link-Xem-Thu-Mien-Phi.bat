@echo off
setlocal
cd /d "%~dp0"

echo Dang dung link xem thu mien phi...
echo.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\stop-free-preview.ps1"
echo.
pause
