import { useState, useEffect, useRef } from 'react'
import { HelpCircle, MessageSquare, ArrowRight, Sparkles, Film } from 'lucide-react'

const faqs = [
  { q: 'Which company offers the best video editing services in Thanjavur?',  a: 'ARA Discover Marketing is one of the best video editing services in Thanjavur, offering complete YouTube editing solutions, social media videos, corporate videos, branding videos, drone video editing, and more for businesses and brands.', color: '#2563eb', tag: 'General' },
  { q: 'Do you offer Corporate Video Editing Services in Thanjavur?',         a: 'Yes, we are one of the corporate video editing companies in Thanjavur, providing professional corporate films, company profile videos, training videos, and promotional content designed to communicate your brand effectively.',              color: '#0ea5e9', tag: 'Corporate' },
  { q: 'Do you edit videos for YouTube channels?',                            a: 'Yes, we offer YouTube video editing services in Thanjavur, and we are a preferred choice and professional YouTube video editing company in Thanjavur for video content creators and businesses looking to grow their channel audience.',         color: '#2563eb', tag: 'YouTube' },
  { q: 'Do you provide social media video editing?',                          a: 'We provide digital marketing video editing in Thanjavur services including Instagram Reels, Facebook video ads, short-form viral content, and platform-optimised videos for all major social media channels.',                                    color: '#0ea5e9', tag: 'Social' },
  { q: 'What makes your video editing services different from others?',       a: 'We combine cinematic storytelling, AI-powered marketing strategy, professional editing tools, and creative expertise to deliver high-performing video content. Our platform-optimised formats and fast turnaround time set us apart.',          color: '#2563eb', tag: 'Expertise' },
]

const gradBlue = {
  background: 'linear-gradient(135deg,#2563eb,#0ea5e9)',
  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
}

