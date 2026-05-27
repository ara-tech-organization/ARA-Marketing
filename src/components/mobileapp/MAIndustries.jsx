import { ShoppingCart, Heart, BookOpen, DollarSign, Truck, Building2, Sparkles } from 'lucide-react'

const industries = [
  { icon: ShoppingCart, title: 'eCommerce & Retail',       desc: 'Feature-rich shopping apps with seamless checkout, product catalogues, and payment integrations.',         color: '#7c3aed', size: 'large'  },
  { icon: Heart,        title: 'Healthcare & Fitness',      desc: 'HIPAA-compliant health apps, telemedicine platforms, and fitness trackers with AI wellness insights.',      color: '#dc2626', size: 'large'  },
  { icon: BookOpen,     title: 'Education & E-learning',    desc: 'Interactive learning apps with video, quizzes, and progress tracking for students and educators.',         color: '#2563eb', size: 'medium' },
  { icon: DollarSign,   title: 'Finance & Banking',         desc: 'Secure fintech apps with real-time transactions, budgeting tools, and robust data encryption.',          color: '#059669', size: 'medium' },
  { icon: Truck,        title: 'Logistics & Transportation', desc: 'Fleet management, live tracking, and delivery optimisation apps for modern supply chains.',               color: '#0891b2', size: 'medium' },
  { icon: Building2,    title: 'Startups & Enterprises',    desc: 'Scalable mobile solutions for startups launching fast and enterprises modernising at scale.',              color: '#d97706', size: 'large'  },
]

export default function MAIndustries() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg,#03111f 0%,#040d1a 100%)' }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse,rgba(124,58,237,0.12) 0%,transparent 70%)' }} />
      <div className="absolute inset-0 pointer-events-none opacity-15"
        style={{ backgroundImage: 'radial-gradient(circle,rgba(124,58,237,0.5) 1px,transparent 1px)', backgroundSize: '44px 44px' }} />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-7">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(124,58,237,0.15)', color: '#a78bfa', border: '1px solid rgba(124,58,237,0.3)' }}>
            <Sparkles size={11} /> Industries We Serve
          </span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-bold text-white leading-tight tracking-tight mb-4">
            Mobile Apps for Every{' '}
            <span style={{ background: 'linear-gradient(135deg,#a78bfa,#60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Industry
            </span>
          </h2>
          <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#94a3b8' }}>
            We serve businesses across diverse industries with tailored mobile app solutions that solve real problems and drive real growth.
          </p>
        </div>

        {/* Non-grid layout: top row 2 large, bottom row 4 */}
        <div className="flex flex-col gap-5 reveal">

          {/* Top row: 2 large cards */}
          <div className="flex flex-col sm:flex-row gap-5">
            {industries.filter(i => i.size === 'large').slice(0, 2).map(({ icon: Icon, title, desc, color }) => (
              <div key={title}
                className="flex-1 p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-default"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.border = `1px solid ${color}40`
                  e.currentTarget.style.background = `${color}08`
                  e.currentTarget.style.boxShadow = `0 12px 40px rgba(0,0,0,0.3)`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: `${color}20`, border: `1px solid ${color}35` }}>
                  <Icon size={24} style={{ color }} />
                </div>
                <h3 className="text-[16px] font-bold text-white mb-2">{title}</h3>
                <p className="text-[13px] leading-[1.75]" style={{ color: '#94a3b8' }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom row: 4 cards in a flex wrap */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-5">
            {industries.filter(i => i.size !== 'large' || industries.indexOf(i) >= 2).slice(0, 4).map(({ icon: Icon, title, desc, color }) => (
              <div key={title}
                className="flex-1 min-w-[200px] p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-default"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.border = `1px solid ${color}40`
                  e.currentTarget.style.background = `${color}08`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${color}20`, border: `1px solid ${color}30` }}>
                  <Icon size={19} style={{ color }} />
                </div>
                <h3 className="text-[14px] font-bold text-white mb-2">{title}</h3>
                <p className="text-[12.5px] leading-[1.7]" style={{ color: '#94a3b8' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
