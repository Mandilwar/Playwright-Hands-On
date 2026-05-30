//const {Login_page} = require("./Login_page");
import {Login_page} from './Login_page';
//const {dashboard_page} = require("./dashboard_page");
import { dashboard_page } from './dashboard_page';
//const {cart_details} = require("./cart_details");
import {cart_details} from './cart_details';
//const {checkout_page} = require("./checkout_page");
import {checkout_page} from './checkout_page';
//const {Thankyou_page} = require("./Thankyou_page");
import {Thankyou_page} from './Thankyou_page';
//const {orders_page} = require("./orders_page");
import {orders_page} from './orders_page';
//const {summary} = require("./summary");
import {summary} from './summary';
import {Page} from '@playwright/test';
export class PO_manager
{
    login_page : Login_page;
    Dashboard_page : dashboard_page;
    Cart : cart_details;
    Checkout : checkout_page;
    thankyou : Thankyou_page;
    Orders : orders_page;
    Summary_page : summary;
    page : Page;
    constructor(page:Page)
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