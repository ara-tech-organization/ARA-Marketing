import useReveal  from '../hooks/useReveal'
import useSEO     from '../hooks/useSEO'
import Navbar     from '../components/home/Navbar'
import Footer     from '../components/home/Footer'
import ContactHero from '../components/contact/ContactHero'
import ContactMain from '../components/contact/ContactMain'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://discovermarketing.co/contact-us',
  name: 'ARA Discover Marketing',
  url: 'https://discovermarketing.co',
  description: 'Contact ARA Discover Marketing in Thanjavur for expert SEO, social media marketing, branding, and digital marketing services to grow your business online.',
  telephone: '+91 81100 25254',
  email: 'aradiscovermarketing@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '67A, Giri Rd, Srinivasapuram',
    addressLocality: 'Thanjavur',
    addressRegion: 'Tamil Nadu',
    postalCode: '613009',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 10.7870,
    longitude: 79.1378,
  },
  areaServed: 'Thanjavur',
}

export default function ContactPage() {
  useReveal()
  useSEO({
    title: 'Contact Us | ARA Discover Marketing',
    description: 'Contact ARA Discover Marketing in Thanjavur for expert SEO, social media marketing, branding, and digital marketing services to grow your business online.',
    keywords: 'contact ARA Discover Marketing, digital marketing company Thanjavur, digital marketing services Thanjavur, SEO agency Thanjavur, social media marketing company, branding services Thanjavur, website development company Thanjavur, marketing consultation Thanjavur, online marketing experts, business marketing solutions',
    canonical: 'https://discovermarketing.co/contact-us',
    schema,
  })

  return (
    <>
      <Navbar />
      <main className="page-transition">
        <ContactHero />
        <ContactMain />
      </main>
      <Footer />
    </>
  )
}
