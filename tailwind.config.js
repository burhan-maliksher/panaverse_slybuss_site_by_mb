/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        nav_color:"rgba(7, 111, 144, 0.3)",
        piaic_color:"rgba(18, 169, 143, 0.6)",
        quater_color:"rgba(76, 185, 208, 0.6)",
      },
      fontFamily:{
        inder:['var(--font-inder)'],
      }
    },
  },
  plugins: [],
}
