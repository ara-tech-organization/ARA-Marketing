import Navbar  from '../components/home/Navbar'
import Footer  from '../components/home/Footer'
import TermsConditionsContent from '../components/legal/TermsConditionsContent'
import useSEO  from '../hooks/useSEO'

export default function TermsConditionsPage() {
  useSEO({
    title: 'Terms & Conditions | ARA Discover Marketing',
    description: 'Read the Terms and Conditions of ARA Discover Marketing. Understand the rules governing your use of our services and website.',
    canonical: 'https://ara-tech-organization.github.io/ARA-Marketing/terms-and-conditions',
  })

  return (
    <>
      <Navbar />
      <main>
        <TermsConditionsContent />
      </main>
      <Footer />
    </>
  )
}
