import { Lightbulb, Target, Award, Zap, RotateCcw, DollarSign, Layers } from 'lucide-react'

const reasons = [
  {
    icon: Lightbulb,
    title: 'Creative & Modern Design Approach',
    desc: 'We combine contemporary design trends with brand strategy to deliver visuals that are fresh, memorable and market-relevant.',
  },
  {
    icon: Target,
    title: 'Industry-Specific Branding Strategies',
    desc: 'Our designs are tailored to your industry, ensuring your brand communicates effectively with your target audience.',
  },
  {
    icon: Award,
    title: 'Experienced Design Professionals',
    desc: 'Our team of skilled designers brings years of expertise in logo design, print media, and digital creative production.',
  },
  {
    icon: Zap,
    title: 'High-Quality Print & Digital Creatives',
    desc: 'Every design is crafted to work flawlessly across both digital platforms and high-resolution print formats.',
  },
  {
    icon: RotateCcw,
    title: 'Fast Delivery & Revision Support',
    desc: 'We deliver designs on time with round-based revision support until you are completely satisfied with the result.',
  },
  {
    icon: DollarSign,
    title: 'Affordable Branding Packages',
    desc: 'Premium branding doesn\'t have to break the bank. Our packages are structured to offer maximum value at every budget.',
  },
]

export default function GDWhyUs() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ background: 'linear-gradient(180deg, #f0f7ff 0%, #e8f3ff 100%)' }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #93c5fd 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.25,
        }}
      />

      {/* Corner rings */}
      <div className="absolute -top-10 -left-10 w-52 h-52 rounded-full pointer-events-none"
        style={{ border: '2px solid rgba(147,197,253,0.3)' }} />
      <div className="absolute -top-4 -left-4 w-36 h-36 rounded-full pointer-events-none"
        style={{ border: '1.5px solid rgba(147,197,253,0.2)' }} />
      <div className="absolute -bottom-10 -right-10 w-52 h-52 rounded-full pointer-events-none"
        style={{ border: '2px solid rgba(96,165,250,0.25)' }} />

      {/* Wave top */}
      <svg className="absolute top-0 left-0 w-full pointer-events-none" viewBox="0 0 1200 60" preserveAspectRatio="none" style={{ height: 60 }}>
        <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,0 L0,0 Z" fill="rgba(191,219,254,0.4)" />
      </svg>
      {/* Wave bottom */}
      <svg className="absolute bottom-0 left-0 w-full pointer-events-none" viewBox="0 0 1200 60" preserveAspectRatio="none" style={{ height: 60 }}>
        <path d="M0,30 C200,0 400,60 600,30 C800,0 1000,60 1200,30 L1200,60 L0,60 Z" fill="rgba(191,219,254,0.4)" />
      </svg>

      <div className="relative max-w-[1200px] mx-auto px-7">

        {/* Header */}
        <div className="text-center mb-10 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 shadow-sm">
            <Layers size={11} /> Why Choose Us
          </span>
          <h2 className="text-[clamp(22px,2.8vw,38px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Why Do Businesses Trust Our{' '}
            <span className="text-gradient-blue">Creative Branding Expertise?</span>
          </h2>
          <p className="text-[15px] text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Businesses choose Ara Discover Marketing because we are the preferred choice for
            creativity, strategy and market understanding to develop impactful branding solutions.
            As one of the best advertisement designs in Thanjavur, we ensure that every design
            reflects your brand identity and business values.
          </p>
        </div>

        {/* Banner image */}
        <div className="reveal rounded-3xl overflow-hidden mb-14" style={{ height: 260 }}>
          <img
            src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=260&fit=crop&auto=format&q=80"
            alt="Best Graphic Design Agencies in Thanjavur - Why Choose Ara Discover Marketing"
            loading="lazy"
            width="1200"
            height="260"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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

      </div>
    </section>
  )
}
