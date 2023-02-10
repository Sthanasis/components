import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      tsConfigFilePath: './tsconfig.json',
    }),
  ],
  resolve: {
    alias: [
      {
        find: /^src/,
        replacement: `${path.resolve(process.cwd(), 'src')}/`,
      },
    ],
  },
  worker: {
    format: 'es',
  },
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      name: 'mylib',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'Reactdom',
          'styled-components': 'Styled',
        },
      },
    },
    target: 'esnext',
  },
});
