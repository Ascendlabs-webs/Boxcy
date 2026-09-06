// Theme source of truth for app.html — edit directly, then rebuild CSS:
//   node scripts/build-css.js
module.exports = Object.assign({
  theme: {
    extend: {
      colors: {
        ink: '#1A130C',
        espresso: '#221812',
        cocoa: '#372A20',
        charcoal: '#3A302A',
        bone: '#F6F1E6',
        cream: '#F2EADB',
        paper: '#FBF7EE',
        parchment: '#EBE1CD',
        sand: '#DCCEB4',
        dust: '#B8A98C',
        taupe: '#8A7967',
        clay: '#B5562F',
        'clay-deep': '#8C3D1B',
        ember: '#D87A4A',
        blush: '#E7D3C2',
        leaf: '#4E7056',
        rose: '#C5846A'
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'monospace']
      },
      boxShadow: {
        soft: '0 24px 60px -24px rgba(26,19,12,0.25)',
        lift: '0 30px 60px -20px rgba(26,19,12,0.28)',
        ring: '0 0 0 1px rgba(26,19,12,0.06)'
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.025em'
      }
    }
  }
}, { content: ["C:/Users/sanjay/Documents/Project bocxy/app.html","C:/Users/sanjay/Documents/Project bocxy/src/app.jsx"] });
