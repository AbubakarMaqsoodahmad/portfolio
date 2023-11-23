/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'gray-light': '#F5F5F5',
        'gray-medium': '#CCCCCC',
        'gray-dark': '#333333',
      },
    },
  },
  plugins: [],
}
