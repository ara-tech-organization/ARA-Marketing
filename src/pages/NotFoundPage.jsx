import { Link } from 'react-router-dom'
import { Home, ArrowRight, Phone, SearchX } from 'lucide-react'
import Navbar  from '../components/home/Navbar'
import Footer  from '../components/home/Footer'
import useSEO    from '../hooks/useSEO'
import useReveal from '../hooks/useReveal'

export default function NotFoundPage() {
  useReveal()
  useSEO({
    title: '404 - Page Not Found | ARA Discover Marketing',
    description: 'The page you are looking for could not be found. Return to the ARA Discover Marketing homepage.',
    canonical: 'https://discovermarketing.co/404',
  })

  return (
    <>
      <Navbar />
      <main className="page-transition">
        <section className="relative overflow-hidden pt-[72px] min-h-[80vh] flex items-center"
          style={{ background: 'linear-gradient(160deg,#f0f7ff 0%,#eff6ff 55%,#e0f2fe 100%)' }}>

          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: 'var(--brand-gradient-dots)', backgroundSize: '36px 36px' }} />
          <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: 'var(--brand-gradient-glow)' }} />
          <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full pointer-events-none"
            style={{ background: 'var(--brand-gradient-glow)' }} />

          <div className="relative z-10 max-w-[720px] mx-auto px-4 sm:px-6 py-16 sm:py-20 w-full">
            <div className="reveal rounded-[28px] bg-white text-center px-6 sm:px-12 py-12 sm:py-16"
              style={{ border: '1px solid #bfdbfe', boxShadow: '0 24px 64px rgba(37,99,235,0.14), 0 4px 16px rgba(0,0,0,0.04)' }}>

              <div className="relative w-20 h-20 mx-auto mb-7">
                <div className="relative w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--brand-gradient)', boxShadow: '0 12px 32px rgba(37,99,235,0.35)' }}>
                  <SearchX size={34} style={{ color: '#fff' }} />
                </div>
              </div>

              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                text-[10.5px] font-bold uppercase tracking-widest mb-5 bg-white border border-violet-200 text-violet-600 shadow-sm">
                Error 404
              </span>

              <h1 className="font-bold leading-tight tracking-tight text-slate-900 mb-4"
                style={{ fontSize: 'clamp(26px,3.4vw,42px)' }}>
                Page Not{' '}
                <span style={{
                  background: 'var(--brand-gradient-text)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>Found</span>
              </h1>

              <p className="text-[15px] text-slate-500 leading-[1.9] max-w-[480px] mx-auto mb-10">
                The page you're looking for doesn't exist or may have been moved. Let's get you back on track.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/"
                  className="btn-glow inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-[14px] text-white transition-all duration-300 hover:-translate-y-0.5"
                  style={{ boxShadow: '0 8px 32px rgba(37,99,235,0.28)' }}>
                  <Home size={15} /> Back to Home
                </Link>
                <Link to="/contact-us"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-700 transition-all duration-300"
                  style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                  Contact Us <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
              <a href="tel:+918110025254"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-700 transition-all duration-300"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <Phone size={13} /> (+91) 81100 25254
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
