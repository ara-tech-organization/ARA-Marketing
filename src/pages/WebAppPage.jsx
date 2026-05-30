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
        email: 'aradiscovermarketing@gmail.com',
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
          name: 'Which company provides the best web design and development services in Thanjavur?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ara Discover Marketing is the best web design and development company in thanjavur, providing custom websites, corporate websites and e-commerce solutions.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are included services in website development?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Website development includes UI/UX design, Frontend & backend development, SEO optimisation, Mobile responsiveness and website maintenance.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you develop custom websites for business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we are providing custom website development company in thanjavur solutions according to business needs and functionality requirements.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is a professional website necessary for business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A professional website increases brand credibility, enhances online visibility, generates leads and improves customer trust.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you provide SEO friendly website development?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, all websites are built with SEO optimised structure for better google rankings.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why choose Ara Discover Marketing for web development services?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our expertise in UI/UX design, AI-enhanced technologies, and experience as a best website design and development company in thanjavur assures long-term and high-quality digital solutions.',
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
