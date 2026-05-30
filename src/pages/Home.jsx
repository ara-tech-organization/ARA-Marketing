import useReveal     from '../hooks/useReveal'
import useSEO        from '../hooks/useSEO'
import Navbar        from '../components/home/Navbar'
import Hero          from '../components/home/Hero'
import StatsBand     from '../components/home/StatsBand'
import Services      from '../components/home/Services'
import WhyUs         from '../components/home/WhyUs'
import Process       from '../components/home/Process'
import Portfolio     from '../components/home/Portfolio'
import Industries    from '../components/home/Industries'
import Tools         from '../components/home/Tools'
import Testimonials  from '../components/home/Testimonials'
import Assurance     from '../components/home/Assurance'
import Blog          from '../components/home/Blog'
import CTA           from '../components/home/CTA'
import FAQ           from '../components/home/FAQ'
import Footer        from '../components/home/Footer'

const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://ara-tech-organization.github.io/ARA-Marketing',
      name: 'Ara Discover Marketing',
      description: 'Ara Discover Marketing is one of the best digital marketing companies in Thanjavur and offers best digital marketing services in Thanjavur for business growth.',
      url: 'https://ara-tech-organization.github.io/ARA-Marketing',
      telephone: '+91 81100 25254',
      email: 'aradiscovermarketing@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Thanjavur',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'IN',
      },
      areaServed: 'Thanjavur',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Which is the best digital marketing company in Thanjavur?', acceptedAnswer: { '@type': 'Answer', text: 'Ara Discover Marketing is known as one of the best digital marketing company in Thanjavur providing SEO, social media marketing, Google Ads, branding and lead generation services for businesses across industries.' } },
        { '@type': 'Question', name: 'Why should businesses hire a digital marketing agency in Thanjavur?', acceptedAnswer: { '@type': 'Answer', text: 'Hiring a professional agency can help businesses to improve online visibility, attract targeted customers, increase leads and achieve better ROI through strategic campaigns.' } },
        { '@type': 'Question', name: 'What services does Ara Discover Marketing offer?', acceptedAnswer: { '@type': 'Answer', text: 'We offer a complete SEO services, social media marketing, Google Ads management, branding, advertising, email marketing, influencer marketing and lead generation solutions.' } },
        { '@type': 'Question', name: 'How SEO benefits local businesses in Thanjavur?', acceptedAnswer: { '@type': 'Answer', text: 'SEO increases your website visibility on search engines, so local customers can find your business online, resulting in organic traffic and qualified leads.' } },
        { '@type': 'Question', name: 'Why is Ara Discover Marketing a top branding agency in Thanjavur?', acceptedAnswer: { '@type': 'Answer', text: 'We develop effective branding strategies, innovative ad campaigns, and strong digital identities, helping businesses build trust and enhance customer engagement.' } },
        { '@type': 'Question', name: 'What sets Ara Discover Marketing apart from other agencies?', acceptedAnswer: { '@type': 'Answer', text: 'Our AI-driven strategies, transparent reporting, customized campaigns, and measurable results make us one of the best digital marketing agencies in Thanjavur.' } },
      ],
    },
  ],
}

export default function Home() {
  useReveal()
  useSEO({
    title: 'Best Digital Marketing Company in Thanjavur | Ara Discover Marketing',
    description: 'Ara Discover Marketing is one of the best digital marketing companies in Thanjavur and offers best digital marketing services in Thanjavur for business growth.',
    keywords: 'Best digital marketing company in thanjavur, Best digital marketing companies in thanjavur, Best digital marketing services in thanjavur, Best digital marketing agency in thanjavur, Best branding agency in thanjavur, Best digital branding and advertising in thanjavur, Top digital marketing company in thanjavur, Top digital marketing companies in thanjavur, Top digital marketing services in thanjavur, Top digital marketing agency in thanjavur, Top branding agency in thanjavur, Top digital branding and advertising in thanjavur',
    canonical: 'https://ara-tech-organization.github.io/ARA-Marketing/',
    schema: homeSchema,
  })
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBand />
        <Services />
        <WhyUs />
        <Process />
        <Portfolio />
        <Industries />
        <Tools />
        <Testimonials />
        <Assurance />
        <Blog />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
