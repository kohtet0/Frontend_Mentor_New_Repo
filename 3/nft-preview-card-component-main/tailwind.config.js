/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
    },
    extend: {
      screens: {
        mobile: "375px",
        // => @media (min-width: 375px) { ... }

        desktop: "410px",
        // => @media (min-width: 1440px) { ... }
      },
      colors: {
        // Primary
        "soft-blue": "hsl(215, 51%, 70%)",
        cyan: "hsl(178, 100%, 50%)",
        // neutral 
        "very-dark-blue(main-bg)": "hsl(217, 54%, 11%)",
        "very-dark-blue(card-bg)": "hsl(216, 50%, 16%)",
        "very-dark-blue(line)": "hsl(215, 32%, 27%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontSize: {
        fs: "18px",
      },
    },
  },
  plugins: [require("daisyui")],
};
