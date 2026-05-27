import { Clapperboard, Zap, BookOpen, MonitorPlay, Settings, DollarSign, Award, ArrowRight, CheckCircle2 } from 'lucide-react'

const reasons = [
  { icon: Clapperboard, title: 'High-Quality Cinematic Editing',      desc: 'Professional cinematic techniques — colour grading, motion design, and seamless cuts applied to every project regardless of scope.',      color: '#2563eb', num: '01' },
  { icon: Zap,          title: 'Fast Turnaround Time',                  desc: 'Deadline-driven workflow ensures your video is delivered on time without ever compromising on quality or creative depth.',                   color: '#0891b2', num: '02' },
  { icon: BookOpen,     title: 'Creative Storytelling Approach',        desc: 'Every edit is built around a narrative. We craft emotional arcs that connect your brand with your audience at every frame.',                 color: '#059669', num: '03' },
  { icon: MonitorPlay,  title: 'Platform-Optimised Video Formats',      desc: 'Videos formatted, aspect-ratio-adjusted, and optimised for YouTube, Instagram Reels, Facebook, LinkedIn, and broadcast channels.',          color: '#2563eb', num: '04' },
  { icon: Settings,     title: 'Professional Tools & Software',         desc: 'Industry-standard editing suites for colour science, audio mastering, motion graphics, and VFX compositing on every project.',              color: '#0891b2', num: '05' },
  { icon: DollarSign,   title: 'Affordable Pricing for All Businesses', desc: 'Flexible packages for startups, SMEs, and large enterprises — premium quality without the premium price tag.',                           color: '#059669', num: '06' },
]

const gradBlue = {
  background: 'linear-gradient(135deg,#2563eb,#0891b2)',
  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
}

export default function VEWhyUs() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.05) 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }} />

      {/* ── Double circle – top left ── */}
      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full border border-blue-100/60 pointer-events-none animate-[spin_38s_linear_infinite]" />
      <div className="absolute -top-14 -left-14 w-[280px] h-[280px] rounded-full border border-sky-100/50 pointer-events-none animate-[spin_24s_linear_infinite_reverse]" />

      {/* ── Double circle – bottom right ── */}
      <div className="absolute -bottom-20 -right-20 w-[360px] h-[360px] rounded-full border border-blue-100/50 pointer-events-none animate-[spin_40s_linear_infinite]" />
      <div className="absolute -bottom-10 -right-10 w-[240px] h-[240px] rounded-full border border-blue-200/35 pointer-events-none" />

      {/* Ambient orb */}
      <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.16) 0%, transparent 65%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-7">

        {/* ── Centered header ── */}
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px]
            font-bold uppercase tracking-widest mb-6 text-blue-600 bg-blue-50"
            style={{ border: '1px solid rgba(37,99,235,0.15)' }}>
            <Award size={11} /> Why Choose Us
          </span>

          <h2 className="text-[clamp(26px,3.5vw,46px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
            Why Businesses Trust Our{' '}
            <span style={gradBlue}>Video Editing Expertise</span>
          </h2>

          <p className="text-[15px] text-slate-500 leading-[1.85] max-w-[620px] mx-auto">
            Ara Discover Marketing blends creativity, technical expertise, and marketing strategy to create impactful video content — ensuring every video meets your brand objectives.
          </p>
        </div>

        {/* ── Cards: flex-wrap 3 columns ── */}
        <div className="reveal flex flex-wrap gap-5 mb-14">
          {reasons.map(({ icon: Icon, title, desc, color, num }, i) => (
            <div
              key={title}
              className={`group relative flex-1 min-w-[280px] rounded-3xl overflow-hidden cursor-default
                transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl delay-${i + 1}`}
              style={{
                background: 'white',
                border: '1.5px solid #eef2ff',
                boxShadow: '0 4px 20px rgba(37,99,235,0.05)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = color + '30'
                e.currentTarget.style.boxShadow = `0 24px 56px ${color}14`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#eef2ff'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.05)'
              }}
            >
              {/* Top accent bar */}
              <div className="h-1 w-full transition-all duration-300"
                style={{ background: `linear-gradient(90deg,${color},${color}55)` }} />

              {/* Watermark number */}
              <span className="absolute -bottom-3 -right-1 text-[80px] font-black leading-none select-none pointer-events-none transition-all duration-400 group-hover:scale-110 origin-bottom-right"
                style={{ color: color + '09' }}>
                {num}
              </span>

              <div className="p-7">
                {/* Icon + number row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center
                    transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    style={{
                      background: `linear-gradient(135deg,${color}18,${color}08)`,
                      border: `1.5px solid ${color}22`,
                    }}>
                    <Icon size={24} style={{ color }} />
                  </div>

                  <span className="text-[11px] font-black px-2.5 py-1 rounded-xl transition-all duration-300"
                    style={{
                      background: color + '10',
                      color,
                      border: `1px solid ${color}20`,
                    }}>
                    {num}
                  </span>
                </div>

                <h3 className="text-[15px] font-bold text-slate-900 leading-snug mb-3 transition-colors duration-200 group-hover:text-slate-800">
                  {title}
                </h3>
                <p className="text-[13px] text-slate-500 leading-[1.78]">{desc}</p>

                {/* Bottom check */}
                <div className="flex items-center gap-2 mt-5 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
                  <CheckCircle2 size={13} style={{ color }} />
                  <span className="text-[11.5px] font-semibold" style={{ color }}>Delivered with precision</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom banner ── */}
        <div className="reveal flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-6 rounded-3xl overflow-hidden relative"
          style={{
            background: 'linear-gradient(135deg, #1d4ed8 0%, #0284c7 50%, #0891b2 100%)',
            boxShadow: '0 20px 60px rgba(29,78,216,0.28)',
          }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 25% 50%, rgba(255,255,255,0.12) 0%, transparent 60%)' }} />

          {/* Double circle inside banner */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 w-28 h-28 rounded-full border border-white/10 pointer-events-none" />
          <div className="absolute right-12 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-white/08 pointer-events-none" />

          <div className="relative flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)' }}>
              <Award size={22} className="text-white" />
            </div>
            <div>
              <p className="text-[14px] font-bold text-white mb-0.5">Professional Video Editing Studio in Thanjavur</p>
              <p className="text-[12.5px] leading-snug max-w-[480px]" style={{ color: 'rgba(255,255,255,0.70)' }}>
                One of the best videography and editing services in Thanjavur — visually compelling, business-centric video content for every brand.
              </p>
            </div>
          </div>

          <div className="relative flex-shrink-0 text-center sm:text-right">
            <a href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: 'white', color: '#1d4ed8' }}>
              Work With Us <ArrowRight size={14} />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
