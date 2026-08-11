/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif']
            },
            // Typography scale — see docs/design/typography.md
            // The three display sizes are fluid: they hit their max (and match the
            // rest of the scale) from ~890px up, and shrink below that so a long
            // word cannot overflow a phone. Everything else is a fixed size.
            fontSize: {
                'display-xl':  ['clamp(44px, 9vw, 80px)',   { lineHeight: '1.05', letterSpacing: '-0.0375em', fontWeight: '600' }],
                'display-lg':  ['clamp(32px, 6vw, 56px)',   { lineHeight: '1.10', letterSpacing: '-0.032em',  fontWeight: '600' }],
                'display-md':  ['clamp(28px, 4.5vw, 40px)', { lineHeight: '1.15', letterSpacing: '-0.025em',  fontWeight: '600' }],
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
        }
    },
    plugins: [],
}
