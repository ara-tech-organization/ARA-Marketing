import { Cpu, Users, BarChart2, Shield, DollarSign, Target, Award } from 'lucide-react'

const reasons = [
  { icon: Target,     title: 'AI-Focused PPC Campaign Strategies',       desc: 'Advanced AI-powered bidding and targeting strategies that maximize conversions while reducing wasted ad spend.',                     color: '#60a5fa', num: '01' },
  { icon: Cpu,        title: 'Certified Google Ads Specialists',          desc: 'Our team holds Google Ads certifications with deep expertise across Search, Display, YouTube, and Shopping campaigns.',               color: '#60a5fa', num: '02' },
  { icon: Users,      title: 'Conversion-Focused Ad Optimization',        desc: 'Every ad, landing page, and bid strategy is optimized with one goal in mind — turning clicks into qualified leads.',                   color: '#60a5fa', num: '03' },
  { icon: BarChart2,  title: 'Transparent Campaign Reporting',            desc: 'Clear, detailed monthly reports covering impressions, clicks, conversions, and ROI so you always know your results.',                   color: '#0ea5e9', num: '04' },
  { icon: Shield,     title: 'Smart Audience Targeting & Remarketing',    desc: 'Precision audience segments, interest targeting, and remarketing campaigns to reach your ideal customers repeatedly.',                 color: '#2563eb', num: '05' },
  { icon: DollarSign, title: 'ROI-Driven Budget Management',              desc: 'Strategic budget allocation and bid management to maximize your advertising return on every rupee invested.',                         color: '#60a5fa', num: '06' },
]

export default function SEMWhyUs() {
  return (
    <section className="relative py-16 overflow-hidden bg-white">

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row gap-8 items-end mb-14 reveal">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px]
              font-bold uppercase tracking-widest mb-5 text-blue-600 bg-white/70 shadow-sm"
              style={{ border: '1px solid rgba(37,99,235,0.18)' }}>
              <Award size={11} /> Why Choose Us
            </span>
            <h2 className="text-[clamp(25px,3.1vw,45px)] font-bold text-slate-900 leading-[1.1] tracking-tight">
              Why Do Businesses Choose Our{' '}
              <span className="text-gradient-blue">Google Ads Expertise?</span>
            </h2>
          </div>
          <div className="lg:max-w-[420px]">
            <p className="text-[15px] text-slate-600 leading-[1.85]">
              We are focused on conversions, audience targeting, and measurable advertising performance. As one of the best search engine marketing agencies in Thanjavur, we design customized PPC campaigns that align with your business goals and budget.
            </p>
          </div>
        </div>

        {/* ── 3×2 glass cards ── */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
          {reasons.map(({ icon: Icon, title, desc, color, num }) => (
            <div key={title}
              className="group relative rounded-2xl p-6 overflow-hidden transition-all duration-300
                hover:-translate-y-2 bg-white"
              style={{
                border: '1px solid #f1f5f9',
                boxShadow: '0 4px 20px rgba(37,99,235,0.06)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = color + '35'
                e.currentTarget.style.boxShadow = `0 16px 44px ${color}14, 0 4px 20px rgba(37,99,235,0.06)`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.90)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.06)'
              }}
            >
              {/* Subtle inner glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top left, ${color}08 0%, transparent 65%)` }} />

              {/* Top row: icon */}
              <div className="flex items-start justify-end mb-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${color}18, ${color}08)`, border: `1px solid ${color}28` }}>
                  <Icon size={19} style={{ color }} />
                </div>
              </div>

              <h3 className="text-[13px] font-bold text-slate-900 leading-snug mb-2.5">{title}</h3>
              <p className="text-[12.5px] text-slate-500 leading-[1.78]">{desc}</p>

              {/* Bottom accent bar */}
              <div className="mt-5 h-0.5 w-0 rounded-full group-hover:w-8 transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${color}, ${color}44)` }} />
            </div>
          ))}
        </div>

        {/* ── Bottom certified bar ── */}
        <div className="reveal flex flex-col sm:flex-row items-center justify-between gap-6 px-7 py-5 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, #1e3a6e 0%, #2563eb 100%)',
            boxShadow: '0 16px 48px rgba(37,99,235,0.22)',
          }}>
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)' }}>
              <Award size={20} className="text-white" />
            </div>
            <div>
              <p className="text-[13px] font-bold text-white mb-0.5">Certified Google Ads Agency in Thanjavur</p>
              <p className="text-[12px] leading-snug max-w-[500px] text-white/60">
                We are a team of professionals who are known for providing effective Google Ads and ppc service in Thanjavur with consistent performance improvements and lead generation.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 text-center sm:text-right">
            <p className="text-[36px] font-black leading-none text-white">95%</p>
            <p className="text-[11px] font-semibold mt-0.5 text-white/55">Client Satisfaction</p>
          </div>
        </div>

      </div>
    </section>
  )
}
