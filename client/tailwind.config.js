/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      colors: {
        dark: {
          950: '#07070f',
          900: '#0d0d1a',
          800: '#12121f',
          700: '#1a1a2e',
          600: '#22223b',
          500: '#2d2d4e',
        },
        brand: {
          red: '#ea4b58ff',
          'red-dark': '#c1121f',
          'red-light': '#ff6b6b',
          sky: '#00b4d8',
          'sky-dark': '#0077b6',
          'sky-light': '#48cae4',
          gold: '#ffd60a',
          'gold-dark': '#f4a261',
          'gold-light': '#ffe566',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #07070f 0%, #0d0d1a 50%, #12121f 100%)',
        'card-gradient': 'linear-gradient(145deg, #1a1a2e, #12121f)',
        'red-gradient': 'linear-gradient(135deg, #e63946, #c1121f)',
        'sky-gradient': 'linear-gradient(135deg, #00b4d8, #0077b6)',
        'gold-gradient': 'linear-gradient(135deg, #ffd60a, #f4a261)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-up': 'slideUp 0.6s ease forwards',
        'slide-down': 'slideDown 0.3s ease forwards',
        'pulse-glow': 'pulseGlow 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        slideUp: { from: { opacity: 0, transform: 'translateY(30px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        slideDown: { from: { opacity: 0, transform: 'translateY(-10px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        pulseGlow: { '0%,100%': { boxShadow: '0 0 20px rgba(230,57,70,0.3)' }, '50%': { boxShadow: '0 0 40px rgba(230,57,70,0.7)' } },
        float: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-10px)' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
      },
      boxShadow: {
        'glow-red': '0 0 30px rgba(230, 57, 70, 0.4)',
        'glow-sky': '0 0 30px rgba(0, 180, 216, 0.4)',
        'glow-gold': '0 0 30px rgba(255, 214, 10, 0.4)',
        'card': '0 8px 32px rgba(0,0,0,0.4)',
        'card-hover': '0 16px 48px rgba(0,0,0,0.6)',
      },
      borderRadius: { xl: '1rem', '2xl': '1.5rem', '3xl': '2rem' },
    },
  },
  plugins: [],
}
