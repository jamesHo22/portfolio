/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-yellow": "#FEDD60",
        paper: "#F8F4EC",
        ink: "#2E2621",
        sand: "#E8DCC4",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
