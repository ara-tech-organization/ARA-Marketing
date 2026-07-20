import { ClipboardList, PenTool, ShoppingCart, CreditCard, Rocket, Headphones, Workflow } from 'lucide-react'

const steps = [
  { icon: ClipboardList, num: '01', title: 'Business Analysis & Planning',       desc: 'We study your products, audience, competitors, and revenue goals to map the ideal e-commerce architecture and platform choice.',     color: '#2563eb' },
  { icon: PenTool,       num: '02', title: 'UI/UX Design & Wireframing',          desc: 'Our designers craft high-converting store layouts, product pages, and checkout flows that guide shoppers toward purchase.',             color: '#0ea5e9' },
  { icon: ShoppingCart,  num: '03', title: 'E-Commerce Platform Setup',           desc: 'We configure Shopify, WooCommerce, or Magento with your catalogue, categories, variants, and custom theme matching your brand.',         color: '#2563eb' },
  { icon: CreditCard,    num: '04', title: 'Backend & Payment Integration',       desc: 'Secure payment gateways, shipping APIs, inventory sync, and customer account systems are wired up and thoroughly tested.',               color: '#0ea5e9' },
  { icon: Rocket,        num: '05', title: 'Testing, Optimisation & Launch',      desc: 'Multi-device testing, page speed optimisation, SEO setup, and a fully monitored go-live ensure a smooth, successful launch.',            color: '#2563eb' },
  { icon: Headphones,    num: '06', title: 'Ongoing Support & Maintenance',       desc: 'Post-launch we handle updates, security patches, performance monitoring, and feature enhancements so your store stays ahead.',           color: '#0ea5e9' },
]

export default function ECProcess() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-16 overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#0d2244 0%,#0a1a34 40%,#0d2244 100%)' }}>

      <div className="absolute inset-0 pointer-events-none opacity-40"
        style={{ backgroundImage: 'var(--brand-gradient-dots)', backgroundSize: '36px 36px' }} />
      <div className="hidden sm:block absolute -top-20 -left-20 w-[380px] h-[380px] rounded-full border border-white/10 pointer-events-none animate-[spin_36s_linear_infinite]" />
      <div className="hidden sm:block absolute -bottom-16 -right-16 w-[300px] h-[300px] rounded-full border border-white/10 pointer-events-none animate-[spin_40s_linear_infinite]" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'var(--brand-gradient-glow-dark)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6 text-blue-300"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(96,165,250,0.25)' }}>
            <Workflow size={10} /> Development Process
          </span>
          <h2 className="text-[clamp(21px,3.6vw,45px)] font-bold text-white leading-[1.1] tracking-tight mb-4">
            How We Build{' '}
            <span style={{ color: '#60a5fa' }}>
              E-Commerce Websites
            </span>
          </h2>
          <p className="text-[13.5px] sm:text-[15px] leading-[1.85] max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
            We follow a structured, performance-focused development process — from initial strategy through to a live, high-converting e-commerce store.
          </p>
        </div>

        {/* Desktop: two-column alternating steps */}
        <div className="hidden md:block reveal">
          <div className="relative">
            {/* Central vertical line */}
            <div className="absolute left-1/2 top-8 bottom-8 w-0.5 -translate-x-1/2 pointer-events-none"
              style={{ background: '#60a5fa' }} />

            <div className="space-y-6">
              {steps.map(({ icon: Icon, num, title, desc, color }, i) => {
                const isLeft = i % 2 === 0
                return (
                  <div key={num}
                    className="relative flex items-center"
                    style={{ flexDirection: isLeft ? 'row' : 'row-reverse' }}>

                    {/* Card */}
                    <div className="w-[44%] group">
                      <div className="p-6 rounded-2xl transition-all duration-400 hover:-translate-y-1"
                        style={{ background: 'rgba(255,255,255,0.05)', border: `1.5px solid rgba(255,255,255,0.12)`, boxShadow: '0 4px 18px rgba(0,0,0,0.20)' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = color + '60'; e.currentTarget.style.boxShadow = `0 16px 40px ${color}25` }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.boxShadow = '0 4px 18px rgba(0,0,0,0.20)' }}>
                        <span className="text-[10px] font-black uppercase tracking-widest mb-2 block" style={{ color }}>Step {num}</span>
                        <h3 className="text-[13px] font-bold text-white leading-snug mb-2">{title}</h3>
                        <p className="text-[12px] leading-[1.75]" style={{ color: 'rgba(255,255,255,0.55)' }}>{desc}</p>
                      </div>
                    </div>

                    {/* Center bubble */}
                    <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[52px] h-[52px] rounded-full flex items-center justify-center"
                      style={{
                        background: 'var(--brand-gradient)',
                        boxShadow: `0 0 0 5px #0d2244, 0 0 0 6.5px ${color}45, 0 8px 24px ${color}35`,
                      }}>
                      <Icon size={17} className="text-white" />
                    </div>

                    {/* Spacer */}
                    <div className="w-[44%]" />

                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="flex flex-col gap-4 md:hidden reveal">
          {steps.map(({ icon: Icon, num, title, desc, color }) => (
            <div key={num} className="flex items-start gap-4 p-5 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.05)', border: `1.5px solid rgba(255,255,255,0.12)`, boxShadow: '0 4px 16px rgba(0,0,0,0.20)' }}>
              <div className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
                style={{ background: 'var(--brand-gradient)', boxShadow: `0 6px 18px ${color}30` }}>
                <Icon size={16} className="text-white" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest block mb-1" style={{ color }}>Step {num}</span>
                <h3 className="text-[13px] font-bold text-white leading-snug mb-1">{title}</h3>
                <p className="text-[12px] leading-[1.75]" style={{ color: 'rgba(255,255,255,0.55)' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="reveal mt-10 sm:mt-14 text-center px-5 sm:px-8 py-6 rounded-2xl"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.12)', boxShadow: '0 6px 24px rgba(0,0,0,0.20)' }}>
          <p className="text-[13px] sm:text-[14px] leading-[1.85] mb-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
            We are the best e-commerce web design and development company in Thanjavur, offering seamless execution from strategy to launch — and beyond.
          </p>
          <p className="text-[13px] sm:text-[14px] leading-[1.85] mb-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
            We offer performance and conversion-focused custom e-commerce website development services in Thanjavur.
          </p>
          <p className="text-[13px] sm:text-[14px] leading-[1.85]" style={{ color: 'rgba(255,255,255,0.55)' }}>
            We also provide e-commerce web app development services in Thanjavur that improve user experience and functionality.
          </p>
        </div>

      </div>
    </section>
  )
}
