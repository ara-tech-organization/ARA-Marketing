import { useState } from 'react'
import { ChevronDown, Layers } from 'lucide-react'

const faqs = [
  {
    q: 'Who is the best social media branding services provider in Thanjavur?',
    a: 'ARA Discover Marketing is one of the best social media companies in Thanjavur, providing Facebook marketing, LinkedIn marketing, Pinterest marketing, SMO, and paid social media advertising strategies.',
  },
  {
    q: 'How does social media marketing benefit businesses?',
    a: 'Social media marketing has the potential to help businesses achieve growth in brand awareness, customer engagement, leads, and long-term customer relationships.',
  },
  {
    q: 'Do you provide paid social media advertising in Thanjavur?',
    a: 'Yes, we run paid social media advertising campaigns in Thanjavur, including Facebook Ads, Instagram Ads, LinkedIn Ads, and targeted audience advertising campaigns.',
  },
  {
    q: 'Which kind of social media platforms do you handle for marketing purposes?',
    a: 'We manage your Facebook, Instagram, LinkedIn, Pinterest, and other social media presence, developing strategies that are customized for your company and its goals.',
  },
  {
    q: 'What is Social Media Optimisation (SMO)?',
    a: 'SMO means improving the visibility, engagement, audience, and content performance of your social profile to make your brand’s online presence stronger.',
  },
  {
    q: 'Why choose ARA Discover Marketing for social media marketing services?',
    a: 'We are one of the best social media service providers in Thanjavur because of our creative campaigns, AI-driven targeting strategies, transparent reporting, and audience-focused marketing approach.',
  },
]

export default function SMMFAQ() {
  const [openIdx, setOpenIdx] = useState(null)

  const toggle = (i) => setOpenIdx(prev => (prev === i ? null : i))

  return (
    <section
      className="py-24"
      style={{ background: 'linear-gradient(180deg, #f8faff 0%, #ffffff 100%)' }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
            <Layers size={11} /> FAQs
          </span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Frequently Asked Questions (FAQs)
          </h2>
          <p className="text-[15px] text-slate-500 max-w-xl mx-auto">
            Everything you need to know about our social media marketing services in Thanjavur.
          </p>
        </div>

        {/* Accordion list */}
        <div className="max-w-3xl mx-auto flex flex-col gap-3 reveal">
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
                    fontFamily: 'var(--font-poppins)',
                    transition: 'color 0.25s ease',
                  }}>
                    {faq.q}
                  </span>

                  {/* Icon circle */}
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
                      fontFamily: 'var(--font-poppins)',
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
