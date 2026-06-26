import { test, expect } from '@playwright/test';
test("Simple Alert", async({page}) => {
    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/");
    page.on("dialog", async (alert) => {
        const text = alert.defaultValue();
        console.log(text);
        await alert.accept("Reshma");
    })
    await page.getByText("Click Me").nth(2).click();
    expect(await page.locator("#prompt-demo")).toContainText('Reshma');
})