import { Cpu, TrendingUp, ShieldCheck, Paintbrush2, ShoppingBag, Settings2, Zap } from 'lucide-react'

const main = [
  {
    icon: Cpu,
    title: 'AI-Integrated Websites',
    body: 'Seamless AI integration delivers intelligent user experiences — from personalised content to predictive analytics and smart automation.',
    color: '#7c3aed',
    size: 'large',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=400&fit=crop&auto=format&q=80',
  },
  {
    icon: TrendingUp,
    title: 'Traffic Growth Engine',
    body: 'Our enterprise web development services in Thanjavur are focused on increasing traffic through SEO-optimised, high-performance architecture.',
    color: '#2563eb',
    size: 'small',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-Grade Security',
    body: 'Industry-leading security protocols protect sensitive business data — SSL, WAF, GDPR compliance, and regular security audits.',
    color: '#059669',
    size: 'small',
  },
  {
    icon: Paintbrush2,
    title: 'Brand-Aligned Design',
    body: 'Customised design and development that aligns perfectly with your brand identity, business requirements, and user expectations.',
    color: '#f59e0b',
    size: 'small',
  },
  {
    icon: ShoppingBag,
    title: 'Enterprise eCommerce',
    body: 'Robust enterprise eCommerce development in Thanjavur for global reach — multi-currency, multi-language, ERP-integrated stores.',
    color: '#0891b2',
    size: 'small',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=280&fit=crop&auto=format&q=80',
  },
  {
    icon: Settings2,
    title: 'WordPress CMS Management',
    body: 'Efficient enterprise WordPress development services in Thanjavur for easy, scalable website management without technical dependency.',
    color: '#2563eb',
    size: 'small',
  },
]

function BentoCard({ item, className = '' }) {
  const { icon: Icon, title, body, color, img } = item
  return (
    <div
      className={`group relative rounded-3xl overflow-hidden transition-all duration-400 cursor-default ${className}`}
      style={{ border: '1.5px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = `0 20px 48px ${color}1a`
        e.currentTarget.style.borderColor = `${color}45`
        e.currentTarget.style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)'
        e.currentTarget.style.borderColor = '#e2e8f0'
        e.currentTarget.style.transform = 'none'
      }}
    >
      {img && (
        <div className="absolute inset-0">
          <img src={img} alt={title} loading="lazy" className="w-full h-full object-cover opacity-15 group-hover:opacity-22 transition-opacity duration-500" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg,#ffffff 30%,rgba(255,255,255,0.80) 100%)' }} />
        </div>
      )}
      <div className="relative p-6 sm:p-7 h-full flex flex-col">
        <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5 flex-shrink-0 transition-all duration-300 group-hover:scale-110"
          style={{ background: `${color}14`, border: `1px solid ${color}28` }}>
          <Icon size={19} style={{ color }} />
        </div>
        <h3 className="text-[14px] sm:text-[15px] font-bold text-slate-800 mb-3 leading-snug">{title}</h3>
        <p className="text-[12.5px] sm:text-[13px] text-slate-500 leading-[1.80] flex-1">{body}</p>

        {/* Bottom color bar on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
          style={{ background: `linear-gradient(90deg,${color},${color}50)` }} />
      </div>
    </div>
  )
}

export default function EWBenefits() {
  const [largCard, ...smallCards] = main

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ background: 'linear-gradient(170deg,#f4f8ff 0%,#eef4ff 60%,#f8faff 100%)' }}>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.045) 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-12 sm:mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 text-blue-600 bg-blue-50"
            style={{ border: '1px solid rgba(37,99,235,0.15)' }}>
            <Zap size={10} /> Core Benefits
          </span>
          <h2 className="text-[clamp(22px,4vw,46px)] font-bold text-slate-900 leading-[1.10] tracking-tight mb-4">
            Benefits of{' '}
            <span style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Enterprise Website
            </span>
            {' '}Design &amp; Development
          </h2>
          <p className="text-[13.5px] sm:text-[15px] text-slate-500 leading-[1.85] max-w-2xl mx-auto">
            Partnering with Ara Discover Marketing ensures your enterprise gets a future-ready digital platform built for performance, security, and scale.
          </p>
        </div>

        {/* ── Bento Grid ── */}
        <div className="reveal">
          {/* Row 1: 1 large + 2 small */}
          <div className="flex flex-col lg:flex-row gap-5 mb-5">
            <BentoCard item={largCard} className="lg:w-[42%]" />
            <div className="flex flex-col sm:flex-row lg:flex-col gap-5 lg:flex-1">
              {smallCards.slice(0, 2).map(c => <BentoCard key={c.title} item={c} />)}
            </div>
          </div>

          {/* Row 2: 3 equal */}
          <div className="flex flex-col sm:flex-row gap-5">
            {smallCards.slice(2).map(c => <BentoCard key={c.title} item={c} className="flex-1" />)}
          </div>
        </div>

      </div>
    </section>
  )
}
