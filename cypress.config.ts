import { defineConfig } from 'cypress';

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    mochaFile: 'cypress/report/',
    toConsole: true,
  },
  e2e: {
    baseUrl: 'https://rbgeshop.org',
    viewportWidth: 1920,
    viewportHeight: 1080,
    specPattern: ['cypress/tests/specs/**/*.ts'],
    supportFile: false,
    videosFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  }
});
