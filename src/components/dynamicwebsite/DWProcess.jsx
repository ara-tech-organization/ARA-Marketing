import { ClipboardList, PenTool, Code2, Database, Rocket, Workflow } from 'lucide-react'

const steps = [
  { icon: ClipboardList, num: '01', title: 'Business Analysis & Requirement Gathering', desc: 'We begin by understanding your business goals, target audience, and functional requirements to plan the ideal dynamic website structure.', color: '#2563eb' },
  { icon: PenTool,       num: '02', title: 'UI/UX Design & Wireframing',                desc: 'Our design team creates intuitive wireframes and visual mockups that align with your brand identity and deliver exceptional user experience.', color: '#0891b2' },
  { icon: Code2,         num: '03', title: 'Backend Development & CMS Integration',     desc: 'We develop a robust backend engine and integrate your preferred CMS platform for seamless, code-free content management and administration.', color: '#2563eb' },
  { icon: Database,      num: '04', title: 'Database Architecture Setup',               desc: 'We architect and configure secure, scalable databases that store and serve your dynamic content efficiently, reliably, and at speed.', color: '#0891b2' },
  { icon: Rocket,        num: '05', title: 'Testing, Optimisation & Deployment',        desc: 'Rigorous multi-device and cross-browser testing, followed by performance optimisation and a smooth, fully monitored launch.', color: '#2563eb' },
]

const gradBlue = {
  background: 'linear-gradient(135deg,#2563eb,#0891b2)',
  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
}

export default function DWProcess() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #f0f7ff 0%, #eff6ff 55%, #e0f2fe 100%)' }}>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.07) 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }} />
      {/* Rings */}
      <div className="hidden sm:block absolute -top-20 -left-20 w-[380px] h-[380px] rounded-full border border-blue-200/35 pointer-events-none animate-[spin_36s_linear_infinite]" />
      <div className="hidden sm:block absolute -top-10 -left-10 w-[240px] h-[240px] rounded-full border border-sky-200/25 pointer-events-none animate-[spin_24s_linear_infinite_reverse]" />
      <div className="hidden sm:block absolute -bottom-16 -right-16 w-[320px] h-[320px] rounded-full border border-blue-200/30 pointer-events-none animate-[spin_40s_linear_infinite]" />
      {/* Orbs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.22) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(186,230,253,0.20) 0%, transparent 65%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* ── Header ── */}
        <div className="text-center mb-12 sm:mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6 text-blue-600 bg-white/80 shadow-sm"
            style={{ border: '1px solid rgba(37,99,235,0.18)' }}>
            <Workflow size={10} /> Our Development Process
          </span>
          <h2 className="text-[clamp(22px,4vw,46px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
            How We Build{' '}
            <span style={gradBlue}>Dynamic Websites?</span>
          </h2>
          <p className="text-[13.5px] sm:text-[15px] text-slate-500 leading-[1.85] max-w-2xl mx-auto">
            We follow a strategical and result-oriented development process to ensure every dynamic website performs, scales, and succeeds.
          </p>
        </div>

        {/* ── Desktop horizontal steps ── */}
        <div className="hidden lg:flex items-stretch gap-4 relative reveal">
          {/* Connector line */}
          <div className="absolute top-[52px] left-[10%] right-[10%] h-0.5 pointer-events-none"
            style={{ background: 'linear-gradient(90deg, #2563eb, #38bdf8, #0891b2, #38bdf8, #2563eb)' }} />
          {steps.map(({ icon: Icon, num, title, desc, color }, i) => (
            <div key={num} className="flex-1 flex flex-col items-center text-center group">
              {/* Icon bubble */}
              <div className="relative z-10 mb-6 w-[52px] h-[52px] rounded-full flex items-center justify-center transition-all duration-400 group-hover:scale-110 group-hover:shadow-xl"
                style={{
                  background: `linear-gradient(135deg, ${color}, ${color}cc)`,
                  boxShadow: `0 0 0 5px white, 0 0 0 6px ${color}30, 0 8px 24px ${color}35`,
                }}>
                <Icon size={18} className="text-white" />
              </div>
              {/* Card */}
              <div className="flex-1 w-full p-5 rounded-2xl transition-all duration-400 group-hover:-translate-y-2 bg-white"
                style={{ border: `1.5px solid ${color}15`, boxShadow: '0 4px 18px rgba(37,99,235,0.07)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = color + '35'
                  e.currentTarget.style.boxShadow = `0 16px 40px ${color}18`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = color + '15'
                  e.currentTarget.style.boxShadow = '0 4px 18px rgba(37,99,235,0.07)'
                }}>
                <span className="text-[10px] font-black uppercase tracking-widest mb-2 block" style={{ color }}>Step {num}</span>
                <h3 className="text-[12.5px] font-bold text-slate-900 leading-snug mb-2">{title}</h3>
                <p className="text-[11px] text-slate-500 leading-[1.75]">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Mobile vertical steps ── */}
        <div className="flex flex-col gap-3 sm:gap-4 lg:hidden reveal">
          {steps.map(({ icon: Icon, num, title, desc, color }) => (
            <div key={num} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white"
              style={{ border: `1.5px solid ${color}18`, boxShadow: '0 4px 16px rgba(37,99,235,0.07)' }}>
              <div className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)`, boxShadow: `0 6px 18px ${color}30` }}>
                <Icon size={16} className="text-white" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest block mb-1" style={{ color }}>Step {num}</span>
                <h3 className="text-[14px] font-bold text-slate-900 leading-snug mb-1">{title}</h3>
                <p className="text-[12px] text-slate-500 leading-[1.75]">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom note ── */}
        <div className="reveal mt-10 sm:mt-14 text-center px-5 sm:px-8 py-6 rounded-2xl bg-white"
          style={{ border: '1.5px solid rgba(37,99,235,0.12)', boxShadow: '0 6px 24px rgba(37,99,235,0.08)' }}>
          <p className="text-[13px] sm:text-[14px] text-slate-600 leading-[1.85]">
            Our <strong className="text-blue-600">dynamic web design services in Thanjavur</strong> ensure that each stage is in tune with the business objectives and user experience goals. We are a professional, dynamic website designing company in Thanjavur, and we build scalable systems that grow with your business.
          </p>
        </div>

      </div>
    </section>
  )
}
