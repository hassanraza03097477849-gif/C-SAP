import re

file_path = 'f:/C-SAP/src/app/finance/statements/page.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Outer Page Container
content = content.replace(
    '<div className="flex flex-col h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 overflow-hidden">',
    '<div className="min-h-screen bg-slate-950 text-slate-300 p-6 font-sans flex flex-col gap-6 h-screen overflow-hidden">'
)

# 2. Page Title
content = content.replace(
    '<h1 className="text-xl font-semibold tracking-tight">Financial Statements (F.01)</h1>',
    '<h1 className="text-2xl font-bold text-white tracking-tight">Financial Statements (F.01)</h1>'
)

# 3. KPI Cards
content = content.replace(
    '<div className="bg-white dark:bg-zinc-950 p-4">',
    '<div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/60 rounded-xl p-4 flex flex-col shadow-xl">'
)

# 4. Main Table/Grid Container
content = content.replace(
    '<div className="flex-1 overflow-auto bg-white dark:bg-zinc-950">',
    '<div className="flex-1 bg-slate-900/50 backdrop-blur-xl border border-slate-800/60 rounded-xl flex flex-col overflow-hidden shadow-xl">'
)

# 5. Table Header (thead)
content = content.replace(
    '<thead className="sticky top-0 bg-white dark:bg-zinc-950 z-10 shadow-sm border-b border-zinc-300 dark:border-zinc-700">',
    '<thead className="sticky top-0 bg-slate-950/80 backdrop-blur-md z-10 border-b border-slate-800">'
)

# 6. Table Header Cells (th)
content = re.sub(
    r'<th className="[^"]*">',
    r'<th className="px-6 py-4 font-semibold text-slate-400 text-sm">',
    content
)

# 7. Table Rows (tr)
content = content.replace(
    '<tr className={`border-b border-zinc-200 dark:border-zinc-800 transition-colors ${rowBg}`}>',
    '<tr className={`hover:bg-slate-800/30 border-b border-slate-800/50 transition-colors cursor-pointer ${rowBg}`}>'
)

# Fix rowBg so it doesnt conflict and handles text colors
content = content.replace(
    """    const rowBg = depth === 0 
      ? 'bg-zinc-100/50 dark:bg-zinc-800/50 font-semibold' 
      : depth === 1 
      ? 'bg-zinc-50 dark:bg-zinc-800/30 font-medium' 
      : 'hover:bg-zinc-50 dark:hover:bg-zinc-800/20';""",
    """    const rowBg = depth === 0 
      ? 'font-semibold text-white' 
      : depth === 1 
      ? 'font-medium text-slate-200' 
      : 'text-slate-300';"""
)

# Replace remaining zinc/neutral with slate
content = content.replace('zinc', 'slate')
content = content.replace('neutral', 'slate')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print('Done!')
