import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { OrdersPage } from '../pages/OrdersPage';
import { users } from '../test-data/users';

test('create a new order', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.navigateToLogin();
    await loginPage.loginToTheDashboard(users.adminUser.username, users.adminUser.password);

    const ordersPage = new OrdersPage(page);
    await ordersPage.navigateToOrders(); 
    
    await ordersPage.orderNumberInput.fill('ORD-01Test');
    await ordersPage.customerNameInput.fill('Test Customer');
    await ordersPage.orderStatusDropdown.selectOption('Shipped');
    await ordersPage.totalAmountInput.fill('1000.00');
    await ordersPage.createOrderButton.click();

    await expect(ordersPage.myTestOrder).toBeVisible();
   // await expect(ordersPage.orderList).toContainText('Test Customer');
    //await expect(ordersPage.orderList).toContainText('Shipped');
    //await expect(ordersPage.orderList).toContainText('$1000.00');
});