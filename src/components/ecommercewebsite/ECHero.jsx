import {
  ShoppingCart, Zap, Shield, ArrowRight, ArrowUpRight,
  ChevronRight, Globe, TrendingUp, CheckCircle2, Star, Package, CreditCard, BarChart2
} from 'lucide-react'

const stats = [
  { value: '50+',  label: 'Stores Launched',    color: '#2563eb' },
  { value: '3x',   label: 'Avg Revenue Growth',  color: '#0ea5e9' },
  { value: '24/7', label: 'Uptime & Security',   color: '#2563eb' },
]

const platformTags = ['Shopify', 'WooCommerce', 'Magento', 'Razorpay', 'Stripe', 'Custom Build']

const quickWins = [
  { icon: TrendingUp,   text: '24/7 automated selling engine'        },
  { icon: Shield,       text: 'Secure payment gateway integration'   },
  { icon: CheckCircle2, text: 'SEO-optimised for maximum visibility' },
]

const orders = [
  { id: '#EC-1842', product: 'Blue Denim Jacket',  amount: '₹2,499', status: 'Confirmed', dot: '#2563eb' },
  { id: '#EC-1841', product: 'Wireless Earbuds Pro', amount: '₹3,999', status: 'Shipping',  dot: '#0ea5e9' },
  { id: '#EC-1840', product: 'Silk Saree (Red)',    amount: '₹5,499', status: 'Delivered', dot: '#2563eb' },
]

