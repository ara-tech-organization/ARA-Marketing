import { Globe, ShoppingBag, Layout, BookOpen, Server, ArrowRight, CheckCircle2 } from 'lucide-react'

const platforms = [
  {
    icon: Globe,
    name: 'WordPress',
    tagline: 'Most Versatile CMS',
    desc: 'The world\'s #1 CMS powering 40%+ of the web. Perfect for blogs, business sites, portfolios, and enterprise platforms.',
    features: ['Custom Themes & Plugins', 'WooCommerce Integration', 'REST API Ready'],
    color: '#2563eb',
    bg: 'rgba(37,99,235,0.08)',
    border: 'rgba(37,99,235,0.2)',
    badge: 'Most Popular',
  },
  {
    icon: ShoppingBag,
    name: 'Shopify',
    tagline: 'E-Commerce Leader',
    desc: 'Purpose-built for online stores with powerful inventory, payment, and shipping management out of the box.',
    features: ['Secure Checkout', 'Multi-Currency Support', '6000+ Apps'],
    color: '#1d4ed8',
    bg: 'rgba(29,78,216,0.08)',
    border: 'rgba(29,78,216,0.2)',
    badge: 'Best for E-Commerce',
  },
  {
    icon: Layout,
    name: 'Wix',
    tagline: 'Drag & Drop Builder',
    desc: 'Intuitive visual editor ideal for creative businesses and professionals who want beautiful sites with minimal effort.',
    features: ['Visual Drag & Drop', '500+ Templates', 'Built-in SEO Tools'],
    color: '#2563eb',
    bg: 'rgba(37,99,235,0.08)',
    border: 'rgba(37,99,235,0.2)',
    badge: 'Beginner Friendly',
  },
  {
    icon: BookOpen,
    name: 'Joomla',
    tagline: 'Flexible & Powerful',
    desc: 'Highly extensible CMS ideal for community sites, membership platforms, and complex multi-language websites.',
    features: ['Multi-Language Support', 'Strong Access Control', 'Community Driven'],
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.2)',
    badge: 'Enterprise Grade',
  },
  {
    icon: Server,
    name: 'Drupal',
    tagline: 'Enterprise Powerhouse',
    desc: 'The most secure and robust CMS for complex, high-traffic enterprise websites that demand precision and control.',
    features: ['High Security Core', 'Complex Data Structures', 'API-First Architecture'],
    color: '#1d4ed8',
    bg: 'rgba(29,78,216,0.08)',
    border: 'rgba(29,78,216,0.2)',
    badge: 'High Security',
  },
]

export default function CMSPlatforms() {
  return (
    <section
      className="relative py-16 sm:py-24 overflow-hidden"
      style={{ background: '#ffffff' }}
    >
      {/* Background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.1) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 65%)' }} />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-15"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.5) 1px, transparent 1px)', backgroundSize: '42px 42px' }} />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-7">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(37,99,235,0.08)', color: '#1d4ed8', border: '1px solid rgba(37,99,235,0.2)' }}
          >
            <Globe size={11} /> CMS Platform Expertise
          </span>
          <h2 className="text-[clamp(24px,3vw,44px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-5">
            We Specialise in{' '}
            <span style={{ background: 'linear-gradient(135deg, #1d4ed8, #2563eb, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Popular CMS Platforms
            </span>
          </h2>
          <p className="text-[15px] leading-[1.85] max-w-3xl mx-auto" style={{ color: '#64748b' }}>
            Our CMS website development services in Thanjavur are designed to help businesses choose the right platform. We provide seamless integration, smooth performance, and user-friendly content management systems.
          </p>
        </div>

        {/* Platform cards — vertical stacked with left accent bar, unique design */}
        <div className="reveal flex flex-col gap-4">
          {platforms.map(({ icon: Icon, name, tagline, desc, features, color, bg, border, badge }, idx) => (
            <div
              key={name}
              className="group relative rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-0.5"
              style={{ background: '#ffffff', border: `1px solid #e2e8f0`, boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
              onMouseEnter={e => { e.currentTarget.style.border = `1px solid ${border}`; e.currentTarget.style.background = bg; e.currentTarget.style.boxShadow = `0 12px 36px rgba(37,99,235,0.12), 0 0 0 1px ${color}18` }}
              onMouseLeave={e => { e.currentTarget.style.border = '1px solid #e2e8f0'; e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)' }}
            >
              {/* Left color accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl transition-all duration-300"
                style={{ background: `linear-gradient(180deg, ${color}, ${color}44)`, opacity: 0.4 }} />
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl group-hover:opacity-100 transition-all duration-300"
                style={{ background: `linear-gradient(180deg, ${color}, ${color}44)`, opacity: 0 }} />

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 px-7 py-5">

                {/* Icon + name */}
                <div className="flex items-center gap-4 sm:w-48 flex-shrink-0">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${color}18`, border: `1.5px solid ${color}28` }}>
                    <Icon size={20} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-[15px] font-bold text-slate-800">{name}</p>
                    <p className="text-[11px] font-medium" style={{ color: `${color}cc` }}>{tagline}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden sm:block w-px self-stretch" style={{ background: '#e2e8f0' }} />

                {/* Description */}
                <p className="flex-1 text-[13px] leading-[1.75]" style={{ color: '#64748b' }}>{desc}</p>

                {/* Divider */}
                <div className="hidden sm:block w-px self-stretch" style={{ background: '#e2e8f0' }} />

                {/* Features */}
                <div className="flex flex-col gap-1.5 sm:w-52 flex-shrink-0">
                  {features.map(f => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle2 size={11} style={{ color, flexShrink: 0 }} />
                      <span className="text-[11.5px] font-medium" style={{ color: '#475569' }}>{f}</span>
                    </div>
                  ))}
                </div>

                {/* Badge + arrow */}
                <div className="flex flex-row sm:flex-col items-center gap-2 sm:w-28 flex-shrink-0">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap"
                    style={{ background: `${color}18`, color, border: `1px solid ${color}28` }}>
                    {badge}
                  </span>
                  <span className="hidden sm:flex w-7 h-7 rounded-lg items-center justify-center ml-auto transition-all duration-200 group-hover:translate-x-1"
                    style={{ background: `${color}15`, color }}>
                    <ArrowRight size={13} />
                  </span>
                </div>

              </div>

              {/* Bottom index number — decorative */}
              <span className="absolute right-5 bottom-2 text-[48px] font-black leading-none select-none pointer-events-none"
                style={{ color: 'rgba(37,99,235,0.06)', fontVariantNumeric: 'tabular-nums' }}>
                {String(idx + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="reveal text-center mt-10 max-w-3xl mx-auto">
          <p className="text-[14px] mb-2" style={{ color: '#64748b' }}>
            Being one of the top <strong className="text-slate-700 font-semibold">cms web development companies in Thanjavur</strong>, we provide seamless integration, smooth performance, and user-friendly content management systems.
          </p>
          <p className="text-[13.5px] mb-5" style={{ color: '#94a3b8' }}>
            We offer complete <strong className="text-slate-600 font-semibold">custom cms wordpress development services in Thanjavur</strong>, enabling businesses to build fully customised websites without exception.
          </p>
          <a
            href="/ARA-Marketing/contact"
            className="inline-flex items-center gap-2 text-[13.5px] font-semibold transition-all duration-200 hover:gap-3"
            style={{ color: '#2563eb' }}
          >
            Get a Free Platform Consultation <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  )
}

