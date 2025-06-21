/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Poppins', 'sans-serif'],
      },
      colors: {
        stone: {
          50: '#faf9f7',
          100: '#f2f0eb',
          200: '#e8e4db',
          300: '#d9d2c4',
          400: '#c7bba7',
          500: '#b8a68f',
          600: '#a89580',
          700: '#8e7a6a',
          800: '#756559',
          900: '#5f5349',
        },
        gold: {
          50: '#fffdf7',
          100: '#fffbeb',
          200: '#fef3c7',
          300: '#fde68a',
          400: '#facc15',
          500: '#d97706',
          600: '#b45309',
          700: '#92400e',
          800: '#78350f',
          900: '#451a03',
        },
        maroon: {
          50: '#fdf2f2',
          100: '#fce8e6',
          200: '#fbd5d0',
          300: '#f8b4ab',
          400: '#f18d7f',
          500: '#e66a57',
          600: '#d04a3b',
          700: '#af3a2d',
          800: '#91342a',
          900: '#7a2e26',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};