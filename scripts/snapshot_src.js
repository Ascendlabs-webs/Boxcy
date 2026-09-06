// One-off: extract the last inline-JSX sources from git history into src/*.jsx
// so they remain editable after we switch to precompiled + inlined bundles.
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
fs.mkdirSync(path.join(root, 'src'), { recursive: true });
const jobs = [
  ['55bb660:index.html', 'src/index.jsx'],
  ['55bb660:app.html', 'src/app.jsx'],
  ['55bb660:pitch.html', 'src/pitch.jsx']
];
for (const [ref, out] of jobs) {
  const html = execSync('git show ' + ref, { cwd: root, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 });
  const m = html.match(/<script type="text\/babel"[^>]*>([\s\S]*?)<\/script>/);
  if (!m) { console.error('no babel block in ' + ref); process.exit(1); }
  fs.writeFileSync(path.join(root, out), m[1]);
  console.log(out + ': ' + m[1].length + ' chars');
}
console.log('SRC SNAPSHOT OK');
