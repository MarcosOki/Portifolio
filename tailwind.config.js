/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark:{
          "bg":"#000",
          "primary":"#0C0C0C",
          "secondary":"#424242",
          "text-primary":"#E7E7E7",
          "text-secondary":"#9A9A9A",
          "hover":"#00FFD9",
          "border":"#202020"
        }
      }
    },
  },
  plugins: [],
}

