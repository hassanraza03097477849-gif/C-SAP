const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'src', 'app');

const replacements = [
  // Branding
  { pattern: /Reliance Petrochem/g, replacement: 'Pure Petroleum' },
  { pattern: /Reliance ERP/g, replacement: 'Pure Petroleum ERP' },
  { pattern: /Reliance/g, replacement: 'Pure Petroleum' },
  
  // Currency: Replace $ followed by numbers or commas with PKR
  // This avoids `${` template literals and variables named with $
  { pattern: /\$([\d,]+(\.\d+)?)/g, replacement: 'PKR $1' },
  
  // Dummy Companies
  { pattern: /Acme Corp/g, replacement: 'Zarar Enterprises' },
  { pattern: /Global Tech/g, replacement: 'Karachi Logistics' },
  { pattern: /Widget Inc/g, replacement: 'Lahore Traders' },
  { pattern: /Stark Industries/g, replacement: 'Islamabad Fuels' },
  { pattern: /Wayne Enterprises/g, replacement: 'Multan Oil Co.' },
  { pattern: /Umbrella Corp/g, replacement: 'Faisalabad Petro' },
  { pattern: /LexCorp/g, replacement: 'Quetta Haulers' },
  { pattern: /Oscorp/g, replacement: 'Peshawar Transport' },
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;

      for (const { pattern, replacement } of replacements) {
        if (pattern.test(content)) {
          content = content.replace(pattern, replacement);
          modified = true;
        }
      }

      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

console.log('Starting localization script...');
processDirectory(targetDir);
console.log('Localization complete.');
