import { Search, BarChart2, Target, Megaphone, Activity, DollarSign, LineChart, ArrowRight } from 'lucide-react'

const steps = [
  { num: '01', icon: Search,     title: 'Business & Competitor Analysis',               desc: 'Deep-dive analysis of your business goals, target audience, and competitor ad strategies to identify the best campaign opportunities and keywords.',                                       color: '#2563eb' },
  { num: '02', icon: BarChart2,  title: 'Keyword & Audience Research',                  desc: 'Comprehensive keyword research and audience segmentation to target high-intent users who are ready to convert, minimizing wasted ad spend.',                                               color: '#7c3aed' },
  { num: '03', icon: Megaphone,  title: 'Campaign Planning & Ad Creation',              desc: 'Strategic ad campaign planning with compelling ad copies, creative assets, and landing page recommendations designed to maximize click-through and conversion rates.',                     color: '#0891b2' },
  { num: '04', icon: Target,     title: 'Google Ads Setup & Optimization',              desc: 'Precise campaign setup across Search, Display, YouTube, and Shopping channels with audience targeting, bid strategies, and ad extensions fully configured.',                              color: '#059669' },
  { num: '05', icon: Activity,   title: 'Conversion Tracking Integration',              desc: 'Complete Google Ads and Analytics conversion tracking setup to accurately measure leads, sales, calls, and all key performance indicators for your campaigns.',                          color: '#dc2626' },
  { num: '06', icon: DollarSign, title: 'Campaign Monitoring & Bid Management',         desc: 'Continuous real-time monitoring, smart bid adjustments, negative keyword management, and A/B testing to improve campaign efficiency and lower cost-per-acquisition.',                    color: '#d97706' },
  { num: '07', icon: LineChart,  title: 'Monthly Reporting & Performance Optimization', desc: 'Transparent monthly reports covering impressions, clicks, conversions, ROAS, and actionable optimization recommendations to keep your campaigns performing at their best.',              color: '#0f766e' },
]

export default function SEMProcess() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-7">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 reveal">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
              border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
              <LineChart size={11} /> Our Workflow
            </span>
            <h2 className="text-[clamp(26px,3.5vw,46px)] font-bold text-slate-900 leading-[1.1] tracking-tight">
              Our Strategic Google Ads{' '}
              <span className="text-gradient-blue">&amp; PPC Workflow</span>
            </h2>
          </div>
          <p className="text-[14px] text-slate-500 lg:max-w-[360px] leading-[1.85]">
            As a trusted search engine marketing ppc agency in Thanjavur, we focus on improving campaign performance and lowering cost-per-conversion.
          </p>
        </div>

        {/* ── Vertical timeline ── */}
        <div className="reveal relative">

          {/* Vertical connecting line */}
          <div className="absolute left-[27px] top-6 bottom-6 w-px hidden sm:block"
            style={{ background: 'linear-gradient(180deg, #2563eb22 0%, #7c3aed22 50%, #0f766e22 100%)' }} />

          <div className="flex flex-col gap-0">
            {steps.map(({ num, icon: Icon, title, desc, color }, i) => (
              <div key={num} className="relative flex gap-6 group">

                {/* Step circle */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-14 h-14 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
                    style={{
                      background: `linear-gradient(135deg, ${color}16, ${color}08)`,
                      border: `2px solid ${color}30`,
                    }}>
                    <Icon size={18} style={{ color }} />
                    <span className="text-[9px] font-black mt-0.5" style={{ color: color + '80' }}>{num}</span>
                  </div>
                </div>

                {/* Content + connector */}
                <div className="flex-1 min-w-0 pb-0">
                  <div className="flex flex-col sm:flex-row gap-4 pb-5">

                    {/* Text content */}
                    <div className="flex-1 pt-1">
                      <div className="flex items-center gap-3 mb-1.5">
                        <h3 className="text-[15px] font-bold text-slate-900 leading-snug">{title}</h3>
                      </div>
                      <p className="text-[13px] text-slate-500 leading-[1.75]">{desc}</p>
                    </div>

                    {/* Arrow to next (hidden on last) */}
                    {i < steps.length - 1 && (
                      <div className="hidden sm:flex items-start pt-3 flex-shrink-0">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center"
                          style={{ background: color + '10', border: `1px solid ${color}20` }}>
                          <ArrowRight size={12} style={{ color: color + '70' }} className="rotate-90" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Divider between steps */}
                  {i < steps.length - 1 && (
                    <div className="h-px mb-5 ml-0"
                      style={{ background: 'linear-gradient(90deg, #e2e8f0, transparent)' }} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
