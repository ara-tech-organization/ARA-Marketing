import { Cpu, TrendingUp, ShieldCheck, Paintbrush2, ShoppingBag, Settings2, Zap, CheckCircle2, ArrowUpRight } from 'lucide-react'

const benefits = [
  {
    icon: Cpu,
    title: 'AI-Integrated Websites',
    body: 'Seamless AI integration delivers intelligent user experiences — personalised content, predictive analytics, and smart automation.',
    color: '#7c3aed',
    num: '01',
  },
  {
    icon: TrendingUp,
    title: 'Traffic Growth Engine',
    body: 'Our enterprise web development services in Thanjavur deliver SEO-optimised, high-performance architecture focused on increasing enterprise traffic and conversion rates.',
    color: '#2563eb',
    num: '02',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-Grade Security',
    body: 'Industry-leading SSL, WAF, GDPR compliance and regular security audits protect your sensitive business data.',
    color: '#059669',
    num: '03',
  },
  {
    icon: Paintbrush2,
    title: 'Brand-Aligned Design',
    body: 'Customised design that aligns with your brand identity, business requirements, and user expectations.',
    color: '#f59e0b',
    num: '04',
  },
  {
    icon: ShoppingBag,
    title: 'Enterprise eCommerce',
    body: 'Robust enterprise eCommerce development in Thanjavur — multi-currency, multi-language, ERP-integrated global stores for high-volume sales.',
    color: '#0891b2',
    num: '05',
  },
  {
    icon: Settings2,
    title: 'WordPress CMS Management',
    body: 'Enterprise WordPress development services in Thanjavur for effortless, scalable content management without any technical dependency — ideal for large editorial teams.',
    color: '#4f46e5',
    num: '06',
  },
]

const trustPoints = [
  '500+ enterprise projects delivered',
  '99.9% uptime guaranteed',
  'AI-powered, scalable & secure',
  'GDPR & ISO compliant solutions',
]

export default function EWBenefits() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-white">

      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.035) 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }} />

      <div className="hidden lg:block absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ border: '1.5px solid rgba(124,58,237,0.07)', animation: 'spin 60s linear infinite' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">

        {/* ── Split layout ── */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* LEFT: sticky heading panel */}
          <div className="w-full lg:w-[300px] xl:w-[340px] flex-shrink-0 lg:sticky lg:top-24 reveal-left">

            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-5 text-blue-600 bg-blue-50"
              style={{ border: '1px solid rgba(37,99,235,0.15)' }}>
              <Zap size={9} /> Core Benefits
            </span>

            <h2 className="text-[clamp(22px,3vw,40px)] font-bold text-slate-900 leading-[1.12] tracking-tight mb-4">
              Benefits of{' '}
              <span style={{
                background: 'linear-gradient(135deg,#2563eb,#7c3aed)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Enterprise Website
              </span>{' '}
              Design &amp; Development
            </h2>

            <div className="w-10 h-[3px] rounded-full mb-5"
              style={{ background: 'linear-gradient(90deg,#2563eb,#7c3aed)' }} />

            <p className="text-[13px] sm:text-[14px] text-slate-500 leading-[1.85] mb-7">
              Partnering with ARA Discover Marketing ensures your enterprise gets a future-ready digital platform built for performance, security, and scale.
            </p>

            {/* Trust bullets */}
            <div className="flex flex-col gap-2.5">
              {trustPoints.map(pt => (
                <div key={pt} className="flex items-center gap-2.5">
                  <CheckCircle2 size={14} className="flex-shrink-0" style={{ color: '#2563eb' }} />
                  <span className="text-[12.5px] font-medium text-slate-600">{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: numbered list */}
          <div className="flex-1 reveal-right">
            {benefits.map(({ icon: Icon, title, body, color, num }, i) => (
              <div
                key={num}
                className="group flex items-start gap-5 py-6 cursor-default transition-all duration-300"
                style={{ borderBottom: i < benefits.length - 1 ? '1px solid #f1f5f9' : 'none' }}
                onMouseEnter={e => e.currentTarget.style.paddingLeft = '8px'}
                onMouseLeave={e => e.currentTarget.style.paddingLeft = '0px'}
              >
                {/* Icon column */}
                <div className="flex-shrink-0 pt-0.5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${color}12`, border: `1.5px solid ${color}28` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3
                      className="text-[14px] sm:text-[15px] font-bold text-slate-800 leading-snug transition-colors duration-300 group-hover:text-slate-900"
                    >
                      {title}
                    </h3>
                    <ArrowUpRight
                      size={15}
                      className="flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ color }}
                    />
                  </div>
                  <p className="text-[12.5px] sm:text-[13px] text-slate-500 leading-[1.80]">
                    {body}
                  </p>
                </div>

                {/* Left color line on hover */}
                <div
                  className="absolute left-0 w-[3px] rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"
                  style={{ height: '100%', background: color }}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
