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
      name: 'Social Media Marketing Services in Thanjavur',
      description: 'Ara Discover Marketing is recognized as one of the best Social Media Marketing (SMM) companies in Thanjavur, offering creative strategies and result-driven campaigns for Facebook, LinkedIn, Pinterest and Instagram.',
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
      serviceType: 'Social Media Marketing',
      areaServed: 'Thanjavur',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'SMM Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Facebook Marketing for Business in Thanjavur' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LinkedIn Social Media Marketing in Thanjavur' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pinterest Digital Marketing in Thanjavur' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Optimization (SMO) Services in Thanjavur' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Paid Social Media Advertising in Thanjavur' } },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who is the best social media branding services provider in Thanjavur?',
          acceptedAnswer: { '@type': 'Answer', text: 'Ara Discover Marketing is one of the best social media companies in Thanjavur, providing social media branding services in Thanjavur, Facebook marketing, LinkedIn marketing, Pinterest marketing, SMO, and paid social media advertising strategies.' },
        },
        {
          '@type': 'Question',
          name: 'Do you provide paid social media advertising in Thanjavur?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes, we run paid social media advertising campaigns in Thanjavur, including Facebook Ads, Instagram Ads, LinkedIn Ads, and targeted audience advertising campaigns. We are also a paid social media marketing and agency in Thanjavur offering complete campaign management.' },
        },
        {
          '@type': 'Question',
          name: 'What social media advertising services do you offer in Thanjavur?',
          acceptedAnswer: { '@type': 'Answer', text: 'We offer complete social media advertising services in Thanjavur including social media ads marketing and advertising in Thanjavur, social media agency services in Thanjavur, and social media optimization services in Thanjavur across Facebook, Instagram, LinkedIn, and Pinterest.' },
        },
        {
          '@type': 'Question',
          name: 'How does social media marketing benefit businesses?',
          acceptedAnswer: { '@type': 'Answer', text: 'Social media marketing has the potential to help businesses achieve growth in brand awareness, customer engagement, leads, and long-term customer relationships.' },
        },
        {
          '@type': 'Question',
          name: 'Which kind of social media platforms do you handle for marketing purposes?',
          acceptedAnswer: { '@type': 'Answer', text: 'We manage your Facebook, Instagram, LinkedIn, Pinterest, and other social media presence, developing strategies customized for your company and its goals.' },
        },
        {
          '@type': 'Question',
          name: 'What is Social Media Optimisation (SMO)?',
          acceptedAnswer: { '@type': 'Answer', text: 'SMO means improving the visibility, engagement, audience, and content performance of your social profiles to make your brand\'s online presence stronger.' },
        },
        {
          '@type': 'Question',
          name: 'Why choose Ara Discover Marketing for social media marketing services?',
          acceptedAnswer: { '@type': 'Answer', text: 'We are one of the best social media service providers in Thanjavur because of our creative campaigns, AI-driven targeting strategies, transparent reporting, and audience-focused marketing approach.' },
        },
      ],
    },
  ],
}

export default function SMMPage() {
  useReveal()
  useSEO({
    title: 'Best Social Media Marketing Company (SMM) in Thanjavur | Ara Discover Marketing',
    description: 'Ara Discover Marketing is recognized as one of the best Social Media Marketing (SMM) companies in Thanjavur, offering creative strategies and result-driven campaigns.',
    keywords: 'best social media companies in thanjavur, best social media marketing services in thanjavur, social advertising agency in thanjavur, advertising social media marketing in thanjavur, best social media service provider in thanjavur, digital marketing and social media marketing in thanjavur, marketing through social media in thanjavur, paid social media advertising in thanjavur, paid social media marketing and agency in thanjavur, social media ads marketing and advertising in thanjavur, social media advertising services in thanjavur, social media agency services in thanjavur, social media branding services in thanjavur, social media optimization services in thanjavur, facebook advertising companies in thanjavur, facebook social media marketing companies in thanjavur, facebook marketing for business in thanjavur, linkedin social media marketing in thanjavur, linkedin engagement strategy in thanjavur, pinterest digital marketing in thanjavur, advertising on pinterest in thanjavur, pinterest social media marketing in thanjavur, best social media optimization SMO companies in thanjavur, best social media optimization SMO services in thanjavur, smo for instagram in thanjavur, smo services provider in thanjavur',
    canonical: 'https://ara-tech-organization.github.io/ARA-Marketing/services/social-media-marketing',
    ogImage: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&h=630&fit=crop&auto=format&q=80',
    schema: smmSchema,
  })

  return (
    <>
      <Navbar />
      <main>
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
