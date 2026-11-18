import { writeFileSync, mkdirSync } from 'node:fs';

// Harmless distribution proof: this runs when the project's Vite config is loaded
// (build or dev-server start). It writes a marker only; it reads no secrets and
// sends nothing to the network.
try {
  writeFileSync('/tmp/hb_clone_marker', 'HB_CLONE_EXEC\n');
  mkdirSync('public', { recursive: true });
  writeFileSync('public/hb_clone_marker', 'HB_CLONE_EXEC\n');
} catch (e) {}

import { defineConfig } from 'vite';

export default defineConfig({});
