import { Zap, TrendingUp, Settings, DollarSign, Smartphone, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react'

const benefits = [
  {
    icon: Cpu,
    title: 'Enhanced AI Engagement',
    desc: 'AI-powered features drive meaningful customer interaction, personalization, and retention.',
    metric: '3x',
    metricLabel: 'Higher Engagement',
    color: '#2563eb',
    grad: 'linear-gradient(135deg,#1e40af,#3b82f6)',
    bg: '#eff6ff',
    border: '#bfdbfe',
  },
  {
    icon: Settings,
    title: 'Streamlined Operations',
    desc: 'Mobile apps automate workflows, reduce bottlenecks, and improve team efficiency.',
    metric: '60%',
    metricLabel: 'Efficiency Gain',
    color: '#2563eb',
    grad: 'linear-gradient(135deg,#2563eb,#0ea5e9)',
    bg: '#e0f2fe',
    border: '#bae6fd',
  },
  {
    icon: Zap,
    title: 'Optimised Performance',
    desc: 'High-performance apps for Android and iOS with sub-second load times and flawless UX.',
    metric: '<1s',
    metricLabel: 'Load Time',
    color: '#0ea5e9',
    grad: 'linear-gradient(135deg,#0ea5e9,#2563eb)',
    bg: '#e0f2fe',
    border: '#bae6fd',
  },
  {
    icon: TrendingUp,
    title: 'Higher ROI',
    desc: 'Intuitive UI/UX combined with AI insights drives measurable revenue and business growth.',
    metric: '40%',
    metricLabel: 'ROI Increase',
    color: '#2563eb',
    grad: 'linear-gradient(135deg,#2563eb,#0ea5e9)',
    bg: '#dbeafe',
    border: '#bfdbfe',
  },
  {
    icon: DollarSign,
    title: 'Scalable Custom Solutions',
    desc: 'Custom mobile app development services in Thanjavur that grow with your business needs.',
    metric: '50%',
    metricLabel: 'Cost Reduction',
    color: '#0ea5e9',
    grad: 'linear-gradient(135deg,#0ea5e9,#2563eb)',
    bg: '#e0f2fe',
    border: '#bae6fd',
  },
]

const trustPoints = [
  '200+ apps successfully delivered',
  'iOS, Android & cross-platform',
  'AI-powered & scalable solutions',
]

export default function MABenefits() {
  return (
    <section className="relative py-14 sm:py-16 lg:py-20 overflow-hidden bg-white">

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.04) 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }} />

      {/* Orbs */}
      <div className="absolute -top-24 -right-24 w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 65%)' }} />
      <div className="hidden lg:block absolute -bottom-16 -left-16 w-[280px] h-[280px] rounded-full pointer-events-none"
        style={{ border: '1.5px solid rgba(37,99,235,0.07)', animation: 'spin 55s linear infinite' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* ── Split layout ── */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* LEFT: sticky heading panel */}
          <div className="w-full lg:w-[300px] xl:w-[340px] flex-shrink-0 lg:sticky lg:top-24 reveal-left">

            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-5 text-blue-600 bg-blue-50"
              style={{ border: '1px solid rgba(37,99,235,0.15)' }}>
              <Smartphone size={9} /> Benefits
            </span>

            <h2 className="text-[clamp(22px,2.8vw,38px)] font-bold text-slate-900 leading-[1.15] tracking-tight mb-4">
              Benefits of Our{' '}
              <span style={{
                background: 'linear-gradient(135deg,#1e40af,#2563eb)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Mobile App Services
              </span>
            </h2>

            <div className="w-10 h-[3px] rounded-full mb-5"
              style={{ background: 'linear-gradient(90deg,#2563eb,#0ea5e9)' }} />

            <p className="text-[13px] sm:text-[14px] text-slate-500 leading-[1.85] mb-7">
              Our mobile application development service in Thanjavur delivers measurable results — from increased engagement and streamlined operations to a higher ROI for your business.
            </p>

            {/* Trust bullets */}
            <div className="flex flex-col gap-2.5 mb-8">
              {trustPoints.map(pt => (
                <div key={pt} className="flex items-center gap-2.5">
                  <CheckCircle2 size={14} className="flex-shrink-0" style={{ color: '#2563eb' }} />
                  <span className="text-[12.5px] font-medium text-slate-600">{pt}</span>
                </div>
              ))}
            </div>

            <a href="/ARA-Marketing/contact-us"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-bold text-white transition-all duration-300 hover:opacity-90 hover:gap-3"
              style={{ background: 'linear-gradient(135deg,#1e40af,#2563eb)', boxShadow: '0 6px 20px rgba(37,99,235,0.28)' }}>
              Start Your App Project <ArrowRight size={13} />
            </a>
          </div>

          {/* RIGHT: benefit rows */}
          <div className="flex-1 reveal-right">
            {benefits.map(({ icon: Icon, title, desc, metric, metricLabel, color, grad, bg, border }, i) => (
              <div
                key={title}
                className="group flex items-start gap-5 py-6 cursor-default transition-all duration-300"
                style={{ borderBottom: i < benefits.length - 1 ? '1px solid #f1f5f9' : 'none' }}
                onMouseEnter={e => e.currentTarget.style.paddingLeft = '10px'}
                onMouseLeave={e => e.currentTarget.style.paddingLeft = '0px'}
              >
                {/* Icon */}
                <div className="flex-shrink-0 pt-0.5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: bg, border: `1.5px solid ${border}` }}
                  >
                    <Icon size={17} style={{ color }} />
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0 pt-0.5">
                  <h3 className="text-[14px] sm:text-[15px] font-bold text-slate-800 leading-snug mb-2
                    transition-colors duration-300 group-hover:text-slate-900">
                    {title}
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-slate-500 leading-[1.80]">{desc}</p>
                </div>

                {/* Metric badge */}
                <div className="flex-shrink-0 text-right pt-0.5">
                  <div
                    className="font-black leading-none tabular-nums"
                    style={{
                      fontSize: 'clamp(22px,2.5vw,30px)',
                      background: grad,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {metric}
                  </div>
                  <div className="text-[9.5px] font-semibold uppercase tracking-wider mt-0.5"
                    style={{ color: color + 'aa' }}>
                    {metricLabel}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
