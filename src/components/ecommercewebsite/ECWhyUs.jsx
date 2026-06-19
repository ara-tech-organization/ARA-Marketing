import { Wrench, Smartphone, CreditCard, Search, Zap, ThumbsUp } from 'lucide-react'
import customBuiltImg  from '../../assets/E-commerce/Custom-Built.webp'
import mobileImg       from '../../assets/E-commerce/Mobile-Friendly.webp'
import seoOptImg       from '../../assets/E-commerce/SEO-optimization.webp'
import seoImg          from '../../assets/E-commerce/SEO.webp'
import highSpeedImg    from '../../assets/E-commerce/High-Speed.webp'

const reasons = [
  {
    num: '01',
    icon: Wrench,
    title: 'Custom-Built Ecommerce Solutions',
    desc: 'We never use generic templates. Every store is crafted from the ground up to match your brand identity, product structure, and business goals for maximum conversion and customer trust.',
    color: '#2563eb',
    image: customBuiltImg,
  },
  {
    num: '02',
    icon: Smartphone,
    title: 'Mobile-Friendly Responsive Design',
    desc: 'Over 70% of online purchases happen on mobile. Our e-commerce stores are built with a mobile-first approach — delivering a flawless shopping experience on every device and screen size.',
    color: '#0891b2',
    image: mobileImg,
  },
  {
    num: '03',
    icon: CreditCard,
    title: 'Secure Payment Gateway Integration',
    desc: 'We integrate Razorpay, Stripe, PayU, and other trusted gateways with SSL encryption and PCI-DSS compliance — giving your customers confidence to shop and complete purchases safely.',
    color: '#059669',
    image: seoOptImg,
  },
  {
    num: '04',
    icon: Search,
    title: 'SEO-Optimised Architecture',
    desc: 'From clean URL structures to schema markup and Core Web Vitals, every store we build is engineered for top search engine rankings — driving organic traffic that turns into consistent revenue.',
    color: '#7c3aed',
    image: seoImg,
  },
  {
    num: '05',
    icon: Zap,
    title: 'High-Speed Performance & Scalability',
    desc: 'Slow stores lose sales. We optimise every element — images, code, CDN delivery, and server performance — so your store loads in under 2 seconds and handles thousands of concurrent shoppers.',
    color: '#d97706',
    image: highSpeedImg,
  },
]

export default function ECWhyUs() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-white">

      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.035) 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }} />
      <div className="hidden sm:block absolute -bottom-20 -right-20 w-[360px] h-[360px] rounded-full border border-blue-100/40 pointer-events-none animate-[spin_40s_linear_infinite_reverse]" />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 text-blue-600 bg-blue-50"
            style={{ border: '1px solid rgba(37,99,235,0.15)' }}>
            <ThumbsUp size={10} /> Why Choose Us
          </span>
          <h2 className="text-[clamp(21px,3.6vw,45px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
            The Right Choice for{' '}
            <span style={{ color: '#2563eb' }}>
              You
            </span>
          </h2>
          <p className="text-[13.5px] sm:text-[15px] text-slate-500 leading-[1.85] max-w-2xl mx-auto">
            We are a trusted e-commerce web design and development company in Thanjavur offering result-driven solutions that make every online store optimised for conversions.
          </p>
        </div>

        {/* Alternating reason rows */}
        <div className="space-y-6 reveal">
          {reasons.map(({ num, icon: Icon, title, desc, color, image }, i) => {
            const isEven = i % 2 === 0
            return (
              <div key={num}
                className="group flex flex-col md:flex-row gap-0 rounded-3xl overflow-hidden transition-all duration-400 hover:shadow-xl"
                style={{
                  flexDirection: isEven ? undefined : 'row-reverse',
                  border: `1.5px solid ${color}15`,
                  boxShadow: '0 4px 20px rgba(37,99,235,0.06)',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = color + '35'; e.currentTarget.style.boxShadow = `0 16px 50px ${color}15` }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = color + '15'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.06)' }}>

                {/* Content side */}
                <div className="flex-1 p-7 sm:p-9 flex items-center gap-6"
                  style={isEven
                    ? { borderRight: `1px solid ${color}12` }
                    : { borderLeft: `1px solid ${color}12` }}>

                  {/* Large number */}
                  <div className="hidden sm:flex flex-shrink-0 w-16 h-16 rounded-2xl items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: `linear-gradient(135deg, ${color}14, ${color}08)`, border: `1.5px solid ${color}28` }}>
                    <span className="text-[22px] font-black" style={{ color }}>{num}</span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center sm:hidden"
                        style={{ background: `${color}14`, border: `1.5px solid ${color}28` }}>
                        <Icon size={14} style={{ color }} />
                      </div>
                      <Icon size={15} className="hidden sm:block flex-shrink-0" style={{ color }} />
                      <h3 className="text-[14px] sm:text-[15px] font-bold text-slate-900">{title}</h3>
                    </div>
                    <p className="text-[13px] sm:text-[14px] text-slate-500 leading-[1.8]">{desc}</p>
                  </div>
                </div>

                {/* Image side */}
                <div className="md:w-[240px] lg:w-[280px] flex-shrink-0 relative overflow-hidden" style={{ minHeight: 160 }}>
                  <img src={image} alt={title} loading="lazy"
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                    style={{ minHeight: 160 }} />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${color}40 0%, transparent 60%)` }} />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-white text-[10px] font-bold"
                    style={{ background: color, boxShadow: `0 4px 10px ${color}50` }}>
                    {num}
                  </div>
                </div>

              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <div className="reveal mt-10 text-center px-5 sm:px-8 py-6 rounded-2xl bg-blue-50 space-y-2"
          style={{ border: '1.5px solid rgba(37,99,235,0.12)' }}>
          <p className="text-[13px] sm:text-[14px] text-slate-600 leading-[1.85]">
            We are the best custom e-commerce website development services in Thanjavur, and make sure every store is optimised for conversions.
          </p>
          <p className="text-[13px] sm:text-[14px] text-slate-600 leading-[1.85]">
            We offer e-commerce web app development services in Thanjavur to improve user experience and increase sales.
          </p>
          <p className="text-[13px] sm:text-[14px] text-slate-600 leading-[1.85]">
            We are one of the best e-commerce web design &amp; development services in Thanjavur and are known for delivering high-quality e-commerce platforms.
          </p>
        </div>

      </div>
    </section>
  )
}
