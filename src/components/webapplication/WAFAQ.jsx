import { useState } from 'react'
import { HelpCircle, ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Why is ARA Discover Marketing the trusted web application development company in Thanjavur?',
    a: 'We are a professional web application development agency in Thanjavur offering secure, scalable and AI-powered web solutions. Our experienced team, transparent process, and focus on measurable results make us the preferred choice for businesses across industries.',
  },
  {
    q: 'Can you create web and mobile applications together?',
    a: 'Yes, we are a web and mobile applications development company in Thanjavur that builds coordinated, cross-platform solutions. We ensure your web app and mobile app are fully synchronised for a consistent user experience across all devices.',
  },
  {
    q: 'Do you provide custom web app development services in Thanjavur?',
    a: 'Definitely. We offer custom web app development services in Thanjavur according to your unique business requirements. Every application is built from scratch with your specific goals, branding, and technical needs in mind.',
  },
  {
    q: 'Do you build eCommerce websites?',
    a: 'Yes, we are a trustworthy e-commerce application development company in Thanjavur, and we offer e-commerce solutions that are AI-driven, secure, scalable and feature-rich.',
  },
  {
    q: 'Which types of industries do you serve?',
    a: 'We serve various sectors including eCommerce, healthcare, education, finance, logistics, and more. Our team has experience building web applications across diverse domains and business sizes throughout Thanjavur.',
  },
  {
    q: 'Do you provide post-launch support?',
    a: 'Yes, our dedicated web app team ensures continuous maintenance, performance monitoring, and regular updates for all website application development services in Thanjavur. We remain your long-term technology partner.',
  },
]

export default function WAFAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section
      className="py-16 sm:py-20 lg:py-28"
      style={{ background: 'linear-gradient(180deg, #f0f7ff 0%, white 100%)' }}
    >
      <div className="max-w-[820px] mx-auto px-3 xs:px-4 sm:px-6 md:px-7">

        <div className="text-center mb-10 sm:mb-14 reveal">
          <span
            className="inline-flex items-center gap-2 px-3 xs:px-4 py-1.5 rounded-full text-[10px] xs:text-[11px] font-black uppercase tracking-widest mb-4"
            style={{ background: 'rgba(37,99,235,0.08)', color: '#2563eb', border: '1px solid rgba(37,99,235,0.18)' }}
          >
            <HelpCircle size={10} /> Frequently Asked Questions
          </span>
          <h2 className="text-[clamp(22px,3vw,40px)] font-bold tracking-tight text-slate-900 mb-3">
            Common{' '}
            <span style={{ background: 'linear-gradient(135deg,#2563eb,#0891b2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Questions
            </span>
          </h2>
          <p className="text-[13px] xs:text-[14px] text-slate-500 max-w-[420px] mx-auto leading-relaxed px-2">
            Everything you need to know about our web application development services in Thanjavur.
          </p>
        </div>

        <div className="flex flex-col gap-2.5 xs:gap-3">
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className="rounded-2xl overflow-hidden transition-all duration-300 reveal"
                style={{
                  border: isOpen ? '1.5px solid rgba(37,99,235,0.35)' : '1.5px solid #e2e8f0',
                  boxShadow: isOpen ? '0 8px 28px rgba(37,99,235,0.10)' : 'none',
                  transitionDelay: `${i * 40}ms`,
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-3 xs:gap-4 px-4 xs:px-5 sm:px-6 py-3.5 xs:py-4 sm:py-5 text-left transition-colors duration-200"
                  style={{ background: isOpen ? '#eff6ff' : '#f8fafc' }}
                >
                  <span
                    className="flex-shrink-0 w-6 xs:w-7 h-6 xs:h-7 rounded-lg flex items-center justify-center text-[10px] xs:text-[11px] font-black transition-all duration-300"
                    style={{
                      background: isOpen ? 'linear-gradient(135deg,#2563eb,#0891b2)' : 'rgba(37,99,235,0.10)',
                      color: isOpen ? 'white' : '#2563eb',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1 text-[13px] xs:text-[14px] font-semibold text-slate-800 leading-snug text-left">
                    {q}
                  </span>
                  <ChevronDown
                    size={15}
                    className="flex-shrink-0 transition-transform duration-300"
                    style={{
                      color: '#2563eb',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </button>

                <div
                  className="overflow-hidden transition-all duration-400"
                  style={{ maxHeight: isOpen ? '400px' : '0px' }}
                >
                  <div
                    className="px-4 xs:px-5 sm:px-6 py-4 xs:py-5"
                    style={{ borderTop: '1px solid #dbeafe' }}
                  >
                    <p className="text-[12.5px] xs:text-[13.5px] text-slate-600 leading-relaxed pl-9 xs:pl-11">{a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
