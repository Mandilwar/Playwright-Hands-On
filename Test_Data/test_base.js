const base = require("@playwright/test");
exports.custom_test = base.test.extend(
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