import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main:    resolve(__dirname, 'index.html'),
        smm:     resolve(__dirname, 'services/social-media-marketing/index.html'),
        webdev:  resolve(__dirname, 'services/website-development/index.html'),
        graphic: resolve(__dirname, 'services/graphic-design/index.html'),
        seo:     resolve(__dirname, 'services/search-engine-optimization/index.html'),
        sem:          resolve(__dirname, 'services/search-engine-marketing/index.html'),
        videoediting: resolve(__dirname, 'services/video-editing/index.html'),
      },
    },
  },
})
