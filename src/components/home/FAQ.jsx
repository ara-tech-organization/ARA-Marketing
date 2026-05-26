import { useState } from 'react'
import { ChevronDown, MessageSquare, ArrowRight } from 'lucide-react'

const faqs = [
  { q: 'Which is the best digital marketing company in Thanjavur?',          a: 'Ara Discover Marketing is known as one of the best digital marketing companies in Thanjavur, providing SEO, social media marketing, Google Ads, branding and lead generation services for businesses across all industries.' },
  { q: 'Why should businesses hire a digital marketing agency in Thanjavur?', a: 'Hiring a professional agency helps businesses improve online visibility, attract targeted customers, increase leads and achieve better ROI through strategic, AI-driven campaigns tailored to your market.' },
  { q: 'What services does Ara Discover Marketing offer?',                   a: 'We offer a complete SEO services, social media marketing, Google Ads management, branding, advertising, email marketing, influencer marketing and lead generation solutions.' },
  { q: 'How does SEO benefit local businesses in Thanjavur?',                a: 'SEO increases your website visibility on search engines, so local customers can find your business online, resulting in organic traffic and qualified leads.' },
  { q: 'Why is Ara Discover Marketing a top branding agency in Thanjavur?',  a: 'We develop effective branding strategies, innovative ad campaigns, and strong digital identities, helping businesses build trust and enhance customer engagement.' },
  { q: 'What sets Ara Discover Marketing apart from other agencies?',        a: 'Our AI-driven strategies, transparent reporting, customized campaigns, and measurable results make us one of the best digital marketing agencies in Thanjavur.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-7">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 lg:gap-20 items-start">

          {/* Left */}
          <div className="reveal-left">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
              border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4">
              <MessageSquare size={11} /> FAQs
            </span>
            <h2 className="text-[clamp(26px,3vw,38px)] font-bold text-slate-900
              leading-tight tracking-tight mb-4">
              Frequently Asked<br />Question (FAQs)
            </h2>
            <p className="text-base text-slate-500 leading-relaxed mb-9">
              Have questions about our digital marketing services? Find answers to the most
              common queries businesses have when choosing a partner in Thanjavur.
            </p>

            {/* Info card */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-7 mb-7">
              <h3 className="text-[15px] font-bold text-slate-900 mb-2">Still have questions?</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed mb-5">
                Our team is ready to help you find the best digital marketing strategy for your business.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white
                  rounded-full font-semibold text-sm transition-all duration-300
                  hover:bg-blue-700 hover:-translate-y-0.5 shadow-lg shadow-blue-600/25"
              >
                Ask Us Anything <ArrowRight size={15} />
              </a>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="reveal-right flex flex-col gap-3">
            {faqs.map((f, i) => (
              <div
                key={i}
                className={`rounded-xl overflow-hidden transition-all duration-300
                  ${open === i
                    ? 'border border-blue-300 bg-blue-50/60'
                    : 'border border-slate-200 bg-white'
                  }`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className={`w-full text-left flex justify-between items-center gap-4
                    px-6 py-5 text-[15px] font-semibold transition-colors duration-300
                    ${open === i ? 'text-blue-600' : 'text-slate-900 hover:text-blue-600'}`}
                >
                  <span>{f.q}</span>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 transition-all duration-300
                      ${open === i ? 'rotate-180 text-blue-600' : 'text-slate-400'}`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: open === i ? '360px' : '0px' }}
                >
                  <p className="px-6 pb-5 text-sm text-slate-500 leading-[1.8]
                    border-t border-slate-100 pt-4">
                    {f.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
