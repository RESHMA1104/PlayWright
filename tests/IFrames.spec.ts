import { test, expect } from '@playwright/test';
test('IFrame', async({page})=>{
    await page.goto("https://letcode.in/frame");
    const allframes = page.frames();
    console.log("No of Frames : " + allframes.length);
    const myFrame = page.frame("firstFr");
    await myFrame?.fill('//input[@name="fname"]', "Reshma")
    await myFrame?.fill('//input[@name="lname"]', "K")
    const frame = page.frameLocator('iframe[name = "firstFr]');
    const text = await expect(frame.locator('p.text-sm font-semibold text-center')).toContainText("Reshma");

})

test('IFrame2', async({page})=>{
    await page.goto("https://letcode.in/frame");
    const myFrame = page.frame("firstFr");
    await myFrame?.fill('//input[@name="fname"]', "Reshma")
    await myFrame?.fill('//input[@name="lname"]', "K")
    const frame = page.frameLocator('iframe[name = "firstFr]');
    const text = await expect(frame.locator('p.text-sm font-semibold text-center'))
    expect(text).toContain("You have entered");
    expect(text).toContain("Reshma");
    expect(text).toContain("K");
    const innerFrame = frame.frameLocator("iframe[src='innerframe']");
    await innerFrame.locator("input[name='email']").fill("Reshma@gmail.com");


})