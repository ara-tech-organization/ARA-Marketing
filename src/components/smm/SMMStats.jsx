import useCounter from '../../hooks/useCounter'
import { Share2, Users, TrendingUp, Megaphone } from 'lucide-react'

function StatCard({ target, suffix, label, sub, icon: Icon, delay }) {
  const [count, ref] = useCounter(target, 1800)
  return (
    <div
      ref={ref}
      className={`reveal delay-${delay} flex flex-col items-center text-center px-6 py-8`}
    >
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
        style={{ background: 'rgba(37,99,235,0.15)' }}>
        <Icon size={24} className="text-blue-400" />
      </div>
      <div className="text-[clamp(36px,5vw,60px)] font-bold leading-none tracking-tight mb-2"
        style={{ background: 'linear-gradient(135deg, #93c5fd, #60a5fa, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
        {count}{suffix}
      </div>
      <p className="text-[15px] font-semibold text-white/80 mb-1">{label}</p>
      {sub && <p className="text-[12px] text-white/35">{sub}</p>}
    </div>
  )
}

const stats = [
  { target: 200, suffix: '+', label: 'Social Media Campaigns',   sub: 'Successfully Managed',         icon: Share2,     delay: 1 },
  { target: 95,  suffix: '%', label: 'Client Satisfaction Rate', sub: 'Across All Projects',           icon: Users,      delay: 2 },
  { target: 300, suffix: '%', label: 'Average Engagement Growth', sub: 'Compared to Baseline',         icon: TrendingUp, delay: 3 },
  { target: 150, suffix: '+', label: 'Paid Advertising Campaigns', sub: 'Delivered Successfully',      icon: Megaphone,  delay: 4 },
]

export default function SMMStats() {
  return (
    <section className="py-4" style={{ background: '#0a1628' }}>
      {/* Top separator */}
      <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.4), transparent)' }} />

      <div className="max-w-[1200px] mx-auto px-7 py-16">
        <div className="text-center mb-10 reveal">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-3">Our Results</p>
          <h2 className="text-[clamp(22px,3vw,34px)] font-bold text-white leading-tight tracking-tight">
            Delivering Measurable Social Media{' '}
            <span style={{ background: 'linear-gradient(135deg, #60a5fa, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Growth & Engagement
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">
          {stats.map(s => <StatCard key={s.label} {...s} />)}
        </div>
      </div>

      <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.4), transparent)' }} />
    </section>
  )
}

