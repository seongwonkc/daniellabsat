#!/usr/bin/env python3
"""
DanielLab Math Question Bank Builder
────────────────────────────────────
Run from the folder containing your JSON run files:

    python3 build_math_bank.py

Reads all alg_run_*.json and adv_run_*.json files in the current directory,
converts them to DanielLab practice format, and writes data.daniellab.math.js.

Add psda_run_*.json and geo_run_*.json when ready — they'll be picked up
automatically and added to MATH_QUESTIONS.
"""

import json, re, glob, os, sys

# ── SVG generator for coordinate_plane stimuli ──────────────────────────────
def make_svg(stimulus):
    s = stimulus
    xR, yR = s['xRange'], s['yRange']
    W, H, pad = 280, 220, 28
    xMin, xMax = xR; yMin, yMax = yR
    xSpan = xMax - xMin; ySpan = yMax - yMin
    def sx(x): return pad + (x - xMin) / xSpan * (W - 2*pad)
    def sy(y): return H - pad - (y - yMin) / ySpan * (H - 2*pad)
    x0, y0 = sx(0), sy(0)
    p = [f'<svg viewBox="0 0 {W} {H}" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:{W}px;display:block;margin:0 auto;">']
    p.append(f'<rect width="{W}" height="{H}" fill="#f8f9fa" rx="4"/>')
    for xi in range(xMin, xMax+1):
        p.append(f'<line x1="{sx(xi):.1f}" y1="{pad}" x2="{sx(xi):.1f}" y2="{H-pad}" stroke="#e0e0e0" stroke-width="0.7"/>')
    for yi in range(yMin, yMax+1):
        p.append(f'<line x1="{pad}" y1="{sy(yi):.1f}" x2="{W-pad}" y2="{sy(yi):.1f}" stroke="#e0e0e0" stroke-width="0.7"/>')
    p.append(f'<line x1="{pad}" y1="{y0:.1f}" x2="{W-pad}" y2="{y0:.1f}" stroke="#444" stroke-width="1.5"/>')
    p.append(f'<polygon points="{W-pad},{y0:.1f} {W-pad-6},{y0-3:.1f} {W-pad-6},{y0+3:.1f}" fill="#444"/>')
    p.append(f'<line x1="{x0:.1f}" y1="{pad}" x2="{x0:.1f}" y2="{H-pad}" stroke="#444" stroke-width="1.5"/>')
    p.append(f'<polygon points="{x0:.1f},{pad} {x0-3:.1f},{pad+7:.1f} {x0+3:.1f},{pad+7:.1f}" fill="#444"/>')
    p.append(f'<text x="{W-pad+2}" y="{y0+4:.1f}" font-size="11" fill="#555" font-style="italic">x</text>')
    p.append(f'<text x="{x0+4:.1f}" y="{pad+2}" font-size="11" fill="#555" font-style="italic">y</text>')
    for xi in range(xMin, xMax+1):
        if xi == 0: continue
        p.append(f'<line x1="{sx(xi):.1f}" y1="{y0-3:.1f}" x2="{sx(xi):.1f}" y2="{y0+3:.1f}" stroke="#666" stroke-width="1"/>')
        p.append(f'<text x="{sx(xi)-3:.1f}" y="{y0+14:.1f}" font-size="8" fill="#777">{xi}</text>')
    for yi in range(yMin, yMax+1):
        if yi == 0: continue
        p.append(f'<line x1="{x0-3:.1f}" y1="{sy(yi):.1f}" x2="{x0+3:.1f}" y2="{sy(yi):.1f}" stroke="#666" stroke-width="1"/>')
        p.append(f'<text x="{x0-16:.1f}" y="{sy(yi)+4:.1f}" font-size="8" fill="#777">{yi}</text>')
    for el in s['elements']:
        if el['kind'] == 'line':
            p1, p2 = el['through']
            color = el.get('style', {}).get('strokeColor', '#1a56db')
            if p2[0] != p1[0]:
                m = (p2[1]-p1[1])/(p2[0]-p1[0])
                b = p1[1] - m*p1[0]
                pts = []
                for x in [xMin, xMax]:
                    y = m*x + b
                    if yMin <= y <= yMax: pts.append((x, y))
                for y in [yMin, yMax]:
                    if m != 0:
                        x = (y - b) / m
                        if xMin <= x <= xMax: pts.append((x, y))
                if len(pts) >= 2:
                    pts = sorted(set([(round(x,6), round(y,6)) for x,y in pts]))
                    p.append(f'<line x1="{sx(pts[0][0]):.1f}" y1="{sy(pts[0][1]):.1f}" x2="{sx(pts[-1][0]):.1f}" y2="{sy(pts[-1][1]):.1f}" stroke="{color}" stroke-width="2.2"/>')
            else:
                p.append(f'<line x1="{sx(p1[0]):.1f}" y1="{pad}" x2="{sx(p1[0]):.1f}" y2="{H-pad}" stroke="{color}" stroke-width="2.2"/>')
        elif el['kind'] == 'point':
            x, y = el['coords']
            color = el.get('style', {}).get('fillColor', '#1a56db')
            p.append(f'<circle cx="{sx(x):.1f}" cy="{sy(y):.1f}" r="4" fill="{color}"/>')
            if el.get('label'):
                lbl = el['label'].replace('−', '&#x2212;')
                lx = sx(x) + 7; ly = sy(y) - 7
                if lx > W - 60: lx = sx(x) - 65
                if ly < 15:     ly = sy(y) + 18
                p.append(f'<text x="{lx:.1f}" y="{ly:.1f}" font-size="10" fill="{color}">{lbl}</text>')
    p.append('</svg>')
    return ''.join(p)

