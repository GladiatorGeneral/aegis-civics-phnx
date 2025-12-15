#!/bin/bash

# USAMind Audit Suite Installer
echo "Installing USAMind Audit Suite..."

# Install dependencies
npm install --save-dev \
  lighthouse \
  axe-core \
  pa11y \
  webhint \
  @typescript-eslint/eslint-plugin \
  eslint-plugin-security \
  eslint-plugin-react-hooks \
  eslint-plugin-jsx-a11y \
  eslint-plugin-import \
  @next/bundle-analyzer \
  dependency-check \
  npm-audit-html \
  puppeteer \
  jest \
  cypress \
  playwright

# Install audit tools
npm install -g \
  snyk \
  owasp-dependency-check \
  lighthouse-ci \
  webpack-bundle-analyzer

# Create audit directories
mkdir -p audit/{reports,compliance,logs}

# Copy configuration files
cp audit-configs/.eslintrc.js ./
cp audit-configs/.lighthouserc.json ./
cp audit-configs/pa11y.config.js ./

echo "✅ Audit suite installed successfully!"
echo "Run: npm run audit:full"
pwsh scripts/audit/install.ps1
