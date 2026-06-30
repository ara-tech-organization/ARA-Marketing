import { Trophy, Cpu, Users, Clock, Briefcase, Sparkles, CheckCircle2, Star } from 'lucide-react'
import whyUsImage from '../../assets/MobileApp/m2.webp'

const checklist = [
  'Professional mobile app development services in Thanjavur',
  'AI mobile app development in Thanjavur',
  'iOS and Android development',
  'Full-cycle from strategy to deployment',
  'Transparent process & timely delivery',
]

const reasons = [
  {
    num: '01',
    icon: Trophy,
    title: 'Best App Development Agency in Thanjavur',
    desc: 'Recognised among the best App Development Companies in Thanjavur with proven results across industries.',
    accent: '#2563eb',
    bg: 'rgba(37,99,235,0.07)',
  },
  {
    num: '02',
    icon: Briefcase,
    title: 'Professional Services to Meet Business Goals',
    desc: 'Professional mobile app development services in Thanjavur tailored to achieve your specific business objectives.',
    accent: '#6366f1',
    bg: 'rgba(99,102,241,0.07)',
  },
  {
    num: '03',
    icon: Cpu,
    title: 'AI-Powered Solutions & Insights',
    desc: 'AI-powered solutions for smarter user engagement, intelligent insights, and AI mobile app development.',
    accent: '#0891b2',
    bg: 'rgba(8,145,178,0.07)',
  },
  {
    num: '04',
    icon: Users,
    title: 'Full-Cycle Development',
    desc: 'We handle every phase — strategy, design, development, QA, deployment, and post-launch support.',
    accent: '#059669',
    bg: 'rgba(5,150,105,0.07)',
  },
  {
    num: '05',
    icon: Clock,
    title: 'Transparent Process & Timely Delivery',
    desc: 'Zero surprises. Clear communication, milestone tracking, and on-schedule delivery every time.',
    accent: '#d97706',
    bg: 'rgba(217,119,6,0.07)',
  },
]

export default function MAWhyUs() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">

      {/* subtle background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse,rgba(37,99,235,0.05) 0%,transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse,rgba(99,102,241,0.04) 0%,transparent 70%)' }} />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-7 relative">

        {/* ── Header ── */}
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(37,99,235,0.08)', color: '#1e40af', border: '1px solid rgba(37,99,235,0.18)' }}>
            <Sparkles size={11} /> What Makes Us Different
          </span>
          <h2 className="text-[clamp(24px,3vw,42px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Why Choose ARA Discover as Your{' '}
            <span style={{ background: 'linear-gradient(135deg,#1e40af,#6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              App Partner?
            </span>
          </h2>
          <p className="text-[15px] text-slate-500 max-w-2xl mx-auto leading-[1.85]">
            We combine deep technical expertise with creative problem-solving to build mobile apps that deliver real, measurable business results.
          </p>
        </div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

          {/* Hero feature card — spans 5 cols, 2 rows */}
          <div className="lg:col-span-5 lg:row-span-2 reveal-left">
            <div className="relative h-full min-h-[360px] lg:min-h-[500px] rounded-3xl overflow-hidden flex flex-col justify-between p-8"
              style={{ background: 'linear-gradient(145deg,#1e3a8a 0%,#1d4ed8 55%,#1e40af 100%)', border: '1px solid rgba(37,99,235,0.3)' }}>

              <img src={whyUsImage} alt="Mobile App Development Agency Thanjavur"
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20" loading="lazy" />

              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle,rgba(255,255,255,0.7) 1px,transparent 1px)', backgroundSize: '26px 26px' }} />

              <div className="absolute top-[-60px] right-[-60px] w-[240px] h-[240px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle,rgba(255,255,255,0.06) 0%,transparent 70%)' }} />

              <div className="relative">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <Star size={20} className="text-white" />
                </div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-blue-200 mb-2">
                  Mobile App Development Agency Thanjavur
                </p>
                <h3 className="text-[22px] font-bold text-white leading-snug mb-4">
                  Professional Mobile App Development Services
                </h3>
                <p className="text-[13.5px] text-blue-100 leading-[1.8]">
                  Meeting business goals with innovative solutions that seamlessly integrate with your digital strategy and make your brand stand out.
                </p>
              </div>

              <div className="relative mt-6 flex flex-col gap-2.5">
                {checklist.map(item => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={13} className="text-blue-200 flex-shrink-0 mt-0.5" />
                    <span className="text-[12px] text-blue-100 font-medium leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              <div className="relative mt-6 self-start">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold text-white"
                  style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)' }}>
                  <Trophy size={11} /> Best App Agency · Thanjavur
                </span>
              </div>
            </div>
          </div>

          {/* Top-right — 2 cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 reveal delay-1">
            {reasons.slice(0, 2).map(({ num, icon: Icon, title, desc, accent }) => (
              <div key={num}
                className="flex rounded-2xl overflow-hidden cursor-default transition-all duration-300"
                style={{ background: '#fff', boxShadow: '0 2px 20px rgba(0,0,0,0.07)', border: '1px solid #f1f5f9' }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = `0 20px 48px ${accent}20`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 2px 20px rgba(0,0,0,0.07)'
                }}
              >
                {/* left icon panel */}
                <div className="icon-panel flex-shrink-0 w-[68px] flex flex-col items-center justify-center gap-3 transition-all duration-300"
                  style={{ background: `linear-gradient(160deg,${accent}22,${accent}10)` }}>
                  <Icon size={22} style={{ color: accent }} className="transition-colors duration-300" />
                  <span className="text-[10px] font-black" style={{ color: `${accent}99` }}>{num}</span>
                </div>
                {/* right content */}
                <div className="flex-1 p-4">
                  <div className="w-5 h-[2.5px] rounded-full mb-2.5" style={{ background: accent }} />
                  <h3 className="text-[13px] font-bold text-slate-800 mb-1.5 leading-snug">{title}</h3>
                  <p className="text-[12px] text-slate-500 leading-[1.65]">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom-right — 3 cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 reveal delay-2">
            {reasons.slice(2).map(({ num, icon: Icon, title, desc, accent }) => (
              <div key={num}
                className="flex rounded-2xl overflow-hidden cursor-default transition-all duration-300"
                style={{ background: '#fff', boxShadow: '0 2px 20px rgba(0,0,0,0.07)', border: '1px solid #f1f5f9' }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = `0 20px 48px ${accent}20`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 2px 20px rgba(0,0,0,0.07)'
                }}
              >
                <div className="icon-panel flex-shrink-0 w-[60px] flex flex-col items-center justify-center gap-2 transition-all duration-300"
                  style={{ background: `linear-gradient(160deg,${accent}22,${accent}10)` }}>
                  <Icon size={20} style={{ color: accent }} />
                  <span className="text-[10px] font-black" style={{ color: `${accent}99` }}>{num}</span>
                </div>
                <div className="flex-1 p-4">
                  <div className="w-5 h-[2.5px] rounded-full mb-2.5" style={{ background: accent }} />
                  <h3 className="text-[12.5px] font-bold text-slate-800 mb-1.5 leading-snug">{title}</h3>
                  <p className="text-[11.5px] text-slate-500 leading-[1.65]">{desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
