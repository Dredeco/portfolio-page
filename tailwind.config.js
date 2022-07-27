/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      animation: {
        animate_bar_50: 'bar_50 2s linear forwards',
        animate_bar_100: 'bar_100 4s linear forwards',
      },
      keyframes: {
        bar_100: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        bar_50: {
          '0%': { width: '0%' },
          '100%': { width: '50%' },
        }
      }
    },
  },
  plugins: [],
}
