import useReveal  from '../hooks/useReveal'
import useSEO     from '../hooks/useSEO'
import Navbar     from '../components/home/Navbar'
import Footer     from '../components/home/Footer'
import ContactHero from '../components/contact/ContactHero'
import ContactMain from '../components/contact/ContactMain'

export default function ContactPage() {
  useReveal()
  useSEO({
    title: 'Contact Us | ARA Discover Marketing — Digital Marketing Agency in Thanjavur',
    description: 'Get in touch with ARA Discover Marketing, the best digital marketing agency in Thanjavur. Contact us for SEO, SMM, web development, branding and more.',
    keywords: 'contact ara discover marketing, digital marketing agency thanjavur contact, get in touch, free consultation, contact us thanjavur',
    canonical: 'https://ara-tech-organization.github.io/ARA-Marketing/contact',
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
