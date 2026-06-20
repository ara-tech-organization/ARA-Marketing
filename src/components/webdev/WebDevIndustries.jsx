import { useState } from 'react'
import {
  HeartPulse, GraduationCap, Building2, ShoppingCart,
  UtensilsCrossed, Factory, TrendingUp, Store, Layers, ArrowRight
} from 'lucide-react'

const industries = [
  { icon: HeartPulse,      title: 'Healthcare',                color: '#db2777', bg: '#fce7f3' },
  { icon: GraduationCap,   title: 'Education',                 color: '#7c3aed', bg: '#ede9fe' },
  { icon: Building2,       title: 'Real Estate',               color: '#2563eb', bg: '#dbeafe' },
  { icon: ShoppingCart,    title: 'E-commerce',                color: '#059669', bg: '#d1fae5' },
  { icon: UtensilsCrossed, title: 'Restaurants & Hospitality', color: '#d97706', bg: '#fef3c7' },
  { icon: Factory,         title: 'Manufacturing',             color: '#0891b2', bg: '#cffafe' },
  { icon: TrendingUp,      title: 'Finance & Consulting',      color: '#2563eb', bg: '#dbeafe' },
  { icon: Store,           title: 'Retail Businesses',         color: '#7c3aed', bg: '#ede9fe' },
]

function IndustryPill({ icon: Icon, title, color, bg }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full cursor-default transition-all duration-300"
      style={{
        background: hovered ? color : bg,
        border: `1.5px solid ${hovered ? color : color + '30'}`,
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hovered ? `0 10px 28px ${color}28` : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
        style={{ background: hovered ? 'rgba(255,255,255,0.2)' : color + '20' }}>
        <Icon size={14} style={{ color: hovered ? '#fff' : color }} />
      </div>
      <span className="text-[13px] font-semibold whitespace-nowrap transition-colors duration-300"
        style={{ color: hovered ? '#fff' : color }}>
        {title}
      </span>
    </div>
  )
}

export default function WebDevIndustries() {
  return (
    <section className="py-24" style={{ background: 'linear-gradient(180deg, #f8faff 0%, #ffffff 100%)' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 shadow-sm">
            <Layers size={11} /> Industries
          </span>
          <h2 className="text-[clamp(23px,2.7vw,39px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Website Solutions for Every{' '}
            <span className="text-gradient-blue">Business Sector</span>
          </h2>
          <p className="text-[15px] text-slate-500 leading-relaxed max-w-xl mx-auto">
            We provide customized website solutions for multiple industries.
          </p>
        </div>

        {/* Pill cloud — centered flex wrap */}
        <div className="reveal flex flex-wrap justify-center gap-3 mb-12">
          {industries.map((ind, i) => (
            <div key={ind.title} className={`delay-${(i % 4) + 1}`}>
              <IndustryPill {...ind} />
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="reveal flex flex-col sm:flex-row items-center justify-between gap-5 px-8 py-6 rounded-2xl"
          style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)', border: '1.5px solid #bfdbfe' }}>
          <p className="text-[14px] text-slate-600 leading-relaxed text-center sm:text-left">
            Our expertise makes us one of the{' '}
            professional web development services in Thanjavur
            {' '}trusted by businesses across every sector.
          </p>
          <a href="/ARA-Marketing/contact-us"
            className="btn-glow inline-flex items-center gap-2 px-5 py-2.5 text-white
              rounded-full text-[13px] font-bold transition-all duration-300 hover:-translate-y-0.5 flex-shrink-0">
            Start Your Project <ArrowRight size={13} />
          </a>
        </div>

      </div>
    </section>
  )
}
