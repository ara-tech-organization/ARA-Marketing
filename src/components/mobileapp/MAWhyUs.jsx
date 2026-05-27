import { Trophy, Cpu, Users, Clock, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react'

const reasons = [
  {
    icon: Trophy,
    title: 'Best App Development Agency in Thanjavur',
    desc: 'Recognised for delivering exceptional mobile app solutions with proven results and client satisfaction.',
    color: '#7c3aed',
  },
  {
    icon: Cpu,
    title: 'AI-Powered Mobile App Development',
    desc: 'AI features for smarter user engagement, business automation, and intelligent insights built right in.',
    color: '#2563eb',
  },
  {
    icon: Users,
    title: 'Full-Cycle Development Partnership',
    desc: 'From strategy to post-launch support — we handle every phase of your app lifecycle with care.',
    color: '#0891b2',
  },
  {
    icon: Clock,
    title: 'Transparent Process & Timely Delivery',
    desc: 'Zero surprises. We communicate clearly and deliver on schedule, every time, no exceptions.',
    color: '#059669',
  },
]

const checklist = [
  'Custom app development solutions',
  'AI mobile app development in Thanjavur',
  'iOS and Android development',
  'Enterprise-grade security',
]

export default function MAWhyUs() {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(124,58,237,0.04) 0%,transparent 65%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.03) 0%,transparent 65%)' }} />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-7">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(124,58,237,0.08)', color: '#7c3aed', border: '1px solid rgba(124,58,237,0.2)' }}>
            <Sparkles size={11} /> What Makes Us Different
          </span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Why Choose Ara Discover as Your{' '}
            <span style={{ background: 'linear-gradient(135deg,#7c3aed,#2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              App Partner?
            </span>
          </h2>
          <p className="text-[15px] text-slate-500 max-w-2xl mx-auto leading-[1.8]">
            We combine deep technical expertise with creative problem-solving to build mobile apps that deliver real, measurable business results.
          </p>
        </div>

        {/* Asymmetric layout — image panel + stacked cards */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* Left: large visual gradient panel */}
          <div className="lg:w-[420px] flex-shrink-0 reveal-left">
            <div className="relative h-full rounded-3xl overflow-hidden min-h-[420px]"
              style={{ background: 'linear-gradient(135deg,#4c1d95 0%,#2563eb 100%)' }}>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=700&fit=crop&auto=format&q=80"
                alt="Mobile App Development Agency Thanjavur"
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-35"
                loading="lazy"
              />
              <div className="absolute inset-0 opacity-20"
                style={{ backgroundImage: 'radial-gradient(circle,rgba(255,255,255,0.6) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />

              <div className="relative p-8 flex flex-col h-full justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)' }}>
                    <Trophy size={24} className="text-white" />
                  </div>
                  <h3 className="text-[24px] font-bold text-white leading-tight mb-3">
                    Professional Mobile App Development Services
                  </h3>
                  <p className="text-[14px] text-purple-100 leading-[1.8]">
                    Meeting business goals with innovative solutions that seamlessly integrate with your digital strategy and make your brand stand out.
                  </p>
                </div>

                <div className="flex flex-col gap-2.5 mt-8">
                  {checklist.map(item => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 size={14} className="text-purple-200 flex-shrink-0" />
                      <span className="text-[12.5px] text-purple-100 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full self-start"
                  style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)' }}>
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider">Best App Agency · Thanjavur</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: stacked reason cards */}
          <div className="flex-1 flex flex-col gap-5 reveal-right">
            {reasons.map(({ icon: Icon, title, desc, color }, i) => (
              <div key={title}
                className={`reveal delay-${i + 1} flex items-start gap-5 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 cursor-default`}
                style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
                onMouseEnter={e => {
                  e.currentTarget.style.border = `1px solid ${color}30`
                  e.currentTarget.style.background = `${color}04`
                  e.currentTarget.style.boxShadow = `0 8px 24px ${color}10`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.border = '1px solid #e2e8f0'
                  e.currentTarget.style.background = '#f8fafc'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}12`, border: `1px solid ${color}25` }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[14.5px] font-bold text-slate-800 mb-1.5 leading-snug">{title}</h3>
                  <p className="text-[13px] text-slate-500 leading-[1.7]">{desc}</p>
                </div>
                <ChevronRight size={16} className="text-slate-300 flex-shrink-0 mt-0.5" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
