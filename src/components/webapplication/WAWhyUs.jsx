import { Trophy, Clock, BarChart3, Shield, Handshake, Smartphone, CheckCircle2, ArrowRight, Cpu } from 'lucide-react'

const reasons = [
  { icon: Trophy,    label: 'Experienced Team',              desc: 'Professional custom web application development company in Thanjavur with a proven track record of successful projects across diverse industries.' },
  { icon: Cpu,       label: 'AI-Powered & Scalable',          desc: 'Secure, future-proof applications with built-in AI intelligence for smarter automation, analytics, and business insights.' },
  { icon: Clock,     label: 'Timely Delivery',               desc: 'Transparent communication, clear milestones, and on-time delivery without any compromise on quality or scope.' },
  { icon: Handshake, label: 'Preferred Web & Mobile Partner', desc: 'Preferred choice for web and mobile app development in Thanjavur with a client-first approach and long-term partnerships.' },
  { icon: BarChart3, label: 'Measurable ROI',                desc: 'Optimised performance strategies that deliver quantifiable business results and a positive return on investment.' },
]

const benefits = [
  'High-performance, secure web apps',
  'Custom website application development services',
  'Seamless web and mobile experience',
  'AI integration for smarter analytics',
  'Cost-effective with faster time-to-market',
]

export default function WAWhyUs() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f8fafc 0%, white 100%)' }}
    >
      <div className="max-w-[1200px] mx-auto px-3 xs:px-4 sm:px-6 md:px-7">

        <div className="text-center mb-10 sm:mb-14 reveal">
          <span
            className="inline-flex items-center gap-2 px-3 xs:px-4 py-1.5 rounded-full text-[10px] xs:text-[11px] font-black uppercase tracking-widest mb-4 sm:mb-5"
            style={{ background: 'rgba(37,99,235,0.08)', color: '#2563eb', border: '1px solid rgba(37,99,235,0.18)' }}
          >
            <Trophy size={10} /> Why Choose Ara
          </span>
          <h2 className="text-[clamp(21px,2.7vw,41px)] font-bold tracking-tight text-slate-900">
            Why Businesses{' '}
            <span style={{ background: 'linear-gradient(135deg,#2563eb,#0891b2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Choose Us
            </span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 items-start">

          {/* Left: Reasons list */}
          <div className="flex-1 min-w-0">
            {reasons.map(({ icon: Icon, label, desc }, i) => (
              <div
                key={label}
                className="group flex items-start gap-4 xs:gap-5 py-4 xs:py-5 px-2 xs:px-3 rounded-2xl transition-all duration-300 hover:bg-blue-50/60 reveal"
                style={{
                  borderBottom: i < reasons.length - 1 ? '1px solid #dbeafe' : 'none',
                  transitionDelay: `${i * 55}ms`,
                }}
              >
                <div
                  className="w-11 xs:w-12 h-11 xs:h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{ background: 'rgba(37,99,235,0.09)', color: '#2563eb' }}
                >
                  <Icon size={19} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[13px] xs:text-[14px] font-bold text-slate-800 mb-1">{label}</h3>
                  <p className="text-[12.5px] xs:text-[13.5px] text-slate-500 leading-relaxed">{desc}</p>
                </div>
                <ArrowRight
                  size={13}
                  className="flex-shrink-0 mt-1.5 text-blue-300 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 hidden xs:block"
                />
              </div>
            ))}
          </div>

          {/* Right: Dark integration + benefits card */}
          <div className="lg:w-[400px] flex-shrink-0 w-full reveal-right">
            <div
              className="rounded-3xl overflow-hidden"
              style={{ background: '#071a36', border: '1px solid rgba(37,99,235,0.3)', boxShadow: '0 24px 60px rgba(37,99,235,0.18)' }}
            >
              <div className="h-1" style={{ background: 'linear-gradient(90deg,#1d4ed8,#2563eb,#38bdf8)' }} />

              {/* Integration */}
              <div className="p-6 xs:p-7 pb-5" style={{ borderBottom: '1px solid rgba(37,99,235,0.2)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(37,99,235,0.25)', color: '#60a5fa' }}
                  >
                    <Smartphone size={18} />
                  </div>
                  <h3 className="text-[13px] xs:text-[14px] font-bold leading-tight" style={{ color: '#e2e8f0' }}>
                    Web App + Mobile App Integration
                  </h3>
                </div>
                <p className="text-[13px] xs:text-[13.5px] leading-relaxed" style={{ color: '#94a3b8' }}>
                  We are a full-service web and mobile applications development company in Thanjavur. Your solutions work seamlessly across all platforms — from responsive web apps to mobile-friendly interfaces.
                </p>
              </div>

              {/* Benefits */}
              <div className="p-6 xs:p-7 pt-5">
                <p className="text-[10px] font-black uppercase tracking-widest mb-3 xs:mb-4" style={{ color: '#64748b' }}>
                  Benefits of Our Services
                </p>
                <div className="flex flex-col gap-2.5 xs:gap-3">
                  {benefits.map((b) => (
                    <div key={b} className="flex items-center gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(37,99,235,0.25)' }}
                      >
                        <CheckCircle2 size={11} style={{ color: '#60a5fa' }} />
                      </div>
                      <span className="text-[13px] xs:text-[13.5px] font-medium" style={{ color: '#cbd5e1' }}>{b}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="/ARA-Marketing/contact-us"
                  className="mt-6 xs:mt-7 inline-flex items-center gap-2 px-4 xs:px-5 py-2.5 xs:py-3 rounded-xl text-[12.5px] xs:text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 w-full justify-center"
                  style={{ background: 'linear-gradient(135deg,#1d4ed8,#0891b2)', boxShadow: '0 8px 24px rgba(37,99,235,0.3)' }}
                >
                  Start Building Today <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
