import useReveal          from '../hooks/useReveal'
import useSEO            from '../hooks/useSEO'
import Navbar            from '../components/home/Navbar'
import Footer            from '../components/home/Footer'
import SWHero            from '../components/staticwebsite/SWHero'
import SWIntro           from '../components/staticwebsite/SWIntro'
import SWWhyUs           from '../components/staticwebsite/SWWhyUs'
import SWWhoShouldInvest from '../components/staticwebsite/SWWhoShouldInvest'
import SWBenefits        from '../components/staticwebsite/SWBenefits'
import SWProcess         from '../components/staticwebsite/SWProcess'
import SWTestimonials    from '../components/staticwebsite/SWTestimonials'
import SWCTA             from '../components/staticwebsite/SWCTA'
import SWFAQ             from '../components/staticwebsite/SWFAQ'

const swSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://ara-tech-organization.github.io/ARA-Marketing/services/static-website-development',
      name: 'Static Website Design and Development Company in Thanjavur | Ara Discover Marketing',
      description: 'Ara Discover Marketing is a leading Static Website Design and Development Company in Thanjavur, delivering fast, responsive, and SEO-friendly websites.',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Ara Discover Marketing',
        url: 'https://ara-tech-organization.github.io/ARA-Marketing',
        telephone: '+91 98765 43210',
        email: 'aradicovertech02@gmail.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Thanjavur',
          addressRegion: 'Tamil Nadu',
          addressCountry: 'IN',
        },
        areaServed: 'Thanjavur',
      },
      serviceType: 'Static Website Development',
      areaServed: 'Thanjavur',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Static Website Development Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Static Web Page Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Static Website Design' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO-Optimized Static Sites' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile-First Responsive Design' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fast Loading Static Websites' } },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a Static Web Page?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A static website is a website developed in HTML and CSS that displays the same content to every visitor. It is fast, safe, and easy to host.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why should I select a static website for my business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Static websites are faster, cheaper, and more secure than dynamic websites and are perfect for small and medium businesses.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to develop a static website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Depending on your requirements, a basic static website can be built in 3–7 days with full design and deployment.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can a static site rank on Google?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, static websites are SEO-friendly as they have a fast loading speed and a clean code structure, which helps them rank better on search engines.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do static sites need maintenance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Static sites don't require databases or complex back-end systems, so there's minimal maintenance involved.",
          },
        },
        {
          '@type': 'Question',
          name: 'Can I get a custom design for my static website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, all our websites are custom-designed from scratch to match your brand identity, color palette, and business goals.',
          },
        },
      ],
    },
  ],
}

export default function StaticWebsitePage() {
  useReveal()
  useSEO({
    title: 'Static Website Design and Development Company in Thanjavur | Ara Discover Marketing',
    description: 'Ara Discover Marketing is a leading Static Website Design and Development Company in Thanjavur, delivering fast, responsive, and SEO-friendly websites.',
    keywords: 'static web page development in thanjavur, static website development services in thanjavur, static website development company in thanjavur, static website design & development company in thanjavur',
    canonical: 'https://ara-tech-organization.github.io/ARA-Marketing/services/static-website-development',
    ogImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&h=630&fit=crop&auto=format&q=80',
    schema: swSchema,
  })

  return (
    <>
      <Navbar />
      <main>
        <SWHero />
        <SWIntro />
        <SWWhyUs />
        <SWWhoShouldInvest />
        <SWBenefits />
        <SWProcess />
        <SWTestimonials />
        <SWCTA />
        <SWFAQ />
      </main>
      <Footer />
    </>
  )
}
