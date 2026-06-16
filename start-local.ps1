$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$node = "C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
$next = Join-Path $root "node_modules\next\dist\bin\next"

Set-Location $root
& $node $next start -p 3000
