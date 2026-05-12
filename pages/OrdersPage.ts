import { Page, Locator} from "@playwright/test";
import { users } from "../test-data/users";

export class OrdersPage {
    readonly page: Page;
    readonly ordersHeading: Locator;
    readonly orderList: Locator;
    readonly orderNumberInput: Locator;
    readonly customerNameInput: Locator;
    readonly orderStatusDropdown: Locator;
    readonly totalAmountInput: Locator;
    readonly createOrderButton: Locator;
    readonly myTestOrder: Locator;

    constructor(page: Page) {
        this.page = page;
        this.ordersHeading = page.getByTestId('orders-heading');
        this.orderList = page.getByRole('heading', { name: 'Orders' });
        this.orderNumberInput = page.getByTestId('order-number-input');
        this.customerNameInput = page.getByTestId('customer-name-input');
        this.orderStatusDropdown = page.getByTestId('order-status-select');
        this.totalAmountInput = page.getByTestId('total-amount-input');
        this.createOrderButton = page.getByTestId('save-order-button');
        this.myTestOrder = page.getByRole('cell', { name: 'ORD-01Test' });
    }

        async navigateToOrders() {
        await this.page.goto('/orders');
    }

}