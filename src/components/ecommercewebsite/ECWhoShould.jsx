import { Store, Truck, Rocket, MapPin, Network, Tag, ArrowRight, Users } from 'lucide-react'

const segments = [
  { icon: Store,   label: 'Retail Businesses',          desc: 'Take your physical retail store online and reach customers across cities.',           color: '#2563eb' },
  { icon: Truck,   label: 'Wholesale Distributors',     desc: 'Automate B2B ordering, bulk pricing, and distributor management seamlessly.',         color: '#0ea5e9' },
  { icon: Rocket,  label: 'Startups Launching Online',  desc: 'Launch your brand online with a scalable store ready for rapid growth.',              color: '#2563eb' },
  { icon: MapPin,  label: 'Local Shops Going Digital',  desc: 'Bring your local customer base online and expand to new markets digitally.',          color: '#0ea5e9' },
  { icon: Network, label: 'Multi-Vendor Marketplaces',  desc: 'Build a platform connecting multiple sellers with unified order management.',          color: '#2563eb' },
  { icon: Tag,     label: 'Direct-to-Consumer Brands',  desc: 'Sell directly to customers without middlemen and maximise your profit margins.',       color: '#0ea5e9' },
]

export default function ECWhoShould() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-16 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #020b18 0%, #071428 50%, #040e1f 100%)' }}>

      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '38px 38px' }} />
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 65%)' }} />
      <div className="absolute -bottom-16 -left-16 w-[320px] h-[320px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 65%)' }} />
      <div className="hidden sm:block absolute top-20 left-20 w-[200px] h-[200px] rounded-full border pointer-events-none animate-[spin_40s_linear_infinite]"
        style={{ borderColor: 'rgba(37,99,235,0.18)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(37,99,235,0.18)', color: '#93c5fd', border: '1px solid rgba(37,99,235,0.30)' }}>
            <Users size={10} /> Ideal For
          </span>
          <h2 className="text-[clamp(21px,3.6vw,45px)] font-bold leading-[1.1] tracking-tight mb-4 text-white">
            Who Should Invest in{' '}
            <span style={{ color: '#60a5fa' }}>
              E-Commerce Websites?
            </span>
          </h2>
          <p className="text-[13.5px] sm:text-[15px] leading-[1.85] max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
            E-commerce websites are essential for businesses wanting to sell products or services online. Our custom e-commerce website development services in Thanjavur are perfect for you if you want to grow digitally.
          </p>
        </div>

        {/* Segment cards */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {segments.map(({ icon: Icon, label, desc, color }, i) => (
            <div key={label}
              className={`group p-6 rounded-2xl transition-all duration-400 hover:-translate-y-1 cursor-default delay-${i + 1}`}
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)' }}
              onMouseEnter={e => {
                e.currentTarget.style.background = color + '12'
                e.currentTarget.style.borderColor = color + '40'
                e.currentTarget.style.boxShadow = `0 20px 50px ${color}18`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'
                e.currentTarget.style.boxShadow = 'none'
              }}>

              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: color + '20', border: `1.5px solid ${color}35` }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <h3 className="text-[13px] font-bold text-white leading-tight">{label}</h3>
                  <div className="w-8 h-0.5 mt-2 rounded-full transition-all duration-300 group-hover:w-14" style={{ background: color }} />
                </div>
              </div>

              <p className="text-[12.5px] leading-[1.78]" style={{ color: 'rgba(255,255,255,0.52)' }}>{desc}</p>

              <div className="flex items-center gap-1.5 mt-5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <ArrowRight size={11} style={{ color }} />
                <span className="text-[11px] font-semibold" style={{ color }}>Perfect for e-commerce</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA block */}
        <div className="reveal text-center">
          <div className="inline-flex flex-col items-center gap-4 px-8 py-7 rounded-3xl"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(37,99,235,0.30)', boxShadow: '0 12px 40px rgba(37,99,235,0.15)' }}>
            <p className="text-[11px] font-black uppercase tracking-widest" style={{ color: '#60a5fa' }}>
              Start Your E-Commerce Journey Today
            </p>
            <p className="text-[14px] font-medium max-w-md" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Choosing the best e-commerce web design and development company in Thanjavur keeps your business competitive in the online market.
            </p>
            <p className="text-[13px] max-w-md" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Our e-commerce web application development in Thanjavur helps businesses to automate sales and enhance the customer experience.
            </p>
            <p className="text-[13px] max-w-md" style={{ color: 'rgba(255,255,255,0.55)' }}>
              We are also one of the top e-commerce development agencies in Thanjavur, offering scalable e-commerce platforms.
            </p>
            <a href="/ARA-Marketing/contact-us"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white text-[13px] font-bold transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: '#2563eb', boxShadow: '0 8px 24px rgba(37,99,235,0.40)' }}>
              Get Started Today <ArrowRight size={13} />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
