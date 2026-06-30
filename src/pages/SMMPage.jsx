import useReveal        from '../hooks/useReveal'
import useSEO           from '../hooks/useSEO'
import Navbar           from '../components/home/Navbar'
import Footer           from '../components/home/Footer'
import SMMHero          from '../components/smm/SMMHero'
import SMMIntro         from '../components/smm/SMMIntro'
import SMMWhyUs         from '../components/smm/SMMWhyUs'
import SMMServices      from '../components/smm/SMMServices'
import SMMStats         from '../components/smm/SMMStats'
import SMMWorkflow      from '../components/smm/SMMWorkflow'
import SMMPromises      from '../components/smm/SMMPromises'
import SMMTestimonials  from '../components/smm/SMMTestimonials'
import SMMFAQ           from '../components/smm/SMMFAQ'
import SMMCTA           from '../components/smm/SMMCTA'

const smmSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://ara-tech-organization.github.io/ARA-Marketing/services/social-media-marketing',
      name: 'Best Social Media Marketing Services in Thanjavur',
      description: 'ARA Discover Marketing is recognized as one of the best Social Media Marketing (SMM) companies in Thanjavur, offering creative strategies and result-driven campaigns.',
      provider: {
        '@type': 'LocalBusiness',
        name: 'ARA Discover Marketing',
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
      serviceType: 'Social Media Marketing',
      areaServed: 'Thanjavur',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'SMM Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Facebook Marketing' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LinkedIn Marketing' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pinterest Marketing' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Optimization (SMO)' } },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who is the best social media branding services provider in Thanjavur?',
          acceptedAnswer: { '@type': 'Answer', text: 'ARA Discover Marketing is one of the best social media companies in Thanjavur, providing Facebook marketing, LinkedIn marketing, Pinterest marketing, SMO, and paid social media advertising strategies.' },
        },
        {
          '@type': 'Question',
          name: 'How does social media marketing benefit businesses?',
          acceptedAnswer: { '@type': 'Answer', text: 'Social media marketing has the potential to help businesses achieve growth in brand awareness, customer engagement, leads, and long-term customer relationships.' },
        },
        {
          '@type': 'Question',
          name: 'Do you provide paid campaigns on social media in Thanjavur?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes, we run paid social media advertising campaigns in Thanjavur, including Facebook Ads, Instagram Ads, LinkedIn Ads, and targeted audience advertising campaigns.' },
        },
        {
          '@type': 'Question',
          name: 'Which kind of social media platforms do you handle for marketing purposes?',
          acceptedAnswer: { '@type': 'Answer', text: 'We manage your Facebook, Instagram, LinkedIn, Pinterest, and other social media presence, developing strategies that are customized for your company and its goals.' },
        },
        {
          '@type': 'Question',
          name: 'What is Social Media Optimisation (SMO)?',
          acceptedAnswer: { '@type': 'Answer', text: 'SMO means improving the visibility, engagement, audience, and content performance of your social profile to make your brand’s online presence stronger.' },
        },
        {
          '@type': 'Question',
          name: 'Why choose ARA Discover Marketing for social media marketing services?',
          acceptedAnswer: { '@type': 'Answer', text: 'We are one of the best social media service providers in Thanjavur because of our creative campaigns, AI-driven targeting strategies, transparent reporting, and audience-focused marketing approach.' },
        },
      ],
    },
  ],
}

export default function SMMPage() {
  useReveal()
  useSEO({
    title: 'Best Social Media Marketing Company (SMM) in Thanjavur | ARA Discover Marketing',
    description: 'ARA Discover Marketing is recognized as one of the best Social Media Marketing (SMM) companies in Thanjavur, offering creative strategies and result-driven campaigns.',
    keywords: 'best social media companies in thanjavur, best social media marketing services in thanjavur, social advertising agency in thanjavur, facebook advertising companies in thanjavur, linkedin social media marketing in thanjavur, pinterest digital marketing in thanjavur, best social media optimization SMO companies in thanjavur',
    canonical: 'https://ara-tech-organization.github.io/ARA-Marketing/services/social-media-marketing',
    ogImage: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&h=630&fit=crop&auto=format&q=80',
    schema: smmSchema,
  })

  return (
    <>
      <Navbar />
      <main className="page-transition">
        <SMMHero />
        <SMMIntro />
        <SMMWhyUs />
        <SMMServices />
        <SMMStats />
        <SMMWorkflow />
        <SMMPromises />
        <SMMTestimonials />
        <SMMFAQ />
        <SMMCTA />
      </main>
      <Footer />
    </>
  )
}
