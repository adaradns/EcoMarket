/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ecoGreen: {
          100: '#d4f4e0',
          500: '#2ecc71',
          700: '#27ae60',
          900: '#1e8449'
        },
        ecoBrown: {
          100: '#f6e6d5',
          500: '#d35400',
          700: '#a04000'
        }
      }
    },
  },
}