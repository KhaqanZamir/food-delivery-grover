// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'g-lighterRed': '#FEF5F5',
        'g-lightRed': '#FDECEC',
        'g-red': '#F55253',
        'g-gray': '#4D4D4D',
        'g-orange': '#FFA610',
      },
      boxShadow:{
        'cart-shadow': '-5px 9px 19px -1px rgba(238, 67, 67, 0.7)',
        'play-home': '0px 20px 49px -10px',
        'orange-home': '0px 7px 12px -8px',
        'delivery-time': '-10px 25px 30px -10px rgba(0,0,0,0.08)',
        'choose-us': '0px 15px 35px -20px black',
      }
    },
  },
  plugins: [],
}
