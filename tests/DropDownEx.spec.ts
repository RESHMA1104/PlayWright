import { test, expect } from '@playwright/test';
test('DropDown Select', async ({page}) => {
    await page.goto("https://www.testmuai.com/selenium-playground/select-dropdown-demo/");
    await page.selectOption("#select-demo", {
        //label : "Thursday",
        //value : "Wednesday",
        index : 7
    })
})  

test('DropDown Multi-Select', async ({page}) => {
    await page.goto("https://www.testmuai.com/selenium-playground/select-dropdown-demo/");
    await page.selectOption("#multi-select", [
        {value : "New Jersey"},
        {label : "Texas"},
        {index :  4}
])
})