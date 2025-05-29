// Node.js script to generate placeholder icons
// Run this with: node generate-icons.js

const fs = require('fs');

// Simple SVG icon
const svgIcon = `
<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1976d2;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1565c0;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" fill="url(#bg)" rx="100"/>
  <circle cx="256" cy="256" r="180" fill="white"/>
  <text x="256" y="256" font-family="Arial, sans-serif" font-size="120" font-weight="bold" text-anchor="middle" dominant-baseline="central" fill="#1976d2">WHV</text>
</svg>
`;

// Save as icon-512.svg
fs.writeFileSync('icon-512.svg', svgIcon);
console.log('Created icon-512.svg');

// Create 192x192 version
const svgIcon192 = svgIcon.replace(/512/g, '192').replace(/256/g, '96').replace(/180/g, '70').replace(/120/g, '48').replace(/100/g, '40');
fs.writeFileSync('icon-192.svg', svgIcon192);
console.log('Created icon-192.svg');

console.log('\nTo convert to PNG:');
console.log('1. Open the SVG files in a browser');
console.log('2. Take screenshots');
console.log('3. Or use an online converter like cloudconvert.com');