import { Smartphone, Search, Zap, Shield, Headphones, Eye, Phone, ArrowRight, Layers } from 'lucide-react'

const assurances = [
  { icon: Smartphone, title: 'Fully Responsive Website Design',  color: '#2563eb', num: '01' },
  { icon: Search,     title: 'SEO-Optimized Website Structure',  color: '#7c3aed', num: '02' },
  { icon: Zap,        title: 'Fast Loading & High Performance',  color: '#059669', num: '03' },
  { icon: Shield,     title: 'Secure & Scalable Development',    color: '#d97706', num: '04' },
  { icon: Headphones, title: 'Dedicated Support & Maintenance',  color: '#db2777', num: '05' },
  { icon: Eye,        title: 'Transparent Development Process',  color: '#0891b2', num: '06' },
]

export default function WebDevAssurance() {
  return (
    <section className="relative overflow-hidden py-24"
      style={{ background: 'linear-gradient(180deg, #f8faff 0%, #eff6ff 100%)' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #93c5fd 1px, transparent 1px)', backgroundSize: '28px 28px', opacity: 0.22 }} />
      <svg className="absolute top-0 left-0 w-full pointer-events-none" viewBox="0 0 1200 60" preserveAspectRatio="none" style={{ height: 60 }}>
        <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,0 L0,0 Z" fill="rgba(191,219,254,0.35)" />
      </svg>

      <div className="relative max-w-[1200px] mx-auto px-7">
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 shadow-sm">
            <Layers size={11} /> Our Assurance
          </span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Reliable Website Development with{' '}
            <span className="text-gradient-blue">Full Transparency</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {assurances.map(({ icon: Icon, title, color, num }, i) => (
            <div
              key={title}
              className={`reveal delay-${(i % 4) + 1} group relative bg-white rounded-2xl overflow-hidden cursor-default transition-all duration-400`}
              style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.05)', border: '1.5px solid #f1f5f9' }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = `0 24px 60px ${color}1a`
                e.currentTarget.style.borderColor = color + '40'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.05)'
                e.currentTarget.style.borderColor = '#f1f5f9'
              }}
            >
              <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${color}00, ${color}, ${color}00)` }} />
              <div className="px-7 pt-7 pb-8">
                <span className="absolute bottom-3 right-5 font-black leading-none select-none pointer-events-none"
                  style={{ fontSize: 80, color: color + '09', fontFamily: 'var(--font-poppins)' }}>
                  {num}
                </span>
                <div className="relative mb-6 inline-block">
                  <div className="absolute inset-0 rounded-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"
                    style={{ background: color + '18', transform: 'scale(1.35)', borderRadius: 20, filter: 'blur(8px)' }} />
                  <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center
                    transition-all duration-300 group-hover:scale-110"
                    style={{ background: color + '15' }}>
                    <Icon size={28} style={{ color }} />
                  </div>
                </div>
                <h3 className="relative text-[15px] font-bold text-slate-800 mb-4 leading-snug">{title}</h3>
                <div className="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold"
                  style={{ background: color + '12', color }}>
                  <div className="w-1.5 h-1.5 rounded-full animate-pulse-dot" style={{ background: color }} />
                  Guaranteed
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal">
          <div className="relative rounded-3xl overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 60%, #3b82f6 100%)', boxShadow: '0 20px 60px rgba(37,99,235,0.25)' }}>
            <div className="absolute inset-0 pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.10) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
            <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)' }} />
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 px-10 py-10">
              <div>
                <p className="text-[11px] font-bold text-blue-200 uppercase tracking-widest mb-2">Call Us Today</p>
                <h3 className="text-[clamp(18px,2.5vw,28px)] font-bold text-white leading-tight max-w-lg">
                  Call us today to work with a trusted web development and designing company in
                  thanjavur for your next digital project.
                </h3>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
                <a href="tel:+919876543210"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-blue-600
                    rounded-full text-sm font-bold shadow-lg hover:bg-blue-50
                    hover:-translate-y-0.5 transition-all duration-300">
                  <Phone size={16} /> Call Us Now
                </a>
                <a href="/ARA-Marketing/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/30
                    text-white rounded-full text-sm font-semibold
                    hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                  Get Free Quote <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
