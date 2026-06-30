import { Globe, Check } from 'lucide-react'

const plans = [
  {
    name: 'Static Website',
    price: '₹10,000',
    label: 'Starting from',
    for: 'Schools, Clinics, Small Businesses',
    color: '#2563eb',
    glow: 'rgba(37,99,235,0.25)',
    features: [
      'Upto 10 Pages',
      'Responsive Design',
      'Contact Form Integration',
      'SEO-Ready Structure',
      'Fast Load Speed',
      '1 Year Free Hosting Support',
    ],
  },
  {
    name: 'Dynamic Website',
    price: '₹20,000',
    label: 'Starting from',
    for: 'Educational Institutions, Hospitals, Service Businesses',
    color: '#7c3aed',
    glow: 'rgba(124,58,237,0.25)',
    popular: true,
    features: [
      'Unlimited Pages',
      'Admin Panel / CMS',
      'Advanced Forms & Integrations',
      'Gallery & Media Management',
      'SEO Optimized',
      'Mobile Responsive',
      '1 Year Free Hosting Support',
    ],
  },
  {
    name: 'E-Commerce Website',
    price: '₹30,000',
    label: 'Starting from',
    for: 'Retail Stores, Fashion Brands, D2C Businesses',
    color: '#0891b2',
    glow: 'rgba(8,145,178,0.25)',
    features: [
      'Product Catalog & Management',
      'Secure Payment Gateway',
      'Order & Inventory Management',
      'Customer Login Portal',
      'SEO & Performance Optimized',
      'Mobile-First Design',
      '1 Year Free Hosting Support',
    ],
  },
]

export default function PriceWebsite() {
  return (
    <section className="py-16 sm:py-20" style={{ background: '#071a36' }}>
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 md:px-8">

        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
            text-[11px] font-bold uppercase tracking-widest mb-4 text-blue-400"
            style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.28)' }}>
            <Globe size={11} /> Website Development
          </span>
          <h2 className="font-bold text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(22px,3vw,34px)' }}>
            Website Development{' '}
            <span style={{
              background: 'linear-gradient(135deg, #93c5fd 0%, #60a5fa 25%, #3b82f6 55%, #818cf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Packages</span>
          </h2>
          <p className="text-[15px] max-w-[600px] mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.42)' }}>
            Professional websites built for performance, SEO, and conversions — at prices that work for every business.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map(({ name, price, label, for: suitedFor, color, glow, popular, features }, i) => (
            <div
              key={name}
              className={`reveal delay-${i + 1} relative flex flex-col rounded-[24px] p-7 transition-all duration-300 hover:-translate-y-2`}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: popular ? `1.5px solid ${color}` : '1px solid rgba(255,255,255,0.08)',
                boxShadow: popular ? `0 0 40px ${glow}` : 'none',
              }}
            >
              {/* Popular badge */}
              {popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full
                  text-[11px] font-bold text-white uppercase tracking-widest"
                  style={{ background: color }}>
                  Most Popular
                </div>
              )}

              {/* Top accent */}
              <div className="w-10 h-1 rounded-full mb-5" style={{ background: color }} />

              <h3 className="text-[18px] font-bold text-white mb-1">{name}</h3>
              <p className="text-[12px] mb-5" style={{ color: 'rgba(255,255,255,0.38)' }}>
                Best for: {suitedFor}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-[11px] font-semibold uppercase tracking-widest"
                  style={{ color: 'rgba(255,255,255,0.38)' }}>{label}</span>
                <div className="text-[38px] font-bold text-white leading-none mt-1"
                  style={{ letterSpacing: '-1px' }}>{price}</div>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {features.map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-[13.5px]"
                    style={{ color: 'rgba(255,255,255,0.72)' }}>
                    <Check size={14} style={{ color }} className="shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="/ARA-Marketing/contact-us"
                className="w-full flex items-center justify-center py-3 rounded-full text-[13px] font-bold
                  text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)`,
                  boxShadow: `0 4px 20px ${glow}` }}
              >
                Get a Quote
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
