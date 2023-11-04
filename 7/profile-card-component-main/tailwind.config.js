/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      sans: ["Kumbh Sans", "sans-serif"],
    },
    extend: {
      screens: {
        mobile: "375px",
        // => @media (min-width: 375px) { ... }

        desktop: "1440px",
        // => @media (min-width: 1440px) { ... }
      },
      colors: {
        "dark-cyan": "hsl(185, 75%, 39%)",
        "very-dark-desa-blue": "hsl(229, 23%, 23%)",
        "dark-gray-blue": "hsl(227, 10%, 46%)",
        "dark-gray": "hsl(0, 0%, 59%)",
      },
      fontSize: {
        fs: "15px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
