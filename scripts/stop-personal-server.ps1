$ErrorActionPreference = "Stop"

function Stop-PortProcess([int]$port) {
    $connections = Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue
    $processIds = $connections | Select-Object -ExpandProperty OwningProcess -Unique

    foreach ($processId in $processIds) {
        if ($processId -and $processId -ne 0) {
            Stop-Process -Id $processId -Force
        }
    }
}

$repoRoot = Split-Path -Parent $PSScriptRoot
$wordpressDir = Join-Path $repoRoot "wordpress"

Set-Location $repoRoot

Write-Host ""
Write-Host "==> Dung frontend cong 9999" -ForegroundColor Cyan
Stop-PortProcess -port 9999

Write-Host ""
Write-Host "==> Dung WordPress Docker" -ForegroundColor Cyan
Push-Location $wordpressDir
docker compose down | Out-Host
Pop-Location

Write-Host ""
Write-Host "Da dung may chu tam thoi." -ForegroundColor Green
