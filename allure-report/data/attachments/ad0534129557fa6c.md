# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: booking_flow_3.spec.js >> @API Cross User Booking Access Denied - Assignment 4
- Location: tests/booking_flow_3.spec.js:14:1

# Error details

```
Error: apiRequestContext.post: read ECONNRESET
Call log:
  - → POST https://api.eventhub.rahulshettyacademy.com/api/auth/login
    - user-agent: Playwright/1.60.0 (arm64; macOS 26.5) node/24.14
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/json
    - content-length: 55

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e4]:
      - link "EventHub" [ref=e5] [cursor=pointer]:
        - /url: /
        - img [ref=e7]
        - generic [ref=e9]: EventHub
      - generic [ref=e10]:
        - link "Home" [ref=e11] [cursor=pointer]:
          - /url: /
        - link "Events" [ref=e12] [cursor=pointer]:
          - /url: /events
        - link "My Bookings" [ref=e13] [cursor=pointer]:
          - /url: /bookings
        - link "API Docs" [ref=e14] [cursor=pointer]:
          - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
        - button "Admin" [ref=e16] [cursor=pointer]:
          - text: Admin
          - img [ref=e17]
        - generic [ref=e19]:
          - generic "james.bond@yahoo.com" [ref=e20]
          - button "Logout" [ref=e21] [cursor=pointer]
  - main [ref=e22]:
    - generic [ref=e23]:
      - generic [ref=e26]:
        - heading "Discover & Book Amazing Events" [level=1] [ref=e27]:
          - text: Discover & Book
          - text: Amazing Events
        - paragraph [ref=e28]: From tech conferences to live concerts, sports events to cultural festivals — find experiences that inspire you.
        - generic [ref=e29]:
          - link "Browse Events →" [ref=e30] [cursor=pointer]:
            - /url: /events
            - generic [ref=e31]: Browse Events →
          - link "My Bookings" [ref=e32] [cursor=pointer]:
            - /url: /bookings
            - button "My Bookings" [ref=e33]
      - generic [ref=e34]:
        - generic [ref=e35]:
          - generic [ref=e36]:
            - heading "Featured Events" [level=2] [ref=e37]
            - paragraph [ref=e38]: Hand-picked upcoming events just for you
          - link "View all →" [ref=e39] [cursor=pointer]:
            - /url: /events
        - generic [ref=e40]:
          - article [ref=e41]:
            - generic [ref=e42]:
              - img "Dilli Diwali Mela" [ref=e43]
              - generic [ref=e45]: Festival
              - generic [ref=e46]: Featured
            - generic [ref=e47]:
              - link "Dilli Diwali Mela" [ref=e48] [cursor=pointer]:
                - /url: /events/3
                - heading "Dilli Diwali Mela" [level=3] [ref=e49]
              - generic [ref=e50]:
                - generic [ref=e51]:
                  - img [ref=e52]
                  - generic [ref=e54]: Tue, 20 Oct
                - generic [ref=e55]:
                  - img [ref=e56]
                  - generic [ref=e58]: Pragati Maidan Exhibition Grounds, Delhi
              - generic [ref=e59]:
                - generic [ref=e60]:
                  - paragraph [ref=e61]: $300
                  - generic [ref=e62]: 9991 seats available
                - link "Book Now" [ref=e63] [cursor=pointer]:
                  - /url: /events/3
          - article [ref=e64]:
            - generic [ref=e65]:
              - img "Hollywood Monsoon Night — Los Angeles" [ref=e66]
              - generic [ref=e68]: Concert
              - generic [ref=e69]: Featured
            - generic [ref=e70]:
              - link "Hollywood Monsoon Night — Los Angeles" [ref=e71] [cursor=pointer]:
                - /url: /events/2
                - heading "Hollywood Monsoon Night — Los Angeles" [level=3] [ref=e72]
              - generic [ref=e73]:
                - generic [ref=e74]:
                  - img [ref=e75]
                  - generic [ref=e77]: Sun, 12 Jul
                - generic [ref=e78]:
                  - img [ref=e79]
                  - generic [ref=e81]: Dome, NSCI SVP Stadium, Worli, Los Angeles
              - generic [ref=e82]:
                - generic [ref=e83]:
                  - paragraph [ref=e84]: $2,500
                  - generic [ref=e85]: 3000 seats available
                - link "Book Now" [ref=e86] [cursor=pointer]:
                  - /url: /events/2
          - article [ref=e87]:
            - generic [ref=e88]:
              - img "World Tech Summit" [ref=e89]
              - generic [ref=e91]: Conference
              - generic [ref=e92]: Featured
            - generic [ref=e93]:
              - link "World Tech Summit" [ref=e94] [cursor=pointer]:
                - /url: /events/1
                - heading "World Tech Summit" [level=3] [ref=e95]
              - generic [ref=e96]:
                - generic [ref=e97]:
                  - img [ref=e98]
                  - generic [ref=e100]: Sat, 18 Apr
                - generic [ref=e101]:
                  - img [ref=e102]
                  - generic [ref=e104]: Hyderabad, Hitech city, Hyderabad
              - generic [ref=e105]:
                - generic [ref=e106]:
                  - paragraph [ref=e107]: $1,500
                  - generic [ref=e108]: 500 seats available
                - link "Book Now" [ref=e109] [cursor=pointer]:
                  - /url: /events/1
      - generic [ref=e111]:
        - heading "Ready to experience something new?" [level=2] [ref=e112]
        - paragraph [ref=e113]: Browse thousands of events across India. Book tickets in seconds.
        - link "Explore All Events" [ref=e114] [cursor=pointer]:
          - /url: /events
          - button "Explore All Events" [ref=e115]
  - contentinfo [ref=e116]:
    - generic [ref=e117]:
      - generic [ref=e118]:
        - generic [ref=e119]:
          - heading "Rahul Shetty Academy" [level=3] [ref=e120]
          - paragraph [ref=e121]: India's leading QA automation training academy — empowering engineers to build real-world testing skills.
        - generic [ref=e122]:
          - heading "Popular Courses" [level=3] [ref=e123]
          - list [ref=e124]:
            - listitem [ref=e125]:
              - link "Selenium WebDriver with Java" [ref=e126] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e127]:
              - link "Playwright with JavaScript" [ref=e128] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e129]:
              - link "RestAssured API Testing" [ref=e130] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e131]:
              - link "Cypress End-to-End Testing" [ref=e132] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e133]:
              - link "Appium Mobile Testing" [ref=e134] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
        - generic [ref=e135]:
          - heading "QA Job Hiring Platform" [level=3] [ref=e136]
          - paragraph [ref=e137]: Get hired faster — take skill assessments trusted by top QA employers worldwide.
          - link "techsmarthire.com →" [ref=e138] [cursor=pointer]:
            - /url: https://techsmarthire.com
        - generic [ref=e139]:
          - heading "EventHub Practice App" [level=3] [ref=e140]
          - list [ref=e141]:
            - listitem [ref=e142]:
              - link "Browse Events" [ref=e143] [cursor=pointer]:
                - /url: /events
            - listitem [ref=e144]:
              - link "My Bookings" [ref=e145] [cursor=pointer]:
                - /url: /bookings
            - listitem [ref=e146]:
              - link "Manage Events" [ref=e147] [cursor=pointer]:
                - /url: /admin/events
            - listitem [ref=e148]:
              - link "API Documentation" [ref=e149] [cursor=pointer]:
                - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
      - generic [ref=e150]:
        - paragraph [ref=e151]: © 2026 Rahul Shetty Academy. All rights reserved.
        - generic [ref=e152]:
          - link "rahulshettyacademy.com →" [ref=e153] [cursor=pointer]:
            - /url: https://rahulshettyacademy.com
          - link "techsmarthire.com →" [ref=e154] [cursor=pointer]:
            - /url: https://techsmarthire.com
  - alert [ref=e155]
```

