import { useState } from 'react'
import { HelpCircle, MessageSquare, ArrowRight, ChevronDown, Mail, Users, Smartphone } from 'lucide-react'

const faqs = [
  {
    q: 'Which company provides the best email marketing services in Thanjavur?',
    a: 'ARA Discover Marketing is popular as one of the best email marketing companies in Thanjavur, providing customized email campaigns, automation strategies, lead nurturing workflows, and customer engagement solutions for businesses of all sizes.',
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
    q: 'Why Choose ARA Discover Marketing for Your Digital Marketing Services?',
    a: 'With AI-powered strategies, audience-centric campaigns, transparent reporting, and multi-channel expertise across email, influencer, and SMS channels, we are your trusted partner for business growth and customer engagement in Thanjavur.',
    color: '#0891b2', tag: 'General', icon: Smartphone,
  },
]

export default function OMFAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="relative py-20 overflow-hidden"
      style={{ background: 'linear-gradient(160deg,#f0f9ff 0%,#eff6ff 55%,#f0f9ff 100%)' }}>

      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.05) 1.5px,transparent 1.5px)', backgroundSize: '36px 36px' }} />
      <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(167,139,250,0.12) 0%,transparent 65%)' }} />
      <div className="absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.08) 0%,transparent 65%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-blue-600
            border border-blue-200 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 shadow-sm">
            <HelpCircle size={11} /> Frequently Asked Questions
          </span>
          <h2 className="text-[clamp(24px,3.5vw,44px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-3">
            Frequently Asked Questions{' '}
            <span style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              About Our Services
            </span>
          </h2>
          <p className="text-[14.5px] text-slate-500 leading-[1.85] max-w-[500px] mx-auto">
            Answers to the most common questions about our email, influencer, and SMS marketing services in Thanjavur.
          </p>
        </div>

        {/* Two-column accordion */}
        <div className="reveal flex flex-col lg:flex-row gap-10 items-start">

          {/* Left: FAQ list */}
          <div className="flex-1 flex flex-col gap-3">
            {faqs.map(({ q, a, color, tag, icon: Icon }, i) => {
              const isOpen = open === i
              return (
                <div key={i}
                  className="rounded-2xl overflow-hidden bg-white border transition-all duration-300"
                  style={{
                    borderColor: isOpen ? color + '28' : 'rgba(226,232,240,0.8)',
                    boxShadow: isOpen ? `0 8px 32px ${color}0d` : '0 2px 8px rgba(0,0,0,0.04)',
                  }}>

                  {/* Top accent */}
                  <div className="h-[3px] w-full transition-all duration-300"
                    style={{ background: isOpen ? `linear-gradient(90deg,${color},${color}44)` : 'transparent' }} />

                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center gap-3.5 px-5 py-4 text-left transition-colors duration-200"
                    style={{ background: isOpen ? `${color}04` : 'transparent' }}>

                    {/* Icon box */}
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={isOpen
                        ? { background: `linear-gradient(135deg,${color},${color}bb)` }
                        : { background: color + '12', border: `1px solid ${color}22` }}>
                      <Icon size={14} style={{ color: isOpen ? 'white' : color }} />
                    </div>

                    {/* Tag + Question */}
                    <div className="flex-1 min-w-0">
                      <span className="block text-[9px] font-bold uppercase tracking-widest mb-0.5" style={{ color }}>{tag}</span>
                      <p className="text-[13px] sm:text-[13.5px] font-bold text-slate-900 leading-snug pr-2">{q}</p>
                    </div>

                    {/* Chevron */}
                    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{ background: isOpen ? color + '12' : '#f8fafc', border: `1px solid ${isOpen ? color + '20' : '#e2e8f0'}` }}>
                      <ChevronDown size={13} style={{ color: isOpen ? color : '#94a3b8' }}
                        className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </button>

                  {/* Answer */}
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-52' : 'max-h-0'}`}>
                    <div className="px-5 pb-5 pt-0">
                      <div className="h-px mb-3" style={{ background: `${color}14` }} />
                      <p className="text-[12.5px] text-slate-500 leading-[1.80] pl-[52px]">{a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right: sticky info panel */}
          <div className="w-full lg:w-[300px] flex-shrink-0 lg:sticky lg:top-8">

            {/* Channel quick links */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden mb-4"
              style={{ boxShadow: '0 4px 16px rgba(37,99,235,0.07)' }}>
              <div className="px-5 py-4 border-b border-slate-100">
                <p className="text-[12px] font-bold text-slate-800">Our Core Services</p>
              </div>
              {[
                { icon: Mail,       label: 'Email Marketing',      color: '#2563eb', stat: '68% Open Rate' },
                { icon: Users,      label: 'Influencer Marketing', color: '#7c3aed', stat: '2.4M+ Reach' },
                { icon: Smartphone, label: 'SMS Marketing',        color: '#0891b2', stat: '99% Delivery' },
              ].map(({ icon: Icon, label, color, stat }) => (
                <div key={label} className="group flex items-center gap-3 px-5 py-3.5 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors duration-200 cursor-default">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `linear-gradient(135deg,${color}18,${color}08)`, border: `1.5px solid ${color}25` }}>
                    <Icon size={13} style={{ color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[12px] font-bold text-slate-800">{label}</p>
                    <p className="text-[10px] font-semibold" style={{ color }}>{stat}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Still have questions card */}
            <div className="rounded-2xl p-5 overflow-hidden relative"
              style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', boxShadow: '0 12px 36px rgba(124,58,237,0.22)' }}>
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 80% 20%,rgba(255,255,255,0.12) 0%,transparent 60%)' }} />
              <div className="relative">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)' }}>
                  <MessageSquare size={16} className="text-white" />
                </div>
                <p className="text-[14px] font-bold text-white mb-1">Still have questions?</p>
                <p className="text-[11.5px] leading-[1.65] mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Our team is ready to help with any query about our digital marketing services.
                </p>
                <a href="/ARA-Marketing/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[12px] font-bold transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: 'white', color: '#7c3aed' }}>
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
