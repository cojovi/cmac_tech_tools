/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        // Brand Colors
        'brand': {
          teal: '#00FFC8',
          orange: '#FF6A00', 
          lime: '#C2FF00',
          dark: '#0E0E0F'
        },
        // Extended Grays
        gray: {
          950: '#0A0A0B',
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      backgroundImage: {
        'gradient-industrial': 'linear-gradient(135deg, #00FFC8 0%, #FF6A00 50%, #C2FF00 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        'grid-pattern': `
          linear-gradient(rgba(0, 255, 200, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 200, 0.1) 1px, transparent 1px)
        `,
      },
      boxShadow: {
        'glow-teal': '0 0 20px rgba(20, 184, 166, 0.3)',
        'glow-orange': '0 0 20px rgba(255, 106, 0, 0.3)',
        'glow-lime': '0 0 20px rgba(194, 255, 0, 0.3)',
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      letterSpacing: {
        'wider': '0.1em',
        'widest': '0.25em',
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
    },
  },
  plugins: [],
};