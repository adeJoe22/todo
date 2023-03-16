/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: "#FA2D47",
          50: "#FEE0E4",
          100: "#FECCD3",
          200: "#FDA5B0",
          300: "#FC7D8D",
          400: "#FB556A",
          500: "#FA2D47",
          600: "#E90622",
          700: "#B3041A",
          800: "#7C0312",
          900: "#45020A",
        },
        blue: {
          DEFAULT: "#0cd1ee",
          50: "#b6f2fb",
          100: "#a3effa",
          200: "#7ce8f8",
          300: "#55e2f8",
          400: "#2edbf4",
          500: "#0cd1ee",
          600: "#09a2b9",
          700: "#077383",
          800: "#04444e",
          900: "#011518",
        },
        gray: {
          DEFAULT: "#292929",
          50: "#b5b5b5",
          100: "#a8a8a8",
          200: "#8f8f8f",
          300: "#757575",
          400: "#5c5c5c",
          500: "#424242",
          600: "#292929",
          700: "#212121",
          800: "#1a1a1a",
          900: "#121212",
        },
      },
    },
  },
  plugins: [],
};
