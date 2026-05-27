import { Cpu, Search, Monitor, Play, ShoppingBag, ArrowRight, TrendingUp, BarChart2, Star } from 'lucide-react'

const highlights = [
  { value: '300%', label: 'Average Lead Growth',      sub: 'Across partner businesses',  color: '#2563eb', icon: TrendingUp },
  { value: '200+', label: 'PPC Campaigns Managed',    sub: 'All ad types covered',       color: '#7c3aed', icon: BarChart2  },
  { value: '4.8x', label: 'Average ROAS',             sub: 'Return on ad spend',         color: '#059669', icon: Star       },
]

const adTypes = [
  { icon: Search,      label: 'Google Search Ads',  desc: 'Top-placement with keyword precision', color: '#2563eb' },
  { icon: Monitor,     label: 'Display Advertising', desc: 'Visual reach across the web',          color: '#7c3aed' },
  { icon: Play,        label: 'YouTube Ads',         desc: 'Video-led brand and lead campaigns',   color: '#0891b2' },
  { icon: ShoppingBag, label: 'Shopping Ads',        desc: 'Product-first e-commerce visibility',  color: '#059669' },
]

const paragraphs = [
  { text: 'Google Ads is one of the fastest ways to reach your potential customers and get conversions online. Ara Discover Marketing is the best Google paid advertising in Thanjavur to help businesses appear in front of the right audience at the right time.', color: '#2563eb', num: '01' },
  { text: 'We are the most trusted search engine marketing service provider in Thanjavur. We specialize in PPC campaigns, search advertising, display advertising, YouTube promotions, and shopping campaigns to improve visibility and lead generation.', color: '#7c3aed', num: '02' },
  { text: 'With our knowledge in Google Adwords paid search campaigns in Thanjavur, your business can get the best ad performance and, at the same time, minimize the unnecessary advertising costs. We also offer strategic search engine marketing consulting services in Thanjavur to help you improve the efficiency and ROI of your campaigns.', color: '#0891b2', num: '03' },
  { text: 'Ara Discover Marketing is the best search engine marketing sem agencies in Thanjavur for performance-focused Google Ads management and transparent reporting.', color: '#059669', num: '04' },
]

export default function SEMIntro() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-7">

        {/* ── Section heading ── */}
        <div className="text-center max-w-[700px] mx-auto mb-10 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
            <Cpu size={11} /> AI-Driven Google Advertising
          </span>
          <h2 className="text-[clamp(26px,3.5vw,46px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
            AI-Driven Google Advertising Solutions That{' '}
            <span className="text-gradient-blue">Deliver Real Results</span>
          </h2>
        </div>

        {/* ── 3 highlight stats ── */}
        <div className="reveal flex flex-col sm:flex-row gap-4 mb-10">
          {highlights.map(({ value, label, sub, color, icon: Icon }) => (
            <div key={label}
              className="group flex-1 flex flex-col items-center text-center px-5 py-5 rounded-2xl
                hover:-translate-y-1 transition-all duration-300"
              style={{
                background: `linear-gradient(145deg,${color}0e 0%,${color}05 100%)`,
                border: `1.5px solid ${color}22`,
                boxShadow: `0 4px 24px ${color}0a`,
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 16px 44px ${color}1a` }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = `0 4px 24px ${color}0a` }}
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `linear-gradient(135deg,${color},${color}bb)`, boxShadow: `0 4px 14px ${color}28` }}>
                <Icon size={16} className="text-white" />
              </div>
              <p className="text-[34px] font-bold leading-none mb-1.5"
                style={{ background: `linear-gradient(135deg,${color},${color}88)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {value}
              </p>
              <p className="text-[13px] font-bold text-slate-800 mb-0.5">{label}</p>
              <p className="text-[11px] text-slate-400">{sub}</p>
            </div>
          ))}
        </div>

        {/* ── Paragraph cards — vertical stack ── */}
        <div className="reveal flex flex-col gap-4 mb-10">
          {paragraphs.map(({ text, color, num }) => (
            <div key={num}
              className="group relative bg-white rounded-2xl p-6 border border-slate-100
                hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              style={{ boxShadow: '0 3px 16px rgba(0,0,0,0.04)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = color + '28' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#f1f5f9' }}
            >
              <div className="h-0.5 w-0 rounded-full group-hover:w-10 transition-all duration-400 mb-4"
                style={{ background: `linear-gradient(90deg,${color},${color}44)` }} />
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 text-[10px] font-black w-7 h-7 rounded-lg flex items-center
                  justify-center transition-all duration-300 group-hover:scale-110 mt-0.5"
                  style={{ background: color + '12', color, border: `1.5px solid ${color}22` }}>
                  {num}
                </span>
                <p className="text-[14px] text-slate-600 leading-[1.82]">{text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA + ad-type cards ── */}
        <div className="reveal flex flex-col gap-6">
          <div className="flex items-center justify-center">
            <a href="#sem-services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px]
                font-bold text-white transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', boxShadow: '0 6px 24px rgba(37,99,235,0.28)' }}>
              View All SEM Services <ArrowRight size={14} />
            </a>
          </div>

          <div className="flex flex-wrap gap-4">
            {adTypes.map(({ icon: Icon, label, desc, color }) => (
              <div key={label}
                className="group flex flex-col gap-3 p-5 rounded-2xl border border-slate-100 bg-white
                  hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex-1 min-w-[160px]"
                onMouseEnter={e => { e.currentTarget.style.borderColor = color + '40' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#f1f5f9' }}>
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-white
                  transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{ background: `linear-gradient(135deg,${color},${color}bb)`, boxShadow: `0 6px 16px ${color}28` }}>
                  <Icon size={19} />
                </div>
                <div>
                  <p className="text-[13px] font-bold text-slate-900 mb-1">{label}</p>
                  <p className="text-[12px] text-slate-500 leading-snug">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
