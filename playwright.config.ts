import { defineConfig } from '@playwright/test';
import type { } from 'node';

export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.ts',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://api.restful-api.dev',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'api-tests',
      testMatch: '**/*.spec.ts',
    },
  ],
});