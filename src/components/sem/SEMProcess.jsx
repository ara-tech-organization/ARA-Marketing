import { Search, BarChart2, Target, Megaphone, Activity, DollarSign, LineChart } from 'lucide-react'

const steps = [
  { num: '01', icon: Search,     title: 'Business & Competitor Analysis',               desc: 'Deep-dive analysis of your business goals, target audience, and competitor ad strategies to identify the best campaign opportunities and keywords.',                                       color: '#2563eb' },
  { num: '02', icon: BarChart2,  title: 'Keyword & Audience Research',                  desc: 'Comprehensive keyword research and audience segmentation to target high-intent users who are ready to convert, minimizing wasted ad spend.',                                               color: '#2563eb' },
  { num: '03', icon: Megaphone,  title: 'Campaign Planning & Ad Creation',              desc: 'Strategic ad campaign planning with compelling ad copies, creative assets, and landing page recommendations designed to maximize click-through and conversion rates.',                     color: '#0ea5e9' },
  { num: '04', icon: Target,     title: 'Google Ads Setup & Optimization',              desc: 'Precise campaign setup across Search, Display, YouTube, and Shopping channels with audience targeting, bid strategies, and ad extensions fully configured.',                              color: '#2563eb' },
  { num: '05', icon: Activity,   title: 'Conversion Tracking Integration',              desc: 'Complete Google Ads and Analytics conversion tracking setup to accurately measure leads, sales, calls, and all key performance indicators for your campaigns.',                          color: '#2563eb' },
  { num: '06', icon: DollarSign, title: 'Campaign Monitoring & Bid Management',         desc: 'Continuous real-time monitoring, smart bid adjustments, negative keyword management, and A/B testing to improve campaign efficiency and lower cost-per-acquisition.',                    color: '#0ea5e9' },
  { num: '07', icon: LineChart,  title: 'Monthly Reporting & Performance Optimization', desc: 'Transparent monthly reports covering impressions, clicks, conversions, ROAS, and actionable optimization recommendations to keep your campaigns performing at their best.',              color: '#0ea5e9' },
]

function StepCard({ num, icon: Icon, title, desc, color }) {
  return (
    <div
      className="group flex overflow-hidden rounded-2xl border border-white/10
        hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 bg-white/5"
      style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.16)' }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = color + '40' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
    >
      <div className="w-1 flex-shrink-0 transition-all duration-300 group-hover:w-1.5"
        style={{ background: 'var(--brand-gradient-soft)' }} />
      <div className="flex-1 flex items-start gap-3 px-4 py-3">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5
          transition-all duration-300 group-hover:scale-110"
          style={{ background: 'var(--brand-gradient)', border: `1.5px solid ${color}28` }}>
          <Icon size={16} className="text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-[13px] font-bold text-white leading-snug mb-1">{title}</h3>
          <p className="text-[12.5px] text-white/60 leading-[1.72]">{desc}</p>
        </div>
        <span className="flex-shrink-0 text-[10px] font-black px-2 py-1 rounded-lg self-start mt-0.5"
          style={{ background: color + '18', color }}>{num}</span>
      </div>
    </div>
  )
}

export default function SEMProcess() {
  return (
    <section className="py-14 overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#0d2244 0%,#0a1a34 40%,#0d2244 100%)' }}>
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-7">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 reveal text-center sm:text-left">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 text-blue-400
              border border-white/10 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
              <LineChart size={11} /> Our Workflow
            </span>
            <h2 className="text-[clamp(25px,3.1vw,45px)] font-bold text-white leading-[1.1] tracking-tight">
              Our Strategic Google Ads{' '}
              <span className="text-gradient-blue">&amp; PPC Workflow</span>
            </h2>
          </div>
          <p className="text-[14px] text-white/60 sm:max-w-[320px] leading-[1.85]">
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
