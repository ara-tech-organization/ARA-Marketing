import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: 'What is the best graphic design company in Thanjavur?',
    a: 'ARA Discover Marketing is the best graphic design company in thanjavur which provides logo design, brochure design, social media creatives, and complete branding solutions for businesses of all sizes.',
  },
  {
    q: 'Do you offer brochure and flyer designing services?',
    a: 'Yes, we provide the best brochure design in thanjavur and best business flyer design in thanjavur for marketing and promotional purposes. All designs are delivered in print-ready and digital formats.',
  },
  {
    q: 'Why choose ARA Discover Marketing for graphic design services?',
    a: 'Our creativity, industry expertise, innovative design approach, and consistent reputation as one of the top graphic design companies in thanjavur make us a reliable branding partner.',
  },
  {
    q: 'What services are included in your graphic design packages?',
    a: 'Our graphic design packages include logo design, brochure design, social media creatives, business card design, banner design, flyer design, and complete brand identity solutions. We customize packages based on your business needs and budget.',
  },
  {
    q: 'Why is branding important for my business?',
    a: 'Branding helps businesses create a strong and recognizable identity that builds customer trust and loyalty. A consistent brand identity across all platforms helps businesses stand out in competitive markets and create a lasting impression on their target audience.',
  },
  {
    q: 'Are you a social media creative designer in Thanjavur?',
    a: 'Yes, we are one of the best social media creative design service providers in Thanjavur. Our design team creates visually engaging social media posts, stories, banners, and promotional creatives tailored to your brand identity and marketing goals.',
  },
]

export default function GDFAQ() {
  const [openIdx, setOpenIdx] = useState(0)
  const toggle = (i) => setOpenIdx(prev => (prev === i ? null : i))

  return (
    <section
      className="py-16"
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

      <div className="max-w-[860px] mx-auto px-4 sm:px-6 md:px-7 relative">

        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 shadow-sm">
            <HelpCircle size={11} /> Frequently Asked Questions
          </span>
          <h2 className="text-[clamp(21px,2.5vw,35px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Frequently Asked Questions (FAQs)
          </h2>
          <p className="text-[15px] text-slate-500 leading-relaxed max-w-xl mx-auto">
            Find answers to the most common questions about our branding and design services in Thanjavur.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3 reveal">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i
            return (
              <div
                key={i}
                style={{
                  background: '#fff',
                  border: `1.5px solid ${isOpen ? '#93c5fd' : '#e2e8f0'}`,
                  borderRadius: 16,
                  overflow: 'hidden',
                  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                  boxShadow: isOpen ? '0 4px 24px rgba(37,99,235,0.10)' : 'none',
                }}
              >
                {/* Question row */}
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 16,
                    padding: '18px 24px',
                    background: isOpen ? 'rgba(239,246,255,0.6)' : '#fff',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'background 0.25s ease',
                  }}
                >
                  <span style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: isOpen ? '#1e40af' : '#1e293b',
                    lineHeight: 1.45,
                    transition: 'color 0.25s ease',
                  }}>
                    {faq.q}
                  </span>
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    width: 30,
                    height: 30,
                    borderRadius: '50%',
                    background: isOpen ? '#2563eb' : '#eff6ff',
                    transition: 'background 0.25s ease',
                  }}>
                    <ChevronDown
                      size={15}
                      style={{
                        color: isOpen ? '#fff' : '#2563eb',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
                      }}
                    />
                  </span>
                </button>

                {/* Answer panel */}
                <div style={{
                  overflow: 'hidden',
                  maxHeight: isOpen ? '300px' : '0px',
                  transition: 'max-height 0.38s cubic-bezier(0.4,0,0.2,1)',
                }}>
                  <div style={{
                    padding: '0 24px 20px',
                    borderTop: '1px solid #dbeafe',
                    background: 'rgba(239,246,255,0.35)',
                  }}>
                    <p style={{
                      fontSize: 13,
                      color: '#64748b',
                      lineHeight: 1.85,
                      paddingTop: 16,
                    }}>
                      {faq.a}
                    </p>
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

