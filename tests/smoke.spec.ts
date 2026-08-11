import { test, expect, Page } from '@playwright/test';
import { PROJECTS } from '../src/content/projects';

const PAGES = ['/', '/portfolio', '/process', '/about', '/contact'];
const CASE_STUDIES = PROJECTS.map((p) => `/portfolio/${p.id}`);
const ALL = [...PAGES, ...CASE_STUDIES];

const MOBILE = { width: 390, height: 844 };
const SHORT_LAPTOP = { width: 1366, height: 625 };

/**
 * Wait for the lazy page chunk, then scroll to the bottom so lazy images and
 * whileInView sections resolve. Scrolling before the chunk renders is a no-op,
 * because the document is still one screen tall at that point.
 */
async function settle(page: Page) {
    await page.locator('h1').first().waitFor();
    await page.waitForLoadState('networkidle');
    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
    await page.waitForLoadState('networkidle');
}

for (const path of ALL) {
    test(`${path} renders without errors`, async ({ page }) => {
        const problems: string[] = [];
        page.on('console', (m) => m.type() === 'error' && problems.push(m.text()));
        page.on('pageerror', (e) => problems.push(e.message));

        await page.goto(path);
        await settle(page);

        expect(problems, `console errors on ${path}`).toEqual([]);
        await expect(page.locator('h1').first()).toBeVisible();

        const broken = await page.evaluate(
            () => [...document.querySelectorAll('img')].filter((i) => i.complete && i.naturalWidth === 0).length,
        );
        expect(broken, `broken images on ${path}`).toBe(0);
    });

    test(`${path} fits a phone`, async ({ page }) => {
        await page.setViewportSize(MOBILE);
        await page.goto(path);
        await settle(page);

        const overflow = await page.evaluate(
            () => document.documentElement.scrollWidth - window.innerWidth,
        );
        expect(overflow, `${path} overflows sideways by ${overflow}px`).toBeLessThanOrEqual(1);
    });
}

// The whole page used to be locked to one screen with scrolling off, which put
// the contact details permanently out of reach on a short laptop.
test('contact details stay reachable on a short screen', async ({ page }) => {
    await page.setViewportSize(SHORT_LAPTOP);
    await page.goto('/contact');

    // settle() scrolls the page the only way a visitor can. scrollIntoViewIfNeeded
    // would pass here even when the content sits in an unscrollable overflow-hidden box.
    await settle(page);

    for (const target of [page.getByText('mert.bildik@gmail.com'), page.getByRole('link', { name: 'LinkedIn' })]) {
        await expect(target).toBeInViewport();
    }
});

// The template used to drop any output block whose title contained "brand" or
// "social", so content written in projects.ts never appeared on the page.
test('every output block in the content file reaches the page', async ({ page }) => {
    for (const project of PROJECTS.filter((p) => p.caseStudy)) {
        await page.goto(`/portfolio/${project.id}`);
        await settle(page);

        for (const block of project.caseStudy!.output) {
            await expect(
                page.getByRole('heading', { name: block.title, exact: true }),
                `${project.id} is missing the "${block.title}" block`,
            ).toBeVisible();
        }
    }
});

test('old case-study links still redirect', async ({ page }) => {
    await page.goto('/case-study/ofk');
    await expect(page).toHaveURL('/portfolio/ofk');
});

test('an unknown path falls back to home', async ({ page }) => {
    await page.goto('/does-not-exist');
    await expect(page).toHaveURL('/');
});
