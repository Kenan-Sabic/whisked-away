/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        jet: "#363636",
        sandybrown: "#FF9E45",
        battleshipgrey: "#8A8E91",
        joshua: "#F4F1E0",
        platinum: "#D9D9D9",
        lightorange: "#FF9E33",
      },
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
        Imprima: ["Imprima", "sans-serif"],
      },
      backgroundImage: {
        spices: "url('../src/assets/bgff.jpg')",
        whisk: "url('../src/assets/whisk.png')",
        "whisk-small": "url('../src/assets/whisk-small.png')",
        // whisk icon credits https://www.flaticon.com/free-icons/churn  icons created by Ainul Muttakin
      },
    },
    plugins: [require('flowbite/plugin')],
  },
};
