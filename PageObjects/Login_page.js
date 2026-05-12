class Login_page
{
    constructor(page)
    {
        this.page = page;
        this.login = page.locator("#login");
        this.username = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
    }
    async navigation()
    {
        await this.page.goto("https://rahulshettyacademy.com/client/");
    }
    async valid_login(email,password)
    {
        await this.username.fill(email);
        await this.password.fill(password);
        await this.login.click();
        await this.page.waitForLoadState('networkidle');
    }
}
module.exports = {Login_page};