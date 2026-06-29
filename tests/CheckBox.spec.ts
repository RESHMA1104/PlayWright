import { test, expect } from "@playwright/test";
test("CheckBox", async ({page}) =>{
    await page.goto("https://omayo.blogspot.com/");
    const bag = page.locator("//input[@value='Bag']")
    bag.check();
    await expect(bag).toBeChecked()
})

test("MultipleCheckBox", async ({page}) =>{
    await page.goto("https://omayo.blogspot.com/");
    const bag = page.locator("//input[@value='Bag']")
    bag.check();
    await expect(page.locator("//input[@value='Bag']")).toBeChecked();
    const Laptop = page.locator("//input[@value='Laptop']")
    Laptop.check();
    await expect(page.locator("//input[@value='Laptop']")).toBeChecked();
})

test("UCheckBox", async ({page}) =>{
    await page.goto("https://omayo.blogspot.com/");
    const book = page.locator("//input[@value='Book']")
    book.uncheck();
    await expect(page.locator("//input[@value='Book']")).not.toBeChecked();
})