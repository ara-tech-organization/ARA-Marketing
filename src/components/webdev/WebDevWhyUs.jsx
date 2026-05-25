import { Smartphone, Search, Zap, Palette, Shield, Headphones, Layers } from 'lucide-react'

const reasons = [
  { icon: Smartphone, title: 'Mobile-first responsive design approach',        color: '#2563eb' },
  { icon: Search,     title: 'SEO-optimized website architecture',             color: '#7c3aed' },
  { icon: Zap,        title: 'Fast loading & performance-focused development', color: '#059669' },
  { icon: Palette,    title: 'Custom UI/UX design solutions',                  color: '#ea580c' },
  { icon: Shield,     title: 'Secure and scalable coding standards',           color: '#0284c7' },
  { icon: Headphones, title: 'Ongoing technical support & maintenance',        color: '#0891b2' },
]

export default function WebDevWhyUs() {
  return (
    <section className="py-24" style={{ background: 'linear-gradient(180deg, #f0f9ff 0%, #f8faff 100%)' }}>
      <div className="max-w-[1200px] mx-auto px-7">

        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 shadow-sm">
            <Layers size={11} /> Why Choose Us
          </span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Why Businesses Trust Our{' '}
            <span className="text-gradient-blue">Web Development</span> Expertise
          </h2>
          <p className="text-[15px] text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Ara Discover Marketing stands apart from other professional web development services in
            Thanjavur by emphasising quality, innovation, and long-term digital success.
          </p>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          {reasons.map(({ icon: Icon, title, color }, i) => (
            <div
              key={title}
              className="group relative bg-white rounded-2xl overflow-hidden cursor-default transition-all duration-300"
              style={{ border: '1.5px solid #f1f5f9', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = `0 16px 40px ${color}18`
                e.currentTarget.style.borderColor = color + '40'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.04)'
                e.currentTarget.style.borderColor = '#f1f5f9'
              }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-r-sm"
                style={{ background: `linear-gradient(180deg, ${color}, ${color}88)` }} />
              <div className="flex items-center gap-4 pl-8 pr-6 py-5">
                <span className="absolute right-4 top-1/2 -translate-y-1/2 font-black leading-none select-none pointer-events-none"
                  style={{ fontSize: 52, color: color + '0d', fontFamily: 'var(--font-poppins)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0
                  transition-all duration-300 group-hover:scale-110"
                  style={{ background: color + '12' }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <p className="relative text-[14px] font-semibold text-slate-700 leading-snug">{title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal text-center">
          <p className="text-[13.5px] text-slate-500">
            We are also recognised as one of the{' '}
            <span className="text-blue-600 font-semibold">top website design and development companies in Thanjavur</span>
            {' '}creating contemporary websites for efficient online business expansion.
          </p>
        </div>

      </div>
    </section>
  )
}
