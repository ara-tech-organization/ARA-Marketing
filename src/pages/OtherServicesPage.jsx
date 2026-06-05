import useReveal from '../hooks/useReveal'
import useSEO    from '../hooks/useSEO'
import Navbar    from '../components/home/Navbar'
import Footer    from '../components/home/Footer'

import OMHero         from '../components/othermarketing/OMHero'
import OMIntro        from '../components/othermarketing/OMIntro'
import OMWhyUs        from '../components/othermarketing/OMWhyUs'
import OMServices     from '../components/othermarketing/OMServices'
import OMProcess      from '../components/othermarketing/OMProcess'
import OMTestimonials from '../components/othermarketing/OMTestimonials'
import OMCTA          from '../components/othermarketing/OMCTA'
import OMFAQ          from '../components/othermarketing/OMFAQ'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which company provides the best email marketing services in Thanjavur?',
      acceptedAnswer: { '@type': 'Answer', text: 'ARA Discover Marketing is popular as one of the best email marketing companies in Thanjavur, providing customized email campaigns, automation strategies, and customer engagement solutions.' },
    },
    {
      '@type': 'Question',
      name: 'What are the advantages of influencer marketing for businesses?',
      acceptedAnswer: { '@type': 'Answer', text: 'Influencer marketing helps businesses boost brand awareness, build trust with customers, increase audience engagement, and achieve better social media visibility ahead of competitors.' },
    },
    {
      '@type': 'Question',
      name: 'Do you offer bulk SMS promotion services in Thanjavur?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, we provide bulk SMS promotion in Thanjavur, including promotional SMS campaigns, customer engagement messaging, and business communication solutions.' },
    },
    {
      '@type': 'Question',
      name: 'What is Email Marketing and How Can it Help Your Business Grow?',
      acceptedAnswer: { '@type': 'Answer', text: 'Email marketing is an effective method for retaining customers, increasing engagement, promoting products and services, and encouraging repeat sales through targeted messaging.' },
    },
    {
      '@type': 'Question',
      name: 'What industries can benefit from influencer marketing?',
      acceptedAnswer: { '@type': 'Answer', text: 'Influencer collaborations and audience-focused promotional campaigns can help healthcare, fashion, restaurants, education, retail, real estate, and e-commerce businesses.' },
    },
    {
      '@type': 'Question',
      name: 'Why Choose ARA Discover Marketing for Your Digital Marketing Services?',
      acceptedAnswer: { '@type': 'Answer', text: 'With AI-powered strategies, audience-centric campaigns, transparent reporting, and multi-channel marketing expertise, we are your trusted partner for business growth and customer engagement.' },
    },
  ],
}

export default function OtherServicesPage() {
  useReveal()
  useSEO({
    title:       'Email & SMS Marketing | Influencers Marketing | ARA Discover Marketing',
    description: 'ARA Discover Marketing offers other digital marketing services in Thanjavur including Email, SMS, and Influencer marketing to grow your business.',
    keywords:    'best email marketing companies in thanjavur, best email marketing service in thanjavur, bulk email advertising services in thanjavur, influencer advertising agency in thanjavur, influencers marketing in thanjavur, bulk sms promotion in thanjavur, sms agency in thanjavur',
    canonical:   'https://ara-tech-organization.github.io/ARA-Marketing/services/other-digital-marketing-services-thanjavur',
    schema,
  })

  return (
    <>
      <Navbar />
      <main className="page-transition">
        <OMHero />
        <OMIntro />
        <OMWhyUs />
        <OMServices />
        <OMProcess />
        <OMTestimonials />
        <OMCTA />
        <OMFAQ />
      </main>
      <Footer />
    </>
  )
}
