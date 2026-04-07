import { test, expect } from '@playwright/test';

test('GET validation', async ({ request }, testInfo) => {
  // Example API test using Playwright's request context
  const response = await request.get('/objects');

  // status code validation
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  //response body validation
  const data = await response.json();
  expect(data[0]).toHaveProperty('id');
  expect(data[0]).toHaveProperty('name');
  expect(data[0]).toHaveProperty('data');

  // validate the response values
  expect(data[0].id).toBeDefined();
  expect(Number(data[0].id)).toBeGreaterThan(0);
  expect(data[0].name).toBe('Google Pixel 6 Pro');
  expect(data[0].data.color).toBe('Cloudy White');

  testInfo.attach('response', {
    body:JSON.stringify(data, null, 2),
    contentType: 'application/json'
  });
});