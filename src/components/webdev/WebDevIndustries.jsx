import { useState } from 'react'
import {
  HeartPulse, GraduationCap, Building2, ShoppingCart,
  UtensilsCrossed, Factory, TrendingUp, Store, Layers
} from 'lucide-react'

const industries = [
  { icon: HeartPulse,      title: 'Healthcare',                color: '#dc2626' },
  { icon: GraduationCap,   title: 'Education',                 color: '#7c3aed' },
  { icon: Building2,       title: 'Real Estate',               color: '#1d4ed8' },
  { icon: ShoppingCart,    title: 'E-commerce',                color: '#059669' },
  { icon: UtensilsCrossed, title: 'Restaurants & Hospitality', color: '#ea580c' },
  { icon: Factory,         title: 'Manufacturing',             color: '#0891b2' },
  { icon: TrendingUp,      title: 'Finance & Consulting',      color: '#0284c7' },
  { icon: Store,           title: 'Retail Businesses',         color: '#9333ea' },
]

function IndustryCard({ icon: Icon, title, color }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="relative flex flex-col items-center text-center px-4 py-7 rounded-3xl cursor-default transition-all duration-350 bg-white"
      style={{
        boxShadow: hovered ? `0 20px 48px ${color}28, 0 4px 16px rgba(0,0,0,0.06)` : '0 2px 16px rgba(0,0,0,0.05)',
        border: hovered ? `1.5px solid ${color}30` : '1.5px solid #f1f5f9',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative mb-5 flex items-center justify-center" style={{ width: 72, height: 72 }}>
        <div className="absolute inset-0 rounded-full transition-all duration-350"
          style={{ background: color + (hovered ? '25' : '10'), filter: 'blur(12px)', transform: 'scale(1.5)' }} />
        <div className="relative flex items-center justify-center rounded-full transition-all duration-350"
          style={{
            width: 64, height: 64,
            background: hovered ? color : color + '12',
            border: `2px solid ${hovered ? color : color + '30'}`,
          }}>
          <Icon size={28} style={{ color: hovered ? '#ffffff' : color, transition: 'color 0.3s ease' }} />
        </div>
      </div>
      <h3 className="text-[13px] font-bold leading-snug transition-colors duration-300"
        style={{ color: hovered ? color : '#334155' }}>
        {title}
      </h3>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full transition-all duration-300"
        style={{ background: hovered ? color : '#e2e8f0' }} />
    </div>
  )
}

export default function WebDevIndustries() {
  return (
    <section className="py-24" style={{ background: 'linear-gradient(180deg, #f8faff 0%, #ffffff 100%)' }}>
      <div className="max-w-[1200px] mx-auto px-7">

        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 shadow-sm">
            <Layers size={11} /> Industries
          </span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Website Solutions for Every{' '}
            <span className="text-gradient-blue">Business Sector</span>
          </h2>
          <p className="text-[15px] text-slate-500 leading-relaxed max-w-xl mx-auto">
            We provide customized website solutions for multiple industries.
          </p>
        </div>

        <div className="reveal grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {industries.map((ind, i) => (
            <div key={ind.title} className={`delay-${(i % 4) + 1}`}>
              <IndustryCard {...ind} />
            </div>
          ))}
        </div>

        <div className="reveal text-center">
          <p className="text-[14px] text-slate-500">
            Our expertise makes us one of the{' '}
            <span className="text-blue-600 font-semibold">professional web development services in Thanjavur</span>
            {' '}trusted by businesses across industries.
          </p>
        </div>

      </div>
    </section>
  )
}
