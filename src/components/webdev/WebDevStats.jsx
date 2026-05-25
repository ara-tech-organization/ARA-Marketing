import useCounter from '../../hooks/useCounter'
import { Globe2, Users, TrendingUp, Monitor, ShoppingCart, Layers } from 'lucide-react'

function StatCard({ target, suffix, label, icon: Icon, delay }) {
  const [count, ref] = useCounter(target, 1800)
  return (
    <div
      ref={ref}
      className={`reveal delay-${delay} relative flex flex-col items-center text-center px-5 py-8
        bg-white border border-blue-100 rounded-3xl
        hover:shadow-xl hover:shadow-blue-100/60 hover:-translate-y-1.5
        transition-all duration-300`}
    >
      {/* Icon */}
      <div className="rounded-2xl flex items-center justify-center mb-5"
        style={{ width: 48, height: 48, background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)' }}>
        <Icon size={20} className="text-blue-600" />
      </div>

      {/* Number badge box */}
      <div className="inline-flex items-baseline gap-0.5 px-4 py-2 rounded-2xl mb-3"
        style={{ background: 'linear-gradient(135deg, #eff6ff, #dbeafe)', border: '1.5px solid #bfdbfe' }}>
        <span className="text-[clamp(26px,3vw,40px)] font-black leading-none tracking-tight text-blue-700">
          {count}
        </span>
        <span className="text-[clamp(16px,2vw,24px)] font-black text-blue-500 leading-none">
          {suffix}
        </span>
      </div>

      <p className="text-[13px] font-semibold text-slate-600 leading-snug">{label}</p>
    </div>
  )
}

const stats = [
  { target: 150, suffix: '+', label: 'Websites Successfully Delivered', icon: Globe2,       delay: 1 },
  { target: 98,  suffix: '%', label: 'Client Satisfaction Rate',        icon: Users,        delay: 2 },
  { target: 200, suffix: '%', label: 'Avg Improvement in Performance',  icon: TrendingUp,   delay: 3 },
  { target: 100, suffix: '+', label: 'Responsive Business Websites',    icon: Monitor,      delay: 4 },
  { target: 50,  suffix: '+', label: 'E-commerce Platforms Developed',  icon: ShoppingCart, delay: 1 },
]

export default function WebDevStats() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #e0f2fe 100%)' }}
    >
      <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.45) 0%, transparent 70%)' }} />
      <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.35) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #93c5fd 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.25,
        }} />
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #93c5fd, transparent)' }} />

      <div className="relative max-w-[1200px] mx-auto px-7">
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
            We are proud to be among the best website design and development services in Thanjavur
            that deliver complete measurable results for businesses across multiple industries.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {stats.map(s => <StatCard key={s.label} {...s} />)}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #93c5fd, transparent)' }} />
    </section>
  )
}
