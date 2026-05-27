import { useState } from 'react'
import { HelpCircle, ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Why is Ara Discover Marketing the trusted web application development company in Thanjavur?',
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
    q: 'Do you build eCommerce web applications?',
    a: 'Yes, we are a trustworthy eCommerce application development company in Thanjavur. We offer e-commerce solutions that are AI-driven, secure, scalable, and feature-rich — from inventory management to payment gateway integration.',
  },
  {
    q: 'Which types of industries do you serve?',
    a: 'We serve various sectors, including eCommerce, healthcare, education, finance, logistics, and more. Our team has experience building web applications across diverse domains and business sizes.',
  },
  {
    q: 'Do you provide post-launch support?',
    a: 'Yes, our dedicated web app team ensures continuous maintenance, performance monitoring, and regular updates for all website application development services in Thanjavur. We remain your long-term technology partner.',
  },
]

export default function WAFAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-[820px] mx-auto px-4 sm:px-6 lg:px-7">

        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-5"
            style={{ background: 'rgba(79,70,229,0.08)', color: '#4f46e5', border: '1px solid rgba(79,70,229,0.18)' }}>
            <HelpCircle size={10} /> Frequently Asked Questions
          </span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-bold tracking-tight text-slate-900 mb-4">
            Common{' '}
            <span style={{ background: 'linear-gradient(135deg,#4f46e5,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Questions
            </span>
          </h2>
          <p className="text-[14px] text-slate-500 max-w-[420px] mx-auto leading-relaxed">
            Everything you need to know about our web application development services in Thanjavur.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className="rounded-2xl overflow-hidden transition-all duration-300 reveal"
                style={{
                  border: isOpen ? '1.5px solid rgba(79,70,229,0.4)' : '1.5px solid #e0e7ff',
                  boxShadow: isOpen ? '0 8px 30px rgba(79,70,229,0.10)' : 'none',
                  transitionDelay: `${i * 40}ms`,
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left transition-colors duration-200"
                  style={{ background: isOpen ? '#f0f0ff' : '#f8fafc' }}
                >
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-black transition-all duration-300"
                    style={{
                      background: isOpen ? 'linear-gradient(135deg,#4f46e5,#7c3aed)' : 'rgba(79,70,229,0.10)',
                      color: isOpen ? 'white' : '#4f46e5',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1 text-[14px] font-semibold text-slate-800 leading-snug">{q}</span>
                  <ChevronDown
                    size={17}
                    className="flex-shrink-0 transition-transform duration-300"
                    style={{
                      color: '#4f46e5',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </button>

                <div
                  className="overflow-hidden transition-all duration-400"
                  style={{ maxHeight: isOpen ? '400px' : '0px' }}
                >
                  <div className="px-5 sm:px-6 py-4 sm:py-5" style={{ borderTop: '1px solid #e0e7ff' }}>
                    <p className="text-[13.5px] text-slate-600 leading-relaxed pl-11">{a}</p>
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
