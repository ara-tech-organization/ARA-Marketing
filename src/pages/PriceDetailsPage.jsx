import useReveal  from '../hooks/useReveal'
import useSEO     from '../hooks/useSEO'
import Navbar     from '../components/home/Navbar'
import Footer     from '../components/home/Footer'
import PriceHero            from '../components/price/PriceHero'
import PriceIntro           from '../components/price/PriceIntro'
import PriceWebsite         from '../components/price/PriceWebsite'
import PriceSEO             from '../components/price/PriceSEO'
import PriceDigitalMarketing from '../components/price/PriceDigitalMarketing'
import PriceAdditional      from '../components/price/PriceAdditional'
import PriceCTA             from '../components/price/PriceCTA'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://discovermarketing.co/price-details',
  name: 'Digital Marketing & Website Development Pricing | ARA Discover Marketing',
  description: 'Explore affordable digital marketing, SEO, website development, branding, and printing packages from ARA Discover Marketing.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'ARA Discover Marketing',
    url: 'https://discovermarketing.co',
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
  },
  areaServed: 'Thanjavur',
}

export default function PriceDetailsPage() {
  useReveal()
  useSEO({
    title: 'Price Details | ARA Discover Marketing',
    description: 'Explore affordable digital marketing, SEO, website development, branding, and printing packages from ARA Discover Marketing. Request a quote today!',
    keywords: 'digital marketing price, website development price, branding price',
    canonical: 'https://discovermarketing.co/price-details',
    schema,
  })

  return (
    <>
      <Navbar />
      <main className="page-transition">
        <PriceHero />
        <PriceIntro />
        <PriceWebsite />
        <PriceSEO />
        <PriceDigitalMarketing />
        <PriceAdditional />
        <PriceCTA />
      </main>
      <Footer />
    </>
  )
}
