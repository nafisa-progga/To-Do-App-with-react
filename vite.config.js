import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/To-Do-App-with-react/', // Make sure this matches your GitHub Pages URL
  plugins: [react()],
});