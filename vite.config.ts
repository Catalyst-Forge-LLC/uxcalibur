import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  root: fileURLToPath(new URL('./fixtures/review-inbox/', import.meta.url)),
  server: { host: '127.0.0.1', port: 5191, strictPort: true },
  preview: { host: '127.0.0.1', port: 5192, strictPort: true },
  build: { outDir: '../../dist/review-inbox', emptyOutDir: true },
});
