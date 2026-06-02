import { Globe, ArrowRight, ArrowUpRight, ChevronRight, Database, Layers, Cpu, Star, Sparkles, LayoutDashboard } from 'lucide-react'

const stats = [
  { value: '40%+', label: 'Web Powered by WP',  color: '#2563eb' },
  { value: '200+', label: 'CMS Websites Built',  color: '#1d4ed8' },
  { value: '99%',  label: 'Client Satisfaction', color: '#60a5fa' },
]

const highlights = [
  { icon: Database, text: 'Custom WordPress & CMS Development' },
  { icon: Layers,   text: 'Multi-Platform CMS Expertise' },
  { icon: Cpu,      text: 'AI-Powered, SEO-Ready Architecture' },
]

const cmsTags = ['WordPress', 'Shopify', 'Wix', 'Joomla', 'Drupal']

export default function CMSHero() {
  return (
    <section
      className="relative overflow-hidden pt-[72px]"
      style={{ background: 'linear-gradient(145deg, #040c1a 0%, #071a36 55%, #040c1a 100%)' }}
    >
      {/* Background orbs */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.09) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 65%)' }} />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 md:px-7 py-10 sm:py-16">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">

          {/* ── Left: Text ── */}
          <div className="flex-1 min-w-0 lg:pr-4">

            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-[13px] mb-6 animate-hero-enter"
              style={{ color: 'rgba(255,255,255,0.4)' }}>
              <a href="/" className="hover:text-blue-400 transition-colors duration-200">Home</a>
              <ChevronRight size={13} style={{ color: 'rgba(255,255,255,0.2)' }} />
              <span>Services</span>
              <ChevronRight size={13} style={{ color: 'rgba(255,255,255,0.2)' }} />
              <span>Web Design</span>
              <ChevronRight size={13} style={{ color: 'rgba(255,255,255,0.2)' }} />
              CMS Website
            </nav>

            {/* Badge */}
            <div className="animate-hero-d1 mb-5">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest"
                style={{ background: 'rgba(37,99,235,0.12)', color: '#93c5fd', border: '1px solid rgba(37,99,235,0.3)' }}
              >
                <Sparkles size={11} />
                CMS Website Development — Thanjavur
              </span>
            </div>

            {/* H1 */}
            <h1 className="animate-hero-d2 text-[clamp(22px,2.5vw,40px)] font-bold text-white leading-[1.1] tracking-tight mb-6">
              Build Powerful WordPress{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #60a5fa 50%, #60a5fa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Websites
              </span>{' '}
              That Grow Your Business
            </h1>

            {/* Description */}
            <p className="animate-hero-d3 text-[15px] leading-[1.9] mb-4"
              style={{ color: 'rgba(255,255,255,0.6)' }}>
              Are you seeking the best WordPress development companies in Thanjavur offering AI-based, high-performing, scalable and SEO-friendly websites? We build powerful WordPress solutions for companies of all sizes.
            </p>
            <p className="animate-hero-d3 text-[15px] leading-[1.9] mb-8"
              style={{ color: 'rgba(255,255,255,0.6)' }}>
              Our dedicated team builds fast, secure, mobile-responsive and easy-to-manage websites using WordPress CMS.
            </p>

            {/* Highlights */}
            <div className="animate-hero-d3 flex flex-col gap-2.5 mb-8">
              {highlights.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(37,99,235,0.15)' }}>
                    <Icon size={11} style={{ color: '#60a5fa' }} />
                  </div>
                  <span className="text-[13.5px] font-medium" style={{ color: 'rgba(255,255,255,0.72)' }}>{text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="animate-hero-d4 flex flex-row flex-wrap gap-3 mb-10">
              <a
                href="/ARA-Marketing/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[13.5px] font-semibold text-white transition-all duration-300 hover:scale-[1.03] w-fit"
                style={{ background: 'linear-gradient(135deg, #1d4ed8, #2563eb)', boxShadow: '0 4px 20px rgba(37,99,235,0.28)' }}
              >
                Get a Free Consultation Today <ArrowRight size={15} />
              </a>
              <a
                href="#cms-intro"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[13.5px] font-semibold transition-all duration-300 w-fit"
                style={{ border: '1px solid rgba(37,99,235,0.35)', color: '#93c5fd' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(37,99,235,0.7)'; e.currentTarget.style.background = 'rgba(37,99,235,0.06)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(37,99,235,0.35)'; e.currentTarget.style.background = 'transparent' }}
              >
                Explore Services <ArrowUpRight size={15} />
              </a>
            </div>

            {/* Stats strip */}
            <div className="animate-hero-d5 flex flex-wrap gap-4 sm:gap-8">
              {stats.map(({ value, label, color }, i) => (
                <div
                  key={label}
                  className="flex flex-col"
                  style={{
                    borderLeft: i > 0 ? '1px solid rgba(37,99,235,0.2)' : 'none',
                    paddingLeft: i > 0 ? '2rem' : 0,
                  }}
                >
                  <span className="text-[28px] font-black leading-tight"
                    style={{ background: `linear-gradient(135deg, ${color}, ${color}77)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {value}
                  </span>
                  <span className="text-[11px] font-medium mt-0.5" style={{ color: 'rgba(255,255,255,0.38)' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: CMS Dashboard Mockup ── */}
          <div className="animate-hero-visual hidden md:block md:w-[360px] lg:w-[460px] flex-shrink-0">
            <div className="relative">

              {/* Main card */}
              <div
                className="rounded-3xl overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(37,99,235,0.18)',
                  boxShadow: '0 32px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(37,99,235,0.08)',
                }}
              >
                {/* Header bar */}
                <div
                  className="px-5 py-3.5 flex items-center justify-between"
                  style={{ background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)' }}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(255,255,255,0.2)' }}>
                      <LayoutDashboard size={13} className="text-white" />
                    </div>
                    <span className="text-[12px] font-bold text-white">WordPress Dashboard</span>
                  </div>
                  <span className="text-[10px] font-semibold px-3 py-1 rounded-full text-white"
                    style={{ background: 'rgba(255,255,255,0.2)' }}>
                    Live CMS
                  </span>
                </div>

                {/* Image area */}
                <div className="relative overflow-hidden" style={{ height: '240px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=300&fit=crop&auto=format&q=80"
                    alt="CMS Website Development in Thanjavur — Ara Discover Marketing"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0"
                    style={{ background: 'linear-gradient(135deg, rgba(3,12,9,0.55) 0%, rgba(37,99,235,0.1) 100%)' }} />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {[
                      { lbl: 'SEO Score', val: '98', bg: 'rgba(37,99,235,0.92)' },
                      { lbl: 'Speed', val: 'A+', bg: 'rgba(37,99,235,0.92)' },
                    ].map(({ lbl, val, bg }) => (
                      <div key={lbl} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                        style={{ background: bg, backdropFilter: 'blur(6px)' }}>
                        <span className="text-[11px] font-black text-white">{val}</span>
                        <span className="text-[9px] font-semibold text-white opacity-80">{lbl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom metrics */}
                <div className="flex" style={{ borderTop: '1px solid rgba(37,99,235,0.12)' }}>
                  {[
                    { val: '40%+', lbl: 'Web Market',  color: '#2563eb' },
                    { val: '200+', lbl: 'Sites Built',  color: '#1d4ed8' },
                    { val: 'A+',   lbl: 'Performance',  color: '#60a5fa' },
                    { val: '5★',   lbl: 'Rating',       color: '#60a5fa' },
                  ].map(({ val, lbl, color }, i) => (
                    <div key={lbl} className="flex-1 text-center py-3.5"
                      style={{ borderRight: i < 3 ? '1px solid rgba(37,99,235,0.1)' : 'none' }}>
                      <p className="text-[15px] font-black leading-tight" style={{ color }}>{val}</p>
                      <p className="text-[9px] font-medium mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{lbl}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating: CMS Powered */}
              <div
                className="absolute -top-4 -right-4 rounded-2xl px-4 py-2.5 flex items-center gap-2.5"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(37,99,235,0.28)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.45)',
                }}
              >
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #1d4ed8, #2563eb)' }}>
                  <Globe size={13} className="text-white" />
                </div>
                <div>
                  <p className="text-[9px] font-medium mb-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>Powered By</p>
                  <p className="text-[14px] font-black text-white leading-tight">WordPress CMS</p>
                </div>
              </div>

              {/* Floating: Rating */}
              <div
                className="absolute -bottom-4 -left-4 rounded-2xl px-4 py-2.5 flex items-center gap-2.5"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(245,158,11,0.28)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.45)',
                }}
              >
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
                  <Star size={13} className="text-white" />
                </div>
                <div>
                  <p className="text-[9px] font-medium mb-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>Client Rating</p>
                  <p className="text-[14px] font-black text-white leading-tight">5★ Reviews</p>
                </div>
              </div>

            </div>

            {/* CMS platform tags */}
            <div className="mt-6 flex items-center gap-2 flex-wrap">
              <span className="text-[9px] font-bold uppercase tracking-widest flex-shrink-0 mr-1"
                style={{ color: 'rgba(255,255,255,0.28)' }}>
                CMS Platforms
              </span>
              {cmsTags.map(tag => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-full text-[10px] font-semibold"
                  style={{ background: 'rgba(37,99,235,0.1)', color: '#93c5fd', border: '1px solid rgba(37,99,235,0.2)' }}
                >
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

