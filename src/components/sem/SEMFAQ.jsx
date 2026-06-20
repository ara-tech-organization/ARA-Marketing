import { useState } from 'react'
import { HelpCircle, Plus, Minus } from 'lucide-react'

const faqs = [
  { q: 'What is the best Google Ads company in Thanjavur?',             a: 'ARA Discover Marketing is one of the best search engine marketing (SEM) agencies in Thanjavur, offering PPC Management, Google Search Ads, Display Ads, YouTube Ads, and Shopping Ads services.',                                                                                    color: '#2563eb' },
  { q: 'What are the benefits of Google Ads for Businesses?',           a: 'Google Ads provides companies with the ability to drive instant traffic, create more leads, improve their online visibility, and reach potential customers based on keywords, interests, and demographics.',                                                                              color: '#7c3aed' },
  { q: 'Do you offer PPC Advertising Services in Thanjavur?',           a: 'Yes, we offer professional ppc ads service in Thanjavur, such as Google Search Ads, remarketing campaigns, display advertising, and conversion-focused PPC management.',                                                                                                                  color: '#0891b2' },
  { q: 'What kind of Google Ads campaigns do you work on?',             a: 'We manage Search Ads, Display Ads, YouTube Ads, Shopping Ads, remarketing campaigns, and advertising campaigns for local business goals.',                                                                                                                                                color: '#059669' },
  { q: 'What are the benefits of YouTube advertising for companies?',   a: 'YouTube Ads help in increasing brand awareness, customer engagement, and lead generation through targeted video campaigns and audience-based advertising strategies.',                                                                                                                     color: '#dc2626' },
  { q: 'Why choose ARA Discover Marketing for Google Ads?',             a: 'We are a trusted search engine marketing service provider in Thanjavur with AI-powered campaign tactics, transparent reporting, audience targeting prowess, and ROI-centric optimisation.',                                                                                               color: '#d97706' },
]

export default function SEMFAQ() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[860px] mx-auto px-4 sm:px-6 md:px-7">

        {/* â”€â”€ Header â”€â”€ */}
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
            <HelpCircle size={11} /> FAQs
          </span>
          <h2 className="text-[clamp(25px,3.1vw,45px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
            Frequently Asked Questions{' '}
            <span className="text-gradient-blue">(FAQs)</span>
          </h2>
          <p className="text-[15px] text-slate-500 max-w-xl mx-auto">
            Everything you need to know about our Google Ads and PPC services in Thanjavur.
          </p>
        </div>

        {/* â”€â”€ Accordion â”€â”€ */}
        <div className="reveal flex flex-col gap-3">
          {faqs.map(({ q, a, color }, i) => {
            const isOpen = active === i
            return (
              <div key={i}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  border: isOpen ? `1.5px solid ${color}30` : '1.5px solid #e8edf5',
                  boxShadow: isOpen ? `0 8px 32px ${color}10` : '0 2px 8px rgba(0,0,0,0.03)',
                }}>

                <button
                  type="button"
                  onClick={() => setActive(isOpen ? -1 : i)}
                  className="w-full flex items-center gap-4 px-6 py-5 text-left bg-white
                    transition-colors duration-200 hover:bg-slate-50/50"
                >
                  {/* Colored number badge */}
                  <span className="flex-shrink-0 text-[11px] font-black w-8 h-8 rounded-xl
                    flex items-center justify-center transition-all duration-300"
                    style={isOpen
                      ? { background: color, color: 'white', boxShadow: `0 4px 14px ${color}35` }
                      : { background: color + '12', color }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <span className="flex-1 text-[14px] font-semibold leading-snug transition-colors duration-200"
                    style={{ color: isOpen ? '#0f172a' : '#334155' }}>
                    {q}
                  </span>

                  {/* Plus / Minus */}
                  <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center
                    transition-all duration-300"
                    style={isOpen
                      ? { background: color, boxShadow: `0 4px 12px ${color}35` }
                      : { background: '#f1f5f9' }}>
                    {isOpen
                      ? <Minus size={13} className="text-white" />
                      : <Plus size={13} className="text-slate-500" />}
                  </div>
                </button>

                <div className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? 200 : 0 }}>
                  <div className="px-6 pb-6 bg-white">
                    <div className="h-px mb-4"
                      style={{ background: `linear-gradient(90deg,${color}40,transparent)` }} />
                    <p className="text-[13.5px] text-slate-600 leading-[1.85] pl-12">{a}</p>
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

