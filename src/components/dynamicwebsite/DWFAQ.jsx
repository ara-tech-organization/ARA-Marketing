import { useState } from 'react'
import { HelpCircle, Plus, Minus, MessageSquare, ArrowRight, Zap, ChevronRight } from 'lucide-react'

const faqs = [
  {
    q: 'What does a dynamic website mean?',
    a: 'A dynamic website is a web platform that generates content dynamically with the help of databases and backend programming. It allows easy updates, user interaction, and personalised content delivery without modifying the source code each time.',
    tag: 'General',
    color: '#2563eb',
  },
  {
    q: 'Why Should I Choose a Dynamic Website for My Business?',
    a: 'Dynamic websites are the perfect choice for growing businesses and interactive platforms as they are flexible, scalable and can be updated in real time. They support user accounts, e-commerce, personalisation, and seamless CMS-based content management.',
    tag: 'Business',
    color: '#0891b2',
  },
  {
    q: 'How does a dynamic website differ from a static website?',
    a: 'Unlike static sites, dynamic websites can customise content without any coding, integrate with databases, and generate pages dynamically for each user. They support real-time updates, user interaction, and advanced features that static sites simply cannot deliver.',
    tag: 'Comparison',
    color: '#2563eb',
  },
  {
    q: 'How long does it take to create a dynamic website?',
    a: 'Development of a dynamic website can take between 2 and 6 weeks, depending on complexity, the number of features required, and the CMS platform chosen. We provide a clear timeline after the initial business analysis and requirement gathering phase.',
    tag: 'Timeline',
    color: '#0891b2',
  },
  {
    q: 'Can I manage my website content easily?',
    a: 'Yes, dynamic websites integrate with CMS platforms like WordPress, allowing you to update content, add pages, manage media, and publish blogs without any technical knowledge. Complete control of your website is placed firmly in your hands.',
    tag: 'CMS',
    color: '#2563eb',
  },
  {
    q: 'Is SEO possible on dynamic websites?',
    a: 'Yes, dynamic websites are fully SEO-optimised when properly developed with clean coding, fast performance, structured data, and schema markup. We build every dynamic website with an SEO-first approach to maximise your organic visibility and rankings.',
    tag: 'SEO',
    color: '#0891b2',
  },
]

