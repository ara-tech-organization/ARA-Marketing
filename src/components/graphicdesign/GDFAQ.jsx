import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: 'What is the best graphic design company in Thanjavur?',
    a: 'Ara Discover Marketing is the best graphic design company in Thanjavur which provides logo design, brochure design, social media creatives, and complete branding solutions for businesses of all sizes.',
  },
  {
    q: 'What services are included in graphic design?',
    a: 'Our graphic design includes logo design, brochure design, flyer design, poster design, business card design, social media creative design, letterhead design, corporate stationery, and advertisement design.',
  },
  {
    q: 'Do you offer brochure and flyer designing services?',
    a: 'Yes, we provide the best brochure design in Thanjavur and best business flyer design in Thanjavur for marketing and promotional purposes. All designs are delivered in print-ready and digital formats.',
  },
  {
    q: 'Why is branding important to businesses?',
    a: 'Branding helps businesses to be recognisable, trusted and loyal by customers through a consistent visual identity and professional design. A strong brand increases perceived value and helps businesses stand out in competitive markets.',
  },
  {
    q: 'Are you a social media creative designer?',
    a: 'Yes, we make good social media content, ads and campaign images to improve engagement and brand visibility. Our social media creatives are optimised for Instagram, Facebook, LinkedIn and other major platforms.',
  },
  {
    q: 'Why choose Ara Discover Marketing for graphic design services?',
    a: 'Our creativity, industry expertise, innovative design approach, and consistent reputation as one of the top graphic design companies in Thanjavur make us a reliable branding partner. We combine strategic thinking with modern design trends to deliver measurable results.',
  },
]

export default function GDFAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ background: 'linear-gradient(180deg, #f0f7ff 0%, #e8f3ff 100%)' }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #93c5fd 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.22,
        }}
      />

      {/* Wave top */}
      <svg className="absolute top-0 left-0 w-full pointer-events-none" viewBox="0 0 1200 60" preserveAspectRatio="none" style={{ height: 60 }}>
        <path d="M0,30 C200,0 400,60 600,30 C800,0 1000,60 1200,30 L1200,0 L0,0 Z" fill="rgba(255,255,255,0.8)" />
      </svg>

      <div className="relative max-w-[860px] mx-auto px-7">

        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 shadow-sm">
            <HelpCircle size={11} /> Frequently Asked Questions
          </span>
          <h2 className="text-[clamp(22px,2.8vw,36px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Got Questions About Our{' '}
            <span className="text-gradient-blue">Graphic Design Services?</span>
          </h2>
          <p className="text-[15px] text-slate-500 leading-relaxed max-w-xl mx-auto">
            Find answers to the most common questions about our branding and design services in Thanjavur.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i
            return (
              <div
                key={q}
                className={`reveal delay-${(i % 4) + 1} bg-white rounded-2xl border overflow-hidden
                  transition-all duration-300
                  ${isOpen ? 'border-blue-300 shadow-lg shadow-blue-100/50' : 'border-blue-100 hover:border-blue-200'}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-[14px] font-bold text-slate-800 leading-snug">{q}</span>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 text-blue-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? '400px' : '0px' }}
                >
                  <p className="px-6 pb-5 text-[13.5px] text-slate-500 leading-[1.8]">{a}</p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
