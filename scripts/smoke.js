// Smoke test: execute the compiled bundles with stubbed React/DOM to catch
// module-scope runtime errors (undefined vars, bad data) without a browser.
// Component bodies don't run (render is stubbed), but all top-level code does.
const fs = require('fs');
const vm = require('vm');
const path = require('path');
const root = path.join(__dirname, '..');

function makeSandbox() {
  const stubFn = () => ({ __stub: true });
  const React = new Proxy({}, { get: (t, p) => (p === 'createElement' ? (...a) => ({ __el: a }) : stubFn) });
  const documentStub = { dataset: {}, style: {} };
  const sandbox = {
    console,
    React,
    ReactDOM: { createRoot: () => ({ render: () => {} }) },
    document: {
      getElementById: () => sandbox.__root,
      createElement: () => ({ style: {}, dataset: {} }),
      documentElement: {},
      addEventListener: () => {}
    },
    window: { addEventListener: () => {}, scrollY: 0, innerHeight: 800, location: { hash: '' } },
    requestAnimationFrame: () => 0,
    cancelAnimationFrame: () => {},
    setTimeout, clearTimeout, setInterval, clearInterval,
    IntersectionObserver: function () { this.observe = () => {}; this.disconnect = () => {}; },
    performance: { now: () => 0 }
  };
  sandbox.__root = { dataset: {}, appendChild: () => {} };
  sandbox.globalThis = sandbox;
  sandbox.self = sandbox;
  return sandbox;
}

let failed = false;
for (const f of ['assets/index.js', 'assets/app.js', 'assets/pitch.js']) {
  const code = fs.readFileSync(path.join(root, f), 'utf8');
  // strip the header comment line (may contain '--' sequences, harmless anyway)
  try {
    vm.runInNewContext(code, makeSandbox(), { filename: f, timeout: 10000 });
    console.log(f + ': SMOKE OK');
  } catch (e) {
    failed = true;
    console.error(f + ': SMOKE FAIL: ' + (e && e.message));
  }
}
process.exit(failed ? 1 : 0);
