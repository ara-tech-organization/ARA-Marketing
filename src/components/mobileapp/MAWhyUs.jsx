import { Trophy, Cpu, Users, Clock, Briefcase, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react'

import whyUsImage from '../../assets/MobileApp/m2.webp'

const reasons = [
  {
    icon: Trophy,
    title: 'Best App Development Agency in Thanjavur',
    desc: 'Recognised among the best App Development Companies in Thanjavur with proven results across industries.',
    color: '#1e40af',
  },
  {
    icon: Briefcase,
    title: 'Professional Services to Meet Business Goals',
    desc: 'Professional mobile app development services in Thanjavur tailored to achieve your specific business objectives.',
    color: '#2563eb',
  },
  {
    icon: Cpu,
    title: 'AI-Powered Solutions & Insights',
    desc: 'AI-powered solutions for smarter user engagement, intelligent insights, and AI mobile app development.',
    color: '#0891b2',
  },
  {
    icon: Users,
    title: 'Full-Cycle Development from Strategy to Deployment',
    desc: 'We handle every phase — strategy, design, development, QA, deployment, and post-launch support.',
    color: '#059669',
  },
  {
    icon: Clock,
    title: 'Transparent Process & Timely Delivery',
    desc: 'Zero surprises. Clear communication, milestone tracking, and on-schedule delivery every time.',
    color: '#d97706',
  },
]

const checklist = [
  'Professional mobile app development services in Thanjavur',
  'AI mobile app development in Thanjavur',
  'iOS and Android development',
  'Full-cycle from strategy to deployment',
  'Transparent process & timely delivery',
]

export default function MAWhyUs() {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.04) 0%,transparent 65%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.03) 0%,transparent 65%)' }} />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(37,99,235,0.08)', color: '#1e40af', border: '1px solid rgba(37,99,235,0.2)' }}>
            <Sparkles size={11} /> What Makes Us Different
          </span>
          <h2 className="text-[clamp(23px,2.7vw,39px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Why Choose ARA Discover as Your{' '}
            <span style={{ background: 'linear-gradient(135deg,#1e40af,#2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
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
            <div className="relative h-full rounded-3xl overflow-hidden min-h-[320px] lg:min-h-[420px]"
              style={{ background: 'linear-gradient(135deg,#1e3a8a 0%,#2563eb 100%)' }}>
              <img
                src={whyUsImage}
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
                  <h3 className="text-[23px] font-bold text-white leading-tight mb-3">
                    Professional Mobile App Development Services
                  </h3>
                  <p className="text-[14px] text-blue-100 leading-[1.8]">
                    Meeting business goals with innovative solutions that seamlessly integrate with your digital strategy and make your brand stand out.
                  </p>
                </div>

                <div className="flex flex-col gap-2.5 mt-8">
                  {checklist.map(item => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 size={14} className="text-blue-200 flex-shrink-0" />
                      <span className="text-[12.5px] text-blue-100 font-medium">{item}</span>
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
                className={`reveal delay-${Math.min(i + 1, 4)} flex items-start gap-5 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 cursor-default`}
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
                  <h3 className="text-[13px] font-bold text-slate-800 mb-1.5 leading-snug">{title}</h3>
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
