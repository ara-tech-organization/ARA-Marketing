import {
  Mail, Smartphone, Users, ChevronRight, ArrowRight,
  TrendingUp, CheckCircle2, Send, Star, BarChart2,
} from 'lucide-react'

const channels = [
  { icon: Mail,       label: 'Email Marketing',      metric: '68%',  sub: 'Avg open rate',  pct: 68, color: '#2563eb', light: '#eff6ff' },
  { icon: Users,      label: 'Influencer Marketing', metric: '2.4M', sub: 'Monthly reach',  pct: 82, color: '#2563eb', light: '#e0f2fe' },
  { icon: Smartphone, label: 'SMS Marketing',         metric: '99%',  sub: 'Delivery rate', pct: 99, color: '#0ea5e9', light: '#f0f9ff' },
]

export default function OMHero() {
  return (
    <section className="relative overflow-hidden pt-[72px]"
      style={{ background: 'linear-gradient(160deg,#f0f7ff 0%,#eff6ff 55%,#e0f2fe 100%)' }}>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.06) 1.5px,transparent 1.5px)', backgroundSize: '36px 36px' }} />
      {/* Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.09) 0%,transparent 65%)' }} />
      <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.07) 0%,transparent 65%)' }} />
      <div className="absolute top-16 left-[12%] w-10 h-10 rounded-full border border-blue-300/25 pointer-events-none" />
      <div className="absolute top-28 right-[14%] w-6 h-6 rounded-full border border-violet-300/20 pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* ── Row 1: breadcrumb left  ·  channel tags right ── */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-10 pb-8 gap-3">
          <nav className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[11.5px]" style={{ color: 'rgba(15,23,42,0.38)' }}>
            <a href="/ARA-Marketing/" className="whitespace-nowrap hover:text-blue-600 transition-colors">Home</a>
            <ChevronRight size={11} className="flex-shrink-0" style={{ color: 'rgba(15,23,42,0.20)' }} />
            <span className="whitespace-nowrap">Digital Marketing</span>
            <ChevronRight size={11} className="flex-shrink-0" style={{ color: 'rgba(15,23,42,0.20)' }} />
            <span className="whitespace-nowrap text-blue-600 font-medium">Other Marketing</span>
          </nav>
          <div className="flex flex-wrap items-center gap-2">
            {channels.map(({ icon: Icon, label, color, light }) => (
              <span key={label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10.5px] font-bold border"
                style={{ background: light, color, borderColor: color + '25' }}>
                <Icon size={10} /> {label}
              </span>
            ))}
          </div>
        </div>

        {/* ── Main content: 2-column ── */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start pb-14">

          {/* Left: label + heading + description */}
          <div className="flex-1 min-w-0 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10.5px] font-bold uppercase tracking-widest mb-6 bg-white border border-violet-200 text-violet-600 shadow-sm">
              <Send size={10} /> Advanced Digital Marketing Services
            </div>

            <h1 className="text-[clamp(28px,3.2vw,48px)] font-bold leading-[1.1] tracking-tight text-slate-900 mb-4">
              Advanced Digital{' '}
              <span style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Marketing
              </span>
              <span className="block">Services in Thanjavur</span>
              <span className="block text-[clamp(18px,2vw,30px)] font-semibold text-slate-400 mt-2">
                for Business Growth
              </span>
            </h1>

            <div className="w-16 h-1 rounded-full mb-6 mx-auto lg:mx-0"
              style={{ background: 'linear-gradient(90deg,#2563eb,#0ea5e9)' }} />

            <p className="text-[15px] text-slate-500 leading-[1.9] max-w-[520px]">
              ARA Discover Marketing delivers results-oriented email, influencer, and SMS marketing solutions — driving customer engagement, brand awareness, and measurable leads. As one of the best email marketing companies in Thanjavur and trusted influencer marketing experts, we build custom campaigns for startups, local businesses, and growing brands.
            </p>
          </div>

          {/* Right: CTAs + stats */}
          <div className="flex-shrink-0 w-full lg:w-[340px] flex flex-col gap-5 lg:pt-16">
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <a href="/ARA-Marketing/contact-us"
                className="btn-glow inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[14px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ boxShadow: '0 8px 28px rgba(37,99,235,0.28)' }}>
                Start Your Campaign <ArrowRight size={14} />
              </a>
              <a href="#om-services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[14px] font-semibold bg-white border border-slate-200 text-slate-600 hover:border-violet-300 hover:text-violet-700 transition-all duration-300"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                Explore Services
              </a>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
              {[['500+','Campaigns','#2563eb'],['98%','Satisfied','#2563eb'],['4x','Avg ROI','#0ea5e9']].map(([v, l, c]) => (
                <div key={l} className="flex flex-col items-center text-center px-3 py-4 rounded-2xl bg-white border border-slate-100"
                  style={{ boxShadow: '0 2px 12px rgba(37,99,235,0.07)' }}>
                  <span className="text-[22px] font-black leading-none mb-1"
                    style={{ background: `linear-gradient(135deg,${c},${c}88)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {v}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium leading-tight">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Row 5: 3 full-width channel panels ── */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-slate-200 mb-10 sm:mb-16"
          style={{ boxShadow: '0 8px 32px rgba(37,99,235,0.09)' }}>
          {channels.map(({ icon: Icon, label, metric, sub, pct, color, light }, i) => (
            <div key={label}
              className="group relative bg-white px-7 py-6 transition-all duration-300 hover:z-10"
              style={{
                borderRight: i < channels.length - 1 ? '1px solid #f1f5f9' : 'none',
                borderBottom: i < channels.length - 1 ? '1px solid #f1f5f9' : 'none',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = light }}
              onMouseLeave={e => { e.currentTarget.style.background = 'white' }}>

              {/* Top accent line */}
              <div className="h-[3px] w-full absolute top-0 left-0 right-0"
                style={{ background: `linear-gradient(90deg,${color},${color}44)` }} />

              <div className="flex items-center justify-between mb-4 mt-1">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg,${color}18,${color}08)`, border: `1.5px solid ${color}25` }}>
                    <Icon size={17} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-slate-800">{label}</p>
                    <p className="text-[10px] text-slate-400">{sub}</p>
                  </div>
                </div>
                <span className="text-[28px] font-bold" style={{ color }}>{metric}</span>
              </div>

              {/* Progress bar */}
              <div className="h-1.5 rounded-full bg-slate-100 mb-3">
                <div className="h-full rounded-full" style={{ width: `${pct}%`, background: `linear-gradient(90deg,${color}70,${color})` }} />
              </div>

              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={10} style={{ color }} />
                <span className="text-[10.5px] font-semibold" style={{ color }}>Proven results</span>
                <span className="ml-auto flex gap-0.5">
                  {[1,2,3,4,5].map(s => <Star key={s} size={8} style={{ color: '#f59e0b', fill: '#f59e0b' }} />)}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
