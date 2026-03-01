export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#18181b', // zinc-900
          light: '#a1a1aa', // zinc-400
        }
      }
    },
  },
  plugins: [],
}
