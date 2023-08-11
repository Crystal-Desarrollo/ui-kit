import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'CrystalUI',
      formats: ['es', 'umd', 'cjs'],
      fileName: format => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        '@emotion/react',
        '@emotion/styled',
        '@mui/material',
        '@mui/icons-material',
        'react-hook-form',
        '@tanstack/react-query',
        'react-router-dom',
        'qs',
        'date-fns',
        'axios',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@emotion/react': 'emotionReact',
          '@emotion/styled': 'emotionStyled',
          '@mui/material': 'MaterialUI',
          '@mui/icons-material': 'MaterialUIIcons',
          'react-hook-form': 'ReactHookForm',
          '@tanstack/react-query': 'ReactQuery',
          'react-router-dom': 'ReactRouterDOM',
          qs: 'qs',
          'date-fns': 'dateFns',
          axios: 'axios',
        },
      },
    },
  },
});
