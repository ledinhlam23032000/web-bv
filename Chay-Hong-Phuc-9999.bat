@echo off
setlocal
cd /d "%~dp0"

echo Dang chuan bi website Benh vien Hong Phuc tai http://localhost:9999/
echo.

echo Dang dung tien trinh cu neu cong 9999 dang duoc su dung...
powershell -NoProfile -ExecutionPolicy Bypass -Command "Get-NetTCPConnection -LocalPort 9999 -State Listen -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -Unique | Where-Object { $_ -and $_ -ne 0 } | ForEach-Object { Stop-Process -Id $_ -Force }"

echo.
echo Dang tao ban production moi de tranh loi CSS / ban nhap...
call npm run build
if errorlevel 1 (
  echo.
  echo Build that bai. Vui long xem loi phia tren.
  pause
  exit /b 1
)

echo.
echo Dang khoi dong ban production tai http://localhost:9999/
start "Hong Phuc 9999" cmd /k "npx next start -p 9999"

timeout /t 3 /nobreak >nul
start "" "http://localhost:9999/"

echo Da mo website. Neu sua code, hay chay lai file nay de build moi.
pause
