/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
    extend: {
      screens: {
        mobile: "375px",
        // => @media (min-width: 375px) { ... }

        desktop: "1440px",
        // => @media (min-width: 1440px) { ... }
      },
      colors: {
        vdgb: "hsl(217, 19%, 35%)",
        ddb: "hsl(214, 17%, 51%)",
        gb: "hsl(212, 23%, 69%)",
        lgb: "hsl(210, 46%, 95%)",
      },
      fontSize: {
        fs: "13px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
