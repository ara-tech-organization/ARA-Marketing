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
      name: 'ARA Discover Marketing Graphic Design Services',
      description:
        'ARA Discover Marketing offers creative, high-quality design services including logo design, brochure design, flyer design, social media creatives, business card design and complete brand identity solutions in Thanjavur.',
      provider: {
        '@type': 'LocalBusiness',
        name: 'ARA Discover Marketing',
        url: 'https://ara-tech-organization.github.io/ARA-Marketing',
        telephone: '+91 98765 43210',
        email: 'aradiscovermarketing@gmail.com',
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
  ],
}

export default function GraphicDesignPage() {
  useReveal()
  useSEO({
    title: 'Best Graphic Design Company in Thanjavur | ARA Discover Marketing',
    description:
      'ARA Discover Marketing is the Best Graphic Design Company in Thanjavur, offering creative, high-quality design services with expert solutions and fast delivery.',
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
      <main className="page-transition">
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
