// @ts-check
const { defineConfig, devices } = require('@playwright/test');

const config = ({
  testDir: './tests',
  retries:1,
  timeout: 40000,
  expect: {
    timeout: 40000
  },
  reporter: 'html',
  projects: [
    {
      name: "Safari Execution",
      use: {
        browserName: 'webkit',
        screenshot: 'off',
        trace: 'on',
        //...devices['iPhone 12'],
      }
    },
    {
      name: "Chrome Execution",
      use: {
        browserName: 'chromium',
        screenshot: 'on',
        trace: 'on',
        //viewport: { width: 720, height: 720 },
        video: 'retain-on-failure',
        ignoreHTTPSErrors: true,
        permissions: ['geolocation'],
      }
    }
  ]
});
module.exports = config;