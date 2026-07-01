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
      style={{ background: '#f0f9ff' }}>

      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.06) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(219,234,254,0.6) 0%, transparent 65%)' }} />
      <div className="absolute -bottom-16 -left-16 w-[320px] h-[320px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(186,230,253,0.5) 0%, transparent 65%)' }} />
      <div className="hidden sm:block absolute top-20 left-20 w-[200px] h-[200px] rounded-full border pointer-events-none animate-[spin_40s_linear_infinite]"
        style={{ borderColor: 'rgba(37,99,235,0.15)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
            style={{ background: 'white', color: '#2563eb', border: '1px solid #bfdbfe', boxShadow: '0 2px 12px rgba(37,99,235,0.08)' }}>
            <Users size={10} /> Ideal For
          </span>
          <h2 className="text-[clamp(21px,3.6vw,45px)] font-bold leading-[1.1] tracking-tight mb-4 text-slate-900">
            Who Should Invest in{' '}
            <span style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              E-Commerce Websites?
            </span>
          </h2>
          <p className="text-[13.5px] sm:text-[15px] text-slate-500 leading-[1.85] max-w-2xl mx-auto">
            E-commerce websites are essential for businesses wanting to sell products or services online. Our custom e-commerce website development services in Thanjavur are perfect for you if you want to grow digitally.
          </p>
        </div>

        {/* Segment cards */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {segments.map(({ icon: Icon, label, desc, color }, i) => (
            <div key={label}
              className={`group p-6 rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 cursor-default delay-${i + 1}`}
              style={{ border: `1px solid ${color === '#0ea5e9' ? '#bae6fd' : '#bfdbfe'}`, boxShadow: '0 2px 12px rgba(37,99,235,0.05)' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = color + '55'
                e.currentTarget.style.boxShadow = `0 20px 50px ${color}14`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = color === '#0ea5e9' ? '#bae6fd' : '#bfdbfe'
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(37,99,235,0.05)'
              }}>

              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: color === '#0ea5e9' ? '#f0f9ff' : '#eff6ff', border: `1.5px solid ${color === '#0ea5e9' ? '#bae6fd' : '#bfdbfe'}` }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <h3 className="text-[13px] font-bold text-slate-900 leading-tight">{label}</h3>
                  <div className="w-8 h-0.5 mt-2 rounded-full transition-all duration-300 group-hover:w-14" style={{ background: color }} />
                </div>
              </div>

              <p className="text-[12.5px] text-slate-500 leading-[1.78]">{desc}</p>

              <div className="flex items-center gap-1.5 mt-5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <ArrowRight size={11} style={{ color }} />
                <span className="text-[11px] font-semibold" style={{ color }}>Perfect for e-commerce</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA block */}
        <div className="reveal text-center">
          <div className="inline-flex flex-col items-center gap-4 px-8 py-7 rounded-3xl bg-white"
            style={{ border: '1.5px solid #bfdbfe', boxShadow: '0 12px 40px rgba(37,99,235,0.10)' }}>
            <p className="text-[11px] font-black uppercase tracking-widest text-blue-600">
              Start Your E-Commerce Journey Today
            </p>
            <p className="text-[14px] font-medium text-slate-700 max-w-md">
              Choosing the best e-commerce web design and development company in Thanjavur keeps your business competitive in the online market.
            </p>
            <p className="text-[13px] text-slate-500 max-w-md">
              Our e-commerce web application development in Thanjavur helps businesses to automate sales and enhance the customer experience.
            </p>
            <p className="text-[13px] text-slate-500 max-w-md">
              We are also one of the top e-commerce development agencies in Thanjavur, offering scalable e-commerce platforms.
            </p>
            <a href="/ARA-Marketing/contact-us"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white text-[13px] font-bold transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
              style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', boxShadow: '0 8px 24px rgba(37,99,235,0.28)' }}>
              Get Started Today <ArrowRight size={13} />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
