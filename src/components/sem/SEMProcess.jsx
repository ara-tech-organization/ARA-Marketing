import { Search, BarChart2, Target, Megaphone, Activity, DollarSign, LineChart } from 'lucide-react'

const steps = [
  { num: '01', icon: Search,     title: 'Business & Competitor Analysis',               desc: 'Deep-dive analysis of your business goals, target audience, and competitor ad strategies to identify the best campaign opportunities and keywords.',                                       color: '#2563eb' },
  { num: '02', icon: BarChart2,  title: 'Keyword & Audience Research',                  desc: 'Comprehensive keyword research and audience segmentation to target high-intent users who are ready to convert, minimizing wasted ad spend.',                                               color: '#7c3aed' },
  { num: '03', icon: Megaphone,  title: 'Campaign Planning & Ad Creation',              desc: 'Strategic ad campaign planning with compelling ad copies, creative assets, and landing page recommendations designed to maximize click-through and conversion rates.',                     color: '#0891b2' },
  { num: '04', icon: Target,     title: 'Google Ads Setup & Optimization',              desc: 'Precise campaign setup across Search, Display, YouTube, and Shopping channels with audience targeting, bid strategies, and ad extensions fully configured.',                              color: '#059669' },
  { num: '05', icon: Activity,   title: 'Conversion Tracking Integration',              desc: 'Complete Google Ads and Analytics conversion tracking setup to accurately measure leads, sales, calls, and all key performance indicators for your campaigns.',                          color: '#dc2626' },
  { num: '06', icon: DollarSign, title: 'Campaign Monitoring & Bid Management',         desc: 'Continuous real-time monitoring, smart bid adjustments, negative keyword management, and A/B testing to improve campaign efficiency and lower cost-per-acquisition.',                    color: '#d97706' },
  { num: '07', icon: LineChart,  title: 'Monthly Reporting & Performance Optimization', desc: 'Transparent monthly reports covering impressions, clicks, conversions, ROAS, and actionable optimization recommendations to keep your campaigns performing at their best.',              color: '#0f766e' },
]

function StepCard({ num, icon: Icon, title, desc, color }) {
  return (
    <div
      className="group flex overflow-hidden rounded-2xl border border-slate-100
        hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 bg-white"
      style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = color + '30' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = '#f1f5f9' }}
    >
      <div className="w-1 flex-shrink-0 transition-all duration-300 group-hover:w-1.5"
        style={{ background: `linear-gradient(180deg,${color},${color}66)` }} />
      <div className="flex-1 flex items-start gap-3 px-4 py-3">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5
          transition-all duration-300 group-hover:scale-110"
          style={{ background: `linear-gradient(135deg,${color}16,${color}08)`, border: `1.5px solid ${color}28` }}>
          <Icon size={16} style={{ color }} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-[13px] font-bold text-slate-900 leading-snug mb-1">{title}</h3>
          <p className="text-[12.5px] text-slate-500 leading-[1.72]">{desc}</p>
        </div>
        <span className="flex-shrink-0 text-[10px] font-black px-2 py-1 rounded-lg self-start mt-0.5"
          style={{ background: color + '10', color }}>{num}</span>
      </div>
    </div>
  )
}

export default function SEMProcess() {
  return (
    <section className="py-14 bg-white overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-7">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 reveal">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
              border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
              <LineChart size={11} /> Our Workflow
            </span>
            <h2 className="text-[clamp(25px,3.1vw,45px)] font-bold text-slate-900 leading-[1.1] tracking-tight">
              Our Strategic Google Ads{' '}
              <span className="text-gradient-blue">&amp; PPC Workflow</span>
            </h2>
          </div>
          <p className="text-[14px] text-slate-500 sm:max-w-[320px] leading-[1.85]">
            As a trusted search engine marketing ppc agency in Thanjavur, we focus on improving campaign performance and lowering cost-per-conversion.
          </p>
        </div>

        {/* ── Step cards — two columns ── */}
        <div className="reveal flex flex-col lg:flex-row gap-6">

          {/* Column 1: steps 1–4 */}
          <div className="flex-1 flex flex-col gap-2.5">
            {steps.slice(0, 4).map(({ num, icon: Icon, title, desc, color }) => (
              <StepCard key={num} num={num} icon={Icon} title={title} desc={desc} color={color} />
            ))}
          </div>

          {/* Column 2: steps 5–7 */}
          <div className="flex-1 flex flex-col gap-2.5">
            {steps.slice(4).map(({ num, icon: Icon, title, desc, color }) => (
              <StepCard key={num} num={num} icon={Icon} title={title} desc={desc} color={color} />
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
