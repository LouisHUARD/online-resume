import { defineConfig } from 'vite';
import mdPlugin from 'vite-plugin-markdown';
import { resolve } from 'path';

export default defineConfig({
  base: '/online-resume/', 
  
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cursus: resolve(__dirname, 'cursus.html'),
        competences: resolve(__dirname, 'competences.html'),
        experience: resolve(__dirname, 'experience.html'),
        realisations: resolve(__dirname, 'realisations.html'),
        contact: resolve(__dirname, 'contact.html'),
      }
    }
  },
  plugins: [mdPlugin.plugin({ mode: ['html'] })]
});