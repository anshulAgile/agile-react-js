import { build, defineConfig } from 'vite';
import { resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build'
  },
  plugins: [
    react(),
    tsconfigPaths(),
    // TODO : Change below manifest file according to your project add appropriate icons in public folder
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['icons/favicon.ico'],
      manifest: {
        theme_color: '#f88935',
        background_color: '#f69435',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        name: 'Agile React Boiler Plate',
        short_name: 'Agile React App',
        description: 'Description regarding your application',
        icons: [
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: 'icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
});
