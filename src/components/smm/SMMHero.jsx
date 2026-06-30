import { Share2, TrendingUp, Users, ChevronRight, ArrowRight, ArrowUpRight, Activity } from 'lucide-react'
import smmHeroImg from '../../assets/SMM/m1.webp'

export default function SMMHero() {
  return (
    <section
      className="relative overflow-hidden pt-[72px] min-h-[88vh] flex items-center"
      style={{ background: 'linear-gradient(135deg, #ffffff 0%, #eff6ff 45%, #e0f2fe 100%)' }}
    >
      {/* Decorative orbs */}
      <div
        className="absolute top-16 right-0 w-[650px] h-[650px] rounded-full pointer-events-none animate-orb"
        style={{ background: 'radial-gradient(circle, rgba(219,234,254,0.65) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none animate-orb-rev"
        style={{ background: 'radial-gradient(circle, rgba(224,242,254,0.55) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7 w-full py-20">
        <div className="grid lg:grid-cols-[55%_45%] gap-16 items-center">

          {/* Left Content */}
          <div>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-[13px] text-slate-400 mb-6 animate-hero-enter">
              <a href="/ARA-Marketing/" className="hover:text-blue-600 transition-colors duration-200">Home</a>
              <ChevronRight size={13} className="text-slate-300" />
              <span>Digital Marketing</span>
              <ChevronRight size={13} className="text-slate-300" />
              <span className="text-blue-600 font-medium">Social Media Marketing</span>
            </nav>

            {/* Badge */}
            <div className="animate-hero-d1">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600
                border border-blue-200 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
                <Share2 size={11} /> Social Media Marketing (SMM)
              </span>
            </div>

            {/* H1 */}
            <h1 className="animate-hero-d2 text-[clamp(18px,2.1vw,33px)] font-bold text-slate-900
              leading-[1.12] tracking-tight mb-5">
              Best Social Media Marketing{' '}
              <span className="text-gradient-blue">Services in Thanjavur</span>
            </h1>

            {/* Description */}
            <p className="animate-hero-d3 text-[15px] text-slate-500 leading-[1.85] mb-4 max-w-[620px]">
              ARA Discover Marketing provides the best social media marketing services in Thanjavur, which help businesses to build brand awareness, improve customer engagement, and generate quality leads through result-driven social media strategies. As one of the best social media companies in Thanjavur, we create and optimize high-performance campaigns for startups, local businesses, and emerging brands.
            </p>
            <p className="animate-hero-d3 text-[15px] text-slate-500 leading-[1.85] mb-8 max-w-[620px]">
              From organic building to paid advertising campaigns, our dedicated social media team specializes in platform-specific strategies that keep businesses ahead in today's competitive digital landscape.
            </p>

            {/* CTAs */}
            <div className="animate-hero-d4 flex flex-wrap gap-3 mb-10">
              <a
                href="/ARA-Marketing/contact-us"
                className="btn-glow inline-flex items-center gap-2 px-6 py-3 text-white
                  rounded-full text-sm font-semibold transition-all duration-300"
              >
                Take a First Step <ArrowRight size={15} />
              </a>
              <a
                href="#smm-services"
                className="inline-flex items-center gap-2 px-6 py-3 border border-blue-200
                  text-blue-600 bg-white/80 rounded-full text-sm font-semibold
                  hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
              >
                Explore Services <ArrowUpRight size={15} />
              </a>
            </div>

            {/* Trust metrics */}
            <div className="animate-hero-d5 flex flex-wrap gap-8">
              {[
                ['200+', 'Campaigns Managed'],
                ['95%', 'Client Satisfaction'],
                ['300%', 'Engagement Growth'],
              ].map(([num, label]) => (
                <div key={label} className="flex flex-col">
                  <span className="text-2xl font-bold text-blue-600 leading-tight">{num}</span>
                  <span className="text-[12px] text-slate-400 mt-0.5">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hidden SEO image — primary keyword */}
          <img
            src={smmHeroImg}
            alt="Best Social Media Marketing Services in Thanjavur - ARA Discover Marketing"
            width="1" height="1"
            loading="lazy"
            className="absolute opacity-0 pointer-events-none"
            aria-hidden="true"
          />

          {/* Right Visual */}
          <div className="animate-hero-visual hidden lg:flex lg:items-stretch">
            <div className="relative w-[420px]">

              {/* Main tall card */}
              <div className="bg-white rounded-3xl border border-blue-100 overflow-hidden flex flex-col"
                style={{ boxShadow: '0 24px 80px rgba(37,99,235,0.13)', minHeight: '520px' }}>

                {/* Hero image banner */}
                <div className="relative h-[220px] flex-shrink-0 overflow-hidden">
                  <img
                    src={smmHeroImg}
                    alt="Social Media Marketing"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0"
                    style={{ background: 'linear-gradient(180deg, rgba(37,99,235,0.18) 0%, rgba(10,26,80,0.55) 100%)' }} />

                  {/* Live badge on image */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5
                    bg-white/90 backdrop-blur-sm rounded-full border border-blue-100 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-bold text-slate-700">Live Campaign</span>
                  </div>

                  {/* Engagement float on image */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl px-3 py-2 border border-blue-100 shadow-sm">
                    <p className="text-[9px] text-slate-400 font-medium">Engagement Rate</p>
                    <p className="text-[15px] font-bold text-blue-600">8.4%</p>
                    <div className="flex items-center gap-1 text-emerald-500 text-[9px] font-semibold">
                      <TrendingUp size={8} /> +2.1% this week
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">

                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      <Share2 size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-bold text-slate-700">Campaign Performance</p>
                      <p className="text-[10px] text-slate-400">Multi-Platform Overview</p>
                    </div>
                    <span className="flex items-center gap-1 px-2.5 py-1
                      bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-full border border-emerald-100">
                      <TrendingUp size={8} /> +300%
                    </span>
                  </div>

                  {/* Bar chart + platform list */}
                  <div className="flex gap-4 flex-1">
                    {/* Vertical bars */}
                    <div className="flex-1 flex items-end gap-1.5" style={{ height: '110px' }}>
                      {[30, 45, 35, 60, 50, 72, 62, 85, 70, 95].map((h, i) => (
                        <div key={i} style={{
                          flex: 1, height: `${h}%`,
                          borderRadius: '4px 4px 0 0',
                          background: i >= 7 ? 'linear-gradient(180deg, #60a5fa, #2563eb)' : '#dbeafe',
                          animation: `bar-in 0.7s ${i * 0.06 + 0.3}s cubic-bezier(0,0,0.2,1) both`,
                        }} />
                      ))}
                    </div>

                    {/* Platform metrics */}
                    <div className="flex flex-col gap-2.5 justify-center w-[120px] flex-shrink-0">
                      {[
                        { label: 'Facebook',  pct: 92, color: '#2563eb' },
                        { label: 'Instagram', pct: 85, color: '#9333ea' },
                        { label: 'LinkedIn',  pct: 74, color: '#0284c7' },
                        { label: 'Pinterest', pct: 60, color: '#dc2626' },
                        { label: 'SMO',       pct: 50, color: '#059669' },
                      ].map(({ label, pct, color }) => (
                        <div key={label} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
                          <span className="text-[10px] text-slate-500 font-medium flex-1">{label}</span>
                          <span className="text-[10px] font-bold" style={{ color }}>{pct}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom stats row */}
                  <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-3 gap-3">
                    {[
                      { label: 'New Followers', value: '+1,247', color: '#2563eb', icon: Users },
                      { label: 'Live Reach',    value: '12.4K',  color: '#7c3aed', icon: Activity },
                      { label: 'This Month',    value: '95%',    color: '#059669', icon: TrendingUp },
                    ].map(({ label, value, color, icon: Icon }) => (
                      <div key={label} className="flex flex-col items-center text-center p-2 rounded-xl"
                        style={{ background: color + '08', border: `1px solid ${color}18` }}>
                        <Icon size={12} style={{ color }} className="mb-1" />
                        <p className="text-[13px] font-bold" style={{ color }}>{value}</p>
                        <p className="text-[9px] text-slate-400 leading-tight">{label}</p>
                      </div>
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
