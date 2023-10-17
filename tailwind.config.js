/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'vietnam-pro': ['Be Vietnam Pro', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        'source-code-pro': ['Source Code Pro', 'monospace'],
      },
    },
    
  },
  plugins: [],
}