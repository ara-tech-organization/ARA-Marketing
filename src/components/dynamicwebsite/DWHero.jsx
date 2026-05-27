import {
  Zap, ChevronRight, ArrowRight, ArrowUpRight,
  Globe, Database, RefreshCw, CheckCircle2,
  TrendingUp, Code2, Star, Monitor, Layers,
} from 'lucide-react'

const gradBlue = {
  background: 'linear-gradient(135deg,#2563eb,#0891b2)',
  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
}

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

export default function DWHero() {
  return (
    <section
      className="relative overflow-hidden pt-[72px] min-h-screen flex items-center"
      style={{ background: 'linear-gradient(135deg, #020b18 0%, #071428 45%, #040e1f 100%)' }}
    >
      {/* dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.16) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
      {/* noise */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
      {/* orbs */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] md:w-[700px] md:h-[700px] rounded-full pointer-events-none animate-orb"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.32) 0%, transparent 65%)' }} />
      <div className="absolute -bottom-32 -right-32 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none animate-orb-rev"
        style={{ background: 'radial-gradient(circle, rgba(8,145,178,0.22) 0%, transparent 65%)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(29,78,216,0.12) 0%, transparent 65%)' }} />
      {/* rings */}
      <div className="hidden md:block absolute top-20 right-[8%] w-48 h-48 rounded-full border border-blue-500/12 pointer-events-none animate-[spin_40s_linear_infinite]" />
      <div className="hidden md:block absolute top-28 right-[10%] w-24 h-24 rounded-full border border-sky-400/08 pointer-events-none" />
      <div className="hidden md:block absolute bottom-20 left-[5%] w-32 h-32 rounded-full border border-blue-500/10 pointer-events-none animate-[spin_30s_linear_infinite_reverse]" />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-7 py-12 sm:py-16 lg:py-20 w-full">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

          {/* ── Left: content ── */}
          <div className="flex-1 min-w-0 animate-hero-enter text-center lg:text-left">

            {/* Breadcrumb */}
            <nav className="hidden sm:flex items-center justify-center lg:justify-start gap-1.5 text-[12px] mb-6"
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
            <h1 className="text-[clamp(26px,5vw,58px)] font-bold leading-[1.08] tracking-tight mb-5 sm:mb-6" style={{ color: '#ffffff' }}>
              Build Powerful Dynamic Websites{' '}
              <span style={{ background: 'linear-gradient(135deg,#93c5fd,#38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                That Grow With Your Business
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-[13px] sm:text-[15px] font-medium tracking-wide mb-4 sm:mb-5"
              style={{ color: 'rgba(255,255,255,0.50)' }}>
              Scalable &middot; Interactive &middot; High-Performing &middot; CMS-Powered
            </p>

            <p className="text-[13.5px] sm:text-[14.5px] leading-[1.85] mb-3 max-w-[560px] mx-auto lg:mx-0"
              style={{ color: 'rgba(255,255,255,0.55)' }}>
              Are you searching for a dynamic website development company in Thanjavur for your business that builds scalable, interactive, and high-performing websites? We design and develop web solutions for easy content management for businesses.
            </p>
            <p className="hidden sm:block text-[13px] leading-[1.8] mb-8 sm:mb-10 max-w-[560px] mx-auto lg:mx-0"
              style={{ color: 'rgba(255,255,255,0.35)' }}>
              Get powerful digital platforms that change, develop, and expand with your business needs.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 sm:mb-12">
              <a href="#dw-cta"
                className="btn-glow inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#1d4ed8,#0891b2)', boxShadow: '0 8px 28px rgba(37,99,235,0.35)' }}>
                Request a Free Consultation <ArrowRight size={14} />
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
              {[
                ['200+', 'Websites Delivered'],
                ['98%',  'Client Satisfaction'],
                ['5x',   'Faster Content Updates'],
              ].map(([num, label]) => (
                <div key={label} className="flex flex-col items-center lg:items-start">
                  <span className="text-[26px] sm:text-[30px] font-black leading-tight"
                    style={{ background: 'linear-gradient(135deg,#93c5fd,#38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {num}
                  </span>
                  <span className="text-[11px] sm:text-[12px] mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: CMS Dashboard card ── */}
          <div className="hidden md:block lg:w-[460px] flex-shrink-0 w-full max-w-[460px] reveal-right">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.30) 0%, transparent 70%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-white/10"
                style={{ background: 'white', boxShadow: '0 40px 100px rgba(0,0,0,0.60), 0 0 0 1px rgba(255,255,255,0.05)' }}>
                {/* Accent bar */}
                <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg,#1d4ed8,#2563eb,#38bdf8)' }} />
                {/* Header */}
                <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#eff6ff' }}>
                      <Monitor size={15} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-slate-800">CMS Performance Dashboard</p>
                      <p className="text-[10px] text-slate-400">Live Website Analytics</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot" />
                    LIVE
                  </span>
                </div>
                {/* Score */}
                <div className="px-4 sm:px-6 py-5 border-b border-slate-100">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Website Performance Score</span>
                    <TrendingUp size={12} className="text-emerald-500" />
                  </div>
                  <p className="text-[36px] sm:text-[42px] font-black leading-none tracking-tight mb-1"
                    style={{ background: 'linear-gradient(135deg,#1d4ed8,#0891b2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    98/100
                  </p>
                  <p className="text-[11px] text-emerald-600 font-semibold">+42% faster load than static websites</p>
                </div>
                {/* Metric rows */}
                <div className="px-4 sm:px-6 py-5 space-y-4">
                  {cmsModules.map(({ label, val, pct, color }) => (
                    <div key={label}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[12px] text-slate-500 font-medium">{label}</span>
                        <span className="text-[12px] font-bold" style={{ color }}>{val}</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-100">
                        <div style={{ height: '100%', width: `${pct}%`, borderRadius: 4, background: `linear-gradient(90deg,${color}70,${color})`, animation: 'bar-in 1s cubic-bezier(0,0,0.2,1) both' }} />
                      </div>
                    </div>
                  ))}
                </div>
                {/* Tech stack */}
                <div className="px-4 sm:px-6 py-5 border-t border-slate-100" style={{ background: '#f8fbff' }}>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Technology Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map(({ label, color, icon: Icon }) => (
                      <div key={label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-100">
                        <Icon size={11} style={{ color }} />
                        <span className="text-[11px] font-semibold text-slate-600">{label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 mt-3 px-3 py-2 rounded-xl"
                    style={{ background: '#eff6ff', border: '1px solid #bfdbfe' }}>
                    <CheckCircle2 size={11} className="text-blue-600" />
                    <span className="text-[11px] font-bold text-blue-700">200+ Dynamic Websites Delivered</span>
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <div className="hidden lg:flex absolute -top-4 -right-4 items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-blue-100 animate-float"
                style={{ boxShadow: '0 12px 36px rgba(37,99,235,0.18)' }}>
                <Star size={13} className="text-blue-600" />
                <span className="text-[11px] font-bold text-slate-700">Premium Web Solutions</span>
              </div>
              <div className="hidden lg:flex absolute -bottom-4 -left-4 items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-sky-100 animate-float"
                style={{ boxShadow: '0 12px 36px rgba(37,99,235,0.15)', animationDelay: '1.5s' }}>
                <Layers size={13} className="text-blue-600" />
                <span className="text-[11px] font-bold text-slate-700">Dynamic CMS Powered</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
