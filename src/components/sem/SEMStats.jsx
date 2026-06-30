import useCounter from '../../hooks/useCounter'
import { FolderOpen, Users, TrendingUp, Star, Globe2 } from 'lucide-react'

const allStats = [
  { target: 200, suffix: '+', label: 'PPC Campaigns Successfully Managed',  sub: 'All ad types covered',      icon: FolderOpen, color: '#2563eb' },
  { target: 95,  suffix: '%', label: 'Client Satisfaction Rate',             sub: 'Consistent & measurable',   icon: Users,      color: '#7c3aed' },
  { target: 300, suffix: '%', label: 'Average Lead Growth',                  sub: 'Across partner businesses',  icon: TrendingUp, color: '#0891b2' },
  { target: 150, suffix: '+', label: 'Google Ads Campaign Optimizations',    sub: 'Ongoing improvements',       icon: Star,       color: '#059669' },
  { target: null, suffix: '', label: 'Multi-Industry Advertising Expertise', sub: 'Diverse sector experience',  icon: Globe2,     color: '#d97706' },
]

function StatItem({ target, suffix, label, sub, icon: Icon, color, isLast }) {
  const [count, ref] = useCounter(target || 0, 1800)
  return (
    <div ref={ref} className="group flex flex-col items-center text-center px-6 py-8 flex-1 relative
      hover:-translate-y-1 transition-all duration-300">

      {/* Vertical divider (hidden on last) */}
      {!isLast && (
        <div className="absolute top-8 right-0 bottom-8 w-px"
          style={{ background: 'linear-gradient(180deg, transparent, #e2e8f0 30%, #e2e8f0 70%, transparent)' }} />
      )}

      {/* Icon */}
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
        style={{ background: `linear-gradient(135deg, ${color}18, ${color}08)`, border: `1.5px solid ${color}25` }}>
        <Icon size={20} style={{ color }} />
      </div>

      {/* Number */}
      <p className="text-[clamp(26px,2.7vw,40px)] font-bold leading-none tracking-tight mb-2"
        style={{ background: `linear-gradient(135deg, ${color}, ${color}88)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
        {target !== null ? `${count}${suffix}` : '—'}
      </p>

      {/* Label */}
      <p className="text-[13px] font-bold text-slate-800 leading-snug mb-1">{label}</p>
      <p className="text-[11px] text-slate-400">{sub}</p>

      {/* Bottom accent dot */}
      <div className="w-1.5 h-1.5 rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: color }} />
    </div>
  )
}

export default function SEMStats() {
  return (
    <section className="overflow-hidden py-16 bg-white">

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row gap-8 items-end mb-12 reveal">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
              border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
              <TrendingUp size={11} /> Our Results
            </span>
            <h2 className="text-[clamp(25px,3.1vw,45px)] font-bold text-slate-900 leading-[1.1] tracking-tight">
              Delivering Measurable Advertising{' '}
              <span className="text-gradient-blue">Performance &amp; ROI</span>
            </h2>
          </div>
          <p className="text-[15px] text-slate-500 lg:max-w-[380px] leading-[1.85]">
            Our Google paid advertising in Thanjavur strategies are trusted by businesses for scalable business growth and enhanced lead generation.
          </p>
        </div>

        {/* ── Horizontal stats panel ── */}
        <div className="reveal rounded-3xl border border-slate-100 overflow-hidden"
          style={{ boxShadow: '0 8px 40px rgba(37,99,235,0.07)' }}>

          {/* Top accent */}
          <div className="h-1 w-full"
            style={{ background: 'linear-gradient(90deg,#1d4ed8,#2563eb,#7c3aed,#059669,#d97706)' }} />

          <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 divide-slate-100">
            {allStats.map((s, i) => (
              <StatItem key={s.label} {...s} isLast={i === allStats.length - 1} />
            ))}
          </div>
        </div>

        {/* ── Bottom strip ── */}
        <div className="reveal mt-5 flex flex-col sm:flex-row items-center justify-center gap-5
          px-8 py-4 rounded-2xl bg-slate-50 border border-slate-100">
          <Star size={14} className="text-amber-400 fill-amber-400 flex-shrink-0" />
          <span className="text-[13px] font-bold text-slate-800">Real-Time Campaign Performance Tracking</span>
          <span className="hidden sm:block w-px h-4 bg-slate-200" />
          <span className="text-[13px] text-slate-500">Continuous monitoring &amp; bid optimization</span>
        </div>

      </div>
    </section>
  )
}
