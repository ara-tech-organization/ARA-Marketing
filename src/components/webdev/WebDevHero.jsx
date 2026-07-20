import { useRef } from 'react'
import {
  Globe2, TrendingUp, Search, Smartphone, ChevronRight,
  ArrowRight, ArrowUpRight, Zap, CheckCircle
} from 'lucide-react'
import CursorSpotlight from '../common/CursorSpotlight'

export default function WebDevHero() {
  const heroRef = useRef(null)

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden pt-[72px]"
      style={{ background: 'linear-gradient(135deg,#0a1a34 0%,#071a36 45%,#0d1b3a 100%)' }}
    >
      {/* Cursor-follow spotlight */}
      <CursorSpotlight
        targetRef={heroRef}
        size={560}
        blur={90}
        blendMode="multiply"
        opacity={0.2}
        background="conic-gradient(from 0deg at 50% 50%, #1e3a8a 0%, #2563eb 25%, #60a5fa 50%, #2563eb 75%, #1e3a8a 100%)"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'var(--brand-gradient-dots)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute top-[72px] left-0 right-0 h-px pointer-events-none"
        style={{ background: 'var(--brand-gradient-line)' }} />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: 'var(--brand-gradient-glow-dark)' }}
      />

      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 md:px-7 pt-16 pb-6">
        <div className="text-center max-w-[1000px] mx-auto animate-hero-enter">
          <nav className="flex items-center justify-center gap-1.5 text-[13px] text-white/40 mb-6">
            <a href="/" className="hover:text-blue-300 transition-colors duration-200">Home</a>
            <ChevronRight size={13} className="text-white/25" />
            <span className="text-blue-300 font-medium">Website Design &amp; Development</span>
          </nav>

          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 text-blue-300
            border border-blue-400/25 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6">
            <Globe2 size={11} /> Website Design &amp; Development
          </span>

          <h1 className="text-[clamp(21px,2.7vw,43px)] font-bold text-white leading-[1.1]
            tracking-tight mb-3">
            Best Website Design and Development{' '}
            <span className="text-gradient-blue">Company in Thanjavur</span>
          </h1>
          <p className="text-[clamp(15px,1.8vw,22px)] font-medium text-white/60 leading-snug tracking-tight mb-6">
            for Modern, Fast &amp; Conversion-Focused Websites
          </p>

          <p className="text-[15px] text-white/70 leading-[1.85] mb-3 max-w-[820px] mx-auto">
            ARA Discover Marketing is one of the best web design and development companies in
            Thanjavur that creates high-performance, mobile responsive and SEO optimised websites
            for businesses of all sizes. We build digital platforms that drive visitors, improve
            engagement and convert leads to customers.
          </p>
          <p className="text-[14px] text-white/55 leading-[1.8] mb-9 max-w-[820px] mx-auto">
            As one of the most trusted web development and designing company in Thanjavur we create
            visually stunning, technically strong and strategically designed websites for business growth.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <a
              href="/contact-us"
              className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 text-white
                rounded-full text-sm font-semibold transition-all duration-300"
            >
              Take a First Step <ArrowRight size={15} />
            </a>
            <a
              href="#webdev-services"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-blue-400/30
                text-blue-300 bg-white/5 rounded-full text-sm font-semibold
                hover:bg-white/10 hover:border-blue-300/50 transition-all duration-300"
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
                <span className="text-[26px] font-bold text-blue-400 leading-tight">{num}</span>
                <span className="text-[12px] text-white/50 mt-0.5">{label}</span>
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
          className="reveal relative rounded-3xl overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1.5px solid rgba(255,255,255,0.14)',
            boxShadow: '0 24px 80px rgba(0,0,0,0.35), 0 4px 16px rgba(0,0,0,0.20)',
          }}
        >
          <div className="h-1.5 w-full"
            style={{ background: 'var(--brand-gradient-soft)' }} />

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">

            <div className="flex flex-col items-center justify-center px-8 py-10 gap-3">
              <div className="relative w-[110px] h-[110px]">
                <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="7" />
                  <circle
                    cx="60" cy="60" r="50" fill="none"
                    stroke="url(#scoreGrad)" strokeWidth="7" strokeLinecap="round"
                    strokeDasharray={`${0.98 * 2 * Math.PI * 50} ${2 * Math.PI * 50}`}
                  />
                  <defs>
                    <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#60a5fa" />
                      <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span
                    className="text-[32px] font-black leading-none text-gradient-blue"
                  >98</span>
                  <span className="text-[9px] text-white/50 font-semibold mt-0.5">/ 100</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-[13px] font-bold text-white">Performance Score</p>
                <p className="text-[11px] text-white/50">Live Audit Result</p>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-500/10
                text-blue-300 border border-blue-400/25 rounded-full text-[10px] font-bold">
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
                    <span className="text-white/60 font-medium">{label}</span>
                    <span className="text-white font-semibold">{value}</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                    <div style={{
                      height: '100%', width: `${pct}%`, borderRadius: 4,
                      background: 'var(--brand-gradient-soft)',
                      animation: `bar-in 0.8s ${delay}s cubic-bezier(0,0,0.2,1) both`,
                    }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col justify-center px-8 py-10 gap-4">
              <p className="text-[11px] font-bold text-white/50 uppercase tracking-widest mb-1">
                Device Compatibility
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { label: 'Desktop', color: '#60a5fa', icon: Globe2 },
                  { label: 'Mobile',  color: '#38bdf8', icon: Smartphone },
                  { label: 'Tablet',  color: '#60a5fa', icon: Smartphone },
                  { label: 'PWA',     color: '#22d3ee', icon: Zap },
                ].map(({ label, color, icon: Icon }) => (
                  <div key={label}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl"
                    style={{ background: color + '14', border: `1px solid ${color}30` }}>
                    <Icon size={12} style={{ color }} />
                    <span className="text-[11px] font-semibold text-white/80">{label}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-2 px-3 py-2.5 rounded-xl"
                style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(96,165,250,0.25)' }}>
                <CheckCircle size={14} className="text-blue-400 flex-shrink-0" />
                <span className="text-[11px] font-semibold text-blue-300">Website Fully Optimized</span>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}
