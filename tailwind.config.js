 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}","./index.html","./src/index.js"],
  theme: {
    fontFamily:{
      primary:['Open Sans','sans-serif'],
     Inter:['Inter', 'sans-serif'],
     Montserrat:['Montserrat', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': '#0872BF',
        'background':'#141A1A'
      },
    },
  },
  plugins: [],
}
