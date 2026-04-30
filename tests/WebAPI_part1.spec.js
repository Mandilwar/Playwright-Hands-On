const {test,expect,request} = require ('@playwright/test');
const {APIUtils} = require ('./utils/APIUtils');
const login_payload = {userEmail: "umang1112@gmail.com", userPassword: "Umang@1104812"};
const order_payload = {orders: [{country: "India", productOrderedId: "6960eae1c941646b7a8b3ed3"}]};
let response;
test.beforeAll( async()=> {
    // Login API
    const api_context = await request.newContext({ignoreHTTPSErrors: true});
    const api_utils = new APIUtils(api_context,login_payload);
    response = await api_utils.create_order(order_payload);
});

test('Automation Practice on E-commerce Website',async ({page})=>
    {
        await page.addInitScript(value => {
            window.localStorage.setItem('token',value);
        },response.token);
        const email = "umang1112@gmail.com";
        const username = page.locator("#userEmail");
        const password = page.locator("#userPassword");
        const login = page.locator("#login");
        const cardtitles = page.locator(".card-body b");
        const products = page.locator(".card-body"); /* Iteration of all products in a page */
        const cart = page.locator("[routerlink*='cart']");
        await page.goto("https://rahulshettyacademy.com/client/");
        console.log(await page.title());
        //await username.fill(email);
        //await password.fill("Umang@1104812");
        //await expect(login).toContainText("Login");
        //await login.click();
        //await page.waitForLoadState('networkidle');
        /*await cardtitles.first().waitFor();
        console.log(await cardtitles.first().textContent());
        await expect(cardtitles.nth(0)).toContainText("ADIDAS ORIGINAL");
        const alltitles = await cardtitles.allTextContents();
        console.log(alltitles);
        const count = await products.count();
        for(let i=0;i<count;i++)
        {
            if(await products.nth(i).locator("b").textContent() === "ADIDAS ORIGINAL")
            {
                await products.nth(i).locator("text= Add To Cart").click();
                break;
            }
        }
        await cart.click();
        await page.waitForLoadState('networkidle');
        await page.locator("div li").first().waitFor();
        const item_visible = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
        await expect(item_visible).toBeTruthy();
        const item_number = await page.locator("p.itemNumber").textContent();
        const primary_button = page.locator("text=Checkout");
        await primary_button.click();
        await page.waitForLoadState('networkidle');
        const next_page = page.locator(".form__cc");
        await next_page.waitFor();
        await page.locator("div.field:has(div.title:has-text('CVV Code')) input").fill("000");
        await page.locator("div.field:has(div.title:has-text('Name')) input").fill("James Bond");
        await page.locator("div.field:has(div.title:has-text('Apply Coupon')) input").fill("rahulshettyacademy");
        const apply_coupon = page.locator("[type='submit']");
        await apply_coupon.click();
        const success_message = await page.locator("p.mt-1.ng-star-inserted");
        await expect(success_message).toContainText("* Coupon Applied");
        await page.locator("[placeholder*='Country']").pressSequentially("Ind");
        const dropdown = page.locator(".ta-results.list-group.ng-star-inserted");
        await dropdown.waitFor();
        const options = await dropdown.locator("button").count();
        for(let i=0;i<options;i++)
        {
            const text = await dropdown.locator("button").nth(i).textContent();
            if(text === " India")
            {
                await dropdown.locator("button").nth(i).click();
                break;
            }
        }
        await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
        await page.locator(".action__submit").click();
        await page.waitForLoadState('networkidle');
        await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
        const orderid = await page.locator("td.em-spacer-1 label.ng-star-inserted").textContent();
        console.log(orderid);
        const cleaned_orderid = orderid.replace(/\|/g, "");
        console.log(cleaned_orderid);*/
        await page.locator("[routerlink*='myorders']").first().click();
        await page.waitForLoadState('networkidle');
        await page.locator("tbody").waitFor();
        const table_rows = page.locator("tbody tr");
        const rowsCount = await table_rows.count();
        for (let i = 0; i < rowsCount; i++) {
            const orders = (await table_rows.nth(i).locator("th").textContent()).trim();
            if (response.orderId.includes(orders)) {
                const viewButton = table_rows.nth(i).locator("button", { hasText: 'View' });
                if (await viewButton.count() > 0) {
                    await viewButton.first().click();
                } else {
                    await table_rows.nth(i).locator("button").first().click();
                }
                break;
            }
        }
        await page.waitForLoadState('networkidle');
        /*const result_order_id_locator = page.locator(`text=${cleaned_orderid.trim()}`);
        await result_order_id_locator.waitFor({ state: 'visible', timeout: 5000 });
        const result_order_id = (await result_order_id_locator.first().textContent()).trim();
        await expect(orderid.includes(result_order_id)).toBeTruthy();*/
        //await expect(page.locator("div.address p.text")).first().toHaveText(email);
        //await expect(page.locator("div.address p.text")).last().toContainText("India");
        await page.waitForTimeout(3000);
        const orderId_details = await page.locator(".col-text").textContent();
        await page.pause();
        await expect(response.orderId.includes(orderId_details)).toBeTruthy();
        await expect(page.locator("div.artwork-card-info div.title")).toContainText("ADIDAS ORIGINAL")
    }
);