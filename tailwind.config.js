/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./{App,index}.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                void: '#0A0A0A',
                surface: {
                    DEFAULT: '#121212',
                    hover: '#171717',
                },
                border: {
                    subtle: '#262626',
                    active: '#404040',
                },
                text: {
                    primary: '#EDEDED',
                    muted: '#737373',
                    inverse: '#0A0A0A',
                }
            },
            fontFamily: {
                sans: ['Geist Sans', 'sans-serif'],
                mono: ['Geist Mono', 'monospace'],
            },
            letterSpacing: {
                tight: '-0.02em',
                'p': '0em',
                'h6': '-0.005em',
                'h3': '-0.015em',
                'h1': '-0.02em',
            },
            boxShadow: {
                'specular': 'inset 0 1px 0 0 rgba(255,255,255,0.05)',
            },
            fontSize: {
                'xs': '0.8rem',     // 12.8px
                'body': '1rem',     // 16px (Base)
                'h6': '1.25rem',    // 20px
                'h5': '1.563rem',   // 25px
                'h4': '1.953rem',   // 31.25px
                'h3': '2.441rem',   // 39.06px
                'h2': '3.052rem',   // 48.83px
                'h1': '3.815rem',   // 61.04px
                'display': '4.768rem', // ~76px
            },
            lineHeight: {
                'p': '1.5',
                'h4': '1.3',
                'h3': '1.2',
                'h2': '1.1',
                'h1': '1.0',
            },
        },
    },
    plugins: [],
}
