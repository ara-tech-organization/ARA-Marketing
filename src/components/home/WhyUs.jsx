import { useState, useEffect, useRef } from 'react'
import { Star, ArrowRight, Zap, TrendingUp, Eye, BarChart3, Award, Target } from 'lucide-react'

const stats = [
  { val: '150+', num: 150, suffix: '+', label: 'Projects Completed',  icon: Award,     color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe', grad: 'linear-gradient(135deg,#2563eb,#1d4ed8)' },
  { val: '95%',  num: 95,  suffix: '%', label: 'Client Satisfaction', icon: Star,      color: '#059669', bg: '#ecfdf5', border: '#a7f3d0', grad: 'linear-gradient(135deg,#059669,#047857)' },
  { val: '120+', num: 120, suffix: '+', label: 'SEO Campaigns',       icon: TrendingUp, color: '#7c3aed', bg: '#f5f3ff', border: '#ddd6fe', grad: 'linear-gradient(135deg,#7c3aed,#6d28d9)' },
  { val: '200%', num: 200, suffix: '%', label: 'Visibility Growth',   icon: Eye,       color: '#d97706', bg: '#fffbeb', border: '#fde68a', grad: 'linear-gradient(135deg,#f59e0b,#d97706)' },
  { val: '100+', num: 100, suffix: '+', label: 'Brands Promoted',     icon: Target,    color: '#0891b2', bg: '#ecfeff', border: '#a5f3fc', grad: 'linear-gradient(135deg,#0891b2,#0e7490)' },
]

const cards = [
  {
    eyebrow: 'Strategy',
    icon: TrendingUp,
    title: 'AI-driven campaigns built to scale brands faster.',
    body: 'Smarter targeting, sharper planning, and consistent optimisation for long-term growth.',
    accent: '#2563eb',
    grad: 'linear-gradient(135deg,#1e40af,#2563eb)',
  },
  {
    eyebrow: 'Focus',
    icon: Eye,
    title: 'Better visibility, stronger leads, sustainable growth.',
    body: 'We put your brand in front of the right audience at the right time — every time.',
    accent: '#7c3aed',
    grad: 'linear-gradient(135deg,#6d28d9,#7c3aed)',
  },
  {
    eyebrow: 'Summary',
    icon: BarChart3,
    title: 'Performance-first digital marketing for ambitious brands.',
    body: 'We combine AI insights with practical execution to help businesses grow faster without losing consistency.',
    accent: '#059669',
    grad: 'linear-gradient(135deg,#047857,#059669)',
  },
]

function useCountUp(target, active) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let cur = 0
    const step = Math.max(1, Math.ceil(target / 55))
    const t = setInterval(() => {
      cur += step
      if (cur >= target) { setCount(target); clearInterval(t) }
      else setCount(cur)
    }, 22)
    return () => clearInterval(t)
  }, [target, active])
  return count
}

function StatCard({ val, num, suffix, label, icon: Icon, color, bg, border, grad, active, delay }) {
  const count = useCountUp(num, active)
  return (
    <div
      className="group bg-white rounded-2xl p-5 flex flex-col cursor-default transition-all duration-300"
      style={{ border: `1.5px solid ${border}`, boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = color + '55'
        e.currentTarget.style.boxShadow = `0 16px 40px ${color}18`
        e.currentTarget.style.transform = 'translateY(-5px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = border
        e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)'
        e.currentTarget.style.transform = 'none'
      }}
    >
      {/* Icon */}
      <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ background: bg, border: `1px solid ${border}` }}>
        <Icon size={15} style={{ color }} />
      </div>

      {/* Count */}
      <div
        className="font-bold leading-none tabular-nums mb-1"
        style={{
          fontSize: 'clamp(30px,3vw,44px)',
          opacity: active ? 1 : 0,
          transform: active ? 'none' : 'translateY(14px)',
          transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
          background: grad,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {count}{suffix}
      </div>

      {/* Label */}
      <div className="text-[11px] font-semibold text-slate-400 leading-tight mt-0.5">{label}</div>

      {/* Bottom accent bar on hover */}
      <div className="mt-4 h-[2px] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
        style={{ background: grad }} />
    </div>
  )
}

