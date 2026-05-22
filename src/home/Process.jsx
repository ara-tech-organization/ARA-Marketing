import { Search, Target, Globe, BarChart2, Share2, Activity, Rocket } from 'lucide-react'

const steps = [
  { n: '01', icon: Search,    title: 'Business & Competitor Analysis',  desc: 'Deep research into your market, audience, and competition to identify growth opportunities.' },
  { n: '02', icon: Target,    title: 'Strategy Planning & Goal Setting', desc: 'Building a customized, data-backed digital marketing roadmap aligned with your KPIs.' },
  { n: '03', icon: Globe,     title: 'SEO & Content Optimization',       desc: 'On-page, technical and off-page SEO combined with high-quality content to boost rankings.' },
  { n: '04', icon: BarChart2, title: 'Paid Advertising Setup',           desc: 'Launching and optimizing Google, Meta and display ad campaigns for targeted lead generation.' },
  { n: '05', icon: Share2,    title: 'Social Media Execution',           desc: 'Creative campaigns across platforms that drive engagement, reach and brand visibility.' },
  { n: '06', icon: Activity,  title: 'Performance Tracking',             desc: 'Real-time analytics and transparent reporting to measure ROI and campaign effectiveness.' },
  { n: '07', icon: Rocket,    title: 'Optimization & Scaling',           desc: 'Continuous improvement and strategic scaling to accelerate long-term digital growth.' },
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-7">

        {/* Header */}
        <div className="text-center mb-20 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4">
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

        {/* Zigzag timeline — desktop */}
        <div className="hidden lg:block relative">
          {/* Vertical center line */}
          <div className="timeline-line" />

          <div className="flex flex-col gap-0">
            {steps.map((s, i) => {
              const Icon = s.icon
              const isLeft = i % 2 === 0
              return (
                <div
                  key={s.n}
                  className={`reveal delay-${(i % 4) + 1} relative flex items-center mb-8
                    ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Content card */}
                  <div
                    className={`w-[calc(50%-48px)] group cursor-default
                      bg-white border border-slate-200 rounded-2xl p-7 shadow-sm
                      transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                      hover:shadow-blue-600/10 hover:border-blue-200
                      border-l-4 border-l-blue-600
                      ${isLeft ? 'mr-auto' : 'ml-auto'}`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-[11px] flex items-center
                        justify-center text-white flex-shrink-0 transition-all duration-300
                        group-hover:scale-110 group-hover:rotate-[-5deg] group-hover:shadow-lg
                        group-hover:shadow-blue-600/30">
                        <Icon size={18} />
                      </div>
                      <span className="text-[11px] font-extrabold text-blue-400 uppercase tracking-widest">
                        Step {s.n}
                      </span>
                    </div>
                    <h3 className="text-[16px] font-bold text-slate-900 mb-2 leading-snug">{s.title}</h3>
                    <p className="text-[13px] text-slate-500 leading-relaxed">{s.desc}</p>
                  </div>

                  {/* Center node */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#0d1f3c] border-4 border-blue-600
                      flex items-center justify-center shadow-lg shadow-blue-600/30">
                      <span className="text-[11px] font-extrabold text-blue-400">{s.n}</span>
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="w-[calc(50%-48px)]" />
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile: single column vertical list */}
        <div className="lg:hidden flex flex-col gap-4">
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={s.n}
                className={`reveal delay-${(i % 4) + 1} flex items-start gap-4
                  bg-white border border-slate-200 border-l-4 border-l-blue-600
                  rounded-2xl p-6 shadow-sm`}
              >
                <div className="w-10 h-10 bg-blue-600 rounded-[11px] flex items-center
                  justify-center text-white flex-shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold text-blue-400 uppercase tracking-widest block mb-1">
                    Step {s.n}
                  </span>
                  <h3 className="text-[15px] font-bold text-slate-900 mb-1.5 leading-snug">{s.title}</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
