import { Shield, Clock, Headphones, Cpu, ArrowRight, Phone, CheckCircle2 } from 'lucide-react'

const guarantees = [
  {
    icon: Shield,
    title: 'Transparent Process',
    desc: 'Regular updates and full visibility at every stage of development — no surprises.',
    color: '#2563eb',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    desc: 'We respect your timeline and deliver on schedule without compromising quality.',
    color: '#0891b2',
  },
  {
    icon: Headphones,
    title: 'Dedicated Post-Launch Support',
    desc: 'Continuous maintenance and expert support long after your app goes live.',
    color: '#1d4ed8',
  },
  {
    icon: Cpu,
    title: 'AI-Driven Innovation',
    desc: 'Cutting-edge AI and ML integration that keeps your app future-ready and competitive.',
    color: '#2563eb',
  },
]

const ctaPoints = [
  'Free consultation, no commitment',
  'End-to-end development support',
  'Custom solutions for your industry',
  'Proven track record in Thanjavur',
]

export default function WACTA() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-18 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a1a34 0%, #0d1b3a 100%)' }}
    >
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'var(--brand-gradient-glow-dark)' }} />
      <div className="absolute bottom-0 left-0 w-[260px] h-[260px] rounded-full pointer-events-none"
        style={{ background: 'var(--brand-gradient-glow-dark)' }} />

      <div className="relative max-w-[1200px] mx-auto px-3 xs:px-4 sm:px-6 md:px-8">

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-stretch">

          {/* Left: What We Guarantee */}
          <div className="flex-1 min-w-0">
            <div className="mb-7 sm:mb-9 reveal text-center lg:text-left">
              <span
                className="inline-flex items-center gap-2 px-3 xs:px-4 py-1.5 rounded-full text-[10px] xs:text-[11px] font-bold uppercase tracking-widest mb-4"
                style={{ background: 'rgba(96,165,250,0.12)', color: '#93c5fd', border: '1px solid rgba(96,165,250,0.25)' }}
              >
                <Shield size={10} /> What We Guarantee
              </span>
              <h2 className="text-[clamp(21px,2.7vw,37px)] font-bold text-white leading-tight tracking-tight">
                Our Commitment{' '}
                <span className="text-gradient-blue">
                  to You
                </span>
              </h2>
              <p className="text-[13px] xs:text-[14px] text-white/60 mt-3 max-w-[480px] mx-auto lg:mx-0 leading-relaxed">
                Every project comes with our full commitment to excellence, transparency, and your long-term success.
              </p>
            </div>

            <div className="flex flex-col gap-3 xs:gap-4">
              {guarantees.map(({ icon: Icon, title, desc, color }, i) => (
                <div
                  key={title}
                  className={`group flex items-start gap-3 xs:gap-4 p-4 xs:p-5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg reveal delay-${i + 1}`}
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1.5px solid rgba(255,255,255,0.12)' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = `${color}50`
                    e.currentTarget.style.boxShadow = `0 8px 28px ${color}12`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                    e.currentTarget.style.boxShadow = ''
                  }}
                >
                  <div
                    className="w-10 xs:w-11 h-10 xs:h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${color}22`, border: `1px solid ${color}40`, color }}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-[12px] xs:text-[13px] font-bold text-white mb-1">{title}</h3>
                    <p className="text-[12px] xs:text-[13px] text-white/60 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA card */}
          <div className="lg:w-[400px] xl:w-[440px] flex-shrink-0 reveal-right">
            <div
              className="relative rounded-3xl overflow-hidden h-full"
              style={{
                background: '#f0f9ff',
                border: '1px solid #bfdbfe',
                boxShadow: '0 24px 64px rgba(37,99,235,0.18)',
              }}
            >
              {/* Dot pattern */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.5]"
                style={{ backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.18) 1px, transparent 1px)', backgroundSize: '22px 22px' }}
              />
              {/* Glow orb */}
              <div
                className="absolute -top-20 -right-20 w-56 h-56 rounded-full pointer-events-none"
                style={{ background: 'var(--brand-gradient-glow)' }}
              />

              <div className="relative p-6 xs:p-7 sm:p-8 flex flex-col h-full">
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden mb-6 flex-shrink-0"
                  style={{ height: '180px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop&auto=format&q=80"
                    alt="Web App Development Thanjavur — ARA Discover Marketing"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0"
                    style={{ background: 'linear-gradient(180deg, transparent 30%, rgba(30,58,138,0.75) 100%)' }} />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-[10px] xs:text-[11px] font-bold text-white/80 uppercase tracking-widest">
                      Web App Development, Thanjavur
                    </span>
                  </div>
                </div>

                <h3 className="text-[19px] xs:text-[21px] sm:text-[23px] font-bold text-slate-900 leading-tight mb-3">
                  Let&apos;s Build Your Web App Together
                </h3>
                <p className="text-[13px] xs:text-[13.5px] text-slate-600 leading-relaxed mb-5">
                  Begin your journey with a trusted website and application development company in Thanjavur. Get a free consultation — no commitment required.
                </p>

                {/* Points */}
                <div className="flex flex-col gap-2 mb-7">
                  {ctaPoints.map((p) => (
                    <div key={p} className="flex items-center gap-2.5">
                      <CheckCircle2 size={13} className="text-blue-500 flex-shrink-0" />
                      <span className="text-[12.5px] text-slate-700 font-medium">{p}</span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col xs:flex-row gap-2.5 xs:gap-3 mt-auto">
                  <a
                    href="tel:+918110025254"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 xs:px-5 py-3 xs:py-3.5 rounded-xl text-[12.5px] xs:text-[13px] font-bold text-white bg-blue-600 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    <Phone size={13} /> Call Us Now
                  </a>
                  <a
                    href="#wa-services"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 xs:px-5 py-3 xs:py-3.5 rounded-xl text-[12.5px] xs:text-[13px] font-bold text-blue-700 border border-blue-300 bg-white transition-all duration-300 hover:bg-blue-50 hover:-translate-y-0.5"
                  >
                    Our Services <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
