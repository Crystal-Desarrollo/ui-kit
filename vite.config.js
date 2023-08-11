import react from '@vitejs/plugin-react';
import path from 'node:path';
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';
import {readFile} from 'node:fs/promises';

// export default defineConfig({
//   plugins: [
//     react(),
//     dts({
//       insertTypesEntry: true,
//     }),
//   ],
//   build: {
//     lib: {
//       entry: path.resolve(__dirname, 'src/index.js'),
//       name: 'ui-kit',
//       formats: ['es', 'umd'],
//       fileName: format => `ui-kit.${format}.js`,
//     },
//     rollupOptions: {
//       external: [
//         'react',
//         'react-dom',
//         '@mui/material',
//         '@mui/icons-material',
//         '@emotion/react',
//         '@emotion/styled',
//         'react-query',
//       ],
//       output: {
//         globals: {
//           react: 'React',
//           'react-dom': 'ReactDOM',
//           '@mui/material': 'MaterialUI',
//           '@mui/icons-material': 'MaterialUIIcons',
//           '@emotion/react': 'EmotionReact',
//           '@emotion/styled': 'EmotionStyled',
//           'react-query': 'ReactQuery',
//         },
//       },
//     },
//   },
// });

const App = async () => {
  let name = 'ui-kit';
  const data = await readFile(path.join(__dirname, 'src', 'index.js'), {encoding: 'utf-8'});
  const s = data.split('\n');
  for (let x of s.reverse()) if (x.includes('export default')) name = x.replace('export default ', '').replace(' ', '');

  return defineConfig({
    plugins: [
      react(),
      dts({
        insertTypesEntry: true,
      }),
    ],
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/index.js'),
        name,
        formats: ['es', 'umd'],
        fileName: format => `lib.${format}.js`,
      },
      rollupOptions: {
        external: [
          'react',
          'react-dom',
          '@mui/material',
          '@mui/icons-material',
          '@emotion/react',
          '@emotion/styled',
          'react-query',
        ],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            '@mui/material': 'MaterialUI',
            '@mui/icons-material': 'MaterialUIIcons',
            '@emotion/react': 'EmotionReact',
            '@emotion/styled': 'EmotionStyled',
            'react-query': 'ReactQuery',
          },
        },
      },
    },
  });
};

export default App;
