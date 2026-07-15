param(
    [switch]$SkipBuild
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$logsDir = Join-Path $repoRoot "logs"
$wordpressDir = Join-Path $repoRoot "wordpress"
$stdoutLog = Join-Path $logsDir "public-next.out.log"
$stderrLog = Join-Path $logsDir "public-next.err.log"

function Write-Step([string]$message) {
    Write-Host ""
    Write-Host "==> $message" -ForegroundColor Cyan
}

function Invoke-Native([scriptblock]$ScriptBlock, [string]$FailureMessage) {
    $hasNativePreference = Test-Path Variable:PSNativeCommandUseErrorActionPreference
    if ($hasNativePreference) {
        $previousNativePreference = $PSNativeCommandUseErrorActionPreference
        $PSNativeCommandUseErrorActionPreference = $false
    }
    $previousErrorActionPreference = $ErrorActionPreference
    $ErrorActionPreference = "Continue"

    try {
        & $ScriptBlock
        if ($LASTEXITCODE -ne 0) {
            throw "$FailureMessage (exit code $LASTEXITCODE)."
        }
    } finally {
        $ErrorActionPreference = $previousErrorActionPreference
        if ($hasNativePreference) {
            $PSNativeCommandUseErrorActionPreference = $previousNativePreference
        }
    }
}

function Stop-PortProcess([int]$port) {
    $connections = Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue
    $processIds = $connections | Select-Object -ExpandProperty OwningProcess -Unique

    foreach ($processId in $processIds) {
        if ($processId -and $processId -ne 0) {
            Stop-Process -Id $processId -Force
        }
    }
}

function Get-LanAddresses() {
    Get-NetIPAddress -AddressFamily IPv4 -ErrorAction SilentlyContinue |
        Where-Object {
            $_.IPAddress -notlike "127.*" -and
            $_.IPAddress -notlike "169.254.*" -and
            $_.PrefixOrigin -ne "WellKnown"
        } |
        Select-Object -ExpandProperty IPAddress -Unique
}

Set-Location $repoRoot
New-Item -ItemType Directory -Force -Path $logsDir | Out-Null

Write-Step "Khoi dong WordPress backend local"
Push-Location $wordpressDir
Invoke-Native { docker compose up -d 2>&1 | Out-Host } "Khong khoi dong duoc WordPress backend"
Pop-Location

if (-not (Test-Path (Join-Path $repoRoot "node_modules"))) {
    Write-Step "Cai dat node_modules"
    Invoke-Native { npm install 2>&1 | Out-Host } "Khong cai dat duoc node_modules"
}

if (-not $SkipBuild) {
    Write-Step "Build ban production moi"
    Invoke-Native { npm run build 2>&1 | Out-Host } "Khong build duoc frontend production"
}

Write-Step "Dung tien trinh cu o cong 9999 neu co"
Stop-PortProcess -port 9999
Start-Sleep -Seconds 2

Write-Step "Khoi dong frontend production o cong 9999 cho truy cap tu mang ngoai"
if (Test-Path $stdoutLog) {
    Remove-Item $stdoutLog -Force
}
if (Test-Path $stderrLog) {
    Remove-Item $stderrLog -Force
}

Start-Process `
    -FilePath "cmd.exe" `
    -ArgumentList "/c", "set WORDPRESS_API_URL=http://localhost:10088&&set WORDPRESS_HEADLESS_ENABLED=true&&npx next start -H 0.0.0.0 -p 9999" `
    -WorkingDirectory $repoRoot `
    -WindowStyle Hidden `
    -RedirectStandardOutput $stdoutLog `
    -RedirectStandardError $stderrLog

Start-Sleep -Seconds 5

$response = Invoke-WebRequest -UseBasicParsing http://localhost:9999/ -TimeoutSec 20
$addresses = @(Get-LanAddresses)

Write-Step "May chu tam thoi da san sang"
Write-Host "Trang local: http://localhost:9999/" -ForegroundColor Green
foreach ($address in $addresses) {
    Write-Host "Trang trong mang noi bo: http://$address`:9999/" -ForegroundColor Green
}
Write-Host "WordPress quan tri: http://localhost:10088/wp-admin/" -ForegroundColor Yellow
Write-Host "Trang chu hien tai tra ve HTTP $($response.StatusCode)." -ForegroundColor Green
Write-Host ""
Write-Host "Neu muon dua len internet bang ten mien, tiep theo chung ta se mo cong hoac dung Cloudflare Tunnel." -ForegroundColor Yellow
