/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vivida: {
          bg: '#F5F2EB',
          surface: '#EFECE4',
          card: '#EDEAE1',
          border: '#DED8CB',
          text: '#171513',
          muted: '#6E6B65',
          dark: '#1D1916',
          bronze: '#2C221A',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Syne"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      }
    },
  },
  plugins: [],
}
