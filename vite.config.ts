import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5137,
    host: '0.0.0.0',
    // Polling watcher: required for file changes to be seen from WSL.
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
});
