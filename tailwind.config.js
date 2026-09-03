/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { sans: ["Inter", "sans-serif"] },
      colors: {
        dark: "#0f172a", // Slate 900
        darker: "#020617", // Slate 950
        primary: "#3b82f6", // Blue 500
        card: "#1e293b", // Slate 800
      },
    },
  },
  plugins: [],
}
