import { Smartphone, Code2, Cpu, Layers, CheckCircle2, ArrowRight } from 'lucide-react'

import androidImage from '../../assets/MobileApp/Android.webp'

const services = [
  { icon: Code2,   text: 'Custom Android app development services for unique, tailored business solutions' },
  { icon: Layers,  text: 'Enterprise Android solutions for streamlined and optimised business operations' },
  { icon: Cpu,     text: 'AI mobile app development in Thanjavur with intelligent, smart app features'      },
  { icon: Smartphone, text: 'Expert consultation from a top Android app development firm in Thanjavur'    },
]

export default function MAAndroid() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-16"
      style={{ background: 'linear-gradient(160deg,#03111f 0%,#040d1a 100%)' }}>
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.12) 0%,transparent 65%)' }} />
      <div className="absolute inset-0 pointer-events-none opacity-15"
        style={{ backgroundImage: 'radial-gradient(circle,rgba(37,99,235,0.5) 1px,transparent 1px)', backgroundSize: '44px 44px' }} />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 md:px-7">
        <div className="flex flex-col lg:flex-row gap-14 items-center">

          {/* Left: Content */}
          <div className="flex-1 reveal-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6"
              style={{ background: 'rgba(37,99,235,0.15)', color: '#60a5fa', border: '1px solid rgba(37,99,235,0.3)' }}>
              <Smartphone size={11} /> Android App Development
            </span>
            <h2 className="text-[clamp(21px,2.7vw,37px)] font-bold text-white leading-tight tracking-tight mb-5">
              Android App Development{' '}
              <span style={{ background: 'linear-gradient(135deg,#60a5fa,#60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Services
              </span>
            </h2>
            <p className="text-[15px] mb-8 leading-[1.85]" style={{ color: '#94a3b8' }}>
              We are a top Android app development company in Thanjavur, delivering intuitive and high-performing apps. As an Android app development firm in Thanjavur, our Android mobile application development services are designed around your unique requirements, offering scalability and enterprise-grade security.
            </p>

            {/* Service list */}
            <div className="flex flex-col gap-4 mb-8">
              {services.map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.3)' }}>
                    <Icon size={16} style={{ color: '#60a5fa' }} />
                  </div>
                  <p className="text-[13.5px] leading-[1.75] pt-2" style={{ color: '#cbd5e1' }}>{text}</p>
                </div>
              ))}
            </div>

            <a href="/ARA-Marketing/contact-us"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[13.5px] font-bold text-white transition-all duration-300 hover:scale-[1.03]"
              style={{ background: 'linear-gradient(135deg,#1e40af,#2563eb)' }}>
              Get Android App Consultation <ArrowRight size={15} />
            </a>
          </div>

          {/* Right: Visual */}
          <div className="w-full lg:w-[480px] flex-shrink-0 reveal-right">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse,rgba(37,99,235,0.18) 0%,transparent 70%)' }} />
              <div className="relative rounded-3xl overflow-hidden"
                style={{ border: '1px solid rgba(37,99,235,0.25)', boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}>
                <img
                  src={androidImage}
                  alt="Android App Development Company Thanjavur"
                  className="w-full object-cover h-[220px] sm:h-[280px] md:h-[340px]"
                  loading="lazy"
                />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg,rgba(37,99,235,0.3) 0%,rgba(3,17,31,0.5) 100%)' }} />

                {/* Overlay stats */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="flex gap-3">
                    {[
                      { val: '4.9★', lbl: 'Play Store',   color: '#1e40af' },
                      { val: '100+', lbl: 'Android Apps', color: '#2563eb' },
                      { val: 'Kotlin', lbl: '& Java',     color: '#0ea5e9' },
                    ].map(({ val, lbl, color }) => (
                      <div key={lbl} className="flex-1 rounded-2xl px-3 py-3 text-center"
                        style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', border: `1px solid ${color}40` }}>
                        <p className="text-[15px] font-black text-white">{val}</p>
                        <p className="text-[9px] font-medium mt-0.5" style={{ color: '#94a3b8' }}>{lbl}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="hidden lg:flex absolute -top-4 -right-4 items-center gap-3 px-4 py-3 rounded-2xl animate-float"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(37,99,235,0.4)', backdropFilter: 'blur(12px)' }}>
                <CheckCircle2 size={20} style={{ color: '#60a5fa' }} />
                <span className="text-[12px] font-bold text-white">Top Android Agency</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
