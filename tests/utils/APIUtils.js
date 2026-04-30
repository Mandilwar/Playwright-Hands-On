class APIUtils
{
    constructor(api_context,login_payload)
    {
        this.api_context = api_context;
        this.login_payload = login_payload;
    }
    async getToken()
    {
        
        const login_response = await this.api_context.post("https://rahulshettyacademy.com/api/ecom/auth/login",{data:this.login_payload});
        const json_login_response = await login_response.json();
        const token = json_login_response.token;
        console.log(token);
        return token;
    }
    async create_order(order_payload)
    {
        let response = {};
        response.token = await this.getToken();
        const order_response = await this.api_context.post("https://rahulshettyacademy.com/api/ecom/order/create-order",{data:order_payload, headers:{'Authorization':response.token,'content-type':'application/json'}});
        const json_order_response = await order_response.json();
        console.log(json_order_response);
        const orderId = json_order_response.orders[0];
        response.orderId = orderId;
        return response;
    }
}
module.exports = {APIUtils};