export default function DWFAQ() {
  const [open, setOpen] = useState(0)

  const toggle = (i) => setOpen(prev => prev === i ? null : i)

  return (
    <section className="relative py-16 sm:py-20 lg:py-16 overflow-hidden"
      style={{ background: 'linear-gradient(160deg,#f0f7ff 0%,#eff6ff 50%,#e0f2fe 100%)' }}>

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.06) 1.5px,transparent 1.5px)', backgroundSize: '34px 34px' }} />
      <div className="hidden sm:block absolute -top-20 -left-20 w-[360px] h-[360px] rounded-full border border-blue-200/30 pointer-events-none animate-[spin_36s_linear_infinite]" />
      <div className="hidden sm:block absolute -bottom-16 -right-16 w-[300px] h-[300px] rounded-full border border-blue-200/25 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(147,197,253,0.18) 0%,transparent 65%)' }} />

      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 md:px-7">

        {/* â”€â”€ Header â”€â”€ */}
        <div className="text-center mb-10 sm:mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 sm:mb-6 text-blue-600 bg-white/80 shadow-sm"
            style={{ border: '1px solid rgba(37,99,235,0.18)' }}>
            <HelpCircle size={11} /> Frequently Asked Questions
          </span>
          <h2 className="text-[clamp(21px,3.1vw,45px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
            Got Questions?{' '}
            <span style={{ background: 'linear-gradient(135deg,#2563eb,#0891b2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              We Have Answers
            </span>
          </h2>
          <p className="text-[13.5px] sm:text-[15px] text-slate-500 leading-[1.85] max-w-[520px] mx-auto px-2 sm:px-0">
            Everything you need to know about our dynamic website development services in Thanjavur.
          </p>
        </div>

        {/* â”€â”€ Two-column layout â”€â”€ */}
        <div className="reveal flex flex-col lg:flex-row gap-8 items-start">

          {/* Left: sticky dark panel */}
          <div className="lg:w-[300px] flex-shrink-0 lg:sticky lg:top-28">
            <div className="rounded-3xl overflow-hidden"
              style={{ background: 'white', border: '1.5px solid #dbeafe', boxShadow: '0 16px 48px rgba(37,99,235,0.10)' }}>
              <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg,#2563eb,#0891b2)' }} />
              <div className="p-5 sm:p-7">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: 'linear-gradient(135deg,#eff6ff,#dbeafe)', border: '1px solid #bfdbfe' }}>
                  <HelpCircle size={18} className="text-blue-600" />
                </div>
                <h3 className="text-[17px] font-bold text-slate-900 leading-snug mb-2">Dynamic Website FAQs</h3>
                <p className="text-[12.5px] text-slate-500 leading-[1.80] mb-7">
                  Common questions our clients ask before starting their dynamic website project.
                </p>

                {/* Index list */}
                <div className="space-y-1 mb-7">
                  {faqs.map((faq, i) => (
                    <button key={i} type="button" onClick={() => toggle(i)}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200"
                      style={open === i
                        ? { background: 'rgba(37,99,235,0.07)', border: '1px solid rgba(37,99,235,0.18)' }
                        : { background: 'transparent', border: '1px solid transparent' }}>
                      <span className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 text-[9px] font-black transition-all duration-200"
                        style={open === i
                          ? { background: 'linear-gradient(135deg,#2563eb,#0891b2)', color: 'white' }
                          : { background: '#f1f5f9', color: '#94a3b8' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[12px] font-semibold flex-1 truncate transition-colors duration-200"
                        style={{ color: open === i ? '#2563eb' : '#94a3b8' }}>
                        {faq.tag}
                      </span>
                      <ChevronRight size={11}
                        style={{ color: open === i ? '#2563eb' : '#cbd5e1', flexShrink: 0 }} />
                    </button>
                  ))}
                </div>

                <div className="pt-5" style={{ borderTop: '1px solid #e2e8f0' }}>
                  <p className="text-[11px] text-slate-400 mb-3">Still have questions?</p>
                  <a href="/ARA-Marketing/contact-us"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-[12px] font-bold transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: 'linear-gradient(135deg,#1d4ed8,#0891b2)', color: 'white', boxShadow: '0 4px 14px rgba(37,99,235,0.25)' }}>
                    Contact Us <ArrowRight size={11} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: accordion */}
          <div className="flex-1 min-w-0">

            {/* Accordion card wrapping all items */}
            <div className="rounded-3xl overflow-hidden"
              style={{ background: 'white', border: '1.5px solid #e2e8f0', boxShadow: '0 8px 40px rgba(37,99,235,0.08)' }}>
              {faqs.map((faq, i) => {
                const isOpen = open === i
                const isLast = i === faqs.length - 1
                return (
                  <div key={i}
                    style={!isLast ? { borderBottom: '1px solid #f1f5f9' } : {}}>

                    {/* Question row */}
                    <button type="button" onClick={() => toggle(i)}
                      className="w-full flex items-center gap-2 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 text-left group transition-all duration-200"
                      style={{ background: isOpen ? `${faq.color}04` : 'white' }}>

                      {/* Left accent bar */}
                      <div className="w-1 self-stretch rounded-full flex-shrink-0 transition-all duration-300"
                        style={{ background: isOpen ? `linear-gradient(180deg,${faq.color},${faq.color}88)` : '#f1f5f9' }} />

                      {/* Tag + question */}
                      <div className="flex-1 min-w-0">
                        <span className="inline-block text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full mb-1.5"
                          style={{ background: `${faq.color}10`, color: faq.color }}>
                          {faq.tag}
                        </span>
                        <p className="text-[14px] sm:text-[14.5px] font-bold leading-snug transition-colors duration-200"
                          style={{ color: isOpen ? '#0f172a' : '#334155' }}>
                          {faq.q}
                        </p>
                      </div>

                      {/* Toggle icon */}
                      <div className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300"
                        style={isOpen
                          ? { background: `${faq.color}12`, color: faq.color }
                          : { background: '#f1f5f9', color: '#94a3b8' }}>
                        {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                      </div>
                    </button>

                    {/* Answer panel */}
                    {isOpen && (
                      <div className="px-4 sm:px-6 pb-5 sm:pb-6"
                        style={{ background: `${faq.color}03` }}>
                        <div className="ml-0 sm:ml-[52px] flex gap-3 sm:gap-4 pt-1">
                          <div className="w-px flex-shrink-0 self-stretch rounded-full"
                            style={{ background: `${faq.color}25`, minHeight: 40 }} />
                          <div className="pb-2">
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg mb-3"
                              style={{ background: `${faq.color}08`, border: `1px solid ${faq.color}15` }}>
                              <span className="text-[10px] font-black" style={{ color: faq.color }}>Answer</span>
                            </div>
                            <p className="text-[13.5px] text-slate-600 leading-[1.95] font-medium">{faq.a}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Bottom CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-5 px-4 sm:px-6 py-4 sm:py-5 rounded-2xl mt-4 text-center sm:text-left"
              style={{ background: 'white', border: '1.5px solid #dbeafe', boxShadow: '0 8px 32px rgba(37,99,235,0.07)' }}>
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg,#eff6ff,#dbeafe)', border: '1px solid #bfdbfe' }}>
                  <MessageSquare size={15} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-[13px] font-bold text-slate-800">Still have questions?</p>
                  <p className="text-[11.5px] text-slate-500 mt-0.5">Our team is ready to help with any query about our services.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
                  style={{ background: '#eff6ff', border: '1px solid #bfdbfe' }}>
                  <Zap size={10} className="text-blue-600" />
                  <span className="text-[11px] font-bold text-blue-700">200+ Websites</span>
                </div>
                <a href="/ARA-Marketing/contact-us"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-[12px] font-bold transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg,#1d4ed8,#0891b2)', boxShadow: '0 6px 18px rgba(37,99,235,0.25)' }}>
                  Contact Us <ArrowRight size={12} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

