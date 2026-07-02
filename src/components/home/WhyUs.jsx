import { useState, useEffect, useRef } from 'react'
import { Star, ArrowRight, Zap, TrendingUp, Eye, BarChart3, Award, Target } from 'lucide-react'

const stats = [
  { val: '150+', num: 150, suffix: '+', label: 'Projects Completed',  icon: Award,      color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe', grad: 'linear-gradient(135deg,#2563eb,#0ea5e9)' },
  { val: '95%',  num: 95,  suffix: '%', label: 'Client Satisfaction', icon: Star,       color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe', grad: 'linear-gradient(135deg,#2563eb,#0ea5e9)' },
  { val: '120+', num: 120, suffix: '+', label: 'SEO Campaigns',       icon: TrendingUp, color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe', grad: 'linear-gradient(135deg,#2563eb,#0ea5e9)' },
  { val: '200%', num: 200, suffix: '%', label: 'Visibility Growth',   icon: Eye,        color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe', grad: 'linear-gradient(135deg,#2563eb,#0ea5e9)' },
  { val: '100+', num: 100, suffix: '+', label: 'Brands Promoted',     icon: Target,     color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe', grad: 'linear-gradient(135deg,#2563eb,#0ea5e9)' },
]

const cards = [
  {
    eyebrow: 'Strategy',
    icon: TrendingUp,
    iconBg: '#eff6ff',
    iconBorder: '#bfdbfe',
    iconColor: '#2563eb',
    title: 'AI-driven campaigns built to scale brands faster.',
    body: 'Smarter targeting, sharper planning, and consistent optimisation for long-term growth.',
  },
  {
    eyebrow: 'Focus',
    icon: Eye,
    iconBg: '#f0f9ff',
    iconBorder: '#bae6fd',
    iconColor: '#0ea5e9',
    title: 'Better visibility, stronger leads, sustainable growth.',
    body: 'We put your brand in front of the right audience at the right time — every time.',
  },
  {
    eyebrow: 'Summary',
    icon: BarChart3,
    iconBg: '#eff6ff',
    iconBorder: '#bfdbfe',
    iconColor: '#2563eb',
    title: 'Performance-first digital marketing for ambitious brands.',
    body: 'We combine AI insights with practical execution to help businesses grow faster without losing consistency.',
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
    <section id="why-us" ref={sectionRef} className="relative overflow-hidden py-16 sm:py-20 bg-white">

      {/* Dot grid — matches about page */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.07) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      {/* Orbs — matches about page */}
      <div className="absolute pointer-events-none rounded-full"
        style={{ top: '-8%', right: '-6%', width: '480px', height: '480px', background: 'radial-gradient(circle, rgba(219,234,254,0.6) 0%, transparent 65%)' }} />
      <div className="absolute pointer-events-none rounded-full"
        style={{ bottom: '-6%', left: '-4%', width: '360px', height: '360px', background: 'radial-gradient(circle, rgba(186,230,253,0.5) 0%, transparent 65%)' }} />

      {/* Decorative rings — matches about page */}
      <div className="absolute hidden lg:block pointer-events-none rounded-full"
        style={{ top: '30%', left: '-3%', width: '160px', height: '160px', border: '1.5px dashed rgba(14,165,233,0.25)' }} />
      <div className="absolute hidden lg:block pointer-events-none"
        style={{ top: '15%', right: '8%', width: '40px', height: '40px', border: '1.5px solid rgba(37,99,235,0.2)', borderRadius: '8px', transform: 'rotate(25deg)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-12 sm:mb-14" style={anim(0)}>

          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
            style={{ background: 'white', color: '#2563eb', border: '1px solid #bfdbfe', boxShadow: '0 2px 12px rgba(37,99,235,0.08)' }}>
            <Zap size={11} /> Growth Metrics
          </span>

          <h2 className="font-bold text-slate-900 leading-tight tracking-tight mb-4"
            style={{ fontSize: 'clamp(24px,3.5vw,43px)' }}>
            Delivering Measurable Growth{' '}
            <span style={{
              background: 'linear-gradient(135deg,#2563eb,#0ea5e9)',
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
              style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', boxShadow: '0 8px 32px rgba(37,99,235,0.3)' }}>
              Get Started <ArrowRight size={13} />
            </a>
          </div>
        </div>

        {/* ── Stats bento grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-6 [&>*:last-child]:col-span-full [&>*:last-child]:w-1/2 [&>*:last-child]:mx-auto sm:[&>*:last-child]:col-span-1 sm:[&>*:last-child]:w-auto sm:[&>*:last-child]:mx-0">
          {stats.map(({ val, num, suffix, label, icon, color, bg, border, grad }, i) => (
            <StatCard
              key={val}
              val={val} num={num} suffix={suffix} label={label}
              icon={icon} color={color} bg={bg} border={border} grad={grad}
              active={visible} delay={160 + i * 70}
            />
          ))}
        </div>

        {/* ── Editorial feature rows — no boxes ── */}
        <div className="flex flex-col mt-10" style={anim(460)}>
          {cards.map(({ eyebrow, icon: Icon, iconColor, title, body }, i) => (
            <div key={eyebrow}
              className="group relative flex items-start gap-5 sm:gap-8 py-8 cursor-default
                transition-all duration-300 pl-0 hover:pl-3"
              style={{ borderBottom: i < 2 ? '1px solid #e8f0fe' : 'none' }}>


              {/* Icon */}
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center
                transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{
                  background: `linear-gradient(135deg, ${iconColor}18, ${iconColor}08)`,
                  border: `1.5px solid ${iconColor}30`,
                  boxShadow: `0 8px 24px ${iconColor}14`,
                }}>
                <Icon size={22} style={{ color: iconColor }} />
              </div>

              {/* Vertical accent line */}
              <div className="hidden sm:block w-px self-stretch flex-shrink-0 my-1 transition-all duration-300"
                style={{ background: `linear-gradient(180deg, ${iconColor}55, transparent)` }} />

              {/* Content */}
              <div className="flex-1 min-w-0 pt-1">
                <span className="text-[10px] font-black uppercase tracking-[0.22em] block mb-2"
                  style={{ color: iconColor }}>{eyebrow}</span>
                <h3 className="text-[16px] font-bold text-slate-900 leading-snug mb-2">{title}</h3>
                <p className="text-[13.5px] text-slate-500 leading-[1.85]">{body}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
