/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E97815",
        secondary: "#ff00b7",
        gray: "#5E6282",
        title: "#181E4B",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        secondary: ["Volkhov", "serif"],
      },
      fontSize: {
        h1: "4.6875rem",
        h2: "3.4375rem",
        h3: "1.5625rem",
        h4: "1.25rem",
        h5: "1.125rem",
        h6: "1rem",
      },
      lineHeight: {
        h1: "90px",
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
