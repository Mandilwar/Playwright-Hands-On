const { test, expect } = require('@playwright/test');

test('Assignment 1', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const email = "umang1112@gmail.com";
    const password = "Umang@123";
    const full_name = "Umang Mandilwar";
    const phone_number = "+91 98765 43210";
    const login_button = await page.locator("#login-btn");
    // Step 1
    await page.goto("https://eventhub.rahulshettyacademy.com/");
    await page.getByPlaceholder("you@email.com").fill(email);
    await page.getByLabel("Password").fill(password);
    await login_button.click();
    await page.waitForLoadState('networkidle');
    const login_success = await page.locator("a span").last();
    await expect(login_success).toHaveText("Browse Events →");
    // Step 2
    await page.getByRole("button",{name:'Admin'}).click();
    await page.locator("div a svg").nth(1).waitFor();
    await page.locator("div a svg").nth(1).click();
    await page.waitForLoadState('networkidle');
    await page.getByText("+ New Event").waitFor();
    const event_title = `Test Event-${Date.now()}`;
    await page.locator("input#event-title-input").fill(event_title);
    const descriptionText = `Diwali Mela is a festive fair held during the Diwali season, brightly lit with lamps and decorations. Local vendors offer sweets, snacks, handicrafts, clothing, and seasonal gifts. Stalls feature rangoli supplies, diyas, candles, and colorful décor for homes. Live performances showcase traditional music, dance, and cultural programs.
Families gather to shop, sample treats, and participate in rituals and prayers.
Community stalls and charity drives strengthen local bonds and festive spirit.
Overall it blends commerce, celebration, and tradition into a lively, family-friendly event.`;
    await page.getByPlaceholder("Describe the event…").fill(descriptionText);
    const city = "Bangalore";
    await page.getByLabel("City").fill(city);
    const venue = "Embassy Tech Village";
    await page.getByLabel("Venue").fill(venue);
    await page.getByLabel("Event Date & Time").fill("2027-12-31T10:00");
    const price = "100";
    await page.getByLabel("Price ($)").fill(price);
    const total_seats = "500";
    await page.locator("#total-seats").fill(total_seats);
    await page.getByRole("button",{name:"+ Add Event"}).click();
    await page.waitForTimeout(3000);
    await expect(page.getByText('Event created!')).toBeVisible();
    // Step 3
    await page.locator("#nav-events").click();
    await page.waitForLoadState("networkidle");
    const events = await page.locator("#event-card");
    await expect(events.first()).toBeVisible();
    const allevents = await events.allTextContents();
    console.log(allevents);
    const card = await page.locator(`#event-card:has-text("${event_title}")`).last();
    await expect(card).toBeVisible();
    const seats = await card.getByText("500").innerText();
    const seats_count = await parseInt(await seats.replace(/\D/g, ''), 10);
    console.log(seats_count);
    await expect(seats_count).toBe(500);
    // Step 4
    await card.locator("#book-now-btn").last().click();
    await page.waitForLoadState('networkidle');
    // Step 5
    await expect(page.locator('#ticket-count')).toHaveText('1');
    await page.getByLabel("Full Name").fill(full_name);
    await page.locator("#customer-email").fill(email);
    await page.getByPlaceholder("+91 98765 43210").fill(phone_number);
    await page.locator("#confirm-booking").click();
    await page.waitForTimeout(2000);
    await expect(page.getByRole('heading', { name: 'Booking Confirmed! 🎉' })).toBeVisible();
    // Step 6
    await expect(page.getByText('Booking Ref')).toBeVisible();
    const bookingRef = (await page.locator("div:has-text('Booking Ref')").locator("text=/T-/").innerText()).trim();
    console.log(bookingRef);
    // Step 7
    await page.locator("#nav-bookings").click();
    await page.waitForLoadState("networkidle");
    await expect(page).toHaveURL("https://eventhub.rahulshettyacademy.com/bookings");
    const booking_card = await page.locator("#booking-card");
    await expect(booking_card.first()).toBeVisible();
    const allbookings = await booking_card.allTextContents();
    console.log(allbookings);
    await expect(booking_card.first()).toContainText(bookingRef);
    await expect(booking_card.first()).toContainText(event_title);
    // Step 8
    await page.locator("#nav-events").click();
    await page.waitForLoadState("networkidle");
    await expect(events.first()).toBeVisible();
    const updated_card = await page.locator(`#event-card:has-text("${event_title}")`);
    await expect(updated_card).toBeVisible();
    const updated_seats_count = parseInt(await updated_card.getByText("seats").first().innerText());
    console.log(updated_seats_count);
    await expect(updated_seats_count).toBe(seats_count - 1);
    console.log(allevents);
});

