param(
    [string]$TaskName = "Hong Phuc Frontend 9999"
)

$ErrorActionPreference = "Stop"

$runner = Join-Path $PSScriptRoot "run-frontend-9999.ps1"
$powershell = Join-Path $PSHOME "powershell.exe"
$currentUser = [System.Security.Principal.WindowsIdentity]::GetCurrent().Name

if (-not (Test-Path -LiteralPath $runner)) {
    throw "Khong tim thay script khoi dong: $runner"
}

$arguments = "-NoProfile -NonInteractive -ExecutionPolicy Bypass -File `"$runner`""
$action = New-ScheduledTaskAction `
    -Execute $powershell `
    -Argument $arguments `
    -WorkingDirectory (Split-Path -Parent $PSScriptRoot)
$logonTrigger = New-ScheduledTaskTrigger -AtLogOn -User $currentUser
$watchdogTrigger = New-ScheduledTaskTrigger `
    -Once `
    -At (Get-Date).AddMinutes(1) `
    -RepetitionInterval (New-TimeSpan -Minutes 1) `
    -RepetitionDuration (New-TimeSpan -Days 3650)
$principal = New-ScheduledTaskPrincipal `
    -UserId $currentUser `
    -LogonType Interactive `
    -RunLevel Limited
$settings = New-ScheduledTaskSettingsSet `
    -AllowStartIfOnBatteries `
    -DontStopIfGoingOnBatteries `
    -StartWhenAvailable `
    -RestartCount 99 `
    -RestartInterval (New-TimeSpan -Minutes 1) `
    -ExecutionTimeLimit (New-TimeSpan -Minutes 2) `
    -MultipleInstances IgnoreNew

Register-ScheduledTask `
    -TaskName $TaskName `
    -Action $action `
    -Trigger @($logonTrigger, $watchdogTrigger) `
    -Principal $principal `
    -Settings $settings `
    -Description "Kiem tra website Hong Phuc moi phut va tu khoi phuc frontend cong 9999 khi can." `
    -Force | Out-Null

Write-Host "Da cai watchdog tu khoi phuc website: $TaskName" -ForegroundColor Green
