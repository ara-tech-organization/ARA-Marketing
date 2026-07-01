import { Globe, TrendingUp, ShoppingBag, Layers, ArrowRight, Zap } from 'lucide-react'

const features = [
  { icon: Globe,       label: 'Scalable Architecture',      desc: 'Grows with your business from day one'  },
  { icon: TrendingUp,  label: 'SEO-Friendly Structure',      desc: 'Rank higher, attract more buyers'        },
  { icon: ShoppingBag, label: 'Conversion-Optimised',        desc: 'Every element built to drive sales'      },
  { icon: Layers,      label: 'Sales-Based E-Commerce',      desc: 'Customised for your business goals'      },
]

const platformPills = [
  { name: 'Shopify',     color: '#2563eb' },
  { name: 'WooCommerce', color: '#2563eb' },
  { name: 'Magento',     color: '#0ea5e9' },
  { name: 'Custom Code', color: '#0ea5e9' },
]

export default function ECIntro() {
  return (
    <section id="ec-intro" className="relative py-16 sm:py-20 lg:py-16 overflow-hidden"
      style={{ background: '#f0f9ff' }}>

      {/* Background orbs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(219,234,254,0.6) 0%, transparent 65%)' }} />
      <div className="absolute -bottom-20 -left-20 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(186,230,253,0.5) 0%, transparent 65%)' }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.06) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* ── Header ── */}
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
            style={{ background: 'white', color: '#2563eb', border: '1px solid #bfdbfe', boxShadow: '0 2px 12px rgba(37,99,235,0.08)' }}>
            <Zap size={10} /> Powerful E-Commerce Solutions
          </span>
          <h2 className="text-[clamp(23px,3.6vw,47px)] font-bold leading-[1.1] tracking-tight mb-5 text-slate-900">
            Transform Your Business with{' '}
            <span style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Powerful E-Commerce
            </span>
          </h2>
          <p className="text-[14px] sm:text-[15px] text-slate-500 leading-[1.9] max-w-2xl mx-auto">
            In today&apos;s digital era, a strong online store is not an option — it is a necessity. As a top e-commerce web design &amp; development company in Thanjavur, we deliver high-performance platforms built for real revenue growth.
          </p>
        </div>

        {/* ── Feature cards ── */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {features.map(({ icon: Icon, label, desc }, i) => (
            <div key={label}
              className={`group p-6 rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 delay-${i + 1}`}
              style={{ border: '1px solid #dbeafe', boxShadow: '0 2px 12px rgba(37,99,235,0.05)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#93c5fd'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,99,235,0.12)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#dbeafe'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(37,99,235,0.05)' }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: '#eff6ff', border: '1px solid #bfdbfe' }}>
                <Icon size={17} style={{ color: '#2563eb' }} />
              </div>
              <h3 className="text-[13px] font-bold mb-2 text-slate-900">{label}</h3>
              <p className="text-[12px] text-slate-500 leading-[1.7]">{desc}</p>
            </div>
          ))}
        </div>

        {/* ── Additional content ── */}
        <div className="reveal mb-8 text-center space-y-3">
          <p className="text-[13.5px] sm:text-[14.5px] text-slate-500 leading-[1.85] max-w-2xl mx-auto">
            We develop scalable, SEO-friendly, conversion-optimised, and sales-based e-commerce platforms customised for your business requirements.
          </p>
          <p className="text-[13.5px] sm:text-[14.5px] text-slate-500 leading-[1.85] max-w-2xl mx-auto">
            As a top e-commerce web design &amp; development services provider in Thanjavur, we are committed to building high-performance online stores that provide a flawless shopping experience.
          </p>
        </div>

        {/* ── Platform pills strip ── */}
        <div className="reveal flex flex-col sm:flex-row items-center justify-between gap-6 px-7 py-5 rounded-2xl bg-white"
          style={{ border: '1px solid #dbeafe', boxShadow: '0 4px 16px rgba(37,99,235,0.06)' }}>
          <div>
            <p className="text-[11px] font-black uppercase tracking-widest mb-1 text-slate-400">
              We Build On
            </p>
            <p className="text-[14px] font-semibold text-slate-900">
              Industry-leading e-commerce platforms
            </p>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            {platformPills.map(({ name, color }) => (
              <span key={name} className="px-3.5 py-1.5 rounded-full text-[11px] font-bold"
                style={{ background: color + '10', color, border: `1px solid ${color}30` }}>
                {name}
              </span>
            ))}
          </div>
          <a href="/ARA-Marketing/contact-us"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-[12.5px] font-bold transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
            style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', boxShadow: '0 6px 18px rgba(37,99,235,0.28)' }}>
            Talk to an Expert <ArrowRight size={13} />
          </a>
        </div>

      </div>
    </section>
  )
}
