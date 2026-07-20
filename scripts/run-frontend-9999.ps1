$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$logsDir = Join-Path $repoRoot "logs"
$nextCommand = Join-Path $repoRoot "node_modules\.bin\next.cmd"
$buildId = Join-Path $repoRoot ".next\BUILD_ID"
$logFile = Join-Path $logsDir "frontend-autostart.log"

New-Item -ItemType Directory -Force -Path $logsDir | Out-Null
Set-Location $repoRoot

if (-not (Test-Path -LiteralPath $nextCommand)) {
    throw "Khong tim thay Next.js. Hay chay npm install trong $repoRoot."
}

if (-not (Test-Path -LiteralPath $buildId)) {
    throw "Khong tim thay ban production. Hay chay npm run build trong $repoRoot."
}

$env:WORDPRESS_API_URL = "http://localhost:10088"
$env:WORDPRESS_HEADLESS_ENABLED = "true"

"[$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')] Starting Hong Phuc frontend on port 9999." |
    Out-File -LiteralPath $logFile -Append -Encoding utf8

& $nextCommand start -H 0.0.0.0 -p 9999 2>&1 |
    Tee-Object -FilePath $logFile -Append

exit $LASTEXITCODE
