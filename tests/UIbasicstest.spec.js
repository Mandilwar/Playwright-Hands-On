const {test,expect} = require ('@playwright/test');
test('Browser Context Playwright Test',async ({browser})=>
    {
        const context = await browser.newContext();
        const page = await context.newPage();
        const username = page.locator("#username");
        const signin = page.locator("#signInBtn");
        const password = page.locator("[type='password']");
        const cardtitles = page.locator(".card-body a");
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        console.log(await page.title());
        await username.fill("umang_mandilwar");
        await password.fill("umang4567");
        await expect(signin).toContainText("Sign In");
        await signin.click();
        console.log(await page.locator("[style*='block']").textContent());
        await expect(page.locator("[style*='block']")).toContainText("Incorrect");
        await username.fill("");
        await username.fill("rahulshettyacademy");
        await password.fill("");
        await password.fill("Learning@830$3mK2");
        await signin.click();
        console.log(await cardtitles.first().textContent());
        console.log(await cardtitles.nth(1).textContent());
        const alltitles = await cardtitles.allTextContents();
        console.log(alltitles);
        await expect(cardtitles.first()).toContainText("iphone X");
        await expect(cardtitles.nth(1)).toContainText("Samsung Note 8");
    }
);

/*test('Page Playwright Test',async ({page})=>
    {
        await page.goto("https://google.com");
        console.log(await page.title());
        await expect(page).toHaveTitle("Google");
    }   
);*/

/* For running a single test out of multiple test, use test.only() annotation */