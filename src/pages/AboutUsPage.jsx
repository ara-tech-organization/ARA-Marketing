import useReveal  from '../hooks/useReveal'
import useSEO     from '../hooks/useSEO'
import Navbar     from '../components/home/Navbar'
import Footer     from '../components/home/Footer'
import AboutHero  from '../components/about/AboutHero'
import AboutMV    from '../components/about/AboutMV'
import AboutCEO   from '../components/about/AboutCEO'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://ara-tech-organization.github.io/ARA-Marketing/about',
      name: 'ARA Discover Marketing',
      url: 'https://ara-tech-organization.github.io/ARA-Marketing',
      description: 'ARA Discover Marketing is a leading digital marketing agency in Thanjavur helping businesses grow through innovative branding, SEO, social media marketing and performance-driven strategies.',
      foundingDate: '2022',
      founder: {
        '@type': 'Person',
        name: 'Mehala Kumar',
        jobTitle: 'CEO & Founder',
        worksFor: { '@type': 'Organization', name: 'ARA Discover Marketing' },
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Thanjavur',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'IN',
      },
      areaServed: 'Thanjavur',
      telephone: '+91 81100 25254',
      email: 'aradiscovermarketing@gmail.com',
    },
  ],
}

export default function AboutUsPage() {
  useReveal()
  useSEO({
    title: 'About Us | ARA Discover Marketing — Digital Marketing Agency in Thanjavur',
    description: 'Learn about ARA Discover Marketing, our mission, vision, and our CEO Mehala Kumar. We are a leading digital marketing agency in Thanjavur helping businesses grow online.',
    keywords: 'about ara discover marketing, digital marketing agency thanjavur, mehala kumar ceo, best digital marketing company thanjavur, about us digital marketing thanjavur',
    canonical: 'https://ara-tech-organization.github.io/ARA-Marketing/about',
  })

  return (
    <>
      <Navbar />
      <main className="page-transition">
        <AboutHero />
        <AboutMV />
        <AboutCEO />
      </main>
      <Footer />
    </>
  )
}
