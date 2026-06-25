import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://tutorialsninja.com/demo/');
  await expect(page.getByRole('button', { name: '$ Currency  ' })).toBeVisible();

  await page.getByRole('link', { name: ' My Account' }).click();
  await page.getByRole('link', { name: 'Register' }).click();
  await expect(page.getByRole('group', { name: 'Your Personal Details' })).toBeVisible();

  await page.getByRole('textbox', { name: '* First Name' }).click();
  await page.getByRole('textbox', { name: '* First Name' }).fill('Reshma');
  await page.getByRole('textbox', { name: '* Last Name' }).click();
  await page.getByRole('textbox', { name: '* Last Name' }).fill('K');
  await page.getByRole('textbox', { name: '* E-Mail' }).click();
  await page.getByRole('textbox', { name: '* E-Mail' }).fill('reshmak@gmail.com');
  await page.getByRole('textbox', { name: '* Telephone' }).click();
  await page.getByRole('textbox', { name: '* Telephone' }).fill('1234567890');
  await page.getByRole('textbox', { name: '* Password', exact: true }).click();
  await page.getByRole('textbox', { name: '* Password', exact: true }).fill('Resh@123');
  await page.getByRole('textbox', { name: '* Password Confirm' }).click();
  await page.getByRole('textbox', { name: '* Password Confirm' }).fill('Resh@123');
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByRole('button', { name: '$ Currency  ' })).toBeVisible();

  await page.getByRole('heading', { name: 'Your Account Has Been Created!' }).click();
  await expect(page.getByRole('heading', { name: 'Your Account Has Been Created!' })).toBeVisible();
  await page.getByRole('link', { name: 'Continue' }).click();
  await expect(page.getByRole('button', { name: '$ Currency  ' })).toBeVisible();

  await page.getByRole('link', { name: ' My Account' }).click();
  await page.locator('#top-links').getByRole('link', { name: 'Logout' }).click();
  await expect(page.locator('#content')).toContainText('Account Logout');
  await page.getByRole('link', { name: 'Continue' }).click();
  await expect(page.getByRole('button', { name: '$ Currency  ' })).toBeVisible();

  await page.getByRole('link', { name: ' My Account' }).click();
  await expect(page.getByRole('link', { name: 'Register' })).toBeVisible();

  await page.getByRole('link', { name: 'Login' }).click();
  await expect(page.getByRole('button', { name: '$ Currency  ' })).toBeVisible();

  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('reshmak@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Resh@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('button', { name: '$ Currency  ' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('hp');
  await page.getByRole('textbox', { name: 'Search' }).press('Enter');
  await expect(page.getByRole('button', { name: '$ Currency  ' })).toBeVisible();

  await page.getByText('HP LP3065', { exact: true }).click();
  await expect(page.locator('#content')).toContainText('HP LP3065');
});