import { ShoppingCart, HeartPulse, BookOpen, Landmark, Truck, Rocket } from 'lucide-react'

const industries = [
  {
    icon: ShoppingCart,
    label: 'eCommerce & Retail',
    desc: 'Scalable storefronts with AI-driven product discovery and seamless checkout flows.',
    color: '#4f46e5',
    grad: 'linear-gradient(135deg,#4f46e5,#6366f1)',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=340&fit=crop&auto=format&q=80',
  },
  {
    icon: HeartPulse,
    label: 'Healthcare & Fitness',
    desc: 'HIPAA-ready patient portals, appointment systems, and fitness tracking applications.',
    color: '#7c3aed',
    grad: 'linear-gradient(135deg,#7c3aed,#a78bfa)',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=340&fit=crop&auto=format&q=80',
  },
  {
    icon: BookOpen,
    label: 'Education & E-learning',
    desc: 'Interactive LMS platforms, virtual classrooms, and student management systems.',
    color: '#6366f1',
    grad: 'linear-gradient(135deg,#6366f1,#818cf8)',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&h=340&fit=crop&auto=format&q=80',
  },
  {
    icon: Landmark,
    label: 'Finance & Banking',
    desc: 'Secure fintech apps, dashboards, and payment platforms built for compliance.',
    color: '#4f46e5',
    grad: 'linear-gradient(135deg,#312e81,#4f46e5)',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=340&fit=crop&auto=format&q=80',
  },
  {
    icon: Truck,
    label: 'Logistics & Transportation',
    desc: 'Real-time tracking, fleet management, and supply chain optimisation tools.',
    color: '#7c3aed',
    grad: 'linear-gradient(135deg,#5b21b6,#7c3aed)',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=500&h=340&fit=crop&auto=format&q=80',
  },
  {
    icon: Rocket,
    label: 'Startups & Enterprises',
    desc: 'MVP-to-scale solutions and enterprise platforms built for growth and agility.',
    color: '#6366f1',
    grad: 'linear-gradient(135deg,#4338ca,#6366f1)',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=340&fit=crop&auto=format&q=80',
  },
]

export default function WAIndustries() {
  return (
    <section className="py-20 sm:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #f0f0ff 100%)' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-7">

        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-5"
            style={{ background: 'rgba(79,70,229,0.08)', color: '#4f46e5', border: '1px solid rgba(79,70,229,0.18)' }}>
            <Rocket size={10} /> Industries We Serve
          </span>
          <h2 className="text-[clamp(24px,3vw,42px)] font-bold tracking-tight text-slate-900 mb-4">
            Built for Every{' '}
            <span style={{ background: 'linear-gradient(135deg,#4f46e5,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Industry
            </span>
          </h2>
          <p className="text-[14px] text-slate-500 max-w-[480px] mx-auto leading-relaxed">
            We deliver tailored web application solutions across diverse sectors, empowering businesses of all sizes to grow digitally.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map(({ icon: Icon, label, desc, color, grad, image }, i) => (
            <div
              key={label}
              className="group relative rounded-3xl overflow-hidden cursor-default reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Background image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={image}
                  alt={label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Default overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-400"
                  style={{ background: 'linear-gradient(180deg, rgba(15,10,30,0.3) 0%, rgba(15,10,30,0.75) 100%)', opacity: 1 }}
                />
                {/* Hover gradient overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-400"
                  style={{ background: grad }}
                />
                {/* Icon */}
                <div
                  className="absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.25)' }}
                >
                  <Icon size={18} className="text-white" />
                </div>
              </div>

              {/* Text */}
              <div
                className="p-5 transition-colors duration-300"
                style={{ background: 'white', borderTop: `3px solid ${color}` }}
              >
                <h3 className="text-[15px] font-bold text-slate-800 mb-1.5 group-hover:text-indigo-700 transition-colors duration-300">
                  {label}
                </h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
