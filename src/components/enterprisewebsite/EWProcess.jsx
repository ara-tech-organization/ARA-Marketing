import {
  ClipboardList, Lightbulb, Palette, Code2,
  TestTube2, Rocket, Zap,
} from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: ClipboardList,
    title: 'Requirement Analysis',
    body: 'Understanding enterprise goals, clients, workflows, and KPIs to define precise scope and technical requirements.',
    color: '#2563eb',
    lightBg: '#eff6ff',
    border: '#bfdbfe',
  },
  {
    num: '02',
    icon: Lightbulb,
    title: 'Strategy & Planning',
    body: 'Customising solutions with AI-driven insights — architectural foundation, tech stack selection, and sprint roadmap.',
    color: '#7c3aed',
    lightBg: '#f5f3ff',
    border: '#ddd6fe',
  },
  {
    num: '03',
    icon: Palette,
    title: 'Design & UI/UX',
    body: 'Creating a visually appealing, highly engaging and user-friendly interface aligned with enterprise brand guidelines.',
    color: '#0891b2',
    lightBg: '#ecfeff',
    border: '#a5f3fc',
  },
  {
    num: '04',
    icon: Code2,
    title: 'Development',
    body: 'AI-driven modern technologies to build scalable, secure websites with clean code architecture and API integrations.',
    color: '#059669',
    lightBg: '#ecfdf5',
    border: '#a7f3d0',
  },
  {
    num: '05',
    icon: TestTube2,
    title: 'Testing & QA',
    body: 'Ensuring seamless performance, security, and responsiveness across all devices with rigorous automated and manual QA.',
    color: '#f59e0b',
    lightBg: '#fffbeb',
    border: '#fde68a',
  },
  {
    num: '06',
    icon: Rocket,
    title: 'Deployment & Support',
    body: 'Flawless launch with continuous maintenance, optimisation, and updates so your enterprise platform evolves with you.',
    color: '#2563eb',
    lightBg: '#eff6ff',
    border: '#bfdbfe',
  },
]

function StepCard({ num, icon: Icon, title, body, color, lightBg, border, originDir = 'left' }) {
  return (
    <div
      className="group relative rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 overflow-hidden transition-all duration-300 cursor-default h-full"
      style={{ background: lightBg, border: `1.5px solid ${border}`, boxShadow: '0 4px 18px rgba(0,0,0,0.04)' }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = `0 16px 40px ${color}1a`
        e.currentTarget.style.borderColor = `${color}55`
        e.currentTarget.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 4px 18px rgba(0,0,0,0.04)'
        e.currentTarget.style.borderColor = border
        e.currentTarget.style.transform = 'none'
      }}>

      {/* Watermark */}
      <span className="absolute -top-2 -right-0.5 text-[60px] sm:text-[72px] font-bold leading-none select-none pointer-events-none"
        style={{ color: `${color}0d` }}>
        {num}
      </span>

      {/* Icon */}
      <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 transition-all duration-300 group-hover:scale-110"
        style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
        <Icon size={16} style={{ color }} />
      </div>

      {/* Phase label */}
      <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-1 sm:mb-1.5" style={{ color: `${color}90` }}>
        Phase {num}
      </p>

      <h3 className="text-[12px] sm:text-[13px] lg:text-[14px] font-bold text-slate-800 mb-2 sm:mb-2.5 leading-snug">{title}</h3>
      <p className="text-[11.5px] sm:text-[12.5px] text-slate-500 leading-[1.78]">{body}</p>

      {/* Bottom accent */}
      <div className={`absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ${originDir === 'right' ? 'origin-right' : 'origin-left'} rounded-b-3xl`}
        style={{ background: `linear-gradient(${originDir === 'right' ? '270' : '90'}deg,${color},${color}60)` }} />
    </div>
  )
}

export default function EWProcess() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden bg-white">

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.045) 1.5px, transparent 1.5px)', backgroundSize: '34px 34px' }} />

      {/* Rings — lg only */}
      <div className="hidden lg:block absolute -top-24 -right-24 w-[340px] h-[340px] rounded-full pointer-events-none"
        style={{ border: '1.5px solid rgba(124,58,237,0.07)', animation: 'spin 60s linear infinite' }} />
      <div className="hidden lg:block absolute -bottom-20 -left-20 w-[280px] h-[280px] rounded-full pointer-events-none"
        style={{ border: '1.5px solid rgba(37,99,235,0.07)', animation: 'spin 45s linear infinite reverse' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-14 reveal">
          <span className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-4 sm:mb-5 text-blue-600 bg-blue-50"
            style={{ border: '1px solid rgba(37,99,235,0.15)' }}>
            <Zap size={9} /> Development Process
          </span>
          <h2 className="text-[clamp(19px,3.6vw,43px)] font-bold text-slate-900 leading-[1.10] tracking-tight mb-3 sm:mb-4">
            From Concept to{' '}
            <span style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Launch
            </span>
          </h2>
          <p className="text-[12.5px] sm:text-[14px] lg:text-[15px] text-slate-500 leading-[1.85] max-w-xl mx-auto px-2 sm:px-0">
            Our structured 6-phase process ensures every enterprise project is delivered on time, within scope, and beyond expectations.
          </p>
        </div>

        {/* ── Phase tracker — md+ only ── */}
        <div className="hidden md:flex items-center justify-between mb-8 lg:mb-10 px-2 sm:px-4 reveal">
          {steps.map(({ num, color }, i) => (
            <div key={num} className="flex items-center flex-1 min-w-0">
              <div className="flex-shrink-0 w-8 h-8 lg:w-9 lg:h-9 rounded-full flex items-center justify-center font-bold text-[11px] lg:text-[12px] text-white"
                style={{ background: `linear-gradient(135deg,${color},${color}bb)`, boxShadow: `0 3px 12px ${color}40` }}>
                {num}
              </div>
              {i < steps.length - 1 && (
                <div className="flex-1 h-px mx-1.5 lg:mx-2 min-w-0"
                  style={{ background: `linear-gradient(90deg,${color}55,${steps[i + 1].color}55)` }} />
              )}
            </div>
          ))}
        </div>

        {/* ── Row 1 (steps 01–03): 1col xs → 2col sm → 3col lg ── */}
        <div className="reveal">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
            {steps.slice(0, 3).map(s => (
              <StepCard key={s.num} {...s} originDir="left" />
            ))}
          </div>
        </div>

        {/* ── Divider label ── */}
        <div className="flex items-center gap-3 my-3 sm:my-4 reveal">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(37,99,235,0.18))' }} />
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
            style={{ color: 'rgba(37,99,235,0.55)', background: '#eff6ff', border: '1px solid #bfdbfe' }}>
            Continue
          </span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,rgba(124,58,237,0.18),transparent)' }} />
        </div>

        {/* ── Row 2 (steps 04–06): 1col xs → 2col sm → 3col lg ── */}
        <div className="reveal delay-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {steps.slice(3).map(s => (
              <StepCard key={s.num} {...s} originDir="right" />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
