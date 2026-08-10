/** @type {import('tailwindcss').Config} */
// Force Rebuild: 2026-01-05
export default {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif']
            },
            // Typography scale — see docs/typography.md
            fontSize: {
                'display-xl':  ['80px', { lineHeight: '1.05', letterSpacing: '-3.0px',  fontWeight: '600' }],
                'display-lg':  ['56px', { lineHeight: '1.10', letterSpacing: '-1.8px',  fontWeight: '600' }],
                'display-md':  ['40px', { lineHeight: '1.15', letterSpacing: '-1.0px',  fontWeight: '600' }],
                'headline':    ['28px', { lineHeight: '1.20', letterSpacing: '-0.6px',  fontWeight: '600' }],
                'card-title':  ['22px', { lineHeight: '1.25', letterSpacing: '-0.4px',  fontWeight: '500' }],
                'subhead':     ['20px', { lineHeight: '1.40', letterSpacing: '-0.2px',  fontWeight: '400' }],
                'body-lg':     ['18px', { lineHeight: '1.50', letterSpacing: '-0.1px',  fontWeight: '400' }],
                'body':        ['16px', { lineHeight: '1.50', letterSpacing: '-0.05px', fontWeight: '400' }],
                'body-sm':     ['14px', { lineHeight: '1.50', letterSpacing: '0',       fontWeight: '400' }],
                'caption':     ['12px', { lineHeight: '1.40', letterSpacing: '0',       fontWeight: '400' }],
                'button':      ['14px', { lineHeight: '1.20', letterSpacing: '0',       fontWeight: '500' }],
                'eyebrow':     ['13px', { lineHeight: '1.30', letterSpacing: '0.4px',   fontWeight: '500' }],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            colors: {}
        }
    },
    plugins: [require("tailwindcss-animate")],
}
