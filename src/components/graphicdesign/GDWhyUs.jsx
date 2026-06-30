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
    <section className="relative overflow-hidden py-16 bg-white">


      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(147,197,253,0.5), transparent)' }} />
      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(147,197,253,0.5), transparent)' }} />
      {/* Subtle center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(219,234,254,0.35) 0%, transparent 70%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-10 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 shadow-sm">
            <Layers size={11} /> Why Choose Us
          </span>
          <h2 className="text-[clamp(21px,2.5vw,37px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Why Do Businesses Trust Our{' '}
            <span className="text-gradient-blue">Creative Branding Expertise?</span>
          </h2>
          <p className="text-[15px] text-slate-500 leading-relaxed max-w-3xl mx-auto">
            Businesses choose ARA Discover Marketing because we are the preferred choice for
            creativity, strategy and market understanding to develop impactful branding solutions.
            One of the best advertisement design in thanjavur, we ensure that every design
            reflects your brand identity and business values. We are reputed as one of the best graphic design agencies in thanjavur to deliver visually appealing and conversion focused branding materials.
          </p>
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
              <h3 className="text-[14px] font-bold text-slate-800 mb-2">{title}</h3>
              <p className="text-[13px] text-slate-500 leading-[1.75]">{desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-10 reveal">
          <p className="text-[14px] text-slate-500 leading-relaxed max-w-2xl mx-auto">
            We are reputed as one of the best graphic design agencies in thanjavur to deliver visually appealing and conversion focused branding materials.
          </p>
        </div>

      </div>
    </section>
  )
}
