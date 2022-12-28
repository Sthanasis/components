import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import path from 'path';
import tsConfigPaths from 'vite-tsconfig-paths';
import * as packageJson from './package.json';

export default defineConfig({
  plugins: [react(), tsConfigPaths(), dts({ include: ['src'] })],
  mode: 'development',
  esbuild: {
    include: './src/**.(ts | tsx)',
    exclude: './src/**/**.(test | spec).(ts | tsx)',
  },
  server: { open: './public/index.html' },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      name: 'mylib',
      fileName: 'mylib',
    },
  },
});
