/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      sans: ["Red Hat Display", "sans-serif"],
    },
    extend: {
      screens: {
        mobile: { max: "375px" },
        desktop: { max: "1440px" },
      },
      colors: {
        "pale-blue": "hsl(225, 100%, 94%)",
        "bright-blue": "hsl(245, 75%, 52%)",
        "very-pale-blue": "hsl(225, 100%, 98%)",
        "desaturated-blue": " hsl(224, 23%, 55%)",
        "dark-blue": "hsl(223, 47%, 23%)",
      },
      fontSize: {
        fs: "16px",
      },
    },
  },
  plugins: [],
};
