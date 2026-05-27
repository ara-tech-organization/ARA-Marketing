import { Star, MessageSquare, Quote, CheckCircle2, TrendingUp } from 'lucide-react'

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
    channel: 'Email & SMS',
  },
  {
    text: 'One of the trusted providers of influencer marketing in Thanjavur with creative campaign strategies and excellent support. Their influencer partnerships brought genuine audience engagement and boosted our brand visibility significantly.',
    name: 'Priya Sundaram',
    role: 'Brand Manager, FashionHub',
    company: 'Fashion & Lifestyle',
    initials: 'PS',
    color: '#7c3aed',
    metric: '41%',
    metricLabel: 'Audience Growth',
    channel: 'Influencer Marketing',
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
    channel: 'Email Marketing',
  },
]

export default function OMTestimonials() {
  return (
    <section className="relative py-20 overflow-hidden"
      style={{ background: 'linear-gradient(160deg,#f0f9ff 0%,#eff6ff 55%,#f5f3ff 100%)' }}>

      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.05) 1.5px,transparent 1.5px)', backgroundSize: '34px 34px' }} />
      <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(167,139,250,0.12) 0%,transparent 65%)' }} />
      <div className="absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.08) 0%,transparent 65%)' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-7">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 reveal">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-blue-600
              border border-blue-100 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4 shadow-sm">
              <MessageSquare size={11} /> Client Testimonials
            </span>
            <h2 className="text-[clamp(24px,3.5vw,44px)] font-bold text-slate-900 leading-[1.1] tracking-tight">
              What Clients Say About{' '}
              <span style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Our Services
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-100 shadow-sm">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(s => <Star key={s} size={11} style={{ color: '#f59e0b', fill: '#f59e0b' }} />)}
              </div>
              <span className="text-[12px] font-bold text-slate-700">5.0 Rating</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-100 shadow-sm">
              <TrendingUp size={13} className="text-emerald-500" />
              <span className="text-[12px] font-bold text-slate-700">98% Satisfied</span>
            </div>
          </div>
        </div>

        {/* 3-column card grid */}
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {testimonials.map(({ text, name, role, company, initials, color, metric, metricLabel, channel }) => (
            <div key={name}
              className="group relative flex flex-col rounded-3xl bg-white border border-slate-100 overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
              style={{ boxShadow: '0 4px 20px rgba(37,99,235,0.06)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = color + '28'; e.currentTarget.style.boxShadow = `0 20px 48px ${color}12` }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#f1f5f9'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.06)' }}>

              {/* Coloured top bar */}
              <div className="h-1 w-full" style={{ background: `linear-gradient(90deg,${color},${color}55)` }} />

              <div className="flex flex-col flex-1 p-6">

                {/* Channel tag + stars */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                    style={{ background: color + '12', color, border: `1px solid ${color}20` }}>
                    {channel}
                  </span>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(s => <Star key={s} size={9} style={{ color: '#f59e0b', fill: '#f59e0b' }} />)}
                  </div>
                </div>

                {/* Quote icon */}
                <Quote size={24} style={{ color, opacity: 0.15 }} className="mb-3" />

                {/* Testimonial text */}
                <p className="text-[13px] text-slate-600 leading-[1.78] flex-1 mb-5">
                  &ldquo;{text}&rdquo;
                </p>

                {/* Divider */}
                <div className="h-px mb-4" style={{ background: `linear-gradient(90deg,${color}20,transparent)` }} />

                {/* Author row */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center text-[11px] font-bold flex-shrink-0 text-white"
                      style={{ background: `linear-gradient(135deg,${color},${color}bb)` }}>
                      {initials}
                    </div>
                    <div>
                      <p className="text-[12.5px] font-bold text-slate-900 leading-none">{name}</p>
                      <p className="text-[10.5px] text-slate-400 mt-0.5">{role}</p>
                    </div>
                  </div>
                  {/* Metric badge */}
                  <div className="flex-shrink-0 text-center px-3 py-2 rounded-xl"
                    style={{ background: color + '0e', border: `1px solid ${color}18` }}>
                    <p className="text-[16px] font-bold leading-none" style={{ color }}>{metric}</p>
                    <p className="text-[8.5px] font-bold uppercase tracking-wide text-slate-400 mt-0.5">{metricLabel}</p>
                  </div>
                </div>

                {/* Company tag */}
                <div className="mt-3">
                  <span className="inline-flex items-center gap-1 text-[9.5px] font-bold px-2 py-1 rounded-lg"
                    style={{ background: color + '0e', color, border: `1px solid ${color}18` }}>
                    <CheckCircle2 size={8} /> {company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust strip */}
        <div className="reveal flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 px-4 sm:px-6 py-4 rounded-2xl bg-white border border-slate-100"
          style={{ boxShadow: '0 4px 16px rgba(37,99,235,0.06)' }}>
          {[
            { label: '500+ Campaigns Delivered', color: '#2563eb' },
            { label: '98% Client Satisfaction',  color: '#7c3aed' },
            { label: 'Trusted in Thanjavur',     color: '#0891b2' },
          ].map(({ label, color }, i) => (
            <div key={label} className="flex items-center gap-2">
              {i > 0 && <span className="hidden sm:block w-px h-4 bg-slate-200" />}
              <CheckCircle2 size={13} style={{ color }} />
              <span className="text-[12px] font-bold text-slate-700">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
