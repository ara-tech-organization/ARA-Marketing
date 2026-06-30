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

export default function PriceDetailsPage() {
  useReveal()
  useSEO({
    title: 'Price Details | Ara Discover Marketing',
    description: 'Explore affordable digital marketing, SEO, website development, branding, and printing packages from ARA Discover Marketing. Request a quote today!',
    keywords: 'digital marketing price, website development price, branding price',
    canonical: 'https://ara-tech-organization.github.io/ARA-Marketing/price-details',
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
