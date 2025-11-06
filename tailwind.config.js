/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          50:  '#FFF7ED',
          100: '#FFEBD3',
          200: '#FFD7A8',
          300: '#FFB65C',
          400: '#FB923C',
          500: '#F97316', // color principal
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#431407',
        },
      },
    },
  },
  plugins: [],
}

