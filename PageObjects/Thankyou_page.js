class Thankyou_page
{
    constructor(page)
    {
        this.page = page;
        this.orders_link = page.locator("[routerlink*='myorders']").first();
        this.order_id = page.locator("td.em-spacer-1 label.ng-star-inserted");
    }
    async get_order_id()
    {
        const orderid = await this.order_id.textContent();
        console.log(orderid);
        const cleaned_orderid = orderid.replace(/\|/g, "");
        console.log(cleaned_orderid);
        this.cleaned_orderid = cleaned_orderid;
        return cleaned_orderid;
    }
    async navigate_orders()
    {
        await this.orders_link.click();
        await this.page.waitForLoadState('networkidle');
    }
}
module.exports = {Thankyou_page};