import { Search, Palette, Code2, FlaskConical, Rocket, ArrowRight, GitBranch } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Requirement Analysis',
    desc: 'Deep discovery into your business goals, target audience, and technical requirements to define a clear, actionable project roadmap.',
    color: '#2563eb',
    duration: '1–2 Days',
  },
  {
    num: '02',
    icon: Palette,
    title: 'Design & UI/UX',
    desc: 'User-friendly, responsive, and visually compelling interfaces that reflect your brand identity and maximise conversion.',
    color: '#0891b2',
    duration: '2–3 Days',
  },
  {
    num: '03',
    icon: Code2,
    title: 'Development',
    desc: 'Build using best-in-class technologies — React, Node.js, Python, Flutter — with clean, scalable, and maintainable architecture.',
    color: '#1d4ed8',
    duration: '7–14 Days',
  },
  {
    num: '04',
    icon: FlaskConical,
    title: 'Testing & QA',
    desc: 'Rigorous multi-device quality assurance ensuring error-free performance, security compliance, and optimal loading speed.',
    color: '#2563eb',
    duration: '2–3 Days',
  },
  {
    num: '05',
    icon: Rocket,
    title: 'Deployment & Support',
    desc: 'Seamless production launch with continuous post-deployment maintenance, monitoring, and 24/7 dedicated support.',
    color: '#0891b2',
    duration: '1 Day',
  },
]

export default function WAProcess() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #eff6ff 0%, #f0f7ff 100%)' }}
    >
      {/* Decorative orbs */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(8,145,178,0.06) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 right-0 w-[280px] h-[280px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 65%)' }} />

      <div className="max-w-[1280px] mx-auto px-3 xs:px-4 sm:px-7">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 reveal">
          <span
            className="inline-flex items-center gap-2 px-3 xs:px-4 py-1.5 rounded-full text-[10px] xs:text-[11px] font-bold uppercase tracking-widest mb-4 sm:mb-5"
            style={{ background: 'rgba(8,145,178,0.08)', color: '#0891b2', border: '1px solid rgba(8,145,178,0.2)' }}
          >
            <GitBranch size={10} /> Our Proven Process
          </span>
          <h2 className="text-[clamp(22px,3vw,40px)] font-bold text-slate-900 leading-tight tracking-tight mb-3 sm:mb-4">
            How We Build Your{' '}
            <span style={{ background: 'linear-gradient(135deg,#2563eb,#0891b2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Web Application
            </span>
          </h2>
          <p className="text-[13px] xs:text-[14px] sm:text-[15px] text-slate-500 max-w-2xl mx-auto leading-[1.8] px-2">
            A structured, transparent five-step process that ensures your web application is delivered on time and exceeds every expectation.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block reveal">
          <div className="relative flex items-start gap-0">
            {/* Dashed connector line */}
            <div
              className="absolute top-[28px] left-[10%] right-[10%] h-px pointer-events-none"
              style={{ borderTop: '2px dashed #bfdbfe' }}
            />

            {steps.map(({ num, icon: Icon, title, desc, color, duration }) => (
              <div key={num} className="flex-1 flex flex-col items-center text-center px-2 xl:px-3 group">

                {/* Circle node */}
                <div
                  className="relative w-14 h-14 rounded-full flex items-center justify-center mb-4 z-10 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `linear-gradient(135deg,${color},${color}bb)`, boxShadow: `0 4px 20px ${color}45` }}
                >
                  <Icon size={20} className="text-white" />
                  <span
                    className="absolute -top-2 -right-2 w-[22px] h-[22px] rounded-full text-[9px] font-black flex items-center justify-center text-white"
                    style={{ background: color, border: '2px solid white' }}
                  >
                    {parseInt(num)}
                  </span>
                </div>

                {/* Duration badge */}
                <span
                  className="px-2.5 py-0.5 rounded-full text-[9px] font-bold mb-3"
                  style={{ background: `${color}12`, color }}
                >
                  {duration}
                </span>

                {/* Card */}
                <div
                  className="w-full rounded-2xl p-4 xl:p-5 transition-all duration-300 group-hover:-translate-y-1.5"
                  style={{
                    background: 'white',
                    borderTop: `3px solid ${color}`,
                    border: '1px solid #e2e8f0',
                    borderTopWidth: '3px',
                    borderTopColor: color,
                    boxShadow: '0 4px 16px rgba(37,99,235,0.05)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 12px 32px ${color}18` }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,99,235,0.05)' }}
                >
                  <h3 className="text-[12.5px] xl:text-[13px] font-bold text-slate-800 mb-2 leading-snug">{title}</h3>
                  <p className="text-[11px] xl:text-[11.5px] text-slate-500 leading-[1.7]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile + tablet: vertical stack */}
        <div className="lg:hidden flex flex-col gap-3 xs:gap-4">
          {steps.map(({ num, icon: Icon, title, desc, color, duration }, i) => (
            <div
              key={num}
              className={`flex items-start gap-3 xs:gap-4 p-4 xs:p-5 rounded-2xl bg-white reveal delay-${i + 1}`}
              style={{
                borderLeft: `4px solid ${color}`,
                boxShadow: '0 4px 16px rgba(37,99,235,0.06)',
                border: `1px solid #e2e8f0`,
                borderLeftWidth: '4px',
                borderLeftColor: color,
              }}
            >
              <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
                <div
                  className="w-10 xs:w-12 h-10 xs:h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg,${color},${color}bb)`, boxShadow: `0 4px 14px ${color}35` }}
                >
                  <Icon size={17} className="text-white" />
                </div>
                <span className="text-[9px] font-black" style={{ color }}>{num}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <h3 className="text-[13px] xs:text-[14px] font-bold text-slate-800 leading-snug">{title}</h3>
                  <span
                    className="px-2 py-0.5 rounded-full text-[8px] xs:text-[9px] font-bold flex-shrink-0"
                    style={{ background: `${color}10`, color }}
                  >
                    {duration}
                  </span>
                </div>
                <p className="text-[12px] xs:text-[12.5px] text-slate-500 leading-[1.7]">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-14 reveal">
          <a
            href="/ARA-Marketing/contact"
            className="inline-flex items-center gap-2 px-6 xs:px-7 py-3 xs:py-3.5 rounded-full text-[13px] xs:text-[13.5px] font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg,#1d4ed8,#0891b2)', boxShadow: '0 8px 24px rgba(37,99,235,0.28)' }}
          >
            Start Your Project <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