export default function ECHero() {
  return (
    <section className="relative overflow-hidden pt-[72px]"
      style={{ background: 'linear-gradient(145deg, #ffffff 0%, #eff6ff 55%, #dbeafe 100%)' }}>

      {/* Orbs */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 65%)', animation: 'float-y 8s ease-in-out infinite' }} />
      <div className="absolute bottom-0 -left-24 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.05) 0%, transparent 65%)' }} />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.10) 1px, transparent 1px)', backgroundSize: '44px 44px' }} />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-7 py-10 sm:py-14">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">

          {/* ── Left: Text ── */}
          <div className="flex-1 min-w-0 lg:pr-4 text-center md:text-left">

            {/* Breadcrumb */}
            <nav className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[13px] text-slate-400 mb-6 animate-hero-enter">
              <a href="/ARA-Marketing/" className="whitespace-nowrap hover:text-blue-600 transition-colors duration-200">Home</a>
              <ChevronRight size={13} className="text-slate-300 flex-shrink-0" />
              <a href="/ARA-Marketing/services/website-development" className="whitespace-nowrap hover:text-blue-600 transition-colors duration-200">Web Design</a>
              <ChevronRight size={13} className="text-slate-300 flex-shrink-0" />
              <span className="whitespace-nowrap text-blue-600 font-medium">Ecommerce Website</span>
            </nav>

            {/* Badge */}
            <div className="animate-hero-d1 mb-5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest text-white"
                style={{ background: '#2563eb', boxShadow: '0 4px 12px rgba(37,99,235,0.22)' }}>
                <ShoppingCart size={11} />
                Ecommerce Website Development
              </span>
            </div>

            {/* H1 */}
            <h1 className="animate-hero-d2 text-slate-900 leading-[1.15] tracking-tight mb-6"
              style={{ fontWeight: 600, fontSize: '40px' }}>
              <span style={{ display: 'block', whiteSpace: 'normal' }}>Build High-Performance</span>
              <span style={{ display: 'block', whiteSpace: 'normal', color: '#2563eb' }}>Ecommerce Websites That Sell 24/7</span>
            </h1>

            <p className="animate-hero-d3 text-[15px] text-slate-600 leading-[1.9] mb-4">
              Are you looking for the best e-commerce development agencies in Thanjavur to develop a fast-loading, SEO-friendly, and robust online store that boosts sales and growth? We are professionals at developing and designing highly converting e-commerce websites that allow businesses to sell products online with ease.
            </p>
            <p className="animate-hero-d3 text-[15px] text-slate-600 leading-[1.9] mb-8">
              Our solutions are built for speed, scalability, security, and maximum conversions.
            </p>

            {/* Quick wins */}
            <div className="animate-hero-d3 flex flex-col gap-2 mb-8">
              {quickWins.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5 justify-center md:justify-start">
                  <Icon size={14} className="text-blue-600 flex-shrink-0" />
                  <span className="text-[13.5px] text-slate-600 font-medium">{text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="animate-hero-d4 flex flex-wrap justify-center md:justify-start gap-3 mb-10">
              <a href="/ARA-Marketing/contact-us"
                className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[13.5px] font-semibold text-white transition-all duration-300 hover:scale-[1.03]"
                style={{ background: '#2563eb', boxShadow: '0 4px 16px rgba(37,99,235,0.22)' }}>
                Start Your E-commerce Journey Today <ArrowRight size={15} />
              </a>
              <a href="#ec-intro"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[13.5px] font-semibold border-2 border-blue-500 text-blue-600 transition-all duration-300 hover:bg-blue-50">
                Explore Solutions <ArrowUpRight size={15} />
              </a>
            </div>

            {/* Stats strip */}
            <div className="animate-hero-d5 flex flex-wrap justify-center md:justify-start gap-4 sm:gap-8">
              {stats.map(({ value, label, color }, i) => (
                <div key={label} className="flex flex-col"
                  style={{ borderLeft: i > 0 ? '1px solid #bfdbfe' : 'none', paddingLeft: i > 0 ? '2rem' : '0' }}>
                  <span className="text-[28px] font-black leading-tight"
                    style={{ background: `linear-gradient(135deg, ${color}, ${color}88)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {value}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium mt-0.5">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Ecommerce Dashboard Mockup ── */}
          <div className="animate-hero-visual hidden md:block md:w-[360px] lg:w-[460px] flex-shrink-0">
            <div className="relative mt-6">

              {/* Dashboard card */}
              <div className="bg-white rounded-3xl overflow-hidden"
                style={{ border: '1px solid #e2e8f0', boxShadow: '0 24px 60px rgba(37,99,235,0.13)' }}>

                {/* Top bar */}
                <div className="px-4 py-3 flex items-center justify-between"
                  style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)' }}>
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(255,255,255,0.18)' }}>
                      <ShoppingCart size={13} className="text-white" />
                    </div>
                    <span className="text-[12px] font-bold text-white">Your E-commerce Store</span>
                  </div>
                  <span className="flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-1 rounded-full text-white"
                    style={{ background: 'rgba(14,165,233,0.4)', border: '1px solid rgba(14,165,233,0.6)' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Store
                  </span>
                </div>

                {/* Revenue chart area */}
                <div className="px-5 py-4" style={{ background: '#f8fbff', borderBottom: '1px solid #f1f5f9' }}>
                  <div className="flex items-end justify-between gap-2 mb-3">
                    <div>
                      <p className="text-[10px] text-slate-400 font-semibold mb-1">TODAY'S REVENUE</p>
                      <p className="text-[22px] font-black text-slate-900 leading-none">₹2,45,800</p>
                    </div>
                    <span className="flex items-center gap-1 text-[11px] font-bold px-2 py-1 rounded-lg"
                      style={{ background: 'rgba(14,165,233,0.1)', color: '#0ea5e9' }}>
                      <TrendingUp size={10} /> +34.2%
                    </span>
                  </div>
                  {/* Bar chart */}
                  <div className="flex items-end gap-1 h-[52px]">
                    {[35, 55, 40, 70, 50, 80, 60, 90, 65, 85, 72, 95].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t-sm transition-all duration-500"
                        style={{
                          height: `${h}%`,
                          background: i === 11
                            ? 'linear-gradient(180deg, #2563eb, #1d4ed8)'
                            : i >= 8
                              ? 'rgba(37,99,235,0.35)'
                              : 'rgba(37,99,235,0.15)',
                        }} />
                    ))}
                  </div>
                </div>

                {/* Metrics row */}
                <div className="flex" style={{ borderBottom: '1px solid #f1f5f9' }}>
                  {[
                    { val: '142', lbl: 'Orders Today',    color: '#2563eb', icon: Package },
                    { val: '98%', lbl: 'Fulfillment Rate', color: '#0ea5e9', icon: CheckCircle2 },
                    { val: '4.9★', lbl: 'Store Rating',   color: '#2563eb', icon: Star },
                  ].map(({ val, lbl, color, icon: Icon }, i) => (
                    <div key={lbl} className="flex-1 text-center py-3.5"
                      style={{ borderRight: i < 2 ? '1px solid #f1f5f9' : 'none' }}>
                      <Icon size={11} className="mx-auto mb-1" style={{ color }} />
                      <p className="text-[14px] font-black leading-tight" style={{ color }}>{val}</p>
                      <p className="text-[9px] text-slate-400 font-medium mt-0.5">{lbl}</p>
                    </div>
                  ))}
                </div>

                {/* Recent orders */}
                <div className="px-5 py-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Recent Orders</p>
                  <div className="space-y-2.5">
                    {orders.map(({ id, product, amount, status, dot }) => (
                      <div key={id} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: dot }} />
                        <div className="flex-1 min-w-0">
                          <p className="text-[11px] font-semibold text-slate-700 truncate">{product}</p>
                          <p className="text-[10px] text-slate-400">{id}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-[11px] font-bold text-slate-800">{amount}</p>
                          <p className="text-[9px] font-semibold" style={{ color: dot }}>{status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating: Cart activity */}
              <div className="absolute -top-5 -right-5 bg-white rounded-2xl px-4 py-3 flex items-center gap-3"
                style={{ border: '1px solid #dbeafe', boxShadow: '0 8px 28px rgba(37,99,235,0.18)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', boxShadow: '0 4px 14px rgba(37,99,235,0.35)' }}>
                  <CreditCard size={15} className="text-white" />
                </div>
                <div>
                  <p className="text-[9.5px] text-slate-400 font-semibold leading-none mb-0.5">Payment Success</p>
                  <p className="text-[15px] font-black text-slate-800 leading-tight">₹8,499</p>
                </div>
              </div>

              {/* Floating: Conversion rate */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-4 py-3 flex items-center gap-3"
                style={{ border: '1px solid #bae6fd', boxShadow: '0 8px 28px rgba(14,165,233,0.18)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', boxShadow: '0 4px 14px rgba(14,165,233,0.35)' }}>
                  <BarChart2 size={15} className="text-white" />
                </div>
                <div>
                  <p className="text-[9.5px] text-slate-400 font-semibold leading-none mb-0.5">Conversion Rate</p>
                  <p className="text-[15px] font-black text-slate-800 leading-tight">4.8% CVR</p>
                </div>
              </div>

            </div>

            {/* Platform tags */}
            <div className="mt-12 flex items-center gap-2 flex-wrap">
              <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 flex-shrink-0 mr-1">
                Platforms
              </span>
              {platformTags.map((tag) => (
                <span key={tag} className="px-2 py-0.5 rounded-full text-[10px] font-semibold"
                  style={{ background: 'rgba(37,99,235,0.06)', color: '#2563eb', border: '1px solid rgba(37,99,235,0.12)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
