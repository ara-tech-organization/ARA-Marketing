import useReveal       from '../hooks/useReveal'
import useSEO          from '../hooks/useSEO'
import Navbar          from '../components/home/Navbar'
import Footer          from '../components/home/Footer'
import SEOHero         from '../components/seo/SEOHero'
import SEOIntro        from '../components/seo/SEOIntro'
import SEOWhyUs        from '../components/seo/SEOWhyUs'
import SEOServices     from '../components/seo/SEOServices'
import SEOStats        from '../components/seo/SEOStats'
import SEOProcess      from '../components/seo/SEOProcess'
import SEOCampaigns    from '../components/seo/SEOCampaigns'
import SEOAssurance    from '../components/seo/SEOAssurance'
import SEOTestimonials from '../components/seo/SEOTestimonials'
import SEOCTA          from '../components/seo/SEOCTA'
import SEOFAQ          from '../components/seo/SEOFAQ'

const seoSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://ara-tech-organization.github.io/ARA-Marketing/services/best-seo-company-thanjavur',
      name: 'Best Search Engine Optimization Company (SEO) in Thanjavur | Ara Discover Marketing',
      description: 'Ara Discover Marketing offers the best SEO services in Thanjavur. Trusted as the best SEO company in Thanjavur for growth-focused digital marketing.',
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
      serviceType: 'Search Engine Optimization',
      areaServed: 'Thanjavur',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'SEO Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'On-Page SEO' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Off-Page SEO' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Technical SEO' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Local SEO' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile SEO' } },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Which company offers the best SEO services in Thanjavur?',
          acceptedAnswer: { '@type': 'Answer', text: 'Ara Discover Marketing is regarded as one of the best SEO companies in Thanjavur, providing businesses with on-page SEO, off-page SEO, technical SEO, local SEO, and content-driven optimization strategies.' },
        },
        {
          '@type': 'Question',
          name: 'What are the benefits of hiring an SEO company in Thanjavur?',
          acceptedAnswer: { '@type': 'Answer', text: 'A professional SEO company helps you to get better online visibility on the search engines, boosts organic traffic, generates highly qualified leads, and helps businesses achieve long-term growth online.' },
        },
        {
          '@type': 'Question',
          name: 'Do you give SEO services for small businesses in Thanjavur?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes, we offer customized SEO services for small businesses in Thanjavur to help startups and local businesses improve local visibility, rankings, and customer engagement.' },
        },
        {
          '@type': 'Question',
          name: "What's included in your SEO optimization services?",
          acceptedAnswer: { '@type': 'Answer', text: 'Our SEO services include keyword research, on-page optimization, technical SEO, backlink building, local SEO, content optimization, and performance tracking.' },
        },
        {
          '@type': 'Question',
          name: 'Do you offer international SEO services?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes, we offer international SEO services to help businesses target global markets through multilingual SEO, international SEO strategies, and location-based optimization.' },
        },
        {
          '@type': 'Question',
          name: 'Why is Ara Discover Marketing the best SEO agency in Thanjavur?',
          acceptedAnswer: { '@type': 'Answer', text: 'As one of the top SEO companies in Thanjavur, we offer our clients ethical optimization practices, clear reporting, and measurable ranking results, all powered by our AI-based SEO strategies.' },
        },
      ],
    },
  ],
}

export default function SEOPage() {
  useReveal()
  useSEO({
    title: 'Best Search Engine Optimization Company (SEO) in Thanjavur | Ara Discover Marketing',
    description: 'Ara Discover Marketing offers the best SEO services in Thanjavur. Trusted as the best SEO company in Thanjavur for growth-focused digital marketing.',
    keywords: 'best seo companies in thanjavur, digital marketing seo services in thanjavur, international seo services in thanjavur, seo and digital marketing services in thanjavur, top seo agencies in thanjavur, top seo companies in thanjavur, top seo services in thanjavur',
    canonical: 'https://ara-tech-organization.github.io/ARA-Marketing/services/best-seo-company-thanjavur',
    ogImage: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&h=630&fit=crop&auto=format&q=80',
    schema: seoSchema,
  })

  return (
    <>
      <Navbar />
      <main>
        <SEOHero />
        <SEOIntro />
        <SEOWhyUs />
        <SEOServices />
        <SEOStats />
        <SEOProcess />
        <SEOCampaigns />
        <SEOAssurance />
        <SEOTestimonials />
        <SEOCTA />
        <SEOFAQ />
      </main>
      <Footer />
    </>
  )
}
