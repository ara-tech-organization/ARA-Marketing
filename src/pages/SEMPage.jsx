import useReveal       from '../hooks/useReveal'
import useSEO          from '../hooks/useSEO'
import Navbar          from '../components/home/Navbar'
import Footer          from '../components/home/Footer'
import SEMHero         from '../components/sem/SEMHero'
import SEMIntro        from '../components/sem/SEMIntro'
import SEMWhyUs        from '../components/sem/SEMWhyUs'
import SEMServices     from '../components/sem/SEMServices'
import SEMAdTypes      from '../components/sem/SEMAdTypes'
import SEMStats        from '../components/sem/SEMStats'
import SEMProcess      from '../components/sem/SEMProcess'
import SEMAssurance    from '../components/sem/SEMAssurance'
import SEMTestimonials from '../components/sem/SEMTestimonials'
import SEMCTA          from '../components/sem/SEMCTA'
import SEMFAQ          from '../components/sem/SEMFAQ'

const semSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://ara-tech-organization.github.io/ARA-Marketing/services/best-sem-company-thanjavur',
      name: 'Best Search Engine Marketing Company (SEM) in Thanjavur | Ara Discover Marketing',
      description: 'Ara Discover Marketing is the best Search Engine Marketing Company (SEM) in Thanjavur, helping businesses increase traffic, generate quality leads, and grow online.',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Ara Discover Marketing',
        url: 'https://ara-tech-organization.github.io/ARA-Marketing',
        telephone: '+91 98765 43210',
        email: 'aradiscovermarketing@gmail.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Thanjavur',
          addressRegion: 'Tamil Nadu',
          addressCountry: 'IN',
        },
        areaServed: 'Thanjavur',
      },
      serviceType: 'Search Engine Marketing',
      areaServed: 'Thanjavur',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'SEM Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Search Ads (PPC) in Thanjavur' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Display Advertising in Thanjavur' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'YouTube Ads in Thanjavur' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Shopping Ads in Thanjavur' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PPC Remarketing Campaigns' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Conversion Tracking & Optimization' } },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the best Google Ads company in Thanjavur?',
          acceptedAnswer: { '@type': 'Answer', text: 'Ara Discover Marketing is one of the best search engine marketing (SEM) agencies in Thanjavur, offering PPC Management, Google Search Ads, Display Ads, YouTube Ads, and Shopping Ads services.' },
        },
        {
          '@type': 'Question',
          name: 'What are the benefits of Google Ads for Businesses?',
          acceptedAnswer: { '@type': 'Answer', text: 'Google Ads provides companies with the ability to drive instant traffic, create more leads, improve their online visibility, and reach potential customers based on keywords, interests, and demographics.' },
        },
        {
          '@type': 'Question',
          name: 'Do you offer PPC Advertising Services in Thanjavur?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes, we offer professional ppc ads service in Thanjavur, such as Google Search Ads, remarketing campaigns, display advertising, and conversion-focused PPC management.' },
        },
        {
          '@type': 'Question',
          name: 'What kind of Google Ads campaigns do you work on?',
          acceptedAnswer: { '@type': 'Answer', text: 'We manage Search Ads, Display Ads, YouTube Ads, Shopping Ads, remarketing campaigns, and advertising campaigns for local business goals.' },
        },
        {
          '@type': 'Question',
          name: 'What are the benefits of YouTube advertising for companies?',
          acceptedAnswer: { '@type': 'Answer', text: 'YouTube Ads help in increasing brand awareness, customer engagement, and lead generation through targeted video campaigns and audience-based advertising strategies.' },
        },
        {
          '@type': 'Question',
          name: 'Why choose Ara Discover Marketing for Google Ads?',
          acceptedAnswer: { '@type': 'Answer', text: 'We are a trusted search engine marketing service provider in Thanjavur with AI-powered campaign tactics, transparent reporting, audience targeting prowess, and ROI-centric optimisation.' },
        },
      ],
    },
  ],
}

export default function SEMPage() {
  useReveal()
  useSEO({
    title: 'Best Search Engine Marketing Company (SEM) in Thanjavur | Ara Discover Marketing',
    description: 'Ara Discover Marketing is the best Search Engine Marketing Company (SEM) in Thanjavur, helping businesses increase traffic, generate quality leads, and grow online.',
    keywords: 'google ads and ppc service in thanjavur, google paid advertising in thanjavur, ppc ads service in thanjavur, youtube ads in thanjavur, ppc search ads in thanjavur, shopping ads in thanjavur, best search engine marketing sem agencies in thanjavur, search engine marketing consulting services in thanjavur',
    canonical: 'https://ara-tech-organization.github.io/ARA-Marketing/services/best-sem-company-thanjavur',
    ogImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop&auto=format&q=80',
    schema: semSchema,
  })

  return (
    <>
      <Navbar />
      <main>
        <SEMHero />
        <SEMIntro />
        <SEMWhyUs />
        <SEMServices />
        <SEMAdTypes />
        <SEMStats />
        <SEMProcess />
        <SEMAssurance />
        <SEMTestimonials />
        <SEMCTA />
        <SEMFAQ />
      </main>
      <Footer />
    </>
  )
}
