const {test,expect} = require("@playwright/test");

test('Popup Validations', async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    //await page.goto("https://google.com");
    //await page.goBack();
    //await page.goForward();
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
    await page.locator("#confirmbtn").click();
    await page.on('dialog',dialog => dialog.accept()); // dismiss() -> to click on cancel button in pop up
    await page.locator("#mousehover").hover();
    const frames_page = await page.frameLocator("#courses-iframe");
    await frames_page.locator("li a[href*='lifetime-access']:visible").click();
    const text_check = await frames_page.locator(".text h2").textContent();
    console.log(await text_check.split(' ')[1]);
    await page.pause();
});