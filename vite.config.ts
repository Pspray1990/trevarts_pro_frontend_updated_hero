import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  base: './', // Use './' for relative paths (works best on cPanel)
  plugins: [
    react(),
    nodePolyfills({
      globals: {
        Buffer: true, // Enables Buffer in the browser
      },
    }),
  ],
});