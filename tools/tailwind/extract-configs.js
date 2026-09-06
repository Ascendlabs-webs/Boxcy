// Extracts the `tailwind.config = {...}` object from each page's <head>
// and writes tools/tailwind/tw-<page>.config.js files for the static build.
// Run: node tools/tailwind/extract-configs.js
const fs = require('fs');
const vm = require('vm');
const path = require('path');
const root = path.join(__dirname, '..', '..');
const outDir = path.join(__dirname);
fs.mkdirSync(outDir, { recursive: true });

// Brace-match from `tailwind.config =` to its closing brace,
// honouring single/double-quoted strings (font names) — no regex/comments inside.
function extractConfig(html, page) {
  const anchor = 'tailwind.config =';
  const ai = html.indexOf(anchor);
  if (ai < 0) throw new Error(page + ': tailwind.config assignment not found');
  const start = html.indexOf('{', ai);
  let depth = 0, inS = null, esc = false;
  for (let i = start; i < html.length; i++) {
    const ch = html[i];
    if (inS) {
      if (esc) esc = false;
      else if (ch === '\\') esc = true;
      else if (ch === inS) inS = null;
    } else if (ch === "'" || ch === '"') {
      inS = ch;
    } else if (ch === '{') {
      depth++;
    } else if (ch === '}') {
      depth--;
      if (depth === 0) return html.slice(start, i + 1);
    }
  }
  throw new Error(page + ': unbalanced braces in tailwind.config');
}

for (const page of ['index', 'app', 'pitch']) {
  const html = fs.readFileSync(path.join(root, page + '.html'), 'utf8');
  const objSrc = extractConfig(html, page);
  // Validate it evaluates to an object.
  const cfg = vm.runInNewContext('(' + objSrc + ')', {});
  if (!cfg || typeof cfg !== 'object' || !cfg.theme) throw new Error(page + ': invalid config');
  const contentPaths = [
    path.join(root, page + '.html').split(path.sep).join('/'),
    path.join(root, 'src', page + '.jsx').split(path.sep).join('/')
  ];
  const clean =
    '// Auto-generated from ' + page + '.html — do not edit by hand.\n' +
    '// Regenerate: node tools/tailwind/extract-configs.js\n' +
    'module.exports = Object.assign(' + objSrc + ', { content: ' + JSON.stringify(contentPaths) + ' });\n';
  fs.writeFileSync(path.join(outDir, 'tw-' + page + '.config.js'), clean);
  console.log('tw-' + page + '.config.js written (' + Object.keys(cfg.theme.extend?.colors || {}).length + ' colors)');
}
console.log('CONFIG EXTRACT OK');
