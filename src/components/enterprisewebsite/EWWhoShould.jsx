import { Building2, ShoppingCart, Globe, BrainCircuit, CheckCircle2 } from 'lucide-react'

const segments = [
  {
    icon: Building2,
    title: 'Large-Scale Businesses',
    desc: 'Expanding their online footprint with secure, scalable infrastructure that handles enterprise-level traffic and complex workflows.',
    points: ['Multi-department portals', 'Role-based access control', 'Global CDN delivery'],
    color: '#2563eb',
  },
  {
    icon: ShoppingCart,
    title: 'Enterprise eCommerce',
    desc: 'Corporations seeking enterprise eCommerce development in Thanjavur for powerful, feature-rich online sales channels.',
    points: ['Enterprise eCommerce development in Thanjavur', 'Secure payment gateways', 'Inventory & ERP integration'],
    color: '#7c3aed',
  },
  {
    icon: Globe,
    title: 'CMS-Driven Enterprises',
    desc: 'Businesses needing secure content management with enterprise WordPress development services in Thanjavur.',
    points: ['Multi-user editorial workflows', 'Version-controlled content', 'Plugin & API ecosystems'],
    color: '#0891b2',
  },
  {
    icon: BrainCircuit,
    title: 'AI-First Enterprises',
    desc: 'Enterprises aiming to integrate AI solutions for business intelligence, analytics, and personalised user experiences.',
    points: ['AI-driven recommendations', 'Predictive analytics dashboards', 'Automated workflows'],
    color: '#059669',
  },
]

const lightBgs = ['#eff6ff', '#f5f3ff', '#ecfeff', '#ecfdf5']
const lightBorders = ['#bfdbfe', '#ddd6fe', '#a5f3fc', '#a7f3d0']

export default function EWWhoShould() {
  return (
    <section
      className="relative py-12 sm:py-16 lg:py-20 overflow-hidden"
      style={{ background: 'linear-gradient(160deg,#f8faff 0%,#eef4ff 60%,#f4f8ff 100%)' }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(37,99,235,0.05) 1.5px, transparent 1.5px)',
          backgroundSize: '34px 34px',
        }}
      />

      {/* Decorative rings */}
      <div className="hidden lg:block absolute -right-20 top-1/4 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ border: '1.5px solid rgba(37,99,235,0.07)', animation: 'spin 60s linear infinite' }} />
      <div className="hidden lg:block absolute -left-16 bottom-10 w-[220px] h-[220px] rounded-full pointer-events-none"
        style={{ border: '1.5px solid rgba(124,58,237,0.06)', animation: 'spin 45s linear infinite reverse' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16 reveal">
          <span
            className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-4 sm:mb-5 text-purple-600"
            style={{ background: '#f5f3ff', border: '1px solid #ddd6fe' }}
          >
            <BrainCircuit size={9} /> Who Should Invest
          </span>

          <h2 className="text-[clamp(20px,3.6vw,44px)] font-bold leading-[1.10] tracking-tight mb-3 sm:mb-4 text-slate-900">
            Who Should Invest in an{' '}
            <span style={{
              background: 'linear-gradient(135deg,#2563eb,#7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Enterprise Website?
            </span>
          </h2>

          <p className="text-[12.5px] sm:text-[14px] lg:text-[15px] text-slate-500 leading-[1.85] max-w-2xl mx-auto px-2 sm:px-0">
            Professional enterprise solutions deliver the best value for businesses needing scalable, secure, and performance-oriented websites.
          </p>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 reveal">
          {segments.map(({ icon: Icon, title, desc, points, color }, i) => (
            <div
              key={title}
              className={`group relative rounded-3xl p-5 sm:p-6 lg:p-7 transition-all duration-300 cursor-default ${i % 2 === 1 ? 'lg:mt-8' : ''}`}
              style={{
                background: lightBgs[i],
                border: `1.5px solid ${lightBorders[i]}`,
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${color}60`
                e.currentTarget.style.boxShadow = `0 20px 50px ${color}1a`
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = lightBorders[i]
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.04)'
                e.currentTarget.style.transform = 'none'
              }}
            >
              {/* Icon box */}
              <div
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center mb-4 sm:mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${color}18`, border: `1px solid ${color}30` }}
              >
                <Icon size={18} style={{ color }} />
              </div>

              {/* Title */}
              <h3 className="text-[14px] sm:text-[15px] font-bold mb-2 sm:mb-3 leading-snug text-slate-800">
                {title}
              </h3>

              {/* Description */}
              <p className="text-[12px] sm:text-[13px] text-slate-500 leading-[1.80] mb-4 sm:mb-5">
                {desc}
              </p>

              {/* Bullets */}
              <div className="space-y-2 sm:space-y-2.5">
                {points.map(pt => (
                  <div key={pt} className="flex items-center gap-2 sm:gap-2.5">
                    <CheckCircle2 size={12} style={{ color, flexShrink: 0 }} />
                    <span className="text-[11.5px] sm:text-[12.5px] font-semibold text-slate-700">{pt}</span>
                  </div>
                ))}
              </div>

              {/* Bottom accent bar */}
              <div
                className="absolute bottom-0 left-5 right-5 sm:left-6 sm:right-6 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"
                style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
