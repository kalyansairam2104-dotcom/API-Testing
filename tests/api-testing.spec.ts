import { test, expect } from '@playwright/test';
import postReq from '../test-data/post-request.json';

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

test('POST validation', async ({request}) => {

  const response =  await request.post('/objects', { data: postReq })

  //status code validation
  expect(response.status()).toBe(200);

  //const responseBody = await response.json();

  //console.log({status: response.status(), body: responseBody, headers: response.headers()});


});

test('Auth GET validation', async({request}) => {

  const response = await request.get('/collections');

  expect(response.status()).toBe(200);


});

//{ headers: {'x-api-key': 'bef09ee8-264e-4dbd-94d7-124af29278cf'}}