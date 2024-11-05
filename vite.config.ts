import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
     alias: {
        '@': path.resolve(__dirname, './src'),
        '@app': path.resolve(__dirname, './src/app'),
        '@config': path.resolve(__dirname, './src/config'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@providers': path.resolve(__dirname, './src/providers'),
        '@styles': path.resolve(__dirname, './src/styles'),
        '@ui': path.resolve(__dirname, './src/ui'),
        '@utils': path.resolve(__dirname, './src/utils')
     },
  },
});