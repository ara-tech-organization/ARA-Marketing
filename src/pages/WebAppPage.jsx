import useReveal       from '../hooks/useReveal'
import useSEO          from '../hooks/useSEO'
import Navbar          from '../components/home/Navbar'
import Footer          from '../components/home/Footer'
import WAHero          from '../components/webapplication/WAHero'
import WAServices      from '../components/webapplication/WAServices'
import WAWhyUs         from '../components/webapplication/WAWhyUs'
import WAProcess       from '../components/webapplication/WAProcess'
import WATech          from '../components/webapplication/WATech'
import WAIndustries    from '../components/webapplication/WAIndustries'
import WATestimonials  from '../components/webapplication/WATestimonials'
import WACTA           from '../components/webapplication/WACTA'
import WAFAQ           from '../components/webapplication/WAFAQ'

const waSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://ara-tech-organization.github.io/ARA-Marketing/services/web-application-development',
      name: 'Web Application Development Company in Thanjavur | Ara Discover Marketing',
      description: 'Ara Discover Marketing is a professional Web Application Development Company in Thanjavur specializing in ecommerce apps and custom web apps.',
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
      serviceType: 'Web Application Development',
      areaServed: 'Thanjavur',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Web Application Development Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Web App Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'eCommerce App Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI-Driven Web Solutions' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web & Mobile App Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Enterprise Web Application Development' } },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why is Ara Discover Marketing the trusted web application development company in Thanjavur?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We are a professional web application development agency in Thanjavur offering secure, scalable and AI-powered web solutions for your business.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you create web and mobile applications together?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we are a web and mobile applications development company in Thanjavur, which builds coordinated and cross-platform solutions for a consistent user experience.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you provide custom web app development services in Thanjavur?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Definitely. We offer custom web app development services in Thanjavur according to your unique business requirements.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you build eCommerce web applications?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we are a trustworthy eCommerce application development company in Thanjavur offering AI-driven, secure, scalable and feature-rich solutions.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which types of industries do you serve?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We serve various kinds of niches and sectors, including eCommerce, healthcare, education, finance, logistics, and more.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you provide post-launch support?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, our dedicated web app team ensures continuous maintenance and updates for all website application development services in Thanjavur.',
          },
        },
      ],
    },
  ],
}

export default function WebAppPage() {
  useReveal()
  useSEO({
    title: 'Web Application Development Company in Thanjavur | Ara Discover Marketing',
    description: 'Ara Discover Marketing is a professional Web Application Development Company in Thanjavur specializing in ecommerce apps and custom web apps.',
    keywords: 'web application and development companies in thanjavur, website application development services in thanjavur, web application development agency in thanjavur, ecommerce application development company in thanjavur, custom web application development company in thanjavur',
    canonical: 'https://ara-tech-organization.github.io/ARA-Marketing/services/web-application-development',
    ogImage: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&h=630&fit=crop&auto=format&q=80',
    schema: waSchema,
  })

  return (
    <>
      <Navbar />
      <main>
        <WAHero />
        <WAServices />
        <WAWhyUs />
        <WAProcess />
        <WATech />
        <WAIndustries />
        <WATestimonials />
        <WACTA />
        <WAFAQ />
      </main>
      <Footer />
    </>
  )
}
