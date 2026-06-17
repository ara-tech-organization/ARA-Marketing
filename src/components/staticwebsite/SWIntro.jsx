import { Zap, Shield, Search, DollarSign, ArrowRight, Sparkles } from 'lucide-react'
import swIntroImg from '../../assets/static/s2.png'

const features = [
  {
    icon: Zap,
    title: 'Blazing Fast Performance',
    desc: 'Static sites serve pre-built HTML files directly — no server processing, no database queries. Pages load in milliseconds.',
    color: '#0891b2',
    bg: 'rgba(8,145,178,0.08)',
  },
  {
    icon: Shield,
    title: 'Bulletproof Security',
    desc: 'No backend, no database — static websites eliminate entire categories of vulnerabilities and hacking risks.',
    color: '#2563eb',
    bg: 'rgba(37,99,235,0.08)',
  },
  {
    icon: Search,
    title: 'SEO-Ready Structure',
    desc: 'Search engines love fast, clean HTML. Static sites naturally rank better with our structured optimization approach.',
    color: '#7c3aed',
    bg: 'rgba(124,58,237,0.08)',
  },
  {
    icon: DollarSign,
    title: 'Cost Effective Solution',
    desc: 'Minimal hosting costs, no server maintenance, and zero database expenses — long-term value for every business.',
    color: '#059669',
    bg: 'rgba(5,150,105,0.08)',
  },
]

export default function SWIntro() {
  return (
    <section
      id="sw-intro"
      className="relative overflow-hidden py-16 sm:py-24"
      style={{ background: 'linear-gradient(160deg, #03111f 0%, #04131c 50%, #030e18 100%)' }}
    >
      {/* Background orbs */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(8,145,178,0.12) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 65%)' }}
      />
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(8,145,178,0.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Section Header */}
        <div className="text-center mb-14 reveal">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(8,145,178,0.15)', color: '#38bdf8', border: '1px solid rgba(8,145,178,0.3)' }}
          >
            <Sparkles size={11} /> Why Static Websites
          </span>
          <h2 className="text-[clamp(24px,3vw,42px)] font-bold leading-tight tracking-tight text-white mb-5">
            Powering Digital Growth with{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #38bdf8, #818cf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Static Websites
            </span>
          </h2>
          <p className="text-[15px] leading-[1.85] max-w-3xl mx-auto" style={{ color: '#94a3b8' }}>
            In today's fast-moving digital world, businesses need websites that are fast, secure, and easy to maintain. Our static website development services are designed to help startups, local businesses, and professionals build a strong online presence with minimal cost and maximum performance.
          </p>
        </div>

        {/* Central image */}
        <div className="relative reveal mb-14">
          <div
            className="rounded-3xl overflow-hidden"
            style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(8,145,178,0.2)' }}
          >
            <img
              src={swIntroImg}
              alt="Static Website Development Services Thanjavur"
              className="w-full object-cover"
              style={{ height: '320px' }}
              loading="lazy"
            />
            {/* Overlay */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, rgba(3,17,31,0.75) 0%, rgba(8,145,178,0.15) 100%)' }}
            />
            {/* Overlay text */}
            <div className="absolute inset-0 flex flex-col justify-end p-10">
              <p className="text-white text-[17px] font-semibold leading-snug max-w-2xl mb-2">
                We are a static website design &amp; development company in Thanjavur delivering solutions that are quick, SEO ready, and mobile responsive.
              </p>
              <p style={{ color: '#7dd3fc' }} className="text-[13px]">
                Whether you are a small business owner or an enterprise, our solutions will make your brand shine online.
              </p>
            </div>
          </div>

          {/* Floating stat badges */}
          <div
            className="absolute -top-5 left-8 bg-white rounded-2xl px-5 py-3 flex items-center gap-3 hidden md:flex"
            style={{ boxShadow: '0 8px 32px rgba(8,145,178,0.25)', border: '1px solid rgba(8,145,178,0.18)' }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #0891b2, #2563eb)' }}
            >
              <Zap size={16} className="text-white" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-medium">Pages Load In</p>
              <p className="text-[18px] font-black text-slate-800 leading-tight">&lt;1 Second</p>
            </div>
          </div>

          <div
            className="absolute -bottom-5 right-8 bg-white rounded-2xl px-5 py-3 flex items-center gap-3 hidden md:flex"
            style={{ boxShadow: '0 8px 32px rgba(37,99,235,0.22)', border: '1px solid rgba(37,99,235,0.15)' }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}
            >
              <Search size={16} className="text-white" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-medium">SEO Score</p>
              <p className="text-[18px] font-black text-slate-800 leading-tight">98 / 100</p>
            </div>
          </div>
        </div>

        {/* Feature cards — horizontal flex row, not grid */}
        <div className="flex flex-col sm:flex-row gap-5 reveal">
          {features.map(({ icon: Icon, title, desc, color, bg }) => (
            <div
              key={title}
              className="flex-1 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.border = `1px solid ${color}40`
                e.currentTarget.style.background = `${bg}`
                e.currentTarget.style.boxShadow = `0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px ${color}30`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.2)'
              }}
            >
              {/* Top accent line */}
              <div className="h-0.5 rounded-full mb-5 w-10 transition-all duration-300" style={{ background: color }} />
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${color}18`, border: `1px solid ${color}30` }}
              >
                <Icon size={19} style={{ color }} />
              </div>
              <h3 className="text-[14px] font-bold text-white mb-2 leading-snug">{title}</h3>
              <p className="text-[12.5px] leading-[1.75]" style={{ color: '#94a3b8' }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA link */}
        <div className="text-center mt-10 reveal">
          <p className="text-[14px] mb-3" style={{ color: '#94a3b8' }}>
            We specialize in static web page development in Thanjavur — websites that load instantly and look great on all devices.
          </p>
          <a
            href="/ARA-Marketing/contact-us"
            className="inline-flex items-center gap-2 text-[13.5px] font-semibold transition-all duration-200 hover:gap-3"
            style={{ color: '#38bdf8' }}
          >
            Start Your Project Today <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  )
}
