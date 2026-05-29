import { Building2, ShoppingCart, Globe, BrainCircuit, CheckCircle2 } from 'lucide-react'

const segments = [
  {
    icon: Building2,
    title: 'Large-Scale Businesses',
    desc: 'Expanding their online footprint with secure, scalable infrastructure that handles enterprise-level traffic and complex workflows.',
    points: ['Multi-department portals', 'Role-based access control', 'Global CDN delivery'],
    color: '#2563eb',
    lightBg: '#eff6ff',
    borderColor: '#bfdbfe',
  },
  {
    icon: ShoppingCart,
    title: 'Enterprise eCommerce',
    desc: 'Corporations seeking enterprise eCommerce development in Thanjavur for powerful, feature-rich online sales channels.',
    points: ['Enterprise eCommerce development in Thanjavur', 'Secure payment gateways', 'Inventory & ERP integration'],
    color: '#7c3aed',
    lightBg: '#f5f3ff',
    borderColor: '#ddd6fe',
  },
  {
    icon: Globe,
    title: 'CMS-Driven Enterprises',
    desc: 'Businesses needing secure content management with enterprise WordPress development services in Thanjavur.',
    points: ['Multi-user editorial workflows', 'Version-controlled content', 'Plugin & API ecosystems'],
    color: '#0891b2',
    lightBg: '#ecfeff',
    borderColor: '#a5f3fc',
  },
  {
    icon: BrainCircuit,
    title: 'AI-First Enterprises',
    desc: 'Enterprises aiming to integrate AI solutions for business intelligence, analytics, and personalised user experiences.',
    points: ['AI-driven recommendations', 'Predictive analytics dashboards', 'Automated workflows'],
    color: '#059669',
    lightBg: '#ecfdf5',
    borderColor: '#a7f3d0',
  },
]

export default function EWWhoShould() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden bg-white">

      {/* Light dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.04) 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-14 reveal">
          <span className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-4 sm:mb-5 text-purple-600"
            style={{ background: '#f5f3ff', border: '1px solid #ddd6fe' }}>
            <BrainCircuit size={9} /> Who Should Invest
          </span>
          <h2 className="text-[clamp(20px,4vw,44px)] font-bold text-slate-900 leading-[1.10] tracking-tight mb-3 sm:mb-4">
            Who Should Invest in an{' '}
            <span style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Enterprise Website?
            </span>
          </h2>
          <p className="text-[12.5px] sm:text-[14px] lg:text-[15px] text-slate-500 leading-[1.85] max-w-2xl mx-auto px-2 sm:px-0">
            Professional enterprise solutions deliver the best value for businesses needing scalable, secure, and performance-oriented websites.
          </p>
        </div>

        {/* ── Cards: 1col xs → 2col sm+ ── */}
        {/* Odd cards offset down on lg for staggered look */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {segments.map(({ icon: Icon, title, desc, points, color, lightBg, borderColor }, i) => (
            <div key={title}
              className={`reveal group relative rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-7 transition-all duration-300 cursor-default ${i % 2 === 1 ? 'delay-2 lg:mt-8' : ''}`}
              style={{ background: lightBg, border: `1.5px solid ${borderColor}`, boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 20px 48px ${color}1a`
                e.currentTarget.style.borderColor = `${color}60`
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.04)'
                e.currentTarget.style.borderColor = borderColor
                e.currentTarget.style.transform = 'none'
              }}>

              {/* Icon + title */}
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                  <Icon size={17} style={{ color }} />
                </div>
                <h3 className="text-[14px] sm:text-[15px] lg:text-[16px] font-bold text-slate-800 leading-snug">{title}</h3>
              </div>

              <p className="text-[12px] sm:text-[13px] text-slate-500 leading-[1.78] mb-3 sm:mb-4 lg:mb-5">{desc}</p>

              {/* Feature bullets */}
              <div className="space-y-1.5 sm:space-y-2">
                {points.map(pt => (
                  <div key={pt} className="flex items-center gap-2 sm:gap-2.5">
                    <CheckCircle2 size={12} style={{ color, flexShrink: 0 }} />
                    <span className="text-[11.5px] sm:text-[12.5px] font-semibold text-slate-700">{pt}</span>
                  </div>
                ))}
              </div>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-4 right-4 sm:left-6 sm:right-6 h-0.5 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{ background: `linear-gradient(90deg,transparent,${color},transparent)` }} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
