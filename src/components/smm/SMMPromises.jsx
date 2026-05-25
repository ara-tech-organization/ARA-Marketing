import { BarChart2, Users, Activity, Palette, Target, Eye, Layers, CheckCircle } from 'lucide-react'

const promises = [
  {
    icon: Eye,
    title: 'High Brand Visibility',
    desc: 'Significantly boost your brand awareness across platforms.',
    color: '#2563eb',
    num: '01',
  },
  {
    icon: Users,
    title: 'Targeted Audience Engagement',
    desc: 'Reach the right people and build active customer interactions.',
    color: '#7c3aed',
    num: '02',
  },
  {
    icon: Palette,
    title: 'Creative & Engaging Content',
    desc: 'High-quality, eye-catching creatives tailored to your business.',
    color: '#059669',
    num: '03',
  },
  {
    icon: Target,
    title: 'Lead Generation & Conversions',
    desc: 'Data-driven campaigns to convert followers into paying customers.',
    color: '#d97706',
    num: '04',
  },
  {
    icon: Activity,
    title: 'Real-time Campaign Optimization',
    desc: 'Ongoing ad budget monitoring and refinement to maximize ROI.',
    color: '#db2777',
    num: '05',
  },
  {
    icon: BarChart2,
    title: 'Detailed Performance Reports',
    desc: 'Clear, transparent monthly reporting with actionable growth insights.',
    color: '#0891b2',
    num: '06',
  },
]

export default function SMMPromises() {
  return (
    <section className="relative overflow-hidden py-24 bg-white">

      <div className="relative max-w-[1200px] mx-auto px-7">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
            <Layers size={11} /> Our Commitment
          </span>

          <h2 className="text-[clamp(24px,3vw,42px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Our{' '}
            <span className="text-gradient-blue">Promises</span>{' '}
            to You
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
              <h3 className="text-[15px] font-bold text-slate-800 mb-2.5 leading-snug">
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
