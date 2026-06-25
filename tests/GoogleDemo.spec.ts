import { test, expect } from '@playwright/test';
test('Login Test', async({page}) => {
    await page.goto("https://www.google.co.in");
    const title = await page.title();
    console.log("Page Title : ", title);
    const currenturl = await page.url();
    console.log("Current Url : ", currenturl);
    const content = await page.content();
    console.log("Page Content : ", content.substring(0,300));
    await page.close();
})