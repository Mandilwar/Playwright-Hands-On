const {test,expect} = require('@playwright/test');
test('Calendar Automation Exploration', async({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const month = "6";
    const date = "15";
    const year = "2027";
    const expected_list = [month,date,year];
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator(".react-date-picker__inputGroup").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.getByText(year).click();
    await page.locator(".react-calendar__year-view__months__month").nth(Number(month) - 1).click();
    await page.locator("//abbr[text()='"+date+"']").click();
    const inputs = await page.locator(".react-date-picker__inputGroup__input");
    for(let i = 0;i<expected_list.length;i++)
    {
        const value = await inputs.nth(i).inputValue();
        await expect(value).toEqual(expected_list[i]);
    }
});