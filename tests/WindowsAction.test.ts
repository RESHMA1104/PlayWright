import { test, expect } from '@playwright/test';
test("Iterate windows", async({page, context}) => {
    await page.goto("https://demoqa.com/browser-windows");
    const [tab] = await Promise.all([
        context.waitForEvent("page"),
        page.locator('#tabButton').click(),
     ]);
     await tab.waitForLoadState();

    const [window] = await Promise.all([
        context.waitForEvent("page"),
        page.locator('#windowButton').click(),
    ]);
    await window.waitForLoadState();
    const pages = context.pages();
    console.log("Number of Pages : ", pages.length);
    for(const p of pages){
        console.log("------------");
        console.log("URL : ", p.url());
        console.log("Title : ", await p.title());
     }
});
test("Iterate window attribute", async({page, context}) => {
    await page.goto("https://demoqa.com/browser-windows");
    const [newTab] = await Promise.all([
        context.waitForEvent('page'),
        page.locator("#tabButton").click()
    ]);
    await newTab.waitForLoadState();

    const [Newwindow] = await Promise.all([
        context.waitForEvent("page"),
        page.locator('#windowButton').click(),
    ]);
    await Newwindow.waitForLoadState();
    const pages = context.pages();
    console.log(`Total Pages Opened: , ${pages.length}`);
    for(const p of pages){
        if(p.url().includes('sample')){
            const text = await p.locator("#sampleHeading").textContent();
            console.log("Sample Page Heading : ", text);
        }
    }

})