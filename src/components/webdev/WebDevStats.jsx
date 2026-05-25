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
          style={{ background: 'linear-gradient(180deg, transparent, #93c5fd, transparent)' }} />
      )}

      {/* Icon pill */}
      <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl mb-5
        transition-all duration-300 group-hover:scale-110"
        style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid #bfdbfe', boxShadow: '0 2px 12px rgba(37,99,235,0.1)' }}>
        <Icon size={20} className="text-blue-600" />
      </div>

      {/* Number */}
      <div className="flex items-end gap-0.5 mb-3">
        <span className="font-black leading-none tracking-tight text-slate-900"
          style={{ fontSize: 'clamp(36px,4vw,52px)', lineHeight: 1 }}>
          {count}
        </span>
        <span className="font-black leading-none text-blue-500 mb-1"
          style={{ fontSize: 'clamp(20px,2.2vw,28px)', lineHeight: 1 }}>
          {suffix}
        </span>
      </div>

      {/* Label */}
      <p className="text-[12.5px] font-semibold text-slate-500 leading-snug max-w-[110px]">{label}</p>

      {/* Hover glow spot */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
        style={{ background: 'radial-gradient(circle at 50% 40%, rgba(37,99,235,0.06) 0%, transparent 70%)' }} />
    </div>
  )
}

export default function WebDevStats() {
  return (
    <section className="relative overflow-hidden py-24"
      style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #e0f2fe 100%)' }}>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #93c5fd 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.22,
        }} />

      {/* Blue glow blobs */}
      <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.45) 0%, transparent 65%)' }} />
      <div className="absolute -bottom-32 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.3) 0%, transparent 65%)' }} />

      {/* Top edge line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #93c5fd, transparent)' }} />

      <div className="relative max-w-[1200px] mx-auto px-7">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/80 text-blue-600
            border border-blue-200 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 shadow-sm">
            <Layers size={11} /> Proven Results
          </span>
          <h2 className="text-[clamp(22px,3vw,38px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Proven Success in Website Design &amp;{' '}
            <span className="text-gradient-blue">Development</span>
          </h2>
          <p className="text-[15px] text-slate-500 leading-relaxed max-w-xl mx-auto">
            We are proud to be among the top-tier website design and development services in Thanjavur
            delivering measurable results across multiple industries.
          </p>
        </div>

        {/* Stats row — no panel, stats sit directly on dark bg */}
        <div className="reveal grid grid-cols-2 lg:grid-cols-5 gap-0">
          {stats.map((s, i) => (
            <StatItem key={s.label} {...s} index={i} />
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 h-px reveal"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(96,165,250,0.3), transparent)' }} />
      </div>

      {/* Bottom edge line */}
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #93c5fd, transparent)' }} />
    </section>
  )
}
