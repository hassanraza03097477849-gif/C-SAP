// localize.js
// Script to replace mock data across the project with Pakistani context and Reliance branding.
// It scans all files under src/app (including .tsx, .ts, .js, .json, .md) and performs replacements.

const fs = require('fs');
const path = require('path');

// Directory to process (project root -> src/app)
const rootDir = path.join(__dirname, 'src', 'app');

// Mapping of city names to Pakistani cities
const cityMap = {
  'New York': 'Karachi',
  'London': 'Lahore',
  'Shanghai': 'Islamabad',
  'Los Angeles': 'Multan',
  'Hamburg': 'Faisalabad',
  'Tokyo': 'Peshawar',
  'Sydney': 'Quetta'
};

// Mapping of currency symbols / codes to PKR
const currencyMap = {
  '\$': '₨',
  'USD': 'PKR',
  'EUR': 'PKR',
  'GBP': 'PKR',
  'USD ': 'PKR ',
  'USD\b': 'PKR'
};

// Replace company name with Reliance branding
const companyMap = {
  'Reliance Petrochem': 'Reliance',
  'Reliance Petrochem ERP': 'Reliance ERP',
  'Reliance Petrochem & Pure Petroleum': 'Reliance',
  'Reliance Petrochem': 'Reliance'
};

function applyReplacements(content) {
  for (const [oldCity, newCity] of Object.entries(cityMap)) {
    const regex = new RegExp(oldCity, 'g');
    content = content.replace(regex, newCity);
  }
  for (const [oldCurr, newCurr] of Object.entries(currencyMap)) {
    const regex = new RegExp(oldCurr, 'g');
    content = content.replace(regex, newCurr);
  }
  for (const [oldComp, newComp] of Object.entries(companyMap)) {
    const regex = new RegExp(oldComp, 'g');
    content = content.replace(regex, newComp);
  }
  return content;
}

function processFile(filePath) {
  const ext = path.extname(filePath);
  const allowedExt = ['.tsx', '.ts', '.js', '.json', '.md', '.css', '.html'];
  if (!allowedExt.includes(ext)) return;
  const content = fs.readFileSync(filePath, 'utf8');
  const newContent = applyReplacements(content);
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else {
      processFile(fullPath);
    }
  }
}

walk(rootDir);
console.log('Localization complete.');
