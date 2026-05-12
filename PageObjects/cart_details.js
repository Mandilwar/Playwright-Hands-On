class cart_details
{
    constructor(page)
    {
        this.page = page;
        this.primary_button = page.locator("text=Checkout");
    }
    async checkout_click()
    {
        await this.primary_button.click();
        await this.page.waitForLoadState('networkidle');
    }
}
module.exports = {cart_details};