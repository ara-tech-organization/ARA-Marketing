import { ShoppingCart, GraduationCap, Building2, User, Wrench, ArrowUpRight, Trophy } from 'lucide-react'

const industries = [
  {
    icon: ShoppingCart,
    title: 'E-Commerce Stores',
    desc: 'WooCommerce-powered stores with secure checkout, product management, and seamless payment gateways.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=340&fit=crop&auto=format&q=80',
    stat: '80+', statLabel: 'Stores Launched',
    color: '#2563eb',
  },
  {
    icon: GraduationCap,
    title: 'Educational Platforms',
    desc: 'LMS-integrated WordPress platforms for online learning, course management, and student portals.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=340&fit=crop&auto=format&q=80',
    stat: '30+', statLabel: 'Ed-Tech Sites',
    color: '#2563eb',
  },
  {
    icon: Building2,
    title: 'Corporate Websites',
    desc: 'Professional corporate WordPress sites with custom page builders, multilingual support, and CRM integration.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=340&fit=crop&auto=format&q=80',
    stat: '50+', statLabel: 'Corporates Served',
    color: '#1d4ed8',
  },
  {
    icon: User,
    title: 'Portfolio Websites',
    desc: 'Stunning portfolio showcases for creatives, photographers, designers, and freelancers to win more clients.',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=500&h=340&fit=crop&auto=format&q=80',
    stat: '40+', statLabel: 'Portfolios Built',
    color: '#3b82f6',
  },
  {
    icon: Wrench,
    title: 'Service Businesses',
    desc: 'Lead-generating service websites with appointment booking, testimonials, and inquiry management.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&h=340&fit=crop&auto=format&q=80',
    stat: '60+', statLabel: 'Business Sites',
    color: '#1d4ed8',
  },
]

export default function CMSPortfolio() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 65%)' }} />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 reveal">
          <div>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
              style={{ background: 'rgba(37,99,235,0.08)', color: '#1d4ed8', border: '1px solid rgba(37,99,235,0.2)' }}
            >
              <Trophy size={11} /> Our Success Stories
            </span>
            <h2 className="text-[clamp(24px,3vw,44px)] font-bold text-slate-900 leading-[1.1] tracking-tight">
              WordPress Websites{' '}
              <span style={{ background: 'linear-gradient(135deg, #1d4ed8, #2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Across Industries
              </span>
            </h2>
          </div>
          <p className="text-[14px] text-slate-500 leading-[1.75] max-w-sm lg:text-right">
            We have delivered high-quality WordPress websites for businesses across diverse sectors in Thanjavur and beyond.
          </p>
        </div>

        {/* Asymmetric layout: large first card + 4 smaller cards */}
        <div className="reveal flex flex-col gap-5">

          {/* Row 1: large featured card */}
          <div className="relative rounded-3xl overflow-hidden group cursor-pointer"
            style={{ height: 320, boxShadow: '0 16px 48px rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.1)' }}>
            <img
              src={industries[0].image}
              alt={`${industries[0].title} — WordPress Development Thanjavur`}
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[1.2s]"
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, rgba(3,12,9,0.75) 0%, rgba(37,99,235,0.2) 100%)' }} />

            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <div className="flex items-end justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(37,99,235,0.25)', backdropFilter: 'blur(8px)', border: '1px solid rgba(37,99,235,0.4)' }}>
                      <ShoppingCart size={16} style={{ color: '#60a5fa' }} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-300">Featured Industry</span>
                  </div>
                  <h3 className="text-[22px] font-bold text-white mb-2">{industries[0].title}</h3>
                  <p className="text-[13px] leading-[1.65] max-w-xl" style={{ color: 'rgba(255,255,255,0.7)' }}>{industries[0].desc}</p>
                </div>
                <div className="hidden sm:flex flex-col items-end flex-shrink-0 ml-6">
                  <span className="text-[36px] font-black leading-tight" style={{ color: '#60a5fa' }}>{industries[0].stat}</span>
                  <span className="text-[11px] text-white/50">{industries[0].statLabel}</span>
                </div>
              </div>
            </div>

            <div className="absolute top-5 right-5 w-10 h-10 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
              style={{ background: 'rgba(37,99,235,0.3)', backdropFilter: 'blur(8px)' }}>
              <ArrowUpRight size={17} style={{ color: '#60a5fa' }} />
            </div>
          </div>

          {/* Row 2: 4 smaller cards — 1-col xs, 2-col sm/md, 4-col lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.slice(1).map(({ icon: Icon, title, desc, image, stat, statLabel, color }) => (
              <div key={title} className="relative rounded-2xl overflow-hidden group cursor-pointer"
                style={{ minHeight: 220, boxShadow: '0 8px 32px rgba(0,0,0,0.08)', border: '1px solid #f1f5f9' }}>
                <img
                  src={image}
                  alt={`${title} — WordPress Website Thanjavur`}
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[1.2s]"
                  loading="lazy"
                />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.72) 100%)' }} />

                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center mb-2.5 flex-shrink-0"
                    style={{ background: `${color}25`, backdropFilter: 'blur(8px)', border: `1px solid ${color}50` }}>
                    <Icon size={14} style={{ color: '#fff' }} />
                  </div>
                  <h3 className="text-[14px] font-bold text-white mb-1 leading-snug">{title}</h3>
                  <p className="text-[11px] leading-[1.6] mb-2" style={{ color: 'rgba(255,255,255,0.65)' }}>{desc}</p>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[16px] font-black" style={{ color }}>{stat}</span>
                    <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.5)' }}>{statLabel}</span>
                  </div>
                </div>

                <div className="absolute top-3 right-3 w-8 h-8 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ background: `${color}30`, backdropFilter: 'blur(8px)' }}>
                  <ArrowUpRight size={13} className="text-white" />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom trust strip */}
        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-6 pt-8"
          style={{ borderTop: '1px solid #f1f5f9' }}>
          {[
            { val: '200+', lbl: 'WordPress Sites Delivered' },
            { val: '98%', lbl: 'Client Satisfaction Rate' },
            { val: '5★', lbl: 'Average Client Rating' },
          ].map(({ val, lbl }) => (
            <div key={lbl} className="text-center px-6">
              <p className="text-[26px] font-black text-slate-800 leading-tight">{val}</p>
              <p className="text-[11.5px] text-slate-400 font-medium mt-0.5">{lbl}</p>
            </div>
          ))}
        </div>

        {/* SEO keyword paragraph */}
        <div className="reveal mt-8 text-center max-w-3xl mx-auto">
          <p className="text-[13px] text-slate-400 leading-[1.85]">
            We are one of the <strong className="text-slate-500 font-semibold">best WordPress development companies in Thanjavur</strong> for our consistent delivery and client satisfaction. Our <strong className="text-slate-500 font-semibold">cms website development services in Thanjavur</strong> have helped businesses improve their online visibility and customer engagement across industries.
          </p>
        </div>

      </div>
    </section>
  )
}

