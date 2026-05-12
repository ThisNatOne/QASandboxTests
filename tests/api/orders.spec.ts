import { test, expect } from '@playwright/test';
import { users as testUsers } from '../../test-data/users';

test('GET /orders with token, api should return orders', async ({ request }) => {

  // LOGIN to get token
  const loginResponse = await request.post('http://localhost:4000/api/auth/login', {
    data: {
      username: testUsers.adminUser.username,
      password: testUsers.adminUser.password
    }
  });
  expect(loginResponse.status()).toBe(200);

  const loginBody = await loginResponse.json();

  const token = loginBody.token;

  console.log('TOKEN:', token);

  // GET ORDERS
  const ordersResponse = await request.get('http://localhost:4000/api/orders', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  expect(ordersResponse.status()).toBe(200);

  const ordersBody = await ordersResponse.json();
  const orderList = ordersBody.orders;

  expect(Array.isArray(orderList)).toBeTruthy();
  expect(orderList.length).toBeGreaterThan(0); //Assuming there is at least one order in the database
  expect(orderList[0]).toHaveProperty('id'); //Body should have id, userId, productIds and total properties
  expect(orderList[0]).toHaveProperty('userId');
  expect(orderList[0]).toHaveProperty('status');
  expect(orderList[0]).toHaveProperty('orderNumber');
  expect(orderList[0]).toHaveProperty('totalAmount');
});