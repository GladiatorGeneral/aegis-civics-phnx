# USAMind Audit Suite Installer (PowerShell)
Write-Host "Installing USAMind Audit Suite..."

# Install dev dependencies
npm install --save-dev `
  lighthouse `
  axe-core `
  pa11y `
  webhint `
  @typescript-eslint/eslint-plugin `
  eslint-plugin-security `
  eslint-plugin-react-hooks `
  eslint-plugin-jsx-a11y `
  eslint-plugin-import `
  @next/bundle-analyzer `
  dependency-check `
  npm-audit-html `
  puppeteer `
  jest `
  cypress `
  playwright

# Install global audit tools
npm install -g snyk owasp-dependency-check lighthouse-ci webpack-bundle-analyzer

# Create audit directories
$dirs = @('audit', 'audit/reports', 'audit/compliance', 'audit/logs')
foreach ($dir in $dirs) {
  if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir | Out-Null }
}

# Copy configuration files if present
$cfgs = @('.eslintrc.js', '.lighthouserc.json', 'pa11y.config.js')
foreach ($cfg in $cfgs) {
  $src = "audit-configs/$cfg"
  if (Test-Path $src) { Copy-Item $src ".\$cfg" -Force }
}

Write-Host "✅ Audit suite installed successfully!"
Write-Host "Run: npm run audit:full"
