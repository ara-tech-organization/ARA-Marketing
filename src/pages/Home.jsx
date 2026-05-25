import useReveal     from '../hooks/useReveal'
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

export default function Home() {
  useReveal()
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
