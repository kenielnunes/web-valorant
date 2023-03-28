/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mbm: "375px",
      mbl: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "2560px",
    },
    extend: {
      colors: {
        vavaRed: "#FF4656",
        vavaBlack: "#1F2326",
      },
    },
  },
  plugins: [],
};
