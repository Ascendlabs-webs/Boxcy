// Use the already-downloaded Babel to compile the script body, catching JSX errors
const fs = require('fs');
const vm = require('vm');
const path = require('path');
const babelSrc = fs.readFileSync(path.join(__dirname, '..', 'vendor', 'babel.min.js'), 'utf8');
const target = process.argv[2] || 'app.html';
const html = fs.readFileSync(path.join(__dirname, '..', target), 'utf8');
const m = html.match(/<script type="text\/babel"[^>]*>([\s\S]*?)<\/script>/);
const code = m[1];

// Run babel in a sandbox
const ctx = vm.createContext({ window: {}, self: {}, console, process: { env: {} }, global: {} });
vm.runInContext(babelSrc, ctx);

// Babel is now attached to ctx.Babel
const Babel = ctx.Babel;
if (!Babel) { console.error('Babel failed to load'); process.exit(1); }

try {
  const out = Babel.transform(code, { presets: ['react'] });
  console.log('OK · compiled ' + code.length + ' chars to ' + out.code.length + ' chars');
  // Quick scan for obvious runtime issues
  const lowered = out.code;
  if (/undefined reference/i.test(lowered)) console.warn('possible undefined ref');
} catch (e) {
  console.error('Babel error:', e.message);
  if (e.loc) console.error('  at line', e.loc.line, 'col', e.loc.column);
  process.exit(1);
}