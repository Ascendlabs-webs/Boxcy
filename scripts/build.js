// Build: src/*.jsx -> Babel -> assets/*.js -> inlined into *.html
// The pages become self-contained: React + app code ship INSIDE the HTML,
// so startup needs zero critical same-origin script requests (the cause of
// the blank page on Vercel). Only Tailwind stays external (styling only).
// Workflow for future edits:
//   1. Edit src/<page>.jsx (app logic) or the static parts of <page>.html
//      (everything OUTSIDE the BOCXY-APP markers).
//   2. Run: node scripts/build.js [index|app|pitch]
//   3. If you added/removed CSS classes, also run: node scripts/build-css.js
//   4. Commit assets/, src/ and *.html, push, redeploy.
// Usage: node scripts/build.js [index app pitch]
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const root = path.join(__dirname, '..');
const babelSrc = fs.readFileSync(path.join(root, 'vendor', 'babel.min.js'), 'utf8');
const ctx = vm.createContext({ window: {}, self: {}, console, process: { env: {} }, global: {} });
vm.runInContext(babelSrc, ctx);
const Babel = ctx.Babel;
if (!Babel) { console.error('Babel failed to load'); process.exit(1); }

const wanted = process.argv.slice(2);
const pages = (wanted.length ? wanted : ['index', 'app', 'pitch']).map(b => ({
  base: b,
  src: b + '.jsx',
  html: b + '.html',
  js: 'assets/' + b + '.js'
}));

const react = fs.readFileSync(path.join(root, 'vendor', 'react.production.min.js'), 'utf8');
const reactDom = fs.readFileSync(path.join(root, 'vendor', 'react-dom.production.min.js'), 'utf8');
for (const [name, code] of [['react', react], ['react-dom', reactDom]]) {
  if (/<\/script/i.test(code)) { console.error(name + ': unsafe to inline (contains </script)'); process.exit(1); }
}

for (const p of pages) {
  const srcCode = fs.readFileSync(path.join(root, 'src', p.src), 'utf8');
  let compiled;
  try {
    compiled = Babel.transform(srcCode, { presets: ['react'] }).code;
  } catch (e) {
    console.error(p.src + ': Babel error: ' + e.message);
    process.exit(1);
  }
  if (/<[A-Z][A-Za-z]*[\s>]/.test(compiled)) {
    console.error(p.src + ': compiled output still contains JSX-like tags, aborting');
    process.exit(1);
  }
  if (/<\/script/i.test(compiled)) {
    console.error(p.src + ': compiled output unsafe to inline (contains </script), aborting');
    process.exit(1);
  }
  fs.mkdirSync(path.join(root, 'assets'), { recursive: true });
  fs.writeFileSync(
    path.join(root, p.js),
    '/* Compiled from src/' + p.src + ' — do not edit by hand. Edit src/' + p.src + ' and re-run: node scripts/build.js */\n' + compiled
  );

  const region =
    '<!--BOCXY-APP-START-->\n' +
    '<script>/* react.production.min.js v18.3.1 (inlined for reliability) */\n' + react + '\n</script>\n' +
    '<script>/* react-dom.production.min.js (inlined for reliability) */\n' + reactDom + '\n</script>\n' +
    '<script>/* compiled src/' + p.src + ' (inlined for reliability) */\n' + compiled + '\n</script>\n' +
    '<!--BOCXY-APP-END-->';

  const htmlPath = path.join(root, p.html);
  let html = fs.readFileSync(htmlPath, 'utf8');
  const marked = /<!--BOCXY-APP-START-->[\s\S]*?<!--BOCXY-APP-END-->/;
  // NOTE: replacement MUST be a function — the region is minified code full of
  // `$&`/`$'`/`$`` sequences which String.replace would otherwise substitute.
  if (marked.test(html)) {
    html = html.replace(marked, () => region);
    console.log(p.html + ': refreshed inlined region');
  } else {
    // First run: replace the three external script tags with the region.
    const tags =
      '<script src="./vendor/react.production.min.js" crossorigin></script>\n' +
      '<script src="./vendor/react-dom.production.min.js" crossorigin></script>\n' +
      '<script src="./' + p.js + '"></script>';
    if (!html.includes(tags)) { console.error(p.html + ': expected script tags not found, aborting'); process.exit(1); }
    html = html.replace(tags, () => region);
    console.log(p.html + ': external scripts replaced with inlined region');
  }
  fs.writeFileSync(htmlPath, html);
  // Self-verify: the inlined copy must byte-match the compiled output.
  const check = fs.readFileSync(htmlPath, 'utf8');
  const block = check.match(/\/\* compiled src\/.*? \*\//);
  const want = '/* compiled src/' + p.src + ' (inlined for reliability) */\n' + compiled + '\n</script>';
  if (!check.includes(want)) {
    console.error(p.html + ': VERIFY FAIL — inlined copy differs from compiled output, aborting');
    process.exit(1);
  }
  void block;
  console.log(p.base + ': src ' + srcCode.length + ' -> compiled ' + compiled.length + ' -> inlined + verified');
}
console.log('BUILD OK');