# ── Helpers ──────────────────────────────────────────────────────────────────
def clean_latex(s):
    """Strip \\( \\) inline wrappers. JSON gives single-backslash \\( in Python string."""
    return re.sub(r'\\\(|\\\)', '', s).strip()

def is_equation_context(ctx):
    if not ctx: return False
    lines = [l.strip() for l in ctx.strip().split('\n') if l.strip()]
    if len(lines) >= 2 and all('=' in l for l in lines): return True
    if len(lines) == 1 and '=' in lines[0] and not lines[0].endswith('.') and len(lines[0]) < 80:
        return True
    return False

def context_to_katex(ctx):
    lines = [clean_latex(l.strip()) for l in ctx.strip().split('\n') if l.strip()]
    if len(lines) == 1:
        return f'$${lines[0]}$$'
    # Multiple equations: one $$ block with \\ line break (LaTeX newline in display math)
    return '$$' + ' \\\\ '.join(lines) + '$$'

def escape_currency(s):
    """Replace currency $ signs (e.g. $14, $1.50) with &#36; so KaTeX ignores them."""
    import re
    return re.sub(r'\$(?=[\d(])', '&#36;', s)

def normalize_latex(s):
    """Convert \\( \\) inline math delimiters to $ $ for consistency."""
    if not s: return s
    s = re.sub(r'\\\(', '$', s)
    s = re.sub(r'\\\)', '$', s)
    s = re.sub(r'\\\[', '$$', s)
    s = re.sub(r'\\\]', '$$', s)
    return s

def js_escape(s):
    """Escape for JS single-quoted string — no literal newlines."""
    if s is None: return 'null'
    s = str(s)
    s = s.replace('\\', '\\\\')
    s = s.replace("'", "\\'")
    s = s.replace('\n', '\\n')
    s = s.replace('\r', '')
    return f"'{s}'"

