# --- Paths ---
$admlHostRoot = "W:\GitHub Desktop\Clones\ADML-Host"
$admlRoot     = "X:\adml"

$admlHostOut  = Join-Path $admlHostRoot "docs\adml-host-map_022826d.txt"
$admlOut      = Join-Path $admlRoot     "docs\adml-map_022826d.txt"

# --- Function to generate a tree-style map ---
function Write-Tree {
    param(
        [string]$Path,
        [string]$OutputFile
    )

    # Header
    "Directory Map for: $Path" | Out-File $OutputFile
    "Generated: $(Get-Date)"   | Out-File $OutputFile -Append
    "----------------------------------------" | Out-File $OutputFile -Append

    # Tree output
    Get-ChildItem -Recurse $Path | 
        Select-Object FullName, Mode, Length, LastWriteTime |
        Format-Table -AutoSize |
        Out-File $OutputFile -Append
}

# --- Generate maps ---
Write-Tree -Path $admlHostRoot -OutputFile $admlHostOut
Write-Tree -Path $admlRoot     -OutputFile $admlOut

# --- Confirmation ---
"Mapping complete. Files created:" 
$admlHostOut
$admlOut