import { Cpu, Layers, RefreshCw, Palette, Globe2 } from 'lucide-react'

const expertise = [
  { icon: Cpu,       label: 'Latest Backend Engines',    color: '#2563eb', desc: 'Powered by modern backend technologies that ensure your website runs fast, stays secure, and scales effortlessly with your business.' },
  { icon: Layers,    label: 'CMS Platform Integration',  color: '#0891b2', desc: 'Seamless integration with WordPress, custom CMS, and headless systems for easy, code-free content management.' },
  { icon: RefreshCw, label: 'Real-Time Content Updates', color: '#2563eb', desc: 'Publish, edit, and update content in real-time without relying on a developer — full control is yours, anytime.' },
  { icon: Palette,   label: 'Modern UI/UX Design',       color: '#0891b2', desc: 'Stunning, user-friendly interfaces paired with strong backend architecture for an exceptional digital experience.' },
]

const gradInd = {
  background: 'linear-gradient(135deg,#2563eb,#0891b2)',
  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
}

export default function DWIntro() {
  return (
    <section id="dw-intro" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #f0f7ff 0%, #eff6ff 55%, #e0f2fe 100%)' }}>

      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.07) 1.5px, transparent 1.5px)', backgroundSize: '34px 34px' }} />
      <div className="hidden sm:block absolute -top-20 -right-20 w-[380px] h-[380px] rounded-full border border-blue-200/35 pointer-events-none animate-[spin_30s_linear_infinite]" />
      <div className="hidden sm:block absolute -top-8 -right-8 w-[260px] h-[260px] rounded-full border border-sky-200/25 pointer-events-none animate-[spin_20s_linear_infinite_reverse]" />
      <div className="hidden sm:block absolute -bottom-16 -left-16 w-[280px] h-[280px] rounded-full border border-blue-200/20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.22) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 left-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(186,230,253,0.18) 0%, transparent 65%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* ── Header ── */}
        <div className="text-center mb-10 sm:mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-4 sm:mb-5 text-blue-600 bg-white/80 shadow-sm"
            style={{ border: '1px solid rgba(79,70,229,0.18)' }}>
            <Globe2 size={10} /> Next-Gen Dynamic Web Solutions
          </span>
          <h2 className="text-[clamp(22px,4vw,46px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
            Next-Gen Dynamic Websites for{' '}
            <span style={gradInd}>Modern Businesses</span>
          </h2>
          <p className="text-[13.5px] sm:text-[15px] text-slate-500 leading-relaxed max-w-2xl mx-auto px-2 sm:px-0">
            You need smart, scalable, result-driven websites that respond to user behaviour in real-time. Our dynamic website development service in Thanjavur is designed to provide just that.
          </p>
        </div>

        {/* ── Main content: image + text ── */}
        <div className="reveal flex flex-col lg:flex-row gap-8 lg:gap-14 items-stretch mb-12 sm:mb-16">

          {/* Image */}
          <div className="lg:w-[46%] flex-shrink-0 relative rounded-2xl sm:rounded-3xl overflow-hidden"
            style={{ minHeight: 220, boxShadow: '0 24px 60px rgba(37,99,235,0.16)' }}>
            <img
              src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=700&h=600&fit=crop&auto=format&q=80"
              alt="Dynamic website development company in Thanjavur — Ara Discover Marketing"
              loading="lazy"
              className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[1.5s]"
              style={{ minHeight: 220 }}
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.22) 0%, rgba(8,145,178,0.18) 100%)' }} />
            <div className="absolute bottom-5 left-5 right-5 px-5 py-4 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.95)' }}>
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-1">Dynamic Web Page Development in Thanjavur</p>
              <p className="text-[12.5px] font-bold text-slate-800 leading-snug">Content updates in real time, user interaction and scalability — all in one platform.</p>
            </div>
            <div className="absolute top-4 left-4 w-12 h-12 rounded-full border border-white/20 pointer-events-none" />
            <div className="absolute top-6 left-6 w-5 h-5 rounded-full border border-white/15 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="flex-1 flex flex-col justify-center gap-5">
            <p className="text-[14px] sm:text-[15px] text-slate-600 leading-[1.85]">
              As one of the best dynamic website development companies in Thanjavur, we build websites using the latest backend engines, CMS platforms, and interactive features that will make content management simple.
            </p>
            <p className="text-[14px] sm:text-[15px] text-slate-600 leading-[1.85]">
              We are experts in developing dynamic web pages in Thanjavur, which not only look good but also work well with the functionality of updating the content in real time, user interaction and scalability.
            </p>
            <p className="text-[14px] sm:text-[15px] text-slate-600 leading-[1.85]">
              We are also a trusted dynamic website designing company in Thanjavur that provides modern UI/UX designs along with strong backend architecture.
            </p>
          </div>
        </div>

        {/* ── Expertise cards ── */}
        <div className="reveal flex flex-wrap gap-3 sm:gap-4">
          {expertise.map(({ icon: Icon, label, color, desc }, i) => (
            <div
              key={label}
              className={`group flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl flex-1 min-w-full sm:min-w-[calc(50%-6px)] lg:min-w-[220px] transition-all duration-500 hover:-translate-y-2 delay-${i + 1}`}
              style={{
                background: 'rgba(255,255,255,0.80)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.90)',
                boxShadow: '0 4px 20px rgba(37,99,235,0.07)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 20px 48px ${color}18`
                e.currentTarget.style.borderColor = color + '30'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.07)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.90)'
              }}
            >
              <div className="h-0.5 w-0 rounded-full group-hover:w-10 transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${color}, ${color}44)` }} />
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{ background: `linear-gradient(135deg, ${color}18, ${color}08)`, border: `1.5px solid ${color}28` }}>
                <Icon size={17} style={{ color }} />
              </div>
              <div>
                <p className="text-[13px] sm:text-[14px] font-bold text-slate-900 mb-1.5 sm:mb-2 leading-snug">{label}</p>
                <p className="text-[11.5px] sm:text-[12.5px] text-slate-500 leading-[1.75]">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
