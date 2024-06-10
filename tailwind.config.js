/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        'x': '400px',
        'l': '490px'
      },
      spacing: {
        // '4.75': '4.75rem'
      },
      fontFamily: {
        Karla: ['Karla', 'sans-serif'],
        Pacifico : ['Pacifico', 'cursive']
      },
      colors: {
        coffee: '#967259',
        'light-coffee': '#E3BC9A'
      },
      letterSpacing: {
        widest: '.125em'
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        loopScroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        }
      },
      animation: {
        slideDown: 'slideDown 0.4s ease-in-out',
        loopScroll: 'loopScroll 15s linear infinite',
        fadeIn: 'fadeIn .5s ease-in-out'
      }
    }
  },
  plugins: []
}
