import useCounter from '../../hooks/useCounter'
import { FolderOpen, Users, TrendingUp, Star, Clock } from 'lucide-react'

function StatRow({ target, suffix, label, icon: Icon, delay, color }) {
  const [count, ref] = useCounter(target || 0, 1800)
  return (
    <div
      ref={ref}
      className={`reveal delay-${delay} group relative flex items-center gap-5 py-6
        border-b border-blue-100/40 last:border-0 transition-all duration-300`}
    >
      <div
        className="absolute left-0 top-4 bottom-4 w-1 rounded-full transition-all duration-300
          opacity-25 group-hover:opacity-100"
        style={{ background: color }}
      />
      <div
        className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 ml-4
          transition-all duration-300 group-hover:scale-110"
        style={{ background: `${color}18`, border: `1.5px solid ${color}30` }}
      >
        <Icon size={18} style={{ color }} />
      </div>
      <div
        className="text-[clamp(26px,2.8vw,38px)] font-bold leading-none tracking-tight w-28 flex-shrink-0"
        style={{
          background: `linear-gradient(135deg, ${color}, ${color}88)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {count}{suffix}
      </div>
      <p className="text-[13px] font-semibold text-slate-600 leading-snug">{label}</p>
    </div>
  )
}

const stats = [
  { target: 120, suffix: '+', label: 'SEO Projects Completed',           icon: FolderOpen, delay: 1, color: '#2563eb' },
  { target: 95,  suffix: '%', label: 'Client Satisfaction Rate',          icon: Users,      delay: 2, color: '#7c3aed' },
  { target: 200, suffix: '%', label: 'Average Organic Traffic Growth',    icon: TrendingUp, delay: 3, color: '#0891b2' },
  { target: 100, suffix: '+', label: 'First-Page Keyword Rankings',       icon: Star,       delay: 4, color: '#059669' },
]

export default function SEOStats() {
  return (
    <section
      className="relative overflow-hidden py-12 md:py-16 lg:py-24"
      style={{ background: 'linear-gradient(135deg, #dbeafe 0%, #e0f2fe 50%, #ede9fe 100%)' }}
    >
      <div className="absolute -top-20 -left-20 w-[460px] h-[460px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.6) 0%, transparent 70%)' }} />
      <div className="absolute -bottom-20 -right-20 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.4) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.15) 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-14 items-start">

          {/* Left: Header */}
          <div className="md:w-[320px] lg:w-[380px] flex-shrink-0 reveal">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/80 text-blue-600
              border border-blue-200 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6 shadow-sm">
              <TrendingUp size={11} /> Our Results
            </span>
            <h2 className="text-[clamp(23px,2.7vw,39px)] font-bold text-slate-900 leading-tight tracking-tight mb-5">
              Delivering Measurable SEO Growth{' '}
              <span className="text-gradient-blue">&amp; Organic Success</span>
            </h2>
            <p className="text-[15px] text-slate-600 leading-[1.85] mb-8">
              ARA Discover Marketing is a company focused on top SEO services in Thanjavur for sustainable growth and consistent SEO results.
            </p>
            <div className="inline-flex items-center gap-3 px-5 py-4 bg-white/90 border border-blue-100 rounded-2xl shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                <Clock size={18} />
              </div>
              <div>
                <p className="text-[12px] font-bold text-slate-800">Long-Term SEO Performance Tracking</p>
                <p className="text-[11px] text-slate-400">Continuous monitoring &amp; optimization</p>
              </div>
            </div>
          </div>

          {/* Right: Stats rows */}
          <div
            className="flex-1 bg-white/80 backdrop-blur-sm rounded-3xl border border-white/90 px-4 py-2 sm:px-6 md:px-7"
            style={{ boxShadow: '0 16px 60px rgba(37,99,235,0.10)' }}
          >
            {stats.map(s => <StatRow key={s.label} {...s} />)}
          </div>

        </div>
      </div>
    </section>
  )
}