# Test source

```ts
  1  | const { test, expect, request } = require("@playwright/test");
  2  | const base_url = "https://eventhub.rahulshettyacademy.com";
  3  | const api_url = "https://api.eventhub.rahulshettyacademy.com/api";
  4  | const gmail_account = { email: "umang1112@gmail.com", password: "Umang@123" };
  5  | const yahoo_account = { email: "james.bond@yahoo.com", password: "James@007" };
  6  | 
  7  | async function login(page, account) {
  8  |     await page.goto("https://eventhub.rahulshettyacademy.com/login");
  9  |     await page.getByLabel("Email").fill(account.email);
  10 |     await page.getByLabel("Password").fill(account.password);
  11 |     await page.getByRole("button", { name: "Sign In" }).click();
  12 |     await expect(page.getByRole("link", { name: "Browse Events →" })).toBeVisible();
  13 | }
  14 | test("@API Cross User Booking Access Denied - Assignment 4", async ({ browser }) => {
  15 |     const context = await browser.newContext();
  16 |     const page = await context.newPage();
  17 |     const api_context = await request.newContext({ ignoreHTTPSErrors: true });
  18 | 
  19 |     await login(page, yahoo_account);
  20 | 
> 21 |     const login_response = await api_context.post(`${api_url}/auth/login`, {
     |                                              ^ Error: apiRequestContext.post: read ECONNRESET
  22 |         data: { email: yahoo_account.email, password: yahoo_account.password }
  23 |     });
  24 |     expect(login_response.ok()).toBeTruthy();
  25 |     const { token } = await login_response.json();
  26 | 
  27 |     const event_response = await api_context.get(`${api_url}/events`, {
  28 |         headers: { 'Authorization': `Bearer ${token}` }
  29 |     });
  30 |     const eventId = (await event_response.json()).data[0].id;
  31 | 
  32 |     const booking = await api_context.post(`${api_url}/bookings`, {
  33 |         headers: { 'Authorization': `Bearer ${token}` },
  34 |         data: {
  35 |             eventId,
  36 |             customerName: "James Bond",
  37 |             customerEmail: yahoo_account.email,
  38 |             customerPhone: "+91-9876543210",
  39 |             quantity: 1
  40 |         }
  41 |     });
  42 |     const yahooBookingId = (await booking.json()).data.id;
  43 | 
  44 |     await login(page, gmail_account);
  45 |     await page.goto(`${base_url}/bookings/${yahooBookingId}`, { waitUntil: 'networkidle' });
  46 |     await expect(page.getByText('Access Denied')).toBeVisible();
  47 |     await expect(page.getByText('You are not authorized to view this booking')).toBeVisible();
  48 | 
  49 |     await api_context.dispose();
  50 | });
```