Option Explicit

Dim fso, shell, scriptDir, powerShell, watchdog, command
Set fso = CreateObject("Scripting.FileSystemObject")
Set shell = CreateObject("WScript.Shell")

scriptDir = fso.GetParentFolderName(WScript.ScriptFullName)
powerShell = shell.ExpandEnvironmentStrings("%WINDIR%") & "\System32\WindowsPowerShell\v1.0\powershell.exe"
watchdog = scriptDir & "\run-frontend-9999.ps1"
command = Chr(34) & powerShell & Chr(34) & " -NoProfile -NonInteractive -ExecutionPolicy Bypass -WindowStyle Hidden -File " & Chr(34) & watchdog & Chr(34)

shell.Run command, 0, True
