import {
  Code2, Cpu, Shield, ArrowRight, ArrowUpRight, ChevronRight,
  Globe, Smartphone, Zap, Star, Users, TrendingUp, ShoppingBag,
  BarChart3, Activity, CheckCircle2,
} from 'lucide-react'

const highlights = [
  { val: '200+', label: 'Apps Delivered' },
  { val: '98%',  label: 'Client Satisfaction' },
  { val: '5★',   label: 'Average Rating' },
]

const kpis = [
  { label: 'Total Users', val: '12,450', change: '+18%', color: '#3b82f6' },
  { label: 'Revenue',     val: '₹2.1M',  change: '+24%', color: '#0891b2' },
  { label: 'Orders',      val: '843',    change: '+12%', color: '#6366f1' },
  { label: 'Uptime',      val: '99.9%',  change: 'Stable', color: '#10b981' },
]

const chartBars = [35, 55, 42, 70, 52, 85, 63, 78, 58, 90, 74, 95]

const sidebarItems = [
  { icon: BarChart3,   label: 'Dashboard', active: true },
  { icon: Users,       label: 'Customers', active: false },
  { icon: ShoppingBag, label: 'Orders',    active: false },
  { icon: TrendingUp,  label: 'Analytics', active: false },
  { icon: Activity,    label: 'Reports',   active: false },
]

const tableRows = [
  { name: 'Priya Sharma',    type: 'Web App Order',  amount: '₹45,000',  status: 'Completed',   dot: '#10b981' },
  { name: 'Karthik Rajan',   type: 'Mobile App Dev', amount: '₹72,000',  status: 'In Progress', dot: '#3b82f6' },
  { name: 'Meena Logistics', type: 'eCommerce App',  amount: '₹1,20,000',status: 'Review',      dot: '#f59e0b' },
]

