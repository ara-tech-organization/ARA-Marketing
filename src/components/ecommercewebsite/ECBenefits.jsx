import { Clock, Globe2, RefreshCw, DollarSign, Heart, CheckCircle2, Zap } from 'lucide-react'
import ecBenefitsImg from '../../assets/E-commerce/e2.webp'

const benefits = [
  {
    icon: Clock,
    title: '24/7 Online Selling',
    desc: 'Your store never closes. Capture sales at midnight, weekends, and holidays without any staff intervention.',
    metric: '100%', metricLabel: 'Always Online',
    color: '#2563eb',
  },
  {
    icon: Globe2,
    title: 'Global Customer Reach',
    desc: 'Break geographic limits and sell to customers nationwide — or worldwide — from a single online platform.',
    metric: '190+', metricLabel: 'Countries Reachable',
    color: '#0891b2',
  },
  {
    icon: RefreshCw,
    title: 'Automated Order & Inventory',
    desc: 'Eliminate manual errors with automated stock tracking, order notifications, and fulfilment workflows.',
    metric: '80%', metricLabel: 'Less Manual Work',
    color: '#059669',
  },
  {
    icon: DollarSign,
    title: 'Increased Revenue Opportunities',
    desc: 'Upsell, cross-sell, discount coupons, and abandoned cart recovery — all built into your store by default.',
    metric: '3x', metricLabel: 'Revenue Potential',
    color: '#d97706',
  },
  {
    icon: Heart,
    title: 'Better Customer Engagement',
    desc: 'Loyalty programmes, personalised recommendations, and review systems that build lasting customer relationships.',
    metric: '60%', metricLabel: 'Repeat Purchase Rate',
    color: '#7c3aed',
  },
]

export default function ECBenefits() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-16 overflow-hidden bg-white">

      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.04) 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }} />
      <div className="hidden sm:block absolute -top-20 -right-20 w-[320px] h-[320px] rounded-full border border-blue-100/50 pointer-events-none animate-[spin_34s_linear_infinite]" />
      <div className="hidden sm:block absolute -bottom-16 -left-16 w-[260px] h-[260px] rounded-full border border-sky-100/40 pointer-events-none animate-[spin_28s_linear_infinite_reverse]" />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 text-blue-600 bg-blue-50"
            style={{ border: '1px solid rgba(37,99,235,0.15)' }}>
            <Zap size={10} /> Key Benefits
          </span>
          <h2 className="text-[clamp(21px,3.6vw,45px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
            Benefits of{' '}
            <span style={{ color: '#2563eb' }}>
              E-Commerce Websites
            </span>
          </h2>
          <p className="text-[13.5px] sm:text-[15px] text-slate-500 leading-[1.85] max-w-2xl mx-auto">
            E-commerce websites offer unmatched advantages for modern businesses. Our e-commerce web app development services in Thanjavur enable businesses to manage sales and operations efficiently.
          </p>
        </div>

        {/* ── Benefit strips ── */}
        <div className="reveal space-y-3 mb-10">
          {benefits.map(({ icon: Icon, title, desc, metric, metricLabel, color }, i) => (
            <div key={title}
              className="group flex flex-row items-center gap-5 px-6 py-5 rounded-2xl transition-all duration-300 hover:-translate-x-1"
              style={{ background: '#f8fbff', border: `1.5px solid ${color}12` }}
              onMouseEnter={e => { e.currentTarget.style.background = color + '06'; e.currentTarget.style.borderColor = color + '30'; e.currentTarget.style.boxShadow = `0 8px 28px ${color}12` }}
              onMouseLeave={e => { e.currentTarget.style.background = '#f8fbff'; e.currentTarget.style.borderColor = color + '12'; e.currentTarget.style.boxShadow = 'none' }}>

              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background: `linear-gradient(135deg,${color}16,${color}08)`, border: `1.5px solid ${color}28` }}>
                <Icon size={18} style={{ color }} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-[13px] font-bold text-slate-900 mb-1">{title}</h3>
                <p className="text-[13px] text-slate-500 leading-[1.75]">{desc}</p>
              </div>

              {/* Metric — fixed width, always right */}
              <div className="flex-shrink-0 w-[100px] text-center">
                <p className="text-[22px] font-black leading-tight" style={{ color }}>{metric}</p>
                <p className="text-[10px] text-slate-400 font-semibold mt-0.5">{metricLabel}</p>
              </div>

              {/* Check */}
              <CheckCircle2 size={16} className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ color }} />
            </div>
          ))}
        </div>

        {/* ── Additional content ── */}
        <div className="reveal mb-6 text-center space-y-2">
          <p className="text-[13px] sm:text-[14px] text-slate-600 leading-[1.85]">
            We offer e-commerce platform development in Thanjavur, which helps you to grow your business in the long run.
          </p>
          <p className="text-[13px] sm:text-[14px] text-slate-600 leading-[1.85]">
            We are the best e-commerce web design and development company in Thanjavur, providing secure, scalable, and fast e-commerce systems.
          </p>
        </div>

        {/* ── Image banner ── */}
        <div className="reveal rounded-3xl overflow-hidden relative"
          style={{ boxShadow: '0 24px 80px rgba(37,99,235,0.14)', border: '1.5px solid #dbeafe' }}>
          <img
            src={ecBenefitsImg}
            alt="E-commerce web design and development company in Thanjavur — ARA Discover Marketing"
            loading="lazy"
            className="w-full object-cover hover:scale-[1.02] transition-transform duration-[1.5s]"
            style={{ height: 220 }}
          />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(90deg, rgba(30,58,138,0.90) 0%, rgba(30,58,138,0.60) 45%, rgba(30,58,138,0.15) 100%)' }} />
          <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-14">
            <p className="text-[10px] font-black uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.55)' }}>
              ARA Discover Marketing
            </p>
            <h3 className="text-[clamp(17px,2.7vw,31px)] font-bold text-white leading-[1.2] mb-4 max-w-lg">
              The Best E-Commerce Web Design &amp; Development Company in Thanjavur
            </h3>
            <p className="text-[13px] max-w-md leading-[1.7]" style={{ color: 'rgba(255,255,255,0.70)' }}>
              Delivering secure, scalable, and fast e-commerce systems that help businesses grow their revenue sustainably.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
