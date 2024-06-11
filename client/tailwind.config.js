/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#39DB4A",
        red: "#ff6868",
        secondary: "#555",
        primaryBG: "#fcfcfc",
      },
      fontFamily: { primary: ["Inter", "sans-serif"] },
    },
  },
  plugins: [require("daisyui")],
};
