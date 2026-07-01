import {
  Zap, ArrowRight, ArrowUpRight, ChevronRight,
  Globe, Database, RefreshCw, Code2,
  TrendingUp, Monitor, Layers, CheckCircle2,
} from 'lucide-react'

const cmsModules = [
  { label: 'Pages Published',  val: '48',   pct: 80, color: '#2563eb' },
  { label: 'Content Updates',  val: '312',  pct: 72, color: '#0ea5e9' },
  { label: 'Active Sessions',  val: '2.1K', pct: 65, color: '#60a5fa' },
]

const techStack = [
  { label: 'React',     color: '#2563eb', icon: Code2 },
  { label: 'Node.js',   color: '#0ea5e9', icon: Database },
  { label: 'WordPress', color: '#60a5fa', icon: Globe },
  { label: 'REST API',  color: '#60a5fa', icon: RefreshCw },
]

const highlights = [
  { val: '200+', label: 'Websites Delivered' },
  { val: '98%',  label: 'Client Satisfaction' },
  { val: '5x',   label: 'Faster Updates' },
]

const gradBlue = {
  background: 'linear-gradient(135deg,#93c5fd,#60a5fa)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

export default function DWHero() {
  return (
    <section
      className="relative overflow-hidden pt-[72px] min-h-screen flex items-center"
      style={{ background: 'linear-gradient(135deg, #020b18 0%, #071428 45%, #040e1f 100%)' }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.16) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
      {/* Noise */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
      {/* Orbs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none animate-orb"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.28) 0%, transparent 65%)' }} />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none animate-orb-rev"
        style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.20) 0%, transparent 65%)' }} />
      {/* Rings */}
      <div className="hidden md:block absolute top-20 right-[8%] w-48 h-48 rounded-full border border-blue-500/10 pointer-events-none animate-[spin_40s_linear_infinite]" />
      <div className="hidden md:block absolute bottom-20 left-[5%] w-32 h-32 rounded-full border border-sky-500/10 pointer-events-none animate-[spin_30s_linear_infinite_reverse]" />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7 py-12 sm:py-16 lg:py-20 w-full">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

          {/* ── Left: Content ── */}
          <div className="flex-1 min-w-0 animate-hero-enter text-center lg:text-left">

            {/* Breadcrumb */}
            <nav className="hidden sm:flex items-center justify-center lg:justify-start gap-1.5 text-[12px] mb-6"
              style={{ color: 'rgba(255,255,255,0.35)' }}>
              <a href="/ARA-Marketing/" className="transition-colors hover:text-sky-300">Home</a>
              <ChevronRight size={12} style={{ color: 'rgba(255,255,255,0.20)' }} />
              <a href="/ARA-Marketing/services/website-development" className="transition-colors hover:text-sky-300">Web Design</a>
              <ChevronRight size={12} style={{ color: 'rgba(255,255,255,0.20)' }} />
              <span className="text-sky-300 font-medium">Dynamic Website</span>
            </nav>

            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-6 sm:mb-8"
              style={{
                background: 'rgba(37,99,235,0.18)',
                border: '1px solid rgba(96,165,250,0.30)',
                color: '#93c5fd',
                backdropFilter: 'blur(8px)',
              }}>
              <Zap size={10} /> Dynamic Website Development Service
            </span>

            {/* H1 */}
            <h1 className="leading-[1.08] tracking-tight mb-5 sm:mb-6" style={{ color: '#ffffff', fontSize: '37px', fontWeight: 600 }}>
              <span style={{ display: 'block', whiteSpace: 'normal' }}>Build Powerful Dynamic Websites</span>
              <span style={{ display: 'block', whiteSpace: 'normal', ...gradBlue }}>That Grow With Your Business</span>
            </h1>

            {/* Tagline */}
            <p className="text-[13px] sm:text-[15px] font-medium tracking-wide mb-4 sm:mb-5"
              style={{ color: 'rgba(255,255,255,0.45)' }}>
              Scalable &middot; Interactive &middot; High-Performing &middot; CMS-Powered
            </p>

            <p className="text-[13.5px] sm:text-[14.5px] leading-[1.85] mb-3 max-w-[560px] mx-auto lg:mx-0"
              style={{ color: 'rgba(255,255,255,0.55)' }}>
              Are you searching for a dynamic website development company in Thanjavur? We design and develop scalable, interactive, and high-performing websites with easy content management for businesses.
            </p>
            <p className="hidden sm:block text-[13px] sm:text-[13.5px] leading-[1.8] mb-8 sm:mb-10 max-w-[560px] mx-auto lg:mx-0"
              style={{ color: 'rgba(255,255,255,0.35)' }}>
              We offer professional dynamic web development in Thanjavur for businesses, brands, and creators seeking engaging, conversion-focused web experiences.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 sm:mb-12">
              <a href="/ARA-Marketing/contact-us"
                className="btn-glow inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ boxShadow: '0 8px 32px rgba(37,99,235,0.35)' }}>
                Take a First Step <ArrowRight size={14} />
              </a>
              <a href="#dw-intro"
                className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  color: 'rgba(255,255,255,0.80)',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(8px)',
                }}>
                Explore Services <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Stats strip */}
            <div className="flex justify-center lg:justify-start flex-wrap gap-6 sm:gap-8 pt-6 sm:pt-8"
              style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              {highlights.map(({ val, label }) => (
                <div key={label} className="flex flex-col items-center lg:items-start">
                  <span className="text-[26px] sm:text-[30px] font-black leading-tight" style={gradBlue}>{val}</span>
                  <span className="text-[11px] sm:text-[12px] mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: CMS Dashboard card ── */}
          <div className="hidden md:block lg:w-[460px] flex-shrink-0 w-full max-w-[460px] reveal-right">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(29,78,216,0.28) 0%, transparent 70%)' }} />

              <div className="relative rounded-3xl overflow-hidden border border-white/10"
                style={{ background: 'white', boxShadow: '0 40px 100px rgba(0,0,0,0.60)' }}>

                {/* Header bar */}
                <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4"
                  style={{ background: 'linear-gradient(135deg,#0f172a 0%,#1e3a8a 60%,#1d4ed8 100%)' }}>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.10)' }}>
                      <Globe size={9} className="text-white/60" />
                      <span className="text-[10px] text-white/70 font-medium">yourbusiness.com</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-1" />
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <TrendingUp size={10} className="text-emerald-400" />
                    <span className="text-[10px] font-bold text-white/70">+42% faster</span>
                  </div>
                </div>

                {/* CMS metric bars */}
                <div className="px-5 sm:px-7 py-5 sm:py-6" style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: '#eff6ff' }}>
                        <Monitor size={14} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-[12px] font-bold text-slate-800">CMS Dashboard</p>
                        <p className="text-[10px] text-slate-400">Live Analytics</p>
                      </div>
                    </div>
                    <span className="text-[28px] font-black leading-none"
                      style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      98<span className="text-[14px] text-slate-300">/100</span>
                    </span>
                  </div>
                  <div className="space-y-3.5">
                    {cmsModules.map(({ label, val, pct, color }) => (
                      <div key={label}>
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-[11.5px] text-slate-500 font-medium">{label}</span>
                          <span className="text-[11.5px] font-bold" style={{ color }}>{val}</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-100">
                          <div style={{ height: '100%', width: `${pct}%`, borderRadius: 4, background: `linear-gradient(90deg,${color}60,${color})`, animation: 'bar-in 1s cubic-bezier(0,0,0.2,1) both' }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech stack */}
                <div className="px-5 sm:px-7 py-4" style={{ background: '#f8fbff' }}>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2.5">Technology Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map(({ label, color, icon: Icon }) => (
                      <div key={label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-100"
                        style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                        <Icon size={10} style={{ color }} />
                        <span className="text-[10.5px] font-semibold text-slate-600">{label}</span>
                      </div>
                    ))}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                      style={{ background: '#eff6ff', border: '1px solid #bfdbfe' }}>
                      <CheckCircle2 size={10} className="text-blue-600" />
                      <span className="text-[10.5px] font-bold text-blue-700">200+ Sites</span>
                    </div>
                  </div>
                </div>

                {/* Bottom strip */}
                <div className="flex flex-wrap items-center justify-between gap-2 px-5 sm:px-7 py-3"
                  style={{ background: 'linear-gradient(90deg,#0f172a,#1d4ed8,#0ea5e9)' }}>
                  <div className="flex items-center gap-2">
                    <Layers size={11} className="text-white/70" />
                    <span className="text-[10px] font-bold text-white/80">CMS Powered</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Real-Time', 'Mobile-First', 'SEO Ready'].map(tag => (
                      <span key={tag} className="text-[9px] font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.90)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
