// Rebuild the static Tailwind stylesheets from tools/tailwind/tw-*.config.js.
// Run after editing src/*.jsx, *.html (classes), or the tw-*.config.js themes:
//   node scripts/build-css.js
// Output: assets/tw-index.css, assets/tw-app.css, assets/tw-pitch.css
// Requires network (npx downloads tailwindcss@3.4.13 on first run).
const { execSync } = require('child_process');
const path = require('path');
const dir = path.join(__dirname, '..', 'tools', 'tailwind');
for (const page of ['index', 'app', 'pitch']) {
  execSync(
    'npx -y tailwindcss@3.4.13 -c tw-' + page + '.config.js -i input.css -o ../../assets/tw-' + page + '.css --minify',
    { cwd: dir, stdio: 'inherit' }
  );
  console.log('assets/tw-' + page + '.css rebuilt');
}
console.log('CSS BUILD OK');
