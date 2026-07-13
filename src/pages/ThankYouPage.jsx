import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight, Home, Phone, Mail, Clock3, Sparkles } from 'lucide-react'
import Navbar  from '../components/home/Navbar'
import Footer  from '../components/home/Footer'
import useSEO    from '../hooks/useSEO'
import useReveal from '../hooks/useReveal'

const nextSteps = [
  { icon: Clock3, title: 'We review your message', sub: 'Our team reads every submission within a few hours' },
  { icon: Phone,  title: 'A specialist reaches out', sub: 'By phone or email, whichever you prefer' },
  { icon: Sparkles, title: 'We map your growth plan', sub: 'A tailored strategy for your business goals' },
]

export default function ThankYouPage() {
  useReveal()
  useSEO({
    title: 'Thank You | ARA Discover Marketing',
    description: 'Thank you for reaching out to ARA Discover Marketing. Our team will get back to you within 24 hours.',
    canonical: 'https://discovermarketing.co/thank-you',
  })

  return (
    <>
      <Navbar />
      <main className="page-transition">
        <section className="relative overflow-hidden pt-[72px]"
          style={{ background: 'linear-gradient(160deg,#f0f7ff 0%,#eff6ff 55%,#e0f2fe 100%)' }}>

          {/* Dot grid */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: 'var(--brand-gradient-dots)', backgroundSize: '36px 36px' }} />
          {/* Orbs */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: 'var(--brand-gradient-glow)' }} />
          <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full pointer-events-none"
            style={{ background: 'var(--brand-gradient-glow)' }} />
          <div className="absolute top-24 left-[10%] w-10 h-10 rounded-full border border-blue-300/25 pointer-events-none hidden sm:block" />
          <div className="absolute bottom-24 right-[12%] w-6 h-6 rounded-full border border-violet-300/20 pointer-events-none hidden sm:block" />

          <div className="relative z-10 max-w-[720px] mx-auto px-4 sm:px-6 py-16 sm:py-20">

            {/* â”€â”€ Success card â”€â”€ */}
            <div className="reveal rounded-[28px] bg-white text-center px-6 sm:px-12 py-12 sm:py-16"
              style={{ border: '1px solid #bfdbfe', boxShadow: '0 24px 64px rgba(37,99,235,0.14), 0 4px 16px rgba(0,0,0,0.04)' }}>

              <div className="relative w-20 h-20 mx-auto mb-7">
                <div className="absolute inset-0 rounded-full animate-pulse-dot"
                  style={{ background: 'rgba(37,99,235,0.12)' }} />
                <div className="relative w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--brand-gradient)', boxShadow: '0 12px 32px rgba(37,99,235,0.35)' }}>
                  <CheckCircle2 size={38} style={{ color: '#fff' }} />
                </div>
              </div>

              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                text-[10.5px] font-bold uppercase tracking-widest mb-5 bg-white border border-violet-200 text-violet-600 shadow-sm">
                <Sparkles size={10} /> Message Received
              </span>

              <h1 className="font-bold leading-tight tracking-tight text-slate-900 mb-4"
                style={{ fontSize: 'clamp(26px,3.4vw,42px)' }}>
                Thank You for{' '}
                <span style={{
                  background: 'var(--brand-gradient-text)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>Reaching Out!</span>
              </h1>

              <p className="text-[15px] text-slate-500 leading-[1.9] max-w-[480px] mx-auto mb-10">
                Your message has been received. Our team at ARA Discover Marketing will get back to you within 24 hours to discuss how we can help grow your business.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 mb-11">
                <Link to="/"
                  className="btn-glow inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-[14px] text-white transition-all duration-300 hover:-translate-y-0.5"
                  style={{ boxShadow: '0 8px 32px rgba(37,99,235,0.28)' }}>
                  <Home size={15} /> Back to Home
                </Link>
                <Link to="/services/other-digital-marketing-services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-700 transition-all duration-300"
                  style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                  Explore Services <ArrowRight size={14} />
                </Link>
              </div>

              {/* â”€â”€ What happens next â”€â”€ */}
              <div className="rounded-2xl p-6 sm:p-7 text-left"
                style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0' }}>
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-700 mb-5 text-center">
                  What Happens Next
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {nextSteps.map(({ icon: Icon, title, sub }, i) => (
                    <div key={title} className="flex sm:flex-col items-start sm:items-center gap-3 sm:text-center">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(37,99,235,0.10)', border: '1.5px solid rgba(37,99,235,0.18)' }}>
                        <Icon size={16} style={{ color: '#2563eb' }} />
                      </div>
                      <div>
                        <p className="text-[12.5px] font-bold text-slate-800 leading-tight">
                          <span className="text-blue-500 mr-1">{i + 1}.</span>{title}
                        </p>
                        <p className="text-[11.5px] text-slate-400 mt-1 leading-snug">{sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* â”€â”€ Quick contact chips â”€â”€ */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
              <a href="tel:+918110025254"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-700 transition-all duration-300"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <Phone size={13} /> (+91) 81100 25254
              </a>
              <a href="mailto:aradiscovermarketing@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-700 transition-all duration-300"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <Mail size={13} /> aradiscovermarketing@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
