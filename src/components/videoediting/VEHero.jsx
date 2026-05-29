import {
  Film, ChevronRight, ArrowRight, ArrowUpRight,
  Sparkles, TrendingUp, PlayCircle, Eye, CheckCircle2,
  Video, Scissors, Star,
} from 'lucide-react'

const platformRows = [
  { label: 'YouTube Channel',   views: '2.8M', growth: '+34%', pct: 88, color: '#38bdf8' },
  { label: 'Instagram Reels',   views: '1.9M', growth: '+47%', pct: 74, color: '#60a5fa' },
  { label: 'Corporate Films',   views: '980K', growth: '+28%', pct: 62, color: '#93c5fd' },
]

const types = [
  { label: 'Branding',  color: '#60a5fa', icon: Sparkles },
  { label: 'Corporate', color: '#38bdf8', icon: Video },
  { label: 'YouTube',   color: '#93c5fd', icon: PlayCircle },
  { label: 'Drone',     color: '#34d399', icon: Film },
]

const gradBlue = {
  background: 'linear-gradient(135deg,#93c5fd,#38bdf8)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

export default function VEHero() {
  return (
    <section
      className="relative overflow-hidden pt-[72px] min-h-screen flex items-center"
      style={{ background: 'linear-gradient(135deg, #020b18 0%, #071428 45%, #040e1f 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.14) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] md:w-[700px] md:h-[700px] rounded-full pointer-events-none animate-orb"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.30) 0%, transparent 65%)' }} />
      <div className="absolute -bottom-32 -right-32 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none animate-orb-rev"
        style={{ background: 'radial-gradient(circle, rgba(14,116,144,0.22) 0%, transparent 65%)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(29,78,216,0.10) 0%, transparent 65%)' }} />
      <div className="hidden md:block absolute top-20 right-[8%] w-48 h-48 rounded-full border border-blue-500/12 pointer-events-none animate-[spin_40s_linear_infinite]" />
      <div className="hidden md:block absolute top-28 right-[10%] w-24 h-24 rounded-full border border-blue-400/08 pointer-events-none" />
      <div className="hidden md:block absolute bottom-20 left-[5%] w-32 h-32 rounded-full border border-sky-500/10 pointer-events-none animate-[spin_30s_linear_infinite_reverse]" />
      <div className="absolute top-[38%] left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(37,99,235,0.22) 30%, rgba(56,189,248,0.30) 50%, rgba(37,99,235,0.18) 70%, transparent 100%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-7 py-12 sm:py-16 lg:py-20 w-full">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

          {/* ── Left: content ── */}
          <div className="flex-1 min-w-0 animate-hero-enter text-center lg:text-left">

            {/* Breadcrumb */}
            <nav className="hidden sm:flex items-center justify-center lg:justify-start gap-1.5 text-[12px] mb-6" style={{ color: 'rgba(255,255,255,0.35)' }}>
              <a href="/ARA-Marketing/" className="transition-colors hover:text-sky-300">Home</a>
              <ChevronRight size={12} style={{ color: 'rgba(255,255,255,0.20)' }} />
              <span>Services</span>
              <ChevronRight size={12} style={{ color: 'rgba(255,255,255,0.20)' }} />
              <span style={{ color: '#60a5fa' }} className="font-semibold">Video Editing</span>
            </nav>

            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-6 sm:mb-8"
              style={{
                background: 'rgba(37,99,235,0.18)',
                border: '1px solid rgba(96,165,250,0.30)',
                color: '#93c5fd',
                backdropFilter: 'blur(8px)',
              }}>
              <Scissors size={10} /> Professional Video Editing Services
            </span>

            {/* H1 */}
            <h1 className="text-[clamp(28px,5vw,60px)] font-bold leading-[1.08] tracking-tight mb-5 sm:mb-6" style={{ color: '#ffffff' }}>
              Best Video Editing Services{' '}
              <span style={gradBlue}>in Thanjavur for Brand Growth</span>
            </h1>

            {/* Tagline */}
            <p className="text-[13px] sm:text-[15px] font-medium tracking-wide mb-4 sm:mb-5" style={{ color: 'rgba(255,255,255,0.50)' }}>
              Cinematic Storytelling &middot; Brand-Focused Editing &middot; Platform-Optimized Delivery
            </p>

            <p className="text-[13.5px] sm:text-[14.5px] leading-[1.85] mb-3 max-w-[560px] mx-auto lg:mx-0" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Ara Discover Marketing is a professional corporate video editing service in Thanjavur that turns raw footage into powerful, engaging, and conversion-focused visual content.
            </p>
            <p className="hidden sm:block text-[13px] sm:text-[13.5px] leading-[1.8] mb-8 sm:mb-10 max-w-[560px] mx-auto lg:mx-0" style={{ color: 'rgba(255,255,255,0.35)' }}>
              We offer professional video editing in Thanjavur for businesses, brands, and creators seeking engaging visuals and compelling stories for their digital presence.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 sm:mb-12">
              <a href="/ARA-Marketing/contact"
                className="btn-glow inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#1d4ed8,#0369a1)', boxShadow: '0 8px 32px rgba(29,78,216,0.45)' }}>
                Start Your Project <ArrowRight size={14} />
              </a>
              <a href="#ve-services"
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
            <div className="flex justify-center lg:justify-start flex-wrap gap-6 sm:gap-8 pt-6 sm:pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              {[
                ['500+', 'Videos Delivered'],
                ['98%',  'Client Satisfaction'],
                ['5M+',  'Total Views'],
              ].map(([num, label]) => (
                <div key={label} className="flex flex-col items-center lg:items-start">
                  <span className="text-[26px] sm:text-[30px] font-black leading-tight" style={gradBlue}>{num}</span>
                  <span className="text-[11px] sm:text-[12px] mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: analytics card – hidden on xs, shown md+ ── */}
          <div className="hidden md:block lg:w-[460px] flex-shrink-0 w-full max-w-[460px] reveal-right">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(29,78,216,0.28) 0%, transparent 70%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-white/10"
                style={{ background: 'white', boxShadow: '0 40px 100px rgba(0,0,0,0.60), 0 0 0 1px rgba(255,255,255,0.05)' }}>
                <div className="h-1.5 w-full"
                  style={{ background: 'linear-gradient(90deg,#1d4ed8,#0284c7,#38bdf8)' }} />
                <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#eff6ff' }}>
                      <Film size={15} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-slate-800">Video Studio Analytics</p>
                      <p className="text-[10px] text-slate-400">Real-Time Project Tracker</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot" />
                    LIVE
                  </span>
                </div>
                <div className="px-4 sm:px-6 py-5 border-b border-slate-100">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Total Views Generated</span>
                    <TrendingUp size={12} className="text-emerald-500" />
                  </div>
                  <p className="text-[36px] sm:text-[42px] font-black leading-none tracking-tight mb-1"
                    style={{ background: 'linear-gradient(135deg,#1d4ed8,#0284c7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    5M+
                  </p>
                  <p className="text-[11px] text-emerald-600 font-semibold">+38% engagement growth this quarter</p>
                </div>
                <div className="px-4 sm:px-6 py-5 space-y-4">
                  {platformRows.map(({ label, views, growth, pct, color }) => (
                    <div key={label}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[12px] text-slate-500 font-medium">{label}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-semibold text-emerald-600">{growth}</span>
                          <span className="text-[12px] font-bold" style={{ color }}>{views}</span>
                        </div>
                      </div>
                      <div className="h-2 rounded-full bg-slate-100">
                        <div style={{ height: '100%', width: `${pct}%`, borderRadius: 4, background: `linear-gradient(90deg,${color}70,${color})`, animation: 'bar-in 1s cubic-bezier(0,0,0.2,1) both' }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-4 sm:px-6 py-5 border-t border-slate-100" style={{ background: '#fafafe' }}>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Active Video Services</p>
                  <div className="flex flex-wrap gap-2">
                    {types.map(({ label, color, icon: Icon }) => (
                      <div key={label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-100">
                        <Icon size={11} style={{ color }} />
                        <span className="text-[11px] font-semibold text-slate-600">{label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 mt-3 px-3 py-2 rounded-xl"
                    style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                    <CheckCircle2 size={11} className="text-emerald-500" />
                    <span className="text-[11px] font-bold text-emerald-700">500+ Projects Delivered</span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex absolute -top-4 -right-4 items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-blue-200 shadow-2xl animate-float"
                style={{ boxShadow: '0 12px 36px rgba(0,0,0,0.40)' }}>
                <Star size={13} className="text-blue-600" />
                <span className="text-[11px] font-bold text-slate-700">Premium Video Studio</span>
              </div>
              <div className="hidden lg:flex absolute -bottom-4 -left-4 items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-sky-100 shadow-2xl animate-float-delay"
                style={{ boxShadow: '0 12px 36px rgba(0,0,0,0.35)' }}>
                <Eye size={13} className="text-blue-600" />
                <span className="text-[11px] font-bold text-slate-700">5M+ Views Generated</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
