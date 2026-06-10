import { Code2, Cpu, Shield, ArrowRight, ArrowUpRight, ChevronRight, Globe, Smartphone, Zap, Star, Users, TrendingUp, ShoppingBag, BarChart3, Activity } from 'lucide-react'

const quickWins = [
  { icon: Cpu,        text: 'AI-Powered Solutions' },
  { icon: Shield,     text: 'Enterprise Security' },
  { icon: Smartphone, text: 'Mobile Integration' },
  { icon: Zap,        text: 'Scalable Architecture' },
]

const stats = [
  { value: '200+', label: 'Apps Delivered' },
  { value: '98%',  label: 'Client Satisfaction' },
  { value: '5★',   label: 'Average Rating' },
]

const kpis = [
  { label: 'Total Users',  val: '12,450', change: '+18%', up: true,  color: '#3b82f6' },
  { label: 'Revenue',      val: '₹2.1M',  change: '+24%', up: true,  color: '#0891b2' },
  { label: 'Orders',       val: '843',    change: '+12%', up: true,  color: '#6366f1' },
  { label: 'Uptime',       val: '99.9%',  change: 'Stable', up: true, color: '#10b981' },
]

const chartBars = [35, 55, 42, 70, 52, 85, 63, 78, 58, 90, 74, 95]

const sidebarItems = [
  { icon: BarChart3,  label: 'Dashboard', active: true },
  { icon: Users,      label: 'Customers', active: false },
  { icon: ShoppingBag,label: 'Orders',   active: false },
  { icon: TrendingUp, label: 'Analytics', active: false },
  { icon: Activity,   label: 'Reports',  active: false },
]

const tableRows = [
  { name: 'Priya Sharma',     type: 'Web App Order',   amount: '₹45,000',  status: 'Completed', dot: '#10b981' },
  { name: 'Karthik Rajan',    type: 'Mobile App Dev',  amount: '₹72,000',  status: 'In Progress', dot: '#3b82f6' },
  { name: 'Meena Logistics',  type: 'eCommerce App',   amount: '₹1,20,000', status: 'Review',    dot: '#f59e0b' },
]

