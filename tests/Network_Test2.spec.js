const { test, expect } = require("@playwright/test");
test("Security Test Request Intercept", async ({ page }) => {
    const email = "umang1112@gmail.com";
    const username = page.locator("#userEmail");
    const password = page.locator("#userPassword");
    const login = page.locator("#login");
    const cardtitles = page.locator(".card-body b");
    const products = page.locator(".card-body"); /* Iteration of all products in a page */
    const cart = page.locator("[routerlink*='cart']");
    await page.goto("https://rahulshettyacademy.com/client/");
    await username.fill(email);
    await password.fill("Umang@1104812");
    await expect(login).toContainText("Login");
    await login.click();
    await page.waitForLoadState('networkidle');
    await cardtitles.first().waitFor();
    await page.locator("[routerlink*='myorders']").first().click();
    await page.waitForLoadState('networkidle');
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        async route => route.continue({ url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=69f6ff8af86ba51a659yu999' })
    );
    await page.locator("button:has-text('View')").first().click();
    await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order");
});