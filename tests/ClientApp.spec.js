const {test,expect} = require ('@playwright/test');
test('Automation Practice on E-commerce Website',async ({browser})=>
    {
        const context = await browser.newContext();
        const page = await context.newPage();
        const username = page.locator("#userEmail");
        const password = page.locator("#userPassword");
        const login = page.locator("#login");
        const cardtitles = page.locator(".card-body b");
        await page.goto("https://rahulshettyacademy.com/client/");
        console.log(await page.title());
        await username.fill("umang1112@gmail.com");
        await password.fill("Umang@1104812");
        await expect(login).toContainText("Login");
        await login.click();
        await page.waitForLoadState('networkidle');
        console.log(await cardtitles.first().textContent());
        await expect(cardtitles.nth(0)).toContainText("ADIDAS ORIGINAL");
        const alltitles = await cardtitles.allTextContents();
        console.log(alltitles);
    }
);