const gradBlue = {
  background: 'linear-gradient(135deg,#60a5fa,#38bdf8)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

export default function WAHero() {
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
        style={{ background: 'radial-gradient(circle, rgba(8,145,178,0.20) 0%, transparent 65%)' }} />
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
              <span className="text-sky-300 font-medium">Web Application</span>
            </nav>

            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-2.5 sm:px-4 py-2 rounded-full text-[9px] sm:text-[11px] font-bold uppercase tracking-widest mb-6 sm:mb-8"
              style={{
                background: 'rgba(37,99,235,0.18)',
                border: '1px solid rgba(96,165,250,0.30)',
                color: '#93c5fd',
                backdropFilter: 'blur(8px)',
              }}>
              <Code2 size={10} /> Web Application Development Service
            </span>

            {/* H1 */}
            <h1 className="leading-[1.2] tracking-tight mb-5 sm:mb-6" style={{ color: '#ffffff', fontWeight: 600, fontSize: 'clamp(26px,5vw,44px)' }}>
              <span style={{ display: 'block' }}>Power Your Business with</span>
              <span style={{ display: 'block', ...gradBlue }}>Advanced Web App Solutions</span>
            </h1>

            {/* Tagline */}
            <p className="text-[13px] sm:text-[15px] font-medium tracking-wide mb-4 sm:mb-5"
              style={{ color: 'rgba(255,255,255,0.45)' }}>
              AI-Powered &middot; Secure &middot; Scalable &middot; Results-Driven
            </p>

            <p className="text-[13.5px] sm:text-[14.5px] leading-[1.85] mb-3 max-w-[560px] mx-auto lg:mx-0"
              style={{ color: 'rgba(255,255,255,0.55)' }}>
              ARA Discover Marketing is the best custom web application development company in Thanjavur, offering reliable AI-powered solutions customised as per your requirements.
            </p>
            <p className="hidden sm:block text-[13px] sm:text-[13.5px] leading-[1.8] mb-8 sm:mb-10 max-w-[560px] mx-auto lg:mx-0"
              style={{ color: 'rgba(255,255,255,0.35)' }}>
              We are one of the best web and mobile app development companies in Thanjavur, delivering powerful, secure, and result-driven web applications for businesses of every scale.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8 sm:mb-10">
              {[
                { icon: Cpu,        text: 'AI-Powered Solutions' },
                { icon: Shield,     text: 'Enterprise Security' },
                { icon: Smartphone, text: 'Mobile Integration' },
                { icon: Zap,        text: 'Scalable Architecture' },
              ].map(({ icon: Icon, text }) => (
                <span key={text}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold"
                  style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.28)', color: '#93c5fd' }}>
                  <Icon size={11} />
                  {text}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 sm:mb-12">
              <a href="/ARA-Marketing/contact-us"
                className="btn-glow inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#1d4ed8,#0369a1)', boxShadow: '0 8px 32px rgba(29,78,216,0.45)' }}>
                Take a First Step <ArrowRight size={14} />
              </a>
              <a href="#wa-services"
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

          {/* ── Right: App Dashboard card ── */}
          <div className="hidden md:block lg:w-[500px] flex-shrink-0 w-full max-w-[500px] reveal-right">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(29,78,216,0.28) 0%, transparent 70%)' }} />

              {/* Floating left badge */}
              <div className="absolute -left-5 top-12 z-20 flex items-center gap-2.5 px-3 py-2 rounded-2xl animate-float"
                style={{ background: 'rgba(13,27,58,0.95)', border: '1px solid rgba(37,99,235,0.35)', backdropFilter: 'blur(12px)', boxShadow: '0 8px 30px rgba(37,99,235,0.2)' }}>
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg,#1d4ed8,#2563eb)' }}>
                  <Cpu size={13} className="text-white" />
                </div>
                <div>
                  <p className="text-[8px] font-semibold text-slate-400 leading-none mb-0.5">Powered By</p>
                  <p className="text-[12px] font-black text-white leading-tight">AI & ML</p>
                </div>
              </div>

              {/* Floating right badge */}
              <div className="absolute -right-5 bottom-20 z-20 flex items-center gap-2.5 px-3 py-2 rounded-2xl animate-float"
                style={{ background: 'rgba(13,27,58,0.95)', border: '1px solid rgba(245,158,11,0.35)', backdropFilter: 'blur(12px)', boxShadow: '0 8px 30px rgba(245,158,11,0.15)', animationDelay: '1.8s' }}>
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg,#d97706,#f59e0b)' }}>
                  <Star size={13} className="text-white" />
                </div>
                <div>
                  <p className="text-[8px] font-semibold text-slate-400 leading-none mb-0.5">Client Rating</p>
                  <p className="text-[12px] font-black text-white leading-tight">5★ Reviews</p>
                </div>
              </div>

              {/* Dashboard card */}
              <div className="relative rounded-2xl overflow-hidden"
                style={{ border: '1.5px solid rgba(37,99,235,0.30)', boxShadow: '0 40px 100px rgba(0,0,0,0.60)' }}>

                {/* Accent bar */}
                <div className="h-1" style={{ background: 'linear-gradient(90deg,#1d4ed8,#2563eb,#38bdf8,#0891b2)' }} />

                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-2.5"
                  style={{ background: '#081a36', borderBottom: '1px solid rgba(37,99,235,0.15)' }}>
                  <div className="flex gap-1.5 flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="flex-1 flex items-center gap-1.5 px-2.5 py-1 rounded-md mx-2 max-w-[200px]"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <Globe size={9} className="text-slate-500 flex-shrink-0" />
                    <span className="text-[10px] text-slate-400 font-medium truncate">app.yourbusiness.com</span>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[9px] text-emerald-400 font-bold">LIVE</span>
                  </div>
                </div>

                {/* Dashboard UI */}
                <div className="flex" style={{ background: '#081a36' }}>

                  {/* Sidebar */}
                  <div className="flex flex-col gap-1 w-36 flex-shrink-0 p-2.5"
                    style={{ background: '#161b22', borderRight: '1px solid rgba(37,99,235,0.12)' }}>
                    <div className="flex items-center gap-2 px-2 py-2 mb-2">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg,#1d4ed8,#2563eb)' }}>
                        <Code2 size={10} className="text-white" />
                      </div>
                      <span className="text-[11px] font-bold text-white">AraApp</span>
                    </div>
                    {sidebarItems.map(({ icon: Icon, label, active }) => (
                      <div key={label}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg"
                        style={{
                          background: active ? 'rgba(37,99,235,0.2)' : 'transparent',
                          color: active ? '#60a5fa' : '#64748b',
                          border: active ? '1px solid rgba(37,99,235,0.3)' : '1px solid transparent',
                        }}>
                        <Icon size={11} />
                        <span className="text-[10px] font-medium">{label}</span>
                        {active && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />}
                      </div>
                    ))}
                  </div>

                  {/* Main content */}
                  <div className="flex-1 p-3 flex flex-col gap-3 overflow-hidden">

                    {/* Page title */}
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-white">Dashboard Overview</span>
                      <span className="text-[9px] font-semibold px-2 py-1 rounded-lg"
                        style={{ background: 'rgba(37,99,235,0.15)', color: '#60a5fa', border: '1px solid rgba(37,99,235,0.25)' }}>
                        Live Analytics
                      </span>
                    </div>

                    {/* KPI cards */}
                    <div className="grid grid-cols-2 gap-1.5">
                      {kpis.map(({ label, val, change, color }) => (
                        <div key={label} className="rounded-xl p-2"
                          style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${color}25` }}>
                          <p className="text-[8px] font-semibold mb-0.5" style={{ color: '#64748b' }}>{label}</p>
                          <p className="text-[13px] font-black leading-none" style={{ color }}>{val}</p>
                          <p className="text-[7.5px] mt-0.5 font-semibold" style={{ color: '#10b981' }}>{change}</p>
                        </div>
                      ))}
                    </div>

                    {/* Bar chart */}
                    <div className="rounded-xl p-2.5"
                      style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(37,99,235,0.12)' }}>
                      <p className="text-[8px] font-bold mb-2 text-slate-400">Monthly Performance</p>
                      <div className="flex items-end gap-0.5 h-12">
                        {chartBars.map((h, i) => (
                          <div key={i} className="flex-1 rounded-sm min-w-[3px]"
                            style={{ height: `${h}%`, background: 'linear-gradient(180deg, rgba(59,130,246,0.85), rgba(8,145,178,0.55))' }} />
                        ))}
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-[7px] text-slate-600">Jan — Dec</span>
                        <span className="text-[7.5px] font-bold" style={{ color: '#3b82f6' }}>+42% YoY</span>
                      </div>
                    </div>

                    {/* Recent projects table */}
                    <div className="rounded-xl overflow-hidden"
                      style={{ border: '1px solid rgba(37,99,235,0.12)' }}>
                      <div className="flex items-center justify-between px-2.5 py-1.5"
                        style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(37,99,235,0.12)' }}>
                        <span className="text-[8px] font-bold text-slate-400">Recent Projects</span>
                        <span className="text-[8px] font-semibold" style={{ color: '#3b82f6' }}>View all</span>
                      </div>
                      {tableRows.map(({ name, type, status, dot }) => (
                        <div key={name} className="flex items-center gap-2 px-2.5 py-2 last:border-0"
                          style={{ borderBottom: '1px solid rgba(37,99,235,0.06)' }}>
                          <div className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 text-[8px] font-black text-white"
                            style={{ background: 'rgba(37,99,235,0.3)' }}>
                            {name.charAt(0)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[8.5px] font-semibold text-white truncate">{name}</p>
                            <p className="text-[7.5px] text-slate-500 truncate">{type}</p>
                          </div>
                          <span className="flex-shrink-0 flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[7px] font-semibold"
                            style={{ background: `${dot}18`, color: dot }}>
                            <span className="w-1 h-1 rounded-full" style={{ background: dot }} />
                            {status}
                          </span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Bottom strip */}
                <div className="flex items-center justify-between gap-2 px-4 py-2.5"
                  style={{ background: 'linear-gradient(90deg,#1e3a8a,#1d4ed8,#0891b2)' }}>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={10} className="text-white/70" />
                    <span className="text-[9px] font-bold text-white/80">200+ Apps Delivered</span>
                  </div>
                  <div className="flex gap-1.5">
                    {['AI-Powered', 'Secure', 'Scalable'].map(tag => (
                      <span key={tag} className="text-[8px] font-semibold px-2 py-0.5 rounded-full"
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
