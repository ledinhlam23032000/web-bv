@echo off
setlocal
cd /d "%~dp0"

echo Dang khoi dong web Benh vien Hong Phuc va tao link xem thu mien phi...
echo.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\start-personal-server.ps1" -SkipBuild
echo.
set "CLOUDFLARED=C:\Program Files (x86)\cloudflared\cloudflared.exe"
if not exist "%CLOUDFLARED%" set "CLOUDFLARED=C:\Program Files\cloudflared\cloudflared.exe"
if not exist "%CLOUDFLARED%" (
  echo Khong tim thay cloudflared tren may nay.
  echo Hay bao toi de toi cai lai hoac doi sang cach khac.
  echo.
  pause
  exit /b 1
)
echo Hay doi dong URL dang https://...trycloudflare.com xuat hien ben duoi, roi copy gui cho nguoi can xem.
echo Giu nguyen cua so nay neu ban muon link tiep tuc hoat dong.
echo.
"%CLOUDFLARED%" tunnel --url http://localhost:9999
echo.
pause
