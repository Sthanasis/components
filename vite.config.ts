import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import path from 'path';
import tsConfigPaths from 'vite-tsconfig-paths';
import * as packageJson from './package.json';

export default defineConfig({
  plugins: [react(), tsConfigPaths(), dts()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      name: 'mylib',
      formats: ['es', 'umd'],
      fileName: (format) => `mylib.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
});
