/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
        },
        secondary: {
          DEFAULT: '#7c3aed',
          dark: '#6d28d9',
        },
        accent: '#10b981',
      },
    },
  },
  plugins: [],
}