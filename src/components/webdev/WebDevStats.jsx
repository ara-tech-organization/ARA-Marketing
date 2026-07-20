import useCounter from '../../hooks/useCounter'
import { Globe2, Users, TrendingUp, Monitor, ShoppingCart, Layers } from 'lucide-react'

const stats = [
  { target: 150, suffix: '+', label: 'Websites Successfully Delivered', icon: Globe2,       },
  { target: 98,  suffix: '%', label: 'Client Satisfaction Rate',        icon: Users,        },
  { target: 200, suffix: '%', label: 'Avg Performance Improvement',     icon: TrendingUp,   },
  { target: 100, suffix: '+', label: 'Responsive Business Websites',    icon: Monitor,      },
  { target: 50,  suffix: '+', label: 'E-commerce Platforms Developed',  icon: ShoppingCart, },
]

function StatItem({ target, suffix, label, icon: Icon, index }) {
  const [count, ref] = useCounter(target, 1800)
  return (
    <div ref={ref}
      className={`reveal delay-${(index % 4) + 1} group flex flex-col items-center text-center
        px-6 py-8 relative cursor-default transition-all duration-300 hover:-translate-y-1`}>

      {/* Vertical right border — hidden on last */}
      {index < stats.length - 1 && (
        <div className="hidden lg:block absolute right-0 inset-y-8 w-px"
          style={{ background: 'var(--brand-gradient-line-vertical)' }} />
      )}

      {/* Icon pill */}
      <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl mb-5
        transition-all duration-300 group-hover:scale-110"
        style={{ background: 'rgba(96,165,250,0.15)', border: '1px solid rgba(96,165,250,0.3)', boxShadow: '0 2px 12px rgba(37,99,235,0.15)' }}>
        <Icon size={20} className="text-blue-300" />
      </div>

      {/* Number */}
      <div className="flex items-end gap-0.5 mb-3">
        <span className="font-bold leading-none tracking-tight text-white"
          style={{ fontSize: 'clamp(28px,3vw,40px)', lineHeight: 1 }}>
          {count}
        </span>
        <span className="font-bold leading-none text-blue-400 mb-1"
          style={{ fontSize: 'clamp(16px,1.8vw,22px)', lineHeight: 1 }}>
          {suffix}
        </span>
      </div>

      {/* Label */}
      <p className="text-[12.5px] font-semibold text-white/55 leading-snug max-w-[110px]">{label}</p>

      {/* Hover glow spot */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
        style={{ background: 'radial-gradient(circle at 50% 40%, rgba(96,165,250,0.18) 0%, transparent 70%)' }} />
    </div>
  )
}

export default function WebDevStats() {
  return (
    <section className="relative overflow-hidden py-16"
      style={{ background: 'linear-gradient(180deg, #0a1a34 0%, #071a36 100%)' }}>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'var(--brand-gradient-dots)',
          backgroundSize: '32px 32px',
          opacity: 0.22,
        }} />

      {/* Blue glow blobs */}
      <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'var(--brand-gradient-glow-dark)' }} />
      <div className="absolute -bottom-32 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'var(--brand-gradient-glow-dark)' }} />

      {/* Top edge line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'var(--brand-gradient-line)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 text-blue-300
            border border-blue-400/25 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
            <Layers size={11} /> Proven Results
          </span>
          <h2 className="text-[clamp(21px,2.7vw,37px)] font-bold text-white leading-tight tracking-tight mb-4">
            Proven Success in Website Design &amp;{' '}
            <span className="text-gradient-blue">Development</span>
          </h2>
          <p className="text-[15px] text-white/60 leading-relaxed max-w-xl mx-auto">
            We are proud to be among the best website design and development services in Thanjavur
            delivering measurable results across multiple industries.
          </p>
        </div>

        {/* Stats row — no panel, stats sit directly on dark bg */}
        <div className="reveal grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
          {stats.map((s, i) => (
            <StatItem key={s.label} {...s} index={i} />
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 h-px reveal"
          style={{ background: 'var(--brand-gradient-line)' }} />
      </div>

      {/* Bottom edge line */}
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'var(--brand-gradient-line)' }} />
    </section>
  )
}
