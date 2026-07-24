const fs = require('fs');

function processFile(path) {
  let content = fs.readFileSync(path, 'utf8');

  // Title Replacements
  if (path.includes('chart-of-accounts')) {
    content = content.replace(
      /<div className="flex items-center space-x-2 pr-2 font-bold text-slate-600">\s*<span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent text-xs">(.*?)<\/span>/s,
      '<div className="bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] mb-6">\n          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">$1</h1>'
    );
    // Card
    content = content.replace(
      /className="flex-1 overflow-auto bg-white m-2 border border-slate-300 rounded-sm shadow-\[0_4px_20px_-4px_rgba\(52,211,153,0\.1\)\]"/,
      'className="flex-1 overflow-auto m-2 rounded-sm border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[1px] hover:shadow-md transition-all duration-300"'
    );
  }

  if (path.includes('general-ledger')) {
    content = content.replace(
      /<div className="p-1 px-2 border-b border-slate-300 bg-\[#E5E9EC\]">\s*<h1 className="font-extrabold text-xs bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">(.*?)<\/h1>\s*<\/div>/s,
      '<div className="bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] mb-6">\n        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">$1</h1>\n      </div>'
    );
    // Card replacements (two tabs containers, one items grid)
    content = content.replace(
      /className="border border-\[#B8C5D0\] bg-\[#F7F9FA\] shadow-\[0_4px_20px_-4px_rgba\(52,211,153,0\.1\)\] mb-1 hover:-translate-y-\[1px\] hover:shadow-sm transition-all duration-300"/,
      'className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[1px] hover:shadow-md transition-all duration-300 mb-1"'
    );
    content = content.replace(
      /className="border border-\[#B8C5D0\] bg-white shadow-\[0_4px_20px_-4px_rgba\(52,211,153,0\.1\)\] hover:-translate-y-\[1px\] hover:shadow-sm transition-all duration-300"/,
      'className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[1px] hover:shadow-md transition-all duration-300"'
    );
    content = content.replace(
      /className="mt-1 border border-\[#B8C5D0\] bg-\[#F7F9FA\] p-2 shadow-\[0_4px_20px_-4px_rgba\(52,211,153,0\.1\)\] hover:-translate-y-\[1px\] hover:shadow-sm transition-all duration-300"/,
      'className="mt-1 p-2 border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[1px] hover:shadow-md transition-all duration-300"'
    );
  }

  if (path.includes('bank-cash')) {
    content = content.replace(
      /<div className="font-extrabold text-xs bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent pr-2">\s*(.*?)\s*<\/div>/s,
      '<div className="bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] mb-6">\n          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">$1</h1>\n        </div>'
    );
    // Cards
    content = content.replace(
      /className="bg-white p-2 border border-\[#B8C5D0\] flex space-x-6 shadow-\[0_4px_20px_-4px_rgba\(52,211,153,0\.1\)\] hover:-translate-y-\[1px\] hover:shadow-sm transition-all duration-300 m-1 rounded-sm"/,
      'className="p-2 flex space-x-6 m-1 rounded-sm border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[1px] hover:shadow-md transition-all duration-300"'
    );
    content = content.replace(
      /className="flex-1 flex flex-col w-full border border-\[#B8C5D0\] bg-white shadow-\[0_4px_20px_-4px_rgba\(52,211,153,0\.1\)\] rounded-sm"/,
      'className="flex-1 flex flex-col w-full rounded-sm border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[1px] hover:shadow-md transition-all duration-300"'
    );
  }

  if (path.includes('depot-accounting')) {
    content = content.replace(
      /<div className="font-extrabold text-xs bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent pr-2 uppercase">\s*(.*?)\s*<\/div>/s,
      '<div className="bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] mb-6">\n          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">$1</h1>\n        </div>'
    );
    // Cards
    content = content.replace(
      /className="border border-\[#B8C5D0\] shadow-\[0_4px_20px_-4px_rgba\(52,211,153,0\.1\)\] hover:-translate-y-\[1px\] hover:shadow-sm transition-all duration-300 rounded-sm"/,
      'className="rounded-sm border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[1px] hover:shadow-md transition-all duration-300"'
    );
  }

  // Remove old hover colors from TR
  content = content.replace(/hover:bg-\[\#FFF8DC\]/g, 'hover:bg-slate-50 transition-colors');
  content = content.replace(/hover:bg-yellow-50/g, 'hover:bg-slate-50 transition-colors');
  content = content.replace(/hover:bg-blue-100/g, 'hover:bg-slate-50 transition-colors');

  // Add the required table row classes if missing
  const lines = content.split('\n');
  const newLines = lines.map(line => {
    if (line.includes('<tr ') && line.includes('className="')) {
      if (!line.includes('even:bg-slate-50/50')) {
        line = line.replace('className="', 'className="even:bg-slate-50/50 ');
      }
      if (!line.includes('hover:bg-slate-50')) {
        line = line.replace('className="', 'className="hover:bg-slate-50 transition-colors ');
      }
    }
    return line;
  });
  content = newLines.join('\n');

  fs.writeFileSync(path, content, 'utf8');
}

const files = [
  'f:/C-SAP/src/app/finance/chart-of-accounts/page.tsx',
  'f:/C-SAP/src/app/finance/general-ledger/new/page.tsx',
  'f:/C-SAP/src/app/finance/bank-cash/page.tsx',
  'f:/C-SAP/src/app/finance/depot-accounting/page.tsx'
];

files.forEach(f => processFile(f));
console.log('done');
