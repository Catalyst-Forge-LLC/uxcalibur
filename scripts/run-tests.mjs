import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { withFixtureServer } from './fixture-server.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const require = createRequire(import.meta.url);
const status = await withFixtureServer(root, ['preview'], url => {
  const result = spawnSync(process.execPath, [require.resolve('@playwright/test/cli'), 'test', ...process.argv.slice(2)], {
    cwd: root, windowsHide: true, stdio: 'inherit', timeout: 120000,
    env: { ...process.env, UXCALIBUR_TEST_URL: url },
  });
  if (result.error) throw result.error;
  return result.status ?? 1;
});
process.exitCode = status;
