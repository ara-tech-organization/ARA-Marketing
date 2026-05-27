import { useState } from 'react'
import { HelpCircle, MessageSquare, ArrowRight, Sparkles, ChevronDown, Mail, Users, Smartphone } from 'lucide-react'

const faqs = [
  {
    q: 'Which company provides the best email marketing services in Thanjavur?',
    a: 'Ara Discover Marketing is popular as one of the best email marketing companies in Thanjavur, providing customized email campaigns, automation strategies, lead nurturing workflows, and customer engagement solutions for businesses of all sizes.',
    color: '#2563eb', tag: 'Email Marketing', icon: Mail,
  },
  {
    q: 'What are the advantages of influencer marketing for businesses?',
    a: 'Influencer marketing helps businesses boost brand awareness, build trust with customers, increase audience engagement, and achieve better social media visibility. It connects your brand to an engaged, loyal audience through trusted content creators.',
    color: '#7c3aed', tag: 'Influencer Marketing', icon: Users,
  },
  {
    q: 'Do you offer bulk SMS promotion services in Thanjavur?',
    a: 'Yes, we provide bulk SMS promotion in Thanjavur, including promotional SMS campaigns, customer engagement messaging, transactional SMS, event and offer promotions, and complete business communication solutions with 99% delivery rates.',
    color: '#0891b2', tag: 'SMS Marketing', icon: Smartphone,
  },
  {
    q: 'What is Email Marketing and How Can it Help Your Business Grow?',
    a: 'Email marketing is an effective method for retaining customers, increasing engagement, promoting products and services, and encouraging repeat sales through targeted messaging. It consistently delivers one of the highest ROI of any digital marketing channel.',
    color: '#2563eb', tag: 'Email Marketing', icon: Mail,
  },
  {
    q: 'What industries can benefit from influencer marketing?',
    a: 'Influencer collaborations and audience-focused promotional campaigns can help healthcare, fashion, restaurants, education, retail, real estate, and e-commerce businesses build credibility and reach new customer segments effectively.',
    color: '#7c3aed', tag: 'Influencer Marketing', icon: Users,
  },
  {
    q: 'Why Choose Ara Discover Marketing for Your Digital Marketing Services?',
    a: 'With AI-powered strategies, audience-centric campaigns, transparent reporting, and multi-channel expertise across email, influencer, and SMS channels, we are your trusted partner for business growth and customer engagement in Thanjavur.',
    color: '#0891b2', tag: 'General', icon: Smartphone,
  },
]

export default function OMFAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="relative py-20 overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.04) 1.5px,transparent 1.5px)', backgroundSize: '36px 36px' }} />
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(167,139,250,0.10) 0%,transparent 65%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-7">

        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
            <HelpCircle size={11} /> Frequently Asked Questions
          </span>
          <h2 className="text-[clamp(24px,3.5vw,44px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-3">
            Everything You Want to{' '}
            <span style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Know About Us
            </span>
          </h2>
          <p className="text-[15px] text-slate-500 leading-[1.85] max-w-[500px] mx-auto">
            Answers to the most common questions about our email, influencer, and SMS marketing services in Thanjavur.
          </p>
        </div>

        {/* Accordion FAQ */}
        <div className="reveal max-w-[860px] mx-auto flex flex-col gap-3 mb-10">
          {faqs.map(({ q, a, color, tag, icon: Icon }, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border bg-white transition-all duration-300"
                style={{
                  borderColor: isOpen ? color + '30' : '#f1f5f9',
                  boxShadow: isOpen ? `0 8px 28px ${color}10` : '0 2px 10px rgba(0,0,0,0.04)',
                }}
              >
                {/* Top accent — only visible when open */}
                <div className="h-0.5 w-full transition-all duration-300"
                  style={{ background: isOpen ? `linear-gradient(90deg,${color},${color}44)` : 'transparent' }} />

                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-4 px-5 py-4 text-left transition-colors duration-200"
                  style={{ background: isOpen ? `${color}04` : 'transparent' }}
                >
                  {/* Icon */}
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={isOpen
                      ? { background: `linear-gradient(135deg,${color},${color}bb)` }
                      : { background: color + '12', border: `1px solid ${color}20` }}>
                    <Icon size={15} style={{ color: isOpen ? 'white' : color }} />
                  </div>

                  {/* Tag + Question */}
                  <div className="flex-1 min-w-0 text-left">
                    <span className="block text-[9.5px] font-black uppercase tracking-widest mb-1" style={{ color }}>{tag}</span>
                    <p className="text-[13.5px] sm:text-[14px] font-bold text-slate-900 leading-snug pr-2">{q}</p>
                  </div>

                  {/* Number + Chevron */}
                  <div className="flex items-center gap-2.5 flex-shrink-0">
                    <span className="text-[11px] font-black" style={{ color: color + '60' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{ background: isOpen ? color + '12' : '#f8fafc', border: `1px solid ${isOpen ? color + '20' : '#e2e8f0'}` }}>
                      <ChevronDown size={14} style={{ color: isOpen ? color : '#94a3b8' }}
                        className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                </button>

                {/* Answer */}
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48' : 'max-h-0'}`}>
                  <div className="px-5 pb-5 pt-0">
                    <div className="h-px mb-4" style={{ background: `${color}12` }} />
                    <p className="text-[13px] text-slate-500 leading-[1.82] pl-[52px]">{a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA strip */}
        <div className="reveal flex flex-col sm:flex-row items-center justify-between gap-5 px-6 py-5 rounded-2xl bg-white
          border border-slate-200" style={{ boxShadow: '0 6px 24px rgba(37,99,235,0.07)' }}>
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg,#eff6ff,#f5f3ff)', border: '1px solid #c7d2fe' }}>
              <MessageSquare size={15} className="text-violet-600" />
            </div>
            <div>
              <p className="text-[13.5px] font-bold text-slate-800">Still have questions?</p>
              <p className="text-[12px] text-slate-500 mt-0.5">Our team is ready to help with any query about our digital marketing services.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-100">
              <Sparkles size={11} className="text-emerald-600" />
              <span className="text-[11px] font-bold text-emerald-700">500+ Campaigns</span>
            </div>
            <a href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-[12.5px] font-bold
                transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', boxShadow: '0 5px 16px rgba(124,58,237,0.22)' }}>
              Contact Us <ArrowRight size={13} />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
