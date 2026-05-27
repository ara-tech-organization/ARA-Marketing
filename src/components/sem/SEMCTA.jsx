import {
  ArrowRight, Zap, CheckCircle2, TrendingUp, Target,
  Users, BarChart2, Search, Monitor, Play, ShoppingBag, Activity,
} from 'lucide-react'

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
    <section className="relative overflow-hidden py-20"
      style={{ background: 'linear-gradient(160deg,#f8fbff 0%,#eff6ff 60%,#f0f9ff 100%)' }}>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.06) 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }} />

      {/* Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(196,219,254,0.40) 0%,transparent 65%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(219,234,254,0.35) 0%,transparent 65%)' }} />

      <div className="relative max-w-[860px] mx-auto px-7">

        {/* ── Header ── */}
        <div className="text-center mb-10 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px]
            font-bold uppercase tracking-widest mb-6 bg-white border border-blue-200 text-blue-600 shadow-sm">
            <Zap size={11} /> Ready to Generate More Leads
          </span>

          <h2 className="text-[clamp(26px,3.8vw,52px)] font-bold text-slate-900 leading-[1.08] tracking-tight mb-5">
            Are You Ready to Generate More Leads{' '}
            <span className="text-gradient-blue">Through Google Ads?</span>
          </h2>

          <p className="text-[15px] text-slate-500 leading-[1.85] mb-8 max-w-[600px] mx-auto">
            Partner with Ara Discover Marketing, a leading provider of Google Ads and ppc service in Thanjavur, providing AI-powered PPC campaigns, search advertising, display marketing, and YouTube advertising solutions for business growth.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a href="#contact"
              className="btn-glow inline-flex items-center gap-2 px-8 py-4 rounded-full
                text-[15px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg,#2563eb,#6366f1)', boxShadow: '0 10px 36px rgba(37,99,235,0.30)' }}>
              Get Free PPC Consultation <ArrowRight size={16} />
            </a>
            <a href="#sem-services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[15px]
                font-semibold text-blue-700 bg-white border border-blue-200
                hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 shadow-sm">
              Explore Services
            </a>
          </div>
        </div>

        {/* ── Package strip ── */}
        <div className="reveal rounded-3xl overflow-hidden border border-blue-100/80"
          style={{ boxShadow: '0 12px 48px rgba(37,99,235,0.09)' }}>

          {/* Header bar */}
          <div className="flex items-center gap-3 px-6 py-4 bg-white border-b border-blue-100">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-white"
              style={{ background: 'linear-gradient(135deg,#2563eb,#6366f1)', boxShadow: '0 4px 14px rgba(37,99,235,0.28)' }}>
              <TrendingUp size={16} />
            </div>
            <div>
              <p className="text-[13px] font-bold text-slate-800">Google Ads Growth Package</p>
              <p className="text-[11px] text-slate-400">Everything you need to grow with paid advertising</p>
            </div>
          </div>

          {/* Items as horizontal wrapping chips */}
          <div className="flex flex-wrap gap-3 px-6 py-5 bg-white">
            {packageItems.map(({ icon: Icon, label, color }) => (
              <div key={label}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border
                  hover:shadow-md transition-all duration-200"
                style={{
                  background: `${color}07`,
                  borderColor: `${color}20`,
                }}>
                <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `linear-gradient(135deg,${color},${color}bb)` }}>
                  <Icon size={12} className="text-white" />
                </div>
                <span className="text-[12.5px] font-semibold text-slate-700">{label}</span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex flex-wrap items-center justify-center gap-5 px-6 py-3.5 border-t border-blue-100"
            style={{ background: 'linear-gradient(135deg,#eff6ff,#f8faff)' }}>
            {['No setup fees', 'Cancel anytime', 'Monthly transparent reporting'].map((t, i) => (
              <span key={t} className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                {i > 0 && <span className="w-px h-3 bg-slate-200 mr-3" />}
                <CheckCircle2 size={11} className="text-blue-400" /> {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
