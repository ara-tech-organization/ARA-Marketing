import { ClipboardList, PenTool, ShoppingCart, CreditCard, Rocket, Headphones, Workflow } from 'lucide-react'

const steps = [
  { icon: ClipboardList, num: '01', title: 'Business Analysis & Planning',       desc: 'We study your products, audience, competitors, and revenue goals to map the ideal e-commerce architecture and platform choice.',     color: '#2563eb' },
  { icon: PenTool,       num: '02', title: 'UI/UX Design & Wireframing',          desc: 'Our designers craft high-converting store layouts, product pages, and checkout flows that guide shoppers toward purchase.',             color: '#0891b2' },
  { icon: ShoppingCart,  num: '03', title: 'E-Commerce Platform Setup',           desc: 'We configure Shopify, WooCommerce, or Magento with your catalogue, categories, variants, and custom theme matching your brand.',         color: '#059669' },
  { icon: CreditCard,    num: '04', title: 'Backend & Payment Integration',       desc: 'Secure payment gateways, shipping APIs, inventory sync, and customer account systems are wired up and thoroughly tested.',               color: '#7c3aed' },
  { icon: Rocket,        num: '05', title: 'Testing, Optimisation & Launch',      desc: 'Multi-device testing, page speed optimisation, SEO setup, and a fully monitored go-live ensure a smooth, successful launch.',            color: '#d97706' },
  { icon: Headphones,    num: '06', title: 'Ongoing Support & Maintenance',       desc: 'Post-launch we handle updates, security patches, performance monitoring, and feature enhancements so your store stays ahead.',           color: '#dc2626' },
]

export default function ECProcess() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #f0f7ff 0%, #eff6ff 55%, #e0f2fe 100%)' }}>

      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.07) 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }} />
      <div className="hidden sm:block absolute -top-20 -left-20 w-[380px] h-[380px] rounded-full border border-blue-200/35 pointer-events-none animate-[spin_36s_linear_infinite]" />
      <div className="hidden sm:block absolute -bottom-16 -right-16 w-[300px] h-[300px] rounded-full border border-blue-200/30 pointer-events-none animate-[spin_40s_linear_infinite]" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.22) 0%, transparent 65%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-7">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6 text-blue-600 bg-white/80 shadow-sm"
            style={{ border: '1px solid rgba(37,99,235,0.18)' }}>
            <Workflow size={10} /> Development Process
          </span>
          <h2 className="text-[clamp(22px,4vw,46px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
            How We Build{' '}
            <span style={{ color: '#2563eb' }}>
              E-Commerce Websites
            </span>
          </h2>
          <p className="text-[13.5px] sm:text-[15px] text-slate-500 leading-[1.85] max-w-2xl mx-auto">
            We follow a structured, performance-focused development process — from initial strategy through to a live, high-converting e-commerce store.
          </p>
        </div>

        {/* Desktop: two-column alternating steps */}
        <div className="hidden md:block reveal">
          <div className="relative">
            {/* Central vertical line */}
            <div className="absolute left-1/2 top-8 bottom-8 w-0.5 -translate-x-1/2 pointer-events-none"
              style={{ background: '#2563eb' }} />

            <div className="space-y-6">
              {steps.map(({ icon: Icon, num, title, desc, color }, i) => {
                const isLeft = i % 2 === 0
                return (
                  <div key={num}
                    className="relative flex items-center"
                    style={{ flexDirection: isLeft ? 'row' : 'row-reverse' }}>

                    {/* Card */}
                    <div className="w-[44%] group">
                      <div className="p-6 rounded-2xl bg-white transition-all duration-400 hover:-translate-y-1"
                        style={{ border: `1.5px solid ${color}18`, boxShadow: '0 4px 18px rgba(37,99,235,0.07)' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = color + '38'; e.currentTarget.style.boxShadow = `0 16px 40px ${color}18` }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = color + '18'; e.currentTarget.style.boxShadow = '0 4px 18px rgba(37,99,235,0.07)' }}>
                        <span className="text-[10px] font-black uppercase tracking-widest mb-2 block" style={{ color }}>Step {num}</span>
                        <h3 className="text-[14px] font-bold text-slate-900 leading-snug mb-2">{title}</h3>
                        <p className="text-[12px] text-slate-500 leading-[1.75]">{desc}</p>
                      </div>
                    </div>

                    {/* Center bubble */}
                    <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[52px] h-[52px] rounded-full flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${color}, ${color}cc)`,
                        boxShadow: `0 0 0 5px white, 0 0 0 6.5px ${color}30, 0 8px 24px ${color}35`,
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
            <div key={num} className="flex items-start gap-4 p-5 rounded-2xl bg-white"
              style={{ border: `1.5px solid ${color}18`, boxShadow: '0 4px 16px rgba(37,99,235,0.07)' }}>
              <div className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)`, boxShadow: `0 6px 18px ${color}30` }}>
                <Icon size={16} className="text-white" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest block mb-1" style={{ color }}>Step {num}</span>
                <h3 className="text-[14px] font-bold text-slate-900 leading-snug mb-1">{title}</h3>
                <p className="text-[12px] text-slate-500 leading-[1.75]">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="reveal mt-10 sm:mt-14 text-center px-5 sm:px-8 py-6 rounded-2xl bg-white"
          style={{ border: '1.5px solid rgba(37,99,235,0.12)', boxShadow: '0 6px 24px rgba(37,99,235,0.08)' }}>
          <p className="text-[13px] sm:text-[14px] text-slate-600 leading-[1.85] mb-2">
            We are the <strong className="text-blue-600">best e-commerce web design and development company in Thanjavur</strong>, offering seamless execution from strategy to launch — and beyond.
          </p>
          <p className="text-[13px] sm:text-[14px] text-slate-600 leading-[1.85] mb-2">
            We offer performance and conversion-focused <strong className="text-slate-800">custom e-commerce website development services in Thanjavur</strong>.
          </p>
          <p className="text-[13px] sm:text-[14px] text-slate-600 leading-[1.85]">
            We also provide <strong className="text-blue-600">e-commerce web app development services in Thanjavur</strong> that improve user experience and functionality.
          </p>
        </div>

      </div>
    </section>
  )
}
