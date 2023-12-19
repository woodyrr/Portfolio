/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      
      spacing: {
        '5%': '5%',
        '1%': '1%',
        '20%': '20%'
      },
      fontFamily: {
        'font-fira': ['Fira Mono', 'monospace']
      }
    }
  },
  plugins: [],
}

