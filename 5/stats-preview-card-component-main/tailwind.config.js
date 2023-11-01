/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      "Lexend-Deca": ["Lexend Deca", "sans-serif"],
    },
    extend: {
      screens: {
        mobile: "375px",
        // => @media (min-width: 375px) { ... }

        desktop: "1440px",
        // => @media (min-width: 1440px) { ... }
      },
      colors: {
        // main bg
        "very-dark-blue": "hsl(233, 47%, 7%)",
        // card bg
        "dark-desaturated-blue": "hsl(244, 38%, 16%)",
        // accent
        "soft-violet": "hsl(277, 64%, 61%)",
        // main heading, stats
        white: "hsl(0, 0%, 100%)",
        // main para
        "slightly-trans-white": "hsla(0, 0%, 100%, 0.75)",
        // stat heading
        "slightly-trans-white-stat": "hsla(0, 0%, 100%, 0.6)",
      },
      fontSize: {
        fs: "15px",
      },
    },
  },
  plugins: [],
};
