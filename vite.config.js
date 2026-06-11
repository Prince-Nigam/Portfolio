import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    port: 3000,
    host: true,
    watch: {
      // Har file change pe instantly reload ho
      usePolling: true,
      interval: 100,
    },
    hmr: {
      // Hot Module Replacement — page reload nahi, sirf changed part update
      overlay: true,
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
  },
})
