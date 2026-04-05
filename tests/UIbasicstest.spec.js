const {test,expect} = require ('@playwright/test');
test('Browser Context Playwright Test',async ({browser})=>
    {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        console.log(await page.title());
    }
);

test('Page Playwright Test',async ({page})=>
    {
        await page.goto("https://google.com");
        console.log(await page.title());
        await expect(page).toHaveTitle("Google");
    }
);

/* For running a single test out of multiple test, use test.only() annotation */