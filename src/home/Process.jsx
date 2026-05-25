import { Search, Target, Globe, BarChart2, Share2, Activity, Rocket } from 'lucide-react'

const steps = [
  { n: '01', icon: Search,    title: 'Business & Competitor Analysis',   desc: 'Deep research into your market, audience, and competition to identify growth opportunities.',           color: '#3b82f6', glow: 'rgba(59,130,246,0.25)'  },
  { n: '02', icon: Target,    title: 'Strategy Planning & Goal Setting',  desc: 'Building a customized, data-backed digital marketing roadmap aligned with your KPIs.',                color: '#8b5cf6', glow: 'rgba(139,92,246,0.25)'  },
  { n: '03', icon: Globe,     title: 'SEO & Content Optimization',        desc: 'On-page, technical and off-page SEO combined with high-quality content to boost rankings.',          color: '#10b981', glow: 'rgba(16,185,129,0.25)'  },
  { n: '04', icon: BarChart2, title: 'Paid Advertising Setup',            desc: 'Launching and optimizing Google, Meta and display ad campaigns for targeted lead generation.',       color: '#f59e0b', glow: 'rgba(245,158,11,0.25)'  },
  { n: '05', icon: Share2,    title: 'Social Media Execution',            desc: 'Creative campaigns across platforms that drive engagement, reach and brand visibility.',             color: '#ec4899', glow: 'rgba(236,72,153,0.25)'  },
  { n: '06', icon: Activity,  title: 'Performance Tracking',              desc: 'Real-time analytics and transparent reporting to measure ROI and campaign effectiveness.',          color: '#06b6d4', glow: 'rgba(6,182,212,0.25)'   },
  { n: '07', icon: Rocket,    title: 'Optimization & Scaling',            desc: 'Continuous improvement and strategic scaling to accelerate long-term digital growth.',              color: '#3b82f6', glow: 'rgba(59,130,246,0.25)'  },
]

export default function Process() {
  return (
    <section id="process" className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 40%, #eff6ff 100%)' }}
    >
      {/* Orbs */}
      <div className="absolute pointer-events-none rounded-full"
        style={{ top: '-15%', right: '-10%', width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 65%)' }} />
      <div className="absolute pointer-events-none rounded-full"
        style={{ bottom: '-15%', left: '-8%', width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 65%)' }} />

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
            A strategic, methodical 7-step approach that ensures maximum ROI
            and long-term digital success for every client we partner with.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((s, i) => {
            const Icon = s.icon
            const isLast = i === steps.length - 1
            return (
              <div
                key={s.n}
                className={`reveal delay-${(i % 4) + 1} relative overflow-hidden rounded-2xl p-7
                  cursor-default group transition-all duration-300
                  hover:-translate-y-1.5
                  ${isLast ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e0eaff',
                  boxShadow: '0 0 0 0 transparent',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = `0 20px 60px ${s.glow}`
                  e.currentTarget.style.borderColor = `${s.color}40`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 0 0 0 transparent'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, ${s.color}, transparent)` }} />

                {/* Ghost number watermark */}
                <div className="absolute -right-3 -bottom-4 font-black select-none pointer-events-none"
                  style={{ fontSize: '100px', lineHeight: 1, color: '#fff', opacity: 0.03 }}>
                  {s.n}
                </div>

                {/* Icon + step badge */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-[13px] flex items-center justify-center flex-shrink-0
                    transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-5deg]"
                    style={{ background: `${s.color}18`, boxShadow: `0 4px 20px ${s.glow}` }}>
                    <Icon size={18} style={{ color: s.color }} />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest"
                    style={{ color: s.color }}>
                    Step {s.n}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[15px] font-bold text-slate-900 mb-2.5 leading-snug">
                  {s.title}
                </h3>

                {/* Desc */}
                <p className="text-[13px] text-slate-500 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
