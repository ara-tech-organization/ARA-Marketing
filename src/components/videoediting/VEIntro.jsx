import { Wand2, Layers, Globe, Palette } from 'lucide-react'

const expertise = [
  { icon: Wand2,   label: 'Digital Marketing Video', color: '#2563eb', desc: 'Platform-specific edits crafted to drive engagement and conversions across all digital channels.' },
  { icon: Layers,  label: 'Cinematic Storytelling',   color: '#7c3aed', desc: 'Narrative-driven edits with professional colour grading, motion effects, and seamless transitions.' },
  { icon: Globe,   label: 'Platform Optimisation',    color: '#0891b2', desc: 'Videos formatted and optimised for YouTube, Instagram, Facebook, and corporate distribution.' },
  { icon: Palette, label: 'Brand Identity',           color: '#059669', desc: 'Consistent visual language that reinforces your brand across every frame and every format.' },
]

const gradBlue = {
  background: 'linear-gradient(135deg,#2563eb,#7c3aed)',
  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
}

export default function VEIntro() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #f0f7ff 0%, #eff6ff 55%, #e0f2fe 100%)' }}>

      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.07) 1.5px, transparent 1.5px)', backgroundSize: '34px 34px' }} />
      <div className="hidden sm:block absolute -top-20 -right-20 w-[380px] h-[380px] rounded-full border border-blue-200/35 pointer-events-none animate-[spin_30s_linear_infinite]" />
      <div className="hidden sm:block absolute -top-8 -right-8 w-[260px] h-[260px] rounded-full border border-violet-200/25 pointer-events-none animate-[spin_20s_linear_infinite_reverse]" />
      <div className="hidden sm:block absolute -bottom-16 -left-16 w-[280px] h-[280px] rounded-full border border-blue-300/20 pointer-events-none" />
      <div className="hidden sm:block absolute -bottom-6 -left-6 w-[180px] h-[180px] rounded-full border border-blue-200/15 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.30) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 left-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(196,181,253,0.20) 0%, transparent 65%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-7">

        {/* ── Header ── */}
        <div className="text-center mb-10 sm:mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px]
            font-bold uppercase tracking-widest mb-4 sm:mb-5 text-blue-600 bg-white/80 shadow-sm"
            style={{ border: '1px solid rgba(37,99,235,0.18)' }}>
            <Layers size={10} /> Professional Video Editing
          </span>
          <h2 className="text-[clamp(22px,4vw,46px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
            Professional Video Editing That Turns Ideas Into{' '}
            <span style={gradBlue}>Powerful Visual Stories</span>
          </h2>
          <p className="text-[13.5px] sm:text-[15px] text-slate-500 leading-relaxed max-w-2xl mx-auto px-2 sm:px-0">
            Today, video content is the most effective way to engage audiences and build brand trust. We offer advanced digital marketing video editing services in Thanjavur, enabling businesses to convey their message clearly and creatively. If you are looking for the best video editing services in Thanjavur, then you are at the right place.
          </p>
        </div>

        {/* ── Image banner ── */}
        <div className="reveal relative rounded-2xl sm:rounded-3xl overflow-hidden mb-10 sm:mb-14 mx-auto"
          style={{ height: 200, maxWidth: 850, boxShadow: '0 24px 60px rgba(37,99,235,0.16)' }}>
          <img
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=900&h=400&fit=crop&auto=format&q=80"
            alt="Professional video editing studio in Thanjavur — Ara Discover Marketing"
            loading="lazy"
            className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[1.5s]"
          />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(219,234,254,0.50) 0%, rgba(224,242,254,0.45) 55%, rgba(186,230,253,0.48) 100%)' }} />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8">
            <p className="text-[10px] sm:text-[12px] font-bold uppercase tracking-[0.12em] sm:tracking-[0.15em] mb-2 sm:mb-4" style={{ color: '#1e293b' }}>As a corporate video editing company in Thanjavur</p>
            <p className="text-[clamp(13px,2vw,28px)] font-bold leading-snug max-w-2xl text-slate-900">
              We deliver quality solutions for branding, advertising, and promotional campaigns — every video is emotionally and strategically impactful.
            </p>
          </div>
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-12 sm:w-20 h-12 sm:h-20 rounded-full border border-white/20 pointer-events-none" />
          <div className="absolute top-6 left-6 sm:top-10 sm:left-10 w-5 sm:w-8 h-5 sm:h-8 rounded-full border border-white/15 pointer-events-none" />
        </div>

        {/* ── Expertise cards ── */}
        <div className="reveal flex flex-wrap gap-3 sm:gap-4">
          {expertise.map(({ icon: Icon, label, color, desc }, i) => (
            <div
              key={label}
              className={`group flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl flex-1 min-w-[calc(50%-6px)] sm:min-w-[220px] transition-all duration-500 hover:-translate-y-2 delay-${i + 1}`}
              style={{
                background: 'rgba(255,255,255,0.75)',
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
