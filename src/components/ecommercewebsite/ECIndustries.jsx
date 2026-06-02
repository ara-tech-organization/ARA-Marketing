import { Shirt, Cpu, ShoppingBasket, Sofa, Store, TrendingUp, ArrowRight, Award } from 'lucide-react'

const industries = [
  {
    icon: Shirt,
    label: 'Fashion & Clothing',
    desc: 'Size guides, lookbooks, and variant filters that drive conversions for apparel brands.',
    metric: '3x Sales Growth',
    color: '#2563eb',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=260&fit=crop&auto=format&q=75',
  },
  {
    icon: Cpu,
    label: 'Electronics & Gadgets',
    desc: 'Detailed product specs, comparison tables, and quick-checkout flows for tech stores.',
    metric: '45% More Orders',
    color: '#0891b2',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=260&fit=crop&auto=format&q=75',
  },
  {
    icon: ShoppingBasket,
    label: 'Grocery & Delivery',
    desc: 'Real-time inventory, slot-based delivery scheduling, and instant reorder features.',
    metric: '60% Repeat Orders',
    color: '#059669',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=260&fit=crop&auto=format&q=75',
  },
  {
    icon: Sofa,
    label: 'Furniture & Decor',
    desc: 'AR previews, room-setup visualisers, and large-item shipping calculators.',
    metric: '28% Higher AOV',
    color: '#d97706',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=260&fit=crop&auto=format&q=75',
  },
  {
    icon: Store,
    label: 'Multi-Vendor Marketplace',
    desc: 'Seller dashboards, commission tracking, and unified catalogue management at scale.',
    metric: '200+ Vendors',
    color: '#7c3aed',
    image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=400&h=260&fit=crop&auto=format&q=75',
  },
]

export default function ECIndustries() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #f0f7ff 0%, #eff6ff 55%, #e0f2fe 100%)' }}>

      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.06) 1.5px, transparent 1.5px)', backgroundSize: '34px 34px' }} />
      <div className="hidden sm:block absolute -top-20 -left-20 w-[360px] h-[360px] rounded-full border border-blue-200/30 pointer-events-none animate-[spin_36s_linear_infinite]" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 65%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 text-blue-600 bg-white/80 shadow-sm"
            style={{ border: '1px solid rgba(37,99,235,0.18)' }}>
            <Award size={10} /> Success Stories
          </span>
          <h2 className="text-[clamp(22px,4vw,46px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
            E-Commerce Success Stories{' '}
            <span style={{ color: '#2563eb' }}>
              That Drive Results
            </span>
          </h2>
          <p className="text-[13.5px] sm:text-[15px] text-slate-500 leading-[1.85] max-w-2xl mx-auto">
            As one of the best e-commerce development agencies in Thanjavur, we have delivered solutions across multiple industries — translating into real sales and sustainable business growth.
          </p>
        </div>

        {/* ── Industry cards — top 3 then bottom 2 centred ── */}
        <div className="reveal mb-10 sm:mb-12">
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            {industries.slice(0, 3).map(({ icon: Icon, label, desc, metric, color, image }, i) => (
              <div key={label}
                className={`group flex-1 rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 delay-${i + 1}`}
                style={{ boxShadow: '0 4px 20px rgba(37,99,235,0.07)', border: '1.5px solid rgba(255,255,255,0.95)' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 20px 50px ${color}20`; e.currentTarget.style.borderColor = color + '35' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.07)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.95)' }}>

                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: 160 }}>
                  <img src={image} alt={label} loading="lazy"
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
                  <div className="absolute inset-0"
                    style={{ background: `linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.55) 100%)` }} />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                      style={{ background: color, boxShadow: `0 4px 10px ${color}50` }}>
                      <Icon size={13} className="text-white" />
                    </div>
                    <span className="text-[11px] font-bold text-white">{label}</span>
                  </div>
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full"
                    style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)' }}>
                    <TrendingUp size={9} style={{ color }} />
                    <span className="text-[9px] font-bold text-white">{metric}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 bg-white">
                  <p className="text-[12.5px] text-slate-500 leading-[1.75] mb-3">{desc}</p>
                  <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowRight size={11} style={{ color }} />
                    <span className="text-[11px] font-semibold" style={{ color }}>View e-commerce solutions</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:max-w-[66%] sm:mx-auto">
            {industries.slice(3).map(({ icon: Icon, label, desc, metric, color, image }, i) => (
              <div key={label}
                className={`group flex-1 rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 delay-${i + 4}`}
                style={{ boxShadow: '0 4px 20px rgba(37,99,235,0.07)', border: '1.5px solid rgba(255,255,255,0.95)' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 20px 50px ${color}20`; e.currentTarget.style.borderColor = color + '35' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.07)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.95)' }}>
                <div className="relative overflow-hidden" style={{ height: 160 }}>
                  <img src={image} alt={label} loading="lazy"
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
                  <div className="absolute inset-0"
                    style={{ background: `linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.55) 100%)` }} />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                      style={{ background: color, boxShadow: `0 4px 10px ${color}50` }}>
                      <Icon size={13} className="text-white" />
                    </div>
                    <span className="text-[11px] font-bold text-white">{label}</span>
                  </div>
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full"
                    style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)' }}>
                    <TrendingUp size={9} style={{ color }} />
                    <span className="text-[9px] font-bold text-white">{metric}</span>
                  </div>
                </div>
                <div className="p-5 bg-white">
                  <p className="text-[12.5px] text-slate-500 leading-[1.75] mb-3">{desc}</p>
                  <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowRight size={11} style={{ color }} />
                    <span className="text-[11px] font-semibold" style={{ color }}>View e-commerce solutions</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom tag */}
        <div className="reveal text-center space-y-2">
          <p className="text-[13px] text-slate-500 leading-[1.85]">
            We are one of the best e-commerce development agencies in Thanjavur, focused on building online stores that translate to real sales and business growth.
          </p>
          <p className="text-[13px] text-slate-500 leading-[1.85]">
            We are also known as the best e-commerce web design &amp; development services in Thanjavur that provide visually appealing and high-performing e-commerce websites.
          </p>
          <p className="text-[13px] text-slate-500 leading-[1.85]">
            We help businesses scale their operations efficiently with e-commerce platform development in Thanjavur.
          </p>
        </div>

      </div>
    </section>
  )
}
