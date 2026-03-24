import { test , expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { users } from '../test-data/users';

test('contact form submission', async ({ page }) => {

    const homePage = new HomePage(page);
    await homePage.navigate();
    await expect(homePage.contactForm).toBeVisible();

    await homePage.nameInput.fill(users.contactUser.name);
    await homePage.emailInput.fill(users.contactUser.email);
    await homePage.messageInput.fill(users.contactUser.message);
    await homePage.sendMessageButton.click();

    await expect(homePage.successMessage).toBeVisible();
    await expect(homePage.successMessage).toHaveText('Contact form submitted successfully.');
        
});