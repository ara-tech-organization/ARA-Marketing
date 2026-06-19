import { CheckCircle2, Layers, TrendingUp, ShieldCheck, Clock4, Globe2 } from 'lucide-react'
import ewIntroImg from '../../assets/Enterprise/e1.webp'

const stats = [
  { val: '500+', label: 'Projects Delivered' },
  { val: '98%',  label: 'Client Satisfaction' },
  { val: '12+',  label: 'Years Experience' },
  { val: '50+',  label: 'Industries Served' },
]

const points = [
  { icon: TrendingUp,  text: 'End-to-end solutions from large-scale portals to eCommerce platforms' },
  { icon: Globe2,      text: 'Latest technology with personalised designs and data-driven insights' },
  { icon: ShieldCheck, text: 'Measurable growth through AI-powered user engagement strategies' },
  { icon: Clock4,      text: 'Transparent process with on-time delivery & post-launch support' },
]

const tiles = [
  { icon: ShieldCheck, label: 'Enterprise Security', color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe' },
  { icon: TrendingUp,  label: 'AI-Powered Growth',   color: '#7c3aed', bg: '#f5f3ff', border: '#ddd6fe' },
  { icon: Globe2,      label: 'Global Scalability',  color: '#0891b2', bg: '#ecfeff', border: '#a5f3fc' },
]

export default function EWIntro() {
  return (
    <section id="ew-intro" className="relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg,#f8faff 0%,#eef4ff 60%,#f4f8ff 100%)' }}>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.05) 1.5px, transparent 1.5px)', backgroundSize: '34px 34px' }} />

      {/* Decorative rings — lg only so they never crowd small screens */}
      <div className="hidden lg:block absolute -right-28 top-1/3 w-[340px] h-[340px] rounded-full pointer-events-none"
        style={{ border: '1.5px solid rgba(37,99,235,0.07)', animation: 'spin 65s linear infinite' }} />
      <div className="hidden lg:block absolute -left-20 bottom-0 w-[240px] h-[240px] rounded-full pointer-events-none"
        style={{ border: '1.5px solid rgba(124,58,237,0.06)', animation: 'spin 50s linear infinite reverse' }} />

      {/* ── Stats strip ── */}
      <div className="relative" style={{ background: 'linear-gradient(90deg,#1e3a8a,#1d4ed8 40%,#0891b2 80%,#0e7490)' }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          {/* 2 cols on xs, 4 cols on md+ */}
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map(({ val, label }, i) => (
              <div key={label}
                className="py-4 sm:py-5 px-3 sm:px-5 text-center"
                style={{
                  borderRight: i < 3 ? '1px solid rgba(255,255,255,0.12)' : 'none',
                  borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.12)' : 'none',
                }}>
                <p className="text-[20px] sm:text-[26px] md:text-[30px] font-bold text-white leading-none mb-1">{val}</p>
                <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-white/55 leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14 lg:py-20">
        {/* Stack on xs/sm/md, side-by-side on lg */}
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-14 items-start">

          {/* ── LEFT: Text block ── */}
          <div className="w-full lg:w-[50%] reveal-left">

            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-4 sm:mb-5 text-blue-600 bg-blue-50"
              style={{ border: '1px solid rgba(37,99,235,0.15)' }}>
              <Layers size={9} /> About Our Service
            </span>

            {/* Heading */}
            <h2 className="text-[clamp(19px,4vw,43px)] font-bold leading-[1.12] tracking-tight mb-4 text-slate-900">
              Trusted{' '}
              <span style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Enterprise Web Development
              </span>{' '}
              Company in Thanjavur
            </h2>

            {/* Accent bar */}
            <div className="w-12 h-[3px] rounded-full mb-4 sm:mb-5"
              style={{ background: 'linear-gradient(90deg,#2563eb,#7c3aed)' }} />

            <p className="text-[12.5px] sm:text-[13.5px] lg:text-[14.5px] text-slate-500 leading-[1.90] mb-6 sm:mb-7">
              In today's competitive market, enterprises need websites that are visually attractive, secure, scalable, and capable of managing complex business operations. Our enterprise web development services in Thanjavur apply the latest technology, personalised designs, and data-driven insights to help enterprises realise measurable growth.
            </p>

            {/* Feature points — 1 col on xs, 2 col on sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {points.map(({ icon: Icon, text }) => (
                <div key={text}
                  className="flex items-start gap-2.5 sm:gap-3 px-3 sm:px-4 py-3 sm:py-3.5 rounded-2xl bg-white cursor-default group transition-all duration-300"
                  style={{ border: '1px solid #e8edf5', boxShadow: '0 2px 10px rgba(37,99,235,0.05)' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#bfdbfe'
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,99,235,0.10)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#e8edf5'
                    e.currentTarget.style.boxShadow = '0 2px 10px rgba(37,99,235,0.05)'
                    e.currentTarget.style.transform = 'none'
                  }}>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-110"
                    style={{ background: 'linear-gradient(135deg,#eff6ff,#dbeafe)', border: '1px solid #bfdbfe' }}>
                    <Icon size={12} className="text-blue-600" />
                  </div>
                  <p className="text-[11.5px] sm:text-[12.5px] font-medium text-slate-600 leading-[1.65]">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Image + tiles ── */}
          <div className="w-full lg:flex-1 reveal-right">

            {/* Main image */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden mb-3 sm:mb-4"
              style={{ boxShadow: '0 20px 56px rgba(37,99,235,0.16)', border: '1.5px solid #dbeafe' }}>
              <img
                src={ewIntroImg}
                alt="Enterprise website development services in Thanjavur — ARA Discover Marketing"
                loading="lazy"
                className="w-full object-cover scale-105 hover:scale-100 transition-transform duration-[1.8s]"
                style={{ height: 'clamp(190px,38vw,340px)' }}
              />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(170deg,transparent 50%,rgba(15,23,42,0.42) 100%)' }} />

              {/* Top-right badge */}
              <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl text-center"
                style={{ background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(12px)', boxShadow: '0 6px 20px rgba(0,0,0,0.11)' }}>
                <p className="text-[16px] sm:text-[20px] font-bold leading-none"
                  style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>98%</p>
                <p className="text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">Client Retention</p>
              </div>

              {/* Bottom left label */}
              <div className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl"
                style={{ background: 'rgba(255,255,255,0.93)', backdropFilter: 'blur(10px)' }}>
                <p className="text-[8.5px] sm:text-[10px] font-bold uppercase tracking-widest text-purple-600 mb-0.5">Enterprise Ready</p>
                <p className="text-[9.5px] sm:text-[11px] font-bold text-slate-800">AI-driven · Scalable · Secure</p>
              </div>
            </div>

            {/* 3 info tiles — always 3 cols */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {tiles.map(({ icon: Icon, label, color, bg, border }) => (
                <div key={label}
                  className="flex flex-col items-center gap-1.5 sm:gap-2 py-3 sm:py-4 px-1.5 sm:px-2 rounded-xl sm:rounded-2xl text-center transition-all duration-300 hover:-translate-y-1 cursor-default"
                  style={{ background: bg, border: `1px solid ${border}` }}>
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center"
                    style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                    <Icon size={12} style={{ color }} />
                  </div>
                  <p className="text-[9px] sm:text-[10.5px] font-bold text-slate-700 leading-tight">{label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
