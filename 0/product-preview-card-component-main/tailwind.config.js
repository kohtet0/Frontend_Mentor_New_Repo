/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Fraunces", "serif"],
    },
    extend: {
      screens: {
        mobile: "375px",
        // => @media (min-width: 375px) { ... }

        desktop: "1440px",
        // => @media (min-width: 1440px) { ... }
      },
      colors: {
        "dark-cyan": "hsl(158, 36%, 37%)",
        cream: "hsl(30, 38%, 92%)",
        "very-dark-blue": "hsl(212, 21%, 14%)",
        "dark-grayish-blue": "hsl(228, 12%, 48%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontSize: {
        fs: "14px",
      },
      backgroundImage: {
        "mobile-img": "url('../src/images/image-product-mobile.jpg')",
        "desktop-img": "url('../src/images/image-product-desktop.jpg')"
      }
    },
  },
  plugins: [],
};
