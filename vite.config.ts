// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';

// export default defineConfig({
//   root: 'src',
//   build: {
//     outDir: '../dist',
//     emptyOutDir: true,
//   },
//   plugins: [vue()],
//   server: {
//     port: 3000,
//   },
// });

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  plugins: [vue()],
  server: {
    port: 3000, //5173,
  },
});