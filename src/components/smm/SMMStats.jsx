import useCounter from '../../hooks/useCounter'
import { Share2, Users, TrendingUp, Megaphone } from 'lucide-react'

function StatCard({ target, suffix, label, sub, icon: Icon, delay }) {
  const [count, ref] = useCounter(target || 0, 1800)
  return (
    <div
      ref={ref}
      className={`reveal delay-${delay} relative flex flex-col items-center text-center px-6 py-10
        bg-white/60 border border-blue-100 rounded-3xl backdrop-blur-sm
        hover:bg-white/90 hover:shadow-xl hover:shadow-blue-100/60 hover:-translate-y-1.5
        transition-all duration-300`}
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
        style={{ background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)' }}
      >
        <Icon size={24} className="text-blue-600" />
      </div>

      {/* Number */}
      <div
        className="text-[clamp(30px,3.8vw,48px)] font-bold leading-none tracking-tight mb-2"
        style={{
          background: 'linear-gradient(135deg, #1d4ed8, #2563eb, #3b82f6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          boxDecorationBreak: 'clone',
        }}
      >
        {target !== null ? `${count}${suffix}` : 'Active'}
      </div>

      {/* Label */}
      <p className="text-[14px] font-semibold text-slate-800 mb-1">{label}</p>
      {sub && <p className="text-[12px] text-slate-400">{sub}</p>}

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full"
        style={{ background: 'linear-gradient(90deg, #2563eb, #60a5fa)' }}
      />
    </div>
  )
}

const stats = [
  { target: 200, suffix: '+', label: 'Social Media Campaigns Managed', sub: '', icon: Share2, delay: 1 },
  { target: 95,  suffix: '%', label: 'Client Satisfaction Rate', sub: '', icon: Users, delay: 2 },
  { target: 300, suffix: '%', label: 'Average Increase in Social Engagement', sub: '', icon: TrendingUp, delay: 3 },
  { target: 150, suffix: '+', label: 'Successful Paid Advertising Campaigns', sub: '', icon: Megaphone, delay: 4 },
  { target: null, suffix: '', label: 'Multi-Platform Audience Growth Strategies', sub: '', icon: Share2, delay: 5 },
]

export default function SMMStats() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #e0f2fe 100%)' }}
    >

      {/* Decorative orbs */}
      <div
        className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.45) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.35) 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(219,234,254,0.5) 0%, transparent 70%)' }}
      />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #93c5fd 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.35,
        }}
      />

      {/* Top wave divider */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #93c5fd, transparent)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/80 text-blue-600
            border border-blue-200 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 shadow-sm">
            <TrendingUp size={11} /> Our Results
          </span>
          <h2 className="text-[clamp(22px,3vw,38px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Delivering Measurable Social Media{' '}
            <span className="text-gradient-blue">Growth &amp; Engagement</span>
          </h2>
          <p className="text-[15px] text-slate-600 font-medium max-w-2xl mx-auto">
            Our paid social media marketing agency in Thanjavur helps businesses to maximise engagement, visibility, and customer interaction.
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {stats.map(s => <StatCard key={s.label} {...s} />)}
        </div>

      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #93c5fd, transparent)' }} />

    </section>
  )
}
