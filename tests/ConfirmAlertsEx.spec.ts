import { test, expect } from '@playwright/test';
test("Confirm Alert", async({page}) => {
    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/");
    page.on("dialog", async (alert) => {
        const text = alert.message();
        console.log(text);
        //await alert.accept();
        await alert.dismiss();
    })
    await page.getByText("Click Me").nth(1).click();
    await page.waitForTimeout(30000);
    //expect(await page.locator("#confirm-demo")).toHaveText("You pressed OK!");
    await expect(page.locator(".mt-20")).toContainText("Cancel!");
})