/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',       // optional: remove this line if you don’t need dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},            // keep empty for now
  },
  plugins: [],             // no plugins
};
