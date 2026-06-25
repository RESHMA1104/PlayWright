import { test, expect } from '@playwright/test';
test('Login Test', async({page}) => {
    await page.goto("https://google.co.in/");
    await page.waitForTimeout(5000);
    await page.goto("https://www.flipkart.com");
    await page.goBack();
    await page.waitForTimeout(3000);
    await page.goForward();
    await page.waitForTimeout(3000);
    await page.reload();
    await page.waitForTimeout(3000);

})