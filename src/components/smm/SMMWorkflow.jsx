import {
  Search, Target, Palette, Megaphone, MessageSquare, Activity, BarChart2, Layers
} from 'lucide-react'

const steps = [
  {
    num: '01', icon: Search,
    title: 'Audience & Competitor Research',
    desc: 'Understanding your target audience segments and analyzing competitor strategies.',
    color: '#2563eb', bg: '#dbeafe',
  },
  {
    num: '02', icon: Target,
    title: 'Platform Selection & Strategy Planning',
    desc: 'Selecting the right platforms and creating a tailored strategy for maximum impact.',
    color: '#7c3aed', bg: '#ede9fe',
  },
  {
    num: '03', icon: Palette,
    title: 'Content Creation & Branding',
    desc: 'Designing high-quality creative content and visuals aligned with your brand identity.',
    color: '#059669', bg: '#d1fae5',
  },
  {
    num: '04', icon: Megaphone,
    title: 'Social Media Ad Campaign Setup',
    desc: 'Setting up and configuring targeted paid advertising campaigns across platforms.',
    color: '#d97706', bg: '#fef3c7',
  },
  {
    num: '05', icon: MessageSquare,
    title: 'Audience Engagement & Community Management',
    desc: 'Managing interactions, responding to audiences and building active communities.',
    color: '#db2777', bg: '#fce7f3',
  },
  {
    num: '06', icon: Activity,
    title: 'Campaign Monitoring & Optimization',
    desc: 'Continuously tracking performance and optimizing campaigns for better ROI.',
    color: '#0891b2', bg: '#cffafe',
  },
  {
    num: '07', icon: BarChart2,
    title: 'Monthly Reporting & Growth Analysis',
    desc: 'Delivering detailed monthly reports with growth insights and next-step recommendations.',
    color: '#2563eb', bg: '#dbeafe',
  },
]

export default function SMMWorkflow() {
  return (
    <section
      className="py-24"
      style={{ background: 'linear-gradient(180deg,#f8faff 0%,#ffffff 100%)' }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
            <Layers size={11} /> Our Process
          </span>
          <h2 className="text-[clamp(23px,2.7vw,39px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Our Strategic{' '}
            <span className="text-gradient-blue">Social Media Marketing</span> Workflow
          </h2>
          <p className="text-[15px] text-slate-500 leading-relaxed max-w-2xl mx-auto">
            As a reliable social advertising agency in Thanjavur, we believe in delivering measurable growth through structured workflow processes.
          </p>
        </div>

        {/* Two-column layout: left col 01–04, right col 05–07 (offset down) */}
        <div className="grid lg:grid-cols-2 gap-x-14 gap-y-0 max-w-[1100px] mx-auto">

          {/* Left column — steps 01, 02, 03, 04 */}
          <div className="flex flex-col">
            {steps.slice(0, 4).map((step, idx) => {
              const Icon = step.icon
              const isLast = idx === 3
              return (
                <div
                  key={step.num}
                  className={`reveal delay-${idx + 1} flex gap-5 relative ${!isLast ? 'pb-6' : ''}`}
                >
                  {/* Dot + connector */}
                  <div className="flex flex-col items-center flex-shrink-0" style={{ width: 48 }}>
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center
                        text-white text-[13px] font-bold z-10 flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)`,
                        boxShadow: `0 4px 16px ${step.color}35`,
                      }}
                    >
                      {step.num}
                    </div>
                    {!isLast && (
                      <div
                        className="flex-1 mt-1"
                        style={{
                          width: 2,
                          minHeight: 32,
                          background: `linear-gradient(180deg, ${step.color}55, #e2e8f0)`,
                          borderRadius: 2,
                        }}
                      />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 bg-white rounded-2xl p-5 group cursor-default
                      transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      border: '1.5px solid #f1f5f9',
                      boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = step.color + '44'
                      e.currentTarget.style.boxShadow = `0 8px 28px ${step.color}14`
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = '#f1f5f9'
                      e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)'
                    }}
                  >
                    <div className="flex items-start gap-3.5">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center
                          flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                        style={{ background: step.bg }}
                      >
                        <Icon size={20} style={{ color: step.color }} />
                      </div>
                      <div>
                        <h3 className="text-[13px] font-bold text-slate-800 mb-1.5 leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-[12.5px] text-slate-500 leading-[1.75]">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right column — steps 05, 06, 07 — offset down */}
          <div className="flex flex-col mt-0 lg:mt-14">
            {steps.slice(4).map((step, idx) => {
              const Icon = step.icon
              const isLast = idx === 2
              return (
                <div
                  key={step.num}
                  className={`reveal delay-${idx + 2} flex gap-5 relative ${!isLast ? 'pb-6' : ''}`}
                >
                  {/* Dot + connector */}
                  <div className="flex flex-col items-center flex-shrink-0" style={{ width: 48 }}>
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center
                        text-white text-[13px] font-bold z-10 flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)`,
                        boxShadow: `0 4px 16px ${step.color}35`,
                      }}
                    >
                      {step.num}
                    </div>
                    {!isLast && (
                      <div
                        className="flex-1 mt-1"
                        style={{
                          width: 2,
                          minHeight: 32,
                          background: `linear-gradient(180deg, ${step.color}55, #e2e8f0)`,
                          borderRadius: 2,
                        }}
                      />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 bg-white rounded-2xl p-5 group cursor-default
                      transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      border: '1.5px solid #f1f5f9',
                      boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = step.color + '44'
                      e.currentTarget.style.boxShadow = `0 8px 28px ${step.color}14`
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = '#f1f5f9'
                      e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)'
                    }}
                  >
                    <div className="flex items-start gap-3.5">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center
                          flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                        style={{ background: step.bg }}
                      >
                        <Icon size={20} style={{ color: step.color }} />
                      </div>
                      <div>
                        <h3 className="text-[13px] font-bold text-slate-800 mb-1.5 leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-[12.5px] text-slate-500 leading-[1.75]">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
