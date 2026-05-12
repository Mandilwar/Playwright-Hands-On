class orders_page
{
    constructor(page)
    {
        this.page = page;
        this.orders_table = page.locator("tbody");
        this.order_table_rows = page.locator("tbody tr");
    }
    async verify_order_click(cleaned_orderid)
    {
        await this.orders_table.waitFor();
        const rowsCount = await this.order_table_rows.count();
        for (let i = 0; i < rowsCount; i++) 
        {
            const orders = (await this.order_table_rows.nth(i).locator("th").textContent()).trim();
            if (orders === cleaned_orderid.trim()) {
                const viewButton = this.order_table_rows.nth(i).locator("button", { hasText: 'View' });
                if (await viewButton.count() > 0) {
                    await viewButton.first().click();
                } else {
                    await this.order_table_rows.nth(i).locator("button").first().click();
                }
                break;
            }
        }
        await this.page.waitForLoadState('networkidle');
    }
}
module.exports = {orders_page};