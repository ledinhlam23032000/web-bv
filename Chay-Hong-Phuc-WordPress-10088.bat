@echo off
setlocal
cd /d "%~dp0wordpress"
docker compose up -d db wordpress
echo.
echo WordPress Hong Phuc dang chay tai:
echo http://localhost:10088
echo.
echo Admin:
echo http://localhost:10088/wp-admin
echo User: admin
echo Pass: HongPhuc@2026
echo.
pause
