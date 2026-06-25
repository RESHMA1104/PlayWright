// Creating context and Page
import { chromium, test } from "@playwright/test";

test("Login test Demo", async() => {
    const browser = await chromium.launch({
        headless : false,
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://demoblaze.com/");
    await page.click('//a[@id="login2"]');
    await page.fill('//input[@id="loginusername"]', 'KiotAdmin');
    await page.fill('//input[@id="loginpassword"]', 'Kiot@123');
    await page.click('//button[@onclick="logIn()"]');
    await page.waitForTimeout(5000);

    /*const page1 = await context.newPage();
    await page1.goto("https://demoblaze.com/cart.html");
    await page1.waitForTimeout(5000);
    */
    
    const NewContext = await browser.newContext();
    const NewPage = await browser.newPage();
    await NewPage.goto("https://demoblaze.com/cart.html");
    await page.waitForTimeout(5000);

})