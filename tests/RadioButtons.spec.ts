import { test, expect } from "@playwright/test";
test("Radio Button", async({page}) => {
    await page.goto("https://omayo.blogspot.com/");
    const bicycle = await page.locator("//input[@value='Bicycle']");
    bicycle.check();
    expect(bicycle).toBeChecked();
})

test("Radio Button Status", async({page}) => {
    await page.goto("https://omayo.blogspot.com/");
    const bicycle = await page.locator("//input[@value='Bicycle']").isChecked();
    console.log(bicycle);
})