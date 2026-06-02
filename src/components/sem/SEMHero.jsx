import {
  ChevronRight, ArrowRight, ArrowUpRight,
  Search, MousePointer2, Play, ShoppingBag,
  Megaphone, Sparkles, Target, TrendingUp, CheckCircle2,
} from 'lucide-react'

const campaignTypes = [
  {
    icon: Search,
    label: 'Search Ads',
    roas: '4.2x',
    sub: 'High-intent keyword targeting',
    color: '#2563eb',
    grad: 'linear-gradient(140deg,#1d4ed8 0%,#3b82f6 100%)',
  },
  {
    icon: MousePointer2,
    label: 'Display Ads',
    roas: 'Wide Reach',
    sub: 'Brand awareness across the web',
    color: '#7c3aed',
    grad: 'linear-gradient(140deg,#6d28d9 0%,#8b5cf6 100%)',
  },
  {
    icon: Play,
    label: 'YouTube Ads',
    roas: '5.1x',
    sub: 'Video-led brand campaigns',
    color: '#0891b2',
    grad: 'linear-gradient(140deg,#0369a1 0%,#06b6d4 100%)',
  },
  {
    icon: ShoppingBag,
    label: 'Shopping Ads',
    roas: '6.3x',
    sub: 'E-commerce product visibility',
    color: '#059669',
    grad: 'linear-gradient(140deg,#047857 0%,#10b981 100%)',
  },
]

