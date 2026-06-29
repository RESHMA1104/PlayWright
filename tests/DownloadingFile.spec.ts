import { test, expect } from "@playwright/test";

test("Downloading a file", async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/FileDownload.html");
    const downloaded = page.waitForEvent("download");
    await page.click("//a[contains(@href,'samplefile.pdf')]");
    const download = await downloaded;
    const dn = await download.suggestedFilename()
    console.log(dn);
    await download.saveAs("./downloads/downloadfile.pdf");
})