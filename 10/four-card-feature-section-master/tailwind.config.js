/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      screens: {
        mobile: "375px",
        // => @media (min-width: 375px) { ... }

        desktop: "1440px",
        // => @media (min-width: 1440px) { ... }
      },
      colors: {
        "red-build": "hsl(0, 78%, 62%)",
        "cyan-build": "hsl(180, 62%, 55%)",
        "orange-build": "hsl(34, 97%, 64%)",
        "blue-build": "hsl(212, 86%, 64%)",
        "very-dark-blue": "hsl(234, 12%, 34%)",
        "grayish-blue": "hsl(229, 6%, 66%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
      },
      fontSize: {
        fs: "15px",
      },
    },
  },
  plugins: [require("daisyui")],
};