def convert_question(q):
    context  = q.get('context') or ''
    stimulus = q.get('stimulus')
    table    = q.get('table')
    question = q['question']
    choices  = q.get('choices')
    answer   = q['answer']
    is_spr   = q['isSPR']
    expl     = q.get('explanation', '')

    text = (context.rstrip() + ' ' + question) if (context and not is_equation_context(context)) else question
    text = escape_currency(normalize_latex(text))
    expl = normalize_latex(expl)

    katex = context_to_katex(context) if (context and is_equation_context(context)) else None
    graph = make_svg(stimulus) if (stimulus and stimulus.get('type') == 'coordinate_plane') else None

    spr_answer = spr_answer_num = None
    if is_spr:
        spr_answer = str(answer)
        try:
            spr_answer_num = float(spr_answer.split('/')[0]) / float(spr_answer.split('/')[1]) \
                if '/' in spr_answer else float(spr_answer)
        except: pass

    choices_str = 'null'
    if choices and not is_spr:
        items = ', '.join(f"{js_escape(k)}: {js_escape(normalize_latex(v))}" for k, v in choices.items())
        choices_str = '{ ' + items + ' }'

    return '\n'.join([
        '  {',
        f"    id: {js_escape(q['id'])},",
        f"    domain: {js_escape(q['domain'])},",
        f"    type: {js_escape(q['type'])},",
        f"    katex: {js_escape(katex) if katex else 'null'},",
        f"    graph: {'`' + graph + '`' if graph else 'null'},",
        f"    text: {js_escape(text)},",
        f"    table: {js_escape(table) if table else 'null'},",
        f"    choices: {choices_str},",
        f"    answer: {js_escape(answer) if not is_spr else 'null'},",
        f"    isSPR: {'true' if is_spr else 'false'},",
        f"    sprAnswer: {js_escape(spr_answer) if spr_answer else 'null'},",
        f"    sprAnswerNum: {spr_answer_num if spr_answer_num is not None else 'null'},",
        f"    explanation: {js_escape(expl)},",
        '  },',
    ])

def load_json(path):
    raw = open(path).read()
    return json.loads(raw[:raw.rfind(']')+1])

def load_domain_runs(prefix):
    """Load all run files matching prefix_run_*.json, sorted numerically."""
    files = sorted(glob.glob(f'{prefix}_run_*.json'),
                   key=lambda f: int(re.search(r'_run_(\d+)', f).group(1)))
    questions = []
    for f in files:
        questions.extend(load_json(f))
    return questions, files

# ── Main ─────────────────────────────────────────────────────────────────────
DOMAIN_CONFIGS = [
    # (file_prefix, JS_const_name, domain_label)
    ('alg',  'DL_ALGEBRA',       'Algebra'),
    ('adv',  'DL_ADVANCED_MATH', 'Advanced Math'),
    ('psda', 'DL_PSDA',          'Problem Solving & Data'),
    ('geo',  'DL_GEOMETRY',      'Geometry'),
]

output = [
    '/* ──────────────────────────────────────────────────────────',
    '   Math Question Bank — DanielLab',
    '   Auto-generated by build_math_bank.py — do not edit by hand',
    '──────────────────────────────────────────────────────────── */',
    '',
]

all_consts = []
total = 0

for prefix, const_name, label in DOMAIN_CONFIGS:
    questions, files = load_domain_runs(prefix)
    if not questions:
        continue
    total += len(questions)
    print(f'  {label}: {len(questions)} questions from {len(files)} file(s)')
    output.append(f'// {label} ({len(questions)} questions)')
    output.append(f'const {const_name} = [')
    for q in questions:
        output.append(convert_question(q))
    output.append('];')
    output.append('')
    all_consts.append(const_name)

output += [
    'const MATH_QUESTIONS = [',
    *[f'  ...{c},' for c in all_consts],
    '];',
]

result = '\n'.join(output)
out_path = 'data.daniellab.math.js'
with open(out_path, 'w') as f:
    f.write(result)

print(f'\n✓ Written: {out_path}  ({total} total questions)')