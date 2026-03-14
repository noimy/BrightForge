/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        forge: {
          50: '#faf7f2',
          100: '#f2ebe0',
          200: '#e2d3bc',
          300: '#cdb490',
          400: '#b8916a',
          500: '#a87652',
          600: '#956046',
          700: '#7c4d3c',
          800: '#663f36',
          900: '#54352f',
          950: '#2d1a17',
        },
        ember: {
          400: '#ff6b35',
          500: '#f4511e',
          600: '#e03d0a',
        },
        ink: '#1a1208',
        cream: '#faf7f2',
        stone: '#8c7b6e',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'slide-right': 'slideRight 0.6s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
