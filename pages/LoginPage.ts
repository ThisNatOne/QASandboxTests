import { Page, Locator } from "@playwright/test";


export class LoginPage {
    readonly page: Page;
    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly signInButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userNameInput = page.getByLabel('Username');
        this.passwordInput = page.getByLabel('Password');
        this.signInButton = page.getByTestId('login-submit');
    }

    async navigateToLogin() {
        await this.page.goto('/login');
    }

    async loginToTheDashboard(username: string, password: string) {
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
    }
}
