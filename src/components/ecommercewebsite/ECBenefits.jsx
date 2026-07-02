import { Clock, Globe2, RefreshCw, DollarSign, Heart, Zap, ArrowRight } from 'lucide-react'
import ecBenefitsImg from '../../assets/E-commerce/e2.webp'

const benefits = [
  {
    icon: Clock,
    title: '24/7 Online Selling',
    desc: 'Your store never closes. Capture sales at midnight, weekends, and holidays without any staff intervention.',
    metric: '100%', metricLabel: 'Always Online',
    color: '#2563eb', grad: 'linear-gradient(135deg,#1e40af,#2563eb)', border: '#bfdbfe',
  },
  {
    icon: Globe2,
    title: 'Global Customer Reach',
    desc: 'Break geographic limits and sell to customers nationwide — or worldwide — from a single online platform.',
    metric: '190+', metricLabel: 'Countries Reachable',
    color: '#0ea5e9', grad: 'linear-gradient(135deg,#0ea5e9,#0284c7)', border: '#bae6fd',
  },
  {
    icon: RefreshCw,
    title: 'Automated Order & Inventory',
    desc: 'Eliminate manual errors with automated stock tracking, order notifications, and fulfilment workflows.',
    metric: '80%', metricLabel: 'Less Manual Work',
    color: '#2563eb', grad: 'linear-gradient(135deg,#2563eb,#1d4ed8)', border: '#bfdbfe',
  },
  {
    icon: DollarSign,
    title: 'Increased Revenue Opportunities',
    desc: 'Upsell, cross-sell, discount coupons, and abandoned cart recovery — all built into your store by default to maximise every transaction.',
    metric: '3x', metricLabel: 'Revenue Potential',
    color: '#0ea5e9', grad: 'linear-gradient(135deg,#0ea5e9,#0284c7)', border: '#bae6fd',
    wide: true,
  },
  {
    icon: Heart,
    title: 'Better Customer Engagement',
    desc: 'Loyalty programmes, personalised recommendations, and review systems that build lasting customer relationships.',
    metric: '60%', metricLabel: 'Repeat Purchase Rate',
    color: '#2563eb', grad: 'linear-gradient(135deg,#2563eb,#1d4ed8)', border: '#bfdbfe',
  },
]

function BenefitCard({ icon: Icon, title, desc, metric, metricLabel, color, grad, border, wide }) {
  return (
    <div
      className={`group bg-white rounded-2xl sm:rounded-3xl overflow-hidden cursor-default transition-all duration-300${wide ? ' sm:col-span-2' : ''}`}
      style={{ border: `1.5px solid ${border}`, boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = `0 20px 50px ${color}1a`
        e.currentTarget.style.borderColor = color + '55'
        e.currentTarget.style.transform = 'translateY(-6px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)'
        e.currentTarget.style.borderColor = border
        e.currentTarget.style.transform = 'none'
      }}
    >
      {/* Gradient top panel */}
      <div className="flex items-center justify-between px-5 sm:px-6 py-5" style={{ background: grad }}>
        <div className={`flex items-center gap-4${wide ? '' : ''}`}>
          <div
            className="rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
            style={{ width: wide ? 48 : 44, height: wide ? 48 : 44, background: 'rgba(255,255,255,0.20)', border: '1.5px solid rgba(255,255,255,0.30)' }}
          >
            <Icon size={wide ? 22 : 19} className="text-white" />
          </div>
          {wide && (
            <p className="text-[14px] sm:text-[15px] font-bold text-white leading-snug hidden sm:block">{title}</p>
          )}
        </div>
        <div className="text-right flex-shrink-0">
          <p className="font-black text-white leading-none" style={{ fontSize: wide ? 44 : 30 }}>{metric}</p>
          <p className="text-[9.5px] font-semibold mt-0.5" style={{ color: 'rgba(255,255,255,0.68)' }}>{metricLabel}</p>
        </div>
      </div>

      {/* Text body */}
      <div className={`px-5 sm:px-6 ${wide ? 'pt-4 pb-5' : 'pt-4 pb-5'}`}>
        {!wide && <h3 className="text-[13.5px] font-bold text-slate-800 mb-2">{title}</h3>}
        <p className="text-[12px] sm:text-[12.5px] text-slate-500 leading-[1.78]">{desc}</p>
      </div>

      {/* Bottom sweep bar on hover */}
      <div
        className="mx-5 sm:mx-6 mb-4 h-[2px] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
        style={{ background: grad }}
      />
    </div>
  )
}

