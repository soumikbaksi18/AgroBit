/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#20512E",
        black: "#131313",
        gray: "#EEEEEE",
        placeholder: "#6B7280"
      },
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        oxygen: ["Oxygen", "sans-serif"]
      }
    },
  },
  plugins: [],
}
