/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jet: '#363636',
        sandybrown: '#FF9E45',
        battleshipgrey: '#8A8E91'


    },
    fontFamily : {
      'Lato' : ['Lato' , 'sans-serif'],
      'Imprima' : ['Imprima' , 'sans-serif'],
    },
    backgroundImage: {
      'spices' : "url('../src/assets/bgff.jpg')",
    },
  },
  plugins: [
   
  ],
}
}
