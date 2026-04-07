/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Manrope', 'sans-serif']
      },
      colors: {
        ink: {
          50: '#f8fafc',
          100: '#e2e8f0',
          200: '#cbd5e1',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a'
        },
        mint: {
          100: '#d1fae5',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981'
        },
        ember: {
          100: '#ffedd5',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316'
        }
      },
      boxShadow: {
        soft: '0 20px 60px rgba(15, 23, 42, 0.14)'
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(148,163,184,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.18) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};
