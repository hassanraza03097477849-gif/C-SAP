const fs = require('fs');
const files = [
  'f:/C-SAP/src/app/finance/assets/new/page.tsx',
  'f:/C-SAP/src/app/finance/tax/page.tsx',
  'f:/C-SAP/src/app/finance/statements/page.tsx',
  'f:/C-SAP/src/app/finance/audit/page.tsx'
];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');

  // Find the closing div of "flex gap-2" which is followed by </div>\n\n      <Card or <div
  if (content.indexOf('</div>\n      </div>\n\n      <Card') !== -1) {
    content = content.replace('</div>\n      </div>\n\n      <Card', '</div>\n      </div>\n      </div>\n\n      <Card');
  } else if (content.indexOf('</div>\n      </div>\n\n      <div className="flex-1 bg-slate-900/40') !== -1) {
    // wait, statements doesn't have a card, let's just find the first occurrence of:
    // </div>\n      </div>\n\n
  }

  // A safer approach: the title block ends with:
  //           <Button ...>Exit</Button> (or similar)
  //         </div>
  //       </div>
  // We want to add an extra </div> after that.

  // Let's use a regex to match the end of that header block.
  // The block we inserted ends with <div className="flex gap-2"> followed by buttons and then </div>\n      </div>
  
  content = content.replace(/(<div className="flex gap-2">[\s\S]*?<\/div>\n\s*<\/div>)(\n\s*<(?:Card|div|fieldset))/m, '$1\n      </div>$2');

  fs.writeFileSync(f, content);
  console.log('Fixed div in ' + f);
});
