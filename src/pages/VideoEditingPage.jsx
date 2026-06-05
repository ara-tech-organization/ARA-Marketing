import useReveal from '../hooks/useReveal'
import useSEO    from '../hooks/useSEO'
import Navbar    from '../components/home/Navbar'
import Footer    from '../components/home/Footer'

import VEHero         from '../components/videoediting/VEHero'
import VEIntro        from '../components/videoediting/VEIntro'
import VEWhyUs        from '../components/videoediting/VEWhyUs'
import VEServices     from '../components/videoediting/VEServices'
import VEProcess      from '../components/videoediting/VEProcess'
import VEPortfolio    from '../components/videoediting/VEPortfolio'
import VETestimonials from '../components/videoediting/VETestimonials'
import VECTA          from '../components/videoediting/VECTA'
import VEFAQ          from '../components/videoediting/VEFAQ'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which company offers the best video editing services in Thanjavur?',
      acceptedAnswer: { '@type': 'Answer', text: 'ARA Discover Marketing is one of the best video editing services in Thanjavur, offering YouTube editing, social media videos, corporate videos, branding videos, and drone video editing.' },
    },
    {
      '@type': 'Question',
      name: 'Do you offer Corporate Video Editing Services in Thanjavur?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, we are one of the corporate video editing companies in Thanjavur, providing professional corporate films, company profile videos, and promotional content.' },
    },
    {
      '@type': 'Question',
      name: 'Do you edit videos for YouTube channels?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, we offer YouTube video editing services in Thanjavur for video content creators and businesses looking to grow their channel audience.' },
    },
    {
      '@type': 'Question',
      name: 'Do you provide social media video editing?',
      acceptedAnswer: { '@type': 'Answer', text: 'We provide digital marketing video editing in Thanjavur including Instagram Reels, Facebook video ads, and short-form viral content.' },
    },
    {
      '@type': 'Question',
      name: 'What makes your video editing services different?',
      acceptedAnswer: { '@type': 'Answer', text: 'We combine cinematic storytelling, AI-powered marketing strategy, creative expertise, and platform-optimised formats to deliver high-performing video content.' },
    },
  ],
}

export default function VideoEditingPage() {
  useReveal()
  useSEO({
    title:       'Best Video Editing Services in Thanjavur | ARA Discover Marketing',
    description: 'ARA Discover Marketing is a professional video editing company in Thanjavur offering drone, corporate, branding & YouTube video editing services.',
    keywords:    'best video editing services in thanjavur, business video editing services in thanjavur, corporate video editing companies in thanjavur, digital marketing video editing in thanjavur, drone video editing in thanjavur, online youtube video editing in thanjavur, videography and editing in thanjavur, Branding Videos editing in thanjavur',
    canonical:   'https://ara-tech-organization.github.io/ARA-Marketing/services/video-editing',
    schema,
  })

  return (
    <>
      <Navbar />
      <main className="page-transition">
        <VEHero />
        <VEIntro />
        <VEWhyUs />
        <VEServices />
        <VEProcess />
        <VEPortfolio />
        <VETestimonials />
        <VECTA />
        <VEFAQ />
      </main>
      <Footer />
    </>
  )
}
