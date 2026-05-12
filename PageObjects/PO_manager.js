const {Login_page} = require("./Login_page");
const {dashboard_page} = require("./dashboard_page");
const {cart_details} = require("./cart_details");
const {checkout_page} = require("./checkout_page");
const {Thankyou_page} = require("./Thankyou_page");
const {orders_page} = require("./orders_page");
const {summary} = require("./summary");
class PO_manager
{
    constructor(page)
    {
        this.page = page;
        this.login_page = new Login_page(page);
        this.Dashboard_page = new dashboard_page(page);
        this.Cart = new cart_details(page);
        this.Checkout = new checkout_page(page);
        this.thankyou = new Thankyou_page(page);
        this.Orders = new orders_page(page);
        this.Summary_page = new summary(page);
    }
    get_login_page()
    {
        return this.login_page;
    }
    get_dashboard_page()
    {
        return this.Dashboard_page;
    }
    get_Cart_Details()
    {
        return this.Cart;
    }
    get_Checkout_Page()
    {
        return this.Checkout;
    }
    get_Thankyou_Page()
    {
        return this.thankyou;
    }
    get_Orders_Page()
    {
        return this.Orders;
    }
    get_Summary_Page()
    {
        return this.Summary_page;
    }
}
module.exports = {PO_manager};