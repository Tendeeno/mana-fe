/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#11161D',
        'gray': {
          'text': '#858E94'
        },
        'mana': {
          'yellow': '#F7BE19',
          'green': '#00CC96'
        },
      },
      gridTemplateRows: {
        '9': 'repeat(9, minmax(0, 1fr))'
      },
      minHeight: {
        'talent-item': '319px'
      },
      grayscale: {
        '0': 'grayscale(0%) !important'
      }
    },
  },
  plugins: [],
}