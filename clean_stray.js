// clean_stray.js
// Scan all source files under src/app and remove lines that contain only the PKR symbol (or whitespace + PKR)
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, 'src', 'app');
const exts = ['.tsx', '.ts', '.js', '.jsx'];

function cleanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/);
  const cleaned = lines.filter(line => !/^\s*₨\s*$/.test(line));
  if (cleaned.length !== lines.length) {
    fs.writeFileSync(filePath, cleaned.join('\n'), 'utf8');
    console.log('Cleaned', filePath);
  }
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (exts.includes(path.extname(entry.name))) {
      cleanFile(full);
    }
  }
}

walk(root);
console.log('Stray PKR symbols removal complete.');
