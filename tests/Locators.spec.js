const {test,expect} = require('@playwright/test');

test('Playwright Special Locators', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    await expect(page.locator("a.navbar-brand")).toContainText("ProtoCommerce");
    const name = await page.locator("[name='name']").first();
    const email = await page.locator("[name='email']");
    await name.click();
    await email.click();
    await name.click();
    const message1 = await page.locator(".alert.alert-danger").first();
    const message2 = await page.locator(".alert.alert-danger").last();
    await expect(message1).toContainText("Name is required");
    await expect(message1).toBeVisible();
    await expect(message2).toContainText("Email is required");
    await expect(message2).toBeVisible();
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").click();
    await page.getByLabel("Gender").selectOption({ label: "Female" });
    const password = "Umang123";
    await page.getByPlaceholder("Password").fill(password);
    await page.getByRole("button",{name: 'Submit'}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    await page.getByRole("link",{name: 'Shop'}).click();
    await page.locator("app-card").filter({hasText:'Nokia Edge'}).getByRole("button",{name:'Add'}).click();
});