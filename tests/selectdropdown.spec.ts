import { test, expect,Locator } from '@playwright/test';

test('has title', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  //await expect(page).toHaveTitle(/Automation Testing Practice/i);

  //await page.getByLabel('Name').fill('Sujatha');
  //await page.getByLabel('Email').fill('sujathabaswani@gmail.com');

 // await page.locator('#phone').fill('234567890');

  //await page.locator('#textarea').fill('Hyderabad');

  //await page.locator('#country').selectOption('India');

  //await page.getByRole('radio', { name: 'Female' }).check();

  //check number options in the dropdown
  const dropdownoptions:Locator=page.locator('#country>option');
  await expect (dropdownoptions).toHaveCount(10);

  //check an option present in the dropdown

  const optionsText: string[] = (await dropdownoptions.allTextContents()).map((text) => text.trim());
  console.log(optionsText);

  //

});



