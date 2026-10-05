import { spawn } from 'node:child_process';
import { createServer } from 'node:net';
import { join } from 'node:path';

// Own the direct Vite process so Windows test cleanup never depends on nested
// package-manager shells. Each proof gets an isolated strict port.
export async function withFixtureServer(root, args, run) {
  const reservation = createServer();
  await new Promise((resolve, reject) => {
    reservation.once('error', reject);
    reservation.listen(0, '127.0.0.1', resolve);
  });
  const port = reservation.address().port;
  await new Promise(resolve => reservation.close(resolve));
  const server = spawn(process.execPath, [join(root, 'node_modules/vite/bin/vite.js'), ...args, '--host', '127.0.0.1', '--port', String(port), '--strictPort'], {
    cwd: root, windowsHide: true, stdio: ['ignore', 'pipe', 'pipe'],
  });
  let log = '';
  let failure;
  server.stdout.on('data', data => { log += data; });
  server.stderr.on('data', data => { log += data; });
  server.on('error', error => { failure = error; });
  const url = `http://127.0.0.1:${port}`;
  try {
    let ready = false;
    for (let attempt = 0; attempt < 100; attempt++) {
      if (failure || server.exitCode !== null) throw new Error(`Fixture server failed: ${failure ?? log}`);
      try { ready = (await fetch(url, { signal: AbortSignal.timeout(500) })).ok; } catch { /* startup */ }
      if (ready) break;
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    if (!ready) throw new Error(`Fixture server did not start: ${log}`);
    return await run(url);
  } finally {
    if (server.exitCode === null && !failure) {
      server.kill();
      await new Promise(resolve => server.once('exit', resolve));
    }
  }
}
