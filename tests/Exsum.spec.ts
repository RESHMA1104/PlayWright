import { test, expect } from '@playwright/test';
test("Sum Example", async({page}) => {
    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
    await page.locator("#sum1").fill('20');
    await page.locator("#sum2").fill('30');
    await page.getByText("Get Sum").click();
    const box = await page.getByText("Get Sum").boundingBox()
    console.log("Box : " + box?.width , box?.height);
    const sum = await page.locator("#addmessage").isVisible();
    console.log("Total Sum : " + sum);
    await expect(sum).toBe('50');
})