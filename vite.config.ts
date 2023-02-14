import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      tsConfigFilePath: './tsconfig.prod.json',
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
    emptyOutDir: true,
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'Reactdom',
          'styled-components': 'Styled',
        },
      },
      input: {
        index: path.resolve(__dirname, 'src/index.ts'),
      },
    },
    target: 'esnext',
  },
});
