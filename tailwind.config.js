/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-blue': '#4f61a9',
        'primary-pink': '#e65894',
      },
    },
  },
  plugins: [],
};