export default function WAHero() {
  return (
    <section
      className="relative overflow-hidden pt-[72px]"
      style={{ background: 'linear-gradient(160deg, #071a36 0%, #0d2244 60%, #071a36 100%)' }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-25"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.18) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.14) 0%, transparent 65%)' }} />
      {/* Side orbs */}
      <div className="absolute -top-20 -left-20 w-[380px] h-[380px] rounded-full pointer-events-none animate-orb"
        style={{ background: 'radial-gradient(circle, rgba(8,145,178,0.10) 0%, transparent 65%)' }} />
      <div className="absolute -bottom-20 -right-20 w-[320px] h-[320px] rounded-full pointer-events-none animate-orb-rev"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.09) 0%, transparent 65%)' }} />
      {/* Decorative rings */}
      <div className="hidden lg:block absolute top-28 left-[4%] w-28 h-28 rounded-full border border-blue-800/30 pointer-events-none animate-[spin_50s_linear_infinite]" />
      <div className="hidden lg:block absolute top-40 right-[5%] w-20 h-20 rounded-full border border-sky-800/25 pointer-events-none animate-[spin_35s_linear_infinite_reverse]" />

      <div className="relative max-w-[1200px] mx-auto px-3 sm:px-6 md:px-8 pt-10 sm:pt-14 lg:pt-18 pb-0 w-full">

        {/* ── Centered text block ── */}
        <div className="flex flex-col items-center text-center animate-hero-enter">

          {/* Breadcrumb */}
          <nav className="hidden sm:flex items-center gap-1.5 text-[11px] text-slate-500 mb-5">
            <a href="/ARA-Marketing/" className="hover:text-blue-400 transition-colors">Home</a>
            <ChevronRight size={11} className="text-slate-600" />
            <span>Services</span>
            <ChevronRight size={11} className="text-slate-600" />
            <span>Web Design</span>
            <ChevronRight size={11} className="text-slate-600" />
            Web Application
          </nav>

          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] xs:text-[11px] font-bold uppercase tracking-widest mb-5 sm:mb-6 text-blue-300"
            style={{ background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.35)' }}>
            <Code2 size={10} /> Web Application Development Service
          </span>

          {/* H1 */}
          <h1 className="text-[clamp(20px,3vw,40px)] font-bold leading-[1.06] tracking-tight mb-4 sm:mb-5 text-white max-w-[820px] px-1">
            Power Your Business with{' '}
            <span
              className="block"
              style={{ background: 'linear-gradient(135deg,#60a5fa 0%,#3b82f6 50%,#38bdf8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Advanced Web App Solutions
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-[11px] xs:text-[12px] sm:text-[13px] font-semibold tracking-[0.12em] uppercase mb-5 sm:mb-6 text-slate-400">
            AI-Powered &nbsp;&middot;&nbsp; Secure &nbsp;&middot;&nbsp; Scalable &nbsp;&middot;&nbsp; Results-Driven
          </p>

          {/* Description */}
          <p className="text-[13px] xs:text-[14px] sm:text-[15px] text-slate-400 leading-[1.85] mb-3 max-w-[600px] px-1">
            In the modern digital era, businesses need a strong online presence. ARA Discover Marketing is the best custom web application development company in Thanjavur, offering reliable AI-powered solutions customised as per your requirements.
          </p>
          <p className="hidden sm:block text-[13px] sm:text-[14px] text-slate-500 leading-[1.85] mb-7 sm:mb-8 max-w-[600px] px-1">
            We are one of the best <span className="text-slate-300">web and mobile app development companies in Thanjavur</span>, incorporating innovation with AI-driven technology to develop powerful, secure, and result-driven web applications. Whether you require an e-commerce app or an enterprise-level solution, ARA is here to help your business succeed.
          </p>
          <p className="sm:hidden text-[13px] text-slate-500 leading-[1.85] mb-7 max-w-[580px] px-1">
            We are one of the best web and mobile app development companies in Thanjavur, delivering powerful, secure, and result-driven web applications.
          </p>

          {/* Quick wins pills */}
          <div className="flex flex-wrap gap-2 xs:gap-2.5 justify-center mb-7 sm:mb-9">
            {quickWins.map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-1.5 px-3 xs:px-3.5 py-1.5 xs:py-2 rounded-full text-[10px] xs:text-[11px] font-semibold"
                style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.28)', color: '#93c5fd' }}
              >
                <Icon size={11} className="flex-shrink-0" />
                {text}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col xs:flex-row flex-wrap gap-3 justify-center mb-10 sm:mb-14 px-3 xs:px-0">
            <a
              href="/ARA-Marketing/contact-us"
              className="btn-glow inline-flex items-center justify-center gap-2 px-5 xs:px-7 py-3 xs:py-3.5 rounded-full text-[13px] xs:text-[13.5px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg,#1d4ed8,#0891b2)', boxShadow: '0 6px 24px rgba(37,99,235,0.35)' }}
            >
              Take a First Step <ArrowRight size={14} />
            </a>
            <a
              href="#wa-services"
              className="inline-flex items-center justify-center gap-2 px-5 xs:px-7 py-3 xs:py-3.5 rounded-full text-[13px] xs:text-[13.5px] font-semibold border border-blue-500/50 text-blue-300 transition-all duration-300 hover:bg-blue-900/30 hover:-translate-y-0.5"
            >
              Explore Services <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* ── Dashboard showcase ── */}
        <div className="relative max-w-[920px] mx-auto">

          {/* Floating left card */}
          <div className="hidden md:flex absolute -left-6 lg:-left-10 top-14 z-20 items-center gap-3 px-3.5 py-2.5 rounded-2xl animate-float"
            style={{ background: 'rgba(13,27,58,0.95)', border: '1px solid rgba(37,99,235,0.35)', backdropFilter: 'blur(12px)', boxShadow: '0 8px 30px rgba(37,99,235,0.2)' }}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg,#1d4ed8,#2563eb)' }}>
              <Cpu size={15} className="text-white" />
            </div>
            <div>
              <p className="text-[8px] font-semibold leading-none mb-0.5 text-slate-400">Powered By</p>
              <p className="text-[13px] font-black text-white leading-tight">AI & ML</p>
            </div>
          </div>

          {/* Floating right card */}
          <div className="hidden md:flex absolute -right-6 lg:-right-10 bottom-24 z-20 items-center gap-3 px-3.5 py-2.5 rounded-2xl animate-float"
            style={{ background: 'rgba(13,27,58,0.95)', border: '1px solid rgba(245,158,11,0.35)', backdropFilter: 'blur(12px)', boxShadow: '0 8px 30px rgba(245,158,11,0.15)', animationDelay: '1.8s' }}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg,#d97706,#f59e0b)' }}>
              <Star size={15} className="text-white" />
            </div>
            <div>
              <p className="text-[8px] font-semibold leading-none mb-0.5 text-slate-400">Client Rating</p>
              <p className="text-[13px] font-black text-white leading-tight">5★ Reviews</p>
            </div>
          </div>

          {/* Main app dashboard card */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ border: '1.5px solid rgba(37,99,235,0.30)', boxShadow: '0 0 80px rgba(37,99,235,0.20), 0 40px 100px rgba(0,0,0,0.6)' }}
          >
            {/* Accent top bar */}
            <div className="h-1" style={{ background: 'linear-gradient(90deg,#1d4ed8,#2563eb,#38bdf8,#0891b2)' }} />

            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-3 xs:px-4 py-2.5"
              style={{ background: '#081a36', borderBottom: '1px solid rgba(37,99,235,0.15)' }}>
              <div className="flex gap-1.5 flex-shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <div className="flex-1 flex items-center gap-1.5 px-2.5 py-1 rounded-md mx-2 max-w-[220px]"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <Globe size={9} className="text-slate-500 flex-shrink-0" />
                <span className="text-[10px] text-slate-400 font-medium truncate">app.yourbusiness.com</span>
              </div>
              <div className="ml-auto flex items-center gap-1.5 flex-shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[9px] text-emerald-400 font-bold hidden xs:block">LIVE</span>
              </div>
            </div>

            {/* Dashboard UI */}
            <div className="flex" style={{ background: '#081a36', minHeight: '280px' }}>

              {/* Sidebar - hidden on xs, shown sm+ */}
              <div className="hidden sm:flex flex-col gap-1 w-44 flex-shrink-0 p-3"
                style={{ background: '#161b22', borderRight: '1px solid rgba(37,99,235,0.12)' }}>
                <div className="flex items-center gap-2 px-2 py-2 mb-3">
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg,#1d4ed8,#2563eb)' }}>
                    <Code2 size={11} className="text-white" />
                  </div>
                  <span className="text-[11px] font-bold text-white">AraApp</span>
                </div>
                {sidebarItems.map(({ icon: Icon, label, active }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg transition-colors"
                    style={{
                      background: active ? 'rgba(37,99,235,0.2)' : 'transparent',
                      color: active ? '#60a5fa' : '#64748b',
                      border: active ? '1px solid rgba(37,99,235,0.3)' : '1px solid transparent',
                    }}
                  >
                    <Icon size={13} />
                    <span className="text-[11px] font-medium">{label}</span>
                    {active && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />}
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="flex-1 p-3 xs:p-4 sm:p-5 flex flex-col gap-3 sm:gap-4 overflow-hidden">

                {/* Page title */}
                <div className="flex items-center justify-between">
                  <span className="text-[12px] sm:text-[13px] font-bold text-white">Dashboard Overview</span>
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-lg"
                    style={{ background: 'rgba(37,99,235,0.15)', color: '#60a5fa', border: '1px solid rgba(37,99,235,0.25)' }}>
                    Live Analytics
                  </span>
                </div>

                {/* KPI cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {kpis.map(({ label, val, change, color }) => (
                    <div
                      key={label}
                      className="rounded-xl p-2.5 sm:p-3"
                      style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${color}25` }}
                    >
                      <p className="text-[9px] sm:text-[9.5px] font-semibold mb-1" style={{ color: '#64748b' }}>{label}</p>
                      <p className="text-[14px] sm:text-[16px] font-black leading-none" style={{ color }}>{val}</p>
                      <p className="text-[8px] mt-1 font-semibold" style={{ color: '#10b981' }}>{change}</p>
                    </div>
                  ))}
                </div>

                {/* Chart + Recent */}
                <div className="flex gap-3 flex-1">
                  {/* Bar chart */}
                  <div className="flex-1 rounded-xl p-2.5 sm:p-3"
                    style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(37,99,235,0.12)' }}>
                    <p className="text-[9px] font-bold mb-2 sm:mb-3 text-slate-400">Monthly Performance</p>
                    <div className="flex items-end gap-0.5 xs:gap-1 h-14 sm:h-16">
                      {chartBars.map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm min-w-[3px]"
                          style={{ height: `${h}%`, background: `linear-gradient(180deg, rgba(59,130,246,0.85), rgba(8,145,178,0.55))` }}
                        />
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-1.5">
                      <span className="text-[8px] text-slate-600">Jan — Dec</span>
                      <span className="text-[8px] font-bold" style={{ color: '#3b82f6' }}>+42% YoY</span>
                    </div>
                  </div>

                  {/* Status list */}
                  <div className="hidden sm:flex flex-col w-36 lg:w-44 rounded-xl p-3"
                    style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(37,99,235,0.12)' }}>
                    <p className="text-[9px] font-bold mb-2.5 text-slate-400">System Status</p>
                    {[
                      { lbl: 'API Health', pct: 99, color: '#10b981' },
                      { lbl: 'DB Speed',   pct: 87, color: '#3b82f6' },
                      { lbl: 'CDN Cache',  pct: 94, color: '#0891b2' },
                    ].map(({ lbl, pct, color }) => (
                      <div key={lbl} className="mb-2.5 last:mb-0">
                        <div className="flex justify-between mb-1">
                          <span className="text-[8px] text-slate-500">{lbl}</span>
                          <span className="text-[8px] font-bold" style={{ color }}>{pct}%</span>
                        </div>
                        <div className="h-1 rounded-full w-full" style={{ background: 'rgba(255,255,255,0.05)' }}>
                          <div className="h-1 rounded-full" style={{ width: `${pct}%`, background: color }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Table */}
                <div className="rounded-xl overflow-hidden"
                  style={{ border: '1px solid rgba(37,99,235,0.12)' }}>
                  <div className="flex items-center justify-between px-3 py-2"
                    style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(37,99,235,0.12)' }}>
                    <span className="text-[9px] font-bold text-slate-400">Recent Projects</span>
                    <span className="text-[9px] font-semibold" style={{ color: '#3b82f6' }}>View all</span>
                  </div>
                  {tableRows.map(({ name, type, amount, status, dot }) => (
                    <div
                      key={name}
                      className="flex items-center gap-2 px-3 py-2.5 last:border-0"
                      style={{ borderBottom: '1px solid rgba(37,99,235,0.06)' }}
                    >
                      <div className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 text-[9px] font-black text-white"
                        style={{ background: 'rgba(37,99,235,0.3)' }}>
                        {name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[9.5px] font-semibold text-white truncate">{name}</p>
                        <p className="text-[8px] text-slate-500 truncate">{type}</p>
                      </div>
                      <span className="text-[9px] font-bold text-slate-300 flex-shrink-0 hidden xs:block">{amount}</span>
                      <span
                        className="flex-shrink-0 flex items-center gap-1 px-2 py-0.5 rounded-full text-[8px] font-semibold"
                        style={{ background: `${dot}18`, color: dot }}
                      >
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: dot }} />
                        {status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom gradient fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
            style={{ background: 'linear-gradient(180deg, transparent, #071a36)' }}
          />
        </div>

        {/* Stats strip */}
        <div
          className="flex flex-wrap items-center justify-center gap-8 xs:gap-12 sm:gap-16 py-8 sm:py-10 mt-2 relative z-10"
          style={{ borderTop: '1px solid rgba(37,99,235,0.15)' }}
        >
          {stats.map(({ value, label }, i) => (
            <div
              key={label}
              className="flex flex-col items-center"
              style={{ borderLeft: i > 0 ? '1px solid rgba(37,99,235,0.2)' : 'none', paddingLeft: i > 0 ? '2rem' : '0' }}
            >
              <span
                className="text-[28px] xs:text-[32px] sm:text-[36px] font-black leading-tight"
                style={{ background: 'linear-gradient(135deg,#60a5fa,#38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
              >
                {value}
              </span>
              <span className="text-[11px] text-slate-500 font-medium mt-0.5">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
