import useReveal from '../hooks/useReveal'
import useSEO    from '../hooks/useSEO'
import Navbar    from '../components/home/Navbar'
import Footer    from '../components/home/Footer'

import ECHero         from '../components/ecommercewebsite/ECHero'
import ECIntro        from '../components/ecommercewebsite/ECIntro'
import ECPlatforms    from '../components/ecommercewebsite/ECPlatforms'
import ECIndustries   from '../components/ecommercewebsite/ECIndustries'
import ECWhyUs        from '../components/ecommercewebsite/ECWhyUs'
import ECWhoShould    from '../components/ecommercewebsite/ECWhoShould'
import ECBenefits     from '../components/ecommercewebsite/ECBenefits'
import ECProcess      from '../components/ecommercewebsite/ECProcess'
import ECTestimonials    from '../components/ecommercewebsite/ECTestimonials'
import ECDeliveryPromise from '../components/ecommercewebsite/ECDeliveryPromise'
import ECCTA            from '../components/ecommercewebsite/ECCTA'
import ECFAQ          from '../components/ecommercewebsite/ECFAQ'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is E-Commerce Website Development?',
      acceptedAnswer: { '@type': 'Answer', text: 'E-commerce website development is the process of building online stores that enable businesses to sell products or services digitally. It includes designing the store, configuring the product catalogue, integrating payment gateways, and optimising the platform for conversions and search engine visibility.' },
    },
    {
      '@type': 'Question',
      name: 'What is the most effective platform for e-commerce sites?',
      acceptedAnswer: { '@type': 'Answer', text: 'Shopify, WooCommerce, and Magento are three of the most popular and effective e-commerce platforms. Shopify is ideal for fast-growing retail brands, WooCommerce for WordPress-based stores, and Magento for enterprise-scale operations.' },
    },
    {
      '@type': 'Question',
      name: 'What is the estimated time to develop an e-commerce website?',
      acceptedAnswer: { '@type': 'Answer', text: 'Typically 2–8 weeks, depending on features, design complexity, product catalogue size, and platform choice. A basic Shopify store can go live in 2 weeks, while a custom multi-vendor marketplace may take 6–8 weeks or more.' },
    },
    {
      '@type': 'Question',
      name: 'Can I manage my e-commerce website myself?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — all e-commerce websites we build come with an intuitive admin panel where you can manage products, update stock, process orders, apply discounts, and track revenue without any technical knowledge.' },
    },
    {
      '@type': 'Question',
      name: 'Is an e-commerce website SEO-friendly?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. When properly developed, e-commerce websites are fully optimised for search engines with clean URL structures, schema markup, meta tags, sitemap generation, Core Web Vitals optimisation, and mobile responsiveness.' },
    },
    {
      '@type': 'Question',
      name: 'Do you provide custom e-commerce solutions?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, we offer fully custom e-commerce website development services tailored to your unique business requirements — from multi-vendor marketplaces to B2B ordering portals and brand-specific shopping experiences.' },
    },
  ],
}

export default function EcommerceWebsitePage() {
  useReveal()
  useSEO({
    title:       'E Commerce Website Design and Development Company in Thanjavur | ARA Discover Marketing',
    description: 'ARA Discover Marketing is an expert E Commerce Website Design and Development Company in Thanjavur creating secure online stores.',
    keywords:    'best ecommerce development agencies in thanjavur, best ecommerce web design and development company in thanjavur, custom e commerce website development company in thanjavur, custom ecommerce website development services in thanjavur',
    canonical:   'https://ara-tech-organization.github.io/ARA-Marketing/services/ecommerce-website-development',
    schema,
  })

  return (
    <>
      <Navbar />
      <main className="page-transition">
        <ECHero />
        <ECIntro />
        <ECPlatforms />
        <ECIndustries />
        <ECWhyUs />
        <ECWhoShould />
        <ECBenefits />
        <ECProcess />
        <ECTestimonials />
        <ECDeliveryPromise />
        <ECCTA />
        <ECFAQ />
      </main>
      <Footer />
    </>
  )
}
