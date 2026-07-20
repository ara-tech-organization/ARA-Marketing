import { ClipboardList, PenTool, Code2, Database, Rocket, Workflow } from 'lucide-react'

const steps = [
  { icon: ClipboardList, num: '01', title: 'Business Analysis & Requirement Gathering', desc: 'We begin by understanding your business goals, target audience, and functional requirements to plan the ideal dynamic website structure.', color: '#2563eb' },
  { icon: PenTool,       num: '02', title: 'UI/UX Design & Wireframing',                desc: 'Our design team creates intuitive wireframes and visual mockups that align with your brand identity and deliver exceptional user experience.', color: '#0ea5e9' },
  { icon: Code2,         num: '03', title: 'Backend Development & CMS Integration',     desc: 'We develop a robust backend engine and integrate your preferred CMS platform for seamless, code-free content management and administration.', color: '#2563eb' },
  { icon: Database,      num: '04', title: 'Database Architecture Setup',               desc: 'We architect and configure secure, scalable databases that store and serve your dynamic content efficiently, reliably, and at speed.', color: '#0ea5e9' },
  { icon: Rocket,        num: '05', title: 'Testing, Optimisation & Deployment',        desc: 'Rigorous multi-device and cross-browser testing, followed by performance optimisation and a smooth, fully monitored launch.', color: '#2563eb' },
]

const gradBlue = {
  background: 'var(--brand-gradient-text)',
  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
}

export default function DWProcess() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-16 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0d2244 0%, #0a1a34 40%, #0d2244 100%)' }}>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'var(--brand-gradient-dots)', backgroundSize: '36px 36px' }} />
      {/* Rings */}
      <div className="hidden sm:block absolute -top-20 -left-20 w-[380px] h-[380px] rounded-full border border-blue-500/10 pointer-events-none animate-[spin_36s_linear_infinite]" />
      <div className="hidden sm:block absolute -top-10 -left-10 w-[240px] h-[240px] rounded-full border border-sky-500/10 pointer-events-none animate-[spin_24s_linear_infinite_reverse]" />
      <div className="hidden sm:block absolute -bottom-16 -right-16 w-[320px] h-[320px] rounded-full border border-blue-500/10 pointer-events-none animate-[spin_40s_linear_infinite]" />
      {/* Orbs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'var(--brand-gradient-glow-dark)' }} />
      <div className="absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full pointer-events-none"
        style={{ background: 'var(--brand-gradient-glow-dark)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* ── Header ── */}
        <div className="text-center mb-12 sm:mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6"
            style={{ background: 'rgba(37,99,235,0.18)', border: '1px solid rgba(96,165,250,0.30)', color: '#93c5fd', backdropFilter: 'blur(8px)' }}>
            <Workflow size={10} /> Our Development Process
          </span>
          <h2 className="text-[clamp(21px,3.6vw,45px)] font-bold leading-[1.1] tracking-tight mb-4" style={{ color: '#ffffff' }}>
            How We Build{' '}
            <span style={gradBlue}>Dynamic Websites?</span>
          </h2>
          <p className="text-[13.5px] sm:text-[15px] leading-[1.85] max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
            We follow a strategical and result-oriented development process to ensure every dynamic website performs, scales, and succeeds.
          </p>
        </div>

        {/* ── Desktop horizontal steps ── */}
        <div className="hidden lg:flex items-stretch gap-4 relative reveal">
          {/* Connector line */}
          <div className="absolute top-[52px] left-[10%] right-[10%] h-0.5 pointer-events-none"
            style={{ background: 'var(--brand-gradient-line)' }} />
          {steps.map(({ icon: Icon, num, title, desc, color }, i) => (
            <div key={num} className="flex-1 flex flex-col items-center text-center group">
              {/* Icon bubble */}
              <div className="relative z-10 mb-6 w-[52px] h-[52px] rounded-full flex items-center justify-center transition-all duration-400 group-hover:scale-110 group-hover:shadow-xl"
                style={{
                  background: 'var(--brand-gradient)',
                  boxShadow: `0 0 0 5px #0a0a14, 0 0 0 6px ${color}30, 0 8px 24px ${color}35`,
                }}>
                <Icon size={18} className="text-white" />
              </div>
              {/* Card */}
              <div className="flex-1 w-full p-5 rounded-2xl transition-all duration-400 group-hover:-translate-y-2"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)', boxShadow: '0 4px 18px rgba(0,0,0,0.30)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = color + '50'
                  e.currentTarget.style.boxShadow = `0 16px 40px ${color}18`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'
                  e.currentTarget.style.boxShadow = '0 4px 18px rgba(0,0,0,0.30)'
                }}>
                <span className="text-[10px] font-black uppercase tracking-widest mb-2 block" style={{ color }}>Step {num}</span>
                <h3 className="text-[11px] font-bold leading-snug mb-2" style={{ color: '#ffffff' }}>{title}</h3>
                <p className="text-[11px] leading-[1.75]" style={{ color: 'rgba(255,255,255,0.55)' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Mobile vertical steps ── */}
        <div className="flex flex-col gap-3 sm:gap-4 lg:hidden reveal">
          {steps.map(({ icon: Icon, num, title, desc, color }) => (
            <div key={num} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.05)', border: `1.5px solid rgba(255,255,255,0.10)`, boxShadow: '0 4px 16px rgba(0,0,0,0.30)' }}>
              <div className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
                style={{ background: 'var(--brand-gradient)', boxShadow: `0 6px 18px ${color}30` }}>
                <Icon size={16} className="text-white" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest block mb-1" style={{ color }}>Step {num}</span>
                <h3 className="text-[13px] font-bold leading-snug mb-1" style={{ color: '#ffffff' }}>{title}</h3>
                <p className="text-[12px] leading-[1.75]" style={{ color: 'rgba(255,255,255,0.55)' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom note ── */}
        <div className="reveal mt-10 sm:mt-14 text-center px-5 sm:px-8 py-6 rounded-2xl"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.10)', boxShadow: '0 6px 24px rgba(0,0,0,0.30)' }}>
          <p className="text-[13px] sm:text-[14px] leading-[1.85]" style={{ color: 'rgba(255,255,255,0.70)' }}>
            Our dynamic web design services in Thanjavur ensure that each stage is in tune with the business objectives and user experience goals. We are a professional, dynamic website designing company in Thanjavur, and we build scalable systems that grow with your business.
          </p>
        </div>

      </div>
    </section>
  )
}
