/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": { min: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { min: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { min: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { min: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { min: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        titanOne: ["Titan One", "cursive"],
        playFair: ["Playfair Display", "serif"],
        inter: ["Inter", "serif"],
      },
    },
  },
  plugins: [],
};
