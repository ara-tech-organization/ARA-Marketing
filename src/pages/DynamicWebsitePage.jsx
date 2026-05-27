import useReveal from '../hooks/useReveal'
import useSEO    from '../hooks/useSEO'
import Navbar    from '../components/home/Navbar'
import Footer    from '../components/home/Footer'

import DWHero         from '../components/dynamicwebsite/DWHero'
import DWIntro        from '../components/dynamicwebsite/DWIntro'
import DWWhyUs        from '../components/dynamicwebsite/DWWhyUs'
import DWWhoShould    from '../components/dynamicwebsite/DWWhoShould'
import DWBenefits     from '../components/dynamicwebsite/DWBenefits'
import DWProcess      from '../components/dynamicwebsite/DWProcess'
import DWTestimonials from '../components/dynamicwebsite/DWTestimonials'
import DWCTA          from '../components/dynamicwebsite/DWCTA'
import DWFAQ          from '../components/dynamicwebsite/DWFAQ'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a dynamic website mean?',
      acceptedAnswer: { '@type': 'Answer', text: 'A dynamic website is a web platform that generates content dynamically with the help of databases and backend programming. It allows easy updates, user interaction, and personalised content delivery without modifying the source code each time.' },
    },
    {
      '@type': 'Question',
      name: 'Why Should I Choose a Dynamic Website for My Business?',
      acceptedAnswer: { '@type': 'Answer', text: 'Dynamic websites are the perfect choice for growing businesses and interactive platforms as they are flexible, scalable and can be updated in real time. They support user accounts, e-commerce, personalisation, and seamless CMS-based content management.' },
    },
    {
      '@type': 'Question',
      name: 'How does a dynamic website differ from a static website?',
      acceptedAnswer: { '@type': 'Answer', text: 'Unlike static sites, dynamic websites can customise content without any coding, integrate with databases, and generate pages dynamically for each user. They support real-time updates, user interaction, and advanced features that static sites cannot deliver.' },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to create a dynamic website?',
      acceptedAnswer: { '@type': 'Answer', text: 'Development of a dynamic website can take between 2 and 6 weeks, depending on complexity, the number of features required, and the CMS platform chosen.' },
    },
    {
      '@type': 'Question',
      name: 'Can I manage my website content easily?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, dynamic websites integrate with CMS platforms like WordPress, allowing you to update content, add pages, manage media, and publish blogs without any technical knowledge.' },
    },
    {
      '@type': 'Question',
      name: 'Is SEO possible on dynamic websites?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, dynamic websites are fully SEO-optimised when properly developed with clean coding, fast performance, structured data, and schema markup.' },
    },
  ],
}

export default function DynamicWebsitePage() {
  useReveal()
  useSEO({
    title:       'Dynamic Website Design and Development Company in Thanjavur | Ara Discover Marketing',
    description: 'Ara Discover Marketing is a leading Dynamic Website Design and Development Company in Thanjavur offering responsive and scalable web solutions.',
    keywords:    'dynamic website development company in thanjavur, dynamic website development service in thanjavur, dynamic website designing company in thanjavur',
    canonical:   'https://ara-tech-organization.github.io/ARA-Marketing/services/dynamic-website-development',
    schema,
  })

  return (
    <>
      <Navbar />
      <main>
        <DWHero />
        <DWIntro />
        <DWWhyUs />
        <DWWhoShould />
        <DWBenefits />
        <DWProcess />
        <DWTestimonials />
        <DWCTA />
        <DWFAQ />
      </main>
      <Footer />
    </>
  )
}
