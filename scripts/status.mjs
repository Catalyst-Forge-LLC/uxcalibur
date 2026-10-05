import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
console.log(`Node ${process.version}; development dependencies ${existsSync(`${root}/node_modules/vite`) ? 'installed' : 'missing (run setup)'}.`);
try {
  const response = await fetch('http://127.0.0.1:5191/', { signal: AbortSignal.timeout(2000) });
  const html = await response.text();
  console.log(response.ok && html.includes('<title>Review inbox</title>')
    ? 'Review inbox is running at http://127.0.0.1:5191/.'
    : 'Port 5191 responds but does not serve this fixture.');
} catch {
  console.log('Review inbox is not running. Start run.bat or sh run.sh.');
}
