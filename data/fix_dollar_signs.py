#!/usr/bin/env python3
"""
fix_dollar_signs.py
────────────────────
Fixes remaining LaTeX/dollar rendering issues in data.daniellab.math.js.

Run from the same folder as the file:
    python3 fix_dollar_signs.py

What it fixes:
  1. \\( ... \\)  →  $ ... $   (inline LaTeX delimiters → KaTeX dollar style)
  2. \\[ ... \\]  →  $$ ... $$ (display LaTeX delimiters → KaTeX dollar style)
  3. $14, $1.50  →  &#36;14    (currency dollar signs → HTML entity)
"""

import re, shutil, os

INPUT  = 'data.daniellab.math.js'
BACKUP = 'data.daniellab.math.js.bak'

def fix(content):
    # ── Step 1: convert \( \) inline math to $ $ ─────────────────────────
    # These appear as \\( and \\) in JS string literals
    content = re.sub(r'\\\\\(', '$', content)
    content = re.sub(r'\\\\\)', '$', content)

    # ── Step 2: convert \[ \] display math to $$ $$ ──────────────────────
    content = re.sub(r'\\\\\[', '$$', content)
    content = re.sub(r'\\\\\]', '$$', content)

    # ── Step 3: escape currency dollar signs ─────────────────────────────
    # Match $ followed by a digit (e.g. $14, $1.50) that ISN'T already &#36;
    # Use negative lookbehind to avoid double-escaping
    content = re.sub(r'(?<!&#36;)\$(?=\d)', '&#36;', content)

    return content

if __name__ == '__main__':
    if not os.path.exists(INPUT):
        print(f'ERROR: {INPUT} not found in current directory.')
        exit(1)

    original = open(INPUT, encoding='utf-8').read()
    fixed    = fix(original)

    changes = sum(1 for a, b in zip(original.splitlines(), fixed.splitlines()) if a != b)
    if changes == 0 and len(fixed) == len(original):
        print('No changes needed — file looks clean.')
        exit(0)

    # Backup original
    shutil.copy(INPUT, BACKUP)
    print(f'Backup saved: {BACKUP}')

    open(INPUT, 'w', encoding='utf-8').write(fixed)
    print(f'Fixed: {INPUT}')
    print(f'Lines changed: ~{changes}')
