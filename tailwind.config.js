/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      backgroundColor: {
        "primary": "#000000",
        "primary-gray": "#1F2430",
        "primary-blue": "#2A77F6"
      },
      textColor: {
        "primary": "#1F2430",
        "primary-gray": "#1F2430",
        "primary-blue": "#2A77F6"
      },
      borderColor: {
        "primary": "#1F2430",
        "primary-gray": "#1F2430",
        "primary-blue": "#2A77F6"
      },
      fontFamily: {
        "prism": "prism"
      }
    },
  },
  plugins: [],
}
