import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { users } from '../test-data/users';


test('login with valid credentials and logout', async ({ page }) => {

    const homePage = new HomePage(page);
    await homePage.navigate();
    await homePage.loginButton.click();

    const loginPage = new LoginPage(page);
    await loginPage.userNameInput.fill(users.adminUser.username);
    await loginPage.passwordInput.fill(users.adminUser.password);
    await loginPage.signInButton.click();

    const dashboardPage = new DashboardPage(page);
    await expect(dashboardPage.dashboardHeading).toBeVisible();
    await expect(dashboardPage.dashboardHeading).toHaveText('Welcome back, Admin Tester');
    await expect(dashboardPage.signAsSection).toBeVisible();
    await expect(dashboardPage.userProfileEmail).toBeVisible();

    await dashboardPage.logoutButton.click();
    await expect(homePage.pageTitle).toBeVisible();
});
