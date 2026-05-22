import Navbar       from '../home/Navbar'
import Hero         from '../home/Hero'
import StatsBand    from '../home/StatsBand'
import Services     from '../home/Services'
import WhyUs        from '../home/WhyUs'
import Process      from '../home/Process'
import Portfolio    from '../home/Portfolio'
import Industries   from '../home/Industries'
import Tools        from '../home/Tools'
import Testimonials from '../home/Testimonials'
import Assurance    from '../home/Assurance'
import Blog         from '../home/Blog'
import CTA          from '../home/CTA'
import FAQ          from '../home/FAQ'
import Footer       from '../home/Footer'

export default function Home() {
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
