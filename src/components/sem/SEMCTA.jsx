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
      style={{ background: 'linear-gradient(160deg,#f8fbff 0%,#eff6ff 60%,#f0f9ff 100%)' }}>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.06) 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }} />

      {/* Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(196,219,254,0.40) 0%,transparent 65%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(219,234,254,0.35) 0%,transparent 65%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* ── Header ── */}
        <div className="text-center mb-10 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px]
            font-bold uppercase tracking-widest mb-6 bg-white border border-blue-200 text-blue-600 shadow-sm">
            <Zap size={11} /> Ready to Generate More Leads
          </span>

          <h2 className="text-[clamp(21px,2.7vw,37px)] font-bold text-slate-900 leading-[1.08] tracking-tight mb-5">
            Are You Ready to Generate More Leads{' '}
            <span style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Through Google Ads?
            </span>
          </h2>

          <p className="text-[15px] text-slate-500 leading-[1.85] mb-8 max-w-[600px] mx-auto">
            Partner with ARA Discover Marketing, a leading provider of Google Ads and ppc service in Thanjavur, providing AI-powered PPC campaigns, search advertising, display marketing, and YouTube advertising solutions for business growth.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a href="/ARA-Marketing/contact-us"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full
                text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
              style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', boxShadow: '0 10px 36px rgba(37,99,235,0.30)' }}>
              Get Free PPC Consultation <ArrowRight size={16} />
            </a>
            <a href="#sem-services"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[13px]
                font-semibold text-blue-700 bg-white border border-blue-200
                hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 shadow-sm">
              Explore Services
            </a>
          </div>
        </div>

        {/* ── Package card ── */}
        <div className="reveal rounded-3xl overflow-hidden border border-blue-100"
          style={{ boxShadow: '0 20px 60px rgba(37,99,235,0.10)' }}>

          {/* Gradient header */}
          <div className="relative px-8 py-7 overflow-hidden"
            style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)' }}>
            {/* Decorative ring */}
            <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full pointer-events-none"
              style={{ border: '1.5px solid rgba(255,255,255,0.15)' }} />
            <div className="absolute -bottom-10 right-24 w-24 h-24 rounded-full pointer-events-none"
              style={{ border: '1px solid rgba(255,255,255,0.10)' }} />

            <div className="relative flex items-center gap-4">
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.25)' }}>
                <TrendingUp size={18} className="text-white" />
              </div>
              <div>
                <p className="text-[15px] font-bold text-white leading-snug">Google Ads Growth Package</p>
                <p className="text-[12px] text-blue-100/80">Everything you need to grow with paid advertising</p>
              </div>
            </div>
          </div>

          {/* Items grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 bg-white">
            {packageItems.map(({ icon: Icon, label }, i) => {
              const isLast = i === packageItems.length - 1
              const isOdd = packageItems.length % 2 !== 0
              return (
                <div key={label}
                  className={`group flex items-center gap-3.5 px-6 py-4 transition-all duration-200
                    hover:bg-blue-50/60 cursor-default
                    ${isLast && isOdd ? 'sm:col-span-2' : ''}
                    ${i < packageItems.length - (isOdd ? 1 : 2) ? 'border-b border-blue-50' : ''}
                    ${i % 2 === 0 && !isLast ? 'sm:border-r sm:border-blue-50' : ''}
                  `}>
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                    style={{ background: 'linear-gradient(135deg,#eff6ff,#e0f2fe)', border: '1px solid #bfdbfe' }}>
                    <Icon size={14} style={{ color: '#2563eb' }} />
                  </div>
                  <span className="text-[13px] font-semibold text-slate-700 group-hover:text-slate-900 transition-colors duration-200">
                    {label}
                  </span>
                  <CheckCircle2 size={13} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0"
                    style={{ color: '#0ea5e9' }} />
                </div>
              )
            })}
          </div>

          {/* Footer */}
          <div className="flex flex-wrap items-center justify-center gap-6 px-6 py-4 border-t border-blue-100"
            style={{ background: '#f8fbff' }}>
            {['No setup fees', 'Cancel anytime', 'Monthly transparent reporting'].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-[12px] text-slate-500 font-medium">
                <CheckCircle2 size={12} style={{ color: '#2563eb' }} /> {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
