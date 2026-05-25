import { Search, Target, Globe, BarChart2, Share2, Activity, Rocket } from 'lucide-react'

const steps = [
  { n: '01', icon: Search,    title: 'Business & Competitor Analysis',    desc: 'Deep research into your market, audience and competition.',         color: '#2563eb', light: '#dbeafe' },
  { n: '02', icon: Target,    title: 'Strategy Planning & Goal Setting',  desc: 'Customized data-backed digital marketing roadmap for your KPIs.',    color: '#7c3aed', light: '#ede9fe' },
  { n: '03', icon: Globe,     title: 'SEO & Content Optimization',        desc: 'On-page, technical and off-page SEO with high-quality content.',     color: '#059669', light: '#d1fae5' },
  { n: '04', icon: BarChart2, title: 'Paid Advertising Campaign Setup',   desc: 'Google, Meta and display ad campaigns for targeted lead gen.',       color: '#d97706', light: '#fef3c7' },
  { n: '05', icon: Share2,    title: 'Social Media Execution',            desc: 'Creative campaigns that drive engagement, reach and visibility.',    color: '#db2777', light: '#fce7f3' },
  { n: '06', icon: Activity,  title: 'Performance Tracking & Reporting',  desc: 'Real-time analytics and transparent ROI reporting.',                 color: '#0891b2', light: '#cffafe' },
  { n: '07', icon: Rocket,    title: 'Continuous Optimization & Scaling', desc: 'Continuous improvement to accelerate long-term digital growth.',     color: '#2563eb', light: '#dbeafe' },
]

const row1 = steps.slice(0, 4)
const row2 = steps.slice(4)

function StepCard({ s, isLast }) {
  const Icon = s.icon
  return (
    <div className="relative flex flex-col items-center flex-1 min-w-0 group cursor-default">
      {/* Connector line (not on last in row) */}
      {!isLast && (
        <div className="absolute top-[22px] left-1/2 w-full h-[2px] z-0"
          style={{ background: 'linear-gradient(90deg, rgba(37,99,235,0.3), rgba(37,99,235,0.1))' }} />
      )}

      {/* Circle node */}
      <div className="relative z-10 w-11 h-11 rounded-full flex items-center justify-center
        font-black text-[13px] mb-5 transition-all duration-300
        group-hover:scale-110 group-hover:shadow-xl border-2"
        style={{
          background: '#fff',
          borderColor: s.color,
          color: s.color,
          boxShadow: `0 4px 16px ${s.color}30`,
        }}>
        {s.n}
      </div>

      {/* Card */}
      <div className="w-full h-full bg-white rounded-2xl p-5 border border-blue-100 shadow-sm
        text-center transition-all duration-300
        group-hover:-translate-y-1.5 group-hover:shadow-xl group-hover:shadow-blue-100/80
        group-hover:border-blue-200">

        {/* Top accent */}
        <div className="w-8 h-1 rounded-full mx-auto mb-4"
          style={{ background: s.color }} />

        {/* Icon */}
        <div className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-4
          transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-5deg]"
          style={{ background: s.light }}>
          <Icon size={19} style={{ color: s.color }} />
        </div>

        {/* Title */}
        <h3 className="text-[14px] font-bold text-slate-900 mb-2 leading-snug
          transition-colors duration-300 group-hover:text-blue-700">
          {s.title}
        </h3>

        {/* Desc */}
        <p className="text-[12px] text-slate-400 leading-relaxed">
          {s.desc}
        </p>
      </div>
    </div>
  )
}

export default function Process() {
  return (
    <section id="process" className="relative py-24 overflow-hidden bg-white">
      {/* Orbs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)' }} />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)' }} />

      {/* Diamond corners */}
      <div className="absolute -top-12 -left-12 w-44 h-44 pointer-events-none"
        style={{ border: '1.5px solid rgba(37,99,235,0.15)', transform: 'rotate(45deg)', borderRadius: '16px' }} />
      <div className="absolute -bottom-12 -right-12 w-44 h-44 pointer-events-none"
        style={{ border: '1.5px solid rgba(37,99,235,0.15)', transform: 'rotate(45deg)', borderRadius: '16px' }} />

      <div className="max-w-[1200px] mx-auto px-7 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-100 text-blue-700
            border border-blue-200 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4">
            <Rocket size={11} /> How We Work
          </span>
          <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-slate-900 leading-tight tracking-tight">
            Our Proven Digital Marketing Workflow
          </h2>
          <p className="text-base text-slate-500 leading-relaxed max-w-xl mx-auto mt-3.5">
            As a top digital marketing company in Thanjavur, we follow a strategic and methodical
            approach that ensures maximum ROI and long-term digital success.
          </p>
        </div>

        {/* Row 1 — steps 01–04 */}
        <div className="reveal hidden lg:flex items-stretch gap-4 mb-10">
          {row1.map((s, i) => (
            <StepCard key={s.n} s={s} isLast={i === row1.length - 1} />
          ))}
        </div>

        {/* Row 2 — steps 05–07 (centered) */}
        <div className="reveal hidden lg:flex items-stretch gap-4 max-w-[780px] mx-auto">
          {row2.map((s, i) => (
            <StepCard key={s.n} s={s} isLast={i === row2.length - 1} />
          ))}
        </div>

        {/* Mobile: single column */}
        <div className="lg:hidden flex flex-col gap-4">
          {steps.map(s => {
            const Icon = s.icon
            return (
              <div key={s.n} className="flex items-start gap-4 bg-white rounded-2xl p-5
                border border-blue-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: s.light }}>
                  <Icon size={18} style={{ color: s.color }} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-black" style={{ color: s.color }}>Step {s.n}</span>
                  </div>
                  <h3 className="text-[14px] font-bold text-slate-900 mb-1">{s.title}</h3>
                  <p className="text-[12px] text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
