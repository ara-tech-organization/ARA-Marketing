import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: 'Why is ARA Discover Marketing the Top Enterprise Web Development Agency in Thanjavur?',
    a: 'We incorporate AI integration, enterprise-level security, and a client-centric approach to build high-performing, scalable websites for large businesses. Our proven track record across finance, healthcare, retail, logistics, and education sectors makes us the most trusted enterprise web development agency in Thanjavur.',
  },
  {
    q: 'Do you provide enterprise eCommerce development in Thanjavur?',
    a: 'Yes, we have a dedicated web development team that provides enterprise eCommerce development in Thanjavur, developing secure, scalable, and feature-rich online stores for enterprises. Our solutions include multi-currency support, ERP/CRM integration, and high-volume inventory management.',
  },
  {
    q: 'Do you build enterprise websites on WordPress?',
    a: 'Yes. We offer enterprise WordPress development services in Thanjavur for easy content management and smooth functioning. Our WordPress solutions include multi-user editorial workflows, custom plugin development, and headless WordPress architectures for maximum performance.',
  },
  {
    q: 'Who should invest in an enterprise website?',
    a: 'Large-scale businesses, corporations, and enterprises looking for powerful, secure, and AI-driven solutions benefit most from professional enterprise websites. This includes businesses expanding online, companies needing complex portal solutions, and enterprises integrating AI for analytics and business intelligence.',
  },
  {
    q: 'What industries do you serve for enterprise web development?',
    a: 'We serve multiple businesses, including finance, healthcare, retail, logistics, education, and global enterprises requiring complex web solutions. Each project receives an industry-specific approach with tailored architecture, compliance standards, and user experience design.',
  },
  {
    q: 'Do you provide post-launch support for enterprise websites?',
    a: 'Yes, our enterprise web development services in Thanjavur include continuous monitoring, maintenance, and updates to assure optimal performance. We offer dedicated support packages with SLA-backed response times, security patching, performance optimisation, and feature enhancements.',
  },
]

export default function EWFAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="relative py-12 sm:py-16 lg:py-16 overflow-hidden bg-white">

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.04) 1.5px, transparent 1.5px)', backgroundSize: '34px 34px' }} />

      <div className="relative max-w-[760px] mx-auto px-4 sm:px-6 md:px-8">

        {/* â”€â”€ Header â”€â”€ */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-14 reveal">
          <span className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-4 sm:mb-5 text-blue-600 bg-blue-50"
            style={{ border: '1px solid rgba(37,99,235,0.15)' }}>
            <HelpCircle size={9} /> Frequently Asked Questions
          </span>
          <h2 className="text-[clamp(19px,3.6vw,41px)] font-bold text-slate-900 leading-[1.10] tracking-tight mb-3 sm:mb-4">
            Common Questions{' '}
            <span style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Answered
            </span>
          </h2>
          <p className="text-[12.5px] sm:text-[14px] lg:text-[15px] text-slate-500 leading-[1.85] px-2 sm:px-0">
            Everything you need to know about enterprise website development with ARA Discover Marketing.
          </p>
        </div>

        {/* â”€â”€ Accordion â”€â”€ */}
        <div className="reveal space-y-2.5 sm:space-y-3">
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i
            return (
              <div key={i}
                className="rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  border: isOpen ? '1.5px solid rgba(37,99,235,0.30)' : '1.5px solid #e2e8f0',
                  boxShadow: isOpen ? '0 6px 24px rgba(37,99,235,0.10)' : '0 2px 8px rgba(0,0,0,0.04)',
                }}>

                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-3 sm:gap-4 px-4 sm:px-5 lg:px-6 py-3.5 sm:py-4 sm:py-5 text-left transition-colors duration-200"
                  style={{ background: isOpen ? '#f0f7ff' : '#ffffff' }}>
                  <span className="text-[12.5px] sm:text-[13.5px] lg:text-[14.5px] font-semibold text-slate-800 leading-snug text-left">{q}</span>
                  <span className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: isOpen ? 'linear-gradient(135deg,#2563eb,#7c3aed)' : '#f1f5f9',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}>
                    <ChevronDown size={13} style={{ color: isOpen ? '#ffffff' : '#94a3b8' }} />
                  </span>
                </button>

                <div style={{
                  maxHeight: isOpen ? '400px' : '0px',
                  overflow: 'hidden',
                  transition: 'max-height 0.38s cubic-bezier(0.4,0,0.2,1)',
                }}>
                  <p className="px-4 sm:px-5 lg:px-6 pb-4 sm:pb-5 lg:pb-6 text-[12px] sm:text-[13px] lg:text-[14px] text-slate-500 leading-[1.85]">
                    {a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

