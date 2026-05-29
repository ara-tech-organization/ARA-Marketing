import { Target, Palette, Zap, TrendingUp, Activity, BarChart2, Layers } from 'lucide-react'

const reasons = [
  {
    icon: Target,
    title: 'Platform-specific marketing strategies',
    desc: 'Custom marketing plans tailored for each platform.',
  },
  {
    icon: Palette,
    title: 'Creative ad campaigns & visual branding',
    desc: 'Visually stunning ad concepts to elevate your brand.',
  },
  {
    icon: Zap,
    title: 'AI-driven audience targeting',
    desc: 'Smart, AI-powered systems to find and reach your customers.',
  },
  {
    icon: TrendingUp,
    title: 'Organic & paid social media growth',
    desc: 'A strategic balance of organic reach and paid promotion.',
  },
  {
    icon: Activity,
    title: 'Real-time campaign monitoring',
    desc: 'Continuous tracking to optimize performance and maximize ROI.',
  },
  {
    icon: BarChart2,
    title: 'Transparent reporting & analytics',
    desc: 'Clear, detailed reports with honest campaign insights.',
  },
]

export default function SMMWhyUs() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ background: 'linear-gradient(180deg, #f8faff 0%, #eff6ff 100%)' }}
    >
      {/* Full-section dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #93c5fd 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.28,
        }}
      />

      {/* Soft colour wash — top-right */}
      <div
        className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
        style={{ background: 'radial-gradient(circle at top right, rgba(191,219,254,0.5) 0%, transparent 70%)' }}
      />

      {/* Soft colour wash — bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-72 h-72 pointer-events-none"
        style={{ background: 'radial-gradient(circle at bottom left, rgba(186,230,255,0.45) 0%, transparent 70%)' }}
      />

      {/* Wave top */}
      <svg className="absolute top-0 left-0 w-full pointer-events-none" viewBox="0 0 1200 60" preserveAspectRatio="none" style={{ height: 60 }}>
        <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,0 L0,0 Z"
          fill="rgba(191,219,254,0.35)" />
        <path d="M0,40 C200,70 400,10 600,40 C800,70 1000,10 1200,40 L1200,0 L0,0 Z"
          fill="rgba(219,234,254,0.25)" />
      </svg>

      {/* Wave bottom */}
      <svg className="absolute bottom-0 left-0 w-full pointer-events-none" viewBox="0 0 1200 60" preserveAspectRatio="none" style={{ height: 60 }}>
        <path d="M0,30 C200,0 400,60 600,30 C800,0 1000,60 1200,30 L1200,60 L0,60 Z"
          fill="rgba(191,219,254,0.35)" />
        <path d="M0,20 C200,-10 400,50 600,20 C800,-10 1000,50 1200,20 L1200,60 L0,60 Z"
          fill="rgba(219,234,254,0.25)" />
      </svg>

      {/* Corner ring — top-left */}
      <div
        className="absolute -top-10 -left-10 w-52 h-52 rounded-full pointer-events-none"
        style={{ border: '2px solid rgba(147,197,253,0.3)' }}
      />
      <div
        className="absolute -top-4 -left-4 w-36 h-36 rounded-full pointer-events-none"
        style={{ border: '1.5px solid rgba(147,197,253,0.2)' }}
      />

      {/* Corner ring — bottom-right */}
      <div
        className="absolute -bottom-10 -right-10 w-52 h-52 rounded-full pointer-events-none"
        style={{ border: '2px solid rgba(96,165,250,0.25)' }}
      />
      <div
        className="absolute -bottom-4 -right-4 w-36 h-36 rounded-full pointer-events-none"
        style={{ border: '1.5px solid rgba(96,165,250,0.18)' }}
      />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-10 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 shadow-sm">
            <Layers size={11} /> Why Choose Us
          </span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Why Do Businesses Choose Our{' '}
            <span className="text-gradient-blue">Social Media Marketing</span> Expertise?
          </h2>
          <p className="text-[15px] text-slate-500 leading-relaxed max-w-3xl mx-auto mb-6">
            We focus on Engagement, Creativity, and Measurable Growth. Businesses trust Ara Discover Marketing. We are one of the best social media service provider in Thanjavur, creating custom campaigns to match business goals and consumer behaviour.
          </p>
          <p className="text-[14px] font-bold text-slate-700 tracking-wide uppercase mb-2">
            Why choose our SMM services:
          </p>
        </div>

        {/* Banner image */}
        <div className="reveal rounded-3xl overflow-hidden mb-14" style={{ height: 260 }}>
          <img
            src="https://images.unsplash.com/photo-1776248783518-400b6d0da64c?w=1200&h=260&fit=crop&auto=format&q=80"
            alt="Best Social Media Marketing Agency in Thanjavur - Why Choose Ara Discover Marketing"
            loading="lazy"
            width="1200"
            height="260"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`reveal delay-${(i % 4) + 1} svc-card-top relative bg-white border border-blue-50
                rounded-2xl p-7 group transition-all duration-300
                hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-1.5`}
            >
              <div
                className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center
                  text-blue-600 mb-4 transition-all duration-300
                  group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/25"
              >
                <Icon size={22} />
              </div>
              <h3 className="text-[15px] font-bold text-slate-800 mb-2">{title}</h3>
              <p className="text-[13px] text-slate-500 leading-[1.75]">{desc}</p>
            </div>
          ))}
        </div>

        {/* Footer text */}
        <div className="text-center reveal max-w-3xl mx-auto">
          <p className="text-[15px] text-slate-600 leading-relaxed font-medium">
            With our expertise in social media advertising services in Thanjavur, we help businesses in visibility, customer engagement, and lead generation through strategic social campaigns.
          </p>
        </div>

      </div>
    </section>
  )
}
