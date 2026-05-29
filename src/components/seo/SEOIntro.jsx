import { Cpu, Globe2, FileText, MapPin, Smartphone, ArrowRight } from 'lucide-react'

const services = [
  { icon: FileText,   label: 'On-Page SEO',   color: '#2563eb', href: '#seo-services' },
  { icon: Globe2,     label: 'Off-Page SEO',  color: '#7c3aed', href: '#seo-services' },
  { icon: Cpu,        label: 'Technical SEO', color: '#0891b2', href: '#seo-services' },
  { icon: MapPin,     label: 'Local SEO',     color: '#059669', href: '#seo-services' },
  { icon: Smartphone, label: 'Mobile SEO',    color: '#dc2626', href: '#seo-services' },
]

export default function SEOIntro() {
  return (
    <section className="py-12 md:py-16 lg:py-24 overflow-hidden" style={{ background: '#ffffff' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* ── Split layout: image left, content right ── */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-14 items-stretch mb-10 md:mb-12 lg:mb-16">

          {/* Left: visual card */}
          <div className="reveal md:w-[380px] lg:w-[460px] flex-shrink-0">
            <div className="relative rounded-3xl overflow-hidden h-full"
              style={{ minHeight: 280, boxShadow: '0 24px 80px rgba(37,99,235,0.14)' }}>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=700&fit=crop&auto=format&q=80"
                alt="AI-Driven SEO Strategies in Thanjavur - Ara Discover Marketing"
                loading="lazy"
                className="w-full h-full object-cover absolute inset-0"
              />
              {/* Overlay */}
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(10,26,52,0.85) 100%)' }} />

              {/* Overlay stats */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex gap-4">
                  {[
                    { val: '200%', lbl: 'Traffic Growth' },
                    { val: '100+', lbl: '1st Page Keywords' },
                  ].map(({ val, lbl }) => (
                    <div key={lbl} className="flex-1 rounded-2xl p-3.5"
                      style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)' }}>
                      <p className="text-[18px] font-black text-white">{val}</p>
                      <p className="text-[10px] text-white/60 font-medium">{lbl}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI badge */}
              <div className="absolute top-5 left-5 flex items-center gap-2 px-3.5 py-2 rounded-xl"
                style={{ background: 'rgba(37,99,235,0.9)', backdropFilter: 'blur(8px)' }}>
                <Cpu size={13} className="text-white" />
                <span className="text-[11px] font-bold text-white uppercase tracking-wider">AI-Powered SEO</span>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div className="flex-1 min-w-0">
            <div className="reveal">
              <h2 className="text-[clamp(24px,3vw,40px)] font-bold text-slate-900 leading-tight
                tracking-tight mb-7">
                AI-Driven SEO Strategies That Deliver{' '}
                <span className="text-gradient-blue">Real Business Results</span>
              </h2>

              <div className="space-y-5">
                <p className="text-[15px] text-slate-500 leading-[1.85]">
                  Ranking on Search Engines in today's competitive world takes more than keywords. Businesses need a solid SEO foundation, optimized content, technical performance, and authority-building tactics.
                </p>
                <p className="text-[15px] text-slate-500 leading-[1.85]">
                  Ara Discover Marketing offers digital marketing SEO services in Thanjavur to help businesses improve global rankings, increase engagement, and maximize online visibility.
                </p>
                <p className="text-[15px] text-slate-500 leading-[1.85]">
                  We are a team of SEO &amp; digital marketing services in Thanjavur, including on-page optimization, technical SEO, local SEO, mobile SEO, and link building campaigns. We are one of the top SEO companies in Thanjavur, providing SEO services that are customized to suit your business goals and target audience.
                </p>
                <p className="text-[15px] text-slate-500 leading-[1.85]">
                  We also offer content marketing and SEO in Thanjavur for brands to build authority, drive relevant traffic, and improve customer engagement by delivering high-quality optimized content.
                </p>
              </div>

              <a href="#seo-services"
                className="mt-8 inline-flex items-center gap-2 text-blue-600 font-semibold text-[14px]
                  hover:gap-3 transition-all duration-300">
                View All SEO Services <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* ── Service strip ── */}
        <div className="reveal">
          <div
            className="flex flex-col sm:flex-row items-stretch rounded-2xl overflow-hidden border border-slate-100"
            style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
          >
            {services.map(({ icon: Icon, label, color, href }, i) => (
              <a
                key={label}
                href={href}
                className={`group flex-1 flex flex-col items-center gap-3 py-6 px-4
                  transition-all duration-300 hover:-translate-y-0.5
                  ${i < services.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-slate-100' : ''}`}
                style={{ background: 'white' }}
                onMouseEnter={e => { e.currentTarget.style.background = `${color}08` }}
                onMouseLeave={e => { e.currentTarget.style.background = 'white' }}
              >
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center text-white
                    transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{ background: color, boxShadow: `0 4px 12px ${color}30` }}
                >
                  <Icon size={18} />
                </div>
                <span className="text-[12px] font-bold text-slate-600 text-center leading-tight
                  group-hover:text-slate-900 transition-colors duration-200">
                  {label}
                </span>
                <div
                  className="w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-8"
                  style={{ background: color }}
                />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
