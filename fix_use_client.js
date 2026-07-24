const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'src', 'app');

function ensureUseClient(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      ensureUseClient(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // If the file uses useState or SmartTable but doesn't have use client
      if ((content.includes('useState') || content.includes('SmartTable')) && !content.includes('"use client"')) {
        content = '"use client";\n\n' + content;
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Added "use client" to: ${fullPath}`);
      }
    }
  }
}

ensureUseClient(targetDir);
console.log('Fixed use client directives.');
