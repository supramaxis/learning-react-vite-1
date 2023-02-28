/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "media",

  theme: {
    extend: {}
  },
  plugins: [require("flowbite/plugin")]
};
