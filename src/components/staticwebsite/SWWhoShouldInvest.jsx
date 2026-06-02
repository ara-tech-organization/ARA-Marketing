import { Building2, Briefcase, GraduationCap, Wrench, ArrowRight, Target } from 'lucide-react'

const audiences = [
  {
    icon: Building2,
    title: 'Local Businesses & Startups',
    desc: 'Establish a strong digital footprint fast. A static website gives your local business instant credibility, visibility, and new customer reach in Thanjavur and beyond.',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=600&h=360&fit=crop&auto=format&q=80',
    color: '#0891b2',
    tag: 'Most Popular',
  },
  {
    icon: Briefcase,
    title: 'Portfolio Websites for Professionals',
    desc: 'Designers, photographers, architects, and freelancers — showcase your work with a blazing-fast portfolio site that leaves a lasting impression on every visitor.',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=360&fit=crop&auto=format&q=80',
    color: '#2563eb',
    tag: 'Professionals',
  },
  {
    icon: GraduationCap,
    title: 'Educational Institutions',
    desc: 'Schools, colleges, and coaching centers need a reliable, low-maintenance web presence. Our static sites deliver information efficiently with zero downtime.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=360&fit=crop&auto=format&q=80',
    color: '#7c3aed',
    tag: 'Institutions',
  },
  {
    icon: Wrench,
    title: 'Small Service-Based Companies',
    desc: 'Plumbers, electricians, consultants, salons — a professional website builds trust with local customers and generates leads around the clock, without ongoing costs.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=360&fit=crop&auto=format&q=80',
    color: '#059669',
    tag: 'Service Providers',
  },
]

export default function SWWhoShouldInvest() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden" style={{ background: '#f8fafc' }}>
      {/* Background decorations */}
      <div
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(8,145,178,0.06) 0%, transparent 65%)' }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(8,145,178,0.08)', color: '#0891b2', border: '1px solid rgba(8,145,178,0.2)' }}
          >
            <Target size={11} /> Who Should Invest
          </span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Who Should Invest in a{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #0891b2, #2563eb)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Static Website?
            </span>
          </h2>
          <p className="text-[15px] text-slate-500 max-w-2xl mx-auto leading-[1.8]">
            Static websites are ideal for businesses that need speed, simplicity, and a strong online presence. If you want to build a static website in Thanjavur, this solution is perfect for you.
          </p>
        </div>

        {/* Bento-style layout: top 2 wide + bottom 2 wide */}
        <div className="flex flex-col gap-5">

          {/* Row 1: two equal cards */}
          <div className="flex flex-col md:flex-row gap-5">
            {audiences.slice(0, 2).map(({ icon: Icon, title, desc, image, color, tag }) => (
              <div
                key={title}
                className="flex-1 relative rounded-3xl overflow-hidden group cursor-default reveal"
                style={{ minHeight: '300px' }}
              >
                {/* Background image */}
                <img
                  src={image}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(160deg, rgba(3,11,24,0.72) 0%, ${color}55 100%)` }}
                />

                {/* Content */}
                <div className="relative p-5 sm:p-8 h-full flex flex-col justify-between" style={{ minHeight: '300px' }}>
                  <div className="flex items-center justify-between">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ background: `${color}30`, border: `1px solid ${color}50`, backdropFilter: 'blur(8px)' }}
                    >
                      <Icon size={20} style={{ color: 'white' }} />
                    </div>
                    <span
                      className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white"
                      style={{ background: `${color}55`, border: `1px solid ${color}60`, backdropFilter: 'blur(4px)' }}
                    >
                      {tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-[19px] font-bold text-white mb-3 leading-snug">{title}</h3>
                    <p className="text-[13px] leading-[1.75]" style={{ color: 'rgba(255,255,255,0.78)' }}>{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: two equal cards */}
          <div className="flex flex-col md:flex-row gap-5">
            {audiences.slice(2).map(({ icon: Icon, title, desc, image, color, tag }) => (
              <div
                key={title}
                className="flex-1 relative rounded-3xl overflow-hidden group cursor-default reveal"
                style={{ minHeight: '280px' }}
              >
                <img
                  src={image}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(160deg, rgba(3,11,24,0.72) 0%, ${color}55 100%)` }}
                />
                <div className="relative p-5 sm:p-8 h-full flex flex-col justify-between" style={{ minHeight: '280px' }}>
                  <div className="flex items-center justify-between">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ background: `${color}30`, border: `1px solid ${color}50`, backdropFilter: 'blur(8px)' }}
                    >
                      <Icon size={20} style={{ color: 'white' }} />
                    </div>
                    <span
                      className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white"
                      style={{ background: `${color}55`, border: `1px solid ${color}60`, backdropFilter: 'blur(4px)' }}
                    >
                      {tag}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[19px] font-bold text-white mb-3 leading-snug">{title}</h3>
                    <p className="text-[13px] leading-[1.75]" style={{ color: 'rgba(255,255,255,0.78)' }}>{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12 reveal">
          <p className="text-[14.5px] text-slate-600 max-w-2xl mx-auto leading-[1.85] mb-6">
            Choose our static web page development in Thanjavur and get a cost-effective solution that delivers long-term value for your business.
          </p>
          <a
            href="/ARA-Marketing/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[13.5px] font-semibold text-white transition-all duration-300 hover:scale-[1.03]"
            style={{ background: 'linear-gradient(135deg, #2563eb, #1d4ed8)' }}
          >
            Start Your Project Today <ArrowRight size={15} />
          </a>
          <p className="text-[13px] text-slate-500 mt-4 max-w-md mx-auto">
            We will help you launch your digital identity with a high-performance static website tailored to your business goals.
          </p>
        </div>

      </div>
    </section>
  )
}
