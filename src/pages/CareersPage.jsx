import { useState, useCallback } from 'react'
import useReveal from '../hooks/useReveal'
import useSEO    from '../hooks/useSEO'
import Navbar    from '../components/home/Navbar'
import Footer    from '../components/home/Footer'
import CareersHero     from '../components/careers/CareersHero'
import CareersIntro    from '../components/careers/CareersIntro'
import CareersWhyJoin  from '../components/careers/CareersWhyJoin'
import CareersJoinTeam from '../components/careers/CareersJoinTeam'
import CareersOpenings from '../components/careers/CareersOpenings'
import CareersForm     from '../components/careers/CareersForm'
import { openings } from '../data/careers'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Career Opportunities at ARA Discover Marketing',
  itemListElement: openings
    .filter(job => job.status === 'hiring')
    .map((job, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'JobPosting',
        title: job.title,
        description: job.desc,
        employmentType: 'FULL_TIME',
        hiringOrganization: {
          '@type': 'Organization',
          name: 'ARA Discover Marketing',
          sameAs: 'https://discovermarketing.co',
        },
        jobLocation: {
          '@type': 'Place',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '67A, Giri Rd, Srinivasapuram',
            addressLocality: 'Thanjavur',
            addressRegion: 'Tamil Nadu',
            postalCode: '613009',
            addressCountry: 'IN',
          },
        },
      },
    })),
}

export default function CareersPage() {
  useReveal()
  useSEO({
    title: 'Careers | ARA Discover Marketing',
    description: 'Explore career opportunities at ARA Discover Marketing and join a growing digital marketing team in Thanjavur. Build your career with us.',
    keywords: 'careers at ara discover marketing, jobs in thanjavur, digital marketing jobs in thanjavur, seo jobs in thanjavur, digital marketing careers in thanjavur, seo career opportunities in thanjavur, digital marketing company jobs in thanjavur, careers in digital marketing thanjavur',
    canonical: 'https://discovermarketing.co/careers',
    schema,
  })

  /* The selected role lives here so "Apply Now" on an opening card can drop it
     straight into the application form and scroll the visitor down to it. */
  const [position, setPosition] = useState('')

  const handleApply = useCallback(title => {
    setPosition(title)
    document.getElementById('career-form')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <>
      <Navbar />
      <main className="page-transition">
        <CareersHero />
        <CareersIntro />
        <CareersWhyJoin />
        <CareersJoinTeam />
        <CareersOpenings onApply={handleApply} />
        <CareersForm position={position} onPositionChange={setPosition} />
      </main>
      <Footer />
    </>
  )
}
