/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        'x': '400px'
      },
      spacing: {
        // '4.75': '4.75rem'
      },
      fontFamily: {
        Karla: ['Karla', 'sans-serif'],
        Pacifico : ['Pacifico', 'cursive']
      },
      colors: {
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
        }
      },
      animation: {
        slideDown: 'slideDown 0.4s ease-in-out',
        loopScroll: 'loopScroll 15s linear infinite'
      }
    }
  },
  plugins: []
}

