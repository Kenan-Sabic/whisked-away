/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {

      colors: {
        jet: '#363636',
        sandybrown: '#FF9E45',
        battleshipgrey: '#8A8E91'
      },
        backgroundImage: {
        'hero-pattern': "url('../images/bgff.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }

    
    },
  },
  plugins: [],
}
