import { test, expect } from '@playwright/test';
test('Login Test', async({page}) => {
    test.setTimeout(60000);
    await page.goto("https://automationexercise.com/",{
        timeout : 60000
    });
    await page.waitForTimeout(3000);
    await page.locator('//i[@class="fa fa-home"]').isVisible();
    await page.getByRole('link', {name : 'login'}).click();
    await page.getByPlaceholder('Name').fill('Rosy');
    await page.locator('//h2[text()="New User Signup!"]//following::input[@placeholder="Email Address"]').fill('Rosyy@gmail.com');
    await page.getByRole('button', {name : 'Signup'}).click();
    await page.locator('//div[@id="uniform-id_gender2"]').click();
    const hd = await expect(page.locator('//h2[@class="title text-center"]//child::b[text()="Enter Account Information"]'));
    hd.toBeVisible({
        timeout : 10000
    });
    await page.getByLabel('Password *').fill('Rosy@123');
    const day = await page.locator('#days');
    await day.selectOption('25');
    await day.click();
    const month = await page.locator('#months');
    month.selectOption('6');
    await month.click();
    const year = await page.locator('#years');
    await year.selectOption('2010');
    await year.click();
    const ch = await page.locator('#newsletter');
    await ch.check();
    await page.getByRole('textbox', {name : 'First Name *'}).fill("Rosy");
    await page.getByRole('textbox', {name : 'Last Name *'}).fill("R");
    await page.locator('#company').fill("ABC");
    await page.getByLabel('Address *').fill('12, Nehru Street');
    await page.getByLabel('Country *').selectOption('Canada');
    await page.getByRole('textbox', {name : 'State *'}).fill('Tamil Nadu');
    await page.getByRole('textbox', {name : 'City *'}).fill('Salem');
    await page.locator('#zipcode').fill('637103');
    await page.getByRole('textbox', {name : 'Mobile Number *'}).fill('1234567890');
    await page.getByRole('button', {name : 'Create Account'}).click();
    const ac = page.getByText('Account Created!');
    await expect(ac).toBeVisible();
    await page.getByText('Continue').click();
    await expect(page.locator('//a[@href="/contact_us"]//following::a/b')).toBeVisible();
    await page.getByText('Delete Account').click();
    const ad = page.getByText('Account Deleted!');
    await expect(ad).toBeVisible();
    await page.getByText('Continue').click();
})