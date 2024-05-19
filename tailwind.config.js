/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "text-primary": "#0C0C0C",
        "bg-pink": "#FFC9F0",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        handle: ["Handlee", "sans-serif"],
      },
    },
    container: {
      padding: {
        DEFAULT: "20px",
        // lg: "50px",
        sm: "2rem",
        // lg: "4rem",
        // xl: "5rem",
        // "2xl": "6rem",
      },
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
      center: true,
    },
  },
  plugins: [require("tailwindcss-dotted-background")],
};
