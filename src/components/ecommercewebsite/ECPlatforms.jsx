import { useState } from 'react'
import { CheckCircle2, ArrowRight, Layers, Zap, Globe } from 'lucide-react'
import shopifyImg    from '../../assets/E-commerce/Shopify.webp'
import wooImg        from '../../assets/E-commerce/woo.webp'
import enterpriseImg from '../../assets/E-commerce/Enterprise.webp'

const C1 = '#2563eb'
const C2 = '#0ea5e9'

const platforms = [
  {
    id: 'shopify',
    name: 'Shopify',
    tagline: 'Best for fast-growing retail brands',
    badge: 'Most Popular',
    image: shopifyImg,
    features: [
      'Lightning-fast hosted store setup',
      'Built-in payment gateway integration',
      'App store with 8,000+ integrations',
      'Mobile-first responsive themes',
      'Advanced analytics & sales reports',
      'Multi-currency & international selling',
    ],
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    tagline: 'Best for WordPress-powered stores',
    badge: 'Most Flexible',
    image: wooImg,
    features: [
      'Full WordPress CMS flexibility',
      'Open-source & highly customisable',
      'Extensive plugin ecosystem',
      'SEO-friendly URL structure',
      'Complete ownership of your data',
      'Flexible product types & variants',
    ],
  },
  {
    id: 'magento',
    name: 'Magento',
    tagline: 'Best for enterprise-scale operations',
    badge: 'Enterprise Ready',
    image: enterpriseImg,
    features: [
      'Enterprise-grade scalability',
      'Advanced inventory management',
      'Multi-store & multi-language support',
      'Custom checkout workflows',
      'B2B & B2C unified commerce',
      'Deep third-party integrations',
    ],
  },
]

export default function ECPlatforms() {
  const [active, setActive] = useState(0)
  const plat = platforms[active]
  const accent = active % 2 === 0 ? C1 : C2

  return (
    <section className="relative py-16 sm:py-20 lg:py-16 overflow-hidden bg-white">

      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.04) 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }} />
      <div className="hidden sm:block absolute -top-20 -right-20 w-[340px] h-[340px] rounded-full border border-blue-100/50 pointer-events-none animate-[spin_34s_linear_infinite]" />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-10 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 text-blue-600 bg-blue-50"
            style={{ border: '1px solid rgba(37,99,235,0.15)' }}>
            <Layers size={10} /> Platform Expertise
          </span>
          <h2 className="text-[clamp(21px,3.6vw,45px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
            We Specialise in{' '}
            <span style={{ color: '#2563eb' }}>
              Leading E-Commerce Platforms
            </span>
          </h2>
          <p className="text-[13.5px] sm:text-[15px] text-slate-500 leading-[1.85] max-w-2xl mx-auto">
            Our e-commerce platform development in Thanjavur ensures businesses get the right solution based on product range, budget, and scalability requirements.
          </p>
        </div>

        {/* Platform selector tabs */}
        <div className="reveal flex flex-col sm:flex-row gap-3 mb-0">
          {platforms.map((p, i) => {
            const isActive = active === i
            const col = i % 2 === 0 ? C1 : C2
            return (
              <button key={p.id} type="button" onClick={() => setActive(i)}
                className="flex-1 flex items-center gap-3 px-5 py-4 text-left transition-all duration-300 rounded-t-2xl rounded-b-none"
                style={isActive
                  ? { background: col + '0e', border: `1.5px solid ${col}`, borderBottom: 'none', boxShadow: `0 -4px 16px ${col}12` }
                  : { background: '#f8fafc', border: '1.5px solid #e2e8f0', borderBottom: '1.5px solid #e2e8f0' }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                  style={{ background: isActive ? `linear-gradient(135deg,${col},${col}bb)` : '#e2e8f0', boxShadow: isActive ? `0 4px 12px ${col}35` : 'none' }}>
                  <Globe size={15} style={{ color: isActive ? '#fff' : '#94a3b8' }} />
                </div>
                <div className="min-w-0">
                  <p className="text-[14px] font-bold leading-tight"
                    style={{ color: isActive ? col : '#334155' }}>{p.name}</p>
                  <p className="text-[11px] mt-0.5" style={{ color: isActive ? col + 'aa' : '#94a3b8' }}>{p.badge}</p>
                </div>
              </button>
            )
          })}
        </div>

        {/* Platform detail panel */}
        <div className="reveal flex flex-col md:flex-row gap-6 md:gap-8 p-6 md:p-8"
          style={{
            borderRadius: '0 0 24px 24px',
            boxShadow: `0 20px 60px ${accent}14`,
            border: `1.5px solid ${accent}25`,
            borderTop: `1.5px solid ${accent}25`,
            background: `linear-gradient(145deg, ${accent}06 0%, ${accent}02 100%)`,
          }}>

          {/* Left: features */}
          <div className="md:w-[45%] flex-shrink-0 p-6 sm:p-8 rounded-2xl"
            style={{ background: 'white', border: `1px solid ${accent}15`, boxShadow: `0 4px 20px ${accent}08` }}>
            <div className="mb-6">
              <div className="flex justify-center mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
                  style={{ background: accent + '14', color: accent, border: `1px solid ${accent}28` }}>
                  <Zap size={9} /> {plat.badge}
                </span>
              </div>
              <h3 className="text-[clamp(17px,2.2vw,25px)] font-bold text-slate-900 mb-2">{plat.name} Development</h3>
              <p className="text-[13px] text-slate-500 leading-[1.75]">{plat.tagline}</p>
            </div>

            <div className="space-y-3 mb-8">
              {plat.features.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: accent }} />
                  <span className="text-[13px] text-slate-700 font-medium leading-snug">{f}</span>
                </div>
              ))}
            </div>

            <a href="/ARA-Marketing/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-[13px] font-bold transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: '#2563eb', boxShadow: `0 8px 24px ${accent}35` }}>
              Build with {plat.name} <ArrowRight size={13} />
            </a>
          </div>

          {/* Right: image */}
          <div className="flex-1 relative overflow-hidden rounded-2xl" style={{ minHeight: 280 }}>
            <img src={plat.image}
              alt={`${plat.name} e-commerce development in Thanjavur`}
              loading="lazy"
              className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[1.5s]"
              style={{ minHeight: 280 }} />
            <div className="absolute inset-0"
              style={{ background: `linear-gradient(135deg, transparent 50%, ${accent}28 100%)` }} />
            <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-[10px] font-bold"
              style={{ background: '#2563eb', boxShadow: `0 4px 12px ${accent}45` }}>
              <Zap size={9} />
              {plat.name} Expert
            </div>
          </div>

        </div>

        {/* Bottom note */}
        <div className="reveal mt-6 text-center px-6 py-4 rounded-2xl"
          style={{ background: '#f8fbff', border: '1.5px solid #dbeafe' }}>
          <p className="text-[13px] text-slate-600 leading-[1.8] mb-2">
            We are a professional custom e-commerce website development company in Thanjavur, building custom solutions that fit your brand identity and business goals.
          </p>
          <p className="text-[13px] text-slate-600 leading-[1.8]">
            We also provide e-commerce web application development in Thanjavur with advanced features — inventory management, payment gateways, and customer dashboards.
          </p>
        </div>

      </div>
    </section>
  )
}
