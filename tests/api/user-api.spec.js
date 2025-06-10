// tests/api/user-api.spec.js

const { request } = require('http');

test('Get user details', async ({ request }) => {
  const response = await request.get('/api/users/1');
  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  console.log(responseBody);
});