export default function SEMHero() {
  return (
    <section
      className="relative overflow-hidden pt-[72px] min-h-screen flex items-center"
      style={{ background: 'linear-gradient(135deg, #f0f7ff 0%, #eff6ff 45%, #e0f2fe 100%)' }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.08) 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />

      {/* Orbs */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full pointer-events-none animate-orb"
        style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.55) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 right-0 w-[550px] h-[550px] rounded-full pointer-events-none animate-orb-rev"
        style={{ background: 'radial-gradient(circle, rgba(196,219,254,0.50) 0%, transparent 65%)' }} />

      {/* Decorative rings */}
      <div className="absolute top-20 left-[6%] w-28 h-28 rounded-full border border-blue-200/50 pointer-events-none" />
      <div className="absolute bottom-20 right-[6%] w-20 h-20 rounded-full border-[1.5px] border-blue-300/40 pointer-events-none" />
      <div className="absolute top-1/3 right-[3%] w-14 h-14 rounded-full border border-indigo-200/40 pointer-events-none" />

      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 md:px-7 py-10 w-full">
        <div className="text-center animate-hero-enter">

          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-1.5 text-[12px] text-slate-400 mb-4">
            <a href="/ARA-Marketing/" className="hover:text-blue-600 transition-colors">Home</a>
            <ChevronRight size={12} className="text-slate-300" />
            <span>Services</span>
            <ChevronRight size={12} className="text-slate-300" />
            SEM Services
          </nav>

          {/* Badge */}
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px]
              font-bold uppercase tracking-widest bg-white border border-blue-200 text-blue-600 shadow-sm">
              <Sparkles size={11} /> Search Engine Marketing (SEM)
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-bold tracking-tight mb-4 max-w-[900px] mx-auto">
            <span className="block text-[clamp(22px,3vw,44px)] text-slate-900 leading-[1.1]">
              Best Google Ads Services &amp; PPC Services in Thanjavur
            </span>
            <span className="block text-[clamp(15px,1.8vw,26px)] text-gradient-blue leading-snug mt-1.5">
              for Business Growth
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-[15px] font-medium text-slate-500 tracking-wide mb-3">
            AI-Powered Campaigns &middot; Transparent Reporting &middot; ROI-Focused Results
          </p>

          {/* Description */}
          <p className="text-[14.5px] text-slate-500 leading-[1.85] mb-2 max-w-[860px] mx-auto">
            Ara Discover Marketing provides result-driven Google Ads and ppc service in Thanjavur to help businesses generate high-quality leads, increase website traffic, and optimize ROI with targeted paid advertising campaigns. We are one of the best search engine advertising agencies in Thanjavur, and we develop strategic Google Ads campaigns for startups, local businesses, and growing businesses.
          </p>
          <p className="text-[13.5px] text-slate-400 leading-[1.8] mb-6 max-w-[820px] mx-auto">
            Our paid advertising specialists offer full ppc ads service in Thanjavur, focusing on audience targeting, conversion optimization, and AI-enabled campaign strategies that allow businesses to achieve measurable growth with Google Search, Display, YouTube, and Shopping Ads.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <a href="/ARA-Marketing/contact"
              className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg,#2563eb,#6366f1)', boxShadow: '0 8px 28px rgba(37,99,235,0.30)' }}>
              Get Free PPC Audit <ArrowRight size={15} />
            </a>
            <a href="#sem-services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm
                font-semibold text-blue-700 bg-white border border-blue-200
                hover:bg-blue-50 hover:border-blue-300 transition-all duration-300">
              Explore Services <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Stats inline */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-[13px] text-slate-400">
            {[['200+', 'PPC Campaigns'], ['95%', 'Client Satisfaction'], ['300%', 'Avg. Lead Growth']].map(([num, lbl], i) => (
              <span key={lbl} className="flex items-center gap-1.5">
                {i > 0 && <span className="w-px h-3.5 bg-slate-200 mr-4" />}
                {num}
                <span>{lbl}</span>
              </span>
            ))}
          </div>

          {/* ── Campaign type cards ── */}
          <div className="reveal relative">

            {/* Floating badges */}
            <div className="absolute -top-4 left-0 z-10 hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white
              border border-blue-200 shadow-lg animate-float"
              style={{ boxShadow: '0 8px 28px rgba(37,99,235,0.18)' }}>
              <Megaphone size={13} className="text-blue-600" />
              <span className="text-[11px] font-bold text-slate-700">Certified Google Partner</span>
            </div>
            <div className="absolute -top-4 right-0 z-10 hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white
              border border-blue-100 shadow-lg animate-float-delay"
              style={{ boxShadow: '0 8px 24px rgba(37,99,235,0.12)' }}>
              <Target size={13} className="text-blue-600" />
              <span className="text-[11px] font-bold text-slate-700">150+ Campaign Optimizations</span>
            </div>

            {/* 4 campaign cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              {campaignTypes.map(({ icon: Icon, label, roas, sub, color, grad }) => (
                <div key={label}
                  className="group rounded-2xl overflow-hidden bg-white border border-slate-100
                    hover:-translate-y-2 transition-all duration-300"
                  style={{ boxShadow: '0 4px 20px rgba(37,99,235,0.07)' }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 16px 44px ${color}20` }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.07)' }}
                >
                  {/* Colored top band */}
                  <div className="px-5 pt-6 pb-5 flex flex-col items-center gap-3"
                    style={{ background: grad }}>
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ background: 'rgba(255,255,255,0.18)', border: '1.5px solid rgba(255,255,255,0.30)' }}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <p className="text-[13px] font-bold text-white text-center leading-snug">{label}</p>
                  </div>

                  {/* White bottom */}
                  <div className="px-5 py-4 text-center">
                    <p className="text-[26px] font-bold leading-none mb-0.5" style={{ color }}>{roas}</p>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-3">Avg. ROAS</p>
                    <p className="text-[11px] text-slate-500 leading-snug">{sub}</p>
                    <div className="mt-3 h-1 rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-700 group-hover:w-full"
                        style={{ width: '65%', background: grad }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Live status bar */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3
              px-6 py-3.5 rounded-2xl bg-white border border-slate-100"
              style={{ boxShadow: '0 4px 16px rgba(37,99,235,0.06)' }}>
              <span className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot" />
                All Campaigns Running Live
              </span>
              <span className="hidden sm:block w-px h-4 bg-slate-200" />
              <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
                <TrendingUp size={11} className="text-blue-500" />
                Real-time tracking &amp; bid optimization
              </span>
              <span className="hidden sm:block w-px h-4 bg-slate-200" />
              <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
                <CheckCircle2 size={11} className="text-blue-500" />
                Transparent monthly reporting
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
