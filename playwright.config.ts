import { defineConfig } from '@playwright/test';
import { fileURLToPath } from 'node:url';

process.env.PLAYWRIGHT_BROWSERS_PATH ??= fileURLToPath(new URL('./.cache/ms-playwright', import.meta.url));
const external = process.env.UXCALIBUR_TEST_URL;
if (!external) throw new Error('Use pnpm test to start an isolated fixture preview, or set UXCALIBUR_TEST_URL.');

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 2,
  retries: 0,
  reporter: [['list'], ['json', { outputFile: '.artifacts/test-results.json' }]],
  outputDir: '.artifacts/playwright',
  use: { baseURL: external, viewport: { width: 1280, height: 800 }, trace: 'retain-on-failure' },
});
