import { Database, RefreshCw, TrendingUp, Users, GitBranch, Globe2, CheckCircle2, Zap } from 'lucide-react'
import dwBenefitsImg from '../../assets/Dynamic/d1.webp'

const benefits = [
  { icon: Database,   label: 'Easy content management through CMS platforms',   color: '#93c5fd' },
  { icon: RefreshCw,  label: 'Real-time updates without developer dependency',   color: '#7dd3fc' },
  { icon: TrendingUp, label: 'Scalable architecture for business growth',         color: '#93c5fd' },
  { icon: Users,      label: 'Personalised user experience',                     color: '#7dd3fc' },
  { icon: GitBranch,  label: 'Integration with databases and APIs',              color: '#93c5fd' },
]

export default function DWBenefits() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-16 overflow-hidden bg-white">

      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'var(--brand-gradient-dots)', backgroundSize: '36px 36px' }} />
      <div className="hidden sm:block absolute -top-20 -right-20 w-[340px] h-[340px] rounded-full border border-blue-100/50 pointer-events-none animate-[spin_34s_linear_infinite]" />
      <div className="hidden sm:block absolute -bottom-16 -left-16 w-[280px] h-[280px] rounded-full border border-sky-100/40 pointer-events-none animate-[spin_28s_linear_infinite_reverse]" />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        {/* ── Header ── */}
        <div className="text-center mb-10 sm:mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 text-blue-600 bg-blue-50"
            style={{ border: '1px solid rgba(37,99,235,0.15)' }}>
            <Zap size={10} /> Key Benefits
          </span>
          <h2 className="text-[clamp(21px,3.6vw,45px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
            Benefits of{' '}
            <span style={{ background: 'var(--brand-gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Dynamic Websites
            </span>
          </h2>
          <p className="text-[13.5px] sm:text-[15px] text-slate-500 leading-[1.85] max-w-2xl mx-auto">
            Static websites provide less flexibility and performance than dynamic websites. Our dynamic web design services in Thanjavur are crafted for maximum efficiency & user engagement.
          </p>
        </div>

        {/* ── Split panel ── */}
        <div className="reveal flex flex-col lg:flex-row gap-0 rounded-3xl overflow-hidden"
          style={{ boxShadow: '0 24px 80px rgba(37,99,235,0.15)', border: '1.5px solid #dbeafe' }}>

          {/* Left dark panel */}
          <div className="lg:w-[48%] flex-shrink-0 relative overflow-hidden px-5 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-14"
            style={{ background: '#f0f9ff' }}>
            <div className="absolute inset-0 pointer-events-none"
              style={{ backgroundImage: 'var(--brand-gradient-dots)', backgroundSize: '28px 28px', opacity: 0.5 }} />
            <div className="absolute -top-20 -right-20 w-[260px] h-[260px] rounded-full pointer-events-none"
              style={{ background: 'var(--brand-gradient-glow)' }} />

            {/* Decorative rings */}
            <div className="absolute -top-24 -left-24 w-56 h-56 rounded-full pointer-events-none"
              style={{ border: '1.5px solid rgba(37,99,235,0.10)' }} />
            <div className="absolute -bottom-20 -right-16 w-64 h-64 rounded-full pointer-events-none"
              style={{ border: '1.5px solid rgba(37,99,235,0.08)' }} />
            <div className="absolute bottom-10 -left-16 w-40 h-40 rounded-full pointer-events-none"
              style={{ border: '1.5px solid rgba(14,165,233,0.10)' }} />

            {/* Accent dots */}
            <div className="absolute top-10 right-10 w-2.5 h-2.5 rounded-sm rotate-45 pointer-events-none"
              style={{ background: 'rgba(37,99,235,0.25)' }} />
            <div className="absolute top-1/2 right-6 w-2 h-2 rounded-full pointer-events-none"
              style={{ background: 'rgba(14,165,233,0.30)' }} />
            <div className="absolute bottom-14 left-8 w-2 h-2 rounded-full pointer-events-none"
              style={{ background: 'rgba(37,99,235,0.22)' }} />

            <div className="relative">
              <p className="text-[10px] font-black uppercase tracking-widest mb-6 text-blue-500">
                Key benefits include
              </p>
              <div className="space-y-4">
                {benefits.map(({ icon: Icon, label, color }) => (
                  <div
                    key={label}
                    className="group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:translate-x-1 cursor-default bg-white"
                    style={{ border: '1px solid #dbeafe' }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = '#93c5fd'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = '#dbeafe'
                    }}
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: 'var(--brand-gradient)', border: '1px solid #bfdbfe' }}>
                      <Icon size={15} className="text-white" />
                    </div>
                    <p className="text-[13px] sm:text-[14px] font-semibold leading-snug text-slate-700">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right light panel */}
          <div className="flex-1 flex flex-col">
            <div className="relative flex-1 overflow-hidden" style={{ minHeight: 200 }}>
              <img
                src={dwBenefitsImg}
                alt="Dynamic web design services in Thanjavur — ARA Discover Marketing"
                loading="lazy"
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[1.5s]"
                style={{ minHeight: 200 }}
              />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg, rgba(37,99,235,0.06) 0%, rgba(30,64,175,0.32) 100%)' }} />
            </div>
            <div className="px-5 sm:px-8 lg:px-10 py-6 sm:py-8 lg:py-10" style={{ background: '#f8fbff' }}>
              <div className="flex items-start gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--brand-gradient)', border: '1px solid #bfdbfe' }}>
                  <Globe2 size={16} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-[13px] font-bold text-slate-900 mb-1.5">Top Dynamic Website Designing & Development Company in Thanjavur</p>
                  <p className="text-[12px] sm:text-[13px] text-slate-500 leading-[1.80]">
                    Our expertise in dynamic web page design & development in Thanjavur helps businesses achieve high-speed, seamless performance under heavy traffic conditions. We create modern digital experiences that drive conversions.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl"
                style={{ background: '#eff6ff', border: '1px solid #bfdbfe' }}>
                <CheckCircle2 size={13} className="text-blue-600 flex-shrink-0" />
                <span className="text-[12px] font-semibold text-blue-700">High-speed, seamless performance under heavy traffic conditions</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