test('Assignment 2.1', async({ browser })=> {
    const context = await browser.newContext();
    const page = await context.newPage();
    const email = "umang1112@gmail.com";
    const password = "Umang@123";
    const full_name = "Umang Mandilwar";
    const phone_number = "+91 98765 43210";
    const login_button = await page.locator("#login-btn");
    // Step 1
    await page.goto("https://eventhub.rahulshettyacademy.com/");
    await page.getByPlaceholder("you@email.com").fill(email);
    await page.getByLabel("Password").fill(password);
    await login_button.click();
    await page.waitForLoadState('networkidle');
    const login_success = await page.locator("a span").last();
    await expect(login_success).toHaveText("Browse Events →");
    // Step 2
    await page.locator("#nav-events").click();
    await page.waitForLoadState('networkidle');
    const events = await page.locator("#event-card");
    await expect(events.first()).toBeVisible();
    const cards = await page.locator("#event-card").first();
    await cards.locator("#book-now-btn").first().click();
    await page.getByLabel("Full Name").fill(full_name);
    await page.locator("#customer-email").fill(email);
    await page.getByPlaceholder("+91 98765 43210").fill(phone_number);
    await page.locator("#confirm-booking").click();
    await page.waitForTimeout(2000);
    await expect(page.getByText('Booking Ref')).toBeVisible();
    const bookingRef = (await page.locator("div:has-text('Booking Ref')").locator("text=/D-/").innerText()).trim();
    console.log(bookingRef);
    // Step 3
    await page.locator("#nav-bookings").click();
    await page.waitForLoadState("networkidle");
    await expect(page).toHaveURL("https://eventhub.rahulshettyacademy.com/bookings");
    const booking_card = await page.locator("#booking-card");
    await expect(booking_card.first()).toBeVisible();
    await page.getByRole("button",{name:'View Details'}).first().click();
    await page.waitForLoadState("networkidle");
    // Step 4
    await expect(page.locator(".text-gray-900.font-mono")).toContainText(bookingRef);
    await page.locator("h1").first().textContent();
    const event_title_text = (await page.locator("h1").first().innerText()).trim();
    const event_title_char = await event_title_text.charAt(0);
    const booking_ref_char = await bookingRef.charAt(0);
    await expect(booking_ref_char).toBe(event_title_char);
    // Step 5
    await page.getByRole("button",{name:'Check eligibility for refund?'}).click();
    await expect(page.locator("#refund-spinner")).toBeVisible();
    await page.waitForTimeout(6000);
    // Step 6
    await expect(page.locator("#refund-result")).toBeVisible();
    await expect(page.locator("#refund-result")).toContainText("Eligible for refund.");
    await expect(page.locator("#refund-result")).toContainText(" Single-ticket bookings qualify for a full refund.");
});

test('Assignment 2.2', async({ browser })=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    const email = "umang1112@gmail.com";
    const password = "Umang@123";
    const full_name = "Umang Mandilwar";
    const phone_number = "+91 98765 43210";
    const login_button = await page.locator("#login-btn");
    // Step 1
    await page.goto("https://eventhub.rahulshettyacademy.com/");
    await page.getByPlaceholder("you@email.com").fill(email);
    await page.getByLabel("Password").fill(password);
    await login_button.click();
    await page.waitForLoadState('networkidle');
    const login_success = await page.locator("a span").last();
    await expect(login_success).toHaveText("Browse Events →");
    // Step 2
    await page.locator("#nav-events").click();
    await page.waitForLoadState('networkidle');
    const events = await page.locator("#event-card");
    await expect(events.first()).toBeVisible();
    const cards = await page.locator("#event-card").first();
    await cards.locator("#book-now-btn").first().click();
    await page.getByLabel("Full Name").fill(full_name);
    await page.locator("#customer-email").fill(email);
    await page.getByPlaceholder("+91 98765 43210").fill(phone_number);
    await page.getByRole("button",{name:"+"}).click();
    await page.getByRole("button",{name:"+"}).click();
    await page.locator("#confirm-booking").click();
    await page.waitForTimeout(2000);
    await expect(page.getByText('Booking Ref')).toBeVisible();
    const bookingRef = (await page.locator("div:has-text('Booking Ref')").locator("text=/D-/").innerText()).trim();
    console.log(bookingRef);
    // Step 3
    await page.locator("#nav-bookings").click();
    await page.waitForLoadState("networkidle");
    await expect(page).toHaveURL("https://eventhub.rahulshettyacademy.com/bookings");
    const booking_card = await page.locator("#booking-card");
    await expect(booking_card.first()).toBeVisible();
    await page.getByRole("button",{name:'View Details'}).first().click();
    await page.waitForLoadState("networkidle");
    // Step 4
    await expect(page.locator(".text-gray-900.font-mono")).toContainText(bookingRef);
    await page.locator("h1").first().textContent();
    const event_title_text = (await page.locator("h1").first().innerText()).trim();
    const event_title_char = await event_title_text.charAt(0);
    const booking_ref_char = await bookingRef.charAt(0);
    await expect(booking_ref_char).toBe(event_title_char);
    // Step 5
    await page.getByRole("button",{name:'Check eligibility for refund?'}).click();
    await expect(page.locator("#refund-spinner")).toBeVisible();
    await page.waitForTimeout(6000);
    // Step 6
    await expect(page.locator("#refund-result")).toBeVisible();
    await expect(page.locator("#refund-result")).toContainText("Not eligible for refund.");
    await expect(page.locator("#refund-result")).toContainText(" Group bookings (3 tickets) are non-refundable.");
    await page.pause();
});