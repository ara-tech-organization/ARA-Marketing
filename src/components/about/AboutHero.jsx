import { Building2, Users, TrendingUp, Award, Star, ArrowRight, CheckCircle2 } from 'lucide-react'

import heroImage from '../../assets/About/A1.webp'

const stats = [
  { icon: Users,      val: '100+', label: 'Brands Served'  },
  { icon: TrendingUp, val: '150+', label: 'Projects Done'  },
  { icon: Star,       val: '5.0',  label: 'Client Rating'  },
  { icon: Award,      val: '3+',   label: 'Years of Trust' },
]

const trustPoints = [
  'Data-driven marketing strategies',
  'Transparent reporting & analytics',
  'AI-powered campaign optimization',
]

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-[72px] bg-white">

      {/* ── Background decorations ── */}
      {/* Large light-blue blob top-right */}
      <div className="absolute pointer-events-none rounded-full"
        style={{ top: '-12%', right: '-10%', width: '700px', height: '700px',
          background: 'radial-gradient(circle, rgba(219,234,254,0.75) 0%, transparent 62%)' }} />
      {/* Soft blob bottom-left */}
      <div className="absolute pointer-events-none rounded-full"
        style={{ bottom: '-8%', left: '-6%', width: '450px', height: '450px',
          background: 'radial-gradient(circle, rgba(186,230,253,0.45) 0%, transparent 65%)' }} />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.07) 1px, transparent 1px)',
          backgroundSize: '28px 28px' }} />

      {/* Decorative ring — top-left */}
      <div className="absolute hidden xl:block pointer-events-none rounded-full"
        style={{ top: '-4%', left: '-7%', width: '380px', height: '380px',
          border: '1.5px solid rgba(37,99,235,0.1)' }} />
      {/* Decorative small dashed ring — bottom-right area */}
      <div className="absolute hidden lg:block pointer-events-none rounded-full"
        style={{ bottom: '12%', right: '3%', width: '88px', height: '88px',
          border: '1.5px dashed rgba(14,165,233,0.3)' }} />
      {/* Rotated square accent */}
      <div className="absolute hidden lg:block pointer-events-none"
        style={{ top: '22%', left: '5%', width: '44px', height: '44px',
          border: '1.5px solid rgba(37,99,235,0.18)', borderRadius: '10px',
          transform: 'rotate(20deg)' }} />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7 py-10 sm:py-16 md:py-20 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-12 xl:gap-16 items-center">

          {/* ── Left: text ── */}
          <div className="flex-1 reveal-left text-center lg:text-left">

            {/* Chip */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
              text-[11px] font-bold uppercase tracking-widest mb-6"
              style={{ background: '#eff6ff', color: '#2563eb', border: '1px solid #bfdbfe' }}>
              <Building2 size={11} /> Digital Marketing Agency · Thanjavur
            </span>

            {/* Heading */}
            <h1 className="font-bold text-slate-900 leading-[1.06] tracking-tight mb-5"
              style={{ fontSize: 'clamp(21px,2.7vw,43px)' }}>
              We Are{' '}
              <span className="relative inline-block">
                <span style={{
                  background: 'linear-gradient(135deg,#2563eb,#0ea5e9)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>ARA Discover</span>
                {/* Underline draw */}
                <span className="absolute left-0 right-0 h-[3px] rounded-full animate-underline"
                  style={{ bottom: '-4px', background: 'linear-gradient(90deg,#2563eb,#0ea5e9)',
                    transformOrigin: 'left' }} />
              </span>
              {' '}Marketing
            </h1>

            <p className="mb-7 max-w-[520px] mx-auto lg:mx-0"
              style={{ fontSize: 'clamp(14px,1.4vw,16px)', lineHeight: '1.85', color: '#475569' }}>
              At ARA Discover Marketing, we go beyond traditional digital marketing by creating
              impactful online experiences that strengthen brands, increase audience engagement, and
              support business growth. Through innovative strategies and a data-focused approach, we
              help businesses build a strong digital presence, connect with the right customers, and
              succeed in today's fast-changing online environment.
            </p>

            {/* Trust bullets */}
            <div className="flex flex-col items-center lg:items-start gap-2 mb-8">
              {trustPoints.map(p => (
                <div key={p} className="flex items-center gap-2.5">
                  <CheckCircle2 size={15} style={{ color: '#2563eb', flexShrink: 0 }} />
                  <span className="text-[13.5px] font-medium text-slate-600">{p}</span>
                </div>
              ))}
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 md:mb-9">
              {stats.map(({ icon: Icon, val, label }) => (
                <div key={label}
                  className="flex flex-col gap-1.5 p-4 rounded-2xl transition-all duration-300
                    hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-100/80"
                  style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0' }}>
                  <Icon size={15} style={{ color: '#2563eb' }} />
                  <span className="text-[22px] font-bold text-slate-900 leading-none">{val}</span>
                  <span className="text-[10.5px] font-semibold text-slate-400 leading-tight">{label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <a href="/ARA-Marketing/contact-us"
                className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                  font-bold text-[14px] text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)',
                  boxShadow: '0 8px 32px rgba(37,99,235,0.3)' }}>
                Work With Us <ArrowRight size={15} />
              </a>
              <a href="#our-story"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                  font-semibold text-[14px] transition-all duration-300 hover:bg-blue-50 hover:-translate-y-0.5"
                style={{ color: '#2563eb', border: '1.5px solid #bfdbfe' }}>
                Our Story
              </a>
            </div>
          </div>

          {/* ── Right: hero image ── */}
          <div className="w-full lg:w-[460px] xl:w-[500px] flex-shrink-0 reveal-right">
            <div className="relative">

              {/* Outer decorative dashed border — hidden on mobile to prevent overflow */}
              <div className="absolute hidden sm:block pointer-events-none rounded-[32px]"
                style={{ inset: '-14px', border: '1.5px dashed rgba(37,99,235,0.2)' }} />

              {/* Blue accent square behind image */}
              <div className="absolute pointer-events-none rounded-[24px]"
                style={{ bottom: '-12px', right: '-12px', width: '75%', height: '75%',
                  background: 'linear-gradient(135deg,#dbeafe,#bfdbfe)', zIndex: 0 }} />

              {/* Image */}
              <div className="relative z-10 rounded-[24px] overflow-hidden"
                style={{ boxShadow: '0 32px 80px rgba(37,99,235,0.18)' }}>
                <img
                  src={heroImage}
                  alt="ARA Discover Marketing team collaboration — Best Digital Marketing Agency in Thanjavur"
                  className="w-full h-full object-cover block"
                  style={{ aspectRatio: '4/3' }}
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(15,23,42,0.15))' }} />
              </div>

              {/* Floating badge — trusted agency */}
              <div className="absolute bottom-3 left-3 sm:-bottom-6 sm:-left-6 z-20 rounded-2xl p-3 sm:p-4"
                style={{ background: 'white', border: '1.5px solid #e2e8f0',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.12)', minWidth: '148px' }}>
                <div className="flex items-center gap-1 mb-1.5">
                  {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="#f59e0b" color="#f59e0b" />)}
                  <span className="text-[10px] font-bold text-slate-500 ml-1">5.0</span>
                </div>
                <p className="text-[13px] font-bold text-slate-900 leading-tight">Trusted Agency</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Thanjavur, Tamil Nadu</p>
              </div>

              {/* Floating badge — projects count */}
              <div className="absolute top-3 right-3 sm:-top-5 sm:-right-5 z-20 rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5"
                style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)',
                  boxShadow: '0 12px 36px rgba(37,99,235,0.4)' }}>
                <p className="text-[26px] font-black text-white leading-none">150+</p>
                <p className="text-[11px] text-blue-100 font-medium mt-0.5">Projects Delivered</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="relative h-16 overflow-hidden" style={{ marginTop: '-1px' }}>
        <svg viewBox="0 0 1440 64" className="absolute bottom-0 w-full" preserveAspectRatio="none"
          style={{ height: '64px' }}>
          <path d="M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z" fill="#f0f9ff" />
        </svg>
      </div>
    </section>
  )
}
