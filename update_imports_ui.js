const fs = require('fs');
const files = [
  'f:/C-SAP/src/app/finance/assets/new/page.tsx',
  'f:/C-SAP/src/app/finance/tax/page.tsx',
  'f:/C-SAP/src/app/finance/statements/page.tsx',
  'f:/C-SAP/src/app/finance/audit/page.tsx'
];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');

  // Title container
  const titleRegex = /<div className="flex items-center justify-between[^>]*>\s*<div className="font-bold uppercase flex items-center gap-3">\s*<span[^>]*>(.*?)<\/span>\s*<span[^>]*>(.*?)<\/span>\s*<\/div>\s*<div className="flex gap-2">/g;
  content = content.replace(titleRegex, (match, p1, p2) => {
    return `<div className="bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] mb-6">
        <div className="flex items-center justify-between">
          <div className="font-bold uppercase flex items-center gap-3">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-3 py-1 rounded-md shadow-sm">${p1}</span>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">${p2}</h1>
          </div>
          <div className="flex gap-2">`;
  });

  // Card component
  content = content.replace(/<Card className="[^"]*"/g, '<Card className="border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(52,211,153,0.1)] bg-white/80 backdrop-blur-md hover:-translate-y-[1px] hover:shadow-md transition-all duration-300"');

  // Table Row
  content = content.replace(/<TableRow([^>]*)className="/g, '<TableRow$1className="even:bg-slate-50/50 hover:bg-slate-50 transition-colors ');

  fs.writeFileSync(f, content);
  console.log('Updated ' + f);
});
