import {Page,Locator} from '@playwright/test';
export class dashboard_page {
    page : Page;
    cardtitles : Locator;
    products : Locator;
    cart : Locator;
    constructor(page : Page) {
        this.page = page;
        this.cardtitles = page.locator(".card-body b");
        this.products = page.locator(".card-body");
        this.cart = page.locator("[routerlink*='cart']");
    }
    async search_product_add_to_cart(product_name : string) {
        await this.cardtitles.first().waitFor();
        console.log(await this.cardtitles.first().textContent());
        const alltitles = await this.cardtitles.allTextContents();
        console.log(alltitles);
        const count = await this.products.count();
        for (let i = 0; i < count; i++) {
            if (await this.products.nth(i).locator("b").textContent() === product_name) {
                await this.products.nth(i).locator("text= Add To Cart").click();
                break;
            }
        }
    }
    async navigate_cart()
    {
        await this.cart.click();
        await this.page.waitForLoadState('networkidle');
    }
}
module.exports = {dashboard_page};