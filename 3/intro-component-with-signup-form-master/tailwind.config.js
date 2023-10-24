/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      screens: {
        mobile: "375px",
        // => @media (min-width: 375px) { ... }

        desktop: "1440px",
        // => @media (min-width: 1440px) { ... }
      },
      colors: {
        red: "hsl(0, 100%, 74%, 0.7) ",
        green: "hsl(154, 59%, 51%)",
        blue: "hsl(248, 32%, 49%)",
        "dark-blue": "hsl(249, 10%, 26%, 0.5) ",
        "grayish-blue": "hsl(246, 25%, 77%)",
      },
      fontSize: {
        fs: "16px",
      },
    },
  },
  plugins: [],
};
