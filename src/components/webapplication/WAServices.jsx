import { useState } from 'react'
import { Settings2, ShoppingBag, Brain, Smartphone, Building2, CheckCircle2 } from 'lucide-react'
import customImg     from '../../assets/WebApp/Custom.webp'
import ecommerceImg  from '../../assets/WebApp/E-commerce.webp'
import aiImg         from '../../assets/WebApp/AI.webp'
import webImg        from '../../assets/WebApp/Web.webp'
import enterpriseImg from '../../assets/WebApp/Enterprise.webp'

const services = [
  {
    num: '01',
    icon: Settings2,
    title: 'Custom Web App Development',
    subtitle: 'Tailored to your unique business objectives',
    desc: 'Our custom web app development services in Thanjavur are tailored to meet your business objectives. All web apps are secure, scalable and optimised to provide a better user experience.',
    highlights: ['Business-specific architecture', 'Secure & scalable codebase', 'Optimised for performance', 'Tailored UI/UX experience'],
    image: customImg,
    color: '#2563eb',
    light: '#f0f7ff',
  },
  {
    num: '02',
    icon: ShoppingBag,
    title: 'eCommerce App Development',
    subtitle: 'Secure, feature-rich online stores',
    desc: 'We are a trusted eCommerce app development company in Thanjavur that builds secure, easy-to-use and feature-rich online stores. Our solutions simplify sales, inventory, and customer interactions efficiently.',
    highlights: ['Secure payment gateways', 'Inventory management', 'Customer interaction tools', 'AI-driven recommendations'],
    image: ecommerceImg,
    color: '#0891b2',
    light: '#f0f9ff',
  },
  {
    num: '03',
    icon: Brain,
    title: 'AI-Driven Solutions',
    subtitle: 'Automate workflows & gain actionable insights',
    desc: 'As a progressive web app development agency in Thanjavur, we use AI to optimise business processes, automate workflows, and deliver actionable insights for better decision-making.',
    highlights: ['AI workflow automation', 'Predictive analytics', 'Smart recommendations', 'Actionable business insights'],
    image: aiImg,
    color: '#1d4ed8',
    light: '#eff6ff',
  },
  {
    num: '04',
    icon: Smartphone,
    title: 'Web & Mobile App Development',
    subtitle: 'Synchronised solutions across all platforms',
    desc: 'We are the best web and mobile applications development company in Thanjavur. Our team delivers synchronised solutions for web and mobile platforms, creating a seamless experience for users.',
    highlights: ['Cross-platform compatibility', 'iOS & Android native apps', 'Flutter & React Native', 'Seamless web-mobile sync'],
    image: webImg,
    color: '#2563eb',
    light: '#f0f7ff',
  },
  {
    num: '05',
    icon: Building2,
    title: 'Enterprise Web Applications',
    subtitle: 'Scalable solutions for large organisations',
    desc: 'Collaborate with ARA Discover Marketing, the top web application development company in Thanjavur, to develop scalable and secure enterprise solutions that perfectly align with your business objectives.',
    highlights: ['Enterprise-grade security', 'Scalable architecture', 'Role-based access control', 'Legacy system integration'],
    image: enterpriseImg,
    color: '#0891b2',
    light: '#f0f9ff',
  },
]

export default function WAServices() {
  const [active, setActive] = useState(0)
  const s = services[active]

  return (
    <section id="wa-services" className="py-16 sm:py-20 lg:py-18 bg-white">
      <div className="max-w-[1200px] mx-auto px-3 xs:px-4 sm:px-6 md:px-7">

        <div className="text-center mb-10 sm:mb-14 reveal">
          <span
            className="inline-flex items-center gap-2 px-3 xs:px-4 py-1.5 rounded-full text-[10px] xs:text-[11px] font-black uppercase tracking-widest mb-4 sm:mb-5"
            style={{ background: 'rgba(37,99,235,0.08)', color: '#2563eb', border: '1px solid rgba(37,99,235,0.18)' }}
          >
            <Settings2 size={10} /> What We Offer
          </span>
          <h2 className="text-[clamp(21px,2.7vw,41px)] font-bold tracking-tight text-slate-900 mb-3 sm:mb-4">
            Our Web App Development{' '}
            <span style={{ background: 'linear-gradient(135deg,#2563eb,#0891b2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Services
            </span>
          </h2>
          <p className="text-[13px] xs:text-[14px] text-slate-500 max-w-[540px] mx-auto leading-relaxed px-2">
            From custom web apps to AI-driven enterprise solutions — we build everything your business needs to thrive.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 items-start">

          {/* Tab list */}
          <div className="lg:w-[260px] flex-shrink-0 w-full">
            <div className="flex flex-col gap-2">
              {services.map((svc, i) => {
                const isActive = i === active
                return (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="flex items-center gap-2.5 xs:gap-3 px-3.5 xs:px-4 py-3 xs:py-3.5 rounded-2xl text-left transition-all duration-300 w-full"
                    style={{
                      background: isActive ? svc.color : '#f8fafc',
                      border: `1.5px solid ${isActive ? svc.color : '#e2e8f0'}`,
                      boxShadow: isActive ? `0 8px 24px ${svc.color}30` : 'none',
                    }}
                  >
                    <span className="text-[9px] xs:text-[10px] font-black flex-shrink-0"
                      style={{ color: isActive ? 'rgba(255,255,255,0.5)' : '#94a3b8' }}>
                      {svc.num}
                    </span>
                    <svc.icon size={14} xs:size={15} style={{ color: isActive ? 'white' : svc.color, flexShrink: 0 }} />
                    <span className="text-[11.5px] xs:text-[12.5px] font-semibold leading-tight"
                      style={{ color: isActive ? 'white' : '#334155' }}>
                      {svc.title}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Content panel */}
          <div className="flex-1 min-w-0 reveal-right">
            <div
              className="rounded-3xl overflow-hidden transition-all duration-500"
              style={{ border: `1.5px solid ${s.light}`, boxShadow: '0 20px 60px rgba(37,99,235,0.10)' }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: '200px' }}>
                <img key={active} src={s.image} alt={s.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0"
                  style={{ background: `linear-gradient(to bottom, transparent 20%, ${s.color}cc 100%)` }} />
                <div className="absolute bottom-3 xs:bottom-4 left-4 xs:left-5 right-4 xs:right-5">
                  <p className="text-[10px] xs:text-[11px] font-bold uppercase tracking-widest text-white/80">{s.subtitle}</p>
                </div>
                <div className="absolute top-3 right-3 px-2.5 xs:px-3 py-1 xs:py-1.5 rounded-full text-[10px] font-black text-white"
                  style={{ background: s.color }}>
                  {s.num}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 xs:p-6 sm:p-8" style={{ background: s.light }}>
                <div className="flex items-center gap-2.5 xs:gap-3 mb-3 sm:mb-4">
                  <div className="w-10 xs:w-11 h-10 xs:h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: s.color, boxShadow: `0 4px 14px ${s.color}40` }}>
                    <s.icon size={18} className="text-white" />
                  </div>
                  <h3 className="text-[15px] xs:text-[17px] sm:text-[19px] font-bold text-slate-900">{s.title}</h3>
                </div>
                <p className="text-[13px] xs:text-[14px] text-slate-600 leading-relaxed mb-4 sm:mb-5">{s.desc}</p>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 xs:gap-2.5">
                  {s.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2">
                      <CheckCircle2 size={12} xs:size={13} style={{ color: s.color, flexShrink: 0 }} />
                      <span className="text-[12px] xs:text-[12.5px] text-slate-600 font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
