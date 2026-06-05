import useReveal from '../hooks/useReveal'
import useSEO    from '../hooks/useSEO'
import Navbar    from '../components/home/Navbar'
import Footer    from '../components/home/Footer'

import EWHero         from '../components/enterprisewebsite/EWHero'
import EWIntro        from '../components/enterprisewebsite/EWIntro'
import EWWhyUs        from '../components/enterprisewebsite/EWWhyUs'
import EWWhoShould    from '../components/enterprisewebsite/EWWhoShould'
import EWBenefits     from '../components/enterprisewebsite/EWBenefits'
import EWProcess      from '../components/enterprisewebsite/EWProcess'
import EWTestimonials from '../components/enterprisewebsite/EWTestimonials'
import EWCTA          from '../components/enterprisewebsite/EWCTA'
import EWFAQ          from '../components/enterprisewebsite/EWFAQ'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is ARA Discover Marketing the Top Enterprise Web Development Agency in Thanjavur?',
      acceptedAnswer: { '@type': 'Answer', text: 'We incorporate AI integration, enterprise-level security, and a client-centric approach to build high-performing, scalable websites for large businesses. Our proven track record across finance, healthcare, retail, logistics, and education sectors makes us the most trusted enterprise web development agency in Thanjavur.' },
    },
    {
      '@type': 'Question',
      name: 'Do you provide enterprise eCommerce development in Thanjavur?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, we have a dedicated web development team that provides enterprise eCommerce development in Thanjavur, developing secure, scalable, and feature-rich online stores for enterprises.' },
    },
    {
      '@type': 'Question',
      name: 'Do you build enterprise websites on WordPress?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer enterprise WordPress development services in Thanjavur for easy content management and smooth functioning, including custom plugin development and headless WordPress architectures.' },
    },
    {
      '@type': 'Question',
      name: 'Who should invest in an enterprise website?',
      acceptedAnswer: { '@type': 'Answer', text: 'Large-scale businesses, corporations, and enterprises looking for powerful, secure, and AI-driven solutions benefit most from professional enterprise websites.' },
    },
    {
      '@type': 'Question',
      name: 'What industries do you serve for enterprise web development?',
      acceptedAnswer: { '@type': 'Answer', text: 'We serve multiple businesses, including finance, healthcare, retail, logistics, education, and global enterprises requiring complex web solutions.' },
    },
    {
      '@type': 'Question',
      name: 'Do you provide post-launch support for enterprise websites?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, our enterprise web development services in Thanjavur include continuous monitoring, maintenance, and updates to assure optimal performance, with SLA-backed response times.' },
    },
  ],
}

export default function EnterpriseWebsitePage() {
  useReveal()
  useSEO({
    title:       'Enterprise Website Design and Development Company in Thanjavur | ARA Discover Marketing',
    description: 'ARA Discover Marketing is a reliable Enterprise Website Design and Development Company in Thanjavur offering business-driven solutions.',
    keywords:    'enterprise web development agency in thanjavur, enterprise website development company in thanjavur, enterprise web development services in thanjavur',
    canonical:   'https://ara-tech-organization.github.io/ARA-Marketing/services/enterprise-website-development',
    schema,
  })

  return (
    <>
      <Navbar />
      <main className="page-transition">
        <EWHero />
        <EWIntro />
        <EWWhyUs />
        <EWWhoShould />
        <EWBenefits />
        <EWProcess />
        <EWTestimonials />
        <EWCTA />
        <EWFAQ />
      </main>
      <Footer />
    </>
  )
}
