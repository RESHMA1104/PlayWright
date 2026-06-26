import { test, expect } from '@playwright/test';
test('Example', async({page}) => {
    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
    const currentUrl = await page.url();
    console.log("Url : ", currentUrl);
    const title = await page.title();
    console.log("Title : ", title);
    const pageSource = await page.content();
    console.log("Page Source : ", pageSource.substring(0, 500));
    const name = await page.getByPlaceholder("Please enter your Message");
    console.log("Before Entering the Text : ", await name.getAttribute("placeholder"));
    await page.getByPlaceholder("Please enter your Message").fill('Reshma');
    await page.getByText('Get Checked Value').click();
    const aftertxt = page.getByPlaceholder("Please enter your Message").inputValue();
    console.log("After Entering the Text : ", await aftertxt);
})