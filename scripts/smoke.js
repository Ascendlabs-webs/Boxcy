// Smoke test: execute the compiled bundles with stubbed React/DOM to catch
// module-scope runtime errors (undefined vars, bad data) without a browser.
// Component bodies don't run (render is stubbed), but all top-level code does.
const fs = require('fs');
const vm = require('vm');
const path = require('path');
const root = path.join(__dirname, '..');

function makeDomNode(nodeType, nodeName) {
  return {
    nodeType, nodeName,
    namespaceURI: 'http://www.w3.org/1999/xhtml',
    dataset: {}, style: {},
    childNodes: [], children: [], firstChild: null,
    ownerDocument: null, // wired below
    parentNode: null,
    addEventListener: () => {}, removeEventListener: () => {},
    appendChild(c) { this.childNodes.push(c); return c; },
    removeChild(c) { return c; },
    insertBefore(c) { return c; },
    setAttribute: () => {}, getAttribute: () => null,
    getRootNode() { return this.ownerDocument; }
  };
}

function makeSandbox() {
  const stubFn = () => ({ __stub: true });
  const React = new Proxy(
    {
      version: '18.3.1',
      createElement: (...a) => ({ __el: a }),
      Component: class {},
      Fragment: 'fragment'
    },
    { get: (t, p) => (p in t ? t[p] : stubFn) }
  );
  const sandbox = {};
  const doc = {
    nodeType: 9, nodeName: '#document',
    dataset: {}, style: {},
    documentElement: null,
    defaultView: null,
    addEventListener: () => {}, removeEventListener: () => {},
    createElement: () => { const n = makeDomNode(1, 'DIV'); n.ownerDocument = doc; return n; },
    createTextNode: (t) => ({ nodeType: 3, nodeName: '#text', textContent: t }),
    getElementById: () => sandbox.__root
  };
  sandbox.console = console;
  sandbox.React = React;
  // NOTE: ReactDOM is the REAL inlined react-dom — only React + DOM are stubbed.
  sandbox.ReactDOM = undefined; // placeholder, replaced per-test below
  sandbox.document = doc;
  sandbox.window = {
    addEventListener: () => {}, removeEventListener: () => {},
    scrollY: 0, innerHeight: 800, location: { hash: '' },
    document: doc, navigator: { userAgent: 'smoke' }
  };
  doc.defaultView = sandbox.window;
  doc.documentElement = makeDomNode(1, 'HTML');
  doc.documentElement.ownerDocument = doc;
  sandbox.__root = makeDomNode(1, 'DIV');
  sandbox.__root.ownerDocument = doc;
  sandbox.requestAnimationFrame = () => 0;
  sandbox.cancelAnimationFrame = () => {};
  sandbox.setTimeout = setTimeout; sandbox.clearTimeout = clearTimeout;
  sandbox.setInterval = setInterval; sandbox.clearInterval = clearInterval;
  sandbox.IntersectionObserver = function () { this.observe = () => {}; this.disconnect = () => {}; };
  sandbox.performance = { now: () => 0 };
  sandbox.MessageChannel = undefined;
  sandbox.globalThis = sandbox;
  sandbox.self = sandbox;
  return sandbox;
}

let failed = false;
// Test the code AS SHIPPED: extracted from the inlined HTML regions
// (a previous bug corrupted only the inlined copies, which assets-only
// testing missed).
for (const page of ['index', 'app', 'pitch']) {
  const html = fs.readFileSync(path.join(root, page + '.html'), 'utf8');
  const region = html.match(/<!--BOCXY-APP-START-->([\s\S]*?)<!--BOCXY-APP-END-->/);
  if (!region) { console.error(page + '.html: no inlined region found'); process.exit(1); }
  const scripts = [...region[1].matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
  if (scripts.length !== 3) { console.error(page + '.html: expected 3 inlined scripts, found ' + scripts.length); process.exit(1); }
  const label = page + '.html[inlined:' + page + '.js]';
  try {
    vm.runInNewContext(scripts.join('\n;\n'), makeSandbox(), { filename: label, timeout: 10000 });
    console.log(label + ': SMOKE OK');
  } catch (e) {
    failed = true;
    console.error(label + ': SMOKE FAIL: ' + (e && e.message));
  }
}
process.exit(failed ? 1 : 0);
