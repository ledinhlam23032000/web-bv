@echo off
setlocal
cd /d "%~dp0"

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\install-frontend-autostart.ps1"
if errorlevel 1 (
  echo.
  echo Khong cai duoc che do tu dong khoi dong.
  pause
  exit /b 1
)

echo.
echo Website se tu dong chay tai cong 9999 sau moi lan dang nhap Windows.
pause
