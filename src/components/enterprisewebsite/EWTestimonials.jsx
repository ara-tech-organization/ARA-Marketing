import { Quote, Star, Users } from 'lucide-react'

const testimonials = [
  {
    quote: 'ARA Discover Marketing transformed our enterprise website into a high-performance, AI-driven platform. Their team is professional, innovative, and reliable. A trusted enterprise web development agency in Thanjavur.',
    name: 'Ramesh',
    role: 'CEO',
    initials: 'R',
    color: '#2563eb',
    stars: 5,
  },
  {
    quote: 'We partnered with ARA Discover Marketing for our enterprise website development company in Thanjavur projects. The result exceeded our expectations, with scalable design and seamless AI integration.',
    name: 'Priya',
    role: 'Head of Digital Strategy',
    initials: 'P',
    color: '#7c3aed',
    stars: 5,
  },
  {
    quote: 'For our enterprise website development in Thanjavur, ARA Discover Marketing provided a solution beyond expectations with scalability and intelligent AI features that transformed our business operations.',
    name: 'Praveen',
    role: 'Head of Digital Strategy',
    initials: 'Pr',
    color: '#0891b2',
    stars: 5,
  },
]

export default function EWTestimonials() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden bg-white">

      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.045) 1.5px, transparent 1.5px)', backgroundSize: '34px 34px' }} />

      {/* Rings — lg only */}
      <div className="hidden lg:block absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ border: '1.5px solid rgba(37,99,235,0.07)', animation: 'spin 55s linear infinite' }} />
      <div className="hidden lg:block absolute -bottom-16 -right-16 w-[260px] h-[260px] rounded-full pointer-events-none"
        style={{ border: '1.5px solid rgba(124,58,237,0.07)', animation: 'spin 40s linear infinite reverse' }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-14 reveal">
          <span className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-4 sm:mb-5 text-purple-600"
            style={{ background: '#f5f3ff', border: '1px solid #ddd6fe' }}>
            <Users size={9} /> Client Success Stories
          </span>
          <h2 className="text-[clamp(20px,4vw,44px)] font-bold text-slate-900 leading-[1.10] tracking-tight mb-3 sm:mb-4">
            Our Clients{' '}
            <span style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Speak
            </span>
          </h2>
          <p className="text-[12.5px] sm:text-[14px] lg:text-[15px] text-slate-500 leading-[1.85] max-w-xl mx-auto px-2 sm:px-0">
            Enterprises across Thanjavur trust us with their most critical digital projects. Here's what they say.
          </p>
        </div>

        {/* ── Cards: 1col xs → 2col md → 3col lg ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 reveal">
          {testimonials.map(({ quote, name, role, initials, color, stars }, i) => (
            <div key={name + i}
              className="group relative rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 transition-all duration-300 cursor-default flex flex-col"
              style={{ border: '1.5px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 18px 44px ${color}18`
                e.currentTarget.style.borderColor = `${color}40`
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)'
                e.currentTarget.style.borderColor = '#e2e8f0'
                e.currentTarget.style.transform = 'none'
              }}>

              {/* Stars + quote icon */}
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="flex gap-0.5 sm:gap-1">
                  {Array.from({ length: stars }).map((_, j) => (
                    <Star key={j} size={11} style={{ color: '#f59e0b', fill: '#f59e0b' }} />
                  ))}
                </div>
                <Quote size={28} sm:size={34} style={{ color: `${color}22`, flexShrink: 0 }} />
              </div>

              {/* Quote */}
              <p className="text-[12px] sm:text-[13px] lg:text-[13.5px] text-slate-600 leading-[1.82] mb-4 sm:mb-6 italic flex-1">
                "{quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 sm:pt-5"
                style={{ borderTop: `1px solid ${color}18` }}>
                <div className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-[15px]"
                  style={{ background: '#dbeafe', color: '#2563eb' }}>
                  {name.charAt(0)}
                </div>
                <div>
                  <p className="text-[12.5px] sm:text-[13px] font-bold text-slate-800">{name}</p>
                  <p className="text-[10.5px] sm:text-[11px] text-slate-400 font-medium">{role}</p>
                </div>
              </div>

              {/* Bottom color line on hover */}
              <div className="absolute bottom-0 left-4 right-4 sm:left-6 sm:right-6 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-center"
                style={{ background: `linear-gradient(90deg,transparent,${color},transparent)` }} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
