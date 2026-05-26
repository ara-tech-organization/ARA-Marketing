import { useState } from 'react'
import { HelpCircle, ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Which company offers the best SEO services in Thanjavur?',
    a: 'Ara Discover Marketing is regarded as one of the best SEO companies in Thanjavur, providing businesses with on-page SEO, off-page SEO, technical SEO, local SEO, and content-driven optimization strategies.',
  },
  {
    q: 'What are the benefits of hiring an SEO company in Thanjavur?',
    a: 'A professional SEO company helps you to get better online visibility on the search engines, boosts organic traffic, generates highly qualified leads, and helps businesses achieve long-term growth online.',
  },
  {
    q: 'Are you giving SEO services for small businesses in Thanjavur?',
    a: 'Yes, we offer customized SEO services for small businesses in Thanjavur to help startups and local businesses improve local visibility, rankings, and customer engagement.',
  },
  {
    q: "What's included in your SEO optimization services?",
    a: 'Our SEO services include keyword research, on-page optimization, technical SEO, backlink building, local SEO, content optimization, and performance tracking.',
  },
  {
    q: 'Do you offer international SEO services?',
    a: 'Yes, we offer international SEO services to help businesses target global markets through multilingual SEO, international SEO strategies, and location-based optimization (Generic Engine Optimization).',
  },
  {
    q: 'Why is Ara Discover Marketing the best SEO agency in Thanjavur?',
    a: 'As one of the top SEO companies in Thanjavur, we offer our clients ethical optimization practices, clear reporting, and measurable ranking results, all powered by our AI-based SEO strategies.',
  },
]

function AccordionItem({ faq, index, active, setActive }) {
  const isOpen = active === index
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        border: isOpen ? '1.5px solid #93c5fd' : '1.5px solid #e2e8f0',
        boxShadow: isOpen ? '0 8px 32px rgba(37,99,235,0.10)' : '0 2px 8px rgba(0,0,0,0.04)',
      }}
    >
      <button
        type="button"
        onClick={() => setActive(isOpen ? -1 : index)}
        className="w-full flex items-start gap-3 px-5 py-4 text-left bg-white
          transition-colors duration-200 hover:bg-slate-50/60"
      >
        <span
          className="flex-shrink-0 text-[11px] font-black w-7 h-7 rounded-lg flex items-center
            justify-center transition-all duration-300"
          style={isOpen
            ? { background: '#2563eb', color: 'white' }
            : { background: '#dbeafe', color: '#2563eb' }
          }
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <span
          className="flex-1 text-[13px] font-semibold leading-snug pt-0.5 transition-colors duration-200"
          style={{ color: isOpen ? '#1e40af' : '#334155' }}
        >
          {faq.q}
        </span>
        <ChevronDown
          size={16}
          className="flex-shrink-0 mt-0.5 transition-transform duration-300"
          style={{
            color: isOpen ? '#2563eb' : '#94a3b8',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 bg-white">
          <div className="h-px mb-3.5"
            style={{ background: 'linear-gradient(90deg, #2563eb50, transparent)' }} />
          <p className="text-[13px] text-slate-600 leading-[1.85] pl-10">{faq.a}</p>
        </div>
      )}
    </div>
  )
}

export default function SEOFAQ() {
  const [active, setActive] = useState(-1)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-7">

        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
            <HelpCircle size={11} /> FAQs
          </span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Frequently Asked{' '}
            <span className="text-gradient-blue">Questions</span>
          </h2>
          <p className="text-[15px] text-slate-500 max-w-xl mx-auto">
            Everything you need to know about our SEO services in Thanjavur.
          </p>
        </div>

        {/* 3 + 3 two-column accordion */}
        <div className="reveal flex flex-col lg:flex-row gap-4">

          {/* Left column: FAQs 1–3 */}
          <div className="flex-1 flex flex-col gap-3">
            {faqs.slice(0, 3).map((faq, i) => (
              <AccordionItem key={i} faq={faq} index={i} active={active} setActive={setActive} />
            ))}
          </div>

          {/* Right column: FAQs 4–6 */}
          <div className="flex-1 flex flex-col gap-3">
            {faqs.slice(3).map((faq, i) => (
              <AccordionItem key={i + 3} faq={faq} index={i + 3} active={active} setActive={setActive} />
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
