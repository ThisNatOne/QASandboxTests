import { test , expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('explore features on home page like dropdowns, selectors and checkboxes', async ({ page }) => {

    const homePage = new HomePage(page);
    await homePage.navigate();
    await expect(homePage.exploreFaturesButton).toBeVisible();

    await homePage.exploreFaturesButton.click();
    
    //verify the dropdown with countries is visible and select an option
    await expect(homePage.countrySelectorDropdown).toBeVisible();
    await homePage.countrySelectorDropdown.selectOption('United States');
    await expect(homePage.countrySelectorDropdown).toHaveValue('United States');

    //verify the marketing consent checkbox is visible and can be checked
    await expect(homePage.marketingConsentSection).toBeVisible();
    await homePage.marketingConsentSMSUpdates.check();
    await expect(homePage.marketingConsentSMSUpdates).toBeChecked();

    //verify the testing mode radio button is visible and can be selected
    await expect(homePage.preferedTestingModeSection).toBeVisible();
    await expect(homePage.testingModeRadioButton).toBeVisible();
    await homePage.testingModeRadioButton.check();
    await expect(homePage.testingModeRadioButton).toBeChecked();    
});