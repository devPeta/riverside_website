/** @type {import('tailwindcss').Config} */
export default {
  content: [
       "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        brand: "#2563eb", 
        darkText: "#1f2937", 
        lightText: "#374151", 
        hoverBlue: "#1d4ed8", 
      },
    },
  },
  plugins: [],
}

