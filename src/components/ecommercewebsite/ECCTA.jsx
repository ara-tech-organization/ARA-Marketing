import { ShoppingCart, ArrowRight, CheckCircle2, Phone } from 'lucide-react'

const promises = [
  'Fully customised e-commerce solutions',
  'Secure and scalable architecture',
  'SEO-friendly development structure',
  'On-time project delivery',
  'Continuous support and maintenance',
]

export default function ECCTA() {
  return (
    <section id="ec-cta" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #020b18 0%, #0c1e4a 40%, #0f2d6b 70%, #1e3a8a 100%)' }}>

      {/* Decorative orbs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 65%)' }} />
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(5,150,105,0.12) 0%, transparent 65%)' }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.030) 1px, transparent 1px)', backgroundSize: '38px 38px' }} />
      <div className="hidden sm:block absolute top-10 right-10 w-[200px] h-[200px] rounded-full border pointer-events-none animate-[spin_36s_linear_infinite]"
        style={{ borderColor: 'rgba(255,255,255,0.08)' }} />
      <div className="hidden sm:block absolute bottom-10 left-10 w-[140px] h-[140px] rounded-full border pointer-events-none animate-[spin_28s_linear_infinite_reverse]"
        style={{ borderColor: 'rgba(5,150,105,0.20)' }} />

      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 md:px-7">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">

          {/* Left: Headline */}
          <div className="flex-1 text-center md:text-left reveal">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6"
              style={{ background: 'rgba(37,99,235,0.22)', color: '#93c5fd', border: '1px solid rgba(37,99,235,0.35)' }}>
              <ShoppingCart size={10} /> Our Delivery Promise
            </div>

            <h2 className="text-[clamp(24px,4vw,50px)] font-bold leading-[1.1] tracking-tight mb-5 text-white">
              Let&apos;s Build Your{' '}
              <span style={{ color: '#60a5fa' }}>
                E-Commerce Store
              </span>{' '}
              Together
            </h2>

            <p className="text-[15px] leading-[1.85] mb-8 max-w-lg mx-auto md:mx-0" style={{ color: 'rgba(255,255,255,0.60)' }}>
              Are you searching to launch a powerful online store that drives sales? Get in touch with the best e-commerce website design and development company in Thanjavur and boost your online business with confidence. We are committed to delivering excellence in every project.
            </p>

            {/* Promise list */}
            <div className="space-y-2.5 mb-8 text-left inline-block">
              {promises.map((p) => (
                <div key={p} className="flex items-center gap-3">
                  <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />
                  <span className="text-[13.5px] font-medium" style={{ color: 'rgba(255,255,255,0.78)' }}>{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA card */}
          <div className="w-full md:w-[380px] flex-shrink-0 reveal">
            <div className="p-7 sm:p-8 rounded-3xl"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1.5px solid rgba(255,255,255,0.14)', backdropFilter: 'blur(20px)', boxShadow: '0 24px 70px rgba(0,0,0,0.40)' }}>

              <h3 className="text-[18px] font-bold text-white mb-2">Start Your E-commerce Journey</h3>
              <p className="text-[13px] mb-6" style={{ color: 'rgba(255,255,255,0.50)' }}>
                Fill out the form and get a free consultation from our expert e-commerce developers.
              </p>

              <div className="space-y-3 mb-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl text-[13px] text-white outline-none transition-all duration-200 font-medium placeholder:font-normal"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.16)',
                    color: 'white',
                  }}
                  onFocus={e => { e.target.style.borderColor = '#3b82f6'; e.target.style.background = 'rgba(37,99,235,0.12)' }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.16)'; e.target.style.background = 'rgba(255,255,255,0.08)' }}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-xl text-[13px] text-white outline-none transition-all duration-200 font-medium placeholder:font-normal"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.16)',
                    color: 'white',
                  }}
                  onFocus={e => { e.target.style.borderColor = '#3b82f6'; e.target.style.background = 'rgba(37,99,235,0.12)' }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.16)'; e.target.style.background = 'rgba(255,255,255,0.08)' }}
                />
                <select
                  className="w-full px-4 py-3 rounded-xl text-[13px] outline-none transition-all duration-200 font-medium"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.16)',
                    color: 'rgba(255,255,255,0.70)',
                  }}
                  onFocus={e => { e.target.style.borderColor = '#3b82f6'; e.target.style.background = 'rgba(37,99,235,0.12)' }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.16)'; e.target.style.background = 'rgba(255,255,255,0.08)' }}>
                  <option value="" style={{ background: '#0f2d6b' }}>Select Platform</option>
                  <option value="shopify" style={{ background: '#0f2d6b' }}>Shopify</option>
                  <option value="woocommerce" style={{ background: '#0f2d6b' }}>WooCommerce</option>
                  <option value="magento" style={{ background: '#0f2d6b' }}>Magento</option>
                  <option value="custom" style={{ background: '#0f2d6b' }}>Custom Build</option>
                  <option value="unsure" style={{ background: '#0f2d6b' }}>Not Sure Yet</option>
                </select>
              </div>

              <a href="/ARA-Marketing/contact"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-white text-[13.5px] font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: '#2563eb', boxShadow: '0 8px 24px rgba(37,99,235,0.40)' }}>
                Call us now! <ArrowRight size={14} />
              </a>

              <div className="flex items-center gap-2 mt-4 justify-center">
                <Phone size={11} className="text-emerald-400" />
                <span className="text-[11px]" style={{ color: 'rgba(255,255,255,0.45)' }}>Free consultation · No commitment</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
