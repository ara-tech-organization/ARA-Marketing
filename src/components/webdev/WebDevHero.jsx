import {
  Globe2, TrendingUp, Search, Smartphone, ChevronRight,
  ArrowRight, ArrowUpRight, Zap, CheckCircle
} from 'lucide-react'

export default function WebDevHero() {
  return (
    <section
      className="relative overflow-hidden pt-[72px]"
      style={{ background: '#ffffff' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(37,99,235,0.07) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute top-[72px] left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.2), transparent)' }} />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(219,234,254,0.7) 0%, transparent 65%)' }}
      />

      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 md:px-7 pt-16 pb-6">
        <div className="text-center max-w-[1000px] mx-auto animate-hero-enter">
          <nav className="flex items-center justify-center gap-1.5 text-[13px] text-slate-400 mb-6">
            <a href="/ARA-Marketing/" className="hover:text-blue-600 transition-colors duration-200">Home</a>
            <ChevronRight size={13} className="text-slate-300" />
            <span className="text-blue-600 font-medium">Website Design &amp; Development</span>
          </nav>

          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
            border border-blue-200 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6">
            <Globe2 size={11} /> Website Design &amp; Development
          </span>

          <h1 className="text-[clamp(21px,2.7vw,43px)] font-bold text-slate-900 leading-[1.1]
            tracking-tight mb-3">
            Best Website Design and Development{' '}
            <span className="text-gradient-blue">Company in Thanjavur</span>
          </h1>
          <p className="text-[clamp(15px,1.8vw,22px)] font-medium text-slate-400 leading-snug tracking-tight mb-6">
            for Modern, Fast &amp; Conversion-Focused Websites
          </p>

          <p className="text-[15px] text-slate-500 leading-[1.85] mb-3 max-w-[820px] mx-auto">
            ARA Discover Marketing is one of the best web design and development companies in
            Thanjavur that creates high-performance, mobile responsive and SEO optimised websites
            for businesses of all sizes. We build digital platforms that drive visitors, improve
            engagement and convert leads to customers.
          </p>
          <p className="text-[14px] text-slate-400 leading-[1.8] mb-9 max-w-[820px] mx-auto">
            As one of the most trusted web development and designing company in Thanjavur we create
            visually stunning, technically strong and strategically designed websites for business growth.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <a
              href="/ARA-Marketing/contact-us"
              className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 text-white
                rounded-full text-sm font-semibold shadow-lg shadow-blue-600/25
                hover:bg-blue-500 transition-all duration-300"
            >
              Take a First Step <ArrowRight size={15} />
            </a>
            <a
              href="#webdev-services"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-blue-200
                text-blue-600 bg-white rounded-full text-sm font-semibold
                hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
            >
              Explore Services <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-10">
            {[
              ['150+', 'Websites Delivered'],
              ['98%',  'Client Satisfaction'],
              ['200%', 'Performance Growth'],
            ].map(([num, label]) => (
              <div key={label} className="flex flex-col items-center">
                <span className="text-[26px] font-bold text-blue-600 leading-tight">{num}</span>
                <span className="text-[12px] text-slate-400 mt-0.5">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1&h=1&fit=crop&auto=format&q=10"
          alt="Best Website Design and Development Company in Thanjavur - ARA Discover Marketing"
          width="1" height="1"
          loading="lazy"
          className="absolute opacity-0 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      <div className="relative max-w-[1000px] mx-auto px-4 sm:px-6 md:px-7 pb-20">
        <div
          className="reveal relative bg-white rounded-3xl overflow-hidden"
          style={{
            border: '1.5px solid #e2e8f0',
            boxShadow: '0 24px 80px rgba(37,99,235,0.10), 0 4px 16px rgba(0,0,0,0.06)',
          }}
        >
          <div className="h-1.5 w-full"
            style={{ background: 'linear-gradient(90deg, #1d4ed8, #2563eb, #38bdf8)' }} />

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">

            <div className="flex flex-col items-center justify-center px-8 py-10 gap-3">
              <div className="relative w-[110px] h-[110px]">
                <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#dbeafe" strokeWidth="7" />
                  <circle
                    cx="60" cy="60" r="50" fill="none"
                    stroke="url(#scoreGrad)" strokeWidth="7" strokeLinecap="round"
                    strokeDasharray={`${0.98 * 2 * Math.PI * 50} ${2 * Math.PI * 50}`}
                  />
                  <defs>
                    <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1d4ed8" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span
                    className="text-[32px] font-black leading-none"
                    style={{
                      background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >98</span>
                  <span className="text-[9px] text-slate-400 font-semibold mt-0.5">/ 100</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-[13px] font-bold text-slate-700">Performance Score</p>
                <p className="text-[11px] text-slate-400">Live Audit Result</p>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50
                text-emerald-600 border border-emerald-100 rounded-full text-[10px] font-bold">
                <TrendingUp size={10} /> Excellent
              </span>
            </div>

            <div className="flex flex-col justify-center px-8 py-10 gap-5">
              {[
                { label: 'Page Load Speed', value: '0.8s',  pct: 92, delay: 0.20 },
                { label: 'SEO Score',        value: '98%',  pct: 98, delay: 0.34 },
                { label: 'Mobile Score',     value: '100%', pct: 100, delay: 0.48 },
              ].map(({ label, value, pct, delay }) => (
                <div key={label}>
                  <div className="flex justify-between text-[12px] mb-2">
                    <span className="text-slate-500 font-medium">{label}</span>
                    {value}
                  </div>
                  <div className="h-2 bg-blue-50 rounded-full overflow-hidden">
                    <div style={{
                      height: '100%', width: `${pct}%`, borderRadius: 4,
                      background: 'linear-gradient(90deg, #60a5fa, #2563eb)',
                      animation: `bar-in 0.8s ${delay}s cubic-bezier(0,0,0.2,1) both`,
                    }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col justify-center px-8 py-10 gap-4">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                Device Compatibility
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { label: 'Desktop', color: '#2563eb', icon: Globe2 },
                  { label: 'Mobile',  color: '#0284c7', icon: Smartphone },
                  { label: 'Tablet',  color: '#7c3aed', icon: Smartphone },
                  { label: 'PWA',     color: '#059669', icon: Zap },
                ].map(({ label, color, icon: Icon }) => (
                  <div key={label}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl"
                    style={{ background: color + '0e', border: `1px solid ${color}20` }}>
                    <Icon size={12} style={{ color }} />
                    <span className="text-[11px] font-semibold text-slate-600">{label}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-2 px-3 py-2.5 rounded-xl"
                style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                <CheckCircle size={14} className="text-emerald-500 flex-shrink-0" />
                <span className="text-[11px] font-semibold text-emerald-700">Website Fully Optimized</span>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}
