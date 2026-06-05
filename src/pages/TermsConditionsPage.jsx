import Navbar  from '../components/home/Navbar'
import Footer  from '../components/home/Footer'
import TermsConditionsContent from '../components/legal/TermsConditionsContent'
import useSEO    from '../hooks/useSEO'
import useReveal from '../hooks/useReveal'

export default function TermsConditionsPage() {
  useReveal()
  useSEO({
    title: 'Terms & Conditions | ARA Discover Marketing',
    description: 'Read the Terms and Conditions of ARA Discover Marketing. Understand the rules governing your use of our services and website.',
    canonical: 'https://ara-tech-organization.github.io/ARA-Marketing/terms-and-conditions',
  })

  return (
    <>
      <Navbar />
      <main className="page-transition">
        <TermsConditionsContent />
      </main>
      <Footer />
    </>
  )
}
