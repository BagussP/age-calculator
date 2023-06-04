/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "Purple-main": "hsl(259, 100%, 65%)",
        "Light-red": "hsl(0, 100%, 67%)",
        "White-main": "hsl(0, 0%, 100%)",
        "Off-white": "hsl(0, 0%, 94%)",
        "Light-grey": "hsl(0, 0%, 86%)",
        "Smokey-grey": "hsl(0, 1%, 44%)",
        "Off-black": "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        Poppins: ["Poppins"],
      },
      borderRadius: {
        "1/2" : "25%"
      },
      fontSize : {
        50 : "50px"
      }
    },
  },
  plugins: [],
};
