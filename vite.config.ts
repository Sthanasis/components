import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  mode: 'development',
  esbuild: {
    include: './src/**.(ts | tsx)',
  },
  server: { open: './public/index.html' },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
});
