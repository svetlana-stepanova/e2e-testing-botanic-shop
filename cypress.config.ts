import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    specPattern: ['src/tests/specs/**/*.ts'],
    supportFile: false,
    videosFolder: 'src/videos',
    screenshotsFolder: 'src/screenshots'
  }
});
