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
                brown: {
                    50: '#F6F2F2',
                    100: '#E5D5D5',
                    200: '#B8A6A6',
                    300: '#8A7878',
                    400: '#5F4A4A',
                    500: '#332D2D',
                    600: '#262121',
                    700: '#1A1818',
                    800: '#0E0E0E',
                    900: '#040404',
                },
            },
            aspectRatio: {
                auto: 'auto',
                square: '1 / 1',
                video: '16 / 9'
            },
            fontFamily: {
                'arial': ['Arial', 'sans-serif'],
                'verdana': ['Verdana', 'sans-serif'],
                'georgia': ['Georgia', 'serif'],
                'times': ['Times New Roman', 'serif'],
                'courier': ['Courier New', 'monospace'],
                'dm': ['DM Sans', 'Helvetica', 'sans-serif'],
                'aktive': ['aktiv-grotesk', 'sans-serif'],
                'helvetica': ['Helvetica', 'sans-serif'],
                'tahoma': ['Tahoma', 'sans-serif'],
                'trebuchet': ['Trebuchet MS', 'sans-serif'],
            },
            fontWeight: {
                'almostLight': '50'
            },
            fontSize: {
                '0.5': '0.5rem',
                '0.75': '0.75rem',
                '0.9': '0.9rem'
            }
        }
    },
    plugins: [],
}

