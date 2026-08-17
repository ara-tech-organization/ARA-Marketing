import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve, dirname } from 'path'
import fs from 'fs'

/* Entry HTML files that live outside the project root.
   `src` is where the file sits; `url` is the path it must be served from —
   Vite names built HTML after its location relative to the root, so without the
   remap below these would land in dist/src/components/... and change the URL. */
const relocatedPages = [
  { name: 'careers',      src: 'src/components/careers/index.html', url: 'careers/index.html' },
  { name: 'contactUs',    src: 'src/components/contact/index.html', url: 'contact-us/index.html' },
  { name: 'priceDetails', src: 'src/components/price/index.html',   url: 'price-details/index.html' },
]

function keepPageUrls() {
  return {
    name: 'keep-page-urls',
    enforce: 'post',

    /* Dev: /careers and /contact-us still serve their own HTML. */
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const path = req.url.split('?')[0].replace(/\/$/, '')
        const page = relocatedPages.find(p => '/' + p.url.replace('/index.html', '') === path)
        if (page) req.url = '/' + page.src
        next()
      })
    },

    /* Build: relocate the emitted HTML to its public path.
       Done on disk in writeBundle — re-keying the bundle in generateBundle
       makes Vite 8 drop the asset instead of writing it. */
    writeBundle(options) {
      const outDir = options.dir
      for (const page of relocatedPages) {
        const from = resolve(outDir, page.src)
        const to   = resolve(outDir, page.url)
        if (!fs.existsSync(from)) continue
        fs.mkdirSync(dirname(to), { recursive: true })
        fs.renameSync(from, to)
      }
      fs.rmSync(resolve(outDir, 'src'), { recursive: true, force: true })
    },
  }
}

export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss(), keepPageUrls()],
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
        ...Object.fromEntries(
          relocatedPages.map(p => [p.name, resolve(__dirname, p.src)]),
        ),
      },
    },
  },
})
