import { defineConfig } from '@playwright/test';

const PORT = 4173;

// Runs against the production build, not the dev server: the bugs this catches
// (missing Tailwind classes, clipped layout) only show up in the built CSS.
export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    reporter: process.env.CI ? 'list' : [['list'], ['html', { open: 'never' }]],
    use: {
        baseURL: `http://localhost:${PORT}`,
        channel: 'chromium',
    },
    webServer: {
        command: `npm run build && npm run preview -- --port ${PORT} --strictPort`,
        url: `http://localhost:${PORT}`,
        reuseExistingServer: false,
        timeout: 120_000,
    },
});
