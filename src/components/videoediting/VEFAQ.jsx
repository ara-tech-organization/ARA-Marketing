import { useState } from 'react'
import { HelpCircle, Plus, Minus, Film, MessageSquare, ArrowRight } from 'lucide-react'

const faqs = [
  { q: 'Which company offers the best video editing services in Thanjavur?',  a: 'Ara Discover Marketing is one of the best video editing services in Thanjavur, offering complete YouTube editing solutions, social media videos, corporate videos, branding videos, drone video editing, and more for businesses and brands.', color: '#2563eb' },
  { q: 'Do you offer Corporate Video Editing Services in Thanjavur?',         a: 'Yes, we are one of the corporate video editing companies in Thanjavur, providing professional corporate films, company profile videos, training videos, and promotional content designed to communicate your brand effectively.',              color: '#7c3aed' },
  { q: 'Do you edit videos for YouTube channels?',                            a: 'Yes, we offer YouTube video editing services in Thanjavur, and we are a preferred choice and professional YouTube video editing company in Thanjavur for video content creators and businesses looking to grow their channel audience.',         color: '#0891b2' },
  { q: 'Do you provide social media video editing?',                          a: 'We provide digital marketing video editing in Thanjavur services including Instagram Reels, Facebook video ads, short-form viral content, and platform-optimised videos for all major social media channels.',                                    color: '#059669' },
  { q: 'What makes your video editing services different from others?',       a: 'We combine cinematic storytelling, AI-powered marketing strategy, professional editing tools, and creative expertise to deliver high-performing video content. Our platform-optimised formats and fast turnaround time set us apart.',          color: '#d97706' },
]

const gradBlue = {
  background: 'linear-gradient(135deg,#2563eb,#7c3aed)',
  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
}

export default function VEFAQ() {
  const [active, setActive] = useState(-1)

  return (
    <section className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #f0f7ff 0%, #eff6ff 50%, #e0f2fe 100%)' }}>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.06) 1.5px, transparent 1.5px)', backgroundSize: '34px 34px' }} />

      {/* ── Double circle – top left ── */}
      <div className="absolute -top-20 -left-20 w-[360px] h-[360px] rounded-full border border-blue-200/30 pointer-events-none animate-[spin_36s_linear_infinite]" />
      <div className="absolute -top-10 -left-10 w-[230px] h-[230px] rounded-full border border-blue-300/22 pointer-events-none animate-[spin_24s_linear_infinite_reverse]" />

      {/* ── Double circle – bottom right ── */}
      <div className="absolute -bottom-16 -right-16 w-[300px] h-[300px] rounded-full border border-violet-200/25 pointer-events-none" />
      <div className="absolute -bottom-8 -right-8 w-[180px] h-[180px] rounded-full border border-violet-300/18 pointer-events-none" />

      {/* Orb */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.20) 0%, transparent 65%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-7">

        {/* ── Two-panel layout: left info + right accordion ── */}
        <div className="flex flex-col lg:flex-row gap-14 items-start">

          {/* ── Left: sticky info panel ── */}
          <div className="lg:w-[320px] flex-shrink-0 lg:sticky lg:top-28 reveal">

            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6 text-blue-600 bg-white/80 shadow-sm"
              style={{ border: '1px solid rgba(37,99,235,0.16)' }}>
              <HelpCircle size={11} /> FAQs
            </span>

            <h2 className="text-[clamp(26px,3vw,44px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-5">
              Frequently{' '}
              <span style={gradBlue}>Asked Questions</span>
            </h2>

            <p className="text-[14.5px] text-slate-500 leading-[1.85] mb-7">
              Everything you need to know about our video editing services in Thanjavur. Can't find an answer? Reach out to our team directly.
            </p>

            {/* Visual card */}
            <div className="relative rounded-2xl overflow-hidden mb-5"
              style={{ height: 200, boxShadow: '0 16px 48px rgba(37,99,235,0.15)' }}>
              <img
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop&auto=format&q=80"
                alt="Video editing studio Thanjavur"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.60) 0%, rgba(124,58,237,0.45) 100%)' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.28)' }}>
                    <Film size={24} className="text-white" />
                  </div>
                  <p className="text-[11px] font-bold text-white/80">Professional Video Editing Studio</p>
                </div>
              </div>
              {/* Double circle in image */}
              <div className="absolute top-3 right-3 w-14 h-14 rounded-full border border-white/15 pointer-events-none" />
              <div className="absolute top-6 right-6 w-5 h-5 rounded-full border border-white/12 pointer-events-none" />
            </div>

            {/* Contact card */}
            <div className="rounded-2xl p-5"
              style={{ background: 'white', border: '1.5px solid #e0eaff', boxShadow: '0 4px 16px rgba(37,99,235,0.08)' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg,#eff6ff,#f5f3ff)', border: '1px solid #e0eaff' }}>
                  <MessageSquare size={15} className="text-blue-600" />
                </div>
                <p className="text-[13px] font-bold text-slate-800">Still have questions?</p>
              </div>
              <p className="text-[12px] text-slate-500 mb-4 leading-relaxed">
                Our team is ready to answer any question about our video editing services.
              </p>
              <a href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-[12px] font-bold
                  w-full justify-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', boxShadow: '0 6px 18px rgba(37,99,235,0.25)' }}>
                Contact Us <ArrowRight size={13} />
              </a>
            </div>
          </div>

          {/* ── Right: accordion ── */}
          <div className="flex-1 reveal">
            <div className="flex flex-col gap-3">
              {faqs.map(({ q, a, color }, i) => {
                const isOpen = active === i
                return (
                  <div key={i}
                    className="rounded-2xl overflow-hidden transition-all duration-350"
                    style={{
                      background: isOpen ? `linear-gradient(135deg, ${color}08, white)` : 'white',
                      border: isOpen ? `1.5px solid ${color}28` : '1.5px solid #e8edf5',
                      boxShadow: isOpen ? `0 12px 40px ${color}10` : '0 2px 10px rgba(37,99,235,0.04)',
                    }}>

                    <button
                      type="button"
                      onClick={() => setActive(isOpen ? -1 : i)}
                      className="w-full flex items-center gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-slate-50/40"
                    >
                      {/* Number badge */}
                      <span className="flex-shrink-0 text-[11px] font-black w-8 h-8 rounded-xl
                        flex items-center justify-center transition-all duration-300"
                        style={isOpen
                          ? { background: `linear-gradient(135deg,${color},${color}bb)`, color: 'white', boxShadow: `0 4px 14px ${color}35` }
                          : { background: color + '10', color }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>

                      <span className="flex-1 text-[14px] font-semibold leading-snug transition-colors duration-200"
                        style={{ color: isOpen ? '#0f172a' : '#334155' }}>
                        {q}
                      </span>

                      {/* Toggle */}
                      <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                        style={isOpen
                          ? { background: `linear-gradient(135deg,${color},${color}bb)`, boxShadow: `0 4px 12px ${color}30` }
                          : { background: '#f1f5f9' }}>
                        {isOpen
                          ? <Minus size={13} className="text-white" />
                          : <Plus size={13} className="text-slate-400" />}
                      </div>
                    </button>

                    <div className="overflow-hidden transition-all duration-350"
                      style={{ maxHeight: isOpen ? 220 : 0 }}>
                      <div className="px-6 pb-6 bg-white/0">
                        <div className="h-px mb-4"
                          style={{ background: `linear-gradient(90deg,${color}38,transparent)` }} />
                        <p className="text-[13.5px] text-slate-600 leading-[1.88] pl-12">{a}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
