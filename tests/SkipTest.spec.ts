import { test, expect } from "@playwright/test";
test.skip("Login DemoSkip ", async({page}) =>{
    test.skip(true, "Module under development");
    await page.goto("https://demoblaze.com/");
    await page.click("#login2");
    await page.fill("#loginusername", "KiotAdmin");
    await page.fill("#loginpassword", "Kiot@123");
    await page.click("//button[@onclick='logIn()']");
    await expect(page.getByRole("link", {name : "Log out"})).toBeVisible();
    await expect(page.getByRole("link", {name : "Log out"})).toHaveText("Log out");
    const expected = await page.locator("#nameofuser").textContent();
    expect(expected).toBe("Welcome KiotAdmin");
})

test("Login Demo ", async({page}) =>{
    await page.goto("https://demoblaze.com/");
    await page.click("#login2");
    await page.fill("#loginusername", "KiotAdmin");
    await page.fill("#loginpassword", "Kiot@123");
    await page.click("//button[@onclick='logIn()']");
    await expect.soft(page.getByRole("link", {name : "Log out"})).toBeVisible();
    await expect.soft(page.getByRole("link", {name : "Log out"})).toHaveText("Log out");
    const expected = await page.locator("#nameofuser").textContent();
    expect(expected).toBe("Welcome KiotAdmin");
})