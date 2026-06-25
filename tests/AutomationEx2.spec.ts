import { test, expect } from '@playwright/test';
test('Login Test', async({page}) => {
    await page.goto("https://automationexercise.com/");
    await page.waitForTimeout(3000);
    await page.getByRole('link', {name : 'login'}).click();
    await page.locator('//h2[text()="Login to your account"]//following::input[@data-qa="login-email"]').fill('Rosy@gmail.com');
    await page.locator('//input[@name="password"]').fill('Rosy@123');
    await page.getByRole('button', {name : 'Login'}).click();
    await expect(page.locator('//a[@href="/contact_us"]//following::a/b')).toBeVisible();
})