export default function VEFAQ() {
  const [active, setActive] = useState(0)
  const faq = faqs[active]
  const timerRef = useRef(null)

  const startTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % faqs.length)
    }, 3500)
  }

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [])

  const handleSelect = (i) => {
    setActive(i)
    startTimer()
  }

  return (
    <section className="relative py-16 sm:py-20 lg:py-16 overflow-hidden"
      style={{ background: 'linear-gradient(160deg,#f0f7ff 0%,#eff6ff 50%,#e0f2fe 100%)' }}>

      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.06) 1.5px,transparent 1.5px)', backgroundSize: '34px 34px' }} />
      <div className="absolute -top-20 -left-20 w-[360px] h-[360px] rounded-full border border-blue-200/30 pointer-events-none animate-[spin_36s_linear_infinite]" />
      <div className="absolute -top-10 -left-10 w-[230px] h-[230px] rounded-full border border-sky-300/22 pointer-events-none animate-[spin_24s_linear_infinite_reverse]" />
      <div className="absolute -bottom-16 -right-16 w-[300px] h-[300px] rounded-full border border-blue-200/25 pointer-events-none" />
      <div className="absolute -bottom-8 -right-8 w-[180px] h-[180px] rounded-full border border-sky-300/18 pointer-events-none animate-[spin_28s_linear_infinite]" />
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(147,197,253,0.20) 0%,transparent 65%)' }} />

      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 md:px-7">

        {/* ── Header ── */}
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6 text-blue-600 bg-white/80 shadow-sm"
            style={{ border: '1px solid rgba(37,99,235,0.16)' }}>
            <HelpCircle size={11} /> Frequently Asked Questions
          </span>
          <h2 className="text-[clamp(25px,3.1vw,45px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
            Everything You Want to{' '}
            <span style={gradBlue}>Know About Us</span>
          </h2>
          <p className="text-[15px] text-slate-500 leading-[1.85] max-w-[500px] mx-auto">
            Answers to the most common questions about our video editing services in Thanjavur.
          </p>
        </div>

        {/* ── Horizontal tab strip ── */}
        <div className="reveal flex flex-nowrap overflow-x-auto gap-0 mb-0 rounded-t-2xl sm:rounded-t-3xl overflow-hidden"
          style={{ background: 'white', border: '1.5px solid #e8edf5', borderBottom: 'none', scrollbarWidth: 'none' }}>
          {faqs.map(({ tag, color }, i) => {
            const isActive = active === i
            return (
              <button
                key={i}
                type="button"
                onClick={() => handleSelect(i)}
                className="flex-1 min-w-[80px] sm:min-w-[120px] flex flex-col items-center gap-1 sm:gap-1.5 px-2 sm:px-4 py-3 sm:py-5 transition-all duration-300 relative"
                style={{
                  background: isActive ? 'white' : 'transparent',
                  borderBottom: isActive ? `3px solid ${color}` : '3px solid transparent',
                }}
              >
                {/* Number bubble */}
                <span className="w-9 h-9 rounded-xl flex items-center justify-center text-[12px] font-black transition-all duration-300"
                  style={isActive
                    ? { background: `linear-gradient(135deg,${color},${color}cc)`, color: 'white', boxShadow: `0 4px 14px ${color}35` }
                    : { background: color + '0f', color: color + 'aa' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-[10.5px] font-bold uppercase tracking-widest whitespace-nowrap transition-colors duration-200"
                  style={{ color: isActive ? color : '#94a3b8' }}>
                  {tag}
                </span>
                {/* Active indicator dot */}
                {isActive && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full -mb-[3px]"
                    style={{ background: color }} />
                )}
              </button>
            )
          })}
        </div>

        {/* ── Answer panel ── */}
        <div className="reveal rounded-b-2xl sm:rounded-b-3xl overflow-hidden mb-8 sm:mb-10"
          style={{
            background: 'white',
            border: `1.5px solid ${faq.color}18`,
            borderTop: 'none',
            boxShadow: `0 20px 60px ${faq.color}10`,
            transition: 'border-color 0.4s, box-shadow 0.4s',
          }}>

          <div key={active} className="flex flex-col md:flex-row">

            {/* Left: question block */}
            <div className="md:w-[42%] flex-shrink-0 p-5 sm:p-8 md:p-10 flex flex-col justify-between"
              style={{ borderRight: `1px solid ${faq.color}12`, borderBottom: `1px solid ${faq.color}08` }}>

              {/* Icon + tag */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg,${faq.color},${faq.color}bb)`, boxShadow: `0 8px 22px ${faq.color}30` }}>
                    <Film size={20} className="text-white" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black uppercase tracking-widest" style={{ color: faq.color }}>{faq.tag}</span>
                    <span className="block text-[11px] text-slate-400 font-medium mt-0.5">
                      Question {String(active + 1).padStart(2, '0')} of {faqs.length}
                    </span>
                  </div>
                </div>

                <h3 className="text-[13px] sm:text-[16px] font-bold text-slate-900 leading-snug mb-4 sm:mb-6">{faq.q}</h3>

                {/* Progress bar */}
                <div className="h-1 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${((active + 1) / faqs.length) * 100}%`,
                      background: `linear-gradient(90deg,${faq.color},${faq.color}cc)`,
                    }} />
                </div>
                <div className="flex justify-between mt-1.5">
                  <span className="text-[10px] text-slate-400">Progress</span>
                  <span className="text-[10px] font-bold" style={{ color: faq.color }}>{active + 1}/{faqs.length}</span>
                </div>
              </div>

              {/* Nav arrows */}
              <div className="flex items-center gap-2 mt-4 sm:mt-8">
                <button
                  type="button"
                  onClick={() => handleSelect(Math.max(0, active - 1))}
                  disabled={active === 0}
                  className="flex-1 py-2.5 rounded-xl text-[12px] font-bold transition-all duration-200"
                  style={{
                    background: active === 0 ? '#f8fafc' : faq.color + '10',
                    color: active === 0 ? '#cbd5e1' : faq.color,
                    border: `1px solid ${active === 0 ? '#f1f5f9' : faq.color + '22'}`,
                  }}>
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => handleSelect(Math.min(faqs.length - 1, active + 1))}
                  disabled={active === faqs.length - 1}
                  className="flex-1 py-2.5 rounded-xl text-[12px] font-bold transition-all duration-200"
                  style={{
                    background: active === faqs.length - 1 ? '#f8fafc' : `linear-gradient(135deg,${faq.color},${faq.color}cc)`,
                    color: active === faqs.length - 1 ? '#cbd5e1' : 'white',
                    boxShadow: active === faqs.length - 1 ? 'none' : `0 4px 14px ${faq.color}30`,
                  }}>
                  Next
                </button>
              </div>
            </div>

            {/* Right: answer block */}
            <div className="flex-1 p-5 sm:p-8 md:p-10 flex flex-col justify-center relative overflow-hidden">

              {/* Watermark */}
              <span className="absolute -bottom-4 -right-2 text-[110px] font-black leading-none select-none pointer-events-none"
                style={{ color: faq.color + '07' }}>
                {String(active + 1).padStart(2, '0')}
              </span>

              {/* Double circles */}
              <div className="absolute top-4 right-4 w-20 h-20 rounded-full border pointer-events-none"
                style={{ borderColor: faq.color + '12' }} />
              <div className="absolute top-8 right-8 w-10 h-10 rounded-full border pointer-events-none"
                style={{ borderColor: faq.color + '10' }} />

              <div className="relative">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: faq.color + '10', border: `1px solid ${faq.color}20` }}>
                  <span className="text-[11px] font-black" style={{ color: faq.color }}>A</span>
                </div>
                <p className="text-[13px] sm:text-[15px] text-slate-700 leading-[1.88] sm:leading-[1.95] font-medium">{faq.a}</p>

                {/* Dot navigation */}
                <div className="flex items-center gap-2 mt-5 sm:mt-8">
                  {faqs.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleSelect(i)}
                      className="rounded-full transition-all duration-300"
                      style={{
                        width: active === i ? 28 : 8,
                        height: 8,
                        background: active === i
                          ? `linear-gradient(90deg,${faq.color},${faq.color}cc)`
                          : faq.color + '22',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div className="reveal flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-5 px-4 sm:px-7 py-4 sm:py-5 rounded-xl sm:rounded-2xl"
          style={{ background: 'white', border: '1.5px solid #e0eaff', boxShadow: '0 8px 32px rgba(37,99,235,0.08)' }}>
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg,#eff6ff,#e0f2fe)', border: '1px solid #bfdbfe' }}>
              <MessageSquare size={16} className="text-blue-600" />
            </div>
            <div>
              <p className="text-[13.5px] font-bold text-slate-800">Still have questions?</p>
              <p className="text-[12px] text-slate-500 mt-0.5">Our team is ready to help with any query about our video services.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
              style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
              <Sparkles size={11} className="text-emerald-600" />
              <span className="text-[11px] font-bold text-emerald-700">500+ Projects</span>
            </div>
            <a href="/ARA-Marketing/contact-us"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-[12.5px] font-bold
                transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', boxShadow: '0 6px 18px rgba(37,99,235,0.25)' }}>
              Contact Us <ArrowRight size={13} />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
