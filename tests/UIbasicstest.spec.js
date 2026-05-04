const {test,expect} = require ('@playwright/test');
test('Browser Context Playwright Test',async ({browser})=>
    {
        const context = await browser.newContext();
        const page = await context.newPage();
        //await page.route("**/*.{jpg,png,jpeg}",route => route.abort());
        const username = page.locator("#username");
        const signin = page.locator("#signInBtn");
        const password = page.locator("[type='password']");
        const cardtitles = page.locator(".card-body a");
        await page.on('request',request => request => request.url());
        await page.on('response',response => console.log(response.url() + " " + response.status()));
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        console.log(await page.title());
        await username.fill("umang_mandilwar");
        await password.fill("umang4567");
        await expect(signin).toContainText("Sign In");
        await signin.click();
        console.log(await page.locator("[style*='block']").textContent());
        await expect(page.locator("[style*='block']")).toContainText("Incorrect");
        await username.fill("");
        await username.fill("rahulshettyacademy");
        await password.fill("");
        await password.fill("Learning@830$3mK2");
        await signin.click();
        await page.waitForLoadState('networkidle');
        console.log(await cardtitles.first().textContent());
        console.log(await cardtitles.nth(1).textContent());
        const alltitles = await cardtitles.allTextContents();
        console.log(alltitles);
        await expect(cardtitles.first()).toContainText("iphone X");
        await expect(cardtitles.nth(1)).toContainText("Samsung Note 8");
    }
);
test('UI Controls',async ({browser})=>
    {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        const username = page.locator("#username");
        const signin = page.locator("#signInBtn");
        const dropdown = page.locator("select.form-control");
        const doclink = page.locator("[href*='documents-request']");
        await dropdown.selectOption("Consultant");
        await page.locator(".radiotextsty").last().click();
        await expect(page.locator(".modal-body")).toContainText("Proceed?");
        await page.locator("#okayBtn").click();
        console.log(await page.locator(".radiotextsty").last().isChecked());
        await expect(page.locator(".radiotextsty").last()).toBeChecked();
        await page.locator("#terms").click();
        await expect(page.locator("#terms")).toBeChecked();
        await page.locator("#terms").uncheck();
        expect(await page.locator("#terms").isChecked()).toBeFalsy();
        await expect(doclink).toHaveAttribute("class","blinkingText");
        // await page.pause();
    }   
);

test('Child Window Handling',async ({browser})=>
    {
        const context = await browser.newContext();
        const page = await context.newPage();
        const username = page.locator("#username");
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        const doclink = page.locator("[href*='documents-request']");
        const [newpage] = await Promise.all([
        context.waitForEvent('page'),
        doclink.click(),
        ]);
        await newpage.waitForLoadState('networkidle');
        const text = await newpage.locator("p.red").textContent();
        const arraytext = await text.split("@");
        const domain = await arraytext[1].split(" ")[0];
        console.log(text);
        console.log(domain);
        await username.fill(domain);
        console.log(await username.textContent());
        //console.log(await username.inputValue()); //Required when there is a need of dynamic update in edit boxes.
    }
);

/* For running a single test out of multiple test, use test.only() annotation */