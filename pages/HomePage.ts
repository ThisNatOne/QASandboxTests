import { Page, Locator} from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly pageTitle: Locator;
    readonly pageDescription: Locator;
    readonly homeButton: Locator;
    readonly loginButton: Locator;
    readonly contactForm: Locator;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly messageInput: Locator;
    readonly sendMessageButton: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageTitle = page.getByTestId('brand-link');
        this.pageDescription = page.getByText('Built for automation practice');
        this.homeButton = page.getByRole('link', { name: 'Home' });
        this.loginButton = page.getByRole('link', { name: 'Login', exact: true });
        this.contactForm = page.getByText('Contact');
        this.nameInput = page.getByTestId('contact-name');
        this.emailInput = page.getByTestId('contact-email');
        this.messageInput = page.getByTestId('contact-message');
        this.sendMessageButton = page.getByTestId('contact-submit');
        this.successMessage = page.getByTestId('contact-status');   
    }

    async navigate() {
        await this.page.goto('/');
    }};