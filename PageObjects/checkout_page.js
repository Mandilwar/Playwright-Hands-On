class checkout_page
{
    constructor(page)
    {
        this.page = page;
        this.next_page = page.locator(".form__cc");
        this.cvv_code = page.locator("div.field:has(div.title:has-text('CVV Code')) input");
        this.name = page.locator("div.field:has(div.title:has-text('Name')) input");
        this.coupon = page.locator("div.field:has(div.title:has-text('Apply Coupon')) input");
        this.apply_coupon = page.locator("[type='submit']");
        this.success_message = page.locator("p.mt-1.ng-star-inserted");
        this.country = page.locator("[placeholder*='Country']");
        this.dropdown = page.locator(".ta-results.list-group.ng-star-inserted");
        this.place_order = page.locator(".action__submit");

    }
    async fill_checkout_details(cvv_code,name,coupon_code)
    {
        await this.next_page.waitFor();
        await this.cvv_code.fill(cvv_code);
        await this.name.fill(name);
        await this.coupon.fill(coupon_code);
    }
    async apply_coupon_click()
    {
        await this.apply_coupon.click();
    }
    async search_and_select_country(country_name)
    {
        await this.country.pressSequentially("Ind");
        await this.dropdown.waitFor();
        const options = await this.dropdown.locator("button").count();
        for(let i=0;i<options;i++)
        {
            const text = await this.dropdown.locator("button").nth(i).textContent();
            if(text === country_name)
            {
                await this.dropdown.locator("button").nth(i).click();
                break;
            }
        }
    }
    async place_order_click()
    {
        await this.place_order.click();
        await this.page.waitForLoadState('networkidle');
    }
}
module.exports = {checkout_page};