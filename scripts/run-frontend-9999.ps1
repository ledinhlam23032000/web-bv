param(
    [int]$Port = 9999
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$logsDir = Join-Path $repoRoot "logs"
$nextCommand = Join-Path $repoRoot "node_modules\.bin\next.cmd"
$buildId = Join-Path $repoRoot ".next\BUILD_ID"
$watchdogLog = Join-Path $logsDir "frontend-watchdog.log"
$stdoutLog = Join-Path $logsDir "frontend-next.out.log"
$stderrLog = Join-Path $logsDir "frontend-next.err.log"
$healthUrl = "http://localhost:$Port/"

function Test-Frontend {
    try {
        $response = Invoke-WebRequest -UseBasicParsing -Uri $healthUrl -TimeoutSec 8
        return $response.StatusCode -eq 200
    } catch {
        return $false
    }
}

function Write-WatchdogLog([string]$message) {
    "[$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')] $message" |
        Out-File -LiteralPath $watchdogLog -Append -Encoding utf8
}

New-Item -ItemType Directory -Force -Path $logsDir | Out-Null
Set-Location $repoRoot

if (Test-Frontend) {
    exit 0
}

if (-not (Test-Path -LiteralPath $nextCommand)) {
    throw "Khong tim thay Next.js. Hay chay npm install trong $repoRoot."
}

if (-not (Test-Path -LiteralPath $buildId)) {
    throw "Khong tim thay ban production. Hay chay npm run build trong $repoRoot."
}

# Remove a stale listener before launching a clean production process.
$connections = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue
$processIds = $connections | Select-Object -ExpandProperty OwningProcess -Unique
foreach ($processId in $processIds) {
    if ($processId -and $processId -ne 0) {
        Stop-Process -Id $processId -Force -ErrorAction SilentlyContinue
    }
}

Write-WatchdogLog "Frontend is unavailable. Starting Next.js on port $Port."

$command = "set `"WORDPRESS_API_URL=http://localhost:10088`" && set `"WORDPRESS_HEADLESS_ENABLED=true`" && call `"$nextCommand`" start -H 0.0.0.0 -p $Port"
Start-Process `
    -FilePath $env:ComSpec `
    -ArgumentList "/d", "/c", $command `
    -WorkingDirectory $repoRoot `
    -WindowStyle Hidden `
    -RedirectStandardOutput $stdoutLog `
    -RedirectStandardError $stderrLog

for ($attempt = 1; $attempt -le 20; $attempt++) {
    Start-Sleep -Seconds 1
    if (Test-Frontend) {
        Write-WatchdogLog "Frontend recovered successfully on port $Port."
        exit 0
    }
}

Write-WatchdogLog "Frontend failed to recover on port $Port."
throw "Frontend did not return HTTP 200 at $healthUrl."
