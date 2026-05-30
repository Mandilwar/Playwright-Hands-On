//const base = require("@playwright/test");
//import base from "@playwright/test";
import {test as basetest} from '@playwright/test';
interface test_data_placeorder {
    email : string;
    password : string;
    product_name : string;
    cvv_code : string;
    name : string;
    coupon_code : string;
    country_name : string;
}
export const custom_test = basetest.extend<{test_data_placeorder:test_data_placeorder}>(
    {
        test_data_placeorder:
        {
            email:"umang1112@gmail.com",
            password:"Umang@1104812",
            product_name:"ADIDAS ORIGINAL",
            cvv_code:"000",
            name:"James Bond",
            coupon_code:"rahulshettyacademy",
            country_name:" India"
        }
    }
)