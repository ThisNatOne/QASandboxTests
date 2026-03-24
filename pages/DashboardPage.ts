import { Page, Locator} from "@playwright/test";

export class DashboardPage {
    readonly page: Page;
    readonly dashboardHeading: Locator;
    readonly profileSection: Locator;
    readonly securitySection: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dashboardHeading = page.getByTestId('dashboard-heading');
        this.profileSection = page.getByText('Profile', { exact: true });
        this.securitySection = page.getByText('Security', { exact: true });
        this.logoutButton = page.getByTestId('logout-button');
    }};