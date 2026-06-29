import { test, expect } from "@playwright/test";
test.only("Login Test2 ", async({page}) =>{
    await page.goto("https://demoblaze.com/");
    await page.click("#login2");
    await page.fill("#loginusername", "KiotAdmin");
    await page.fill("#loginpassword", "Kiot@123");
    await page.click("//button[@onclick='logIn()']");
    await expect(page.getByRole("link", {name : "Log out"})).toBeVisible();
    await expect(page.getByRole("link", {name : "Log out"})).toHaveText("Log out");
    await expect(page.locator("#nameofuser")).toHaveText("Welcome KiotAdmin");
})

test("Login Test3 ", async({page}) =>{
    await page.goto("https://demoblaze.com/");
    await page.click("#login2");
    await page.fill("#loginusername", "KiotAdmin");
    await page.fill("#loginpassword", "Kiot@123");
    await page.click("//button[@onclick='logIn()']");
    await expect.soft(page.getByRole("link", {name : "Log out"})).toBeVisible();
    await expect.soft(page.getByRole("link", {name : "Log out"})).toHaveText("Log out");
    await expect(page.locator("#nameofuser")).toHaveText("Welcome KiotAdmin");
})