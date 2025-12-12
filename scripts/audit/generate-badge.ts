import { execSync } from 'child_process';
import fs from 'fs';

export function generateComplianceBadge(score: number) {
  const color = score >= 95 ? 'brightgreen' :
                score >= 80 ? 'green' :
                score >= 70 ? 'yellow' :
                score >= 60 ? 'orange' : 'red';
  
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="20">
      <linearGradient id="b" x2="0" y2="100%">
        <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
        <stop offset="1" stop-opacity=".1"/>
      </linearGradient>
      <mask id="a">
        <rect width="150" height="20" rx="3" fill="#fff"/>
      </mask>
      <g mask="url(#a)">
        <path fill="#555" d="M0 0h90v20H0z"/>
        <path fill="#${color}" d="M90 0h60v20H90z"/>
        <path fill="url(#b)" d="M0 0h150v20H0z"/>
      </g>
      <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
        <text x="45" y="15" fill="#010101" fill-opacity=".3">USAMind Audit</text>
        <text x="45" y="14">USAMind Audit</text>
        <text x="120" y="15" fill="#010101" fill-opacity=".3">${score}%</text>
        <text x="120" y="14">${score}%</text>
      </g>
    </svg>
  `;
  
  fs.writeFileSync('audit/compliance-badge.svg', svg);
  
  // Also update README
  const readme = fs.readFileSync('README.md', 'utf-8');
  const updated = readme.replace(
    /!\[Compliance\].*?\)/,
    `![Compliance](https://img.shields.io/badge/compliance-${score}%25-${color})`
  );
  fs.writeFileSync('README.md', updated);
}
