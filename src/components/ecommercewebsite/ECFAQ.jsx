import { useState, useEffect, useRef } from 'react'
import { HelpCircle, MessageSquare, ArrowRight, ShoppingCart, ChevronRight } from 'lucide-react'

const C1 = '#2563eb'
const C2 = '#0ea5e9'

const faqs = [
  {
    q: 'What is E-Commerce Website Development?',
    a: 'E-commerce website development is the process of building online stores that enable businesses to sell products or services digitally. It includes designing the store, configuring the product catalogue, integrating payment gateways, and optimising the platform for conversions and search engine visibility.',
    tag: 'General',
  },
  {
    q: 'What is the most effective platform for e-commerce sites?',
    a: 'Shopify, WooCommerce, and Magento are three of the most popular and effective e-commerce platforms. Shopify is ideal for fast-growing retail brands, WooCommerce for WordPress-based stores, and Magento for enterprise-scale operations requiring advanced customisation and multi-store management.',
    tag: 'Platform',
  },
  {
    q: 'What is the estimated time to develop an e-commerce website?',
    a: 'Typically 2–8 weeks, depending on features, design complexity, product catalogue size, and platform choice. A basic Shopify store can go live in 2 weeks, while a custom multi-vendor marketplace with complex integrations may take 6–8 weeks or more.',
    tag: 'Timeline',
  },
  {
    q: 'Can I manage my e-commerce website myself?',
    a: 'Yes — all e-commerce websites we build come with an intuitive admin panel where you can manage products, update stock, process orders, apply discounts, and track revenue without any technical knowledge. We also provide a training session post-launch.',
    tag: 'Management',
  },
  {
    q: 'Is an e-commerce website SEO-friendly?',
    a: 'Yes. When properly developed, e-commerce websites are fully optimised for search engines. We implement clean URL structures, schema markup, meta tags, sitemap generation, Core Web Vitals optimisation, and mobile responsiveness to ensure top rankings on Google.',
    tag: 'SEO',
  },
  {
    q: 'Do you provide custom e-commerce solutions?',
    a: 'Yes, we offer fully custom e-commerce website development services tailored to your unique business requirements. Whether you need a multi-vendor marketplace, subscription commerce, B2B ordering portal, or a brand-specific shopping experience, we build it from the ground up.',
    tag: 'Custom',
  },
]

