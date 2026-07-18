param(
    [int]$Port = 9999
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$logsDir = Join-Path $repoRoot "logs"
$stdoutLog = Join-Path $logsDir "quick-tunnel.out.log"
$stderrLog = Join-Path $logsDir "quick-tunnel.err.log"
$pidFile = Join-Path $logsDir "quick-tunnel.pid"
$infoFile = Join-Path $logsDir "quick-tunnel.json"
$cloudflared = "C:\Program Files (x86)\cloudflared\cloudflared.exe"

if (-not (Test-Path $cloudflared)) {
    $cloudflared = (Get-Command cloudflared.exe -ErrorAction Stop).Source
}

New-Item -ItemType Directory -Force -Path $logsDir | Out-Null

Get-CimInstance Win32_Process -Filter "name = 'cloudflared.exe'" -ErrorAction SilentlyContinue |
    Where-Object { $_.CommandLine -match "tunnel.+--url.+localhost:$Port" } |
    ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }

Remove-Item $stdoutLog, $stderrLog -Force -ErrorAction SilentlyContinue

$process = Start-Process `
    -FilePath $cloudflared `
    -ArgumentList @("tunnel", "--no-autoupdate", "--url", "http://localhost:$Port") `
    -WorkingDirectory $repoRoot `
    -WindowStyle Hidden `
    -RedirectStandardOutput $stdoutLog `
    -RedirectStandardError $stderrLog `
    -PassThru

Set-Content -Path $pidFile -Value $process.Id -Encoding ASCII

$publicUrl = $null
for ($attempt = 0; $attempt -lt 30; $attempt++) {
    Start-Sleep -Seconds 1
    $output = @(
        Get-Content $stdoutLog -Raw -ErrorAction SilentlyContinue
        Get-Content $stderrLog -Raw -ErrorAction SilentlyContinue
    ) -join "`n"
    $match = [regex]::Match($output, "https://[a-z0-9-]+\.trycloudflare\.com")
    if ($match.Success) {
        $publicUrl = $match.Value
        break
    }
}

if (-not $publicUrl) {
    throw "Cloudflare Quick Tunnel did not return a public URL. See $stderrLog."
}

@{
    provider = "cloudflare-quick-tunnel"
    pid = $process.Id
    url = $publicUrl
    createdAt = (Get-Date).ToString("o")
} | ConvertTo-Json | Set-Content -Path $infoFile -Encoding UTF8

Write-Output $publicUrl
