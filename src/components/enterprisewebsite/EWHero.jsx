import {
  Building2, ChevronRight, ArrowRight, ArrowUpRight,
  Shield, Server, Activity, Globe, Cpu, TrendingUp,
  CheckCircle2, Zap, Lock, Users,
} from 'lucide-react'

const stats = [
  { val: '500+', label: 'Enterprise Projects' },
  { val: '99.9%', label: 'Uptime Guaranteed' },
  { val: '10x',  label: 'Faster Scalability' },
  { val: '100%', label: 'Secure & Compliant' },
]

const serverRows = [
  { label: 'API Gateway',     status: 'Healthy',  load: 78,  color: '#2563eb' },
  { label: 'Auth Service',    status: 'Secured',  load: 92,  color: '#0891b2' },
  { label: 'Data Pipeline',   status: 'Running',  load: 65,  color: '#38bdf8' },
  { label: 'CDN Nodes',       status: 'Active',   load: 85,  color: '#60a5fa' },
]

const securityBadges = ['SSL / TLS', 'GDPR Ready', 'ISO 27001', 'WAF Protected']

export default function EWHero() {
  return (
    <section
      className="relative overflow-hidden pt-[72px]"
      style={{ background: 'linear-gradient(150deg, #020b18 0%, #060f22 50%, #030c1c 100%)' }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.14) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      {/* Noise overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")' }} />

      {/* Orbs */}
      <div className="hidden lg:block absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full pointer-events-none animate-orb"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 65%)' }} />
      <div className="hidden lg:block absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full pointer-events-none animate-orb-rev"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 65%)' }} />

      {/* Spinning rings */}
      <div className="hidden md:block absolute top-20 left-[3%] w-40 h-40 rounded-full border border-blue-500/10 pointer-events-none animate-[spin_50s_linear_infinite]" />
      <div className="hidden md:block absolute bottom-24 left-[8%] w-24 h-24 rounded-full border border-purple-500/08 pointer-events-none animate-[spin_30s_linear_infinite_reverse]" />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-14 sm:py-16 lg:py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

          {/* ── LEFT: Text ── */}
          <div className="flex-1 lg:max-w-[52%] animate-hero-enter">

            {/* Breadcrumb */}
            <nav className="hidden sm:flex items-center gap-1.5 text-[11.5px] mb-6"
              style={{ color: 'rgba(255,255,255,0.32)' }}>
              <a href="/ARA-Marketing/" className="hover:text-sky-300 transition-colors">Home</a>
              <ChevronRight size={11} style={{ color: 'rgba(255,255,255,0.18)' }} />
              <a href="/ARA-Marketing/services/website-development" className="hover:text-sky-300 transition-colors">Web Design</a>
              <ChevronRight size={11} style={{ color: 'rgba(255,255,255,0.18)' }} />
              <span className="text-sky-300 font-medium">Enterprise Website</span>
            </nav>

            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-6"
              style={{
                background: 'rgba(124,58,237,0.16)',
                border: '1px solid rgba(167,139,250,0.28)',
                color: '#c4b5fd',
                backdropFilter: 'blur(8px)',
              }}>
              <Building2 size={10} /> Enterprise Website Development
            </span>

            {/* H1 */}
            <h1 className="leading-[1.15] tracking-tight mb-5 text-white"
              style={{ fontWeight: 700, fontSize: 'min(4.5vw, 32px)' }}>
              <span style={{ display: 'block' }}>Transform Your Enterprise</span>
              <span style={{ display: 'block', background: 'linear-gradient(135deg,#a78bfa,#60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Digital Presence
              </span>
            </h1>

            <p className="text-[13px] sm:text-[14.5px] leading-[1.90] mb-8 max-w-[540px]"
              style={{ color: 'rgba(255,255,255,0.48)' }}>
              ARA Discover Marketing is a trusted enterprise website development company in Thanjavur that creates AI-driven enterprise websites to boost your digital presence and simplify complex business operations.
            </p>

            {/* Feature chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { icon: Shield, label: 'Enterprise Security' },
                { icon: Zap,    label: 'AI-Powered' },
                { icon: Globe,  label: 'Global Scale' },
                { icon: Lock,   label: 'GDPR Compliant' },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-semibold"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'rgba(255,255,255,0.72)',
                    backdropFilter: 'blur(6px)',
                  }}>
                  <Icon size={10} style={{ color: '#60a5fa' }} /> {label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-8 sm:mb-10">
              <a href="/ARA-Marketing/contact-us"
                className="btn-glow inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-[13px] sm:text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ boxShadow: '0 8px 28px rgba(124,58,237,0.35)' }}>
                Start Your Project <ArrowRight size={13} />
              </a>
              <a href="#ew-intro"
                className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-[13px] sm:text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  color: 'rgba(255,255,255,0.78)',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  backdropFilter: 'blur(8px)',
                }}>
                Explore Services <ArrowUpRight size={13} />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-10 pt-6 sm:pt-8"
              style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              {stats.map(({ val, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-[20px] sm:text-[28px] font-bold leading-tight"
                    style={{ background: 'linear-gradient(135deg,#a78bfa,#38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {val}
                  </span>
                  <span className="text-[10.5px] mt-0.5" style={{ color: 'rgba(255,255,255,0.32)' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Enterprise Command Center Card ── */}
          <div className="w-full lg:flex-1 animate-hero-visual">
            <div className="relative">
              {/* Glow halo */}
              <div className="absolute -inset-4 rounded-[2.5rem] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.20) 0%, rgba(37,99,235,0.12) 40%, transparent 70%)' }} />

              <div className="relative rounded-3xl overflow-hidden border"
                style={{ border: '1px solid rgba(255,255,255,0.10)', boxShadow: '0 40px 90px rgba(0,0,0,0.60)', background: '#0d2244' }}>

                {/* Card header */}
                <div className="flex items-center justify-between px-4 sm:px-5 py-3.5"
                  style={{ background: 'linear-gradient(90deg,#0d1f40,#1a1246)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                    </div>
                    <div className="flex items-center gap-2 px-2.5 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                      <Activity size={9} className="text-emerald-400" />
                      <span className="text-[10px] font-semibold" style={{ color: 'rgba(255,255,255,0.60)' }}>Enterprise Command Center</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                    <span className="text-[10px] font-bold" style={{ color: 'rgba(255,255,255,0.50)' }}>LIVE</span>
                  </div>
                </div>

                {/* Top metrics row */}
                <div className="grid grid-cols-3 gap-px" style={{ background: 'rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  {[
                    { icon: Server,    label: 'Servers',      val: '48',    color: '#60a5fa' },
                    { icon: Users,     label: 'Active Users',  val: '12.4K', color: '#a78bfa' },
                    { icon: TrendingUp,label: 'Uptime',        val: '99.9%', color: '#34d399' },
                  ].map(({ icon: Icon, label, val, color }) => (
                    <div key={label} className="px-2 sm:px-4 py-3 sm:py-4" style={{ background: '#0d2244' }}>
                      <div className="flex items-center gap-1 sm:gap-1.5 mb-1 sm:mb-1.5">
                        <Icon size={10} style={{ color }} />
                        <span className="text-[9px] sm:text-[10px] font-semibold hidden xs:inline sm:inline" style={{ color: 'rgba(255,255,255,0.38)' }}>{label}</span>
                      </div>
                      <p className="text-[14px] sm:text-[18px] font-bold" style={{ color }}>{val}</p>
                    </div>
                  ))}
                </div>

                {/* Server rows */}
                <div className="px-3 sm:px-5 pt-4 sm:pt-5 pb-3">
                  <p className="text-[9px] font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.28)' }}>Infrastructure Health</p>
                  <div className="space-y-2.5 sm:space-y-3">
                    {serverRows.map(({ label, status, load, color }) => (
                      <div key={label} className="flex items-center gap-2 sm:gap-3">
                        <span className="text-[10px] sm:text-[11.5px] font-semibold w-[80px] sm:w-[110px] flex-shrink-0 truncate" style={{ color: 'rgba(255,255,255,0.65)' }}>{label}</span>
                        <div className="flex-1 h-1.5 sm:h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                          <div style={{ width: `${load}%`, height: '100%', borderRadius: 4, background: `linear-gradient(90deg,${color}60,${color})`, animation: 'bar-in 1.2s cubic-bezier(0,0,0.2,1) both' }} />
                        </div>
                        <span className="text-[9px] sm:text-[10px] font-bold w-10 sm:w-14 text-right flex-shrink-0" style={{ color }}>{load}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enterprise image */}
                <div className="mx-4 sm:mx-5 mt-3 mb-4 rounded-2xl overflow-hidden relative" style={{ height: 140 }}>
                  <img
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=700&h=300&fit=crop&auto=format&q=80"
                    alt="Enterprise website development company in Thanjavur"
                    loading="eager"
                    className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[1.5s]"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,rgba(29,78,216,0.45) 0%,rgba(124,58,237,0.25) 100%)' }} />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div className="px-2.5 py-1.5 rounded-lg" style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)' }}>
                      <p className="text-[9px] font-black uppercase tracking-wider text-blue-700">AI-Powered Enterprise</p>
                      <p className="text-[10px] font-bold text-slate-800 leading-tight">Scalable · Secure · High-Performance</p>
                    </div>
                    <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg" style={{ background: 'rgba(52,211,153,0.18)', border: '1px solid rgba(52,211,153,0.35)' }}>
                      <CheckCircle2 size={10} style={{ color: '#34d399' }} />
                      <span className="text-[10px] font-bold text-emerald-300">Compliant</span>
                    </div>
                  </div>
                </div>

                {/* Security badges strip */}
                <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-5 py-3"
                  style={{ background: 'linear-gradient(90deg,#1e1246,#1d4ed8,#0891b2)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="flex items-center gap-2">
                    <Cpu size={11} className="text-white/60" />
                    <span className="text-[10.5px] font-bold text-white/75">Enterprise Grade</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {securityBadges.map(b => (
                      <span key={b} className="text-[9.5px] font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: 'rgba(255,255,255,0.14)', color: 'rgba(255,255,255,0.85)', border: '1px solid rgba(255,255,255,0.18)' }}>
                        {b}
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
