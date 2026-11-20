import { defineConfig, devices } from '@playwright/test';
import { config } from './config/env';

/**
 * Playwright configuration for the Beeyor Shopping sample storefront suite.
 * Boots a local fixture server by default so CI and local runs stay deterministic.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  grep: process.env.TEST_TAG ? new RegExp(process.env.TEST_TAG) : undefined,
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['list'],
    ['json', { outputFile: 'playwright-report/results.json' }],
  ],
  use: {
    baseURL: config.baseURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: config.timeouts.action,
    navigationTimeout: config.timeouts.navigation,
  },
  webServer: {
    command: 'node fixture-storefront/server.js',
    url: config.baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});