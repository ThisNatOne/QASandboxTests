import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('home page loads correctly', async ({ page }) => {

  const homePage = new HomePage(page);
  await homePage.navigate();

  // Expect a title "to contain" a substring.
  await expect(homePage.pageTitle).toBeVisible();
  await expect(homePage.pageDescription).toBeVisible();
  await expect(homePage.homeButton).toBeVisible();
  await expect(homePage.pageDescription).toContainText('Built for automation practice');
  await expect(homePage.pageTitle).toHaveText('Sandbox QA');

});


