import useReveal       from '../hooks/useReveal'
import useSEO          from '../hooks/useSEO'
import Navbar          from '../components/home/Navbar'
import Footer          from '../components/home/Footer'
import WebDevHero         from '../components/webdev/WebDevHero'
import WebDevIntro        from '../components/webdev/WebDevIntro'
import WebDevWhyUs        from '../components/webdev/WebDevWhyUs'
import WebDevServices     from '../components/webdev/WebDevServices'
import WebDevStats        from '../components/webdev/WebDevStats'
import WebDevProcess      from '../components/webdev/WebDevProcess'
import WebDevPortfolio    from '../components/webdev/WebDevPortfolio'
import WebDevTech         from '../components/webdev/WebDevTech'
import WebDevIndustries   from '../components/webdev/WebDevIndustries'
import WebDevAssurance    from '../components/webdev/WebDevAssurance'
import WebDevTestimonials from '../components/webdev/WebDevTestimonials'

import WebDevFAQ          from '../components/webdev/WebDevFAQ'

const webDevSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://ara-tech-organization.github.io/ARA-Marketing/services/website-development',
      name: 'Ara Discover Marketing Web Development Services',
      description: 'Ara Discover Marketing is one of the best website design and development companies in Thanjavur, creating AI-driven and SEO-friendly websites for businesses.',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Ara Discover Marketing',
        url: 'https://ara-tech-organization.github.io/ARA-Marketing',
        telephone: '+91 98765 43210',
        email: 'aradicovertech02@gmail.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Thanjavur',
          addressRegion: 'Tamil Nadu',
          addressCountry: 'IN',
        },
        areaServed: 'Thanjavur',
      },
      serviceType: 'Website Design and Development',
      areaServed: 'Thanjavur',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Which company provides the best web design and development services in Thanjavur?', acceptedAnswer: { '@type': 'Answer', text: 'Ara Discover Marketing is the best web design and development company in Thanjavur, providing custom websites, corporate websites and e-commerce solutions.' } },
        { '@type': 'Question', name: 'What are included services in website development?', acceptedAnswer: { '@type': 'Answer', text: 'Website development includes UI/UX design, frontend & backend development, SEO optimisation, mobile responsiveness and website maintenance.' } },
        { '@type': 'Question', name: 'Do you develop custom websites for business?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we provide custom web development and design solutions in Thanjavur tailored to business needs and functionality requirements.' } },
        { '@type': 'Question', name: 'Why is a professional website necessary for business?', acceptedAnswer: { '@type': 'Answer', text: 'A professional website increases brand credibility, enhances online visibility, generates leads and improves customer trust.' } },
        { '@type': 'Question', name: 'Do you provide SEO friendly website development?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, all websites are built with SEO optimised structure for better Google rankings.' } },
        { '@type': 'Question', name: 'Why choose Ara Discover Marketing for web development services?', acceptedAnswer: { '@type': 'Answer', text: 'Our expertise in UI/UX design, AI-enhanced technologies, and experience as a leading website design and development agency in Thanjavur assures long-term and high-quality digital solutions.' } },
      ],
    },
  ],
}

export default function WebDevPage() {
  useReveal()
  useSEO({
    title: 'Best Website Design and Development Company in Thanjavur | Ara Discover Marketing',
    description: 'Ara Discover Marketing is one of the best website design and development companies in Thanjavur, creating AI-driven and SEO-friendly websites for businesses.',
    keywords: 'best web design and development companies in thanjavur, best website design and development agency in thanjavur, best website design and development company in thanjavur, best website design and development firms in thanjavur, best website design and development services in thanjavur, best website design and development services providers in thanjavur, custom website development company in thanjavur, custom website development services in thanjavur, professional web development services in thanjavur, top web development firms in thanjavur, top website design and development agencies in thanjavur, web development and designing company in thanjavur',
    canonical: 'https://ara-tech-organization.github.io/ARA-Marketing/services/website-development',
    schema: webDevSchema,
  })

  return (
    <>
      <Navbar />
      <main>
        <WebDevHero />
        <WebDevIntro />
        <WebDevWhyUs />
        <WebDevServices />
        <WebDevStats />
        <WebDevProcess />
        <WebDevPortfolio />
        <WebDevTech />
        <WebDevIndustries />
        <WebDevAssurance />
        <WebDevTestimonials />

        <WebDevFAQ />
      </main>
      <Footer />
    </>
  )
}
