import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { withFixtureServer } from './fixture-server.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const require = createRequire(import.meta.url);
const proof = JSON.parse(readFileSync(join(root, 'examples/review-inbox/proof.json'), 'utf8'));
const digest = data => createHash('sha256').update(data).digest('hex');
mkdirSync(join(root, '.tmp'), { recursive: true });
mkdirSync(join(root, '.artifacts'), { recursive: true });
const scratch = mkdtempSync(join(root, '.tmp/baseline-'));
const sourceDigests = {};
for (const path of proof.sourceFiles) {
  const result = spawnSync('git', ['-c', `safe.directory=${root.replaceAll('\\', '/')}`, 'show', `${proof.baseline}:fixtures/review-inbox/${path}`], { cwd: root, windowsHide: true });
  if (result.error || result.status !== 0) throw new Error(`Cannot read baseline ${path}: ${result.error ?? result.stderr}`);
  const target = join(scratch, path);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, result.stdout);
  sourceDigests[path] = digest(result.stdout);
  if (proof.preservedFiles.includes(path) && digest(readFileSync(join(root, 'fixtures/review-inbox', path))) !== sourceDigests[path]) {
    throw new Error(`Excluded/preserved fixture file changed: ${path}`);
  }
}
const config = join(scratch, 'vite.config.mjs');
writeFileSync(config, `export default ${JSON.stringify({ root: scratch })};\n`);
const reportPath = join(root, '.artifacts/baseline-results.json');
await withFixtureServer(root, ['--config', config], url => {
  const cli = require.resolve('@playwright/test/cli');
  const run = spawnSync(process.execPath, [cli, 'test', proof.testFile, '--reporter=json'], {
    cwd: root, windowsHide: true, encoding: 'utf8', timeout: 90000, maxBuffer: 4 * 1024 * 1024,
    env: { ...process.env, UXCALIBUR_TEST_URL: url, PLAYWRIGHT_JSON_OUTPUT_FILE: reportPath },
  });
  if (run.error || run.status !== 1) throw new Error(`Expected behavioral failures; runner returned ${run.status}: ${run.error ?? run.stderr}`);
  const report = JSON.parse(readFileSync(reportPath, 'utf8'));
  const specs = suites => suites.flatMap(suite => [...(suite.specs ?? []), ...specs(suite.suites ?? [])]);
  const results = specs(report.suites).flatMap(spec => spec.tests.map(test => ({ title: spec.title, results: test.results })));
  if (report.errors?.length || results.length !== proof.expectedFailures.length) throw new Error('Baseline runner errors or unexpected case count.');
  for (const title of proof.expectedFailures) {
    const test = results.find(result => result.title === title);
    const result = test?.results[0];
    if (!result || test.results.length !== 1 || result.status !== 'failed' || !result.errors?.length || result.errors.some(error => !error.message.includes(proof.assertionMarker))) {
      throw new Error(`Baseline failure was not the intended continuity assertion: ${title}`);
    }
  }
  const receipt = {
    checkedAt: new Date().toISOString(), baseline: proof.baseline, cut: proof.cut,
    command: 'pnpm proof:baseline', node: process.version,
    playwright: require('@playwright/test/package.json').version,
    sourceDigests, expectedBehavioralFailures: results.map(test => test.title),
    unexpectedFailures: 0, preservedFiles: proof.preservedFiles,
    limitations: ['Synthetic Chromium fixture; this verifies interaction behavior, not customer efficacy.'],
  };
  writeFileSync(join(root, '.artifacts/baseline-proof.json'), JSON.stringify(receipt, null, 2) + '\n');
  console.log(`Baseline proof: ${results.length} intended continuity failures; no infrastructure failures; ${proof.preservedFiles.length} excluded files preserved.`);
});
