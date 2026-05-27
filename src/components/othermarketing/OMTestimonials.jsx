import { useState } from 'react'
import { Star, MessageSquare, Quote, CheckCircle2 } from 'lucide-react'

const testimonials = [
  {
    text: 'Ara Discover Marketing helped us improve customer engagement through strategic email and SMS campaigns. Our open rates jumped significantly and we saw a measurable increase in repeat customers within the first month.',
    name: 'Ramesh Kumar',
    role: 'CEO, RetailMart',
    company: 'Retail Business',
    initials: 'RK',
    color: '#2563eb',
    metric: '3x',
    metricLabel: 'Engagement Boost',
  },
  {
    text: 'One of the trusted providers of influencer marketing in Thanjavur with creative campaign strategies and excellent support. Their influencer partnerships brought genuine audience engagement and boosted our brand visibility.',
    name: 'Priya Sundaram',
    role: 'Brand Manager, FashionHub',
    company: 'Fashion & Lifestyle',
    initials: 'PS',
    color: '#7c3aed',
    metric: '41%',
    metricLabel: 'Audience Growth',
  },
  {
    text: 'Their expertise in email marketing and advertising in Thanjavur significantly improved our customer retention and conversions. The automated workflows they built saved us time and generated consistent lead flow every week.',
    name: 'Vijay Anand',
    role: 'Director, MedPlus Clinics',
    company: 'Healthcare Services',
    initials: 'VA',
    color: '#0891b2',
    metric: '40%',
    metricLabel: 'Cost Reduction',
  },
]

export default function OMTestimonials() {
  const [active, setActive] = useState(0)
  const t = testimonials[active]

  return (
    <section className="relative py-20 overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.04) 1.5px,transparent 1.5px)', backgroundSize: '36px 36px' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-7">

        {/* Header */}
        <div className="text-center mb-10 reveal">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600
            border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4">
            <MessageSquare size={11} /> Client Testimonials
          </span>
          <h2 className="text-[clamp(22px,3vw,40px)] font-bold text-slate-900 leading-[1.1] tracking-tight">
            What Clients Say About Our{' '}
            <span style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Marketing Services
            </span>
          </h2>
          <p className="text-[14px] text-slate-500 mt-3 max-w-lg mx-auto">
            Real results from businesses across Thanjavur that trusted Ara Discover Marketing for their campaigns.
          </p>
        </div>

        {/* Split layout */}
        <div className="reveal flex flex-col lg:flex-row gap-8 max-w-[920px] mx-auto items-stretch">

          {/* Featured testimonial */}
          <div className="flex-1 min-w-0 lg:max-w-[560px]">
            <div
              key={active}
              className="relative rounded-2xl overflow-hidden bg-white border h-full"
              style={{ borderColor: t.color + '25', boxShadow: `0 12px 36px ${t.color}10, 0 2px 10px rgba(0,0,0,0.05)` }}
            >
              <div className="h-1 w-full" style={{ background: `linear-gradient(90deg,${t.color},${t.color}44)` }} />
              <div className="p-6 lg:p-8">
                <div className="flex items-start justify-between mb-3">
                  <Quote size={26} style={{ color: t.color, opacity: 0.16 }} />
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(s => <Star key={s} size={11} style={{ color: '#f59e0b', fill: '#f59e0b' }} />)}
                  </div>
                </div>
                <p className="text-[14px] lg:text-[15px] text-slate-700 italic leading-[1.72] font-light mb-5">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="h-px mb-4" style={{ background: `linear-gradient(90deg,${t.color}30,transparent)` }} />
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center text-[12px] font-black flex-shrink-0"
                      style={{ background: `linear-gradient(135deg,${t.color},${t.color}bb)`, color: 'white', boxShadow: `0 3px 10px ${t.color}28` }}>
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-slate-900">{t.name}</p>
                      <p className="text-[11px] text-slate-400">{t.role}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 text-center px-3 py-1.5 rounded-xl"
                    style={{ background: t.color + '0e', border: `1.5px solid ${t.color}20` }}>
                    <p className="text-[17px] font-black leading-none" style={{ color: t.color }}>{t.metric}</p>
                    <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">{t.metricLabel}</p>
                  </div>
                </div>
                <div className="mt-3">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-lg"
                    style={{ background: t.color + '0e', color: t.color, border: `1px solid ${t.color}20` }}>
                    <CheckCircle2 size={9} /> {t.company}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Selector panel */}
          <div className="lg:w-[320px] flex-shrink-0 flex flex-col gap-4">
            {testimonials.map(({ name, role, initials, color, metric, metricLabel, text }, i) => {
              const isActive = active === i
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => setActive(i)}
                  className="group relative text-left rounded-xl p-5 border transition-all duration-300 overflow-hidden"
                  style={isActive
                    ? { background: `linear-gradient(135deg,white 0%,${color}06 100%)`, borderColor: `${color}28`, boxShadow: `0 6px 20px ${color}10` }
                    : { background: 'white', borderColor: '#f1f5f9', boxShadow: '0 1px 6px rgba(0,0,0,0.03)' }}
                >
                  <div className="absolute top-0 left-0 bottom-0 w-0.5 rounded-l-xl transition-all duration-300"
                    style={{ background: isActive ? `linear-gradient(180deg,${color},${color}44)` : 'transparent' }} />
                  <div className="flex items-center gap-2 mb-1.5 pl-1">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-black flex-shrink-0 transition-all duration-300"
                      style={isActive ? { background: `linear-gradient(135deg,${color},${color}bb)`, color: 'white' } : { background: color + '12', color }}>
                      {initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11.5px] font-bold truncate" style={{ color: isActive ? '#0f172a' : '#64748b' }}>{name}</p>
                      <p className="text-[10px] text-slate-400 truncate">{role}</p>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <p className="text-[13px] font-black leading-none" style={{ color: isActive ? color : '#cbd5e1' }}>{metric}</p>
                      <p className="text-[8px] uppercase tracking-wider text-slate-400">{metricLabel}</p>
                    </div>
                  </div>
                  <p className="text-[11px] leading-[1.55] pl-1 line-clamp-2" style={{ color: isActive ? '#475569' : '#94a3b8' }}>
                    {text}
                  </p>
                  <div className="flex gap-0.5 mt-1.5 pl-1">
                    {[1,2,3,4,5].map(s => (
                      <Star key={s} size={8}
                        style={isActive ? { color: '#f59e0b', fill: '#f59e0b' } : { color: '#e2e8f0', fill: '#e2e8f0' }} />
                    ))}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
