import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
    console.log("Application Setup");
});

test.beforeEach(async ({ page }) => {
    await page.goto("https://google.co.in");
});

test("Login Test", async ({ page }) => {
    await expect(page).toHaveTitle('Google');
});

test("Search Test", async ({ page }) => {
    await expect(page).toHaveTitle('Google');
});

test.afterEach(async () => {
    console.log("Test Completed");
});

test.afterAll(async () => {
    console.log("Cleanup Completed");
});