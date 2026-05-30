import useReveal       from '../hooks/useReveal'
import useSEO          from '../hooks/useSEO'
import Navbar          from '../components/home/Navbar'
import Footer          from '../components/home/Footer'
import MAHero          from '../components/mobileapp/MAHero'
import MAIntro         from '../components/mobileapp/MAIntro'
import MAWhyUs         from '../components/mobileapp/MAWhyUs'
import MAAndroid       from '../components/mobileapp/MAAndroid'
import MAiOS           from '../components/mobileapp/MAiOS'
import MATech          from '../components/mobileapp/MATech'
import MABenefits      from '../components/mobileapp/MABenefits'
import MAProcess       from '../components/mobileapp/MAProcess'
import MAIndustries    from '../components/mobileapp/MAIndustries'
import MATestimonials  from '../components/mobileapp/MATestimonials'
import MAAssurance     from '../components/mobileapp/MAAssurance'
import MACTA           from '../components/mobileapp/MACTA'
import MAFAQ           from '../components/mobileapp/MAFAQ'

const maSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://ara-tech-organization.github.io/ARA-Marketing/services/mobile-application-development',
      name: 'Mobile Application Development Company in Thanjavur | Ara Discover Marketing',
      description: 'Ara Discover Marketing is a top Mobile Application Development Company in Thanjavur developing innovative iOS and Android applications with AI-powered features.',
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
      serviceType: 'Mobile Application Development',
      areaServed: 'Thanjavur',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Mobile App Development Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Android App Development'          } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'iOS App Development'                    } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cross-Platform App Development'          } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI-Powered Mobile App Development'       } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Commerce Mobile App Development'      } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Enterprise Mobile App Development'      } },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why is Ara Discover Marketing the best Mobile App Development Company in Thanjavur?',
          acceptedAnswer: { '@type': 'Answer', text: 'We combine expertise, AI integration, and customer-centricity to develop scalable, secure, and high-performance mobile apps with a track record of 200+ delivered apps.' },
        },
        {
          '@type': 'Question',
          name: 'Do you provide AI-driven mobile app development in Thanjavur?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes, we offer AI-enhanced mobile app development in Thanjavur to improve user engagement, automate business processes, and deliver intelligent app experiences.' },
        },
        {
          '@type': 'Question',
          name: 'Do you offer custom mobile app development services in Thanjavur?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes, our custom mobile app development services in Thanjavur are tailored to your unique business requirements, built from scratch to match your goals and brand identity.' },
        },
        {
          '@type': 'Question',
          name: 'Can you develop e-commerce mobile apps?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes, we provide e-commerce mobile app development services in Thanjavur for secure, feature-rich online stores with payment gateways and AI-driven recommendations.' },
        },
        {
          '@type': 'Question',
          name: 'Do you provide post-launch support for apps?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes, our mobile application development service in Thanjavur includes maintenance, updates, bug fixes, and ongoing optimisation post-launch.' },
        },
        {
          '@type': 'Question',
          name: 'What platforms do you develop for?',
          acceptedAnswer: { '@type': 'Answer', text: 'We develop for Android (Kotlin/Java), iOS (Swift), and cross-platform (Flutter, React Native) — covering every major mobile platform your audience uses.' },
        },
      ],
    },
  ],
}

export default function MobileAppPage() {
  useReveal()
  useSEO({
    title: 'Mobile Application Development Company in Thanjavur | Ara Discover Marketing',
    description: 'Ara Discover Marketing is a top Mobile Application Development Company in Thanjavur developing innovative iOS and Android applications with AI-powered features.',
    keywords: 'best app development agencies in thanjavur, custom mobile app development services in thanjavur, e commerce mobile app development services in thanjavur, mobile application development agency in thanjavur, mobile application development service in thanjavur, android app development company in thanjavur, ios and android development in thanjavur',
    canonical: 'https://ara-tech-organization.github.io/ARA-Marketing/services/mobile-application-development',
    ogImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=630&fit=crop&auto=format&q=80',
    schema: maSchema,
  })

  return (
    <>
      <Navbar />
      <main>
        <MAHero />
        <MAIntro />
        <MAWhyUs />
        <MAAndroid />
        <MAiOS />
        <MATech />
        <MABenefits />
        <MAProcess />
        <MAIndustries />
        <MATestimonials />
        <MAAssurance />
        <MACTA />
        <MAFAQ />
      </main>
      <Footer />
    </>
  )
}
