/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['PT Sans', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0ea5e9',
          dark: '#0284c7',
        },
        secondary: '#10b981',
        accent: '#8b5cf6',
        dark: {
          DEFAULT: '#0f172a',
          light: '#1e293b',
        },
        light: '#f8fafc',
      },
    },
  },
  plugins: [],
}