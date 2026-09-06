// Theme source of truth for pitch.html — edit directly, then rebuild CSS:
//   node scripts/build-css.js
module.exports = Object.assign({
  theme: {
    extend: {
      colors: {
        ink: '#0F0E0C',
        charcoal: '#1A1714',
        cocoa: '#2A231D',
        smoke: '#3A302A',
        bone: '#F2EBDA',
        cream: '#EBE2CC',
        paper: '#F8F2E1',
        sand: '#DCCEB0',
        taupe: '#8A7967',
        dust: '#B6A687',
        clay: '#B5562F',
        'clay-deep': '#8C3D1B',
        ember: '#D87A4A',
        leaf: '#4E7056',
        rust: '#A2471F',
        success: '#3F7D54'
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace']
      },
      boxShadow: {
        soft: '0 24px 60px -24px rgba(15,14,12,0.25)',
        lift: '0 30px 60px -20px rgba(15,14,12,0.32)',
        ring: '0 0 0 1px rgba(15,14,12,0.06)'
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.025em'
      }
    }
  }
}, { content: ["C:/Users/sanjay/Documents/Project bocxy/pitch.html","C:/Users/sanjay/Documents/Project bocxy/src/pitch.jsx"] });
