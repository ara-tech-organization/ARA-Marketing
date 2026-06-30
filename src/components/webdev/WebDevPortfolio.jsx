import { useState } from 'react'
import { Building2, ShoppingCart, GraduationCap, HeartPulse, Store, Briefcase, Layers, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    num: '01',
    icon: Building2,
    title: 'Corporate Businesses',
    desc: 'Professional brand websites that establish authority and generate quality leads.',
    tags: ['Brand Identity', 'Lead Gen', 'CMS'],
    count: '20+',
    color: '#2563eb',
    bg: '#dbeafe',
  },
  {
    num: '02',
    icon: ShoppingCart,
    title: 'E-commerce Stores',
    desc: 'Conversion-optimised online stores with secure checkout and product catalogs.',
    tags: ['Product Catalog', 'Payment Gateway', 'SEO'],
    count: '15+',
    color: '#059669',
    bg: '#d1fae5',
  },
  {
    num: '03',
    icon: GraduationCap,
    title: 'Educational Institutions',
    desc: 'Feature-rich portals for admissions, LMS integration, and student engagement.',
    tags: ['LMS', 'Admissions Portal', 'Events'],
    count: '10+',
    color: '#7c3aed',
    bg: '#ede9fe',
  },
  {
    num: '04',
    icon: HeartPulse,
    title: 'Healthcare Providers',
    desc: 'Trusted healthcare websites with appointment booking and patient portals.',
    tags: ['Appointments', 'Patient Portal', 'Trust Design'],
    count: '8+',
    color: '#db2777',
    bg: '#fce7f3',
  },
  {
    num: '05',
    icon: Store,
    title: 'Local Businesses',
    desc: 'Local SEO-focused websites that drive foot traffic and online visibility.',
    tags: ['Google Maps', 'Reviews', 'Local SEO'],
    count: '30+',
    color: '#d97706',
    bg: '#fef3c7',
  },
  {
    num: '06',
    icon: Briefcase,
    title: 'Service-Based Companies',
    desc: 'Clean, credibility-driven service websites with booking and CRM integration.',
    tags: ['Booking', 'Portfolio', 'CRM'],
    count: '18+',
    color: '#0891b2',
    bg: '#cffafe',
  },
]

function ProjectCard({ num, icon: Icon, title, desc, tags, count, color, bg }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden cursor-default transition-all duration-300"
      style={{
        border: hovered ? `1.5px solid ${color}35` : '1.5px solid #f1f5f9',
        boxShadow: hovered ? `0 16px 48px ${color}14` : '0 2px 12px rgba(0,0,0,0.04)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="h-1 w-full transition-all duration-300"
        style={{ background: hovered ? `linear-gradient(90deg, ${color}, ${color}88)` : `linear-gradient(90deg, ${color}30, ${color}10)` }} />

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
              style={{ background: hovered ? color : bg }}>
              <Icon size={20} style={{ color: hovered ? '#fff' : color }} />
            </div>
            <span className="text-[11px] font-black tracking-widest select-none"
              style={{ color: hovered ? color : '#e2e8f0', fontFamily: 'var(--font-poppins)' }}>
              {num}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-full transition-all duration-300"
              style={{ background: hovered ? color : bg, color: hovered ? '#fff' : color }}>
              {count} Projects
            </span>
            <div className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
              style={{ background: hovered ? color : bg, transform: hovered ? 'rotate(0deg)' : 'rotate(-45deg)' }}>
              <ArrowUpRight size={13} style={{ color: hovered ? '#fff' : color }} />
            </div>
          </div>
        </div>

        <h3 className="text-[14px] font-bold mb-2 leading-snug transition-colors duration-300"
          style={{ color: hovered ? color : '#1e293b' }}>
          {title}
        </h3>

        <p className="text-[13px] text-slate-400 leading-relaxed mb-4">{desc}</p>

        <div className="flex flex-wrap gap-1.5">
          {tags.map(tag => (
            <span key={tag}
              className="px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all duration-300"
              style={{
                background: hovered ? `${color}10` : '#f8fafc',
                color: hovered ? color : '#94a3b8',
                border: `1px solid ${hovered ? `${color}20` : '#f1f5f9'}`,
              }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function WebDevPortfolio() {
  return (
    <section className="py-16" style={{ background: 'linear-gradient(180deg, #f8faff 0%, #f0f6ff 100%)' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-7">

        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 shadow-sm">
            <Layers size={11} /> Our Portfolio
          </span>
          <h2 className="text-[clamp(23px,2.7vw,39px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Successful Website Projects &amp;{' '}
            <span className="text-gradient-blue">Digital Solutions</span>
          </h2>
          <p className="text-[15px] text-slate-500 leading-relaxed max-w-xl mx-auto">
            Our portfolio spans every major industry — each website crafted for performance, clarity, and growth.
          </p>
        </div>

        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {projects.map((p, i) => (
            <div key={p.title} className={`delay-${(i % 3) + 1}`}>
              <ProjectCard {...p} />
            </div>
          ))}
        </div>

        <div className="reveal text-center space-y-2">
          <p className="text-[14px] text-slate-500">
            We are recognised among the{' '}
            best web design and development companies in Thanjavur
            {' '}for delivering visually appealing and high-performing websites.
          </p>
          <p className="text-[14px] text-slate-500">
            We are one of the{' '}
            top web development firms in Thanjavur
            {' '}with a strong focus on user experience and conversion optimization.
          </p>
        </div>

      </div>
    </section>
  )
}
