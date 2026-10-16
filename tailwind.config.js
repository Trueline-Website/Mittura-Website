/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#8b2626",      // Updated brighter Mittura maroon
        "brand-dark": "#5c1c1c", // Original dark maroon
        primary: "#1E2A5A",
        accent: "#F4B400",
        highlight: "#F97316",
      }
    }
  },
  plugins: [],
}
