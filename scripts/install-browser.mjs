import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const cli = require.resolve('@playwright/test/cli');
const cache = fileURLToPath(new URL('../.cache/ms-playwright', import.meta.url));
const result = spawnSync(process.execPath, [cli, 'install', 'chromium'], {
  stdio: 'inherit',
  env: { ...process.env, PLAYWRIGHT_BROWSERS_PATH: cache },
  windowsHide: true,
});
if (result.error) throw result.error;
process.exit(result.status ?? 1);