export default function WhyUs() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.06 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  const anim = (delay, fromY = 24) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'none' : `translateY(${fromY}px)`,
    transition: `opacity 0.60s ease ${delay}ms, transform 0.60s ease ${delay}ms`,
  })

  return (
    <section id="why-us" ref={sectionRef} className="relative overflow-hidden py-16 sm:py-20"
      style={{ background: 'linear-gradient(160deg, #f8faff 0%, #ffffff 50%, #f3f0ff 100%)' }}>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.04) 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }} />

      {/* Orbs */}
      <div className="absolute -top-28 -right-28 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 65%)' }} />
      <div className="absolute -bottom-20 -left-20 w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 65%)' }} />

      {/* Spinning ring decoration */}
      <div className="hidden lg:block absolute top-10 right-10 w-[220px] h-[220px] rounded-full pointer-events-none"
        style={{ border: '1.5px solid rgba(124,58,237,0.07)', animation: 'spin 60s linear infinite' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-12 sm:mb-14" style={anim(0)}>

          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 text-blue-600 bg-blue-50"
            style={{ border: '1px solid rgba(37,99,235,0.15)' }}>
            <Zap size={9} /> Growth Metrics
          </span>

          <h2 className="font-black text-slate-900 leading-[1.15] tracking-tight mb-4"
            style={{ fontSize: 'clamp(24px,3.5vw,50px)' }}>
            Delivering Measurable Growth
            <br className="hidden sm:block" />{' '}
            <span style={{
              background: 'linear-gradient(135deg,#2563eb,#7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Through Strategic Marketing
            </span>
          </h2>

          <p className="text-[14px] sm:text-[15px] text-slate-500 leading-[1.85] max-w-2xl mx-auto mb-7">
            Our AI-driven digital marketing strategies make us the best digital marketing agency
            in Thanjavur for businesses looking to scale faster and achieve sustainable growth.
          </p>

          {/* Stars + CTA */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
              ))}
              <span className="text-[13px] font-semibold text-slate-500 ml-1.5">5.0 Rated</span>
            </div>
            <span className="w-px h-4 bg-slate-200 hidden sm:block" />
            <a href="/ARA-Marketing/contact-us"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[13px] font-bold text-white transition-all duration-300 hover:opacity-90 hover:gap-3"
              style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', boxShadow: '0 6px 20px rgba(37,99,235,0.28)' }}>
              Get Started <ArrowRight size={13} />
            </a>
          </div>
        </div>

        {/* ── Stats bento grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-6">
          {stats.map(({ val, num, suffix, label, icon, color, bg, border, grad }, i) => (
            <StatCard
              key={val}
              val={val} num={num} suffix={suffix} label={label}
              icon={icon} color={color} bg={bg} border={border} grad={grad}
              active={visible} delay={160 + i * 70}
            />
          ))}
        </div>

        {/* ── Feature cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8" style={anim(500)}>
          {cards.map(({ eyebrow, icon: Icon, title, body, accent, grad }) => (
            <div
              key={eyebrow}
              className="group bg-white rounded-2xl overflow-hidden cursor-default transition-all duration-300"
              style={{ border: `1.5px solid ${accent}18`, boxShadow: '0 2px 14px rgba(0,0,0,0.05)' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = accent + '40'
                e.currentTarget.style.boxShadow = `0 18px 44px ${accent}14`
                e.currentTarget.style.transform = 'translateY(-5px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = accent + '18'
                e.currentTarget.style.boxShadow = '0 2px 14px rgba(0,0,0,0.05)'
                e.currentTarget.style.transform = 'none'
              }}
            >
              {/* Gradient top strip */}
              <div className="h-[72px] flex items-center px-5 gap-3" style={{ background: grad }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.18)', border: '1.5px solid rgba(255,255,255,0.28)' }}>
                  <Icon size={17} className="text-white" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.18em]"
                  style={{ color: 'rgba(255,255,255,0.85)' }}>{eyebrow}</span>
              </div>

              {/* Body */}
              <div className="p-5 pb-4">
                <h3 className="text-[13.5px] font-bold text-slate-800 leading-snug mb-2">{title}</h3>
                <p className="text-[12px] text-slate-500 leading-[1.75]">{body}</p>
              </div>

              {/* Bottom sweep bar */}
              <div className="mx-5 mb-4 h-[2px] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
                style={{ background: grad }} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
