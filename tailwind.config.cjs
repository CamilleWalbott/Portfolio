const colors = require('./src/assets/tailwind-colors.cjs');

module.exports = {
  darkMode : 'media',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: colors,
    },
  },
  plugins: [],
};