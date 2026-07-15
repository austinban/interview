import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// VITE_BASE_PATH is set only by the GitHub Pages deploy workflow (to "/interview/");
// locally and in the app build it defaults to "/", so dev is unaffected.
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
});
