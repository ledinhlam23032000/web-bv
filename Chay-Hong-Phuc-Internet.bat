@echo off
setlocal
cd /d "%~dp0"

echo Dang khoi dong web Benh vien Hong Phuc theo che do may tinh ca nhan lam may chu...
echo.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\start-personal-server.ps1"
echo.
pause
