import { BarChart2, Users, Activity, Palette, Target, Eye, Layers, CheckCircle } from 'lucide-react'

const promises = [
  {
    icon: BarChart2,
    title: 'Monthly Social Media Performance Reports',
    desc: 'Clear, transparent monthly reporting with actionable growth insights and campaign results.',
    color: '#2563eb',
    num: '01',
  },
  {
    icon: Users,
    title: 'Dedicated Social Media Marketing Support',
    desc: 'A dedicated social media expert assigned to your account for personalized support.',
    color: '#2563eb',
    num: '02',
  },
  {
    icon: Activity,
    title: 'Real-Time Ad Campaign Monitoring',
    desc: 'Continuous real-time tracking and optimization of all active ad campaigns.',
    color: '#2563eb',
    num: '03',
  },
  {
    icon: Palette,
    title: 'Creative Content & Branding Strategies',
    desc: 'High-quality, eye-catching creatives and branding strategies tailored to your business.',
    color: '#0ea5e9',
    num: '04',
  },
  {
    icon: Target,
    title: 'ROI-Focused Paid Advertising Campaigns',
    desc: 'Data-driven paid advertising campaigns designed to maximize return on investment.',
    color: '#2563eb',
    num: '05',
  },
  {
    icon: Eye,
    title: 'Transparent Reporting & Audience Insights',
    desc: 'Honest, transparent reporting with detailed audience insights every campaign cycle.',
    color: '#0ea5e9',
    num: '06',
  },
]

export default function SMMPromises() {
  return (
    <section className="relative overflow-hidden py-16 bg-white">

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
            <Layers size={11} /> Our Commitment
          </span>

          <h2 className="text-[clamp(23px,2.7vw,41px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Our{' '}
            <span className="text-gradient-blue">Promises</span>
          </h2>

          <p className="text-[15px] text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Businesses trust our social media advertising services in Thanjavur for consistent digital growth and brand excellence.
          </p>
        </div>

        {/* Promise cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {promises.map(({ icon: Icon, title, desc, color, num }, i) => (
            <div
              key={title}
              className={`reveal delay-${(i % 4) + 1} relative rounded-2xl p-7 group
                cursor-default transition-all duration-400 hover:-translate-y-2`}
              style={{
                background: '#fff',
                border: '1.5px solid #f1f5f9',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = color + '50'
                e.currentTarget.style.boxShadow = `0 16px 48px ${color}18`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#f1f5f9'
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)'
              }}
            >
              {/* Decorative step number */}
              <span
                className="absolute top-4 right-5 text-6xl font-black leading-none
                  pointer-events-none select-none"
                style={{
                  color: color + '0e',
                  fontFamily: 'var(--font-poppins)',
                }}
              >
                {num}
              </span>

              {/* Icon with glow */}
              <div
                className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-5
                  transition-all duration-300 group-hover:scale-110"
                style={{
                  background: color + '18',
                  boxShadow: `0 0 0 0 ${color}00`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = `0 0 28px ${color}45`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = `0 0 0 0 ${color}00`
                }}
              >
                <Icon size={24} style={{ color }} />
              </div>

              {/* Title */}
              <h3 className="text-[14px] font-bold text-slate-800 mb-2.5 leading-snug">
                {title}
              </h3>

              {/* Description */}
              <p className="text-[13px] text-slate-500 leading-[1.8] mb-5">
                {desc}
              </p>

              {/* Bottom check row */}
              <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                <CheckCircle size={13} style={{ color }} />
                <span className="text-[11px] font-semibold" style={{ color: color + 'cc' }}>
                  Guaranteed
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}
