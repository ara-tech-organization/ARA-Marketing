import {
  Zap, ArrowRight, ArrowUpRight, ChevronRight,
  Globe, Database, RefreshCw, Code2,
  TrendingUp, Monitor, Layers, CheckCircle2, Star,
} from 'lucide-react'

const cmsModules = [
  { label: 'Pages Published',  val: '48',   pct: 80, color: '#2563eb' },
  { label: 'Content Updates',  val: '312',  pct: 72, color: '#0891b2' },
  { label: 'Active Sessions',  val: '2.1K', pct: 65, color: '#38bdf8' },
]

const techStack = [
  { label: 'React',     color: '#2563eb', icon: Code2 },
  { label: 'Node.js',   color: '#0891b2', icon: Database },
  { label: 'WordPress', color: '#38bdf8', icon: Globe },
  { label: 'REST API',  color: '#60a5fa', icon: RefreshCw },
]

const highlights = [
  { val: '200+', label: 'Websites Delivered' },
  { val: '98%',  label: 'Client Satisfaction' },
  { val: '5x',   label: 'Faster Content Updates' },
  { val: '100%', label: 'On-Time Delivery' },
]

export default function DWHero() {
  return (
    <section
      className="relative overflow-hidden pt-[72px]"
      style={{ background: 'linear-gradient(135deg, #020b18 0%, #071428 45%, #040e1f 100%)' }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.16) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
      {/* Noise */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
      {/* Orbs */}
      <div className="hidden sm:block absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none animate-orb"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.28) 0%, transparent 65%)' }} />
      <div className="hidden sm:block absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none animate-orb-rev"
        style={{ background: 'radial-gradient(circle, rgba(8,145,178,0.20) 0%, transparent 65%)' }} />
      <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(29,78,216,0.10) 0%, transparent 65%)' }} />
      {/* Rings */}
      <div className="hidden md:block absolute top-16 left-[4%] w-48 h-48 rounded-full border border-blue-500/10 pointer-events-none animate-[spin_40s_linear_infinite]" />
      <div className="hidden md:block absolute top-16 right-[4%] w-32 h-32 rounded-full border border-sky-400/08 pointer-events-none animate-[spin_28s_linear_infinite_reverse]" />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-7 py-14 sm:py-18 lg:py-20 w-full">

        {/* ── Center: Text block ── */}
        <div className="text-center animate-hero-enter max-w-[800px] mx-auto mb-12 sm:mb-16">

          {/* Breadcrumb */}
          <nav className="hidden sm:flex items-center justify-center gap-1.5 text-[12px] mb-6"
            style={{ color: 'rgba(255,255,255,0.35)' }}>
            <a href="/ARA-Marketing/" className="transition-colors hover:text-sky-300">Home</a>
            <ChevronRight size={12} style={{ color: 'rgba(255,255,255,0.20)' }} />
            <span>Services</span>
            <ChevronRight size={12} style={{ color: 'rgba(255,255,255,0.20)' }} />
            <span>Web Design</span>
            <ChevronRight size={12} style={{ color: 'rgba(255,255,255,0.20)' }} />
            <span style={{ color: '#60a5fa' }} className="font-semibold">Dynamic Website</span>
          </nav>

          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-6 sm:mb-8"
            style={{
              background: 'rgba(37,99,235,0.18)',
              border: '1px solid rgba(96,165,250,0.30)',
              color: '#93c5fd',
              backdropFilter: 'blur(8px)',
            }}>
            <Zap size={10} /> Dynamic Website Development Service
          </span>

          {/* H1 */}
          <h1 className="text-[clamp(28px,5.5vw,64px)] font-bold leading-[1.06] tracking-tight mb-5 sm:mb-6" style={{ color: '#ffffff' }}>
            Build Powerful Dynamic Websites{' '}
            <span style={{ background: 'linear-gradient(135deg,#93c5fd,#38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              That Grow With Your Business
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-[13px] sm:text-[15px] font-medium tracking-wide mb-5"
            style={{ color: 'rgba(255,255,255,0.45)' }}>
            Scalable &middot; Interactive &middot; High-Performing &middot; CMS-Powered
          </p>

          <p className="text-[13.5px] sm:text-[15px] leading-[1.85] mb-8 max-w-[640px] mx-auto"
            style={{ color: 'rgba(255,255,255,0.50)' }}>
            Are you searching for a dynamic website development company in Thanjavur for your business that builds scalable, interactive, and high-performing websites? We design and develop web solutions for easy content management for businesses.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 sm:mb-12">
            <a href="#dw-cta"
              className="btn-glow inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg,#1d4ed8,#0891b2)', boxShadow: '0 8px 28px rgba(37,99,235,0.35)' }}>
              Request a Free Consultation <ArrowRight size={14} />
            </a>
            <a href="#dw-intro"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{
                color: 'rgba(255,255,255,0.80)',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(8px)',
              }}>
              Explore Services <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-10 pt-8"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            {highlights.map(({ val, label }) => (
              <div key={label} className="flex flex-col items-center">
                <span className="text-[20px] sm:text-[26px] font-black leading-tight"
                  style={{ background: 'linear-gradient(135deg,#93c5fd,#38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {val}
                </span>
                <span className="text-[10px] sm:text-[12px] mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom: Wide dashboard card ── */}
        <div className="reveal-right">
          <div className="relative">
            <div className="absolute -inset-2 rounded-[2rem] pointer-events-none"
              style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.22) 0%, transparent 70%)' }} />

            <div className="relative rounded-3xl overflow-hidden border border-white/10"
              style={{ background: 'white', boxShadow: '0 40px 100px rgba(0,0,0,0.55)' }}>

              {/* Dark header bar */}
              <div className="flex items-center justify-between px-3 sm:px-5 lg:px-7 py-3 sm:py-4 gap-2 flex-wrap"
                style={{ background: 'linear-gradient(135deg,#0f172a 0%,#1e3a8a 60%,#1d4ed8 100%)' }}>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="flex items-center gap-2 px-2 sm:px-3 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.10)' }}>
                    <Globe size={9} className="text-white/60" />
                    <span className="text-[10px] text-white/70 font-medium hidden xs:inline sm:inline">yourbusiness.com</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-1" />
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.10)' }}>
                    <TrendingUp size={10} className="text-emerald-400" />
                    <span className="text-[10px] font-bold text-white/80">+42% faster</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                    <span className="text-[10px] font-bold text-white/60">LIVE</span>
                  </div>
                </div>
              </div>

              {/* Main body */}
              <div className="flex flex-col lg:flex-row">

                {/* Left: website screenshot */}
                <div className="lg:w-[42%] flex-shrink-0 relative overflow-hidden" style={{ minHeight: 220 }}>
                  <img
                    src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop&auto=format&q=80"
                    alt="Dynamic website development company in Thanjavur"
                    loading="lazy"
                    className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[1.5s]"
                    style={{ minHeight: 220 }}
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,rgba(29,78,216,0.18) 0%,transparent 60%)' }} />
                  {/* Score overlays */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {[
                      { lbl: 'Performance', val: '98', bg: 'rgba(37,99,235,0.90)' },
                      { lbl: 'SEO Score',   val: '95', bg: 'rgba(16,185,129,0.90)' },
                    ].map(({ lbl, val, bg }) => (
                      <div key={lbl} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                        style={{ background: bg, backdropFilter: 'blur(6px)' }}>
                        <span className="text-[12px] font-black text-white">{val}</span>
                        <span className="text-[9px] font-semibold text-white/80">{lbl}</span>
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 px-3 py-2.5 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(10px)' }}>
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-0.5">CMS Powered</p>
                    <p className="text-[11px] font-bold text-slate-800 leading-snug">Real-time content updates, scalable & interactive</p>
                  </div>
                </div>

                {/* Right: metrics + tech */}
                <div className="flex-1 flex flex-col">

                  {/* CMS metric bars */}
                  <div className="flex-1 px-6 sm:px-8 py-6 sm:py-7" style={{ borderBottom: '1px solid #f1f5f9' }}>
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
                        style={{ background: 'linear-gradient(135deg,#1d4ed8,#0891b2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
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

                  {/* Tech stack row */}
                  <div className="px-6 sm:px-8 py-4" style={{ background: '#f8fbff' }}>
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

                </div>
              </div>

              {/* Bottom feature strip */}
              <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5"
                style={{ background: 'linear-gradient(90deg,#1e3a8a,#1d4ed8,#0891b2)' }}>
                <div className="flex items-center gap-2">
                  <Layers size={12} className="text-white/70" />
                  <span className="text-[11px] font-bold text-white/80">Dynamic CMS Powered</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['CMS Integration', 'Real-Time Updates', 'Mobile-First', 'SEO Optimized'].map(tag => (
                    <span key={tag} className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.90)', border: '1px solid rgba(255,255,255,0.20)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
