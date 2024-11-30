import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/js/app.jsx', 'resources/css/app.css'],
      refresh: true,
    }),
    react(), // Add this to handle React JSX transformation
  ],
  esbuild: {
    loader: 'jsx', // Just set the loader to 'jsx' to handle JSX files
  },
});