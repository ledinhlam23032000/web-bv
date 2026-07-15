$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$logsDir = Join-Path $repoRoot "logs"
$previewPid = Join-Path $logsDir "free-preview.pid"
$previewInfo = Join-Path $logsDir "free-preview.json"

if (Test-Path $previewPid) {
    $pidValue = Get-Content $previewPid -ErrorAction SilentlyContinue | Select-Object -First 1
    if ($pidValue -match '^\d+$') {
        Stop-Process -Id ([int]$pidValue) -Force -ErrorAction SilentlyContinue
    }
    Remove-Item $previewPid -Force -ErrorAction SilentlyContinue
}

Get-CimInstance Win32_Process -Filter "name = 'node.exe'" -ErrorAction SilentlyContinue |
    Where-Object {
        ($_.CommandLine -match 'localtunnel-preview\.js') -or
        ($_.CommandLine -match '\\pinggy\\')
    } |
    ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }

Get-CimInstance Win32_Process -Filter "name = 'cloudflared.exe'" -ErrorAction SilentlyContinue |
    ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }

foreach ($path in @(
    $previewInfo,
    (Join-Path $logsDir "localtunnel-preview.json"),
    (Join-Path $logsDir "localtunnel-preview.pid"),
    (Join-Path $logsDir "cloudflared-preview.out.log"),
    (Join-Path $logsDir "cloudflared-preview.err.log")
)) {
    if (Test-Path $path) {
        Remove-Item $path -Force -ErrorAction SilentlyContinue
    }
}

Write-Host ""
Write-Host "Da dung link xem thu mien phi." -ForegroundColor Green
