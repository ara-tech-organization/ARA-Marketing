import { Globe, TrendingUp, ShoppingBag, Layers, ArrowRight, Zap } from 'lucide-react'

const features = [
  { icon: Globe,       label: 'Scalable Architecture',      desc: 'Grows with your business from day one'  },
  { icon: TrendingUp,  label: 'SEO-Friendly Structure',      desc: 'Rank higher, attract more buyers'        },
  { icon: ShoppingBag, label: 'Conversion-Optimised',        desc: 'Every element built to drive sales'      },
  { icon: Layers,      label: 'Sales-Based E-Commerce',      desc: 'Customised for your business goals'      },
]

const platformPills = [
  { name: 'Shopify',     bg: '#2563eb' },
  { name: 'WooCommerce', bg: '#2563eb' },
  { name: 'Magento',     bg: '#0891b2' },
  { name: 'Custom Code', bg: '#0891b2' },
]

export default function ECIntro() {
  return (
    <section id="ec-intro" className="relative py-16 sm:py-20 lg:py-16 overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #020b18 0%, #071428 50%, #040e1f 100%)' }}>

      {/* Background orbs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 65%)' }} />
      <div className="absolute -bottom-20 -left-20 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(5,150,105,0.08) 0%, transparent 65%)' }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* ── Header ── */}
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(37,99,235,0.18)', color: '#93c5fd', border: '1px solid rgba(37,99,235,0.30)' }}>
            <Zap size={10} /> Powerful E-Commerce Solutions
          </span>
          <h2 className="text-[clamp(23px,3.6vw,47px)] font-bold leading-[1.1] tracking-tight mb-5 text-white">
            Transform Your Business with{' '}
            <span style={{ color: '#60a5fa' }}>
              Powerful E-Commerce
            </span>
          </h2>
          <p className="text-[14px] sm:text-[15px] leading-[1.9] max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.58)' }}>
            In today&apos;s digital era, a strong online store is not an option — it is a necessity. As a top e-commerce web design &amp; development company in Thanjavur, we deliver high-performance platforms built for real revenue growth.
          </p>
        </div>

        {/* ── Feature cards ── */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {features.map(({ icon: Icon, label, desc }, i) => (
            <div key={label}
              className={`group p-6 rounded-2xl transition-all duration-400 hover:-translate-y-1 delay-${i + 1}`}
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)', backdropFilter: 'blur(12px)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,99,235,0.14)'; e.currentTarget.style.borderColor = 'rgba(37,99,235,0.35)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)' }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: 'rgba(37,99,235,0.25)', border: '1px solid rgba(37,99,235,0.40)' }}>
                <Icon size={17} className="text-blue-300" />
              </div>
              <h3 className="text-[13px] font-bold mb-2 text-white">{label}</h3>
              <p className="text-[12px] leading-[1.7]" style={{ color: 'rgba(255,255,255,0.50)' }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* ── Additional content ── */}
        <div className="reveal mb-8 text-center space-y-3">
          <p className="text-[13.5px] sm:text-[14.5px] leading-[1.85] max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.58)' }}>
            We develop scalable, SEO-friendly, conversion-optimised, and sales-based e-commerce platforms customised for your business requirements.
          </p>
          <p className="text-[13.5px] sm:text-[14.5px] leading-[1.85] max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.58)' }}>
            As a top e-commerce web design &amp; development services provider in Thanjavur, we are committed to building high-performance online stores that provide a flawless shopping experience.
          </p>
        </div>

        {/* ── Platform pills strip ── */}
        <div className="reveal flex flex-col sm:flex-row items-center justify-between gap-6 px-7 py-5 rounded-2xl"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)' }}>
          <div>
            <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.40)' }}>
              We Build On
            </p>
            <p className="text-[14px] font-semibold text-white">
              Industry-leading e-commerce platforms
            </p>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            {platformPills.map(({ name, bg }) => (
              <span key={name} className="px-3.5 py-1.5 rounded-full text-[11px] font-bold"
                style={{ background: bg + '22', color: '#93c5fd', border: `1px solid ${bg}44` }}>
                {name}
              </span>
            ))}
          </div>
          <a href="/ARA-Marketing/contact-us"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-[12.5px] font-bold transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: '#2563eb', boxShadow: '0 6px 18px rgba(37,99,235,0.30)' }}>
            Talk to an Expert <ArrowRight size={13} />
          </a>
        </div>

      </div>
    </section>
  )
}
