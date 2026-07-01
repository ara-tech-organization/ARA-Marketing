import { ShoppingCart, Heart, BookOpen, DollarSign, Truck, Building2, Sparkles } from 'lucide-react'

const industries = [
  { icon: ShoppingCart, title: 'eCommerce & Retail',        desc: 'Feature-rich shopping apps with seamless checkout, product catalogues, and secure payment integrations.', color: '#1e40af' },
  { icon: Heart,        title: 'Healthcare & Fitness',       desc: 'HIPAA-compliant health apps, telemedicine platforms, and fitness trackers with AI wellness insights.',     color: '#dc2626' },
  { icon: BookOpen,     title: 'Education & E-learning',     desc: 'Interactive learning apps with video, quizzes, and progress tracking for students and educators.',        color: '#2563eb' },
  { icon: DollarSign,   title: 'Finance & Banking',          desc: 'Secure fintech apps with real-time transactions, budgeting tools, and robust data encryption.',         color: '#2563eb' },
  { icon: Truck,        title: 'Logistics & Transportation', desc: 'Fleet management, live tracking, and delivery optimisation apps for modern supply chains.',              color: '#0ea5e9' },
  { icon: Building2,    title: 'Startups & Enterprises',     desc: 'Scalable mobile solutions for startups launching fast and enterprises modernising at scale.',             color: '#0ea5e9' },
]

export default function MAIndustries() {
  const topTwo   = industries.slice(0, 2)
  const bottomFour = industries.slice(2)

  return (
    <section className="py-16 sm:py-16 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg,#03111f 0%,#040d1a 100%)' }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse,rgba(37,99,235,0.12) 0%,transparent 70%)' }} />
      <div className="absolute inset-0 pointer-events-none opacity-15"
        style={{ backgroundImage: 'radial-gradient(circle,rgba(37,99,235,0.5) 1px,transparent 1px)', backgroundSize: '44px 44px' }} />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 md:px-7">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(37,99,235,0.15)', color: '#60a5fa', border: '1px solid rgba(37,99,235,0.3)' }}>
            <Sparkles size={11} /> Industries We Serve
          </span>
          <h2 className="text-[clamp(23px,2.7vw,39px)] font-bold text-white leading-tight tracking-tight mb-4">
            Mobile Apps for Every{' '}
            <span style={{ background: 'linear-gradient(135deg,#60a5fa,#60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Industry
            </span>
          </h2>
          <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#94a3b8' }}>
            We serve businesses across diverse industries with tailored mobile app solutions that solve real problems and drive real growth.
          </p>
        </div>

        <div className="flex flex-col gap-5 reveal">

          {/* Top row: 2 large cards side-by-side from sm */}
          <div className="flex flex-col sm:flex-row gap-5">
            {topTwo.map(({ icon: Icon, title, desc, color }) => (
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
                <h3 className="text-[15px] font-bold text-white mb-2">{title}</h3>
                <p className="text-[13px] leading-[1.75]" style={{ color: '#94a3b8' }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom row: 4 cards — 1 col on mobile, 2 col on sm, 4 col on lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {bottomFour.map(({ icon: Icon, title, desc, color }) => (
              <div key={title}
                className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-default"
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
                <h3 className="text-[13px] font-bold text-white mb-2">{title}</h3>
                <p className="text-[12.5px] leading-[1.7]" style={{ color: '#94a3b8' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
