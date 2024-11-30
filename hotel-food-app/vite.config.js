import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/js/app.jsx', 'resources/css/app.css'], // Make sure this points to the correct JS file
      refresh: true,
    }),
  ],
  esbuild: {
    loader: {
      '.js': 'jsx',
    },
    jsx: 'react',
  },
});