import { Page, Locator} from "@playwright/test";
import { users } from "../test-data/users";

export class DashboardPage {
    readonly page: Page;
    readonly dashboardHeading: Locator;
    readonly signAsSection: Locator;
    readonly userProfileEmail: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dashboardHeading = page.getByTestId('dashboard-heading');
        this.signAsSection = page.getByText('Signed in as');
        this.userProfileEmail = page.getByText(users.adminUser.email);
        this.logoutButton = page.getByTestId('logout-button');
    }};