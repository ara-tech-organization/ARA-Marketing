import { ClipboardList, Palette, Code2, Gauge, Rocket, ArrowRight, GitBranch } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: ClipboardList,
    title: 'Requirement Analysis',
    desc: 'We start with an in-depth discovery session to understand your business goals, target audience, and the features your app needs to succeed.',
    color: '#1e40af',
  },
  {
    num: '02',
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'Our designers craft interactive, responsive app designs with pixel-perfect precision — built for user engagement and conversion.',
    color: '#2563eb',
  },
  {
    num: '03',
    icon: Code2,
    title: 'Development',
    desc: 'Using the latest tools for Android and iOS, we build high-performance, scalable, and secure mobile applications.',
    color: '#0891b2',
  },
  {
    num: '04',
    icon: Gauge,
    title: 'Testing & QA',
    desc: 'Rigorous testing across devices and OS versions ensures flawless functionality, performance, and a bug-free user experience.',
    color: '#059669',
  },
  {
    num: '05',
    icon: Rocket,
    title: 'Deployment & Support',
    desc: 'We handle app store submissions and provide continuous updates, maintenance, and optimisation post-launch.',
    color: '#dc2626',
  },
]

export default function MAProcess() {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.05) 0%,transparent 65%)' }} />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.04) 0%,transparent 65%)' }} />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(37,99,235,0.08)', color: '#1e40af', border: '1px solid rgba(37,99,235,0.2)' }}>
            <GitBranch size={11} /> Our Process
          </span>
          <h2 className="text-[clamp(23px,2.7vw,39px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            How We Build Your{' '}
            <span style={{ background: 'linear-gradient(135deg,#1e40af,#2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Mobile App?
            </span>
          </h2>
          <p className="text-[15px] text-slate-500 max-w-2xl mx-auto leading-[1.8]">
            We follow a streamlined, strategic process to deliver high-quality mobile apps. Every step is aligned to your business objectives and designed for success.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block reveal">
          <div className="relative flex items-start gap-0">
            <div className="absolute top-[28px] left-[8%] right-[8%] h-[2px] pointer-events-none"
              style={{ background: 'linear-gradient(90deg,#1e40af,#2563eb,#0891b2,#059669,#dc2626)' }} />

            {steps.map(({ num, icon: Icon, title, desc, color }) => (
              <div key={num} className="flex-1 flex flex-col items-center text-center px-3 group">
                <div className="relative w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 z-10"
                  style={{ background: `linear-gradient(135deg,${color},${color}cc)`, boxShadow: `0 4px 20px ${color}40` }}>
                  <Icon size={20} className="text-white" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-[9px] font-black flex items-center justify-center text-white"
                    style={{ background: color, border: '2px solid white' }}>
                    {num.replace('0', '')}
                  </span>
                </div>

                <div className="w-full rounded-2xl p-5 transition-all duration-300 group-hover:-translate-y-1"
                  style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.border = `1px solid ${color}30`
                    e.currentTarget.style.background = `${color}05`
                    e.currentTarget.style.boxShadow = `0 8px 24px ${color}12`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.border = '1px solid #e2e8f0'
                    e.currentTarget.style.background = '#f8fafc'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <h3 className="text-[12px] font-bold mb-2 leading-snug" style={{ color: '#1e293b' }}>{title}</h3>
                  <p className="text-[11.5px] text-slate-500 leading-[1.7]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical stack */}
        <div className="lg:hidden flex flex-col gap-5">
          {steps.map(({ num, icon: Icon, title, desc, color }, i) => (
            <div key={num}
              className={`reveal delay-${i + 1} flex items-start gap-4 sm:gap-5 p-4 sm:p-6 rounded-2xl`}
              style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <div className="flex flex-col items-center gap-2 flex-shrink-0">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg,${color},${color}cc)`, boxShadow: `0 4px 16px ${color}35` }}>
                  <Icon size={18} className="text-white" />
                </div>
                <span className="text-[10px] font-black" style={{ color: `${color}80` }}>{num}</span>
              </div>
              <div>
                <h3 className="text-[13px] font-bold text-slate-800 mb-1.5 leading-snug">{title}</h3>
                <p className="text-[12.5px] text-slate-500 leading-[1.7]">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 reveal">
          <p className="text-[14px] text-slate-500 leading-[1.8] max-w-2xl mx-auto mb-6">
            Our mobile application development service in Thanjavur ensures speed, accuracy, and scalability at every step of your project.
          </p>
          <a href="/ARA-Marketing/contact-us"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[13.5px] font-semibold text-white transition-all duration-300 hover:scale-[1.03]"
            style={{ background: 'linear-gradient(135deg,#1e40af,#2563eb)' }}>
            Start Your App Project <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}
