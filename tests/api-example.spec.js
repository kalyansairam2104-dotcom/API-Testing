import { test, expect } from '@playwright/test';

test('API test example', async ({ request }) => {
  // Example API test using Playwright's request context
  const response = await request.get('/posts/1');

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  const data = await response.json();
  expect(data).toHaveProperty('id', 1);
  expect(data).toHaveProperty('title');
});