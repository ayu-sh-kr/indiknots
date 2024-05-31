/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#F9F8F5',
          100: '#F2EFEA',
          200: '#E2DFD5',
          300: '#D2CFC0',
          400: '#B2AF96',
          500: '#928F6C',
          600: '#837F62',
          700: '#575741',
          800: '#424231',
          900: '#2C2B21',
        },
      },
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9'
      },
      fontFamily: {
        'dm': ['DM Sans', 'Helvetica', 'sans-serif'],
        'aktive':['aktive-grostec', 'Helvetica', 'sans-serif']
      },
      fontWeight: {
        'almostLight': '50'
      },
    }
  },
  plugins: [],
}

