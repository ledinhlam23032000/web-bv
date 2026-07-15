@echo off
setlocal
cd /d "%~dp0"

echo Dang dung web Benh vien Hong Phuc che do may chu tam thoi...
echo.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\stop-personal-server.ps1"
echo.
pause
