param(
    [switch]$SkipBuild
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$logsDir = Join-Path $repoRoot "logs"
$previewInfo = Join-Path $logsDir "free-preview.json"
$previewPid = Join-Path $logsDir "free-preview.pid"

function Write-Step([string]$message) {
    Write-Host ""
    Write-Host "==> $message" -ForegroundColor Cyan
}

function Get-CloudflaredPath() {
    $command = Get-Command "cloudflared.exe" -ErrorAction SilentlyContinue
    if ($command) {
        return $command.Source
    }

    foreach ($candidate in @(
        "C:\Program Files (x86)\cloudflared\cloudflared.exe",
        "C:\Program Files\cloudflared\cloudflared.exe"
    )) {
        if (Test-Path $candidate) {
            return $candidate
        }
    }

    return $null
}

function Stop-PreviewTunnel() {
    if (Test-Path $previewPid) {
        $pidValue = Get-Content $previewPid -ErrorAction SilentlyContinue | Select-Object -First 1
        if ($pidValue -match '^\d+$') {
            Stop-Process -Id ([int]$pidValue) -Force -ErrorAction SilentlyContinue
        }
        Remove-Item $previewPid -Force -ErrorAction SilentlyContinue
    }

    Get-CimInstance Win32_Process -Filter "name = 'cloudflared.exe'" -ErrorAction SilentlyContinue |
        ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }
}

Set-Location $repoRoot
New-Item -ItemType Directory -Force -Path $logsDir | Out-Null

Write-Step "Dam bao frontend local dang chay"
if ($SkipBuild) {
    & (Join-Path $PSScriptRoot "start-personal-server.ps1") -SkipBuild
} else {
    & (Join-Path $PSScriptRoot "start-personal-server.ps1")
}

Write-Step "Dung preview tunnel cu neu co"
Stop-PreviewTunnel
Start-Sleep -Seconds 2

$cloudflaredPath = Get-CloudflaredPath
if (-not $cloudflaredPath) {
    throw "Khong tim thay cloudflared tren may nay."
}

Write-Step "Mo cua so Cloudflare Tunnel"
$commandLine = "`"$cloudflaredPath`" tunnel --url http://localhost:9999"
$process = Start-Process `
    -FilePath "cmd.exe" `
    -ArgumentList "/k", $commandLine `
    -WorkingDirectory $repoRoot `
    -PassThru

Set-Content -Path $previewPid -Value $process.Id -Encoding ASCII
@{
    provider  = "cloudflare"
    pid       = $process.Id
    command   = $commandLine
    createdAt = (Get-Date).ToString("o")
} | ConvertTo-Json | Set-Content -Path $previewInfo -Encoding UTF8

Write-Step "Preview mien phi da duoc mo"
Write-Host "Mot cua so Cloudflare da bat len." -ForegroundColor Green
Write-Host "Hay copy dong URL dang `https://...trycloudflare.com` hien trong cua so do." -ForegroundColor Green
Write-Host "Giu nguyen cua so Cloudflare neu ban muon link tiep tuc hoat dong." -ForegroundColor Yellow
Write-Host "Khi nao muon dung, mo file Dung-Link-Xem-Thu-Mien-Phi.bat." -ForegroundColor Yellow
