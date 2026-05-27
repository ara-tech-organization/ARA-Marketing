import { Clapperboard, Zap, BookOpen, MonitorPlay, Settings, DollarSign, Award, ArrowRight } from 'lucide-react'

const reasons = [
  { icon: Clapperboard, title: 'High-Quality Cinematic Editing',      desc: 'Professional cinematic techniques — colour grading, motion design, and seamless cuts applied to every project regardless of scope.',         color: '#2563eb', num: '01' },
  { icon: Zap,          title: 'Fast Turnaround Time',                  desc: 'Deadline-driven workflow ensures your video is delivered on time without ever compromising on quality or creative depth.',                       color: '#7c3aed', num: '02' },
  { icon: BookOpen,     title: 'Creative Storytelling Approach',        desc: 'Every edit is built around a narrative. We craft emotional arcs that connect your brand with your audience at every frame.',                     color: '#0891b2', num: '03' },
  { icon: MonitorPlay,  title: 'Platform-Optimised Video Formats',      desc: 'Videos formatted, aspect-ratio-adjusted, and optimised for YouTube, Instagram Reels, Facebook, LinkedIn, and broadcast channels.',              color: '#059669', num: '04' },
  { icon: Settings,     title: 'Professional Tools & Software',         desc: 'Industry-standard editing suites for colour science, audio mastering, motion graphics, and VFX compositing on every project.',                  color: '#d97706', num: '05' },
  { icon: DollarSign,   title: 'Affordable Pricing for All Businesses', desc: 'Flexible packages for startups, SMEs, and large enterprises — premium quality without the premium price tag.',                               color: '#dc2626', num: '06' },
]

const gradBlue = {
  background: 'linear-gradient(135deg,#2563eb,#7c3aed)',
  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
}

export default function VEWhyUs() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.05) 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }} />

      {/* ── Double circle – top left ── */}
      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full border border-blue-100/60 pointer-events-none" />
      <div className="absolute -top-14 -left-14 w-[280px] h-[280px] rounded-full border border-violet-100/50 pointer-events-none" />

      {/* ── Double circle – bottom right ── */}
      <div className="absolute -bottom-20 -right-20 w-[360px] h-[360px] rounded-full border border-blue-100/50 pointer-events-none animate-[spin_40s_linear_infinite]" />
      <div className="absolute -bottom-10 -right-10 w-[240px] h-[240px] rounded-full border border-blue-200/35 pointer-events-none animate-[spin_25s_linear_infinite_reverse]" />

      {/* Ambient orb */}
      <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.18) 0%, transparent 65%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-7">

        {/* ── Two-column: sticky left header + scrolling right feature rows ── */}
        <div className="flex flex-col lg:flex-row gap-16">

          {/* ── Left: header panel ── */}
          <div className="lg:w-[340px] flex-shrink-0 reveal">

            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px]
              font-bold uppercase tracking-widest mb-6 text-blue-600 bg-blue-50"
              style={{ border: '1px solid rgba(37,99,235,0.15)' }}>
              <Award size={11} /> Why Choose Us
            </span>

            <h2 className="text-[clamp(26px,3vw,44px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-5">
              Why Businesses Trust Our{' '}
              <span style={gradBlue}>Video Editing Expertise</span>
            </h2>

            <p className="text-[14.5px] text-slate-500 leading-[1.85] mb-8">
              Ara Discover Marketing blends creativity, technical expertise, and marketing strategy to create impactful video content — ensuring every video meets your brand objectives and audience expectations.
            </p>

            {/* Mini stats */}
            <div className="flex flex-col gap-5 mb-8 p-5 rounded-2xl"
              style={{ background: 'linear-gradient(135deg, #eff6ff, #f5f3ff)', border: '1px solid #e0eaff' }}>
              {[
                ['500+', 'Projects Delivered', '#2563eb'],
                ['98%',  'Client Satisfaction', '#7c3aed'],
                ['5M+',  'Views Generated',     '#0891b2'],
              ].map(([num, label, color]) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="text-[28px] font-black leading-none"
                    style={{ background: `linear-gradient(135deg,${color},${color}88)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {num}
                  </span>
                  <span className="text-[12.5px] text-slate-500 font-medium">{label}</span>
                </div>
              ))}
            </div>

            <a href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-white text-[13px] font-bold
                transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', boxShadow: '0 8px 28px rgba(37,99,235,0.28)' }}>
              Work With Us <ArrowRight size={14} />
            </a>
          </div>

          {/* ── Right: feature rows ── */}
          <div className="flex-1 reveal">
            {reasons.map(({ icon: Icon, title, desc, color, num }, i) => (
              <div
                key={title}
                className="group relative flex items-start gap-5 cursor-default transition-all duration-400"
                style={{
                  padding: '26px 20px 26px 0',
                  borderBottom: i < reasons.length - 1 ? '1px solid #f0f4ff' : 'none',
                  borderLeft: '3px solid transparent',
                  paddingLeft: '0',
                  transition: 'border-left-color 0.3s, padding-left 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderLeftColor = color
                  e.currentTarget.style.paddingLeft = '20px'
                  e.currentTarget.style.background = color + '04'
                  e.currentTarget.style.borderRadius = '12px'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderLeftColor = 'transparent'
                  e.currentTarget.style.paddingLeft = '0'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {/* Watermark number */}
                <div className="flex-shrink-0 w-14 pt-1 select-none">
                  <span className="text-[52px] font-black leading-none"
                    style={{ background: `linear-gradient(135deg, ${color}20, ${color}06)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {num}
                  </span>
                </div>

                {/* Icon circle */}
                <div className="flex-shrink-0 mt-1 w-12 h-12 rounded-2xl flex items-center justify-center
                  transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{ background: `linear-gradient(135deg,${color}14,${color}06)`, border: `1.5px solid ${color}22` }}>
                  <Icon size={20} style={{ color }} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-[15px] font-bold text-slate-900 leading-snug mb-2 group-hover:text-slate-800 transition-colors duration-200">
                    {title}
                  </h3>
                  <p className="text-[13px] text-slate-500 leading-[1.80]">{desc}</p>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 mt-1 w-7 h-7 rounded-full flex items-center justify-center
                  opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                  style={{ background: color + '12' }}>
                  <ArrowRight size={12} style={{ color }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom banner ── */}
        <div className="reveal mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-6 rounded-3xl overflow-hidden relative"
          style={{
            background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 50%, #7c3aed 100%)',
            boxShadow: '0 20px 60px rgba(37,99,235,0.28)',
          }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 25% 50%, rgba(255,255,255,0.12) 0%, transparent 60%)' }} />

          {/* Double circle decoration inside banner */}
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
            <p className="text-[42px] font-black leading-none text-white">500+</p>
            <p className="text-[12px] font-semibold mt-0.5" style={{ color: 'rgba(255,255,255,0.60)' }}>Projects Delivered</p>
          </div>
        </div>

      </div>
    </section>
  )
}
