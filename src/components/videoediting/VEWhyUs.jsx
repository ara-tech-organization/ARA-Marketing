import { Clapperboard, Zap, BookOpen, MonitorPlay, Settings, DollarSign, Award, ArrowRight, CheckCircle2, Play } from 'lucide-react'

const reasons = [
  { icon: Clapperboard, title: 'High-Quality Cinematic Editing',      desc: 'Professional cinematic techniques — colour grading, motion design, and seamless cuts applied to every project.',      color: '#2563eb', accent: 'rgba(37,99,235,0.07)',  border: 'rgba(37,99,235,0.18)', num: '01' },
  { icon: Zap,          title: 'Fast Turnaround Time',                  desc: 'Deadline-driven workflow ensures your video is delivered on time without compromising on quality or creative depth.',   color: '#059669', accent: 'rgba(5,150,105,0.07)',  border: 'rgba(5,150,105,0.18)', num: '02' },
  { icon: BookOpen,     title: 'Creative Storytelling Approach',        desc: 'Every edit is built around a narrative. We craft emotional arcs that connect your brand with your audience.',           color: '#7c3aed', accent: 'rgba(124,58,237,0.07)', border: 'rgba(124,58,237,0.18)', num: '03' },
  { icon: MonitorPlay,  title: 'Platform-Optimised Video Formats',      desc: 'Videos formatted and optimised for YouTube, Instagram Reels, Facebook, LinkedIn, and broadcast channels.',              color: '#db2777', accent: 'rgba(219,39,119,0.07)', border: 'rgba(219,39,119,0.18)', num: '04' },
  { icon: Settings,     title: 'Professional Tools & Software',         desc: 'Industry-standard editing suites for colour science, audio mastering, motion graphics, and VFX compositing.',           color: '#0891b2', accent: 'rgba(8,145,178,0.07)',  border: 'rgba(8,145,178,0.18)', num: '05' },
  { icon: DollarSign,   title: 'Affordable Pricing for All Businesses', desc: 'Flexible packages for startups, SMEs, and large enterprises — premium quality without the premium price tag.',         color: '#d97706', accent: 'rgba(217,119,6,0.07)',  border: 'rgba(217,119,6,0.18)', num: '06' },
]

export default function VEWhyUs() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: '#f0f6ff' }}>

      {/* BG decorations */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.055) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 65%)' }} />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.09) 0%, transparent 65%)' }} />
      <div className="absolute top-0 left-0 w-80 h-80 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.07) 0%, transparent 60%)' }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 pointer-events-none"
        style={{ background: 'linear-gradient(315deg, rgba(124,58,237,0.07) 0%, transparent 60%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)', color: '#2563eb' }}>
            <Award size={11} /> Why Choose Us
          </span>
          <h2 className="text-[clamp(23px,3.6vw,45px)] font-bold leading-[1.1] tracking-tight mb-4" style={{ fontWeight: 700, color: '#0f172a' }}>
            Why Businesses Trust Our{' '}
            <span style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              Video Editing Expertise
            </span>
          </h2>
          <p className="text-[15px] leading-[1.85] max-w-[580px] mx-auto" style={{ color: '#64748b' }}>
            ARA Discover Marketing blends creativity, technical expertise, and marketing strategy to create impactful video content.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12 reveal">
          {reasons.map(({ icon: Icon, title, desc, color, accent, border, num }) => (
            <div
              key={title}
              className="group relative rounded-2xl overflow-hidden transition-all duration-350 hover:-translate-y-2 bg-white"
              style={{
                border: `1px solid ${border}`,
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.12), 0 0 0 1px ${color}40`
                e.currentTarget.style.borderColor = color + '55'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.06)'
                e.currentTarget.style.borderColor = border
              }}
            >
              {/* Top accent bar */}
              <div className="h-[3px] w-full"
                style={{ background: `linear-gradient(90deg, ${color}, ${color}55)` }} />

              {/* Ghost number */}
              <span className="absolute -bottom-2 -right-1 text-[80px] font-black leading-none select-none pointer-events-none"
                style={{ color: color + '0e' }}>{num}</span>

              <div className="p-6">
                {/* Icon + number row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: accent, border: `1px solid ${border}` }}>
                    <Icon size={20} style={{ color }} />
                  </div>
                  <span className="text-[11px] font-black px-2.5 py-1 rounded-lg"
                    style={{ background: accent, color, border: `1px solid ${border}` }}>
                    {num}
                  </span>
                </div>

                <h3 className="text-[14px] font-bold leading-snug mb-2.5" style={{ fontWeight: 700, color: '#0f172a' }}>
                  {title}
                </h3>
                <p className="text-[13px] leading-[1.78]" style={{ color: '#64748b' }}>
                  {desc}
                </p>

                {/* Hover reveal */}
                <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                  <CheckCircle2 size={12} style={{ color }} />
                  <span className="text-[11.5px] font-semibold" style={{ color }}>Delivered with precision</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="reveal relative rounded-2xl overflow-hidden px-7 py-6 flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{
            background: 'linear-gradient(135deg, #1e3a8a 0%, #4338ca 100%)',
            boxShadow: '0 16px 48px rgba(37,99,235,0.25)',
          }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 60%)' }} />
          <div className="relative flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)' }}>
              <Play size={18} className="text-white" />
            </div>
            <div>
              <p className="text-[14px] font-bold text-white mb-0.5" style={{ fontWeight: 700 }}>
                Professional Video Editing Studio in Thanjavur
              </p>
              <p className="text-[12.5px] leading-snug max-w-[480px]" style={{ color: 'rgba(255,255,255,0.72)' }}>
                Delivering visually compelling, business-centric video content for brands across industries.
              </p>
            </div>
          </div>
          <a href="/ARA-Marketing/contact-us"
            className="relative flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.28)', backdropFilter: 'blur(10px)' }}>
            Work With Us <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  )
}
