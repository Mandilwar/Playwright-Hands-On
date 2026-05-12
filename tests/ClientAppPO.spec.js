const { test, expect } = require('@playwright/test');
const { custom_test } = require("../Test_Data/test_base");
const { PO_manager } = require("../PageObjects/PO_manager");
const test_data = JSON.parse(JSON.stringify(require("../Test_Data/place_order_test_data.json")));
for (const dataset of test_data) {
    test(`Client App Login Practice ${dataset.product_name}`, async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        const po_manager = new PO_manager(page);
        //Login Page
        const login_page = po_manager.get_login_page();
        await login_page.navigation();
        await expect(login_page.login).toContainText("Login");
        await login_page.valid_login(dataset.email, dataset.password);
        //Dashboard Page
        const Dashboard_page = po_manager.get_dashboard_page();
        await expect(Dashboard_page.page.locator(`text=${dataset.product_name}`)).toBeVisible();
        await Dashboard_page.search_product_add_to_cart(dataset.product_name);
        await Dashboard_page.navigate_cart();
        await page.locator("div li").first().waitFor();
        const item_visible = await page.locator(`h3:has-text('${dataset.product_name}')`).isVisible();
        await expect(item_visible).toBeTruthy();
        const item_number = await page.locator("p.itemNumber").textContent();
        // Cart Details
        const Cart = po_manager.get_Cart_Details();
        await Cart.checkout_click();
        // Checkout Page
        const Checkout = po_manager.get_Checkout_Page();
        await Checkout.fill_checkout_details(dataset.cvv_code, dataset.name, dataset.coupon_code);
        await Checkout.apply_coupon_click();
        await expect(Checkout.success_message).toContainText("* Coupon Applied");
        await Checkout.search_and_select_country(dataset.country_name);
        await expect(Checkout.page.locator(".user__name [type='text']").first()).toHaveText(dataset.email);
        await Checkout.place_order_click();
        // Thank you Page
        const thankyou = po_manager.get_Thankyou_Page();
        await expect(thankyou.page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
        const cleaned_orderid = await thankyou.get_order_id();
        await thankyou.navigate_orders();
        // Orders Page
        const Orders = po_manager.get_Orders_Page();
        await Orders.verify_order_click(thankyou.cleaned_orderid);
        // Order Summary Page
        const Summary_page = po_manager.get_Summary_Page();
        await Summary_page.verify_orderid(thankyou.cleaned_orderid);
        await expect(cleaned_orderid.includes(Summary_page.result_order_id)).toBeTruthy();
        await expect(Summary_page.product).toContainText(dataset.product_name);
    }
    );
}
custom_test(`Client App Test with Fixtures`, async ({ browser, test_data_placeorder }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const po_manager = new PO_manager(page);
    //Login Page
    const login_page = po_manager.get_login_page();
    await login_page.navigation();
    await expect(login_page.login).toContainText("Login");
    await login_page.valid_login(test_data_placeorder.email, test_data_placeorder.password);
    //Dashboard Page
    const Dashboard_page = po_manager.get_dashboard_page();
    await expect(Dashboard_page.page.locator(`text=${test_data_placeorder.product_name}`)).toBeVisible();
    await Dashboard_page.search_product_add_to_cart(test_data_placeorder.product_name);
    await Dashboard_page.navigate_cart();
    await page.locator("div li").first().waitFor();
    const item_visible = await page.locator(`h3:has-text('${test_data_placeorder.product_name}')`).isVisible();
    await expect(item_visible).toBeTruthy();
    const item_number = await page.locator("p.itemNumber").textContent();
    // Cart Details
    const Cart = po_manager.get_Cart_Details();
    await Cart.checkout_click();
    // Checkout Page
    const Checkout = po_manager.get_Checkout_Page();
    await Checkout.fill_checkout_details(test_data_placeorder.cvv_code, test_data_placeorder.name, test_data_placeorder.coupon_code);
    await Checkout.apply_coupon_click();
    await expect(Checkout.success_message).toContainText("* Coupon Applied");
    await Checkout.search_and_select_country(test_data_placeorder.country_name);
    await expect(Checkout.page.locator(".user__name [type='text']").first()).toHaveText(test_data_placeorder.email);
    await Checkout.place_order_click();
    // Thank you Page
    const thankyou = po_manager.get_Thankyou_Page();
    await expect(thankyou.page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const cleaned_orderid = await thankyou.get_order_id();
    await thankyou.navigate_orders();
    // Orders Page
    const Orders = po_manager.get_Orders_Page();
    await Orders.verify_order_click(thankyou.cleaned_orderid);
    // Order Summary Page
    const Summary_page = po_manager.get_Summary_Page();
    await Summary_page.verify_orderid(thankyou.cleaned_orderid);
    await expect(cleaned_orderid.includes(Summary_page.result_order_id)).toBeTruthy();
    await expect(Summary_page.product).toContainText(test_data_placeorder.product_name);
}
);