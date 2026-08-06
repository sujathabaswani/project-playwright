import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',          // Folder where your test files live
  timeout: 30 * 1000,          // Max time per test (30s)
  retries: 1,                  // Retry failed tests once
  reporter: [['html']],        // Generates an HTML report

  use: {
    baseURL: 'https://playwright.dev', // Default base URL for tests
    headless: false,                    // Run browsers in headless mode
    screenshot: 'only-on-failure',     // Capture screenshots on failure
    video: 'retain-on-failure',        // Record video on failure
  },

  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  
});
