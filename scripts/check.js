const fs = require('fs');
const s = fs.readFileSync('C:/Users/sanjay/Documents/Project bocxy/app.html', 'utf8');
const m = s.match(/<script type="text\/babel"[^>]*>([\s\S]*?)<\/script>/);
if (!m) { console.error('no script'); process.exit(1); }
const code = m[1];
// strip JSX to confirm basic JS syntax (Babel transforms JSX, but a sanity check on the wrapping structure is helpful)
console.log('script bytes:', code.length);
console.log('react imports:', /const \{[^}]*useState[^}]*\} = React/.test(code));
console.log('router present:', /useRoute/.test(code));
console.log('home page:', /function HomePage/.test(code));
console.log('discover page:', /function DiscoverPage/.test(code));
console.log('business page:', /function BusinessPage/.test(code));
console.log('about page:', /function AboutPage/.test(code));
console.log('journal page:', /function JournalPage/.test(code));
// balance check
const open = (code.match(/<\(/g) || []).length;
const close = (code.match(/\)>/g) || []).length;
console.log('JSX fragment balance:', open, '/', close);