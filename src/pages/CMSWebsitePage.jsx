import useReveal       from '../hooks/useReveal'
import useSEO          from '../hooks/useSEO'
import Navbar          from '../components/home/Navbar'
import Footer          from '../components/home/Footer'
import CMSHero         from '../components/cmswebsite/CMSHero'
import CMSIntro        from '../components/cmswebsite/CMSIntro'
import CMSPlatforms    from '../components/cmswebsite/CMSPlatforms'
import CMSPortfolio    from '../components/cmswebsite/CMSPortfolio'
import CMSWhyUs        from '../components/cmswebsite/CMSWhyUs'
import CMSWhoShould    from '../components/cmswebsite/CMSWhoShould'
import CMSBenefits     from '../components/cmswebsite/CMSBenefits'
import CMSProcess      from '../components/cmswebsite/CMSProcess'
import CMSTestimonials from '../components/cmswebsite/CMSTestimonials'
import CMSCTA          from '../components/cmswebsite/CMSCTA'
import CMSFAQ          from '../components/cmswebsite/CMSFAQ'

const cmsSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://ara-tech-organization.github.io/ARA-Marketing/services/cms-website-development',
      name: 'CMS Website Design and Development Company in Thanjavur | ARA Discover Marketing',
      description: 'ARA Discover Marketing is a trusted CMS Website Design and Development Company in Thanjavur delivering easy-to-manage WordPress websites.',
      provider: {
        '@type': 'LocalBusiness',
        name: 'ARA Discover Marketing',
        url: 'https://ara-tech-organization.github.io/ARA-Marketing',
        telephone: '+91 81100 25254',
        email: 'aradiscovermarketing@gmail.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Thanjavur',
          addressRegion: 'Tamil Nadu',
          addressCountry: 'IN',
        },
        areaServed: 'Thanjavur',
      },
      serviceType: 'CMS Website Development',
      areaServed: 'Thanjavur',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'CMS Website Development Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'WordPress CMS Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom WordPress Theme Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'WooCommerce E-Commerce Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CMS Website Design' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO-Optimised WordPress Development' } },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is WordPress Web Development?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WordPress website development is the process of building websites on the WordPress CMS platform, allowing businesses to manage and customise their content easily without technical knowledge.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is WordPress good for business websites?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WordPress is flexible, SEO-friendly, scalable, and easy to manage — making it the right choice for all types of business websites. It powers over 40% of the web globally.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I update my WordPress website myself?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, WordPress allows users to update content, images, and pages with no technical knowledge through its intuitive admin dashboard.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can WordPress be used for eCommerce websites?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, WordPress can be a fully functional e-commerce solution with plugins such as WooCommerce, which powers over 28% of all online stores.',
          },
        },
        {
          '@type': 'Question',
          name: 'How secure is a WordPress website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WordPress is secure when properly developed with regular updates, high-security plugins, SSL certificates, and optimised coding practices.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you provide custom WordPress development?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we offer fully custom WordPress solutions tailored to your business requirements and branding — no pre-made templates, every site is built from scratch.',
          },
        },
      ],
    },
  ],
}

export default function CMSWebsitePage() {
  useReveal()
  useSEO({
    title:       'CMS Website Design and Development Company in Thanjavur | ARA Discover Marketing',
    description: 'ARA Discover Marketing is a trusted CMS Website Design and Development Company in Thanjavur delivering easy-to-manage websites.',
    keywords:    'best wordpress development companies in thanjavur, wordpress cms development services in thanjavur, custom cms wordpress development company in thanjavur, custom cms wordpress development services in thanjavur, cms website development services in thanjavur, cms web development company in thanjavur',
    canonical:   'https://ara-tech-organization.github.io/ARA-Marketing/services/cms-website-development',
    ogImage:     'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop&auto=format&q=80',
    schema:      cmsSchema,
  })

  return (
    <>
      <Navbar />
      <main className="page-transition">
        <CMSHero />
        <CMSIntro />
        <CMSPlatforms />
        <CMSPortfolio />
        <CMSWhyUs />
        <CMSWhoShould />
        <CMSBenefits />
        <CMSProcess />
        <CMSTestimonials />
        <CMSCTA />
        <CMSFAQ />
      </main>
      <Footer />
    </>
  )
}
