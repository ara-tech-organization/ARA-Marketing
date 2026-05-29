import { Search, ClipboardList, Palette, Zap, Eye, BarChart2, RefreshCw, LineChart, ArrowRight } from 'lucide-react'

const steps = [
  { num: 1, icon: Search,        title: 'Business & Audience Analysis',      desc: 'Deep-dive analysis of goals, audience, and competitors to identify winning opportunities across all channels.',  color: '#2563eb', accent: '#dbeafe' },
  { num: 2, icon: ClipboardList,  title: 'Campaign Planning & Strategy',      desc: 'Multi-channel plan covering email sequences, influencer picks, and SMS timelines aligned to your KPIs.',         color: '#7c3aed', accent: '#ede9fe' },
  { num: 3, icon: Palette,        title: 'Content & Creative Design',         desc: 'Compelling copy, influencer briefs, and SMS messages crafted to resonate and reinforce your brand.',              color: '#0891b2', accent: '#e0f2fe' },
  { num: 4, icon: Zap,            title: 'Campaign Execution',                desc: 'Simultaneous launch across email, influencer networks, and SMS for consistent messaging and maximum reach.',        color: '#059669', accent: '#dcfce7' },
  { num: 5, icon: Eye,            title: 'Engagement Monitoring',             desc: 'Real-time tracking of open rates, influencer engagement, and SMS responses to optimise live campaigns instantly.', color: '#dc2626', accent: '#fee2e2' },
  { num: 6, icon: BarChart2,      title: 'Performance Reporting',             desc: 'Monthly reports with ROI, audience growth, conversions, and clear recommendations for the next cycle.',            color: '#d97706', accent: '#fef3c7' },
  { num: 7, icon: RefreshCw,      title: 'Continuous Optimization',           desc: 'AI-driven refinements that improve results, reduce costs, and keep your audience consistently engaged.',           color: '#0f766e', accent: '#ccfbf1' },
]

export default function OMProcess() {
  return (
    <section className="relative py-20 overflow-hidden"
      style={{ background: 'linear-gradient(160deg,#f0f9ff 0%,#eff6ff 55%,#f5f3ff 100%)' }}>

      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.05) 1.5px,transparent 1.5px)', backgroundSize: '30px 30px' }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(167,139,250,0.12) 0%,transparent 65%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.08) 0%,transparent 65%)' }} />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 shadow-sm">
            <LineChart size={11} /> Our Workflow
          </span>
          <h2 className="text-[clamp(24px,3.5vw,44px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
            Our Strategic Multi-Channel{' '}
            <span style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Marketing Workflow
            </span>
          </h2>
          <p className="text-[14.5px] text-slate-500 leading-[1.85] max-w-[520px] mx-auto">
            A proven 7-step process that drives better customer engagement and measurable campaign performance.
          </p>
        </div>

        {/* Bento-style step grid */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {steps.slice(0, 4).map(({ num, icon: Icon, title, desc, color, accent }) => (
            <div key={num}
              className="group relative rounded-3xl bg-white border border-slate-100 p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
              onMouseEnter={e => { e.currentTarget.style.borderColor = color + '30' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#f1f5f9' }}>

              {/* Large bg number */}

              {/* Top: icon + step pill */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: `linear-gradient(135deg,${color},${color}cc)`, boxShadow: `0 6px 20px ${color}35` }}>
                  <Icon size={18} className="text-white" />
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full border"
                  style={{ background: accent, color, borderColor: color + '25' }}>
                  STEP {String(num).padStart(2, '0')}
                </span>
              </div>

              {/* Accent line */}
              <div className="h-0.5 w-8 rounded-full mb-4" style={{ background: `linear-gradient(90deg,${color},${color}55)` }} />

              <h3 className="text-[13.5px] font-bold text-slate-900 leading-snug mb-2">{title}</h3>
              <p className="text-[12px] text-slate-500 leading-[1.68] relative z-10">{desc}</p>
            </div>
          ))}
        </div>

        {/* Second row: 3 cards centered */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {steps.slice(4).map(({ num, icon: Icon, title, desc, color, accent }) => (
            <div key={num}
              className="group relative rounded-3xl bg-white border border-slate-100 p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
              onMouseEnter={e => { e.currentTarget.style.borderColor = color + '30' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#f1f5f9' }}>


              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: `linear-gradient(135deg,${color},${color}cc)`, boxShadow: `0 6px 20px ${color}35` }}>
                  <Icon size={18} className="text-white" />
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full border"
                  style={{ background: accent, color, borderColor: color + '25' }}>
                  STEP {String(num).padStart(2, '0')}
                </span>
              </div>

              <div className="h-0.5 w-8 rounded-full mb-4" style={{ background: `linear-gradient(90deg,${color},${color}55)` }} />

              <h3 className="text-[13.5px] font-bold text-slate-900 leading-snug mb-2">{title}</h3>
              <p className="text-[12px] text-slate-500 leading-[1.68] relative z-10">{desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-center justify-between gap-5 px-4 sm:px-6 py-5 rounded-2xl bg-white border border-slate-200"
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
          <a href="/ARA-Marketing/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-[12.5px] font-bold transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', boxShadow: '0 5px 16px rgba(124,58,237,0.22)' }}>
            Start Your Campaign <ArrowRight size={13} />
          </a>
        </div>

      </div>
    </section>
  )
}
