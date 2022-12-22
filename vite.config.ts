import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
export default defineConfig({
  plugins: [react()],
  mode: 'development',
  root: './public',
  esbuild: {
    include: './src/**.(ts | tsx | js | jsx)',
  },
  server: { open: './public/index.html' },
  base: '.',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
      src: path.resolve(__dirname, './src'),
    },
  },
});
