import { Layout, Zap, Shield, ArrowRight, ArrowUpRight, ChevronRight, Globe, Monitor, CheckCircle2, Star } from 'lucide-react'
import swHeroImg from '../../assets/static/s1.webp'

const techTags = ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'Vite', 'Netlify', 'Vercel']

const quickWins = [
  { icon: Zap,          text: 'Lightning-fast loading speed' },
  { icon: Shield,       text: 'Enhanced security — no DB' },
  { icon: CheckCircle2, text: 'SEO-optimized clean code' },
]

const stats = [
  { value: '150+', label: 'Websites Built' },
  { value: '<1s',  label: 'Avg Load Time' },
  { value: '98%',  label: 'Client Satisfaction' },
]

export default function SWHero() {
  return (
    <section
      className="relative overflow-hidden pt-[72px] min-h-screen flex items-center"
      style={{ background: 'linear-gradient(145deg, #f0f7ff 0%, #eff6ff 55%, #dbeafe 100%)' }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.12) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      {/* Orbs */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none animate-orb"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.09) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 -left-24 w-[480px] h-[480px] rounded-full pointer-events-none animate-orb-rev"
        style={{ background: 'radial-gradient(circle, rgba(8,145,178,0.07) 0%, transparent 65%)' }} />
      {/* Rings */}
      <div className="hidden md:block absolute top-20 right-[6%] w-52 h-52 rounded-full border border-blue-200/40 pointer-events-none animate-[spin_40s_linear_infinite]" />
      <div className="hidden md:block absolute bottom-24 left-[4%] w-36 h-36 rounded-full border border-sky-200/35 pointer-events-none animate-[spin_30s_linear_infinite_reverse]" />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7 py-12 sm:py-16 lg:py-20 w-full">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch">

          {/* ── Left: Text ── */}
          <div className="flex-1 min-w-0 animate-hero-enter text-center lg:text-left flex flex-col justify-center">

            {/* Breadcrumb */}
            <nav className="hidden sm:flex items-center justify-center lg:justify-start gap-1.5 text-[12px] text-slate-400 mb-6">
              <a href="/ARA-Marketing/" className="hover:text-blue-600 transition-colors">Home</a>
              <ChevronRight size={12} className="text-slate-300" />
              <a href="/ARA-Marketing/services/website-development" className="hover:text-blue-600 transition-colors">Web Design</a>
              <ChevronRight size={12} className="text-slate-300" />
              <span className="text-blue-600 font-medium">Static Website</span>
            </nav>

            {/* Badge */}
            <div className="flex justify-center lg:justify-start mb-6 sm:mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-blue-700"
                style={{ background: 'rgba(37,99,235,0.10)', border: '1px solid rgba(37,99,235,0.22)' }}>
                <Layout size={10} /> Static Website Development Service
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-[clamp(21px,2.9vw,43px)] font-bold leading-[1.08] tracking-tight mb-5 text-slate-900">
              Launch Your Online{' '}
              <span style={{ background: 'linear-gradient(135deg,#2563eb,#0891b2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Presence
              </span>{' '}
              with Static Websites
            </h1>

            {/* Tagline */}
            <p className="text-[13px] sm:text-[14px] font-medium tracking-wide mb-5 text-slate-400">
              Fast &middot; Secure &middot; SEO-Optimized &middot; Mobile-First
            </p>

            {/* Description */}
            <p className="text-[14px] sm:text-[15px] text-slate-600 leading-[1.9] mb-3 max-w-[560px] mx-auto lg:mx-0">
              Are you looking to build a static website in Thanjavur that loads fast, ranks better, and converts visitors into customers? We build light, secure, and SEO-friendly websites for businesses that want performance without the complexity.
            </p>
            <p className="hidden sm:block text-[13.5px] text-slate-500 leading-[1.85] mb-8 sm:mb-10 max-w-[540px] mx-auto lg:mx-0">
              As a trusted static website development company in Thanjavur, we deliver mobile-first, conversion-focused websites tailored for every business size and goal.
            </p>

            {/* Quick wins */}
            <div className="flex flex-col gap-2.5 mb-8 sm:mb-10 items-center lg:items-start">
              {quickWins.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5">
                  <Icon size={14} className="text-blue-600 flex-shrink-0" />
                  <span className="text-[13.5px] text-slate-600 font-medium">{text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-row flex-wrap justify-center lg:justify-start gap-3 mb-10">
              <a href="/ARA-Marketing/contact-us"
                className="btn-glow inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-[13.5px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#1d4ed8,#0891b2)', boxShadow: '0 6px 20px rgba(37,99,235,0.28)' }}>
                Take a First Step <ArrowRight size={14} />
              </a>
              <a href="#sw-intro"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-[13.5px] font-semibold border-2 border-blue-400 text-blue-600 transition-all duration-300 hover:bg-blue-50 hover:-translate-y-0.5">
                Explore Services <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Stats strip */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 pt-6 sm:pt-8"
              style={{ borderTop: '1px solid rgba(37,99,235,0.12)' }}>
              {stats.map(({ value, label }, i) => (
                <div key={label} className="flex flex-col items-center lg:items-start"
                  style={{ borderLeft: i > 0 ? '1px solid #bfdbfe' : 'none', paddingLeft: i > 0 ? '1.75rem' : '0' }}>
                  <span className="text-[26px] sm:text-[30px] font-black leading-tight"
                    style={{ background: 'linear-gradient(135deg,#2563eb,#0891b2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {value}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium mt-0.5">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: unified card + built-with ── */}
          <div className="hidden md:flex flex-col lg:w-[460px] flex-shrink-0 w-full max-w-[460px] reveal-right">
            <div className="relative mt-10 flex flex-col flex-1">
              <div className="absolute -inset-4 rounded-[2.5rem] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.14) 0%, transparent 70%)' }} />

              {/* Single unified card */}
              <div className="relative rounded-3xl overflow-hidden flex flex-col flex-1"
                style={{ background: 'white', border: '1.5px solid #e2e8f0', boxShadow: '0 32px 80px rgba(37,99,235,0.16)' }}>

                {/* Accent bar */}
                <div className="h-1.5" style={{ background: 'linear-gradient(90deg,#1d4ed8,#2563eb,#38bdf8)' }} />

                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                  <div className="flex gap-1.5 flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex-1 flex items-center gap-1.5 px-2.5 py-1 bg-white rounded-md border border-slate-200 mx-2">
                    <Globe size={9} className="text-slate-400 flex-shrink-0" />
                    <span className="text-[10px] text-slate-500 font-medium">yourbusiness.com</span>
                    <span className="ml-auto flex items-center gap-1 text-[9px] font-bold text-emerald-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Secure
                    </span>
                  </div>
                </div>

                {/* Screenshot image */}
                <div className="relative overflow-hidden flex-1" style={{ minHeight: '230px' }}>
                  <img
                    src={swHeroImg}
                    alt="Static Website Development in Thanjavur — ARA Discover Marketing"
                    className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[1.5s]"
                    loading="eager"
                  />
                  <div className="absolute inset-0"
                    style={{ background: 'linear-gradient(180deg,transparent 45%,rgba(255,255,255,0.50) 100%)' }} />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {[
                      { lbl: 'Performance', val: '100', bg: 'rgba(37,99,235,0.92)' },
                      { lbl: 'SEO',         val: '98',  bg: 'rgba(16,185,129,0.92)' },
                    ].map(({ lbl, val, bg }) => (
                      <div key={lbl} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                        style={{ background: bg, backdropFilter: 'blur(6px)' }}>
                        <span className="text-[11px] font-black text-white">{val}</span>
                        <span className="text-[9px] font-semibold text-white/80">{lbl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Blue header */}
                <div className="flex items-center justify-between px-5 py-3.5"
                  style={{ background: 'linear-gradient(135deg,#1e3a8a 0%,#2563eb 100%)' }}>
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(255,255,255,0.18)' }}>
                      <Monitor size={13} className="text-white" />
                    </div>
                    <span className="text-[12px] font-bold text-white">Static Website Preview</span>
                  </div>
                  <span className="flex items-center gap-1.5 text-[10px] font-bold text-white/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                    LIVE
                  </span>
                </div>

                {/* Metrics row */}
                <div className="flex">
                  {[
                    { val: '100', lbl: 'Performance', color: '#2563eb' },
                    { val: '98',  lbl: 'SEO Score',   color: '#1d4ed8' },
                    { val: '<1s', lbl: 'Load Time',   color: '#0891b2' },
                    { val: '5★',  lbl: 'Rating',      color: '#2563eb' },
                  ].map(({ val, lbl, color }, i) => (
                    <div key={lbl} className="flex-1 text-center py-4"
                      style={{ borderRight: i < 3 ? '1px solid #f1f5f9' : 'none' }}>
                      <p className="text-[15px] font-black leading-tight" style={{ color }}>{val}</p>
                      <p className="text-[9px] text-slate-400 font-medium mt-0.5">{lbl}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating: Delivery */}
              <div className="hidden lg:flex absolute -top-4 -right-4 items-center gap-3 px-4 py-3 rounded-2xl bg-white animate-float"
                style={{ border: '1px solid #dbeafe', boxShadow: '0 10px 32px rgba(37,99,235,0.18)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg,#2563eb,#1d4ed8)', boxShadow: '0 4px 12px rgba(37,99,235,0.35)' }}>
                  <Zap size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-[9px] text-slate-400 font-semibold leading-none mb-0.5">Delivered In</p>
                  <p className="text-[15px] font-black text-slate-800 leading-tight">3–7 Days</p>
                </div>
              </div>

              {/* Floating: Rating */}
              <div className="hidden lg:flex absolute -bottom-4 -left-4 items-center gap-3 px-4 py-3 rounded-2xl bg-white animate-float"
                style={{ border: '1px solid #fde68a', boxShadow: '0 10px 32px rgba(245,158,11,0.16)', animationDelay: '1.5s' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg,#f59e0b,#d97706)', boxShadow: '0 4px 12px rgba(245,158,11,0.35)' }}>
                  <Star size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-[9px] text-slate-400 font-semibold leading-none mb-0.5">Client Rating</p>
                  <p className="text-[15px] font-black text-slate-800 leading-tight">5★ Reviews</p>
                </div>
              </div>
            </div>

            {/* Built with — separate frosted glass strip */}
            <div className="mt-10 px-4 py-4 rounded-2xl flex items-center gap-2.5 flex-wrap"
              style={{ background: 'rgba(255,255,255,0.70)', border: '1px solid rgba(37,99,235,0.12)', backdropFilter: 'blur(8px)' }}>
              <span className="text-[9px] font-black uppercase tracking-widest flex-shrink-0 px-2.5 py-1 rounded-lg"
                style={{ color: '#64748b', background: 'rgba(37,99,235,0.07)' }}>
                Built with
              </span>
              {techTags.map((tag) => (
                <span key={tag}
                  className="px-3 py-1 rounded-lg text-[11px] font-bold transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                  style={{ background: 'white', color: '#1d4ed8', border: '1.5px solid rgba(37,99,235,0.15)', boxShadow: '0 2px 6px rgba(37,99,235,0.08)' }}>
                  {tag}
                </span>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
