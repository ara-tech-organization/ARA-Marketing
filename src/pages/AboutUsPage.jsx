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
      '@id': 'https://ara-tech-organization.github.io/ARA-Marketing/about-us',
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
    title: 'About Us | Ara Discover Marketing',
    description: 'ARA Discover Marketing is a trusted digital marketing company in Thanjavur delivering SEO, social media marketing, branding, and web solutions for business growth.',
    keywords: 'ARA Discover Marketing, digital marketing company in Thanjavur, best digital marketing company in Thanjavur, digital marketing services in Thanjavur, SEO services Thanjavur, social media marketing Thanjavur, branding agency Thanjavur, website development Thanjavur, online marketing agency, business growth solutions',
    canonical: 'https://ara-tech-organization.github.io/ARA-Marketing/about-us',
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
