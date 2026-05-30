import { Clock, Cpu, Layers, MessageSquare, CheckCircle2, Shield } from 'lucide-react'

const commitments = [
  {
    icon: Clock,
    title: 'On-Time Delivery',
    desc: 'Zero compromise on quality. We deliver every project on schedule with strict milestone tracking and proactive communication.',
    color: '#1e40af',
  },
  {
    icon: Cpu,
    title: 'AI-Driven, Innovative Mobile Solutions',
    desc: 'Every app we build leverages the latest AI capabilities — from smart recommendations to intelligent automation and insights.',
    color: '#2563eb',
  },
  {
    icon: Layers,
    title: 'Full-Cycle Support',
    desc: 'From strategy and design through deployment and post-launch maintenance, we are your partner at every stage.',
    color: '#0891b2',
  },
  {
    icon: MessageSquare,
    title: 'Transparent Communication',
    desc: 'Regular progress updates, clear reporting, and direct access to your development team throughout the entire project.',
    color: '#059669',
  },
]

export default function MAAssurance() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg,#03111f 0%,#040d1a 100%)' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse,rgba(37,99,235,0.1) 0%,transparent 70%)' }} />
      <div className="absolute inset-0 pointer-events-none opacity-15"
        style={{ backgroundImage: 'radial-gradient(circle,rgba(37,99,235,0.5) 1px,transparent 1px)', backgroundSize: '44px 44px' }} />
      <div className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg,transparent,rgba(37,99,235,0.4),transparent)' }} />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(37,99,235,0.15)', color: '#60a5fa', border: '1px solid rgba(37,99,235,0.3)' }}>
            <Shield size={11} /> Commitment You Can Trust
          </span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-bold text-white leading-tight tracking-tight mb-4">
            Our Promise to{' '}
            <span style={{ background: 'linear-gradient(135deg,#60a5fa,#60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Every Client
            </span>
          </h2>
          <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#94a3b8' }}>
            When you partner with Ara Discover Marketing, you get more than just an app — you get a long-term technology partner committed to your growth.
          </p>
        </div>

        {/* Commitment cards — 2-col on sm, 4-col on xl */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 reveal">
          {commitments.map(({ icon: Icon, title, desc, color }, i) => (
            <div key={title}
              className={`reveal delay-${i + 1} p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-default`}
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              onMouseEnter={e => {
                e.currentTarget.style.border = `1px solid ${color}40`
                e.currentTarget.style.background = `${color}08`
                e.currentTarget.style.boxShadow = `0 12px 40px rgba(0,0,0,0.3)`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Top accent line */}
              <div className="h-0.5 rounded-full mb-5 w-10" style={{ background: color }} />
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                <Icon size={20} style={{ color }} />
              </div>
              <h3 className="text-[14px] font-bold text-white mb-2.5 leading-snug">{title}</h3>
              <p className="text-[12.5px] leading-[1.75]" style={{ color: '#94a3b8' }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom checklist strip */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl flex flex-wrap items-center gap-4 sm:gap-6 reveal"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(37,99,235,0.2)' }}>
          {[
            'On-time delivery with zero compromise on quality',
            'AI-driven, innovative mobile solutions',
            'Full-cycle support from strategy to deployment',
            'Transparent communication and reporting',
          ].map(item => (
            <div key={item} className="flex items-center gap-2.5">
              <CheckCircle2 size={14} style={{ color: '#60a5fa' }} className="flex-shrink-0" />
              <span className="text-[13px] font-medium" style={{ color: '#cbd5e1' }}>{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
