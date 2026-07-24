const fs = require('fs');
const files = [
  'f:/C-SAP/src/app/finance/assets/new/page.tsx',
  'f:/C-SAP/src/app/finance/tax/page.tsx',
  'f:/C-SAP/src/app/finance/statements/page.tsx',
  'f:/C-SAP/src/app/finance/audit/page.tsx'
];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');

  // Replace all </div> sequences right after the button block.
  content = content.replace(/(<div className="flex gap-2">[\s\S]*?<\/div>)\s*<\/div>\s*<\/div>\s*<\/div>\s*(<(?:Card|div|fieldset))/m, '$1\n        </div>\n      </div>\n\n      $2');
  content = content.replace(/(<div className="flex gap-2">[\s\S]*?<\/div>)\s*<\/div>\s*<\/div>\s*(<(?:Card|div|fieldset))/m, '$1\n        </div>\n      </div>\n\n      $2');
  
  fs.writeFileSync(f, content);
  console.log('Fixed div in ' + f);
});
