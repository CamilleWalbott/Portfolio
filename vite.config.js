import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// Assure-toi d'importer TailwindCSS et ses plugins de cette manière
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';




export default defineConfig({
  server: {
    host: '0.0.0.0', // Permet d'écouter sur toutes les interfaces
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
});
