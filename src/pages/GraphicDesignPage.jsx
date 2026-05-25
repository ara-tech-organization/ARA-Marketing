import useReveal         from '../hooks/useReveal'
import useSEO            from '../hooks/useSEO'
import Navbar            from '../components/home/Navbar'
import Footer            from '../components/home/Footer'
import GDHero            from '../components/graphicdesign/GDHero'
import GDIntro           from '../components/graphicdesign/GDIntro'
import GDWhyUs           from '../components/graphicdesign/GDWhyUs'
import GDServices        from '../components/graphicdesign/GDServices'
import GDStats           from '../components/graphicdesign/GDStats'
import GDProcess         from '../components/graphicdesign/GDProcess'
import GDPortfolio       from '../components/graphicdesign/GDPortfolio'
import GDTestimonials    from '../components/graphicdesign/GDTestimonials'
import GDFAQ             from '../components/graphicdesign/GDFAQ'
import GDCTA             from '../components/graphicdesign/GDCTA'

const gdSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://ara-tech-organization.github.io/ARA-Marketing/services/graphic-design',
      name: 'Best Graphic Design Company in Thanjavur',
      description:
        'Ara Discover Marketing is the Best Graphic Design Company in Thanjavur, offering creative, high-quality design services including logo design, brochure design, flyer design, social media creatives, business card design and complete brand identity solutions.',
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
      serviceType: 'Graphic Design',
      areaServed: 'Thanjavur',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Graphic Design Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Logo Design & Brand Identity Creation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Banner & Advertisement Design in Thanjavur' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brochure & Pamphlet Design in Thanjavur' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Card & Visiting Card Design in Thanjavur' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Post Design in Thanjavur' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Flyer & Poster Design in Thanjavur' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Letterhead Design & Corporate Stationery' } },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the best graphic design company in Thanjavur?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ara Discover Marketing is the best graphic design company in Thanjavur which provides logo design, brochure design, social media creatives, and complete branding solutions.',
          },
        },
        {
          '@type': 'Question',
          name: 'What services are included in graphic design?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our graphic design includes logo design, brochure design, flyer design, poster design, business card design, social media creative design and advertisement design.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer brochure and flyer designing services?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we provide the best brochure design in Thanjavur and best business flyer design in Thanjavur for marketing and promotional purposes.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is branding important to businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Branding helps businesses to be recognisable, trusted and loyal by customers through a consistent visual identity and professional design.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are you a social media creative designer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we make good social media content, ads and campaign images to improve engagement and brand visibility.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why choose Ara Discover Marketing for graphic design services?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our creativity, industry expertise, innovative design approach, and consistent reputation as one of the top graphic design companies in Thanjavur make us a reliable branding partner.',
          },
        },
      ],
    },
  ],
}

export default function GraphicDesignPage() {
  useReveal()
  useSEO({
    title: 'Best Graphic Design Company in Thanjavur | Ara Discover Marketing',
    description:
      'Ara Discover Marketing is the Best Graphic Design Company in Thanjavur, offering creative, high-quality design services with expert solutions and fast delivery.',
    keywords:
      'best graphic design service in thanjavur, top graphic design agencies in thanjavur, top graphic design companies in thanjavur, best graphic design company in thanjavur, best brochure design in thanjavur, best advertisement design in thanjavur, best graphic design studios in thanjavur, best professional logo design in thanjavur, best business flyer design in thanjavur, leading graphic design companies in thanjavur, best graphic design agencies in thanjavur',
    canonical: 'https://ara-tech-organization.github.io/ARA-Marketing/services/graphic-design',
    ogImage:
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&h=630&fit=crop&auto=format&q=80',
    schema: gdSchema,
  })

  return (
    <>
      <Navbar />
      <main>
        <GDHero />
        <GDIntro />
        <GDWhyUs />
        <GDServices />
        <GDStats />
        <GDProcess />
        <GDPortfolio />
        <GDTestimonials />
        <GDFAQ />
        <GDCTA />
      </main>
      <Footer />
    </>
  )
}
