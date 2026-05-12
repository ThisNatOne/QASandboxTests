import { test, expect } from '@playwright/test';
import { users as testUsers } from '../../test-data/users';
//console.log(testUsers.adminUser.username);

test('GET /users with token, api successfull login', async ({ request }) => {

  // LOGIN
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

  // GET USERS
  const usersResponse = await request.get('http://localhost:4000/api/users', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  expect(usersResponse.status()).toBe(200);

  const body = await usersResponse.json();
  const apiUsers = body.users;

  expect(Array.isArray(apiUsers)).toBeTruthy();//Body should have users property which is an array
  expect(apiUsers.length).toBeGreaterThan(0); //Assuming there is at least one user in the database
  expect(body.users.length).toBe(3); //Assuming there are 3 users in the database
  expect(apiUsers[0]).toHaveProperty('id'); //Body should have id, username, email and role properties
  expect(apiUsers[0]).toHaveProperty('username');
  expect(apiUsers[0]).toHaveProperty('email');
  expect(apiUsers[0]).toHaveProperty('role');

});

test('GET /users without token, api should return 401', async ({ request }) => {

  const usersResponse = await request.get('http://localhost:4000/api/users');

  expect(usersResponse.status()).toBe(401);

});