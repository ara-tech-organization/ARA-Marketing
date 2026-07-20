import {
  ArrowRight, Zap, CheckCircle2, TrendingUp,
  BarChart2, Search, Monitor, Play, ShoppingBag, Activity, Users,
} from 'lucide-react'

const packageItems = [
  { icon: Search,      label: 'AI-Powered Keyword & Audience Research' },
  { icon: Zap,         label: 'Google Search Ads Campaign Setup' },
  { icon: Monitor,     label: 'Display & YouTube Advertising' },
  { icon: ShoppingBag, label: 'Shopping Ads Management' },
  { icon: Activity,    label: 'Conversion Tracking Integration' },
  { icon: BarChart2,   label: 'Monthly Performance Reports' },
  { icon: Users,       label: 'Dedicated PPC Campaign Manager' },
]

export default function SEMCTA() {
  return (
    <section className="relative overflow-hidden py-20"
      style={{ background: 'linear-gradient(135deg,#0d2244 0%,#0a1a34 40%,#0d2244 100%)' }}>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'var(--brand-gradient-dots)', backgroundSize: '30px 30px' }} />

      {/* Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'var(--brand-gradient-glow-dark)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'var(--brand-gradient-glow-dark)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* â”€â”€ Header â”€â”€ */}
        <div className="text-center mb-10 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px]
            font-bold uppercase tracking-widest mb-6 bg-white/5 border border-white/10 text-blue-400 shadow-sm">
            <Zap size={11} /> Ready to Generate More Leads
          </span>

          <h2 className="text-[clamp(21px,2.7vw,37px)] font-bold text-white leading-[1.08] tracking-tight mb-5">
            Are You Ready to Generate More Leads{' '}
            <span style={{ background: 'var(--brand-gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Through Google Ads?
            </span>
          </h2>

          <p className="text-[15px] text-white/60 leading-[1.85] mb-8 max-w-[600px] mx-auto">
            Partner with ARA Discover Marketing, a leading provider of Google Ads and ppc service in Thanjavur, providing AI-powered PPC campaigns, search advertising, display marketing, and YouTube advertising solutions for business growth.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a href="tel:+918110025254"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full
                text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
              style={{ background: 'var(--brand-gradient)', boxShadow: '0 10px 36px rgba(37,99,235,0.30)' }}>
              Get Free PPC Consultation <ArrowRight size={16} />
            </a>
            <a href="#sem-services"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[13px]
                font-semibold text-white/70 bg-white/5 border border-white/10
                hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-sm">
              Explore Services
            </a>
          </div>
        </div>

        {/* â”€â”€ Package card â”€â”€ */}
        <div className="reveal rounded-3xl overflow-hidden border border-white/10"
          style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.30)' }}>

          {/* Header */}
          <div className="relative px-8 py-7 overflow-hidden"
            style={{ background: 'linear-gradient(135deg,#0d2244 0%,#0a1a34 40%,#0d2244 100%)', borderLeft: '4px solid #2563eb' }}>
            {/* Decorative ring */}
            <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full pointer-events-none"
              style={{ border: '1.5px solid rgba(255,255,255,0.08)' }} />
            <div className="absolute -bottom-10 right-24 w-24 h-24 rounded-full pointer-events-none"
              style={{ border: '1px solid rgba(255,255,255,0.06)' }} />

            <div className="relative flex items-center gap-4">
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--brand-gradient)', boxShadow: '0 6px 20px rgba(37,99,235,0.35)' }}>
                <TrendingUp size={18} className="text-white" />
              </div>
              <div>
                <p className="text-[15px] font-bold text-white leading-snug">Google Ads Growth Package</p>
                <p className="text-[12px] text-blue-300/70">Everything you need to grow with paid advertising</p>
              </div>
            </div>
          </div>

          {/* Items grid — individual cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6" style={{ background: '#eff6ff' }}>
            {packageItems.map(({ icon: Icon, label }, i) => {
              const isLast = i === packageItems.length - 1
              const isLoneInRow = isLast && packageItems.length % 3 === 1
              return (
                <div key={label}
                  className={`group relative flex flex-col items-center text-center gap-3 px-5 py-6
                    rounded-2xl border border-blue-100 bg-white
                    hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/60 hover:-translate-y-1
                    transition-all duration-300
                    ${isLoneInRow ? 'sm:col-span-2 lg:col-span-1 lg:col-start-2' : ''}
                  `}>
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: 'var(--brand-gradient-soft)' }}>
                    <Icon size={18} style={{ color: '#fff' }} />
                  </div>
                  <span className="text-[13px] font-semibold text-slate-700 group-hover:text-slate-900 transition-colors duration-200 leading-snug">
                    {label}
                  </span>
                  <CheckCircle2 size={14} className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: '#0ea5e9' }} />
                </div>
              )
            })}
          </div>

          {/* Footer */}
          <div className="flex flex-wrap items-center justify-center gap-3 px-6 py-5"
            style={{ background: 'linear-gradient(135deg,#0d2244 0%,#0a1a34 40%,#0d2244 100%)' }}>
            {['No setup fees', 'Cancel anytime', 'Monthly transparent reporting'].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-[11.5px] text-blue-100 font-semibold px-3.5 py-1.5 rounded-full"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <CheckCircle2 size={12} style={{ color: '#60a5fa' }} /> {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
