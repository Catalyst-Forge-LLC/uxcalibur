import { defineConfig } from '@playwright/test';
import { fileURLToPath } from 'node:url';

process.env.PLAYWRIGHT_BROWSERS_PATH ??= fileURLToPath(new URL('./.cache/ms-playwright', import.meta.url));
const external = process.env.UXCALIBUR_TEST_URL;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 2,
  retries: 0,
  reporter: [['list'], ['json', { outputFile: '.artifacts/test-results.json' }]],
  outputDir: '.artifacts/playwright',
  use: { baseURL: external ?? 'http://127.0.0.1:5192', viewport: { width: 1280, height: 800 }, trace: 'retain-on-failure' },
  webServer: external ? undefined : { command: 'pnpm preview', url: 'http://127.0.0.1:5192', reuseExistingServer: false },
});
