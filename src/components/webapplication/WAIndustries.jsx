import { ShoppingCart, HeartPulse, BookOpen, Landmark, Truck, Rocket } from 'lucide-react'
import ecommerceImage from '../../assets/WebApp/Ecommerce.png'
import logisticsImage from '../../assets/WebApp/Logistics.png'
import startupImage from '../../assets/WebApp/Startup.png'
import financeImage from '../../assets/WebApp/Finance.png'
import educationImage from '../../assets/WebApp/Education.png'
import healthcareImage from '../../assets/WebApp/Healthcare.png'

const industries = [
  {
    icon: ShoppingCart,
    label: 'eCommerce & Retail',
    desc: 'Scalable storefronts with AI-driven product discovery and seamless checkout flows.',
    color: '#2563eb',
    grad: 'linear-gradient(135deg,#1d4ed8,#2563eb)',
    image: ecommerceImage,
  },
  {
    icon: HeartPulse,
    label: 'Healthcare & Fitness',
    desc: 'HIPAA-ready patient portals, appointment systems, and fitness tracking applications.',
    color: '#0891b2',
    grad: 'linear-gradient(135deg,#0369a1,#0891b2)',
    image: healthcareImage,
  },
  {
    icon: BookOpen,
    label: 'Education & E-learning',
    desc: 'Interactive LMS platforms, virtual classrooms, and student management systems.',
    color: '#1d4ed8',
    grad: 'linear-gradient(135deg,#1e3a8a,#1d4ed8)',
    image: educationImage,
  },
  {
    icon: Landmark,
    label: 'Finance & Banking',
    desc: 'Secure fintech apps, dashboards, and payment platforms built for compliance.',
    color: '#2563eb',
    grad: 'linear-gradient(135deg,#1e3a8a,#2563eb)',
    image: financeImage,
  },
  {
    icon: Truck,
    label: 'Logistics & Transportation',
    desc: 'Real-time tracking, fleet management, and supply chain optimisation tools.',
    color: '#0891b2',
    grad: 'linear-gradient(135deg,#155e75,#0891b2)',
    image: logisticsImage,
  },
  {
    icon: Rocket,
    label: 'Startups & Enterprises',
    desc: 'MVP-to-scale solutions and enterprise platforms built for growth and agility.',
    color: '#1d4ed8',
    grad: 'linear-gradient(135deg,#1e40af,#1d4ed8)',
    image: startupImage,
  },
]

export default function WAIndustries() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, white 0%, #f0f7ff 100%)' }}
    >
      <div className="max-w-[1200px] mx-auto px-3 xs:px-4 sm:px-6 md:px-7">

        <div className="text-center mb-10 sm:mb-14 reveal">
          <span
            className="inline-flex items-center gap-2 px-3 xs:px-4 py-1.5 rounded-full text-[10px] xs:text-[11px] font-black uppercase tracking-widest mb-4 sm:mb-5"
            style={{ background: 'rgba(37,99,235,0.08)', color: '#2563eb', border: '1px solid rgba(37,99,235,0.18)' }}
          >
            <Rocket size={10} /> Industries We Serve
          </span>
          <h2 className="text-[clamp(22px,3vw,42px)] font-bold tracking-tight text-slate-900 mb-3 sm:mb-4">
            Built for Every{' '}
            <span style={{ background: 'linear-gradient(135deg,#2563eb,#0891b2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Industry
            </span>
          </h2>
          <p className="text-[13px] xs:text-[14px] text-slate-500 max-w-[480px] mx-auto leading-relaxed px-2">
            Tailored web application solutions across diverse sectors, empowering businesses of all sizes to grow digitally.
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {industries.map(({ icon: Icon, label, desc, color, grad, image }, i) => (
            <div
              key={label}
              className="group relative rounded-3xl overflow-hidden cursor-default reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Image area */}
              <div className="relative overflow-hidden" style={{ height: '180px' }}>
                <img
                  src={image}
                  alt={label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-400"
                  style={{ background: 'linear-gradient(180deg,rgba(15,23,42,0.3) 0%,rgba(15,23,42,0.72) 100%)', opacity: 1 }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-400"
                  style={{ background: grad }}
                />
                {/* Icon */}
                <div
                  className="absolute top-3 xs:top-4 left-3 xs:left-4 w-9 xs:w-10 h-9 xs:h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.25)' }}
                >
                  <Icon size={17} className="text-white" />
                </div>
              </div>

              {/* Text */}
              <div
                className="p-4 xs:p-5 transition-colors duration-300"
                style={{ background: 'white', borderTop: `3px solid ${color}` }}
              >
                <h3
                  className="text-[13.5px] xs:text-[15px] font-bold text-slate-800 mb-1.5 group-hover:text-blue-700 transition-colors duration-300"
                >
                  {label}
                </h3>
                <p className="text-[12px] xs:text-[13px] text-slate-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
