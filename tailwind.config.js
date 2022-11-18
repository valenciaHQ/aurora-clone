/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jade: '#408080',
        grey: '#6c8587'
      },
      fontFamily: {
        circular: ["Circular", "normal"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
