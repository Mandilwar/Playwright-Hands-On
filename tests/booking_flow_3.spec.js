const { test, expect, request } = require("@playwright/test");
const base_url = "https://eventhub.rahulshettyacademy.com";
const api_url = "https://eventhub.rahulshettyacademy.com/api";
const gmail_account = { email: "umang1112@gmail.com", password: "Umang@123" };
const yahoo_account = { email: "james.bond@yahoo.com", password: "James@007" };
let api_context;
async function login(page, account) {
    await page.goto("https://eventhub.rahulshettyacademy.com/login");
    await page.getByLabel("Email").fill(account.email);
    await page.getByLabel("Password").fill(account.password);
    await page.getByRole("button", { name: "Sign In" }).click();
    await expect(page.getByRole("link", { name: "Browse Events →" })).toBeVisible();
}
test("Cross User Booking Access Denied - Assignment 4", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const api_context = await request.newContext({ignoreHTTPSErrors: true});
    await login(page,yahoo_account);
    const login_response = await request.post(`${api_url}/auth/login`, { data: { email: yahoo_account.email, password: yahoo_account.password } });
    console.log("Login Response Status:", await login_response.status());
    console.log("Login Response Body:", await login_response.text());
    await expect(login_response.ok()).toBeTruthy();
    const { token } = await login_response.json();
    const event_response = await request.get(`${api_url}/events`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
    //await expect(event_response.ok()).toBeTruthy();
    const { eventId } = (await event_response.json()).data[0].id;
    const booking = await request.post(`${api_url}/bookings`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        data: {
            eventId,
            customerName: "James Bond",
            customerEmail: yahoo_account.email,
            customerPhone: "+91-9876543210",
            quantity: 1
        }
    });
    //await expect(booking.ok()).toBeTruthy();
    const { yahooBookingId } = (await booking.json()).data.id;
    await login(page, gmail_account);
    await page.goto(`${base_url}/bookings/${yahooBookingId}`, { waitUntil: 'networkidle' });
    await expect(page.getByText('Access Denied')).toBeVisible();
    await expect(page.getByText('You are not authorized to view this booking')).toBeVisible();
    await page.pause();
    await api_context.dispose();
});