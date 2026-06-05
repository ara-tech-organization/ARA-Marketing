import Navbar  from '../components/home/Navbar'
import Footer  from '../components/home/Footer'
import PrivacyPolicyContent from '../components/legal/PrivacyPolicyContent'
import useSEO    from '../hooks/useSEO'
import useReveal from '../hooks/useReveal'

export default function PrivacyPolicyPage() {
  useReveal()
  useSEO({
    title: 'Privacy Policy | ARA Discover Marketing',
    description: 'Read the Privacy Policy of ARA Discover Marketing. Learn how we collect, use, and protect your personal data.',
    canonical: 'https://ara-tech-organization.github.io/ARA-Marketing/privacy-policy',
  })

  return (
    <>
      <Navbar />
      <main className="page-transition">
        <PrivacyPolicyContent />
      </main>
      <Footer />
    </>
  )
}
