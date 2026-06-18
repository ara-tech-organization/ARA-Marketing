import { useState } from 'react'
import { HelpCircle, ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What is a Static Web Page?',
    a: 'A static website is a website developed in HTML and CSS that displays the same content to every visitor. It is fast, safe, and easy to host — making it an ideal choice for businesses that need a reliable, low-cost online presence.',
  },
  {
    q: 'Why should I select a static website for my business?',
    a: 'Static websites are faster, cheaper, and more secure than dynamic websites. They require no server-side processing, no database, and minimal maintenance — making them perfect for small and medium businesses that want maximum performance with minimal investment.',
  },
  {
    q: 'How long does it take to develop a static website?',
    a: 'Depending on your requirements, a basic static website can be built in 3–7 days with full design and deployment. More complex multi-page sites or custom animations may take up to 2 weeks. We always communicate timelines clearly before we begin.',
  },
  {
    q: 'Can a static site rank on Google?',
    a: 'Yes, static websites are highly SEO-friendly due to their fast loading speed and clean code structure. With proper keyword research, meta tags, structured data, and on-page optimization, static sites frequently rank on the first page of Google.',
  },
  {
    q: 'Do static sites need maintenance?',
    a: 'Static sites don\'t require databases or complex back-end systems, so there\'s minimal maintenance involved. Content updates are straightforward, there are no security patches to apply, and hosting costs remain very low over the long term.',
  },
  {
    q: 'Can I get a custom design for my static website?',
    a: 'Yes, absolutely. All our static websites are custom-designed from scratch to match your brand identity, color palette, and business goals. We don\'t use pre-made templates — every layout is crafted uniquely for your business.',
  },
]

function FAQItem({ faq, index, active, setActive }) {
  const isOpen = active === index

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        border: isOpen ? '1.5px solid rgba(8,145,178,0.5)' : '1.5px solid #e2e8f0',
        boxShadow: isOpen ? '0 8px 32px rgba(8,145,178,0.1)' : '0 2px 8px rgba(0,0,0,0.04)',
      }}
    >
      <button
        type="button"
        onClick={() => setActive(isOpen ? -1 : index)}
        className="w-full flex items-start gap-4 px-6 py-5 text-left bg-white transition-colors duration-200 hover:bg-slate-50/60"
      >
        {/* Number badge */}
        <span
          className="flex-shrink-0 text-[11px] font-black w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 mt-0.5"
          style={
            isOpen
              ? { background: 'linear-gradient(135deg, #0891b2, #2563eb)', color: 'white' }
              : { background: '#e0f2fe', color: '#0891b2' }
          }
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        <span
          className="flex-1 text-[14px] font-semibold leading-snug pt-0.5 transition-colors duration-200"
          style={{ color: isOpen ? '#0e7490' : '#334155' }}
        >
          {faq.q}
        </span>

        <ChevronDown
          size={17}
          className="flex-shrink-0 mt-0.5 transition-transform duration-300"
          style={{
            color: isOpen ? '#0891b2' : '#94a3b8',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>

      {isOpen && (
        <div className="px-6 pb-6 bg-white">
          <div
            className="h-px mb-4"
            style={{ background: 'linear-gradient(90deg, rgba(8,145,178,0.5), transparent)' }}
          />
          <p className="text-[13.5px] text-slate-600 leading-[1.85] pl-11">{faq.a}</p>
        </div>
      )}
    </div>
  )
}

export default function SWFAQ() {
  const [active, setActive] = useState(-1)

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(8,145,178,0.05) 0%, transparent 65%)' }}
      />

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(8,145,178,0.08)', color: '#0891b2', border: '1px solid rgba(8,145,178,0.2)' }}
          >
            <HelpCircle size={11} /> FAQs
          </span>
          <h2 className="text-[clamp(23px,2.7vw,39px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Frequently Asked{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #0891b2, #2563eb)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Questions
            </span>
          </h2>
          <p className="text-[15px] text-slate-500 max-w-xl mx-auto">
            Everything you need to know about our static website development services in Thanjavur.
          </p>
        </div>

        {/* Single column accordion */}
        <div className="reveal flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              active={active}
              setActive={setActive}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
