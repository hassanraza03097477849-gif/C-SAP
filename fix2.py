import glob
import os

files = glob.glob('src/app/**/page.tsx', recursive=True)
for f in files:
    content = open(f, 'r', encoding='utf-8').read()
    if r'\${' in content:
        print(f"Fixing {f}")
        content = content.replace(r'\${', '${')
        open(f, 'w', encoding='utf-8').write(content)
