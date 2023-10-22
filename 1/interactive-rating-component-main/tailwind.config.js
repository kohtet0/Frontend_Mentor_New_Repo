/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["Overpass", "sans-serif"],
    },
    extend: {
      screens: {
        mobile: "375px",
        // => @media (min-width: 375px) { ... }

        desktop: "1440px",
        // => @media (min-width: 1440px) { ... }
      },
      colors: {
        orange: "hsl(25, 97%, 53%)",
        white: "hsl(0, 0%, 100%)",
        "light-grey": "hsl(217, 12%, 63%)",
        "medium-grey": " hsl(216, 12%, 54%)",
        "dark-blue": "hsl(213, 19%, 18%)",
        "very-dark-blue": "hsl(216, 12%, 8%)",
      },
      fontSize: {
        fs: "15px",
      },
    },
  },
  plugins: [require("daisyui")],
};