export default function ECFAQ() {
  const [active, setActive] = useState(0)
  const timerRef = useRef(null)

  const startTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % faqs.length)
    }, 4000)
  }

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [])

  const pick = (i) => { setActive(i); startTimer() }

  const faq = faqs[active]
  const accent = active % 2 === 0 ? C1 : C2

  return (
    <section className="relative py-16 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #f0f7ff 0%, #eff6ff 50%, #e0f2fe 100%)' }}>

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.06) 1.5px,transparent 1.5px)', backgroundSize: '34px 34px' }} />
      <div className="absolute -top-20 -left-20 w-[360px] h-[360px] rounded-full border border-blue-200/30 pointer-events-none animate-[spin_36s_linear_infinite]" />
      <div className="absolute -bottom-16 -right-16 w-[300px] h-[300px] rounded-full border border-sky-200/25 pointer-events-none animate-[spin_28s_linear_infinite_reverse]" />
      <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(147,197,253,0.16) 0%,transparent 65%)' }} />

      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6 text-blue-600 bg-white/80 shadow-sm"
            style={{ border: '1px solid rgba(37,99,235,0.18)' }}>
            <HelpCircle size={11} /> Frequently Asked Questions
          </span>
          <h2 className="text-[clamp(25px,3.1vw,45px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
            Frequently Asked{' '}
            <span style={{ color: '#2563eb' }}>
              Questions
            </span>
          </h2>
          <p className="text-[15px] text-slate-500 leading-[1.85] max-w-[500px] mx-auto">
            Answers to the most common questions about our e-commerce website development services in Thanjavur.
          </p>
        </div>

        {/* ── Main panel ── */}
        <div className="reveal rounded-3xl overflow-hidden mb-8"
          style={{ background: 'white', border: '1.5px solid #dbeafe', boxShadow: '0 20px 70px rgba(37,99,235,0.10)' }}>
          <div className="flex flex-col md:flex-row min-h-[420px]">

            {/* Left: question list */}
            <div className="md:w-[42%] flex-shrink-0 border-b md:border-b-0 md:border-r border-slate-100">
              {/* Top label */}
              <div className="px-6 py-4 border-b border-slate-100"
                style={{ background: 'linear-gradient(135deg,#f8fbff,#eff6ff)' }}>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Select a Question
                </p>
              </div>

              {faqs.map(({ q, tag }, i) => {
                const isActive = active === i
                const color = i % 2 === 0 ? C1 : C2
                return (
                  <button key={i} type="button" onClick={() => pick(i)}
                    className="w-full flex items-center gap-4 px-5 py-4 text-left transition-all duration-250 border-b border-slate-50 last:border-b-0"
                    style={{
                      background: isActive ? `linear-gradient(90deg, ${color}0d, ${color}05)` : 'transparent',
                      borderLeft: isActive ? `3px solid ${color}` : '3px solid transparent',
                    }}
                    onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = '#f8fbff' }}
                    onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent' }}>

                    {/* Number */}
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-black transition-all duration-250"
                      style={isActive
                        ? { background: `linear-gradient(135deg,${color},${color}bb)`, color: 'white', boxShadow: `0 4px 10px ${color}30` }
                        : { background: color + '12', color }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <div className="flex-1 min-w-0">
                      <span className="block text-[9px] font-black uppercase tracking-widest mb-0.5"
                        style={{ color: isActive ? color : '#94a3b8' }}>{tag}</span>
                      <p className="text-[12.5px] font-semibold text-slate-700 leading-snug line-clamp-2">{q}</p>
                    </div>

                    <ChevronRight size={13} className="flex-shrink-0 transition-transform duration-250"
                      style={{ color: isActive ? color : '#cbd5e1', transform: isActive ? 'translateX(2px)' : 'none' }} />
                  </button>
                )
              })}
            </div>

            {/* Right: answer panel */}
            <div key={active} className="flex-1 flex flex-col relative overflow-hidden">

              {/* Decorative large number */}
              <span className="absolute -bottom-2 -right-2 text-[120px] font-black leading-none select-none pointer-events-none"
                style={{ color: accent + '07' }}>
                {String(active + 1).padStart(2, '0')}
              </span>
              <div className="absolute top-4 right-4 w-24 h-24 rounded-full border pointer-events-none"
                style={{ borderColor: accent + '10' }} />
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full border pointer-events-none"
                style={{ borderColor: accent + '08' }} />

              {/* Answer header */}
              <div className="px-8 py-5 border-b border-slate-100 flex items-center gap-3"
                style={{ background: `linear-gradient(135deg, ${accent}08, transparent)` }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `linear-gradient(135deg,${accent},${accent}bb)`, boxShadow: `0 6px 16px ${accent}30` }}>
                  <span className="text-[11px] font-black text-white">Q</span>
                </div>
                <div>
                  <span className="block text-[9px] font-black uppercase tracking-widest" style={{ color: accent }}>{faq.tag}</span>
                  <span className="block text-[10px] text-slate-400 font-medium mt-0.5">
                    Question {String(active + 1).padStart(2,'0')} of {faqs.length}
                  </span>
                </div>

                {/* Progress dots */}
                <div className="ml-auto flex items-center gap-1.5">
                  {faqs.map((_, i) => (
                    <button key={i} type="button" onClick={() => pick(i)}
                      className="rounded-full transition-all duration-300"
                      style={{
                        width: active === i ? 20 : 6,
                        height: 6,
                        background: active === i
                          ? `linear-gradient(90deg,${accent},${accent}bb)`
                          : accent + '22',
                      }} />
                  ))}
                </div>
              </div>

              {/* Question text */}
              <div className="px-8 pt-6 pb-3">
                <h3 className="text-[15px] sm:text-[16px] font-bold text-slate-900 leading-snug">{faq.q}</h3>
              </div>

              {/* Divider */}
              <div className="mx-8 h-px" style={{ background: `linear-gradient(90deg,${accent}30,transparent)` }} />

              {/* Answer */}
              <div className="px-8 py-5 flex items-start gap-3 flex-1">
                <div className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center mt-0.5"
                  style={{ background: accent + '12', border: `1px solid ${accent}22` }}>
                  <span className="text-[10px] font-black" style={{ color: accent }}>A</span>
                </div>
                <p className="text-[14px] sm:text-[15px] text-slate-600 leading-[1.90] font-medium">{faq.a}</p>
              </div>

              {/* Nav buttons */}
              <div className="px-8 py-5 border-t border-slate-100 flex items-center gap-3 mt-auto">
                <button type="button" onClick={() => pick(Math.max(0, active - 1))}
                  disabled={active === 0}
                  className="px-5 py-2 rounded-xl text-[12px] font-bold transition-all duration-200"
                  style={{
                    background: active === 0 ? '#f8fafc' : accent + '10',
                    color: active === 0 ? '#cbd5e1' : accent,
                    border: `1px solid ${active === 0 ? '#f1f5f9' : accent + '25'}`,
                  }}>
                  Previous
                </button>
                <button type="button" onClick={() => pick(Math.min(faqs.length - 1, active + 1))}
                  disabled={active === faqs.length - 1}
                  className="px-5 py-2 rounded-xl text-[12px] font-bold transition-all duration-200"
                  style={{
                    background: active === faqs.length - 1 ? '#f8fafc' : `linear-gradient(135deg,${accent},${accent}cc)`,
                    color: active === faqs.length - 1 ? '#cbd5e1' : 'white',
                    boxShadow: active === faqs.length - 1 ? 'none' : `0 4px 12px ${accent}30`,
                  }}>
                  Next
                </button>

                {/* Progress bar */}
                <div className="flex-1 h-1 rounded-full bg-slate-100 overflow-hidden ml-2">
                  <div className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${((active + 1) / faqs.length) * 100}%`, background: '#2563eb' }} />
                </div>
                <span className="text-[10px] font-bold flex-shrink-0" style={{ color: accent }}>
                  {active + 1}/{faqs.length}
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="reveal flex flex-col sm:flex-row items-center justify-between gap-5 px-7 py-5 rounded-2xl"
          style={{ background: 'white', border: '1.5px solid #dbeafe', boxShadow: '0 8px 32px rgba(37,99,235,0.08)' }}>
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg,#eff6ff,#dbeafe)', border: '1px solid #bfdbfe' }}>
              <MessageSquare size={16} className="text-blue-600" />
            </div>
            <div>
              <p className="text-[13.5px] font-bold text-slate-800">Still have questions?</p>
              <p className="text-[12px] text-slate-500 mt-0.5">Our team is ready to help with any query about our e-commerce services.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
              style={{ background: '#eff6ff', border: '1px solid #bfdbfe' }}>
              <ShoppingCart size={11} className="text-blue-600" />
              <span className="text-[11px] font-bold text-blue-700">50+ Stores Built</span>
            </div>
            <a href="/ARA-Marketing/contact-us"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-[12.5px] font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: '#2563eb', boxShadow: '0 6px 18px rgba(37,99,235,0.25)' }}>
              Contact Us <ArrowRight size={13} />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
