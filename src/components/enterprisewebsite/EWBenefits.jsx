import { Cpu, TrendingUp, ShieldCheck, Paintbrush2, ShoppingBag, Settings2, Zap } from 'lucide-react'

const benefits = [
  {
    icon: Cpu,
    title: 'AI-Integrated Websites',
    body: 'Seamless AI integration delivers intelligent user experiences — personalised content, predictive analytics, and smart automation.',
    color: '#7c3aed',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=400&fit=crop&auto=format&q=80',
    large: true,
  },
  {
    icon: TrendingUp,
    title: 'Traffic Growth Engine',
    body: 'SEO-optimised, high-performance architecture focused on increasing enterprise traffic and conversion rates.',
    color: '#2563eb',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-Grade Security',
    body: 'Industry-leading SSL, WAF, GDPR compliance and regular security audits protect your sensitive business data.',
    color: '#059669',
  },
  {
    icon: Paintbrush2,
    title: 'Brand-Aligned Design',
    body: 'Customised design that aligns with your brand identity, business requirements, and user expectations.',
    color: '#f59e0b',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=280&fit=crop&auto=format&q=80',
  },
  {
    icon: ShoppingBag,
    title: 'Enterprise eCommerce',
    body: 'Robust eCommerce development in Thanjavur — multi-currency, multi-language, ERP-integrated global stores.',
    color: '#0891b2',
  },
  {
    icon: Settings2,
    title: 'WordPress CMS Management',
    body: 'Enterprise WordPress development services in Thanjavur for effortless website management without technical dependency.',
    color: '#2563eb',
  },
]

function BentoCard({ icon: Icon, title, body, color, img, large = false }) {
  return (
    <div
      className="group relative rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 cursor-default bg-white"
      style={{ border: '1.5px solid #e2e8f0', boxShadow: '0 4px 18px rgba(0,0,0,0.05)', minHeight: large ? 220 : 'auto' }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = `0 18px 44px ${color}1a`
        e.currentTarget.style.borderColor = `${color}45`
        e.currentTarget.style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 4px 18px rgba(0,0,0,0.05)'
        e.currentTarget.style.borderColor = '#e2e8f0'
        e.currentTarget.style.transform = 'none'
      }}>

      {img && (
        <div className="absolute inset-0">
          <img src={img} alt={title} loading="lazy"
            className="w-full h-full object-cover opacity-[0.12] group-hover:opacity-[0.20] transition-opacity duration-500" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg,#ffffff 25%,rgba(255,255,255,0.82) 100%)' }} />
        </div>
      )}

      <div className="relative p-4 sm:p-5 lg:p-6 h-full flex flex-col">
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 flex-shrink-0 transition-all duration-300 group-hover:scale-110"
          style={{ background: `${color}14`, border: `1px solid ${color}28` }}>
          <Icon size={17} style={{ color }} />
        </div>
        <h3 className="text-[13px] sm:text-[14px] lg:text-[15px] font-bold text-slate-800 mb-2 sm:mb-2.5 leading-snug">{title}</h3>
        <p className="text-[11.5px] sm:text-[12.5px] lg:text-[13px] text-slate-500 leading-[1.78] flex-1">{body}</p>

        {/* Bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
          style={{ background: `linear-gradient(90deg,${color},${color}50)` }} />
      </div>
    </div>
  )
}

export default function EWBenefits() {
  const [large, ...rest] = benefits

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden"
      style={{ background: 'linear-gradient(170deg,#f4f8ff 0%,#eef4ff 60%,#f8faff 100%)' }}>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.045) 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-14 reveal">
          <span className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-4 sm:mb-5 text-blue-600 bg-blue-50"
            style={{ border: '1px solid rgba(37,99,235,0.15)' }}>
            <Zap size={9} /> Core Benefits
          </span>
          <h2 className="text-[clamp(20px,4vw,44px)] font-bold text-slate-900 leading-[1.10] tracking-tight mb-3 sm:mb-4">
            Benefits of{' '}
            <span style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Enterprise Website
            </span>{' '}
            Design &amp; Development
          </h2>
          <p className="text-[12.5px] sm:text-[14px] lg:text-[15px] text-slate-500 leading-[1.85] max-w-2xl mx-auto px-2 sm:px-0">
            Partnering with Ara Discover Marketing ensures your enterprise gets a future-ready digital platform built for performance, security, and scale.
          </p>
        </div>

        {/* ── Bento layout ── */}
        <div className="reveal flex flex-col gap-3 sm:gap-4">

          {/* Row 1: large card + 2 small (stack on xs/sm, side-by-side on lg) */}
          <div className="flex flex-col lg:flex-row gap-3 sm:gap-4">
            {/* Large hero card */}
            <div className="w-full lg:w-[40%]">
              <BentoCard {...large} large />
            </div>
            {/* 2 small cards — 1col on xs, 2col on sm+, col on lg */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
              {rest.slice(0, 2).map(b => <BentoCard key={b.title} {...b} />)}
            </div>
          </div>

          {/* Row 2: 3 equal cards — 1col xs, 2col sm/md, 3col lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {rest.slice(2).map(b => <BentoCard key={b.title} {...b} />)}
          </div>

        </div>
      </div>
    </section>
  )
}
