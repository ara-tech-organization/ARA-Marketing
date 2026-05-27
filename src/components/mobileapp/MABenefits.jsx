import { Zap, TrendingUp, Settings, DollarSign, Smartphone, Cpu, ArrowRight } from 'lucide-react'

const benefits = [
  { icon: Cpu,        title: 'Enhanced AI Engagement',      desc: 'AI-powered features drive meaningful customer interaction, personalization, and retention.', metric: '3x',  metricLabel: 'Higher Engagement', color: '#7c3aed' },
  { icon: Settings,   title: 'Streamlined Operations',      desc: 'Mobile apps automate workflows, reduce bottlenecks, and improve team efficiency.', metric: '60%', metricLabel: 'Efficiency Gain',   color: '#2563eb' },
  { icon: Zap,        title: 'Optimised Performance',       desc: 'High-performance apps for Android and iOS with sub-second load times and flawless UX.', metric: '<1s', metricLabel: 'Load Time',         color: '#0891b2' },
  { icon: TrendingUp, title: 'Higher ROI',                  desc: 'Intuitive UI/UX combined with AI insights drives measurable revenue and business growth.', metric: '40%', metricLabel: 'ROI Increase',      color: '#059669' },
  { icon: DollarSign, title: 'Scalable Custom Solutions',   desc: 'Custom mobile app development services in Thanjavur that grow with your business needs.', metric: '50%', metricLabel: 'Cost Reduction',    color: '#d97706' },
]

export default function MABenefits() {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(124,58,237,0.04) 0%,transparent 65%)' }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.03) 0%,transparent 65%)' }} />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-7">
        <div className="flex flex-col lg:flex-row gap-14 items-start">

          {/* Left: intro */}
          <div className="lg:w-[360px] flex-shrink-0 reveal-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6"
              style={{ background: 'rgba(124,58,237,0.08)', color: '#7c3aed', border: '1px solid rgba(124,58,237,0.2)' }}>
              <Smartphone size={11} /> Benefits
            </span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-bold text-slate-900 leading-tight tracking-tight mb-5">
              Benefits of Our{' '}
              <span style={{ background: 'linear-gradient(135deg,#7c3aed,#2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Mobile App Services
              </span>
            </h2>
            <p className="text-[15px] text-slate-500 leading-[1.85] mb-8">
              Our mobile application development service in Thanjavur delivers measurable results — from increased engagement and streamlined operations to a higher ROI for your business.
            </p>
            <a href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[13.5px] font-bold text-white transition-all duration-300 hover:scale-[1.03]"
              style={{ background: 'linear-gradient(135deg,#7c3aed,#2563eb)', boxShadow: '0 6px 20px rgba(124,58,237,0.25)' }}>
              Start Your App Project <ArrowRight size={15} />
            </a>
          </div>

          {/* Right: benefit cards with metric numbers */}
          <div className="flex-1 flex flex-col gap-4">
            {benefits.map(({ icon: Icon, title, desc, metric, metricLabel, color }, i) => (
              <div key={title}
                className={`reveal delay-${Math.min(i + 1, 6)} flex items-center gap-5 p-5 sm:p-6 rounded-2xl transition-all duration-300 hover:-translate-y-0.5`}
                style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
                onMouseEnter={e => {
                  e.currentTarget.style.border = `1px solid ${color}25`
                  e.currentTarget.style.boxShadow = `0 8px 24px ${color}10`
                  e.currentTarget.style.background = `${color}03`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.border = '1px solid #e2e8f0'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.background = '#f8fafc'
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}10`, border: `1px solid ${color}20` }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[14px] font-bold text-slate-800 mb-1">{title}</h3>
                  <p className="text-[12.5px] text-slate-500 leading-[1.65]">{desc}</p>
                </div>
                <div className="text-right flex-shrink-0 pl-2">
                  <p className="text-[22px] sm:text-[26px] font-black leading-tight" style={{ color }}>{metric}</p>
                  <p className="text-[10px] text-slate-400 font-medium">{metricLabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
