// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout:40000, //40 secs explicit wait time
  expect: {
    timeout:40000,
  },
  reporter : 'html',
  use: {
    browserName : 'chromium'
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  },
});
module.exports = config;
