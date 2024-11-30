import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    esbuild: {
        loader: {
            '.js': 'jsx',  // Treat .js files as JSX
        },
        jsx: 'react',  // Explicitly enable React JSX transformation
    },
});