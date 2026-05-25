import { useEffect } from 'react'

function setMeta(selector, attr, value) {
  let el = document.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    const [attrName, attrVal] = selector.match(/\[([^=]+)="([^"]+)"\]/).slice(1)
    el.setAttribute(attrName, attrVal)
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
  return el
}

function setLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
  return el
}

const HOME_DEFAULTS = {
  title: 'Best Digital Marketing Company in Thanjavur | Ara Discover Marketing',
  description: 'Ara Discover Marketing is one of the best digital marketing companies in Thanjavur and offers best digital marketing services in Thanjavur for business growth.',
  keywords: 'Best digital marketing company in thanjavur, Best digital marketing services in thanjavur',
  canonical: 'https://ara-tech-organization.github.io/ARA-Marketing/',
}

export default function useSEO({ title, description, keywords, canonical, ogImage, schema }) {
  useEffect(() => {
    // Title
    document.title = title

    // Standard meta
    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[name="keywords"]',    'content', keywords)

    // Canonical
    const canonicalEl = setLink('canonical', canonical || HOME_DEFAULTS.canonical)

    // Open Graph
    setMeta('meta[property="og:type"]',        'content', 'website')
    setMeta('meta[property="og:site_name"]',   'content', 'Ara Discover Marketing')
    setMeta('meta[property="og:title"]',       'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]',         'content', canonical || HOME_DEFAULTS.canonical)
    if (ogImage) setMeta('meta[property="og:image"]', 'content', ogImage)

    // Twitter Card
    setMeta('meta[name="twitter:card"]',        'content', 'summary_large_image')
    setMeta('meta[name="twitter:title"]',       'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)
    if (ogImage) setMeta('meta[name="twitter:image"]', 'content', ogImage)

    // JSON-LD schema
    let schemaEl = document.getElementById('page-schema')
    if (schema) {
      if (!schemaEl) {
        schemaEl = document.createElement('script')
        schemaEl.id = 'page-schema'
        schemaEl.type = 'application/ld+json'
        document.head.appendChild(schemaEl)
      }
      schemaEl.textContent = JSON.stringify(schema)
    }

    return () => {
      document.title = HOME_DEFAULTS.title
      document.querySelector('meta[name="description"]')?.setAttribute('content', HOME_DEFAULTS.description)
      document.querySelector('meta[name="keywords"]')?.setAttribute('content', HOME_DEFAULTS.keywords)
      canonicalEl?.setAttribute('href', HOME_DEFAULTS.canonical)
      document.querySelector('meta[property="og:title"]')?.setAttribute('content', HOME_DEFAULTS.title)
      document.querySelector('meta[property="og:description"]')?.setAttribute('content', HOME_DEFAULTS.description)
      document.querySelector('meta[property="og:url"]')?.setAttribute('content', HOME_DEFAULTS.canonical)
      document.querySelector('meta[property="og:type"]')?.setAttribute('content', 'website')
      document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', HOME_DEFAULTS.title)
      document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', HOME_DEFAULTS.description)
      if (schemaEl) schemaEl.remove()
    }
  }, [title, description, keywords, canonical, ogImage, schema])
}
