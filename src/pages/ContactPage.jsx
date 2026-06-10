import useReveal  from '../hooks/useReveal'
import useSEO     from '../hooks/useSEO'
import Navbar     from '../components/home/Navbar'
import Footer     from '../components/home/Footer'
import ContactHero from '../components/contact/ContactHero'
import ContactMain from '../components/contact/ContactMain'

export default function ContactPage() {
  useReveal()
  useSEO({
    title: 'Contact Us | Ara Discover Marketing',
    description: 'Contact ARA Discover Marketing in Thanjavur for expert SEO, social media marketing, branding, and digital marketing services to grow your business online.',
    keywords: 'contact ARA Discover Marketing, digital marketing company Thanjavur, digital marketing services Thanjavur, SEO agency Thanjavur, social media marketing company, branding services Thanjavur, website development company Thanjavur, marketing consultation Thanjavur, online marketing experts, business marketing solutions',
    canonical: 'https://ara-tech-organization.github.io/ARA-Marketing/contact-us',
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
