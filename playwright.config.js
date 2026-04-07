// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const config = ({
  testDir: './tests',
  timeout:40000, //40 secs explicit wait time
  expect: {
    timeout:40000
  },
  reporter : 'html',
  use: {
    browserName : 'chromium'
    //headless : false
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    // headless:true -> runs the test in headless mode, which means the browser will not be visible during test execution. This is useful for faster execution and when running tests in CI/CD pipelines.
  },
});
module.exports = config;