export default function ECBenefits() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #f8faff 0%, #ffffff 50%, #f0f7ff 100%)' }}>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.04) 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }} />

      {/* Orbs */}
      <div className="absolute -top-24 -right-24 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 65%)' }} />
      <div className="absolute -bottom-16 -left-16 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.05) 0%, transparent 65%)' }} />

      {/* Spinning ring */}
      <div className="hidden lg:block absolute -top-16 -right-16 w-[260px] h-[260px] rounded-full pointer-events-none"
        style={{ border: '1.5px solid rgba(37,99,235,0.07)', animation: 'spin 60s linear infinite' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* ── Header ── */}
        <div className="text-center mb-10 sm:mb-12 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 text-blue-600 bg-blue-50"
            style={{ border: '1px solid rgba(37,99,235,0.15)' }}>
            <Zap size={10} /> Key Benefits
          </span>
          <h2 className="text-[clamp(21px,3.4vw,44px)] font-bold text-slate-900 leading-[1.15] tracking-tight mb-3">
            Benefits of{' '}
            <span style={{
              background: 'linear-gradient(135deg,#2563eb,#0ea5e9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              E-Commerce Websites
            </span>
          </h2>
          <p className="text-[14px] text-slate-500 leading-[1.85] max-w-2xl mx-auto">
            E-commerce websites offer unmatched advantages for modern businesses. Our e-commerce web app
            development services in Thanjavur enable businesses to manage sales and operations efficiently.
          </p>
        </div>

        {/* ── Row 1: 3 equal cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 reveal">
          {benefits.slice(0, 3).map(b => <BenefitCard key={b.title} {...b} />)}
        </div>

        {/* ── Row 2: 1 wide (2-col) + 1 regular ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 reveal">
          {benefits.slice(3).map(b => <BenefitCard key={b.title} {...b} />)}
        </div>

        {/* ── Bottom split banner ── */}
        <div className="mt-8 rounded-3xl overflow-hidden flex flex-col sm:flex-row reveal"
          style={{ boxShadow: '0 20px 60px rgba(15,23,42,0.12)', border: '1px solid #e2e8f0' }}>

          {/* Left — dark text panel */}
          <div className="flex flex-col justify-between items-center sm:items-start p-7 sm:p-10 flex-1 text-center sm:text-left"
            style={{ background: 'linear-gradient(145deg, #0d1f3c 0%, #0f2850 100%)', minWidth: 0 }}>

            <span className="inline-flex items-center gap-1.5 self-center sm:self-start text-[9px] font-black uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mb-6"
              style={{ background: 'rgba(37,99,235,0.25)', color: '#93c5fd', border: '1px solid rgba(147,197,253,0.20)' }}>
              ARA Discover Marketing
            </span>

            <div className="flex-1">
              <h3 className="font-bold text-white leading-[1.25] mb-4"
                style={{ fontSize: 'clamp(17px,2.2vw,26px)' }}>
                The Best E-Commerce Web Design &amp; Development Company in Thanjavur
              </h3>
              <p className="text-[12.5px] leading-[1.80] mb-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
                We offer e-commerce platform development in Thanjavur, which helps you to grow your business in the long run.
              </p>
              <p className="text-[12.5px] leading-[1.80]" style={{ color: 'rgba(255,255,255,0.40)' }}>
                We are the best e-commerce web design and development company in Thanjavur, providing secure, scalable, and fast e-commerce systems.
              </p>
            </div>

            <div className="flex gap-6 mt-7 mb-7 justify-center sm:justify-start">
              {[
                { val: '100%', label: 'Secure Checkout' },
                { val: '3x',   label: 'Revenue Growth'  },
              ].map(({ val, label }) => (
                <div key={label}>
                  <div className="text-[26px] font-black leading-none text-white">{val}</div>
                  <div className="text-[9.5px] font-semibold mt-0.5 uppercase tracking-wider"
                    style={{ color: 'rgba(255,255,255,0.35)' }}>{label}</div>
                </div>
              ))}
            </div>

            <a href="/ARA-Marketing/contact-us"
              className="self-center sm:self-start inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-[13px] font-bold transition-all duration-200 hover:opacity-90 hover:gap-3"
              style={{ background: '#2563eb', boxShadow: '0 4px 18px rgba(37,99,235,0.45)' }}>
              Get Started <ArrowRight size={14} />
            </a>
          </div>

          {/* Right — full-cover image */}
          <div className="relative sm:w-[52%] flex-shrink-0 self-stretch" style={{ minHeight: 280 }}>
            <img
              src={ecBenefitsImg}
              alt="E-commerce web design and development company in Thanjavur — ARA Discover Marketing"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 hidden sm:block"
              style={{ background: 'linear-gradient(90deg, rgba(13,31,60,0.45) 0%, transparent 35%)' }} />
          </div>

        </div>

      </div>
    </section>
  )
}
