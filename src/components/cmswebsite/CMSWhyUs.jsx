import { Palette, Search, Zap, Shield, Smartphone, HeadphonesIcon, Award } from 'lucide-react'

const reasons = [
  { icon: Palette,          title: 'Fully Customised WordPress Development',    desc: 'Every website we build is crafted from scratch — no templates. Unique designs aligned to your brand identity.',          color: '#2563eb' },
  { icon: Search,           title: 'SEO-Optimised Website Structure',           desc: 'Built with Google in mind from day one — proper heading hierarchy, schema markup, fast loading, and clean URLs.',         color: '#2563eb' },
  { icon: Zap,              title: 'Fast Loading & Secure Architecture',        desc: 'Performance-first builds with CDN, image optimisation, security hardening, and caching for lightning-fast pages.',        color: '#1d4ed8' },
  { icon: Smartphone,       title: 'Mobile-First Responsive Design',            desc: 'Every page looks and works flawlessly on phones, tablets, and desktops — tested across all major devices.',              color: '#3b82f6' },
  { icon: Shield,           title: 'Easy-to-Manage CMS Dashboard',             desc: 'We configure your WordPress admin panel so you can update content, add pages, and manage media without any coding.',      color: '#1d4ed8' },
  { icon: HeadphonesIcon,   title: 'Dedicated Support & Maintenance',          desc: 'Post-launch support to keep your website secure, updated, and performing at its peak — we are always here for you.',       color: '#1e40af' },
]

export default function CMSWhyUs() {
  return (
    <section
      className="relative py-16 sm:py-24 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #eff6ff 0%, #dbeafe 55%, #e0f2fe 100%)' }}
    >
      {/* Background glows */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 65%)' }} />
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 65%)' }} />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-12"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.5) 1px, transparent 1px)', backgroundSize: '44px 44px' }} />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 md:px-7">

        <div className="flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-20 items-start">

          {/* Left: Large stat panel */}
          <div className="md:w-[320px] lg:w-[380px] flex-shrink-0 reveal">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6"
              style={{ background: 'rgba(37,99,235,0.08)', color: '#1d4ed8', border: '1px solid rgba(37,99,235,0.2)' }}
            >
              <Award size={11} /> Why Choose Us
            </span>

            <h2 className="text-[clamp(24px,3vw,44px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
              We Build{' '}
              <span style={{ background: 'linear-gradient(135deg, #1d4ed8, #2563eb, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Digital
              </span>{' '}
              <br />Success
            </h2>

            <p className="text-[14px] leading-[1.85] mb-8" style={{ color: '#64748b' }}>
              We are a professional custom CMS WordPress development company in Thanjavur focused on delivering result-oriented digital solutions. Every website we build is a growth engine for your business.
            </p>

            {/* Big achievement numbers */}
            <div className="flex flex-col gap-5">
              {[
                { val: '200+', lbl: 'WordPress Sites Delivered', color: '#2563eb' },
                { val: '5★',   lbl: 'Average Client Rating',    color: '#f59e0b' },
                { val: '100%', lbl: 'Custom-Built Websites',    color: '#2563eb' },
              ].map(({ val, lbl, color }) => (
                <div key={lbl} className="flex items-center gap-4 p-4 rounded-2xl"
                  style={{ background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 2px 12px rgba(37,99,235,0.08)' }}>
                  <span className="text-[32px] font-black leading-none flex-shrink-0" style={{ color }}>{val}</span>
                  <span className="text-[13px] font-medium text-slate-500">{lbl}</span>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="mt-8 rounded-2xl overflow-hidden relative"
              style={{ height: 180, border: '1px solid rgba(37,99,235,0.15)' }}>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=280&fit=crop&auto=format&q=80"
                alt="WordPress Development Team in Thanjavur — Ara Discover Marketing"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(29,78,216,0.35) 0%, rgba(3,12,9,0.35) 100%)' }} />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-[12px] font-bold leading-snug">
                  Expert WordPress developers in Thanjavur — delivering since day one.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Reasons list with vertical accent line */}
          <div className="flex-1 reveal">
            <div className="relative pl-6">
              {/* Vertical connector line */}
              <div className="absolute left-0 top-3 bottom-3 w-px"
                style={{ background: 'linear-gradient(180deg, #2563eb, rgba(37,99,235,0.1))' }} />

              <div className="flex flex-col gap-0">
                {reasons.map(({ icon: Icon, title, desc, color }, i) => (
                  <div
                    key={title}
                    className="group relative pb-8 last:pb-0 transition-all duration-300"
                  >
                    {/* Dot on line */}
                    <div
                      className="absolute -left-[25px] top-1 w-3 h-3 rounded-full border-2 transition-all duration-300 group-hover:scale-150"
                      style={{ background: '#eff6ff', borderColor: color }}
                    />

                    <div
                      className="rounded-2xl p-5 transition-all duration-300 group-hover:-translate-y-0.5"
                      style={{ background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
                      onMouseEnter={e => { e.currentTarget.style.background = `${color}05`; e.currentTarget.style.borderColor = `${color}35` }}
                      onMouseLeave={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.borderColor = '#e2e8f0' }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                          style={{ background: `${color}15`, border: `1px solid ${color}25` }}>
                          <Icon size={17} style={{ color }} />
                        </div>
                        <div>
                          <h3 className="text-[14px] font-bold text-slate-800 mb-1.5 leading-snug">{title}</h3>
                          <p className="text-[12.5px] leading-[1.75]" style={{ color: '#64748b' }}>{desc}</p>
                        </div>
                        <span className="flex-shrink-0 text-[11px] font-black ml-auto pl-3" style={{ color: `${color}40` }}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        {/* SEO keyword closing paragraph */}
        <div className="reveal mt-10 text-center max-w-3xl mx-auto">
          <p className="text-[13px] leading-[1.85]" style={{ color: '#64748b' }}>
            As one of the <strong className="text-slate-600 font-semibold">best WordPress development companies in Thanjavur</strong>, we ensure that every website is developed with an eye for its long-term success. We also offer <strong className="text-slate-600 font-semibold">cms in website design &amp; development in Thanjavur</strong> solutions that improve user experience and engagement.
          </p>
        </div>

        </div>
      </div>
    </section>
  )
}

