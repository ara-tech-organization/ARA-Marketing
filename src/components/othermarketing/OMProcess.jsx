import { Search, ClipboardList, Palette, Zap, Eye, BarChart2, RefreshCw, LineChart, ArrowRight } from 'lucide-react'

const steps = [
  { num: '01', icon: Search,        title: 'Business & Audience Analysis',             desc: 'Deep-dive analysis of your business goals, target audience, and competitive landscape to identify winning opportunities across email, influencer, and SMS channels.',           color: '#2563eb' },
  { num: '02', icon: ClipboardList,  title: 'Campaign Planning & Strategy Development',  desc: 'Comprehensive multi-channel marketing plan covering email sequences, influencer selection, and SMS campaign timelines — all aligned to your business KPIs.',                   color: '#7c3aed' },
  { num: '03', icon: Palette,        title: 'Content & Creative Design',                 desc: 'Compelling email copy, influencer content briefs, and SMS messages crafted to resonate with your audience and reinforce your brand voice and visual identity.',                 color: '#0891b2' },
  { num: '04', icon: Zap,            title: 'Campaign Execution Across Channels',        desc: 'Campaigns launched simultaneously across email, influencer networks, and SMS — ensuring consistent messaging, precise timing, and maximum audience reach.',                     color: '#059669' },
  { num: '05', icon: Eye,            title: 'Audience Engagement Monitoring',            desc: 'Active real-time monitoring of open rates, influencer engagement, and SMS responses to catch opportunities and optimise live campaigns instantly.',                            color: '#dc2626' },
  { num: '06', icon: BarChart2,      title: 'Performance Tracking & Reporting',          desc: 'Detailed monthly reports covering campaign ROI, audience growth, conversion rates, engagement statistics, and actionable recommendations for improvement.',                   color: '#d97706' },
  { num: '07', icon: RefreshCw,      title: 'Continuous Campaign Optimization',          desc: 'Using performance data and AI-driven insights, we continuously refine your campaigns to improve results, reduce costs, and keep your audience consistently engaged.',           color: '#0f766e' },
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
      <div className="flex-1 flex items-start gap-3 px-4 py-4">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-110"
          style={{ background: `linear-gradient(135deg,${color}16,${color}08)`, border: `1.5px solid ${color}28` }}>
          <Icon size={16} style={{ color }} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-[13.5px] font-bold text-slate-900 leading-snug mb-1">{title}</h3>
          <p className="text-[12.5px] text-slate-500 leading-[1.72]">{desc}</p>
        </div>
        <span className="flex-shrink-0 text-[10px] font-black px-2 py-1 rounded-lg self-start mt-0.5"
          style={{ background: color + '10', color }}>{num}</span>
      </div>
    </div>
  )
}

export default function OMProcess() {
  return (
    <section className="relative py-20 overflow-hidden"
      style={{ background: 'linear-gradient(160deg,#f8fbff 0%,#eff6ff 60%,#f5f3ff 100%)' }}>

      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.05) 1.5px,transparent 1.5px)', backgroundSize: '30px 30px' }} />
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(167,139,250,0.14) 0%,transparent 65%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.08) 0%,transparent 65%)' }} />

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-7">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 reveal">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-blue-600
              border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 shadow-sm">
              <LineChart size={11} /> Our Workflow
            </span>
            <h2 className="text-[clamp(24px,3.5vw,44px)] font-bold text-slate-900 leading-[1.1] tracking-tight">
              Our Strategic Multi-Channel{' '}
              <span style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Marketing Workflow
              </span>
            </h2>
          </div>
          <p className="text-[14px] text-slate-500 sm:max-w-[320px] leading-[1.85]">
            A proven 7-step process that drives better customer engagement and measurable campaign performance.
          </p>
        </div>

        {/* Two-column step cards */}
        <div className="reveal flex flex-col lg:flex-row gap-6 mb-8">
          <div className="flex-1 flex flex-col gap-2.5">
            {steps.slice(0, 4).map(s => <StepCard key={s.num} {...s} />)}
          </div>
          <div className="flex-1 flex flex-col gap-2.5">
            {steps.slice(4).map(s => <StepCard key={s.num} {...s} />)}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="reveal flex flex-col sm:flex-row items-center justify-between gap-5 px-6 py-5 rounded-2xl bg-white border border-slate-200"
          style={{ boxShadow: '0 6px 24px rgba(37,99,235,0.07)' }}>
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg,#eff6ff,#f5f3ff)', border: '1px solid #c7d2fe' }}>
              <LineChart size={16} className="text-blue-600" />
            </div>
            <div>
              <p className="text-[13.5px] font-bold text-slate-800">We've built a process that works</p>
              <p className="text-[12px] text-slate-500 mt-0.5">Consistently driving better engagement and measurable ROI across all marketing channels.</p>
            </div>
          </div>
          <a href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-[12.5px] font-bold transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', boxShadow: '0 5px 16px rgba(124,58,237,0.22)' }}>
            Start Your Campaign <ArrowRight size={13} />
          </a>
        </div>

      </div>
    </section>
  )
}
