import {
  ArrowRight, Zap, CheckCircle2, TrendingUp, Target,
  Users, BarChart2, Search, Monitor, Play, ShoppingBag, Activity,
} from 'lucide-react'

const chips = [
  { icon: Zap,        label: 'AI-Powered Strategy',  color: '#2563eb' },
  { icon: Target,     label: 'Search & Display Ads', color: '#7c3aed' },
  { icon: TrendingUp, label: 'YouTube Advertising',  color: '#0891b2' },
  { icon: BarChart2,  label: 'Shopping Campaigns',   color: '#059669' },
  { icon: Users,      label: 'Conversion Tracking',  color: '#d97706' },
]

const packageItems = [
  { icon: Search,       label: 'AI-Powered Keyword & Audience Research', color: '#2563eb' },
  { icon: Zap,          label: 'Google Search Ads Campaign Setup',        color: '#7c3aed' },
  { icon: Monitor,      label: 'Display & YouTube Advertising',           color: '#0891b2' },
  { icon: ShoppingBag,  label: 'Shopping Ads Management',                 color: '#059669' },
  { icon: Activity,     label: 'Conversion Tracking Integration',         color: '#dc2626' },
  { icon: BarChart2,    label: 'Monthly Performance Reports',             color: '#d97706' },
  { icon: Users,        label: 'Dedicated PPC Campaign Manager',          color: '#0f766e' },
]

export default function SEMCTA() {
  return (
    <section className="relative overflow-hidden py-20 bg-white">

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.05) 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }} />

      {/* Centre spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(219,234,254,0.55) 0%, transparent 65%)' }} />

      {/* Decorative rings */}
      <div className="absolute top-10 left-[10%] w-32 h-32 rounded-full border border-blue-100/60 pointer-events-none" />
      <div className="absolute bottom-10 right-[10%] w-20 h-20 rounded-full border border-blue-100/60 pointer-events-none" />

      <div className="relative max-w-[1100px] mx-auto px-7">

        {/* ── Header ── */}
        <div className="text-center mb-10 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px]
            font-bold uppercase tracking-widest mb-6 bg-blue-50 border border-blue-200 text-blue-600">
            <Zap size={11} /> Ready to Generate More Leads
          </span>

          <h2 className="text-[clamp(26px,3.8vw,52px)] font-bold text-slate-900 leading-[1.08] tracking-tight mb-5">
            Are You Ready to Generate More Leads{' '}
            <span className="text-gradient-blue">Through Google Ads?</span>
          </h2>

          <p className="text-[15px] text-slate-500 leading-[1.85] mb-8 max-w-[620px] mx-auto">
            Partner with Ara Discover Marketing, a leading provider of Google Ads and ppc service in Thanjavur, providing AI-powered PPC campaigns, search advertising, display marketing, and YouTube advertising solutions for business growth.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-7">
            <a href="#contact"
              className="btn-glow inline-flex items-center gap-2 px-8 py-4 rounded-full
                text-[15px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg,#2563eb,#6366f1)', boxShadow: '0 10px 36px rgba(37,99,235,0.30)' }}>
              Get Free PPC Consultation <ArrowRight size={16} />
            </a>
            <a href="#sem-services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[15px]
                font-semibold text-blue-700 bg-white border border-blue-200
                hover:bg-blue-50 hover:border-blue-300 transition-all duration-300">
              Explore Services
            </a>
          </div>

          {/* Service chips */}
          <div className="flex flex-wrap justify-center gap-2.5">
            {chips.map(({ icon: Icon, label, color }) => (
              <span key={label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-semibold
                  bg-white border border-slate-200 text-slate-600 shadow-sm">
                <Icon size={12} style={{ color }} />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* ── Package card ── */}
        <div className="reveal max-w-[820px] mx-auto">
          <div className="rounded-3xl overflow-hidden border border-blue-100"
            style={{ boxShadow: '0 16px 56px rgba(37,99,235,0.10)' }}>

            {/* Card header */}
            <div className="h-1 w-full"
              style={{ background: 'linear-gradient(90deg,#1d4ed8,#2563eb,#7c3aed,#059669)' }} />

            <div className="flex items-center gap-3 px-7 py-5 bg-white border-b border-slate-100">
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 text-white"
                style={{ background: 'linear-gradient(135deg,#2563eb,#6366f1)', boxShadow: '0 6px 20px rgba(37,99,235,0.28)' }}>
                <TrendingUp size={19} />
              </div>
              <div>
                <p className="text-[14px] font-bold text-slate-800">Google Ads Growth Package</p>
                <p className="text-[11px] text-slate-400">Everything you need to grow with paid advertising</p>
              </div>
            </div>

            {/* Package items — vertical list with dividers */}
            <div className="flex flex-col divide-y divide-slate-100 bg-white">
              {packageItems.map(({ icon: Icon, label, color }) => (
                <div key={label}
                  className="flex items-center gap-4 px-7 py-4 hover:bg-slate-50/60 transition-colors duration-200">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `linear-gradient(135deg,${color},${color}bb)`, boxShadow: `0 4px 12px ${color}25` }}>
                    <Icon size={14} className="text-white" />
                  </div>
                  <span className="text-[13px] font-semibold text-slate-700 flex-1">{label}</span>
                  <CheckCircle2 size={14} className="text-slate-300 flex-shrink-0" />
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-7 py-4 border-t border-blue-100 text-center"
              style={{ background: 'linear-gradient(135deg,#eff6ff,#f8faff)' }}>
              <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-500 font-medium">
                <span className="flex items-center gap-1.5"><CheckCircle2 size={11} className="text-blue-400" /> No setup fees</span>
                <span className="w-px h-3.5 bg-slate-200" />
                <span className="flex items-center gap-1.5"><CheckCircle2 size={11} className="text-blue-400" /> Cancel anytime</span>
                <span className="w-px h-3.5 bg-slate-200" />
                <span className="flex items-center gap-1.5"><CheckCircle2 size={11} className="text-blue-400" /> Monthly transparent reporting</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
