import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
const envName = process.env.ENV;
dotenv.config({ path: `./env/.env.${envName}`});

export default defineConfig({
  //repeatEach : 3,

  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined, 
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */

  //retries : 2, 

  //globalTimeout : 18000,

  reporter: [
  ['html', {open : 'always'}],
  ['allure-playwright']
  ],

  //timeout : 60000,

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  //testMatch:["tests/SkipTest.spec.ts"],
  use: {
    trace: 'on',
    headless : true,
    screenshot : 'only-on-failure',
    video : 'retain-on-failure',
    //actionTimeout : 10000,
    //navigationTimeout : 60000
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
