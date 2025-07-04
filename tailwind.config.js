/** @type {import('tailwindcss').Config} */
export default {
  content: [
       "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        brand: "#2563eb", 
        gray: "#888888",
        darkgray:"#a4a4a4",
        dark:"#303030",
        menuColor:"#F9F9F9",
        lightText: "#374151", 
        hoverBlue: "#1d4ed8",
        blue:"#076BB2",
      },

      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

