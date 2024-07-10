/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#151515',
        'primary-bg-hover': '#1E1E1E',
        'text-accent' : '#118ad3',
        'secondary-bg': '#fdfdff',
        'alternate-bg': `#c0bcb5`,
      },
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}

