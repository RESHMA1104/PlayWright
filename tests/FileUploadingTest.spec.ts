import { test, expect } from "@playwright/test";
test("Uploding a file", async({page}) => {
    await page.goto("https://demo.automationtesting.in/FileUpload.html");
    const upload = await page.locator("#input-4");
    upload.setInputFiles("FilesAccess\\Seasharp.pdf");
    const ass = page.locator("//span[text()='Remove']");
    await expect(ass).toContainText("Remove");
})

test("Uploding Multiple file", async({page}) => {
    await page.goto("https://demo.automationtesting.in/FileUpload.html");
    const upload = await page.locator("#input-4");
    upload.setInputFiles("FilesAccess\\Seasharp.pdf");
    upload.setInputFiles("FilesAccess\\Seashoe.pdf");
})