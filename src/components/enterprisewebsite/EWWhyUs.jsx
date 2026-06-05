import { Award, Cpu, ShieldCheck, Clock4, Layers3, ArrowUpRight } from 'lucide-react'

const reasons = [
  {
    num: '01',
    icon: Award,
    title: 'Top Enterprise Web Development Agency in Thanjavur',
    body: 'Proven track record across finance, healthcare, retail, logistics, and global enterprises — consistently rated the most trusted agency in the region.',
    color: '#2563eb',
    grad: 'linear-gradient(135deg,#eff6ff,#dbeafe)',
    border: '#bfdbfe',
    tag: 'Industry Leader',
  },
  {
    num: '02',
    icon: Cpu,
    title: 'AI-Integrated Websites for Superior Performance',
    body: 'As a leading enterprise website development company in Thanjavur, we build AI-powered platforms for better decision-making, higher user engagement, and intelligent analytics.',
    color: '#7c3aed',
    grad: 'linear-gradient(135deg,#f5f3ff,#ede9fe)',
    border: '#ddd6fe',
    tag: 'AI-Powered',
  },
  {
    num: '03',
    icon: ShieldCheck,
    title: 'Enterprise-Level Security Protocols',
    body: 'Industry-grade security measures including SSL, WAF protection, GDPR compliance, and ISO-aligned protocols protecting sensitive data at every layer.',
    color: '#0891b2',
    grad: 'linear-gradient(135deg,#ecfeff,#cffafe)',
    border: '#a5f3fc',
    tag: 'Fully Secured',
  },
  {
    num: '04',
    icon: Clock4,
    title: 'Transparent Process & Timely Delivery',
    body: 'Our enterprise web development services in Thanjavur include structured sprints, clear communication, and dedicated project management ensuring consistent on-time delivery.',
    color: '#059669',
    grad: 'linear-gradient(135deg,#ecfdf5,#d1fae5)',
    border: '#a7f3d0',
    tag: 'On-Time Always',
  },
  {
    num: '05',
    icon: Layers3,
    title: 'Multi-Industry Experience & Domain Expertise',
    body: "Tailored strategies for every domain — your solution aligns with your industry's unique demands, compliance requirements, and growth targets.",
    color: '#f59e0b',
    grad: 'linear-gradient(135deg,#fffbeb,#fef3c7)',
    border: '#fde68a',
    tag: 'Domain Expert',
  },
]

function WhyCard({ num, Icon, title, body, color, grad, border, tag }) {
  return (
    <div
      className="group relative rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 overflow-hidden transition-all duration-300 cursor-default bg-white"
      style={{ border: `1.5px solid ${border}`, boxShadow: '0 4px 18px rgba(0,0,0,0.06)' }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = `0 16px 44px ${color}1e`
        e.currentTarget.style.borderColor = `${color}55`
        e.currentTarget.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 4px 18px rgba(0,0,0,0.06)'
        e.currentTarget.style.borderColor = border
        e.currentTarget.style.transform = 'none'
      }}>

      {/* Watermark number */}
      <span className="absolute -top-2 -right-1 text-[64px] sm:text-[80px] font-bold leading-none select-none pointer-events-none"
        style={{ color: `${color}0c` }}>
        {num}
      </span>

      {/* Icon + tag row */}
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
          style={{ background: grad, border: `1.5px solid ${border}` }}>
          <Icon size={17} style={{ color }} />
        </div>
        <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 sm:px-2.5 py-1 rounded-full flex-shrink-0 ml-2"
          style={{ background: `${color}10`, color, border: `1px solid ${color}25` }}>
          {tag}
        </span>
      </div>

      {/* Reason label */}
      <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-1 sm:mb-1.5"
        style={{ color: `${color}80` }}>
        Reason {num}
      </p>

      <h3 className="text-[13px] sm:text-[14px] lg:text-[15px] font-bold text-slate-800 mb-2 sm:mb-2.5 leading-snug">{title}</h3>
      <p className="text-[11.5px] sm:text-[12.5px] lg:text-[13px] text-slate-500 leading-[1.78]">{body}</p>

      {/* Learn more — hover only */}
      <div className="mt-3 sm:mt-4 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
        <span className="text-[11px] font-bold" style={{ color }}>Learn more</span>
        <ArrowUpRight size={11} style={{ color }} />
      </div>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
        style={{ background: `linear-gradient(90deg,${color},${color}55)` }} />
    </div>
  )
}

export default function EWWhyUs() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden"
      style={{ background: 'linear-gradient(145deg,#040e1f 0%,#0d2244 55%,#060f22 100%)' }}>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.09) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      {/* Orbs — only md+ to avoid clutter on mobile */}
      <div className="hidden md:block absolute top-0 right-0 w-[380px] h-[380px] rounded-full pointer-events-none animate-orb"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.13) 0%, transparent 65%)' }} />
      <div className="hidden md:block absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full pointer-events-none animate-orb-rev"
        style={{ background: 'radial-gradient(circle, rgba(8,145,178,0.09) 0%, transparent 65%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-14 reveal">
          <span className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-4 sm:mb-5"
            style={{ background: 'rgba(124,58,237,0.18)', border: '1px solid rgba(167,139,250,0.28)', color: '#c4b5fd' }}>
            <Award size={9} /> Why Choose Us
          </span>
          <h2 className="text-[clamp(20px,4.5vw,46px)] font-bold leading-[1.10] tracking-tight mb-3 sm:mb-4" style={{ color: '#ffffff' }}>
            Why ARA Discover Marketing{' '}
            <br className="hidden sm:block lg:hidden" />
            <span style={{ background: 'linear-gradient(135deg,#a78bfa,#38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Stands Apart
            </span>
          </h2>
          <p className="text-[12.5px] sm:text-[14px] leading-[1.85] max-w-[480px] mx-auto px-2 sm:px-0"
            style={{ color: 'rgba(255,255,255,0.40)' }}>
            Five compelling reasons enterprises across Thanjavur and beyond trust us for their most critical digital initiatives.
          </p>
        </div>

        {/* ── Cards layout ── */}
        <div className="flex flex-col gap-3 sm:gap-4">

          {/* Row 1: 1 col (xs) → 2 col (sm+) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 reveal">
            {reasons.slice(0, 2).map(r => (
              <WhyCard key={r.num} {...r} Icon={r.icon} />
            ))}
          </div>

          {/* Row 2: 1 col (xs) → 2 col (sm) → 3 col (lg) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 reveal delay-2">
            {reasons.slice(2).map(r => (
              <WhyCard key={r.num} {...r} Icon={r.icon} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
