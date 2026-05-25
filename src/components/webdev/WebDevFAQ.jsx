import { useState } from 'react'
import { Layers, ChevronRight } from 'lucide-react'

const faqs = [
  {
    q: 'Which company provides the best web design and development services in Thanjavur?',
    a: 'Ara Discover Marketing is the best web design and development company in Thanjavur, providing custom websites, corporate websites and e-commerce solutions.',
  },
  {
    q: 'What are included services in website development?',
    a: 'Website development includes UI/UX design, frontend & backend development, SEO optimisation, mobile responsiveness and website maintenance.',
  },
  {
    q: 'Do you develop custom websites for business?',
    a: 'Yes, we are providing custom website development company in Thanjavur solutions according to business needs and functionality requirements.',
  },
  {
    q: 'Why is a professional website necessary for business?',
    a: 'A professional website increases brand credibility, enhances online visibility, generates leads and improves customer trust.',
  },
  {
    q: 'Do you provide SEO friendly website development?',
    a: 'Yes, all websites are built with SEO optimised structure for better Google rankings.',
  },
  {
    q: 'Why choose Ara Discover Marketing for web development services?',
    a: 'Our expertise in UI/UX design, AI-enhanced technologies, and experience as a best website design and development company in Thanjavur assures long-term and high-quality digital solutions.',
  },
]

export default function WebDevFAQ() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-24" style={{ background: 'linear-gradient(180deg, #f8faff 0%, #ffffff 100%)' }}>
      <div className="max-w-[1200px] mx-auto px-7">

        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
            <Layers size={11} /> FAQs
          </span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[15px] text-slate-500 max-w-xl mx-auto">
            Everything you need to know about our website design and development services in Thanjavur.
          </p>
        </div>

        <div className="reveal grid lg:grid-cols-[42%_58%] gap-6 items-start">

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isActive = active === i
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className="w-full text-left flex items-start gap-3.5 rounded-2xl px-5 py-4
                    transition-all duration-300 cursor-pointer"
                  style={{
                    background: isActive ? '#eff6ff' : 'transparent',
                    border: isActive ? '1.5px solid #bfdbfe' : '1.5px solid transparent',
                    transform: isActive ? 'translateX(4px)' : 'translateX(0)',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.currentTarget.style.background = '#f8fbff'
                      e.currentTarget.style.borderColor = '#e2e8f0'
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.borderColor = 'transparent'
                    }
                  }}
                >
                  <span className="text-[11px] font-black flex-shrink-0 mt-0.5"
                    style={{ color: isActive ? '#2563eb' : '#cbd5e1', fontFamily: 'var(--font-poppins)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1 text-[13px] font-semibold leading-snug"
                    style={{ color: isActive ? '#1e40af' : '#334155' }}>
                    {faq.q}
                  </span>
                  <ChevronRight size={14} className="flex-shrink-0 mt-0.5 transition-transform duration-300"
                    style={{
                      color: isActive ? '#2563eb' : '#cbd5e1',
                      transform: isActive ? 'rotate(90deg)' : 'rotate(0deg)',
                    }} />
                </button>
              )
            })}
          </div>

          <div className="sticky top-24 bg-white rounded-3xl overflow-hidden"
            style={{ border: '1.5px solid #e2e8f0', boxShadow: '0 16px 56px rgba(37,99,235,0.08)' }}>
            <div className="h-1.5 w-full"
              style={{ background: 'linear-gradient(90deg, #1e40af, #2563eb, #3b82f6)' }} />
            <div className="p-8">
              <div className="flex items-start gap-5 mb-5">
                <span className="text-[64px] font-black leading-none select-none flex-shrink-0"
                  style={{ color: '#eff6ff', fontFamily: 'var(--font-poppins)', lineHeight: 0.85 }}>
                  {String(active + 1).padStart(2, '0')}
                </span>
                <h3 className="text-[15px] font-bold text-slate-800 leading-snug pt-1">
                  {faqs[active].q}
                </h3>
              </div>
              <div className="h-px mb-6"
                style={{ background: 'linear-gradient(90deg, #dbeafe 0%, transparent 70%)' }} />
              <p className="text-[14px] text-slate-500 leading-[1.9]">{faqs[active].a}</p>
              <div className="flex items-center gap-2 mt-8">
                {faqs.map((_, i) => (
                  <button key={i} type="button" onClick={() => setActive(i)}
                    className="rounded-full transition-all duration-300"
                    style={{ width: active === i ? 24 : 8, height: 8, background: active === i ? '#2563eb' : '#e2e8f0' }} />
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
