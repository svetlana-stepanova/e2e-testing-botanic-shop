import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://rbgeshop.org',
    viewportWidth: 1920,
    viewportHeight: 1080,
    specPattern: ['src/tests/specs/**/*.ts'],
    supportFile: false,
    videosFolder: 'src/videos',
    screenshotsFolder: 'src/screenshots'
  }
});
