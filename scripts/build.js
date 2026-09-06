// Precompile inline <script type="text/babel"> JSX into plain JS files.
// This removes the 2.8MB runtime-Babel dependency on production/Vercel,
// which was the cause of the blank page ("Loading Bocxy..." stuck).
// Usage: node scripts/build.js [index.html app.html pitch.html]
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const root = path.join(__dirname, '..');
const babelSrc = fs.readFileSync(path.join(root, 'vendor', 'babel.min.js'), 'utf8');
const ctx = vm.createContext({ window: {}, self: {}, console, process: { env: {} }, global: {} });
vm.runInContext(babelSrc, ctx);
const Babel = ctx.Babel;
if (!Babel) { console.error('Babel failed to load'); process.exit(1); }

const targets = process.argv.slice(2);
const files = targets.length ? targets : ['index.html', 'app.html', 'pitch.html'];
const outDir = path.join(root, 'assets');
fs.mkdirSync(outDir, { recursive: true });

for (const file of files) {
  const htmlPath = path.join(root, file);
  let html = fs.readFileSync(htmlPath, 'utf8');
  const m = html.match(/<script type="text\/babel"[^>]*>([\s\S]*?)<\/script>/);
  if (!m) { console.log(file + ': no text/babel block, skipping'); continue; }
  const code = m[1];
  let out;
  try {
    out = Babel.transform(code, { presets: ['react'] }).code;
  } catch (e) {
    console.error(file + ': Babel error: ' + e.message);
    process.exit(1);
  }
  // sanity: no JSX angle-bracket component tags should remain
  if (/<[A-Z][A-Za-z]*[\s>]/.test(out)) {
    console.error(file + ': compiled output still contains JSX-like tags, aborting');
    process.exit(1);
  }
  const base = path.basename(file, '.html');
  const jsName = 'assets/' + base + '.js';
  fs.writeFileSync(path.join(root, jsName), '/* Precompiled from ' + file + ' — do not edit by hand. Edit the source inside ' + file + ' and re-run: node scripts/build.js */\n' + out);
  console.log(file + ': ' + code.length + ' chars JSX -> ' + jsName + ' (' + out.length + ' chars)');

  // Replace the runtime-babel script tag + inline JSX block with a plain script.
  html = html.replace(/<script src="\.\/vendor\/babel\.min\.js"[^>]*><\/script>\n?/, '');
  html = html.replace(
    /<script type="text\/babel"[^>]*>[\s\S]*?<\/script>/,
    '<script src="./' + jsName + '"></script>'
  );
  fs.writeFileSync(htmlPath, html);
  console.log(file + ': HTML now loads ./' + jsName + ' (runtime Babel removed)');
}
console.log('BUILD OK');
