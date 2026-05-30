import {Page,Locator} from '@playwright/test';
export class summary
{
    page : Page;
    product : Locator;
    result_order_id : any;
    result_order_id_locator : any;
    constructor(page:Page)
    {
        this.page = page;
        this.product = page.locator("div.artwork-card-info div.title");
        this.result_order_id = "";
    }
    async verify_orderid(cleaned_orderid : any)
    {
        let result_order_id_locator : any;
        result_order_id_locator = this.page.locator(`text=${cleaned_orderid.trim()}`);
        await result_order_id_locator.waitFor({ state: 'visible', timeout: 5000 });
        this.result_order_id = (await result_order_id_locator.first().textContent()).trim();
    }
}
module.exports = {summary};