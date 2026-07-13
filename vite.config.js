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
        staticweb:    resolve(__dirname, 'services/static-website-development/index.html'),
        dynamicweb:   resolve(__dirname, 'services/dynamic-website-development/index.html'),
        cmsweb:       resolve(__dirname, 'services/cms-website-development/index.html'),
        ecommerceweb: resolve(__dirname, 'services/ecommerce-website-development/index.html'),
        enterpriseweb:resolve(__dirname, 'services/enterprise-website-development/index.html'),
        webapp:       resolve(__dirname, 'services/web-application-development/index.html'),
        mobileapp:    resolve(__dirname, 'services/mobile-application-development/index.html'),
        priceDetails: resolve(__dirname, 'price-details/index.html'),
        contactUs:    resolve(__dirname, 'contact-us/index.html'),
      },
    },
  },
})
