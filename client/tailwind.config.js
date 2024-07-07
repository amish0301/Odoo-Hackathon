/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        dark: "#23A3C",
        medium: "#293245",
        primary: "#4CAF50",
        secondary: "#FFC107",
        backgroundLight: "#FFFFFF",
        textLight: "#212121",
        accentLight: "#FF5722",
        mutedLight: "#F5F5F5",
        backgroundDark: "#303030",
        textDark: "#E0E0E0",
        accentDark: "#FF7043",
        mutedDark: "#424242",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
    },
  },
  plugins: [],
  darkMode: "class",
};
