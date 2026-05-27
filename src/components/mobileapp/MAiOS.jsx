import { Smartphone, Star, Shield, Layers, Code2, ArrowRight } from 'lucide-react'

const iosServices = [
  { icon: Code2,   title: 'iOS App Design & Development',    desc: 'Beautiful, intuitive iPhone and iPad applications built natively with Swift.' },
  { icon: Layers,  title: 'Cross-Platform Integration',       desc: 'Seamless iOS and Android development in Thanjavur for a unified user experience.' },
  { icon: Shield,  title: 'Scalable Enterprise iOS Apps',     desc: 'Robust apps for healthcare, eCommerce, finance, and enterprise operations.' },
  { icon: Star,    title: 'App Store Optimisation',           desc: 'Launch-ready apps designed for high visibility, downloads, and conversions.' },
]

export default function MAiOS() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.05) 0%,transparent 65%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(124,58,237,0.04) 0%,transparent 65%)' }} />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-7">
        <div className="flex flex-col lg:flex-row gap-14 items-center">

          {/* Left: Image */}
          <div className="lg:w-[480px] flex-shrink-0 reveal-left order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse,rgba(37,99,235,0.12) 0%,transparent 70%)' }} />
              <div className="relative rounded-3xl overflow-hidden"
                style={{ border: '1.5px solid #e2e8f0', boxShadow: '0 32px 80px rgba(37,99,235,0.12)' }}>
                <img
                  src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop&auto=format&q=80"
                  alt="iOS App Development Thanjavur"
                  className="w-full object-cover"
                  style={{ height: '340px' }}
                  loading="lazy"
                />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg,transparent 50%,rgba(37,99,235,0.12) 100%)' }} />

                {/* Overlay stats */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="flex gap-3">
                    {[
                      { val: '4.8★',  lbl: 'App Store',    color: '#7c3aed' },
                      { val: 'Swift', lbl: 'Native iOS',   color: '#2563eb' },
                      { val: '100%',  lbl: 'App Approval', color: '#0891b2' },
                    ].map(({ val, lbl, color }) => (
                      <div key={lbl} className="flex-1 rounded-2xl px-3 py-3 text-center"
                        style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)', border: `1px solid ${color}20`, boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
                        <p className="text-[15px] font-black leading-tight" style={{ color }}>{val}</p>
                        <p className="text-[9px] text-slate-400 font-medium mt-0.5">{lbl}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="hidden lg:flex absolute -bottom-4 -right-4 items-center gap-3 px-4 py-3 rounded-2xl bg-white animate-float"
                style={{ border: '1px solid #ddd6fe', boxShadow: '0 10px 32px rgba(124,58,237,0.18)' }}>
                <Smartphone size={18} style={{ color: '#7c3aed' }} />
                <div>
                  <p className="text-[9px] text-slate-400 font-semibold">Mobile App for</p>
                  <p className="text-[13px] font-black text-slate-800">iOS &amp; Android</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1 reveal-right order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6"
              style={{ background: 'rgba(37,99,235,0.08)', color: '#2563eb', border: '1px solid rgba(37,99,235,0.2)' }}>
              <Smartphone size={11} /> iOS App Development
            </span>
            <h2 className="text-[clamp(22px,3vw,38px)] font-bold text-slate-900 leading-tight tracking-tight mb-5">
              iOS App Development{' '}
              <span style={{ background: 'linear-gradient(135deg,#7c3aed,#2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Services
              </span>
            </h2>
            <p className="text-[15px] text-slate-500 mb-8 leading-[1.85]">
              Our iOS Development team builds strong, user-friendly iPhone and iPad applications. We are a trusted partner for Mobile App Development for iOS &amp; Android in Thanjavur, delivering powerful apps for businesses across all industries.
            </p>

            {/* Service cards — no grid, just flex column */}
            <div className="flex flex-col gap-4">
              {iosServices.map(({ icon: Icon, title, desc }, i) => (
                <div key={title}
                  className={`reveal delay-${i + 1} flex items-start gap-4 p-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 bg-white`}
                  style={{ border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.border = '1px solid rgba(124,58,237,0.25)'
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(124,58,237,0.08)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.border = '1px solid #e2e8f0'
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'
                  }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.15)' }}>
                    <Icon size={16} style={{ color: '#7c3aed' }} />
                  </div>
                  <div>
                    <h3 className="text-[13.5px] font-bold text-slate-800 mb-1">{title}</h3>
                    <p className="text-[12.5px] text-slate-500 leading-[1.65]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact"
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[13.5px] font-bold text-white transition-all duration-300 hover:scale-[1.03]"
              style={{ background: 'linear-gradient(135deg,#7c3aed,#2563eb)', boxShadow: '0 6px 20px rgba(124,58,237,0.25)' }}>
              Get iOS App Consultation <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
