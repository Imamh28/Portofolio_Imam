/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '15px',
    },

    extend: {
      colors: {
        primary: '#38bdf8',
        dark: '#1e293b',
      },

      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

