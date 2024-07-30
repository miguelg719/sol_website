/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        goudy: ['Miller Banner Light', 'serif'],
      },
      transitionProperty: {
        'opacity': 'opacity',
      },
      dropShadow:{
        'shadow-lg': [
          '0 10px 8px rgb(0 0 0 / 0.04)',
          '0 4px 3px rgb(0 0 0 / 0.1)'
        ]
      }
    },
  },
  plugins: [],
}