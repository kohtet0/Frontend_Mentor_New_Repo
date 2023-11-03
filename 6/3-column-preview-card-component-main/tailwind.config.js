/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["Lexend Deca", "sans-serif"],
      "big-shoulders-display": ["Big Shoulders Display", "sans-serif"],
    },
    extend: {
      colors: {
        "bright-orange": "hsl(31, 77%, 52%)",
        "dark-cyan": "hsl(184, 100%, 22%)",
        "very-dark-cyan": "hsl(179, 100%, 13%)",
        // paragraphs
        "tran-white": "hsla(0, 0%, 100%, 0.75)",
        // background, headings, buttons
        "very-light-gray": "hsl(0, 0%, 95%)",
      },
      fontSize: {
        fs: "15px",
      },
    },
  },
  plugins: [],
};
